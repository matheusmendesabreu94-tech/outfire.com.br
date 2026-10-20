(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function y0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Fu={exports:{}},no={},ku={exports:{}},At={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm;function kx(){if(rm)return At;rm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.iterator;function y(B){return B===null||typeof B!="object"?null:(B=_&&B[_]||B["@@iterator"],typeof B=="function"?B:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,N={};function M(B,le,_e){this.props=B,this.context=le,this.refs=N,this.updater=_e||S}M.prototype.isReactComponent={},M.prototype.setState=function(B,le){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,le,"setState")},M.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function v(){}v.prototype=M.prototype;function T(B,le,_e){this.props=B,this.context=le,this.refs=N,this.updater=_e||S}var D=T.prototype=new v;D.constructor=T,A(D,M.prototype),D.isPureReactComponent=!0;var C=Array.isArray,I=Object.prototype.hasOwnProperty,L={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function G(B,le,_e){var O,Te={},te=null,oe=null;if(le!=null)for(O in le.ref!==void 0&&(oe=le.ref),le.key!==void 0&&(te=""+le.key),le)I.call(le,O)&&!F.hasOwnProperty(O)&&(Te[O]=le[O]);var ve=arguments.length-2;if(ve===1)Te.children=_e;else if(1<ve){for(var Be=Array(ve),he=0;he<ve;he++)Be[he]=arguments[he+2];Te.children=Be}if(B&&B.defaultProps)for(O in ve=B.defaultProps,ve)Te[O]===void 0&&(Te[O]=ve[O]);return{$$typeof:s,type:B,key:te,ref:oe,props:Te,_owner:L.current}}function b(B,le){return{$$typeof:s,type:B.type,key:le,ref:B.ref,props:B.props,_owner:B._owner}}function P(B){return typeof B=="object"&&B!==null&&B.$$typeof===s}function j(B){var le={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(_e){return le[_e]})}var K=/\/+/g;function Q(B,le){return typeof B=="object"&&B!==null&&B.key!=null?j(""+B.key):le.toString(36)}function de(B,le,_e,O,Te){var te=typeof B;(te==="undefined"||te==="boolean")&&(B=null);var oe=!1;if(B===null)oe=!0;else switch(te){case"string":case"number":oe=!0;break;case"object":switch(B.$$typeof){case s:case e:oe=!0}}if(oe)return oe=B,Te=Te(oe),B=O===""?"."+Q(oe,0):O,C(Te)?(_e="",B!=null&&(_e=B.replace(K,"$&/")+"/"),de(Te,le,_e,"",function(he){return he})):Te!=null&&(P(Te)&&(Te=b(Te,_e+(!Te.key||oe&&oe.key===Te.key?"":(""+Te.key).replace(K,"$&/")+"/")+B)),le.push(Te)),1;if(oe=0,O=O===""?".":O+":",C(B))for(var ve=0;ve<B.length;ve++){te=B[ve];var Be=O+Q(te,ve);oe+=de(te,le,_e,Be,Te)}else if(Be=y(B),typeof Be=="function")for(B=Be.call(B),ve=0;!(te=B.next()).done;)te=te.value,Be=O+Q(te,ve++),oe+=de(te,le,_e,Be,Te);else if(te==="object")throw le=String(B),Error("Objects are not valid as a React child (found: "+(le==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":le)+"). If you meant to render a collection of children, use an array instead.");return oe}function ue(B,le,_e){if(B==null)return B;var O=[],Te=0;return de(B,O,"","",function(te){return le.call(_e,te,Te++)}),O}function re(B){if(B._status===-1){var le=B._result;le=le(),le.then(function(_e){(B._status===0||B._status===-1)&&(B._status=1,B._result=_e)},function(_e){(B._status===0||B._status===-1)&&(B._status=2,B._result=_e)}),B._status===-1&&(B._status=0,B._result=le)}if(B._status===1)return B._result.default;throw B._result}var Z={current:null},Y={transition:null},pe={ReactCurrentDispatcher:Z,ReactCurrentBatchConfig:Y,ReactCurrentOwner:L};function se(){throw Error("act(...) is not supported in production builds of React.")}return At.Children={map:ue,forEach:function(B,le,_e){ue(B,function(){le.apply(this,arguments)},_e)},count:function(B){var le=0;return ue(B,function(){le++}),le},toArray:function(B){return ue(B,function(le){return le})||[]},only:function(B){if(!P(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},At.Component=M,At.Fragment=t,At.Profiler=o,At.PureComponent=T,At.StrictMode=r,At.Suspense=p,At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,At.act=se,At.cloneElement=function(B,le,_e){if(B==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+B+".");var O=A({},B.props),Te=B.key,te=B.ref,oe=B._owner;if(le!=null){if(le.ref!==void 0&&(te=le.ref,oe=L.current),le.key!==void 0&&(Te=""+le.key),B.type&&B.type.defaultProps)var ve=B.type.defaultProps;for(Be in le)I.call(le,Be)&&!F.hasOwnProperty(Be)&&(O[Be]=le[Be]===void 0&&ve!==void 0?ve[Be]:le[Be])}var Be=arguments.length-2;if(Be===1)O.children=_e;else if(1<Be){ve=Array(Be);for(var he=0;he<Be;he++)ve[he]=arguments[he+2];O.children=ve}return{$$typeof:s,type:B.type,key:Te,ref:te,props:O,_owner:oe}},At.createContext=function(B){return B={$$typeof:u,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},B.Provider={$$typeof:l,_context:B},B.Consumer=B},At.createElement=G,At.createFactory=function(B){var le=G.bind(null,B);return le.type=B,le},At.createRef=function(){return{current:null}},At.forwardRef=function(B){return{$$typeof:d,render:B}},At.isValidElement=P,At.lazy=function(B){return{$$typeof:x,_payload:{_status:-1,_result:B},_init:re}},At.memo=function(B,le){return{$$typeof:g,type:B,compare:le===void 0?null:le}},At.startTransition=function(B){var le=Y.transition;Y.transition={};try{B()}finally{Y.transition=le}},At.unstable_act=se,At.useCallback=function(B,le){return Z.current.useCallback(B,le)},At.useContext=function(B){return Z.current.useContext(B)},At.useDebugValue=function(){},At.useDeferredValue=function(B){return Z.current.useDeferredValue(B)},At.useEffect=function(B,le){return Z.current.useEffect(B,le)},At.useId=function(){return Z.current.useId()},At.useImperativeHandle=function(B,le,_e){return Z.current.useImperativeHandle(B,le,_e)},At.useInsertionEffect=function(B,le){return Z.current.useInsertionEffect(B,le)},At.useLayoutEffect=function(B,le){return Z.current.useLayoutEffect(B,le)},At.useMemo=function(B,le){return Z.current.useMemo(B,le)},At.useReducer=function(B,le,_e){return Z.current.useReducer(B,le,_e)},At.useRef=function(B){return Z.current.useRef(B)},At.useState=function(B){return Z.current.useState(B)},At.useSyncExternalStore=function(B,le,_e){return Z.current.useSyncExternalStore(B,le,_e)},At.useTransition=function(){return Z.current.useTransition()},At.version="18.3.1",At}var sm;function vf(){return sm||(sm=1,ku.exports=kx()),ku.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var am;function Bx(){if(am)return no;am=1;var s=vf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,p,g){var x,_={},y=null,S=null;g!==void 0&&(y=""+g),p.key!==void 0&&(y=""+p.key),p.ref!==void 0&&(S=p.ref);for(x in p)r.call(p,x)&&!l.hasOwnProperty(x)&&(_[x]=p[x]);if(d&&d.defaultProps)for(x in p=d.defaultProps,p)_[x]===void 0&&(_[x]=p[x]);return{$$typeof:e,type:d,key:y,ref:S,props:_,_owner:o.current}}return no.Fragment=t,no.jsx=u,no.jsxs=u,no}var om;function zx(){return om||(om=1,Fu.exports=Bx()),Fu.exports}var h=zx(),Qe=vf();const jx=y0(Qe);var Sl={},Bu={exports:{}},Qn={},zu={exports:{}},ju={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm;function Vx(){return lm||(lm=1,(function(s){function e(Y,pe){var se=Y.length;Y.push(pe);e:for(;0<se;){var B=se-1>>>1,le=Y[B];if(0<o(le,pe))Y[B]=pe,Y[se]=le,se=B;else break e}}function t(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var pe=Y[0],se=Y.pop();if(se!==pe){Y[0]=se;e:for(var B=0,le=Y.length,_e=le>>>1;B<_e;){var O=2*(B+1)-1,Te=Y[O],te=O+1,oe=Y[te];if(0>o(Te,se))te<le&&0>o(oe,Te)?(Y[B]=oe,Y[te]=se,B=te):(Y[B]=Te,Y[O]=se,B=O);else if(te<le&&0>o(oe,se))Y[B]=oe,Y[te]=se,B=te;else break e}}return pe}function o(Y,pe){var se=Y.sortIndex-pe.sortIndex;return se!==0?se:Y.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var p=[],g=[],x=1,_=null,y=3,S=!1,A=!1,N=!1,M=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(Y){for(var pe=t(g);pe!==null;){if(pe.callback===null)r(g);else if(pe.startTime<=Y)r(g),pe.sortIndex=pe.expirationTime,e(p,pe);else break;pe=t(g)}}function C(Y){if(N=!1,D(Y),!A)if(t(p)!==null)A=!0,re(I);else{var pe=t(g);pe!==null&&Z(C,pe.startTime-Y)}}function I(Y,pe){A=!1,N&&(N=!1,v(G),G=-1),S=!0;var se=y;try{for(D(pe),_=t(p);_!==null&&(!(_.expirationTime>pe)||Y&&!j());){var B=_.callback;if(typeof B=="function"){_.callback=null,y=_.priorityLevel;var le=B(_.expirationTime<=pe);pe=s.unstable_now(),typeof le=="function"?_.callback=le:_===t(p)&&r(p),D(pe)}else r(p);_=t(p)}if(_!==null)var _e=!0;else{var O=t(g);O!==null&&Z(C,O.startTime-pe),_e=!1}return _e}finally{_=null,y=se,S=!1}}var L=!1,F=null,G=-1,b=5,P=-1;function j(){return!(s.unstable_now()-P<b)}function K(){if(F!==null){var Y=s.unstable_now();P=Y;var pe=!0;try{pe=F(!0,Y)}finally{pe?Q():(L=!1,F=null)}}else L=!1}var Q;if(typeof T=="function")Q=function(){T(K)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,ue=de.port2;de.port1.onmessage=K,Q=function(){ue.postMessage(null)}}else Q=function(){M(K,0)};function re(Y){F=Y,L||(L=!0,Q())}function Z(Y,pe){G=M(function(){Y(s.unstable_now())},pe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Y){Y.callback=null},s.unstable_continueExecution=function(){A||S||(A=!0,re(I))},s.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<Y?Math.floor(1e3/Y):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function(Y){switch(y){case 1:case 2:case 3:var pe=3;break;default:pe=y}var se=y;y=pe;try{return Y()}finally{y=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Y,pe){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var se=y;y=Y;try{return pe()}finally{y=se}},s.unstable_scheduleCallback=function(Y,pe,se){var B=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?B+se:B):se=B,Y){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=se+le,Y={id:x++,callback:pe,priorityLevel:Y,startTime:se,expirationTime:le,sortIndex:-1},se>B?(Y.sortIndex=se,e(g,Y),t(p)===null&&Y===t(g)&&(N?(v(G),G=-1):N=!0,Z(C,se-B))):(Y.sortIndex=le,e(p,Y),A||S||(A=!0,re(I))),Y},s.unstable_shouldYield=j,s.unstable_wrapCallback=function(Y){var pe=y;return function(){var se=y;y=pe;try{return Y.apply(this,arguments)}finally{y=se}}}})(ju)),ju}var cm;function Gx(){return cm||(cm=1,zu.exports=Vx()),zu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var um;function Hx(){if(um)return Qn;um=1;var s=vf(),e=Gx();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},_={};function y(n){return p.call(_,n)?!0:p.call(x,n)?!1:g.test(n)?_[n]=!0:(x[n]=!0,!1)}function S(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function A(n,i,a,c){if(i===null||typeof i>"u"||S(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function N(n,i,a,c,f,m,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=w}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){M[n]=new N(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];M[i]=new N(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){M[n]=new N(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){M[n]=new N(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){M[n]=new N(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){M[n]=new N(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){M[n]=new N(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){M[n]=new N(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){M[n]=new N(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function T(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,T);M[i]=new N(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,T);M[i]=new N(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,T);M[i]=new N(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){M[n]=new N(n,1,!1,n.toLowerCase(),null,!1,!1)}),M.xlinkHref=new N("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){M[n]=new N(n,1,!1,n.toLowerCase(),null,!0,!0)});function D(n,i,a,c){var f=M.hasOwnProperty(i)?M[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(A(i,a,f,c)&&(a=null),c||f===null?y(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,c=f.attributeNamespace,a===null?n.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),L=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),j=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),ue=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),Z=Symbol.for("react.offscreen"),Y=Symbol.iterator;function pe(n){return n===null||typeof n!="object"?null:(n=Y&&n[Y]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,B;function le(n){if(B===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);B=i&&i[1]||""}return`
`+B+n}var _e=!1;function O(n,i){if(!n||_e)return"";_e=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ce){var c=ce}Reflect.construct(n,[],i)}else{try{i.call()}catch(ce){c=ce}n.call(i.prototype)}else{try{throw Error()}catch(ce){c=ce}n()}}catch(ce){if(ce&&c&&typeof ce.stack=="string"){for(var f=ce.stack.split(`
`),m=c.stack.split(`
`),w=f.length-1,k=m.length-1;1<=w&&0<=k&&f[w]!==m[k];)k--;for(;1<=w&&0<=k;w--,k--)if(f[w]!==m[k]){if(w!==1||k!==1)do if(w--,k--,0>k||f[w]!==m[k]){var V=`
`+f[w].replace(" at new "," at ");return n.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",n.displayName)),V}while(1<=w&&0<=k);break}}}finally{_e=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?le(n):""}function Te(n){switch(n.tag){case 5:return le(n.type);case 16:return le("Lazy");case 13:return le("Suspense");case 19:return le("SuspenseList");case 0:case 2:case 15:return n=O(n.type,!1),n;case 11:return n=O(n.type.render,!1),n;case 1:return n=O(n.type,!0),n;default:return""}}function te(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case L:return"Portal";case b:return"Profiler";case G:return"StrictMode";case Q:return"Suspense";case de:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case j:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case K:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ue:return i=n.displayName||null,i!==null?i:te(n.type)||"Memo";case re:i=n._payload,n=n._init;try{return te(n(i))}catch{}}return null}function oe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(i);case 8:return i===G?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ve(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function he(n){var i=Be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(w){c=""+w,m.call(this,w)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Ae(n){n._valueTracker||(n._valueTracker=he(n))}function We(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Be(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function ht(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function St(n,i){var a=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Dt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=ve(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function pt(n,i){i=i.checked,i!=null&&D(n,"checked",i,!1)}function jt(n,i){pt(n,i);var a=ve(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Vt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Vt(n,i.type,ve(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function z(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Vt(n,i,a){(i!=="number"||ht(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var vt=Array.isArray;function Et(n,i,a,c){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&c&&(n[a].defaultSelected=!0)}else{for(a=""+ve(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function Ve(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function U(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(vt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:ve(a)}}function E(n,i){var a=ve(i.value),c=ve(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function X(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function me(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xe(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?me(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var fe,$e=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(fe=fe||document.createElement("div"),fe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=fe.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ne(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ge={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},it=["Webkit","ms","Moz","O"];Object.keys(Ge).forEach(function(n){it.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ge[i]=Ge[n]})});function Me(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ge.hasOwnProperty(n)&&Ge[n]?(""+i).trim():i+"px"}function Ce(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=Me(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,f):n[a]=f}}var Xe=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qe(n,i){if(i){if(Xe[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Le(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gt=null;function H(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Oe=null,be=null,Ue=null;function Ee(n){if(n=ja(n)){if(typeof Oe!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Oo(i),Oe(n.stateNode,n.type,i))}}function ge(n){be?Ue?Ue.push(n):Ue=[n]:be=n}function De(){if(be){var n=be,i=Ue;if(Ue=be=null,Ee(n),i)for(n=0;n<i.length;n++)Ee(i[n])}}function ot(n,i){return n(i)}function mt(){}var Ct=!1;function cn(n,i,a){if(Ct)return n(i,a);Ct=!0;try{return ot(n,i,a)}finally{Ct=!1,(be!==null||Ue!==null)&&(mt(),De())}}function Cn(n,i){var a=n.stateNode;if(a===null)return null;var c=Oo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Kr=!1;if(d)try{var wi={};Object.defineProperty(wi,"passive",{get:function(){Kr=!0}}),window.addEventListener("test",wi,wi),window.removeEventListener("test",wi,wi)}catch{Kr=!1}function Sr(n,i,a,c,f,m,w,k,V){var ce=Array.prototype.slice.call(arguments,3);try{i.apply(a,ce)}catch(Se){this.onError(Se)}}var Fi=!1,Ji=null,bi=!1,Xn=null,Mr={onError:function(n){Fi=!0,Ji=n}};function Zr(n,i,a,c,f,m,w,k,V){Fi=!1,Ji=null,Sr.apply(Mr,arguments)}function Qr(n,i,a,c,f,m,w,k,V){if(Zr.apply(this,arguments),Fi){if(Fi){var ce=Ji;Fi=!1,Ji=null}else throw Error(t(198));bi||(bi=!0,Xn=ce)}}function jn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Er(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ki(n){if(jn(n)!==n)throw Error(t(188))}function Vn(n){var i=n.alternate;if(!i){if(i=jn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var f=a.return;if(f===null)break;var m=f.alternate;if(m===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===a)return ki(f),n;if(m===c)return ki(f),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=f,c=m;else{for(var w=!1,k=f.child;k;){if(k===a){w=!0,a=f,c=m;break}if(k===c){w=!0,c=f,a=m;break}k=k.sibling}if(!w){for(k=m.child;k;){if(k===a){w=!0,a=m,c=f;break}if(k===c){w=!0,c=m,a=f;break}k=k.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Jr(n){return n=Vn(n),n!==null?es(n):null}function es(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=es(n);if(i!==null)return i;n=n.sibling}return null}var Ps=e.unstable_scheduleCallback,ts=e.unstable_cancelCallback,ba=e.unstable_shouldYield,ns=e.unstable_requestPaint,qt=e.unstable_now,R=e.unstable_getCurrentPriorityLevel,q=e.unstable_ImmediatePriority,ae=e.unstable_UserBlockingPriority,ne=e.unstable_NormalPriority,J=e.unstable_LowPriority,Ie=e.unstable_IdlePriority,ke=null,Pe=null;function ze(n){if(Pe&&typeof Pe.onCommitFiberRoot=="function")try{Pe.onCommitFiberRoot(ke,n,void 0,(n.current.flags&128)===128)}catch{}}var je=Math.clz32?Math.clz32:_t,rt=Math.log,nt=Math.LN2;function _t(n){return n>>>=0,n===0?32:31-(rt(n)/nt|0)|0}var Rt=64,Gt=4194304;function zt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function It(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,f=n.suspendedLanes,m=n.pingedLanes,w=a&268435455;if(w!==0){var k=w&~f;k!==0?c=zt(k):(m&=w,m!==0&&(c=zt(m)))}else w=a&~f,w!==0?c=zt(w):m!==0&&(c=zt(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,m=i&-i,f>=m||f===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-je(i),f=1<<a,c|=n[a],i&=~f;return c}function tt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lt(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes;0<m;){var w=31-je(m),k=1<<w,V=f[w];V===-1?((k&a)===0||(k&c)!==0)&&(f[w]=tt(k,i)):V<=i&&(n.expiredLanes|=k),m&=~k}}function Tt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function yn(){var n=Rt;return Rt<<=1,(Rt&4194240)===0&&(Rt=64),n}function pi(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function nn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-je(i),n[i]=a}function mi(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-je(a),m=1<<f;i[f]=0,c[f]=-1,n[f]=-1,a&=~m}}function Nt(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-je(a),f=1<<c;f&i|n[c]&i&&(n[c]|=i),a&=~f}}var ut=0;function Sn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var an,on,er,si,Ut,lt=!1,Dn=[],Zt=null,et=null,Xt=null,un=new Map,Ta=new Map,wr=[],ag="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jf(n,i){switch(n){case"focusin":case"focusout":Zt=null;break;case"dragenter":case"dragleave":et=null;break;case"mouseover":case"mouseout":Xt=null;break;case"pointerover":case"pointerout":un.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ta.delete(i.pointerId)}}function Aa(n,i,a,c,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[f]},i!==null&&(i=ja(i),i!==null&&on(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function og(n,i,a,c,f){switch(i){case"focusin":return Zt=Aa(Zt,n,i,a,c,f),!0;case"dragenter":return et=Aa(et,n,i,a,c,f),!0;case"mouseover":return Xt=Aa(Xt,n,i,a,c,f),!0;case"pointerover":var m=f.pointerId;return un.set(m,Aa(un.get(m)||null,n,i,a,c,f)),!0;case"gotpointercapture":return m=f.pointerId,Ta.set(m,Aa(Ta.get(m)||null,n,i,a,c,f)),!0}return!1}function Vf(n){var i=is(n.target);if(i!==null){var a=jn(i);if(a!==null){if(i=a.tag,i===13){if(i=Er(a),i!==null){n.blockedOn=i,Ut(n.priority,function(){er(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Mo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=uc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);gt=c,a.target.dispatchEvent(c),gt=null}else return i=ja(a),i!==null&&on(i),n.blockedOn=a,!1;i.shift()}return!0}function Gf(n,i,a){Mo(n)&&a.delete(i)}function lg(){lt=!1,Zt!==null&&Mo(Zt)&&(Zt=null),et!==null&&Mo(et)&&(et=null),Xt!==null&&Mo(Xt)&&(Xt=null),un.forEach(Gf),Ta.forEach(Gf)}function Ca(n,i){n.blockedOn===i&&(n.blockedOn=null,lt||(lt=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,lg)))}function Ra(n){function i(f){return Ca(f,n)}if(0<Dn.length){Ca(Dn[0],n);for(var a=1;a<Dn.length;a++){var c=Dn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Zt!==null&&Ca(Zt,n),et!==null&&Ca(et,n),Xt!==null&&Ca(Xt,n),un.forEach(i),Ta.forEach(i),a=0;a<wr.length;a++)c=wr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<wr.length&&(a=wr[0],a.blockedOn===null);)Vf(a),a.blockedOn===null&&wr.shift()}var Ds=C.ReactCurrentBatchConfig,Eo=!0;function cg(n,i,a,c){var f=ut,m=Ds.transition;Ds.transition=null;try{ut=1,cc(n,i,a,c)}finally{ut=f,Ds.transition=m}}function ug(n,i,a,c){var f=ut,m=Ds.transition;Ds.transition=null;try{ut=4,cc(n,i,a,c)}finally{ut=f,Ds.transition=m}}function cc(n,i,a,c){if(Eo){var f=uc(n,i,a,c);if(f===null)Ac(n,i,c,wo,a),jf(n,c);else if(og(f,n,i,a,c))c.stopPropagation();else if(jf(n,c),i&4&&-1<ag.indexOf(n)){for(;f!==null;){var m=ja(f);if(m!==null&&an(m),m=uc(n,i,a,c),m===null&&Ac(n,i,c,wo,a),m===f)break;f=m}f!==null&&c.stopPropagation()}else Ac(n,i,c,null,a)}}var wo=null;function uc(n,i,a,c){if(wo=null,n=H(c),n=is(n),n!==null)if(i=jn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Er(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return wo=n,null}function Hf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(R()){case q:return 1;case ae:return 4;case ne:case J:return 16;case Ie:return 536870912;default:return 16}default:return 16}}var br=null,dc=null,bo=null;function Wf(){if(bo)return bo;var n,i=dc,a=i.length,c,f="value"in br?br.value:br.textContent,m=f.length;for(n=0;n<a&&i[n]===f[n];n++);var w=a-n;for(c=1;c<=w&&i[a-c]===f[m-c];c++);return bo=f.slice(n,1<c?1-c:void 0)}function To(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ao(){return!0}function Xf(){return!1}function ai(n){function i(a,c,f,m,w){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=m,this.target=w,this.currentTarget=null;for(var k in n)n.hasOwnProperty(k)&&(a=n[k],this[k]=a?a(m):m[k]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ao:Xf,this.isPropagationStopped=Xf,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ao)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ao)},persist:function(){},isPersistent:Ao}),i}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fc=ai(Ls),Na=se({},Ls,{view:0,detail:0}),dg=ai(Na),hc,pc,Pa,Co=se({},Na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Pa&&(Pa&&n.type==="mousemove"?(hc=n.screenX-Pa.screenX,pc=n.screenY-Pa.screenY):pc=hc=0,Pa=n),hc)},movementY:function(n){return"movementY"in n?n.movementY:pc}}),qf=ai(Co),fg=se({},Co,{dataTransfer:0}),hg=ai(fg),pg=se({},Na,{relatedTarget:0}),mc=ai(pg),mg=se({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),gg=ai(mg),xg=se({},Ls,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),vg=ai(xg),_g=se({},Ls,{data:0}),Yf=ai(_g),yg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Eg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Mg[n])?!!i[n]:!1}function gc(){return Eg}var wg=se({},Na,{key:function(n){if(n.key){var i=yg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=To(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Sg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gc,charCode:function(n){return n.type==="keypress"?To(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?To(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),bg=ai(wg),Tg=se({},Co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$f=ai(Tg),Ag=se({},Na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gc}),Cg=ai(Ag),Rg=se({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ng=ai(Rg),Pg=se({},Co,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Dg=ai(Pg),Lg=[9,13,27,32],xc=d&&"CompositionEvent"in window,Da=null;d&&"documentMode"in document&&(Da=document.documentMode);var Ig=d&&"TextEvent"in window&&!Da,Kf=d&&(!xc||Da&&8<Da&&11>=Da),Zf=" ",Qf=!1;function Jf(n,i){switch(n){case"keyup":return Lg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function eh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Is=!1;function Ug(n,i){switch(n){case"compositionend":return eh(i);case"keypress":return i.which!==32?null:(Qf=!0,Zf);case"textInput":return n=i.data,n===Zf&&Qf?null:n;default:return null}}function Og(n,i){if(Is)return n==="compositionend"||!xc&&Jf(n,i)?(n=Wf(),bo=dc=br=null,Is=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Kf&&i.locale!=="ko"?null:i.data;default:return null}}var Fg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function th(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Fg[n.type]:i==="textarea"}function nh(n,i,a,c){ge(c),i=Lo(i,"onChange"),0<i.length&&(a=new fc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var La=null,Ia=null;function kg(n){yh(n,0)}function Ro(n){var i=Bs(n);if(We(i))return n}function Bg(n,i){if(n==="change")return i}var ih=!1;if(d){var vc;if(d){var _c="oninput"in document;if(!_c){var rh=document.createElement("div");rh.setAttribute("oninput","return;"),_c=typeof rh.oninput=="function"}vc=_c}else vc=!1;ih=vc&&(!document.documentMode||9<document.documentMode)}function sh(){La&&(La.detachEvent("onpropertychange",ah),Ia=La=null)}function ah(n){if(n.propertyName==="value"&&Ro(Ia)){var i=[];nh(i,Ia,n,H(n)),cn(kg,i)}}function zg(n,i,a){n==="focusin"?(sh(),La=i,Ia=a,La.attachEvent("onpropertychange",ah)):n==="focusout"&&sh()}function jg(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ro(Ia)}function Vg(n,i){if(n==="click")return Ro(i)}function Gg(n,i){if(n==="input"||n==="change")return Ro(i)}function Hg(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Ti=typeof Object.is=="function"?Object.is:Hg;function Ua(n,i){if(Ti(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!p.call(i,f)||!Ti(n[f],i[f]))return!1}return!0}function oh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function lh(n,i){var a=oh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=oh(a)}}function ch(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?ch(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function uh(){for(var n=window,i=ht();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=ht(n.document)}return i}function yc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Wg(n){var i=uh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&ch(a.ownerDocument.documentElement,a)){if(c!==null&&yc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,m=Math.min(c.start,f);c=c.end===void 0?m:Math.min(c.end,f),!n.extend&&m>c&&(f=c,c=m,m=f),f=lh(a,m);var w=lh(a,c);f&&w&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Xg=d&&"documentMode"in document&&11>=document.documentMode,Us=null,Sc=null,Oa=null,Mc=!1;function dh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Mc||Us==null||Us!==ht(c)||(c=Us,"selectionStart"in c&&yc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Oa&&Ua(Oa,c)||(Oa=c,c=Lo(Sc,"onSelect"),0<c.length&&(i=new fc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Us)))}function No(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Os={animationend:No("Animation","AnimationEnd"),animationiteration:No("Animation","AnimationIteration"),animationstart:No("Animation","AnimationStart"),transitionend:No("Transition","TransitionEnd")},Ec={},fh={};d&&(fh=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function Po(n){if(Ec[n])return Ec[n];if(!Os[n])return n;var i=Os[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in fh)return Ec[n]=i[a];return n}var hh=Po("animationend"),ph=Po("animationiteration"),mh=Po("animationstart"),gh=Po("transitionend"),xh=new Map,vh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(n,i){xh.set(n,i),l(i,[n])}for(var wc=0;wc<vh.length;wc++){var bc=vh[wc],qg=bc.toLowerCase(),Yg=bc[0].toUpperCase()+bc.slice(1);Tr(qg,"on"+Yg)}Tr(hh,"onAnimationEnd"),Tr(ph,"onAnimationIteration"),Tr(mh,"onAnimationStart"),Tr("dblclick","onDoubleClick"),Tr("focusin","onFocus"),Tr("focusout","onBlur"),Tr(gh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$g=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fa));function _h(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Qr(c,i,void 0,n),n.currentTarget=null}function yh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],f=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var w=c.length-1;0<=w;w--){var k=c[w],V=k.instance,ce=k.currentTarget;if(k=k.listener,V!==m&&f.isPropagationStopped())break e;_h(f,k,ce),m=V}else for(w=0;w<c.length;w++){if(k=c[w],V=k.instance,ce=k.currentTarget,k=k.listener,V!==m&&f.isPropagationStopped())break e;_h(f,k,ce),m=V}}}if(bi)throw n=Xn,bi=!1,Xn=null,n}function $t(n,i){var a=i[Lc];a===void 0&&(a=i[Lc]=new Set);var c=n+"__bubble";a.has(c)||(Sh(i,n,2,!1),a.add(c))}function Tc(n,i,a){var c=0;i&&(c|=4),Sh(a,n,c,i)}var Do="_reactListening"+Math.random().toString(36).slice(2);function ka(n){if(!n[Do]){n[Do]=!0,r.forEach(function(a){a!=="selectionchange"&&($g.has(a)||Tc(a,!1,n),Tc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Do]||(i[Do]=!0,Tc("selectionchange",!1,i))}}function Sh(n,i,a,c){switch(Hf(i)){case 1:var f=cg;break;case 4:f=ug;break;default:f=cc}a=f.bind(null,i,a,n),f=void 0,!Kr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function Ac(n,i,a,c,f){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var k=c.stateNode.containerInfo;if(k===f||k.nodeType===8&&k.parentNode===f)break;if(w===4)for(w=c.return;w!==null;){var V=w.tag;if((V===3||V===4)&&(V=w.stateNode.containerInfo,V===f||V.nodeType===8&&V.parentNode===f))return;w=w.return}for(;k!==null;){if(w=is(k),w===null)return;if(V=w.tag,V===5||V===6){c=m=w;continue e}k=k.parentNode}}c=c.return}cn(function(){var ce=m,Se=H(a),we=[];e:{var ye=xh.get(n);if(ye!==void 0){var He=fc,Ke=n;switch(n){case"keypress":if(To(a)===0)break e;case"keydown":case"keyup":He=bg;break;case"focusin":Ke="focus",He=mc;break;case"focusout":Ke="blur",He=mc;break;case"beforeblur":case"afterblur":He=mc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":He=qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":He=hg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":He=Cg;break;case hh:case ph:case mh:He=gg;break;case gh:He=Ng;break;case"scroll":He=dg;break;case"wheel":He=Dg;break;case"copy":case"cut":case"paste":He=vg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":He=$f}var Ze=(i&4)!==0,ln=!Ze&&n==="scroll",ee=Ze?ye!==null?ye+"Capture":null:ye;Ze=[];for(var W=ce,ie;W!==null;){ie=W;var Re=ie.stateNode;if(ie.tag===5&&Re!==null&&(ie=Re,ee!==null&&(Re=Cn(W,ee),Re!=null&&Ze.push(Ba(W,Re,ie)))),ln)break;W=W.return}0<Ze.length&&(ye=new He(ye,Ke,null,a,Se),we.push({event:ye,listeners:Ze}))}}if((i&7)===0){e:{if(ye=n==="mouseover"||n==="pointerover",He=n==="mouseout"||n==="pointerout",ye&&a!==gt&&(Ke=a.relatedTarget||a.fromElement)&&(is(Ke)||Ke[tr]))break e;if((He||ye)&&(ye=Se.window===Se?Se:(ye=Se.ownerDocument)?ye.defaultView||ye.parentWindow:window,He?(Ke=a.relatedTarget||a.toElement,He=ce,Ke=Ke?is(Ke):null,Ke!==null&&(ln=jn(Ke),Ke!==ln||Ke.tag!==5&&Ke.tag!==6)&&(Ke=null)):(He=null,Ke=ce),He!==Ke)){if(Ze=qf,Re="onMouseLeave",ee="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(Ze=$f,Re="onPointerLeave",ee="onPointerEnter",W="pointer"),ln=He==null?ye:Bs(He),ie=Ke==null?ye:Bs(Ke),ye=new Ze(Re,W+"leave",He,a,Se),ye.target=ln,ye.relatedTarget=ie,Re=null,is(Se)===ce&&(Ze=new Ze(ee,W+"enter",Ke,a,Se),Ze.target=ie,Ze.relatedTarget=ln,Re=Ze),ln=Re,He&&Ke)t:{for(Ze=He,ee=Ke,W=0,ie=Ze;ie;ie=Fs(ie))W++;for(ie=0,Re=ee;Re;Re=Fs(Re))ie++;for(;0<W-ie;)Ze=Fs(Ze),W--;for(;0<ie-W;)ee=Fs(ee),ie--;for(;W--;){if(Ze===ee||ee!==null&&Ze===ee.alternate)break t;Ze=Fs(Ze),ee=Fs(ee)}Ze=null}else Ze=null;He!==null&&Mh(we,ye,He,Ze,!1),Ke!==null&&ln!==null&&Mh(we,ln,Ke,Ze,!0)}}e:{if(ye=ce?Bs(ce):window,He=ye.nodeName&&ye.nodeName.toLowerCase(),He==="select"||He==="input"&&ye.type==="file")var Je=Bg;else if(th(ye))if(ih)Je=Gg;else{Je=jg;var st=zg}else(He=ye.nodeName)&&He.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(Je=Vg);if(Je&&(Je=Je(n,ce))){nh(we,Je,a,Se);break e}st&&st(n,ye,ce),n==="focusout"&&(st=ye._wrapperState)&&st.controlled&&ye.type==="number"&&Vt(ye,"number",ye.value)}switch(st=ce?Bs(ce):window,n){case"focusin":(th(st)||st.contentEditable==="true")&&(Us=st,Sc=ce,Oa=null);break;case"focusout":Oa=Sc=Us=null;break;case"mousedown":Mc=!0;break;case"contextmenu":case"mouseup":case"dragend":Mc=!1,dh(we,a,Se);break;case"selectionchange":if(Xg)break;case"keydown":case"keyup":dh(we,a,Se)}var at;if(xc)e:{switch(n){case"compositionstart":var dt="onCompositionStart";break e;case"compositionend":dt="onCompositionEnd";break e;case"compositionupdate":dt="onCompositionUpdate";break e}dt=void 0}else Is?Jf(n,a)&&(dt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(dt="onCompositionStart");dt&&(Kf&&a.locale!=="ko"&&(Is||dt!=="onCompositionStart"?dt==="onCompositionEnd"&&Is&&(at=Wf()):(br=Se,dc="value"in br?br.value:br.textContent,Is=!0)),st=Lo(ce,dt),0<st.length&&(dt=new Yf(dt,n,null,a,Se),we.push({event:dt,listeners:st}),at?dt.data=at:(at=eh(a),at!==null&&(dt.data=at)))),(at=Ig?Ug(n,a):Og(n,a))&&(ce=Lo(ce,"onBeforeInput"),0<ce.length&&(Se=new Yf("onBeforeInput","beforeinput",null,a,Se),we.push({event:Se,listeners:ce}),Se.data=at))}yh(we,i)})}function Ba(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Lo(n,i){for(var a=i+"Capture",c=[];n!==null;){var f=n,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=Cn(n,a),m!=null&&c.unshift(Ba(n,m,f)),m=Cn(n,i),m!=null&&c.push(Ba(n,m,f))),n=n.return}return c}function Fs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Mh(n,i,a,c,f){for(var m=i._reactName,w=[];a!==null&&a!==c;){var k=a,V=k.alternate,ce=k.stateNode;if(V!==null&&V===c)break;k.tag===5&&ce!==null&&(k=ce,f?(V=Cn(a,m),V!=null&&w.unshift(Ba(a,V,k))):f||(V=Cn(a,m),V!=null&&w.push(Ba(a,V,k)))),a=a.return}w.length!==0&&n.push({event:i,listeners:w})}var Kg=/\r\n?/g,Zg=/\u0000|\uFFFD/g;function Eh(n){return(typeof n=="string"?n:""+n).replace(Kg,`
`).replace(Zg,"")}function Io(n,i,a){if(i=Eh(i),Eh(n)!==i&&a)throw Error(t(425))}function Uo(){}var Cc=null,Rc=null;function Nc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Pc=typeof setTimeout=="function"?setTimeout:void 0,Qg=typeof clearTimeout=="function"?clearTimeout:void 0,wh=typeof Promise=="function"?Promise:void 0,Jg=typeof queueMicrotask=="function"?queueMicrotask:typeof wh<"u"?function(n){return wh.resolve(null).then(n).catch(ex)}:Pc;function ex(n){setTimeout(function(){throw n})}function Dc(n,i){var a=i,c=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){n.removeChild(f),Ra(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);Ra(i)}function Ar(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function bh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ks=Math.random().toString(36).slice(2),Bi="__reactFiber$"+ks,za="__reactProps$"+ks,tr="__reactContainer$"+ks,Lc="__reactEvents$"+ks,tx="__reactListeners$"+ks,nx="__reactHandles$"+ks;function is(n){var i=n[Bi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[tr]||a[Bi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=bh(n);n!==null;){if(a=n[Bi])return a;n=bh(n)}return i}n=a,a=n.parentNode}return null}function ja(n){return n=n[Bi]||n[tr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Bs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Oo(n){return n[za]||null}var Ic=[],zs=-1;function Cr(n){return{current:n}}function Kt(n){0>zs||(n.current=Ic[zs],Ic[zs]=null,zs--)}function Yt(n,i){zs++,Ic[zs]=n.current,n.current=i}var Rr={},Ln=Cr(Rr),qn=Cr(!1),rs=Rr;function js(n,i){var a=n.type.contextTypes;if(!a)return Rr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in a)f[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Yn(n){return n=n.childContextTypes,n!=null}function Fo(){Kt(qn),Kt(Ln)}function Th(n,i,a){if(Ln.current!==Rr)throw Error(t(168));Yt(Ln,i),Yt(qn,a)}function Ah(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,oe(n)||"Unknown",f));return se({},a,c)}function ko(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Rr,rs=Ln.current,Yt(Ln,n),Yt(qn,qn.current),!0}function Ch(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Ah(n,i,rs),c.__reactInternalMemoizedMergedChildContext=n,Kt(qn),Kt(Ln),Yt(Ln,n)):Kt(qn),Yt(qn,a)}var nr=null,Bo=!1,Uc=!1;function Rh(n){nr===null?nr=[n]:nr.push(n)}function ix(n){Bo=!0,Rh(n)}function Nr(){if(!Uc&&nr!==null){Uc=!0;var n=0,i=ut;try{var a=nr;for(ut=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}nr=null,Bo=!1}catch(f){throw nr!==null&&(nr=nr.slice(n+1)),Ps(q,Nr),f}finally{ut=i,Uc=!1}}return null}var Vs=[],Gs=0,zo=null,jo=0,gi=[],xi=0,ss=null,ir=1,rr="";function as(n,i){Vs[Gs++]=jo,Vs[Gs++]=zo,zo=n,jo=i}function Nh(n,i,a){gi[xi++]=ir,gi[xi++]=rr,gi[xi++]=ss,ss=n;var c=ir;n=rr;var f=32-je(c)-1;c&=~(1<<f),a+=1;var m=32-je(i)+f;if(30<m){var w=f-f%5;m=(c&(1<<w)-1).toString(32),c>>=w,f-=w,ir=1<<32-je(i)+f|a<<f|c,rr=m+n}else ir=1<<m|a<<f|c,rr=n}function Oc(n){n.return!==null&&(as(n,1),Nh(n,1,0))}function Fc(n){for(;n===zo;)zo=Vs[--Gs],Vs[Gs]=null,jo=Vs[--Gs],Vs[Gs]=null;for(;n===ss;)ss=gi[--xi],gi[xi]=null,rr=gi[--xi],gi[xi]=null,ir=gi[--xi],gi[xi]=null}var oi=null,li=null,Qt=!1,Ai=null;function Ph(n,i){var a=Si(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Dh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,oi=n,li=Ar(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,oi=n,li=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=ss!==null?{id:ir,overflow:rr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Si(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,oi=n,li=null,!0):!1;default:return!1}}function kc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Bc(n){if(Qt){var i=li;if(i){var a=i;if(!Dh(n,i)){if(kc(n))throw Error(t(418));i=Ar(a.nextSibling);var c=oi;i&&Dh(n,i)?Ph(c,a):(n.flags=n.flags&-4097|2,Qt=!1,oi=n)}}else{if(kc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Qt=!1,oi=n}}}function Lh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;oi=n}function Vo(n){if(n!==oi)return!1;if(!Qt)return Lh(n),Qt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Nc(n.type,n.memoizedProps)),i&&(i=li)){if(kc(n))throw Ih(),Error(t(418));for(;i;)Ph(n,i),i=Ar(i.nextSibling)}if(Lh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){li=Ar(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}li=null}}else li=oi?Ar(n.stateNode.nextSibling):null;return!0}function Ih(){for(var n=li;n;)n=Ar(n.nextSibling)}function Hs(){li=oi=null,Qt=!1}function zc(n){Ai===null?Ai=[n]:Ai.push(n)}var rx=C.ReactCurrentBatchConfig;function Va(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var f=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(w){var k=f.refs;w===null?delete k[m]:k[m]=w},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Go(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Uh(n){var i=n._init;return i(n._payload)}function Oh(n){function i(ee,W){if(n){var ie=ee.deletions;ie===null?(ee.deletions=[W],ee.flags|=16):ie.push(W)}}function a(ee,W){if(!n)return null;for(;W!==null;)i(ee,W),W=W.sibling;return null}function c(ee,W){for(ee=new Map;W!==null;)W.key!==null?ee.set(W.key,W):ee.set(W.index,W),W=W.sibling;return ee}function f(ee,W){return ee=kr(ee,W),ee.index=0,ee.sibling=null,ee}function m(ee,W,ie){return ee.index=ie,n?(ie=ee.alternate,ie!==null?(ie=ie.index,ie<W?(ee.flags|=2,W):ie):(ee.flags|=2,W)):(ee.flags|=1048576,W)}function w(ee){return n&&ee.alternate===null&&(ee.flags|=2),ee}function k(ee,W,ie,Re){return W===null||W.tag!==6?(W=Pu(ie,ee.mode,Re),W.return=ee,W):(W=f(W,ie),W.return=ee,W)}function V(ee,W,ie,Re){var Je=ie.type;return Je===F?Se(ee,W,ie.props.children,Re,ie.key):W!==null&&(W.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===re&&Uh(Je)===W.type)?(Re=f(W,ie.props),Re.ref=Va(ee,W,ie),Re.return=ee,Re):(Re=hl(ie.type,ie.key,ie.props,null,ee.mode,Re),Re.ref=Va(ee,W,ie),Re.return=ee,Re)}function ce(ee,W,ie,Re){return W===null||W.tag!==4||W.stateNode.containerInfo!==ie.containerInfo||W.stateNode.implementation!==ie.implementation?(W=Du(ie,ee.mode,Re),W.return=ee,W):(W=f(W,ie.children||[]),W.return=ee,W)}function Se(ee,W,ie,Re,Je){return W===null||W.tag!==7?(W=ps(ie,ee.mode,Re,Je),W.return=ee,W):(W=f(W,ie),W.return=ee,W)}function we(ee,W,ie){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Pu(""+W,ee.mode,ie),W.return=ee,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case I:return ie=hl(W.type,W.key,W.props,null,ee.mode,ie),ie.ref=Va(ee,null,W),ie.return=ee,ie;case L:return W=Du(W,ee.mode,ie),W.return=ee,W;case re:var Re=W._init;return we(ee,Re(W._payload),ie)}if(vt(W)||pe(W))return W=ps(W,ee.mode,ie,null),W.return=ee,W;Go(ee,W)}return null}function ye(ee,W,ie,Re){var Je=W!==null?W.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return Je!==null?null:k(ee,W,""+ie,Re);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case I:return ie.key===Je?V(ee,W,ie,Re):null;case L:return ie.key===Je?ce(ee,W,ie,Re):null;case re:return Je=ie._init,ye(ee,W,Je(ie._payload),Re)}if(vt(ie)||pe(ie))return Je!==null?null:Se(ee,W,ie,Re,null);Go(ee,ie)}return null}function He(ee,W,ie,Re,Je){if(typeof Re=="string"&&Re!==""||typeof Re=="number")return ee=ee.get(ie)||null,k(W,ee,""+Re,Je);if(typeof Re=="object"&&Re!==null){switch(Re.$$typeof){case I:return ee=ee.get(Re.key===null?ie:Re.key)||null,V(W,ee,Re,Je);case L:return ee=ee.get(Re.key===null?ie:Re.key)||null,ce(W,ee,Re,Je);case re:var st=Re._init;return He(ee,W,ie,st(Re._payload),Je)}if(vt(Re)||pe(Re))return ee=ee.get(ie)||null,Se(W,ee,Re,Je,null);Go(W,Re)}return null}function Ke(ee,W,ie,Re){for(var Je=null,st=null,at=W,dt=W=0,wn=null;at!==null&&dt<ie.length;dt++){at.index>dt?(wn=at,at=null):wn=at.sibling;var Bt=ye(ee,at,ie[dt],Re);if(Bt===null){at===null&&(at=wn);break}n&&at&&Bt.alternate===null&&i(ee,at),W=m(Bt,W,dt),st===null?Je=Bt:st.sibling=Bt,st=Bt,at=wn}if(dt===ie.length)return a(ee,at),Qt&&as(ee,dt),Je;if(at===null){for(;dt<ie.length;dt++)at=we(ee,ie[dt],Re),at!==null&&(W=m(at,W,dt),st===null?Je=at:st.sibling=at,st=at);return Qt&&as(ee,dt),Je}for(at=c(ee,at);dt<ie.length;dt++)wn=He(at,ee,dt,ie[dt],Re),wn!==null&&(n&&wn.alternate!==null&&at.delete(wn.key===null?dt:wn.key),W=m(wn,W,dt),st===null?Je=wn:st.sibling=wn,st=wn);return n&&at.forEach(function(Br){return i(ee,Br)}),Qt&&as(ee,dt),Je}function Ze(ee,W,ie,Re){var Je=pe(ie);if(typeof Je!="function")throw Error(t(150));if(ie=Je.call(ie),ie==null)throw Error(t(151));for(var st=Je=null,at=W,dt=W=0,wn=null,Bt=ie.next();at!==null&&!Bt.done;dt++,Bt=ie.next()){at.index>dt?(wn=at,at=null):wn=at.sibling;var Br=ye(ee,at,Bt.value,Re);if(Br===null){at===null&&(at=wn);break}n&&at&&Br.alternate===null&&i(ee,at),W=m(Br,W,dt),st===null?Je=Br:st.sibling=Br,st=Br,at=wn}if(Bt.done)return a(ee,at),Qt&&as(ee,dt),Je;if(at===null){for(;!Bt.done;dt++,Bt=ie.next())Bt=we(ee,Bt.value,Re),Bt!==null&&(W=m(Bt,W,dt),st===null?Je=Bt:st.sibling=Bt,st=Bt);return Qt&&as(ee,dt),Je}for(at=c(ee,at);!Bt.done;dt++,Bt=ie.next())Bt=He(at,ee,dt,Bt.value,Re),Bt!==null&&(n&&Bt.alternate!==null&&at.delete(Bt.key===null?dt:Bt.key),W=m(Bt,W,dt),st===null?Je=Bt:st.sibling=Bt,st=Bt);return n&&at.forEach(function(Fx){return i(ee,Fx)}),Qt&&as(ee,dt),Je}function ln(ee,W,ie,Re){if(typeof ie=="object"&&ie!==null&&ie.type===F&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case I:e:{for(var Je=ie.key,st=W;st!==null;){if(st.key===Je){if(Je=ie.type,Je===F){if(st.tag===7){a(ee,st.sibling),W=f(st,ie.props.children),W.return=ee,ee=W;break e}}else if(st.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===re&&Uh(Je)===st.type){a(ee,st.sibling),W=f(st,ie.props),W.ref=Va(ee,st,ie),W.return=ee,ee=W;break e}a(ee,st);break}else i(ee,st);st=st.sibling}ie.type===F?(W=ps(ie.props.children,ee.mode,Re,ie.key),W.return=ee,ee=W):(Re=hl(ie.type,ie.key,ie.props,null,ee.mode,Re),Re.ref=Va(ee,W,ie),Re.return=ee,ee=Re)}return w(ee);case L:e:{for(st=ie.key;W!==null;){if(W.key===st)if(W.tag===4&&W.stateNode.containerInfo===ie.containerInfo&&W.stateNode.implementation===ie.implementation){a(ee,W.sibling),W=f(W,ie.children||[]),W.return=ee,ee=W;break e}else{a(ee,W);break}else i(ee,W);W=W.sibling}W=Du(ie,ee.mode,Re),W.return=ee,ee=W}return w(ee);case re:return st=ie._init,ln(ee,W,st(ie._payload),Re)}if(vt(ie))return Ke(ee,W,ie,Re);if(pe(ie))return Ze(ee,W,ie,Re);Go(ee,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,W!==null&&W.tag===6?(a(ee,W.sibling),W=f(W,ie),W.return=ee,ee=W):(a(ee,W),W=Pu(ie,ee.mode,Re),W.return=ee,ee=W),w(ee)):a(ee,W)}return ln}var Ws=Oh(!0),Fh=Oh(!1),Ho=Cr(null),Wo=null,Xs=null,jc=null;function Vc(){jc=Xs=Wo=null}function Gc(n){var i=Ho.current;Kt(Ho),n._currentValue=i}function Hc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function qs(n,i){Wo=n,jc=Xs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&($n=!0),n.firstContext=null)}function vi(n){var i=n._currentValue;if(jc!==n)if(n={context:n,memoizedValue:i,next:null},Xs===null){if(Wo===null)throw Error(t(308));Xs=n,Wo.dependencies={lanes:0,firstContext:n}}else Xs=Xs.next=n;return i}var os=null;function Wc(n){os===null?os=[n]:os.push(n)}function kh(n,i,a,c){var f=i.interleaved;return f===null?(a.next=a,Wc(i)):(a.next=f.next,f.next=a),i.interleaved=a,sr(n,c)}function sr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Pr=!1;function Xc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ar(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Dr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ot&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,sr(n,a)}return f=c.interleaved,f===null?(i.next=i,Wc(c)):(i.next=f.next,f.next=i),c.interleaved=i,sr(n,a)}function Xo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Nt(n,a)}}function zh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?f=m=w:m=m.next=w,a=a.next}while(a!==null);m===null?f=m=i:m=m.next=i}else f=m=i;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function qo(n,i,a,c){var f=n.updateQueue;Pr=!1;var m=f.firstBaseUpdate,w=f.lastBaseUpdate,k=f.shared.pending;if(k!==null){f.shared.pending=null;var V=k,ce=V.next;V.next=null,w===null?m=ce:w.next=ce,w=V;var Se=n.alternate;Se!==null&&(Se=Se.updateQueue,k=Se.lastBaseUpdate,k!==w&&(k===null?Se.firstBaseUpdate=ce:k.next=ce,Se.lastBaseUpdate=V))}if(m!==null){var we=f.baseState;w=0,Se=ce=V=null,k=m;do{var ye=k.lane,He=k.eventTime;if((c&ye)===ye){Se!==null&&(Se=Se.next={eventTime:He,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var Ke=n,Ze=k;switch(ye=i,He=a,Ze.tag){case 1:if(Ke=Ze.payload,typeof Ke=="function"){we=Ke.call(He,we,ye);break e}we=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=Ze.payload,ye=typeof Ke=="function"?Ke.call(He,we,ye):Ke,ye==null)break e;we=se({},we,ye);break e;case 2:Pr=!0}}k.callback!==null&&k.lane!==0&&(n.flags|=64,ye=f.effects,ye===null?f.effects=[k]:ye.push(k))}else He={eventTime:He,lane:ye,tag:k.tag,payload:k.payload,callback:k.callback,next:null},Se===null?(ce=Se=He,V=we):Se=Se.next=He,w|=ye;if(k=k.next,k===null){if(k=f.shared.pending,k===null)break;ye=k,k=ye.next,ye.next=null,f.lastBaseUpdate=ye,f.shared.pending=null}}while(!0);if(Se===null&&(V=we),f.baseState=V,f.firstBaseUpdate=ce,f.lastBaseUpdate=Se,i=f.shared.interleaved,i!==null){f=i;do w|=f.lane,f=f.next;while(f!==i)}else m===null&&(f.shared.lanes=0);us|=w,n.lanes=w,n.memoizedState=we}}function jh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var Ga={},zi=Cr(Ga),Ha=Cr(Ga),Wa=Cr(Ga);function ls(n){if(n===Ga)throw Error(t(174));return n}function qc(n,i){switch(Yt(Wa,i),Yt(Ha,n),Yt(zi,Ga),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:xe(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=xe(i,n)}Kt(zi),Yt(zi,i)}function Ys(){Kt(zi),Kt(Ha),Kt(Wa)}function Vh(n){ls(Wa.current);var i=ls(zi.current),a=xe(i,n.type);i!==a&&(Yt(Ha,n),Yt(zi,a))}function Yc(n){Ha.current===n&&(Kt(zi),Kt(Ha))}var Jt=Cr(0);function Yo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var $c=[];function Kc(){for(var n=0;n<$c.length;n++)$c[n]._workInProgressVersionPrimary=null;$c.length=0}var $o=C.ReactCurrentDispatcher,Zc=C.ReactCurrentBatchConfig,cs=0,en=null,pn=null,Mn=null,Ko=!1,Xa=!1,qa=0,sx=0;function In(){throw Error(t(321))}function Qc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Ti(n[a],i[a]))return!1;return!0}function Jc(n,i,a,c,f,m){if(cs=m,en=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,$o.current=n===null||n.memoizedState===null?cx:ux,n=a(c,f),Xa){m=0;do{if(Xa=!1,qa=0,25<=m)throw Error(t(301));m+=1,Mn=pn=null,i.updateQueue=null,$o.current=dx,n=a(c,f)}while(Xa)}if($o.current=Jo,i=pn!==null&&pn.next!==null,cs=0,Mn=pn=en=null,Ko=!1,i)throw Error(t(300));return n}function eu(){var n=qa!==0;return qa=0,n}function ji(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mn===null?en.memoizedState=Mn=n:Mn=Mn.next=n,Mn}function _i(){if(pn===null){var n=en.alternate;n=n!==null?n.memoizedState:null}else n=pn.next;var i=Mn===null?en.memoizedState:Mn.next;if(i!==null)Mn=i,pn=n;else{if(n===null)throw Error(t(310));pn=n,n={memoizedState:pn.memoizedState,baseState:pn.baseState,baseQueue:pn.baseQueue,queue:pn.queue,next:null},Mn===null?en.memoizedState=Mn=n:Mn=Mn.next=n}return Mn}function Ya(n,i){return typeof i=="function"?i(n):i}function tu(n){var i=_i(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=pn,f=c.baseQueue,m=a.pending;if(m!==null){if(f!==null){var w=f.next;f.next=m.next,m.next=w}c.baseQueue=f=m,a.pending=null}if(f!==null){m=f.next,c=c.baseState;var k=w=null,V=null,ce=m;do{var Se=ce.lane;if((cs&Se)===Se)V!==null&&(V=V.next={lane:0,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),c=ce.hasEagerState?ce.eagerState:n(c,ce.action);else{var we={lane:Se,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null};V===null?(k=V=we,w=c):V=V.next=we,en.lanes|=Se,us|=Se}ce=ce.next}while(ce!==null&&ce!==m);V===null?w=c:V.next=k,Ti(c,i.memoizedState)||($n=!0),i.memoizedState=c,i.baseState=w,i.baseQueue=V,a.lastRenderedState=c}if(n=a.interleaved,n!==null){f=n;do m=f.lane,en.lanes|=m,us|=m,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function nu(n){var i=_i(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,f=a.pending,m=i.memoizedState;if(f!==null){a.pending=null;var w=f=f.next;do m=n(m,w.action),w=w.next;while(w!==f);Ti(m,i.memoizedState)||($n=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function Gh(){}function Hh(n,i){var a=en,c=_i(),f=i(),m=!Ti(c.memoizedState,f);if(m&&(c.memoizedState=f,$n=!0),c=c.queue,iu(qh.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||Mn!==null&&Mn.memoizedState.tag&1){if(a.flags|=2048,$a(9,Xh.bind(null,a,c,f,i),void 0,null),En===null)throw Error(t(349));(cs&30)!==0||Wh(a,i,f)}return f}function Wh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=en.updateQueue,i===null?(i={lastEffect:null,stores:null},en.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Xh(n,i,a,c){i.value=a,i.getSnapshot=c,Yh(i)&&$h(n)}function qh(n,i,a){return a(function(){Yh(i)&&$h(n)})}function Yh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Ti(n,a)}catch{return!0}}function $h(n){var i=sr(n,1);i!==null&&Pi(i,n,1,-1)}function Kh(n){var i=ji();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ya,lastRenderedState:n},i.queue=n,n=n.dispatch=lx.bind(null,en,n),[i.memoizedState,n]}function $a(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=en.updateQueue,i===null?(i={lastEffect:null,stores:null},en.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Zh(){return _i().memoizedState}function Zo(n,i,a,c){var f=ji();en.flags|=n,f.memoizedState=$a(1|i,a,void 0,c===void 0?null:c)}function Qo(n,i,a,c){var f=_i();c=c===void 0?null:c;var m=void 0;if(pn!==null){var w=pn.memoizedState;if(m=w.destroy,c!==null&&Qc(c,w.deps)){f.memoizedState=$a(i,a,m,c);return}}en.flags|=n,f.memoizedState=$a(1|i,a,m,c)}function Qh(n,i){return Zo(8390656,8,n,i)}function iu(n,i){return Qo(2048,8,n,i)}function Jh(n,i){return Qo(4,2,n,i)}function ep(n,i){return Qo(4,4,n,i)}function tp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function np(n,i,a){return a=a!=null?a.concat([n]):null,Qo(4,4,tp.bind(null,i,n),a)}function ru(){}function ip(n,i){var a=_i();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Qc(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function rp(n,i){var a=_i();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Qc(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function sp(n,i,a){return(cs&21)===0?(n.baseState&&(n.baseState=!1,$n=!0),n.memoizedState=a):(Ti(a,i)||(a=yn(),en.lanes|=a,us|=a,n.baseState=!0),i)}function ax(n,i){var a=ut;ut=a!==0&&4>a?a:4,n(!0);var c=Zc.transition;Zc.transition={};try{n(!1),i()}finally{ut=a,Zc.transition=c}}function ap(){return _i().memoizedState}function ox(n,i,a){var c=Or(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},op(n))lp(i,a);else if(a=kh(n,i,a,c),a!==null){var f=Hn();Pi(a,n,c,f),cp(a,i,c)}}function lx(n,i,a){var c=Or(n),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(op(n))lp(i,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var w=i.lastRenderedState,k=m(w,a);if(f.hasEagerState=!0,f.eagerState=k,Ti(k,w)){var V=i.interleaved;V===null?(f.next=f,Wc(i)):(f.next=V.next,V.next=f),i.interleaved=f;return}}catch{}finally{}a=kh(n,i,f,c),a!==null&&(f=Hn(),Pi(a,n,c,f),cp(a,i,c))}}function op(n){var i=n.alternate;return n===en||i!==null&&i===en}function lp(n,i){Xa=Ko=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function cp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Nt(n,a)}}var Jo={readContext:vi,useCallback:In,useContext:In,useEffect:In,useImperativeHandle:In,useInsertionEffect:In,useLayoutEffect:In,useMemo:In,useReducer:In,useRef:In,useState:In,useDebugValue:In,useDeferredValue:In,useTransition:In,useMutableSource:In,useSyncExternalStore:In,useId:In,unstable_isNewReconciler:!1},cx={readContext:vi,useCallback:function(n,i){return ji().memoizedState=[n,i===void 0?null:i],n},useContext:vi,useEffect:Qh,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Zo(4194308,4,tp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Zo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Zo(4,2,n,i)},useMemo:function(n,i){var a=ji();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=ji();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=ox.bind(null,en,n),[c.memoizedState,n]},useRef:function(n){var i=ji();return n={current:n},i.memoizedState=n},useState:Kh,useDebugValue:ru,useDeferredValue:function(n){return ji().memoizedState=n},useTransition:function(){var n=Kh(!1),i=n[0];return n=ax.bind(null,n[1]),ji().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=en,f=ji();if(Qt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),En===null)throw Error(t(349));(cs&30)!==0||Wh(c,i,a)}f.memoizedState=a;var m={value:a,getSnapshot:i};return f.queue=m,Qh(qh.bind(null,c,m,n),[n]),c.flags|=2048,$a(9,Xh.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=ji(),i=En.identifierPrefix;if(Qt){var a=rr,c=ir;a=(c&~(1<<32-je(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=qa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=sx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},ux={readContext:vi,useCallback:ip,useContext:vi,useEffect:iu,useImperativeHandle:np,useInsertionEffect:Jh,useLayoutEffect:ep,useMemo:rp,useReducer:tu,useRef:Zh,useState:function(){return tu(Ya)},useDebugValue:ru,useDeferredValue:function(n){var i=_i();return sp(i,pn.memoizedState,n)},useTransition:function(){var n=tu(Ya)[0],i=_i().memoizedState;return[n,i]},useMutableSource:Gh,useSyncExternalStore:Hh,useId:ap,unstable_isNewReconciler:!1},dx={readContext:vi,useCallback:ip,useContext:vi,useEffect:iu,useImperativeHandle:np,useInsertionEffect:Jh,useLayoutEffect:ep,useMemo:rp,useReducer:nu,useRef:Zh,useState:function(){return nu(Ya)},useDebugValue:ru,useDeferredValue:function(n){var i=_i();return pn===null?i.memoizedState=n:sp(i,pn.memoizedState,n)},useTransition:function(){var n=nu(Ya)[0],i=_i().memoizedState;return[n,i]},useMutableSource:Gh,useSyncExternalStore:Hh,useId:ap,unstable_isNewReconciler:!1};function Ci(n,i){if(n&&n.defaultProps){i=se({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function su(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:se({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var el={isMounted:function(n){return(n=n._reactInternals)?jn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Hn(),f=Or(n),m=ar(c,f);m.payload=i,a!=null&&(m.callback=a),i=Dr(n,m,f),i!==null&&(Pi(i,n,f,c),Xo(i,n,f))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Hn(),f=Or(n),m=ar(c,f);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=Dr(n,m,f),i!==null&&(Pi(i,n,f,c),Xo(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Hn(),c=Or(n),f=ar(a,c);f.tag=2,i!=null&&(f.callback=i),i=Dr(n,f,c),i!==null&&(Pi(i,n,c,a),Xo(i,n,c))}};function up(n,i,a,c,f,m,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,w):i.prototype&&i.prototype.isPureReactComponent?!Ua(a,c)||!Ua(f,m):!0}function dp(n,i,a){var c=!1,f=Rr,m=i.contextType;return typeof m=="object"&&m!==null?m=vi(m):(f=Yn(i)?rs:Ln.current,c=i.contextTypes,m=(c=c!=null)?js(n,f):Rr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=el,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=m),i}function fp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&el.enqueueReplaceState(i,i.state,null)}function au(n,i,a,c){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},Xc(n);var m=i.contextType;typeof m=="object"&&m!==null?f.context=vi(m):(m=Yn(i)?rs:Ln.current,f.context=js(n,m)),f.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(su(n,i,m,a),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&el.enqueueReplaceState(f,f.state,null),qo(n,a,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function $s(n,i){try{var a="",c=i;do a+=Te(c),c=c.return;while(c);var f=a}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:f,digest:null}}function ou(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function lu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var fx=typeof WeakMap=="function"?WeakMap:Map;function hp(n,i,a){a=ar(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){ol||(ol=!0,Eu=c),lu(n,i)},a}function pp(n,i,a){a=ar(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;a.payload=function(){return c(f)},a.callback=function(){lu(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){lu(n,i),typeof c!="function"&&(Ir===null?Ir=new Set([this]):Ir.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function mp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new fx;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(a)||(f.add(a),n=Tx.bind(null,n,i,a),i.then(n,n))}function gp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function xp(n,i,a,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=ar(-1,1),i.tag=2,Dr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var hx=C.ReactCurrentOwner,$n=!1;function Gn(n,i,a,c){i.child=n===null?Fh(i,null,a,c):Ws(i,n.child,a,c)}function vp(n,i,a,c,f){a=a.render;var m=i.ref;return qs(i,f),c=Jc(n,i,a,c,m,f),a=eu(),n!==null&&!$n?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,or(n,i,f)):(Qt&&a&&Oc(i),i.flags|=1,Gn(n,i,c,f),i.child)}function _p(n,i,a,c,f){if(n===null){var m=a.type;return typeof m=="function"&&!Nu(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,yp(n,i,m,c,f)):(n=hl(a.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&f)===0){var w=m.memoizedProps;if(a=a.compare,a=a!==null?a:Ua,a(w,c)&&n.ref===i.ref)return or(n,i,f)}return i.flags|=1,n=kr(m,c),n.ref=i.ref,n.return=i,i.child=n}function yp(n,i,a,c,f){if(n!==null){var m=n.memoizedProps;if(Ua(m,c)&&n.ref===i.ref)if($n=!1,i.pendingProps=c=m,(n.lanes&f)!==0)(n.flags&131072)!==0&&($n=!0);else return i.lanes=n.lanes,or(n,i,f)}return cu(n,i,a,c,f)}function Sp(n,i,a){var c=i.pendingProps,f=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Yt(Zs,ci),ci|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Yt(Zs,ci),ci|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Yt(Zs,ci),ci|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,Yt(Zs,ci),ci|=c;return Gn(n,i,f,a),i.child}function Mp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function cu(n,i,a,c,f){var m=Yn(a)?rs:Ln.current;return m=js(i,m),qs(i,f),a=Jc(n,i,a,c,m,f),c=eu(),n!==null&&!$n?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,or(n,i,f)):(Qt&&c&&Oc(i),i.flags|=1,Gn(n,i,a,f),i.child)}function Ep(n,i,a,c,f){if(Yn(a)){var m=!0;ko(i)}else m=!1;if(qs(i,f),i.stateNode===null)nl(n,i),dp(i,a,c),au(i,a,c,f),c=!0;else if(n===null){var w=i.stateNode,k=i.memoizedProps;w.props=k;var V=w.context,ce=a.contextType;typeof ce=="object"&&ce!==null?ce=vi(ce):(ce=Yn(a)?rs:Ln.current,ce=js(i,ce));var Se=a.getDerivedStateFromProps,we=typeof Se=="function"||typeof w.getSnapshotBeforeUpdate=="function";we||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(k!==c||V!==ce)&&fp(i,w,c,ce),Pr=!1;var ye=i.memoizedState;w.state=ye,qo(i,c,w,f),V=i.memoizedState,k!==c||ye!==V||qn.current||Pr?(typeof Se=="function"&&(su(i,a,Se,c),V=i.memoizedState),(k=Pr||up(i,a,k,c,ye,V,ce))?(we||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=V),w.props=c,w.state=V,w.context=ce,c=k):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{w=i.stateNode,Bh(n,i),k=i.memoizedProps,ce=i.type===i.elementType?k:Ci(i.type,k),w.props=ce,we=i.pendingProps,ye=w.context,V=a.contextType,typeof V=="object"&&V!==null?V=vi(V):(V=Yn(a)?rs:Ln.current,V=js(i,V));var He=a.getDerivedStateFromProps;(Se=typeof He=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(k!==we||ye!==V)&&fp(i,w,c,V),Pr=!1,ye=i.memoizedState,w.state=ye,qo(i,c,w,f);var Ke=i.memoizedState;k!==we||ye!==Ke||qn.current||Pr?(typeof He=="function"&&(su(i,a,He,c),Ke=i.memoizedState),(ce=Pr||up(i,a,ce,c,ye,Ke,V)||!1)?(Se||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,Ke,V),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,Ke,V)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||k===n.memoizedProps&&ye===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&ye===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Ke),w.props=c,w.state=Ke,w.context=V,c=ce):(typeof w.componentDidUpdate!="function"||k===n.memoizedProps&&ye===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&ye===n.memoizedState||(i.flags|=1024),c=!1)}return uu(n,i,a,c,m,f)}function uu(n,i,a,c,f,m){Mp(n,i);var w=(i.flags&128)!==0;if(!c&&!w)return f&&Ch(i,a,!1),or(n,i,m);c=i.stateNode,hx.current=i;var k=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&w?(i.child=Ws(i,n.child,null,m),i.child=Ws(i,null,k,m)):Gn(n,i,k,m),i.memoizedState=c.state,f&&Ch(i,a,!0),i.child}function wp(n){var i=n.stateNode;i.pendingContext?Th(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Th(n,i.context,!1),qc(n,i.containerInfo)}function bp(n,i,a,c,f){return Hs(),zc(f),i.flags|=256,Gn(n,i,a,c),i.child}var du={dehydrated:null,treeContext:null,retryLane:0};function fu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Tp(n,i,a){var c=i.pendingProps,f=Jt.current,m=!1,w=(i.flags&128)!==0,k;if((k=w)||(k=n!==null&&n.memoizedState===null?!1:(f&2)!==0),k?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Yt(Jt,f&1),n===null)return Bc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=c.children,n=c.fallback,m?(c=i.mode,m=i.child,w={mode:"hidden",children:w},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=w):m=pl(w,c,0,null),n=ps(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=fu(a),i.memoizedState=du,n):hu(i,w));if(f=n.memoizedState,f!==null&&(k=f.dehydrated,k!==null))return px(n,i,w,c,k,f,a);if(m){m=c.fallback,w=i.mode,f=n.child,k=f.sibling;var V={mode:"hidden",children:c.children};return(w&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=V,i.deletions=null):(c=kr(f,V),c.subtreeFlags=f.subtreeFlags&14680064),k!==null?m=kr(k,m):(m=ps(m,w,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,w=n.child.memoizedState,w=w===null?fu(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},m.memoizedState=w,m.childLanes=n.childLanes&~a,i.memoizedState=du,c}return m=n.child,n=m.sibling,c=kr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function hu(n,i){return i=pl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function tl(n,i,a,c){return c!==null&&zc(c),Ws(i,n.child,null,a),n=hu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function px(n,i,a,c,f,m,w){if(a)return i.flags&256?(i.flags&=-257,c=ou(Error(t(422))),tl(n,i,w,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,f=i.mode,c=pl({mode:"visible",children:c.children},f,0,null),m=ps(m,f,w,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&Ws(i,n.child,null,w),i.child.memoizedState=fu(w),i.memoizedState=du,m);if((i.mode&1)===0)return tl(n,i,w,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var k=c.dgst;return c=k,m=Error(t(419)),c=ou(m,c,void 0),tl(n,i,w,c)}if(k=(w&n.childLanes)!==0,$n||k){if(c=En,c!==null){switch(w&-w){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|w))!==0?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,sr(n,f),Pi(c,n,f,-1))}return Ru(),c=ou(Error(t(421))),tl(n,i,w,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=Ax.bind(null,n),f._reactRetry=i,null):(n=m.treeContext,li=Ar(f.nextSibling),oi=i,Qt=!0,Ai=null,n!==null&&(gi[xi++]=ir,gi[xi++]=rr,gi[xi++]=ss,ir=n.id,rr=n.overflow,ss=i),i=hu(i,c.children),i.flags|=4096,i)}function Ap(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Hc(n.return,i,a)}function pu(n,i,a,c,f){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=f)}function Cp(n,i,a){var c=i.pendingProps,f=c.revealOrder,m=c.tail;if(Gn(n,i,c.children,a),c=Jt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ap(n,a,i);else if(n.tag===19)Ap(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Yt(Jt,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&Yo(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),pu(i,!1,f,a,m);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Yo(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}pu(i,!0,a,null,m);break;case"together":pu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function nl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function or(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),us|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=kr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=kr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function mx(n,i,a){switch(i.tag){case 3:wp(i),Hs();break;case 5:Vh(i);break;case 1:Yn(i.type)&&ko(i);break;case 4:qc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Yt(Ho,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Yt(Jt,Jt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Tp(n,i,a):(Yt(Jt,Jt.current&1),n=or(n,i,a),n!==null?n.sibling:null);Yt(Jt,Jt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Cp(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Yt(Jt,Jt.current),c)break;return null;case 22:case 23:return i.lanes=0,Sp(n,i,a)}return or(n,i,a)}var Rp,mu,Np,Pp;Rp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},mu=function(){},Np=function(n,i,a,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,ls(zi.current);var m=null;switch(a){case"input":f=St(n,f),c=St(n,c),m=[];break;case"select":f=se({},f,{value:void 0}),c=se({},c,{value:void 0}),m=[];break;case"textarea":f=Ve(n,f),c=Ve(n,c),m=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Uo)}qe(a,c);var w;a=null;for(ce in f)if(!c.hasOwnProperty(ce)&&f.hasOwnProperty(ce)&&f[ce]!=null)if(ce==="style"){var k=f[ce];for(w in k)k.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else ce!=="dangerouslySetInnerHTML"&&ce!=="children"&&ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&ce!=="autoFocus"&&(o.hasOwnProperty(ce)?m||(m=[]):(m=m||[]).push(ce,null));for(ce in c){var V=c[ce];if(k=f!=null?f[ce]:void 0,c.hasOwnProperty(ce)&&V!==k&&(V!=null||k!=null))if(ce==="style")if(k){for(w in k)!k.hasOwnProperty(w)||V&&V.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in V)V.hasOwnProperty(w)&&k[w]!==V[w]&&(a||(a={}),a[w]=V[w])}else a||(m||(m=[]),m.push(ce,a)),a=V;else ce==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,k=k?k.__html:void 0,V!=null&&k!==V&&(m=m||[]).push(ce,V)):ce==="children"?typeof V!="string"&&typeof V!="number"||(m=m||[]).push(ce,""+V):ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&(o.hasOwnProperty(ce)?(V!=null&&ce==="onScroll"&&$t("scroll",n),m||k===V||(m=[])):(m=m||[]).push(ce,V))}a&&(m=m||[]).push("style",a);var ce=m;(i.updateQueue=ce)&&(i.flags|=4)}},Pp=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ka(n,i){if(!Qt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Un(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function gx(n,i,a){var c=i.pendingProps;switch(Fc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Un(i),null;case 1:return Yn(i.type)&&Fo(),Un(i),null;case 3:return c=i.stateNode,Ys(),Kt(qn),Kt(Ln),Kc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Vo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ai!==null&&(Tu(Ai),Ai=null))),mu(n,i),Un(i),null;case 5:Yc(i);var f=ls(Wa.current);if(a=i.type,n!==null&&i.stateNode!=null)Np(n,i,a,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Un(i),null}if(n=ls(zi.current),Vo(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[Bi]=i,c[za]=m,n=(i.mode&1)!==0,a){case"dialog":$t("cancel",c),$t("close",c);break;case"iframe":case"object":case"embed":$t("load",c);break;case"video":case"audio":for(f=0;f<Fa.length;f++)$t(Fa[f],c);break;case"source":$t("error",c);break;case"img":case"image":case"link":$t("error",c),$t("load",c);break;case"details":$t("toggle",c);break;case"input":Dt(c,m),$t("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},$t("invalid",c);break;case"textarea":U(c,m),$t("invalid",c)}qe(a,m),f=null;for(var w in m)if(m.hasOwnProperty(w)){var k=m[w];w==="children"?typeof k=="string"?c.textContent!==k&&(m.suppressHydrationWarning!==!0&&Io(c.textContent,k,n),f=["children",k]):typeof k=="number"&&c.textContent!==""+k&&(m.suppressHydrationWarning!==!0&&Io(c.textContent,k,n),f=["children",""+k]):o.hasOwnProperty(w)&&k!=null&&w==="onScroll"&&$t("scroll",c)}switch(a){case"input":Ae(c),z(c,m,!0);break;case"textarea":Ae(c),X(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Uo)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{w=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=me(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=w.createElement(a,{is:c.is}):(n=w.createElement(a),a==="select"&&(w=n,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):n=w.createElementNS(n,a),n[Bi]=i,n[za]=c,Rp(n,i,!1,!1),i.stateNode=n;e:{switch(w=Le(a,c),a){case"dialog":$t("cancel",n),$t("close",n),f=c;break;case"iframe":case"object":case"embed":$t("load",n),f=c;break;case"video":case"audio":for(f=0;f<Fa.length;f++)$t(Fa[f],n);f=c;break;case"source":$t("error",n),f=c;break;case"img":case"image":case"link":$t("error",n),$t("load",n),f=c;break;case"details":$t("toggle",n),f=c;break;case"input":Dt(n,c),f=St(n,c),$t("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=se({},c,{value:void 0}),$t("invalid",n);break;case"textarea":U(n,c),f=Ve(n,c),$t("invalid",n);break;default:f=c}qe(a,f),k=f;for(m in k)if(k.hasOwnProperty(m)){var V=k[m];m==="style"?Ce(n,V):m==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&$e(n,V)):m==="children"?typeof V=="string"?(a!=="textarea"||V!=="")&&Ne(n,V):typeof V=="number"&&Ne(n,""+V):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?V!=null&&m==="onScroll"&&$t("scroll",n):V!=null&&D(n,m,V,w))}switch(a){case"input":Ae(n),z(n,c,!1);break;case"textarea":Ae(n),X(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ve(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?Et(n,!!c.multiple,m,!1):c.defaultValue!=null&&Et(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Uo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Un(i),null;case 6:if(n&&i.stateNode!=null)Pp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=ls(Wa.current),ls(zi.current),Vo(i)){if(c=i.stateNode,a=i.memoizedProps,c[Bi]=i,(m=c.nodeValue!==a)&&(n=oi,n!==null))switch(n.tag){case 3:Io(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Io(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Bi]=i,i.stateNode=c}return Un(i),null;case 13:if(Kt(Jt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Qt&&li!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Ih(),Hs(),i.flags|=98560,m=!1;else if(m=Vo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Bi]=i}else Hs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Un(i),m=!1}else Ai!==null&&(Tu(Ai),Ai=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Jt.current&1)!==0?mn===0&&(mn=3):Ru())),i.updateQueue!==null&&(i.flags|=4),Un(i),null);case 4:return Ys(),mu(n,i),n===null&&ka(i.stateNode.containerInfo),Un(i),null;case 10:return Gc(i.type._context),Un(i),null;case 17:return Yn(i.type)&&Fo(),Un(i),null;case 19:if(Kt(Jt),m=i.memoizedState,m===null)return Un(i),null;if(c=(i.flags&128)!==0,w=m.rendering,w===null)if(c)Ka(m,!1);else{if(mn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=Yo(n),w!==null){for(i.flags|=128,Ka(m,!1),c=w.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,w=m.alternate,w===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=w.childLanes,m.lanes=w.lanes,m.child=w.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=w.memoizedProps,m.memoizedState=w.memoizedState,m.updateQueue=w.updateQueue,m.type=w.type,n=w.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Yt(Jt,Jt.current&1|2),i.child}n=n.sibling}m.tail!==null&&qt()>Qs&&(i.flags|=128,c=!0,Ka(m,!1),i.lanes=4194304)}else{if(!c)if(n=Yo(w),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ka(m,!0),m.tail===null&&m.tailMode==="hidden"&&!w.alternate&&!Qt)return Un(i),null}else 2*qt()-m.renderingStartTime>Qs&&a!==1073741824&&(i.flags|=128,c=!0,Ka(m,!1),i.lanes=4194304);m.isBackwards?(w.sibling=i.child,i.child=w):(a=m.last,a!==null?a.sibling=w:i.child=w,m.last=w)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=qt(),i.sibling=null,a=Jt.current,Yt(Jt,c?a&1|2:a&1),i):(Un(i),null);case 22:case 23:return Cu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(ci&1073741824)!==0&&(Un(i),i.subtreeFlags&6&&(i.flags|=8192)):Un(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function xx(n,i){switch(Fc(i),i.tag){case 1:return Yn(i.type)&&Fo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ys(),Kt(qn),Kt(Ln),Kc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Yc(i),null;case 13:if(Kt(Jt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Hs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Kt(Jt),null;case 4:return Ys(),null;case 10:return Gc(i.type._context),null;case 22:case 23:return Cu(),null;case 24:return null;default:return null}}var il=!1,On=!1,vx=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function Ks(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){rn(n,i,c)}else a.current=null}function gu(n,i,a){try{a()}catch(c){rn(n,i,c)}}var Dp=!1;function _x(n,i){if(Cc=Eo,n=uh(),yc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var w=0,k=-1,V=-1,ce=0,Se=0,we=n,ye=null;t:for(;;){for(var He;we!==a||f!==0&&we.nodeType!==3||(k=w+f),we!==m||c!==0&&we.nodeType!==3||(V=w+c),we.nodeType===3&&(w+=we.nodeValue.length),(He=we.firstChild)!==null;)ye=we,we=He;for(;;){if(we===n)break t;if(ye===a&&++ce===f&&(k=w),ye===m&&++Se===c&&(V=w),(He=we.nextSibling)!==null)break;we=ye,ye=we.parentNode}we=He}a=k===-1||V===-1?null:{start:k,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Rc={focusedElem:n,selectionRange:a},Eo=!1,Ye=i;Ye!==null;)if(i=Ye,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ye=n;else for(;Ye!==null;){i=Ye;try{var Ke=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ke!==null){var Ze=Ke.memoizedProps,ln=Ke.memoizedState,ee=i.stateNode,W=ee.getSnapshotBeforeUpdate(i.elementType===i.type?Ze:Ci(i.type,Ze),ln);ee.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var ie=i.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Re){rn(i,i.return,Re)}if(n=i.sibling,n!==null){n.return=i.return,Ye=n;break}Ye=i.return}return Ke=Dp,Dp=!1,Ke}function Za(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var m=f.destroy;f.destroy=void 0,m!==void 0&&gu(i,a,m)}f=f.next}while(f!==c)}}function rl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function xu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Lp(n){var i=n.alternate;i!==null&&(n.alternate=null,Lp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Bi],delete i[za],delete i[Lc],delete i[tx],delete i[nx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Ip(n){return n.tag===5||n.tag===3||n.tag===4}function Up(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Ip(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function vu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Uo));else if(c!==4&&(n=n.child,n!==null))for(vu(n,i,a),n=n.sibling;n!==null;)vu(n,i,a),n=n.sibling}function _u(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(_u(n,i,a),n=n.sibling;n!==null;)_u(n,i,a),n=n.sibling}var Rn=null,Ri=!1;function Lr(n,i,a){for(a=a.child;a!==null;)Op(n,i,a),a=a.sibling}function Op(n,i,a){if(Pe&&typeof Pe.onCommitFiberUnmount=="function")try{Pe.onCommitFiberUnmount(ke,a)}catch{}switch(a.tag){case 5:On||Ks(a,i);case 6:var c=Rn,f=Ri;Rn=null,Lr(n,i,a),Rn=c,Ri=f,Rn!==null&&(Ri?(n=Rn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Rn.removeChild(a.stateNode));break;case 18:Rn!==null&&(Ri?(n=Rn,a=a.stateNode,n.nodeType===8?Dc(n.parentNode,a):n.nodeType===1&&Dc(n,a),Ra(n)):Dc(Rn,a.stateNode));break;case 4:c=Rn,f=Ri,Rn=a.stateNode.containerInfo,Ri=!0,Lr(n,i,a),Rn=c,Ri=f;break;case 0:case 11:case 14:case 15:if(!On&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var m=f,w=m.destroy;m=m.tag,w!==void 0&&((m&2)!==0||(m&4)!==0)&&gu(a,i,w),f=f.next}while(f!==c)}Lr(n,i,a);break;case 1:if(!On&&(Ks(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(k){rn(a,i,k)}Lr(n,i,a);break;case 21:Lr(n,i,a);break;case 22:a.mode&1?(On=(c=On)||a.memoizedState!==null,Lr(n,i,a),On=c):Lr(n,i,a);break;default:Lr(n,i,a)}}function Fp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new vx),i.forEach(function(c){var f=Cx.bind(null,n,c);a.has(c)||(a.add(c),c.then(f,f))})}}function Ni(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var m=n,w=i,k=w;e:for(;k!==null;){switch(k.tag){case 5:Rn=k.stateNode,Ri=!1;break e;case 3:Rn=k.stateNode.containerInfo,Ri=!0;break e;case 4:Rn=k.stateNode.containerInfo,Ri=!0;break e}k=k.return}if(Rn===null)throw Error(t(160));Op(m,w,f),Rn=null,Ri=!1;var V=f.alternate;V!==null&&(V.return=null),f.return=null}catch(ce){rn(f,i,ce)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)kp(i,n),i=i.sibling}function kp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ni(i,n),Vi(n),c&4){try{Za(3,n,n.return),rl(3,n)}catch(Ze){rn(n,n.return,Ze)}try{Za(5,n,n.return)}catch(Ze){rn(n,n.return,Ze)}}break;case 1:Ni(i,n),Vi(n),c&512&&a!==null&&Ks(a,a.return);break;case 5:if(Ni(i,n),Vi(n),c&512&&a!==null&&Ks(a,a.return),n.flags&32){var f=n.stateNode;try{Ne(f,"")}catch(Ze){rn(n,n.return,Ze)}}if(c&4&&(f=n.stateNode,f!=null)){var m=n.memoizedProps,w=a!==null?a.memoizedProps:m,k=n.type,V=n.updateQueue;if(n.updateQueue=null,V!==null)try{k==="input"&&m.type==="radio"&&m.name!=null&&pt(f,m),Le(k,w);var ce=Le(k,m);for(w=0;w<V.length;w+=2){var Se=V[w],we=V[w+1];Se==="style"?Ce(f,we):Se==="dangerouslySetInnerHTML"?$e(f,we):Se==="children"?Ne(f,we):D(f,Se,we,ce)}switch(k){case"input":jt(f,m);break;case"textarea":E(f,m);break;case"select":var ye=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var He=m.value;He!=null?Et(f,!!m.multiple,He,!1):ye!==!!m.multiple&&(m.defaultValue!=null?Et(f,!!m.multiple,m.defaultValue,!0):Et(f,!!m.multiple,m.multiple?[]:"",!1))}f[za]=m}catch(Ze){rn(n,n.return,Ze)}}break;case 6:if(Ni(i,n),Vi(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,m=n.memoizedProps;try{f.nodeValue=m}catch(Ze){rn(n,n.return,Ze)}}break;case 3:if(Ni(i,n),Vi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Ra(i.containerInfo)}catch(Ze){rn(n,n.return,Ze)}break;case 4:Ni(i,n),Vi(n);break;case 13:Ni(i,n),Vi(n),f=n.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(Mu=qt())),c&4&&Fp(n);break;case 22:if(Se=a!==null&&a.memoizedState!==null,n.mode&1?(On=(ce=On)||Se,Ni(i,n),On=ce):Ni(i,n),Vi(n),c&8192){if(ce=n.memoizedState!==null,(n.stateNode.isHidden=ce)&&!Se&&(n.mode&1)!==0)for(Ye=n,Se=n.child;Se!==null;){for(we=Ye=Se;Ye!==null;){switch(ye=Ye,He=ye.child,ye.tag){case 0:case 11:case 14:case 15:Za(4,ye,ye.return);break;case 1:Ks(ye,ye.return);var Ke=ye.stateNode;if(typeof Ke.componentWillUnmount=="function"){c=ye,a=ye.return;try{i=c,Ke.props=i.memoizedProps,Ke.state=i.memoizedState,Ke.componentWillUnmount()}catch(Ze){rn(c,a,Ze)}}break;case 5:Ks(ye,ye.return);break;case 22:if(ye.memoizedState!==null){jp(we);continue}}He!==null?(He.return=ye,Ye=He):jp(we)}Se=Se.sibling}e:for(Se=null,we=n;;){if(we.tag===5){if(Se===null){Se=we;try{f=we.stateNode,ce?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(k=we.stateNode,V=we.memoizedProps.style,w=V!=null&&V.hasOwnProperty("display")?V.display:null,k.style.display=Me("display",w))}catch(Ze){rn(n,n.return,Ze)}}}else if(we.tag===6){if(Se===null)try{we.stateNode.nodeValue=ce?"":we.memoizedProps}catch(Ze){rn(n,n.return,Ze)}}else if((we.tag!==22&&we.tag!==23||we.memoizedState===null||we===n)&&we.child!==null){we.child.return=we,we=we.child;continue}if(we===n)break e;for(;we.sibling===null;){if(we.return===null||we.return===n)break e;Se===we&&(Se=null),we=we.return}Se===we&&(Se=null),we.sibling.return=we.return,we=we.sibling}}break;case 19:Ni(i,n),Vi(n),c&4&&Fp(n);break;case 21:break;default:Ni(i,n),Vi(n)}}function Vi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Ip(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(Ne(f,""),c.flags&=-33);var m=Up(n);_u(n,m,f);break;case 3:case 4:var w=c.stateNode.containerInfo,k=Up(n);vu(n,k,w);break;default:throw Error(t(161))}}catch(V){rn(n,n.return,V)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function yx(n,i,a){Ye=n,Bp(n)}function Bp(n,i,a){for(var c=(n.mode&1)!==0;Ye!==null;){var f=Ye,m=f.child;if(f.tag===22&&c){var w=f.memoizedState!==null||il;if(!w){var k=f.alternate,V=k!==null&&k.memoizedState!==null||On;k=il;var ce=On;if(il=w,(On=V)&&!ce)for(Ye=f;Ye!==null;)w=Ye,V=w.child,w.tag===22&&w.memoizedState!==null?Vp(f):V!==null?(V.return=w,Ye=V):Vp(f);for(;m!==null;)Ye=m,Bp(m),m=m.sibling;Ye=f,il=k,On=ce}zp(n)}else(f.subtreeFlags&8772)!==0&&m!==null?(m.return=f,Ye=m):zp(n)}}function zp(n){for(;Ye!==null;){var i=Ye;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:On||rl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!On)if(a===null)c.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:Ci(i.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&jh(i,m,c);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}jh(i,w,a)}break;case 5:var k=i.stateNode;if(a===null&&i.flags&4){a=k;var V=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&a.focus();break;case"img":V.src&&(a.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ce=i.alternate;if(ce!==null){var Se=ce.memoizedState;if(Se!==null){var we=Se.dehydrated;we!==null&&Ra(we)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}On||i.flags&512&&xu(i)}catch(ye){rn(i,i.return,ye)}}if(i===n){Ye=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ye=a;break}Ye=i.return}}function jp(n){for(;Ye!==null;){var i=Ye;if(i===n){Ye=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ye=a;break}Ye=i.return}}function Vp(n){for(;Ye!==null;){var i=Ye;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{rl(4,i)}catch(V){rn(i,a,V)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(V){rn(i,f,V)}}var m=i.return;try{xu(i)}catch(V){rn(i,m,V)}break;case 5:var w=i.return;try{xu(i)}catch(V){rn(i,w,V)}}}catch(V){rn(i,i.return,V)}if(i===n){Ye=null;break}var k=i.sibling;if(k!==null){k.return=i.return,Ye=k;break}Ye=i.return}}var Sx=Math.ceil,sl=C.ReactCurrentDispatcher,yu=C.ReactCurrentOwner,yi=C.ReactCurrentBatchConfig,Ot=0,En=null,dn=null,Nn=0,ci=0,Zs=Cr(0),mn=0,Qa=null,us=0,al=0,Su=0,Ja=null,Kn=null,Mu=0,Qs=1/0,lr=null,ol=!1,Eu=null,Ir=null,ll=!1,Ur=null,cl=0,eo=0,wu=null,ul=-1,dl=0;function Hn(){return(Ot&6)!==0?qt():ul!==-1?ul:ul=qt()}function Or(n){return(n.mode&1)===0?1:(Ot&2)!==0&&Nn!==0?Nn&-Nn:rx.transition!==null?(dl===0&&(dl=yn()),dl):(n=ut,n!==0||(n=window.event,n=n===void 0?16:Hf(n.type)),n)}function Pi(n,i,a,c){if(50<eo)throw eo=0,wu=null,Error(t(185));nn(n,a,c),((Ot&2)===0||n!==En)&&(n===En&&((Ot&2)===0&&(al|=a),mn===4&&Fr(n,Nn)),Zn(n,c),a===1&&Ot===0&&(i.mode&1)===0&&(Qs=qt()+500,Bo&&Nr()))}function Zn(n,i){var a=n.callbackNode;Lt(n,i);var c=It(n,n===En?Nn:0);if(c===0)a!==null&&ts(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&ts(a),i===1)n.tag===0?ix(Hp.bind(null,n)):Rh(Hp.bind(null,n)),Jg(function(){(Ot&6)===0&&Nr()}),a=null;else{switch(Sn(c)){case 1:a=q;break;case 4:a=ae;break;case 16:a=ne;break;case 536870912:a=Ie;break;default:a=ne}a=Qp(a,Gp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Gp(n,i){if(ul=-1,dl=0,(Ot&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Js()&&n.callbackNode!==a)return null;var c=It(n,n===En?Nn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=fl(n,c);else{i=c;var f=Ot;Ot|=2;var m=Xp();(En!==n||Nn!==i)&&(lr=null,Qs=qt()+500,fs(n,i));do try{wx();break}catch(k){Wp(n,k)}while(!0);Vc(),sl.current=m,Ot=f,dn!==null?i=0:(En=null,Nn=0,i=mn)}if(i!==0){if(i===2&&(f=Tt(n),f!==0&&(c=f,i=bu(n,f))),i===1)throw a=Qa,fs(n,0),Fr(n,c),Zn(n,qt()),a;if(i===6)Fr(n,c);else{if(f=n.current.alternate,(c&30)===0&&!Mx(f)&&(i=fl(n,c),i===2&&(m=Tt(n),m!==0&&(c=m,i=bu(n,m))),i===1))throw a=Qa,fs(n,0),Fr(n,c),Zn(n,qt()),a;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:hs(n,Kn,lr);break;case 3:if(Fr(n,c),(c&130023424)===c&&(i=Mu+500-qt(),10<i)){if(It(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){Hn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Pc(hs.bind(null,n,Kn,lr),i);break}hs(n,Kn,lr);break;case 4:if(Fr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var w=31-je(c);m=1<<w,w=i[w],w>f&&(f=w),c&=~m}if(c=f,c=qt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Sx(c/1960))-c,10<c){n.timeoutHandle=Pc(hs.bind(null,n,Kn,lr),c);break}hs(n,Kn,lr);break;case 5:hs(n,Kn,lr);break;default:throw Error(t(329))}}}return Zn(n,qt()),n.callbackNode===a?Gp.bind(null,n):null}function bu(n,i){var a=Ja;return n.current.memoizedState.isDehydrated&&(fs(n,i).flags|=256),n=fl(n,i),n!==2&&(i=Kn,Kn=a,i!==null&&Tu(i)),n}function Tu(n){Kn===null?Kn=n:Kn.push.apply(Kn,n)}function Mx(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],m=f.getSnapshot;f=f.value;try{if(!Ti(m(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Fr(n,i){for(i&=~Su,i&=~al,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-je(i),c=1<<a;n[a]=-1,i&=~c}}function Hp(n){if((Ot&6)!==0)throw Error(t(327));Js();var i=It(n,0);if((i&1)===0)return Zn(n,qt()),null;var a=fl(n,i);if(n.tag!==0&&a===2){var c=Tt(n);c!==0&&(i=c,a=bu(n,c))}if(a===1)throw a=Qa,fs(n,0),Fr(n,i),Zn(n,qt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,hs(n,Kn,lr),Zn(n,qt()),null}function Au(n,i){var a=Ot;Ot|=1;try{return n(i)}finally{Ot=a,Ot===0&&(Qs=qt()+500,Bo&&Nr())}}function ds(n){Ur!==null&&Ur.tag===0&&(Ot&6)===0&&Js();var i=Ot;Ot|=1;var a=yi.transition,c=ut;try{if(yi.transition=null,ut=1,n)return n()}finally{ut=c,yi.transition=a,Ot=i,(Ot&6)===0&&Nr()}}function Cu(){ci=Zs.current,Kt(Zs)}function fs(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Qg(a)),dn!==null)for(a=dn.return;a!==null;){var c=a;switch(Fc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Fo();break;case 3:Ys(),Kt(qn),Kt(Ln),Kc();break;case 5:Yc(c);break;case 4:Ys();break;case 13:Kt(Jt);break;case 19:Kt(Jt);break;case 10:Gc(c.type._context);break;case 22:case 23:Cu()}a=a.return}if(En=n,dn=n=kr(n.current,null),Nn=ci=i,mn=0,Qa=null,Su=al=us=0,Kn=Ja=null,os!==null){for(i=0;i<os.length;i++)if(a=os[i],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,m=a.pending;if(m!==null){var w=m.next;m.next=f,c.next=w}a.pending=c}os=null}return n}function Wp(n,i){do{var a=dn;try{if(Vc(),$o.current=Jo,Ko){for(var c=en.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}Ko=!1}if(cs=0,Mn=pn=en=null,Xa=!1,qa=0,yu.current=null,a===null||a.return===null){mn=1,Qa=i,dn=null;break}e:{var m=n,w=a.return,k=a,V=i;if(i=Nn,k.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var ce=V,Se=k,we=Se.tag;if((Se.mode&1)===0&&(we===0||we===11||we===15)){var ye=Se.alternate;ye?(Se.updateQueue=ye.updateQueue,Se.memoizedState=ye.memoizedState,Se.lanes=ye.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var He=gp(w);if(He!==null){He.flags&=-257,xp(He,w,k,m,i),He.mode&1&&mp(m,ce,i),i=He,V=ce;var Ke=i.updateQueue;if(Ke===null){var Ze=new Set;Ze.add(V),i.updateQueue=Ze}else Ke.add(V);break e}else{if((i&1)===0){mp(m,ce,i),Ru();break e}V=Error(t(426))}}else if(Qt&&k.mode&1){var ln=gp(w);if(ln!==null){(ln.flags&65536)===0&&(ln.flags|=256),xp(ln,w,k,m,i),zc($s(V,k));break e}}m=V=$s(V,k),mn!==4&&(mn=2),Ja===null?Ja=[m]:Ja.push(m),m=w;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var ee=hp(m,V,i);zh(m,ee);break e;case 1:k=V;var W=m.type,ie=m.stateNode;if((m.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(Ir===null||!Ir.has(ie)))){m.flags|=65536,i&=-i,m.lanes|=i;var Re=pp(m,k,i);zh(m,Re);break e}}m=m.return}while(m!==null)}Yp(a)}catch(Je){i=Je,dn===a&&a!==null&&(dn=a=a.return);continue}break}while(!0)}function Xp(){var n=sl.current;return sl.current=Jo,n===null?Jo:n}function Ru(){(mn===0||mn===3||mn===2)&&(mn=4),En===null||(us&268435455)===0&&(al&268435455)===0||Fr(En,Nn)}function fl(n,i){var a=Ot;Ot|=2;var c=Xp();(En!==n||Nn!==i)&&(lr=null,fs(n,i));do try{Ex();break}catch(f){Wp(n,f)}while(!0);if(Vc(),Ot=a,sl.current=c,dn!==null)throw Error(t(261));return En=null,Nn=0,mn}function Ex(){for(;dn!==null;)qp(dn)}function wx(){for(;dn!==null&&!ba();)qp(dn)}function qp(n){var i=Zp(n.alternate,n,ci);n.memoizedProps=n.pendingProps,i===null?Yp(n):dn=i,yu.current=null}function Yp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=gx(a,i,ci),a!==null){dn=a;return}}else{if(a=xx(a,i),a!==null){a.flags&=32767,dn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{mn=6,dn=null;return}}if(i=i.sibling,i!==null){dn=i;return}dn=i=n}while(i!==null);mn===0&&(mn=5)}function hs(n,i,a){var c=ut,f=yi.transition;try{yi.transition=null,ut=1,bx(n,i,a,c)}finally{yi.transition=f,ut=c}return null}function bx(n,i,a,c){do Js();while(Ur!==null);if((Ot&6)!==0)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(mi(n,m),n===En&&(dn=En=null,Nn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ll||(ll=!0,Qp(ne,function(){return Js(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=yi.transition,yi.transition=null;var w=ut;ut=1;var k=Ot;Ot|=4,yu.current=null,_x(n,a),kp(a,n),Wg(Rc),Eo=!!Cc,Rc=Cc=null,n.current=a,yx(a),ns(),Ot=k,ut=w,yi.transition=m}else n.current=a;if(ll&&(ll=!1,Ur=n,cl=f),m=n.pendingLanes,m===0&&(Ir=null),ze(a.stateNode),Zn(n,qt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)f=i[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(ol)throw ol=!1,n=Eu,Eu=null,n;return(cl&1)!==0&&n.tag!==0&&Js(),m=n.pendingLanes,(m&1)!==0?n===wu?eo++:(eo=0,wu=n):eo=0,Nr(),null}function Js(){if(Ur!==null){var n=Sn(cl),i=yi.transition,a=ut;try{if(yi.transition=null,ut=16>n?16:n,Ur===null)var c=!1;else{if(n=Ur,Ur=null,cl=0,(Ot&6)!==0)throw Error(t(331));var f=Ot;for(Ot|=4,Ye=n.current;Ye!==null;){var m=Ye,w=m.child;if((Ye.flags&16)!==0){var k=m.deletions;if(k!==null){for(var V=0;V<k.length;V++){var ce=k[V];for(Ye=ce;Ye!==null;){var Se=Ye;switch(Se.tag){case 0:case 11:case 15:Za(8,Se,m)}var we=Se.child;if(we!==null)we.return=Se,Ye=we;else for(;Ye!==null;){Se=Ye;var ye=Se.sibling,He=Se.return;if(Lp(Se),Se===ce){Ye=null;break}if(ye!==null){ye.return=He,Ye=ye;break}Ye=He}}}var Ke=m.alternate;if(Ke!==null){var Ze=Ke.child;if(Ze!==null){Ke.child=null;do{var ln=Ze.sibling;Ze.sibling=null,Ze=ln}while(Ze!==null)}}Ye=m}}if((m.subtreeFlags&2064)!==0&&w!==null)w.return=m,Ye=w;else e:for(;Ye!==null;){if(m=Ye,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Za(9,m,m.return)}var ee=m.sibling;if(ee!==null){ee.return=m.return,Ye=ee;break e}Ye=m.return}}var W=n.current;for(Ye=W;Ye!==null;){w=Ye;var ie=w.child;if((w.subtreeFlags&2064)!==0&&ie!==null)ie.return=w,Ye=ie;else e:for(w=W;Ye!==null;){if(k=Ye,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:rl(9,k)}}catch(Je){rn(k,k.return,Je)}if(k===w){Ye=null;break e}var Re=k.sibling;if(Re!==null){Re.return=k.return,Ye=Re;break e}Ye=k.return}}if(Ot=f,Nr(),Pe&&typeof Pe.onPostCommitFiberRoot=="function")try{Pe.onPostCommitFiberRoot(ke,n)}catch{}c=!0}return c}finally{ut=a,yi.transition=i}}return!1}function $p(n,i,a){i=$s(a,i),i=hp(n,i,1),n=Dr(n,i,1),i=Hn(),n!==null&&(nn(n,1,i),Zn(n,i))}function rn(n,i,a){if(n.tag===3)$p(n,n,a);else for(;i!==null;){if(i.tag===3){$p(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ir===null||!Ir.has(c))){n=$s(a,n),n=pp(i,n,1),i=Dr(i,n,1),n=Hn(),i!==null&&(nn(i,1,n),Zn(i,n));break}}i=i.return}}function Tx(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Hn(),n.pingedLanes|=n.suspendedLanes&a,En===n&&(Nn&a)===a&&(mn===4||mn===3&&(Nn&130023424)===Nn&&500>qt()-Mu?fs(n,0):Su|=a),Zn(n,i)}function Kp(n,i){i===0&&((n.mode&1)===0?i=1:(i=Gt,Gt<<=1,(Gt&130023424)===0&&(Gt=4194304)));var a=Hn();n=sr(n,i),n!==null&&(nn(n,i,a),Zn(n,a))}function Ax(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Kp(n,a)}function Cx(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Kp(n,a)}var Zp;Zp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||qn.current)$n=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return $n=!1,mx(n,i,a);$n=(n.flags&131072)!==0}else $n=!1,Qt&&(i.flags&1048576)!==0&&Nh(i,jo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;nl(n,i),n=i.pendingProps;var f=js(i,Ln.current);qs(i,a),f=Jc(null,i,c,n,f,a);var m=eu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Yn(c)?(m=!0,ko(i)):m=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Xc(i),f.updater=el,i.stateNode=f,f._reactInternals=i,au(i,c,n,a),i=uu(null,i,c,!0,m,a)):(i.tag=0,Qt&&m&&Oc(i),Gn(null,i,f,a),i=i.child),i;case 16:c=i.elementType;e:{switch(nl(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=Nx(c),n=Ci(c,n),f){case 0:i=cu(null,i,c,n,a);break e;case 1:i=Ep(null,i,c,n,a);break e;case 11:i=vp(null,i,c,n,a);break e;case 14:i=_p(null,i,c,Ci(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Ci(c,f),cu(n,i,c,f,a);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Ci(c,f),Ep(n,i,c,f,a);case 3:e:{if(wp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,f=m.element,Bh(n,i),qo(i,c,null,a);var w=i.memoizedState;if(c=w.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){f=$s(Error(t(423)),i),i=bp(n,i,c,a,f);break e}else if(c!==f){f=$s(Error(t(424)),i),i=bp(n,i,c,a,f);break e}else for(li=Ar(i.stateNode.containerInfo.firstChild),oi=i,Qt=!0,Ai=null,a=Fh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Hs(),c===f){i=or(n,i,a);break e}Gn(n,i,c,a)}i=i.child}return i;case 5:return Vh(i),n===null&&Bc(i),c=i.type,f=i.pendingProps,m=n!==null?n.memoizedProps:null,w=f.children,Nc(c,f)?w=null:m!==null&&Nc(c,m)&&(i.flags|=32),Mp(n,i),Gn(n,i,w,a),i.child;case 6:return n===null&&Bc(i),null;case 13:return Tp(n,i,a);case 4:return qc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ws(i,null,c,a):Gn(n,i,c,a),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Ci(c,f),vp(n,i,c,f,a);case 7:return Gn(n,i,i.pendingProps,a),i.child;case 8:return Gn(n,i,i.pendingProps.children,a),i.child;case 12:return Gn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,m=i.memoizedProps,w=f.value,Yt(Ho,c._currentValue),c._currentValue=w,m!==null)if(Ti(m.value,w)){if(m.children===f.children&&!qn.current){i=or(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var k=m.dependencies;if(k!==null){w=m.child;for(var V=k.firstContext;V!==null;){if(V.context===c){if(m.tag===1){V=ar(-1,a&-a),V.tag=2;var ce=m.updateQueue;if(ce!==null){ce=ce.shared;var Se=ce.pending;Se===null?V.next=V:(V.next=Se.next,Se.next=V),ce.pending=V}}m.lanes|=a,V=m.alternate,V!==null&&(V.lanes|=a),Hc(m.return,a,i),k.lanes|=a;break}V=V.next}}else if(m.tag===10)w=m.type===i.type?null:m.child;else if(m.tag===18){if(w=m.return,w===null)throw Error(t(341));w.lanes|=a,k=w.alternate,k!==null&&(k.lanes|=a),Hc(w,a,i),w=m.sibling}else w=m.child;if(w!==null)w.return=m;else for(w=m;w!==null;){if(w===i){w=null;break}if(m=w.sibling,m!==null){m.return=w.return,w=m;break}w=w.return}m=w}Gn(n,i,f.children,a),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,qs(i,a),f=vi(f),c=c(f),i.flags|=1,Gn(n,i,c,a),i.child;case 14:return c=i.type,f=Ci(c,i.pendingProps),f=Ci(c.type,f),_p(n,i,c,f,a);case 15:return yp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Ci(c,f),nl(n,i),i.tag=1,Yn(c)?(n=!0,ko(i)):n=!1,qs(i,a),dp(i,c,f),au(i,c,f,a),uu(null,i,c,!0,n,a);case 19:return Cp(n,i,a);case 22:return Sp(n,i,a)}throw Error(t(156,i.tag))};function Qp(n,i){return Ps(n,i)}function Rx(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Si(n,i,a,c){return new Rx(n,i,a,c)}function Nu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Nx(n){if(typeof n=="function")return Nu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===K)return 11;if(n===ue)return 14}return 2}function kr(n,i){var a=n.alternate;return a===null?(a=Si(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function hl(n,i,a,c,f,m){var w=2;if(c=n,typeof n=="function")Nu(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case F:return ps(a.children,f,m,i);case G:w=8,f|=8;break;case b:return n=Si(12,a,i,f|2),n.elementType=b,n.lanes=m,n;case Q:return n=Si(13,a,i,f),n.elementType=Q,n.lanes=m,n;case de:return n=Si(19,a,i,f),n.elementType=de,n.lanes=m,n;case Z:return pl(a,f,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:w=10;break e;case j:w=9;break e;case K:w=11;break e;case ue:w=14;break e;case re:w=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Si(w,a,i,f),i.elementType=n,i.type=c,i.lanes=m,i}function ps(n,i,a,c){return n=Si(7,n,c,i),n.lanes=a,n}function pl(n,i,a,c){return n=Si(22,n,c,i),n.elementType=Z,n.lanes=a,n.stateNode={isHidden:!1},n}function Pu(n,i,a){return n=Si(6,n,null,i),n.lanes=a,n}function Du(n,i,a){return i=Si(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Px(n,i,a,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pi(0),this.expirationTimes=pi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pi(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Lu(n,i,a,c,f,m,w,k,V){return n=new Px(n,i,a,k,V),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Si(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xc(m),n}function Dx(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Jp(n){if(!n)return Rr;n=n._reactInternals;e:{if(jn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Yn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Yn(a))return Ah(n,a,i)}return i}function em(n,i,a,c,f,m,w,k,V){return n=Lu(a,c,!0,n,f,m,w,k,V),n.context=Jp(null),a=n.current,c=Hn(),f=Or(a),m=ar(c,f),m.callback=i??null,Dr(a,m,f),n.current.lanes=f,nn(n,f,c),Zn(n,c),n}function ml(n,i,a,c){var f=i.current,m=Hn(),w=Or(f);return a=Jp(a),i.context===null?i.context=a:i.pendingContext=a,i=ar(m,w),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Dr(f,i,w),n!==null&&(Pi(n,f,w,m),Xo(n,f,w)),w}function gl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function tm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Iu(n,i){tm(n,i),(n=n.alternate)&&tm(n,i)}function Lx(){return null}var nm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Uu(n){this._internalRoot=n}xl.prototype.render=Uu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ml(n,i,null,null)},xl.prototype.unmount=Uu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ds(function(){ml(null,n,null,null)}),i[tr]=null}};function xl(n){this._internalRoot=n}xl.prototype.unstable_scheduleHydration=function(n){if(n){var i=si();n={blockedOn:null,target:n,priority:i};for(var a=0;a<wr.length&&i!==0&&i<wr[a].priority;a++);wr.splice(a,0,n),a===0&&Vf(n)}};function Ou(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function vl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function im(){}function Ix(n,i,a,c,f){if(f){if(typeof c=="function"){var m=c;c=function(){var ce=gl(w);m.call(ce)}}var w=em(i,c,n,0,null,!1,!1,"",im);return n._reactRootContainer=w,n[tr]=w.current,ka(n.nodeType===8?n.parentNode:n),ds(),w}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var k=c;c=function(){var ce=gl(V);k.call(ce)}}var V=Lu(n,0,!1,null,null,!1,!1,"",im);return n._reactRootContainer=V,n[tr]=V.current,ka(n.nodeType===8?n.parentNode:n),ds(function(){ml(i,V,a,c)}),V}function _l(n,i,a,c,f){var m=a._reactRootContainer;if(m){var w=m;if(typeof f=="function"){var k=f;f=function(){var V=gl(w);k.call(V)}}ml(i,w,n,f)}else w=Ix(a,i,n,f,c);return gl(w)}an=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=zt(i.pendingLanes);a!==0&&(Nt(i,a|1),Zn(i,qt()),(Ot&6)===0&&(Qs=qt()+500,Nr()))}break;case 13:ds(function(){var c=sr(n,1);if(c!==null){var f=Hn();Pi(c,n,1,f)}}),Iu(n,1)}},on=function(n){if(n.tag===13){var i=sr(n,134217728);if(i!==null){var a=Hn();Pi(i,n,134217728,a)}Iu(n,134217728)}},er=function(n){if(n.tag===13){var i=Or(n),a=sr(n,i);if(a!==null){var c=Hn();Pi(a,n,i,c)}Iu(n,i)}},si=function(){return ut},Ut=function(n,i){var a=ut;try{return ut=n,i()}finally{ut=a}},Oe=function(n,i,a){switch(i){case"input":if(jt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var f=Oo(c);if(!f)throw Error(t(90));We(c),jt(c,f)}}}break;case"textarea":E(n,a);break;case"select":i=a.value,i!=null&&Et(n,!!a.multiple,i,!1)}},ot=Au,mt=ds;var Ux={usingClientEntryPoint:!1,Events:[ja,Bs,Oo,ge,De,Au]},to={findFiberByHostInstance:is,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ox={bundleType:to.bundleType,version:to.version,rendererPackageName:to.rendererPackageName,rendererConfig:to.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Jr(n),n===null?null:n.stateNode},findFiberByHostInstance:to.findFiberByHostInstance||Lx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yl.isDisabled&&yl.supportsFiber)try{ke=yl.inject(Ox),Pe=yl}catch{}}return Qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ux,Qn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ou(i))throw Error(t(200));return Dx(n,i,null,a)},Qn.createRoot=function(n,i){if(!Ou(n))throw Error(t(299));var a=!1,c="",f=nm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Lu(n,1,!1,null,null,a,!1,c,f),n[tr]=i.current,ka(n.nodeType===8?n.parentNode:n),new Uu(i)},Qn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Jr(i),n=n===null?null:n.stateNode,n},Qn.flushSync=function(n){return ds(n)},Qn.hydrate=function(n,i,a){if(!vl(i))throw Error(t(200));return _l(null,n,i,!0,a)},Qn.hydrateRoot=function(n,i,a){if(!Ou(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,f=!1,m="",w=nm;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=em(i,null,n,1,a??null,f,!1,m,w),n[tr]=i.current,ka(n),c)for(n=0;n<c.length;n++)a=c[n],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new xl(i)},Qn.render=function(n,i,a){if(!vl(i))throw Error(t(200));return _l(null,n,i,!1,a)},Qn.unmountComponentAtNode=function(n){if(!vl(n))throw Error(t(40));return n._reactRootContainer?(ds(function(){_l(null,null,n,!1,function(){n._reactRootContainer=null,n[tr]=null})}),!0):!1},Qn.unstable_batchedUpdates=Au,Qn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!vl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return _l(n,i,a,!1,c)},Qn.version="18.3.1-next-f1338f8080-20240426",Qn}var dm;function Wx(){if(dm)return Bu.exports;dm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Bu.exports=Hx(),Bu.exports}var fm;function Xx(){if(fm)return Sl;fm=1;var s=Wx();return Sl.createRoot=s.createRoot,Sl.hydrateRoot=s.hydrateRoot,Sl}var qx=Xx();const Yx=y0(qx);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),S0=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Kx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=Qe.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...d},p)=>Qe.createElement("svg",{ref:p,...Kx,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:S0("lucide",o),...d},[...u.map(([g,x])=>Qe.createElement(g,x)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=(s,e)=>{const t=Qe.forwardRef(({className:r,...o},l)=>Qe.createElement(Zx,{ref:l,iconNode:e,className:S0(`lucide-${$x(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=ct("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=ct("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=ct("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=ct("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=ct("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=ct("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=ct("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=ct("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=ct("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ss=ct("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=ct("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=ct("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=ct("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=ct("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=ct("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=ct("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=ct("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=ct("FileCheck2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=ct("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=ct("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=ct("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=ct("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=ct("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=ct("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=ct("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=ct("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=ct("OctagonAlert",[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=ct("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=ct("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=ct("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=ct("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=ct("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=ct("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=ct("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=ct("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=ct("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=ct("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=ct("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=ct("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=ct("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=ct("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=ct("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=ct("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=ct("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=ct("Wind",[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=ct("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=ct("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=ct("ZapOff",[["path",{d:"M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317",key:"193nxd"}],["path",{d:"M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773",key:"27a7lr"}],["path",{d:"M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643",key:"1e0qe9"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]),bv=({cartCount:s,onOpenCart:e})=>{const[t,r]=Qe.useState(!1),[o,l]=Qe.useState(!1);Qe.useEffect(()=>{const d=()=>{r(window.scrollY>40)};return window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)},[]);const u=[{name:"Simulação 3D",href:"#hero-3d",icon:po},{name:"Central VTS",href:"#central-vts",icon:yv},{name:"Normas NBR",href:"#normas",icon:yd},{name:"Calculadora & Diagrama",href:"#calculadora",icon:M0,highlight:!0},{name:"Loja Virtual",href:"#loja",icon:Ql},{name:"Manuais",href:"#manuais",icon:yd},{name:"Fotos Reais",href:"#galeria",icon:rc},{name:"Contato",href:"#contato",icon:gr}];return h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"bg-gradient-to-r from-[#08090b] via-[#141208] to-[#08090b] border-b border-[#d4af37]/30 text-xs py-1.5 px-4 text-center text-[#f3e5ab] flex items-center justify-center gap-2 font-medium",children:[h.jsxs("span",{className:"flex h-2 w-2 relative",children:[h.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"}),h.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-[#d4af37]"})]}),h.jsxs("span",{className:"tracking-wide",children:["SISTEMA EM CONFORMIDADE TOTAL COM ",h.jsx("strong",{className:"text-[#e5c05d]",children:"ABNT NBR 14518"}),", ",h.jsx("strong",{className:"text-[#e5c05d]",children:"NFPA 96 & 17A"})," E CORPO DE BOMBEIROS (AVCB)"]})]}),h.jsxs("header",{className:`sticky top-0 z-50 transition-all duration-300 ${t?"bg-[#08090b]/95 backdrop-blur-md border-b border-[#d4af37]/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-2.5":"bg-[#08090b]/85 backdrop-blur-sm border-b border-white/5 py-3.5"}`,children:[h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between",children:[h.jsx("a",{href:"#",className:"flex items-center gap-3 group",children:h.jsx("img",{src:"/assets/logo-outfire-gold.png",alt:"OUTFIRE - Sistemas contra Incêndio",className:"h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]"})}),h.jsx("nav",{className:"hidden lg:flex items-center gap-1",children:u.map(d=>{const p=d.icon;return h.jsxs("a",{href:d.href,className:`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${d.highlight?"bg-[#d4af37]/15 text-[#e5c05d] hover:bg-[#d4af37]/25 border border-[#d4af37]/40 shadow-[0_0_15px_rgba(212,175,55,0.2)] font-semibold":"text-gray-300 hover:text-[#f3e5ab] hover:bg-white/5"}`,children:[h.jsx(p,{className:`w-3.5 h-3.5 ${d.highlight?"text-[#d4af37]":"opacity-70"}`}),d.name]},d.name)})}),h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsxs("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20do%20sistema%20Outfire%20para%20minha%20cozinha%20industrial.",target:"_blank",rel:"noopener noreferrer",className:"hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black text-xs font-black px-4 py-2 rounded-lg shadow-glow-gold hover:shadow-glow-gold-lg transition-all",children:[h.jsx(gr,{className:"w-3.5 h-3.5 fill-black"}),h.jsx("span",{children:"(15) 99657-6807"})]}),h.jsxs("button",{onClick:e,className:"relative p-2.5 rounded-xl bg-[#14171e] hover:bg-[#1a1f28] border border-[#d4af37]/25 text-[#f3e5ab] hover:text-white transition-all flex items-center justify-center group shadow-md",title:"Ver Carrinho de Compras",children:[h.jsx(Ql,{className:"w-5 h-5 group-hover:scale-105 transition-transform"}),s>0&&h.jsx("span",{className:"absolute -top-1.5 -right-1.5 bg-[#d4af37] text-black font-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-glow-gold animate-pulse",children:s})]}),h.jsx("button",{onClick:()=>l(!o),className:"lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white",children:o?h.jsx(Md,{className:"w-6 h-6"}):h.jsx(dv,{className:"w-6 h-6"})})]})]}),o&&h.jsxs("div",{className:"lg:hidden mt-3 px-4 pt-2 pb-6 bg-[#0e1014] border-b border-[#d4af37]/20 space-y-2",children:[u.map(d=>{const p=d.icon;return h.jsxs("a",{href:d.href,onClick:()=>l(!1),className:"flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-200 hover:bg-[#d4af37]/10 hover:text-[#f3e5ab] transition-all",children:[h.jsx(p,{className:"w-4 h-4 text-[#d4af37]"}),h.jsx("span",{children:d.name})]},d.name)}),h.jsx("div",{className:"pt-3 border-t border-white/10",children:h.jsxs("a",{href:"https://wa.me/5515996576807",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#d4af37] to-[#e5c05d] text-black text-sm font-black rounded-lg shadow-glow-gold",children:[h.jsx(gr,{className:"w-4 h-4 fill-black"}),"Falar com Engenharia Outfire no WhatsApp"]})})]})]})]})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _f="182",ga={ROTATE:0,DOLLY:1,PAN:2},pa={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Tv=0,xm=1,Av=2,Hl=1,A0=2,fo=3,$r=0,ri=1,pr=2,xr=0,xa=1,vm=2,_m=3,ym=4,Cv=5,Ms=100,Rv=101,Nv=102,Pv=103,Dv=104,Lv=200,Iv=201,Uv=202,Ov=203,Ed=204,wd=205,Fv=206,kv=207,Bv=208,zv=209,jv=210,Vv=211,Gv=212,Hv=213,Wv=214,bd=0,Td=1,Ad=2,_a=3,Cd=4,Rd=5,Nd=6,Pd=7,C0=0,Xv=1,qv=2,qi=0,R0=1,N0=2,P0=3,yf=4,D0=5,L0=6,I0=7,U0=300,Cs=301,ya=302,Dd=303,Ld=304,sc=306,Id=1e3,mr=1001,Ud=1002,Pn=1003,Yv=1004,Ml=1005,Bn=1006,Vu=1007,bs=1008,hi=1009,O0=1010,F0=1011,mo=1012,Sf=1013,Ki=1014,Wi=1015,_r=1016,Mf=1017,Ef=1018,go=1020,k0=35902,B0=35899,z0=1021,j0=1022,Oi=1023,yr=1026,Ts=1027,V0=1028,wf=1029,Sa=1030,bf=1031,Tf=1033,Wl=33776,Xl=33777,ql=33778,Yl=33779,Od=35840,Fd=35841,kd=35842,Bd=35843,zd=36196,jd=37492,Vd=37496,Gd=37488,Hd=37489,Wd=37490,Xd=37491,qd=37808,Yd=37809,$d=37810,Kd=37811,Zd=37812,Qd=37813,Jd=37814,ef=37815,tf=37816,nf=37817,rf=37818,sf=37819,af=37820,of=37821,lf=36492,cf=36494,uf=36495,df=36283,ff=36284,hf=36285,pf=36286,$v=3200,G0=0,Kv=1,qr="",fi="srgb",Ma="srgb-linear",Jl="linear",Ht="srgb",ea=7680,Sm=519,Zv=512,Qv=513,Jv=514,Af=515,e_=516,t_=517,Cf=518,n_=519,Mm=35044,Em="300 es",Xi=2e3,ec=2001;function H0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function tc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function i_(){const s=tc("canvas");return s.style.display="block",s}const wm={};function bm(...s){const e="THREE."+s.shift();console.log(e,...s)}function xt(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Ft(...s){const e="THREE."+s.shift();console.error(e,...s)}function xo(...s){const e=s.join(" ");e in wm||(wm[e]=!0,xt(...s))}function r_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}class Ns{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$l=Math.PI/180,nc=180/Math.PI;function _o(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Fn[s&255]+Fn[s>>8&255]+Fn[s>>16&255]+Fn[s>>24&255]+"-"+Fn[e&255]+Fn[e>>8&255]+"-"+Fn[e>>16&15|64]+Fn[e>>24&255]+"-"+Fn[t&63|128]+Fn[t>>8&255]+"-"+Fn[t>>16&255]+Fn[t>>24&255]+Fn[r&255]+Fn[r>>8&255]+Fn[r>>16&255]+Fn[r>>24&255]).toLowerCase()}function Pt(s,e,t){return Math.max(e,Math.min(t,s))}function s_(s,e){return(s%e+e)%e}function Gu(s,e,t){return(1-t)*s+t*e}function io(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Jn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const a_={DEG2RAD:$l};class ft{constructor(e=0,t=0){ft.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Pt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Pt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Rs{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,d){let p=r[o+0],g=r[o+1],x=r[o+2],_=r[o+3],y=l[u+0],S=l[u+1],A=l[u+2],N=l[u+3];if(d<=0){e[t+0]=p,e[t+1]=g,e[t+2]=x,e[t+3]=_;return}if(d>=1){e[t+0]=y,e[t+1]=S,e[t+2]=A,e[t+3]=N;return}if(_!==N||p!==y||g!==S||x!==A){let M=p*y+g*S+x*A+_*N;M<0&&(y=-y,S=-S,A=-A,N=-N,M=-M);let v=1-d;if(M<.9995){const T=Math.acos(M),D=Math.sin(T);v=Math.sin(v*T)/D,d=Math.sin(d*T)/D,p=p*v+y*d,g=g*v+S*d,x=x*v+A*d,_=_*v+N*d}else{p=p*v+y*d,g=g*v+S*d,x=x*v+A*d,_=_*v+N*d;const T=1/Math.sqrt(p*p+g*g+x*x+_*_);p*=T,g*=T,x*=T,_*=T}}e[t]=p,e[t+1]=g,e[t+2]=x,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,o,l,u){const d=r[o],p=r[o+1],g=r[o+2],x=r[o+3],_=l[u],y=l[u+1],S=l[u+2],A=l[u+3];return e[t]=d*A+x*_+p*S-g*y,e[t+1]=p*A+x*y+g*_-d*S,e[t+2]=g*A+x*S+d*y-p*_,e[t+3]=x*A-d*_-p*y-g*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,p=Math.sin,g=d(r/2),x=d(o/2),_=d(l/2),y=p(r/2),S=p(o/2),A=p(l/2);switch(u){case"XYZ":this._x=y*x*_+g*S*A,this._y=g*S*_-y*x*A,this._z=g*x*A+y*S*_,this._w=g*x*_-y*S*A;break;case"YXZ":this._x=y*x*_+g*S*A,this._y=g*S*_-y*x*A,this._z=g*x*A-y*S*_,this._w=g*x*_+y*S*A;break;case"ZXY":this._x=y*x*_-g*S*A,this._y=g*S*_+y*x*A,this._z=g*x*A+y*S*_,this._w=g*x*_-y*S*A;break;case"ZYX":this._x=y*x*_-g*S*A,this._y=g*S*_+y*x*A,this._z=g*x*A-y*S*_,this._w=g*x*_+y*S*A;break;case"YZX":this._x=y*x*_+g*S*A,this._y=g*S*_+y*x*A,this._z=g*x*A-y*S*_,this._w=g*x*_-y*S*A;break;case"XZY":this._x=y*x*_-g*S*A,this._y=g*S*_-y*x*A,this._z=g*x*A+y*S*_,this._w=g*x*_+y*S*A;break;default:xt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],d=t[5],p=t[9],g=t[2],x=t[6],_=t[10],y=r+d+_;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(x-p)*S,this._y=(l-g)*S,this._z=(u-o)*S}else if(r>d&&r>_){const S=2*Math.sqrt(1+r-d-_);this._w=(x-p)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+g)/S}else if(d>_){const S=2*Math.sqrt(1+d-r-_);this._w=(l-g)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(p+x)/S}else{const S=2*Math.sqrt(1+_-r-d);this._w=(u-o)/S,this._x=(l+g)/S,this._y=(p+x)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,d=t._x,p=t._y,g=t._z,x=t._w;return this._x=r*x+u*d+o*g-l*p,this._y=o*x+u*p+l*d-r*g,this._z=l*x+u*g+r*p-o*d,this._w=u*x-r*d-o*p-l*g,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let r=e._x,o=e._y,l=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,l=-l,u=-u,d=-d);let p=1-t;if(d<.9995){const g=Math.acos(d),x=Math.sin(g);p=Math.sin(p*g)/x,t=Math.sin(t*g)/x,this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+u*t,this._onChangeCallback()}else this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,t=0,r=0){$.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,d=e.z,p=e.w,g=2*(u*o-d*r),x=2*(d*t-l*o),_=2*(l*r-u*t);return this.x=t+p*g+u*_-d*x,this.y=r+p*x+d*g-l*_,this.z=o+p*_+l*x-u*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Pt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,d=t.y,p=t.z;return this.x=o*p-l*d,this.y=l*u-r*p,this.z=r*d-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Hu.copy(this).projectOnVector(e),this.sub(Hu)}reflect(e){return this.sub(Hu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Pt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hu=new $,Tm=new Rs;class Mt{constructor(e,t,r,o,l,u,d,p,g){Mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,p,g)}set(e,t,r,o,l,u,d,p,g){const x=this.elements;return x[0]=e,x[1]=o,x[2]=d,x[3]=t,x[4]=l,x[5]=p,x[6]=r,x[7]=u,x[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[3],p=r[6],g=r[1],x=r[4],_=r[7],y=r[2],S=r[5],A=r[8],N=o[0],M=o[3],v=o[6],T=o[1],D=o[4],C=o[7],I=o[2],L=o[5],F=o[8];return l[0]=u*N+d*T+p*I,l[3]=u*M+d*D+p*L,l[6]=u*v+d*C+p*F,l[1]=g*N+x*T+_*I,l[4]=g*M+x*D+_*L,l[7]=g*v+x*C+_*F,l[2]=y*N+S*T+A*I,l[5]=y*M+S*D+A*L,l[8]=y*v+S*C+A*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],g=e[7],x=e[8];return t*u*x-t*d*g-r*l*x+r*d*p+o*l*g-o*u*p}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],g=e[7],x=e[8],_=x*u-d*g,y=d*p-x*l,S=g*l-u*p,A=t*_+r*y+o*S;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const N=1/A;return e[0]=_*N,e[1]=(o*g-x*r)*N,e[2]=(d*r-o*u)*N,e[3]=y*N,e[4]=(x*t-o*p)*N,e[5]=(o*l-d*t)*N,e[6]=S*N,e[7]=(r*p-g*t)*N,e[8]=(u*t-r*l)*N,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,d){const p=Math.cos(l),g=Math.sin(l);return this.set(r*p,r*g,-r*(p*u+g*d)+u+e,-o*g,o*p,-o*(-g*u+p*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Wu.makeScale(e,t)),this}rotate(e){return this.premultiply(Wu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wu=new Mt,Am=new Mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cm=new Mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function o_(){const s={enabled:!0,workingColorSpace:Ma,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Ht&&(o.r=vr(o.r),o.g=vr(o.g),o.b=vr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ht&&(o.r=va(o.r),o.g=va(o.g),o.b=va(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===qr?Jl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return xo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return xo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ma]:{primaries:e,whitePoint:r,transfer:Jl,toXYZ:Am,fromXYZ:Cm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:r,transfer:Ht,toXYZ:Am,fromXYZ:Cm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),s}const kt=o_();function vr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function va(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ta;class l_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ta===void 0&&(ta=tc("canvas")),ta.width=e.width,ta.height=e.height;const o=ta.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=ta}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=tc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=vr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(vr(t[r]/255)*255):t[r]=vr(t[r]);return{data:t,width:e.width,height:e.height}}else return xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let c_=0;class Rf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=_o(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(Xu(o[u].image)):l.push(Xu(o[u]))}else l=Xu(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Xu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?l_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(xt("Texture: Unable to serialize Texture."),{})}let u_=0;const qu=new $;class zn extends Ns{constructor(e=zn.DEFAULT_IMAGE,t=zn.DEFAULT_MAPPING,r=mr,o=mr,l=Bn,u=bs,d=Oi,p=hi,g=zn.DEFAULT_ANISOTROPY,x=qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=_o(),this.name="",this.source=new Rf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=g,this.format=d,this.internalFormat=null,this.type=p,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qu).x}get height(){return this.source.getSize(qu).y}get depth(){return this.source.getSize(qu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){xt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){xt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==U0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Id:e.x=e.x-Math.floor(e.x);break;case mr:e.x=e.x<0?0:1;break;case Ud:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Id:e.y=e.y-Math.floor(e.y);break;case mr:e.y=e.y<0?0:1;break;case Ud:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=U0;zn.DEFAULT_ANISOTROPY=1;class sn{constructor(e=0,t=0,r=0,o=1){sn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const p=e.elements,g=p[0],x=p[4],_=p[8],y=p[1],S=p[5],A=p[9],N=p[2],M=p[6],v=p[10];if(Math.abs(x-y)<.01&&Math.abs(_-N)<.01&&Math.abs(A-M)<.01){if(Math.abs(x+y)<.1&&Math.abs(_+N)<.1&&Math.abs(A+M)<.1&&Math.abs(g+S+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(g+1)/2,C=(S+1)/2,I=(v+1)/2,L=(x+y)/4,F=(_+N)/4,G=(A+M)/4;return D>C&&D>I?D<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(D),o=L/r,l=F/r):C>I?C<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(C),r=L/o,l=G/o):I<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(I),r=F/l,o=G/l),this.set(r,o,l,t),this}let T=Math.sqrt((M-A)*(M-A)+(_-N)*(_-N)+(y-x)*(y-x));return Math.abs(T)<.001&&(T=1),this.x=(M-A)/T,this.y=(_-N)/T,this.z=(y-x)/T,this.w=Math.acos((g+S+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this.w=Pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this.w=Pt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Pt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class d_ extends Ns{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new sn(0,0,e,t),this.scissorTest=!1,this.viewport=new sn(0,0,e,t);const o={width:e,height:t,depth:r.depth},l=new zn(o);this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Rf(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends d_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class W0 extends zn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class f_ extends zn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yo{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,Di):Di.fromBufferAttribute(l,u),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),El.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),El.copy(r.boundingBox)),El.applyMatrix4(e.matrixWorld),this.union(El)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ro),wl.subVectors(this.max,ro),na.subVectors(e.a,ro),ia.subVectors(e.b,ro),ra.subVectors(e.c,ro),zr.subVectors(ia,na),jr.subVectors(ra,ia),ms.subVectors(na,ra);let t=[0,-zr.z,zr.y,0,-jr.z,jr.y,0,-ms.z,ms.y,zr.z,0,-zr.x,jr.z,0,-jr.x,ms.z,0,-ms.x,-zr.y,zr.x,0,-jr.y,jr.x,0,-ms.y,ms.x,0];return!Yu(t,na,ia,ra,wl)||(t=[1,0,0,0,1,0,0,0,1],!Yu(t,na,ia,ra,wl))?!1:(bl.crossVectors(zr,jr),t=[bl.x,bl.y,bl.z],Yu(t,na,ia,ra,wl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const cr=[new $,new $,new $,new $,new $,new $,new $,new $],Di=new $,El=new yo,na=new $,ia=new $,ra=new $,zr=new $,jr=new $,ms=new $,ro=new $,wl=new $,bl=new $,gs=new $;function Yu(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){gs.fromArray(s,l);const d=o.x*Math.abs(gs.x)+o.y*Math.abs(gs.y)+o.z*Math.abs(gs.z),p=e.dot(gs),g=t.dot(gs),x=r.dot(gs);if(Math.max(-Math.max(p,g,x),Math.min(p,g,x))>d)return!1}return!0}const h_=new yo,so=new $,$u=new $;class Nf{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):h_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;so.subVectors(e,this.center);const t=so.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(so,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($u.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(so.copy(e.center).add($u)),this.expandByPoint(so.copy(e.center).sub($u))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ur=new $,Ku=new $,Tl=new $,Vr=new $,Zu=new $,Al=new $,Qu=new $;class Pf{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ur)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ur.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ur.copy(this.origin).addScaledVector(this.direction,t),ur.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Ku.copy(e).add(t).multiplyScalar(.5),Tl.copy(t).sub(e).normalize(),Vr.copy(this.origin).sub(Ku);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Tl),d=Vr.dot(this.direction),p=-Vr.dot(Tl),g=Vr.lengthSq(),x=Math.abs(1-u*u);let _,y,S,A;if(x>0)if(_=u*p-d,y=u*d-p,A=l*x,_>=0)if(y>=-A)if(y<=A){const N=1/x;_*=N,y*=N,S=_*(_+u*y+2*d)+y*(u*_+y+2*p)+g}else y=l,_=Math.max(0,-(u*y+d)),S=-_*_+y*(y+2*p)+g;else y=-l,_=Math.max(0,-(u*y+d)),S=-_*_+y*(y+2*p)+g;else y<=-A?(_=Math.max(0,-(-u*l+d)),y=_>0?-l:Math.min(Math.max(-l,-p),l),S=-_*_+y*(y+2*p)+g):y<=A?(_=0,y=Math.min(Math.max(-l,-p),l),S=y*(y+2*p)+g):(_=Math.max(0,-(u*l+d)),y=_>0?l:Math.min(Math.max(-l,-p),l),S=-_*_+y*(y+2*p)+g);else y=u>0?-l:l,_=Math.max(0,-(u*y+d)),S=-_*_+y*(y+2*p)+g;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Ku).addScaledVector(Tl,y),S}intersectSphere(e,t){ur.subVectors(e.center,this.origin);const r=ur.dot(this.direction),o=ur.dot(ur)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=r-u,p=r+u;return p<0?null:d<0?this.at(p,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,d,p;const g=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,y=this.origin;return g>=0?(r=(e.min.x-y.x)*g,o=(e.max.x-y.x)*g):(r=(e.max.x-y.x)*g,o=(e.min.x-y.x)*g),x>=0?(l=(e.min.y-y.y)*x,u=(e.max.y-y.y)*x):(l=(e.max.y-y.y)*x,u=(e.min.y-y.y)*x),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),_>=0?(d=(e.min.z-y.z)*_,p=(e.max.z-y.z)*_):(d=(e.max.z-y.z)*_,p=(e.min.z-y.z)*_),r>p||d>o)||((d>r||r!==r)&&(r=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,ur)!==null}intersectTriangle(e,t,r,o,l){Zu.subVectors(t,e),Al.subVectors(r,e),Qu.crossVectors(Zu,Al);let u=this.direction.dot(Qu),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Vr.subVectors(this.origin,e);const p=d*this.direction.dot(Al.crossVectors(Vr,Al));if(p<0)return null;const g=d*this.direction.dot(Zu.cross(Vr));if(g<0||p+g>u)return null;const x=-d*Vr.dot(Qu);return x<0?null:this.at(x/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(e,t,r,o,l,u,d,p,g,x,_,y,S,A,N,M){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,p,g,x,_,y,S,A,N,M)}set(e,t,r,o,l,u,d,p,g,x,_,y,S,A,N,M){const v=this.elements;return v[0]=e,v[4]=t,v[8]=r,v[12]=o,v[1]=l,v[5]=u,v[9]=d,v[13]=p,v[2]=g,v[6]=x,v[10]=_,v[14]=y,v[3]=S,v[7]=A,v[11]=N,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/sa.setFromMatrixColumn(e,0).length(),l=1/sa.setFromMatrixColumn(e,1).length(),u=1/sa.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),p=Math.cos(o),g=Math.sin(o),x=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const y=u*x,S=u*_,A=d*x,N=d*_;t[0]=p*x,t[4]=-p*_,t[8]=g,t[1]=S+A*g,t[5]=y-N*g,t[9]=-d*p,t[2]=N-y*g,t[6]=A+S*g,t[10]=u*p}else if(e.order==="YXZ"){const y=p*x,S=p*_,A=g*x,N=g*_;t[0]=y+N*d,t[4]=A*d-S,t[8]=u*g,t[1]=u*_,t[5]=u*x,t[9]=-d,t[2]=S*d-A,t[6]=N+y*d,t[10]=u*p}else if(e.order==="ZXY"){const y=p*x,S=p*_,A=g*x,N=g*_;t[0]=y-N*d,t[4]=-u*_,t[8]=A+S*d,t[1]=S+A*d,t[5]=u*x,t[9]=N-y*d,t[2]=-u*g,t[6]=d,t[10]=u*p}else if(e.order==="ZYX"){const y=u*x,S=u*_,A=d*x,N=d*_;t[0]=p*x,t[4]=A*g-S,t[8]=y*g+N,t[1]=p*_,t[5]=N*g+y,t[9]=S*g-A,t[2]=-g,t[6]=d*p,t[10]=u*p}else if(e.order==="YZX"){const y=u*p,S=u*g,A=d*p,N=d*g;t[0]=p*x,t[4]=N-y*_,t[8]=A*_+S,t[1]=_,t[5]=u*x,t[9]=-d*x,t[2]=-g*x,t[6]=S*_+A,t[10]=y-N*_}else if(e.order==="XZY"){const y=u*p,S=u*g,A=d*p,N=d*g;t[0]=p*x,t[4]=-_,t[8]=g*x,t[1]=y*_+N,t[5]=u*x,t[9]=S*_-A,t[2]=A*_-S,t[6]=d*x,t[10]=N*_+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(p_,e,m_)}lookAt(e,t,r){const o=this.elements;return ui.subVectors(e,t),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),Gr.crossVectors(r,ui),Gr.lengthSq()===0&&(Math.abs(r.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),Gr.crossVectors(r,ui)),Gr.normalize(),Cl.crossVectors(ui,Gr),o[0]=Gr.x,o[4]=Cl.x,o[8]=ui.x,o[1]=Gr.y,o[5]=Cl.y,o[9]=ui.y,o[2]=Gr.z,o[6]=Cl.z,o[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[4],p=r[8],g=r[12],x=r[1],_=r[5],y=r[9],S=r[13],A=r[2],N=r[6],M=r[10],v=r[14],T=r[3],D=r[7],C=r[11],I=r[15],L=o[0],F=o[4],G=o[8],b=o[12],P=o[1],j=o[5],K=o[9],Q=o[13],de=o[2],ue=o[6],re=o[10],Z=o[14],Y=o[3],pe=o[7],se=o[11],B=o[15];return l[0]=u*L+d*P+p*de+g*Y,l[4]=u*F+d*j+p*ue+g*pe,l[8]=u*G+d*K+p*re+g*se,l[12]=u*b+d*Q+p*Z+g*B,l[1]=x*L+_*P+y*de+S*Y,l[5]=x*F+_*j+y*ue+S*pe,l[9]=x*G+_*K+y*re+S*se,l[13]=x*b+_*Q+y*Z+S*B,l[2]=A*L+N*P+M*de+v*Y,l[6]=A*F+N*j+M*ue+v*pe,l[10]=A*G+N*K+M*re+v*se,l[14]=A*b+N*Q+M*Z+v*B,l[3]=T*L+D*P+C*de+I*Y,l[7]=T*F+D*j+C*ue+I*pe,l[11]=T*G+D*K+C*re+I*se,l[15]=T*b+D*Q+C*Z+I*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],d=e[5],p=e[9],g=e[13],x=e[2],_=e[6],y=e[10],S=e[14],A=e[3],N=e[7],M=e[11],v=e[15],T=p*S-g*y,D=d*S-g*_,C=d*y-p*_,I=u*S-g*x,L=u*y-p*x,F=u*_-d*x;return t*(N*T-M*D+v*C)-r*(A*T-M*I+v*L)+o*(A*D-N*I+v*F)-l*(A*C-N*L+M*F)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],g=e[7],x=e[8],_=e[9],y=e[10],S=e[11],A=e[12],N=e[13],M=e[14],v=e[15],T=_*M*g-N*y*g+N*p*S-d*M*S-_*p*v+d*y*v,D=A*y*g-x*M*g-A*p*S+u*M*S+x*p*v-u*y*v,C=x*N*g-A*_*g+A*d*S-u*N*S-x*d*v+u*_*v,I=A*_*p-x*N*p-A*d*y+u*N*y+x*d*M-u*_*M,L=t*T+r*D+o*C+l*I;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/L;return e[0]=T*F,e[1]=(N*y*l-_*M*l-N*o*S+r*M*S+_*o*v-r*y*v)*F,e[2]=(d*M*l-N*p*l+N*o*g-r*M*g-d*o*v+r*p*v)*F,e[3]=(_*p*l-d*y*l-_*o*g+r*y*g+d*o*S-r*p*S)*F,e[4]=D*F,e[5]=(x*M*l-A*y*l+A*o*S-t*M*S-x*o*v+t*y*v)*F,e[6]=(A*p*l-u*M*l-A*o*g+t*M*g+u*o*v-t*p*v)*F,e[7]=(u*y*l-x*p*l+x*o*g-t*y*g-u*o*S+t*p*S)*F,e[8]=C*F,e[9]=(A*_*l-x*N*l-A*r*S+t*N*S+x*r*v-t*_*v)*F,e[10]=(u*N*l-A*d*l+A*r*g-t*N*g-u*r*v+t*d*v)*F,e[11]=(x*d*l-u*_*l-x*r*g+t*_*g+u*r*S-t*d*S)*F,e[12]=I*F,e[13]=(x*N*o-A*_*o+A*r*y-t*N*y-x*r*M+t*_*M)*F,e[14]=(A*d*o-u*N*o-A*r*p+t*N*p+u*r*M-t*d*M)*F,e[15]=(u*_*o-x*d*o+x*r*p-t*_*p-u*r*y+t*d*y)*F,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,d=e.y,p=e.z,g=l*u,x=l*d;return this.set(g*u+r,g*d-o*p,g*p+o*d,0,g*d+o*p,x*d+r,x*p-o*u,0,g*p-o*d,x*p+o*u,l*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,d=t._z,p=t._w,g=l+l,x=u+u,_=d+d,y=l*g,S=l*x,A=l*_,N=u*x,M=u*_,v=d*_,T=p*g,D=p*x,C=p*_,I=r.x,L=r.y,F=r.z;return o[0]=(1-(N+v))*I,o[1]=(S+C)*I,o[2]=(A-D)*I,o[3]=0,o[4]=(S-C)*L,o[5]=(1-(y+v))*L,o[6]=(M+T)*L,o[7]=0,o[8]=(A+D)*F,o[9]=(M-T)*F,o[10]=(1-(y+N))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;if(e.x=o[12],e.y=o[13],e.z=o[14],this.determinant()===0)return r.set(1,1,1),t.identity(),this;let l=sa.set(o[0],o[1],o[2]).length();const u=sa.set(o[4],o[5],o[6]).length(),d=sa.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),Li.copy(this);const g=1/l,x=1/u,_=1/d;return Li.elements[0]*=g,Li.elements[1]*=g,Li.elements[2]*=g,Li.elements[4]*=x,Li.elements[5]*=x,Li.elements[6]*=x,Li.elements[8]*=_,Li.elements[9]*=_,Li.elements[10]*=_,t.setFromRotationMatrix(Li),r.x=l,r.y=u,r.z=d,this}makePerspective(e,t,r,o,l,u,d=Xi,p=!1){const g=this.elements,x=2*l/(t-e),_=2*l/(r-o),y=(t+e)/(t-e),S=(r+o)/(r-o);let A,N;if(p)A=l/(u-l),N=u*l/(u-l);else if(d===Xi)A=-(u+l)/(u-l),N=-2*u*l/(u-l);else if(d===ec)A=-u/(u-l),N=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return g[0]=x,g[4]=0,g[8]=y,g[12]=0,g[1]=0,g[5]=_,g[9]=S,g[13]=0,g[2]=0,g[6]=0,g[10]=A,g[14]=N,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this}makeOrthographic(e,t,r,o,l,u,d=Xi,p=!1){const g=this.elements,x=2/(t-e),_=2/(r-o),y=-(t+e)/(t-e),S=-(r+o)/(r-o);let A,N;if(p)A=1/(u-l),N=u/(u-l);else if(d===Xi)A=-2/(u-l),N=-(u+l)/(u-l);else if(d===ec)A=-1/(u-l),N=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return g[0]=x,g[4]=0,g[8]=0,g[12]=y,g[1]=0,g[5]=_,g[9]=0,g[13]=S,g[2]=0,g[6]=0,g[10]=A,g[14]=N,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const sa=new $,Li=new tn,p_=new $(0,0,0),m_=new $(1,1,1),Gr=new $,Cl=new $,ui=new $,Rm=new tn,Nm=new Rs;class Zi{constructor(e=0,t=0,r=0,o=Zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],p=o[1],g=o[5],x=o[9],_=o[2],y=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(Pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(y,g),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,g)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-u,g)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Pt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,g));break;case"YZX":this._z=Math.asin(Pt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,g),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(y,g),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-x,S),this._y=0);break;default:xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Rm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nm.setFromEuler(this),this.setFromQuaternion(Nm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zi.DEFAULT_ORDER="XYZ";class Df{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let g_=0;const Pm=new $,aa=new Rs,dr=new tn,Rl=new $,ao=new $,x_=new $,v_=new Rs,Dm=new $(1,0,0),Lm=new $(0,1,0),Im=new $(0,0,1),Um={type:"added"},__={type:"removed"},oa={type:"childadded",child:null},Ju={type:"childremoved",child:null};class Tn extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=_o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const e=new $,t=new Zi,r=new Rs,o=new $(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new tn},normalMatrix:{value:new Mt}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Df,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return aa.setFromAxisAngle(e,t),this.quaternion.multiply(aa),this}rotateOnWorldAxis(e,t){return aa.setFromAxisAngle(e,t),this.quaternion.premultiply(aa),this}rotateX(e){return this.rotateOnAxis(Dm,e)}rotateY(e){return this.rotateOnAxis(Lm,e)}rotateZ(e){return this.rotateOnAxis(Im,e)}translateOnAxis(e,t){return Pm.copy(e).applyQuaternion(this.quaternion),this.position.add(Pm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dm,e)}translateY(e){return this.translateOnAxis(Lm,e)}translateZ(e){return this.translateOnAxis(Im,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Rl.copy(e):Rl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dr.lookAt(ao,Rl,this.up):dr.lookAt(Rl,ao,this.up),this.quaternion.setFromRotationMatrix(dr),o&&(dr.extractRotation(o.matrixWorld),aa.setFromRotationMatrix(dr),this.quaternion.premultiply(aa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Um),oa.child=e,this.dispatchEvent(oa),oa.child=null):Ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(__),Ju.child=e,this.dispatchEvent(Ju),Ju.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dr.multiply(e.parent.matrixWorld)),e.applyMatrix4(dr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Um),oa.child=e,this.dispatchEvent(oa),oa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,e,x_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,v_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let g=0,x=p.length;g<x;g++){const _=p[g];l(e.shapes,_)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,g=this.material.length;p<g;p++)d.push(l(e.materials,this.material[p]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(l(e.animations,p))}}if(t){const d=u(e.geometries),p=u(e.materials),g=u(e.textures),x=u(e.images),_=u(e.shapes),y=u(e.skeletons),S=u(e.animations),A=u(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),g.length>0&&(r.textures=g),x.length>0&&(r.images=x),_.length>0&&(r.shapes=_),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),A.length>0&&(r.nodes=A)}return r.object=o,r;function u(d){const p=[];for(const g in d){const x=d[g];delete x.metadata,p.push(x)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Tn.DEFAULT_UP=new $(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ii=new $,fr=new $,ed=new $,hr=new $,la=new $,ca=new $,Om=new $,td=new $,nd=new $,id=new $,rd=new sn,sd=new sn,ad=new sn;class Ui{constructor(e=new $,t=new $,r=new $){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Ii.subVectors(e,t),o.cross(Ii);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Ii.subVectors(o,t),fr.subVectors(r,t),ed.subVectors(e,t);const u=Ii.dot(Ii),d=Ii.dot(fr),p=Ii.dot(ed),g=fr.dot(fr),x=fr.dot(ed),_=u*g-d*d;if(_===0)return l.set(0,0,0),null;const y=1/_,S=(g*p-d*x)*y,A=(u*x-d*p)*y;return l.set(1-S-A,A,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,hr)===null?!1:hr.x>=0&&hr.y>=0&&hr.x+hr.y<=1}static getInterpolation(e,t,r,o,l,u,d,p){return this.getBarycoord(e,t,r,o,hr)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,hr.x),p.addScaledVector(u,hr.y),p.addScaledVector(d,hr.z),p)}static getInterpolatedAttribute(e,t,r,o,l,u){return rd.setScalar(0),sd.setScalar(0),ad.setScalar(0),rd.fromBufferAttribute(e,t),sd.fromBufferAttribute(e,r),ad.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(rd,l.x),u.addScaledVector(sd,l.y),u.addScaledVector(ad,l.z),u}static isFrontFacing(e,t,r,o){return Ii.subVectors(r,t),fr.subVectors(e,t),Ii.cross(fr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ii.subVectors(this.c,this.b),fr.subVectors(this.a,this.b),Ii.cross(fr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ui.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Ui.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,d;la.subVectors(o,r),ca.subVectors(l,r),td.subVectors(e,r);const p=la.dot(td),g=ca.dot(td);if(p<=0&&g<=0)return t.copy(r);nd.subVectors(e,o);const x=la.dot(nd),_=ca.dot(nd);if(x>=0&&_<=x)return t.copy(o);const y=p*_-x*g;if(y<=0&&p>=0&&x<=0)return u=p/(p-x),t.copy(r).addScaledVector(la,u);id.subVectors(e,l);const S=la.dot(id),A=ca.dot(id);if(A>=0&&S<=A)return t.copy(l);const N=S*g-p*A;if(N<=0&&g>=0&&A<=0)return d=g/(g-A),t.copy(r).addScaledVector(ca,d);const M=x*A-S*_;if(M<=0&&_-x>=0&&S-A>=0)return Om.subVectors(l,o),d=(_-x)/(_-x+(S-A)),t.copy(o).addScaledVector(Om,d);const v=1/(M+N+y);return u=N*v,d=y*v,t.copy(r).addScaledVector(la,u).addScaledVector(ca,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const X0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hr={h:0,s:0,l:0},Nl={h:0,s:0,l:0};function od(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class bt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,kt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=kt.workingColorSpace){return this.r=e,this.g=t,this.b=r,kt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=kt.workingColorSpace){if(e=s_(e,1),t=Pt(t,0,1),r=Pt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=od(u,l,e+1/3),this.g=od(u,l,e),this.b=od(u,l,e-1/3)}return kt.colorSpaceToWorking(this,o),this}setStyle(e,t=fi){function r(l){l!==void 0&&parseFloat(l)<1&&xt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:xt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);xt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fi){const r=X0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):xt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}copyLinearToSRGB(e){return this.r=va(e.r),this.g=va(e.g),this.b=va(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return kt.workingToColorSpace(kn.copy(this),e),Math.round(Pt(kn.r*255,0,255))*65536+Math.round(Pt(kn.g*255,0,255))*256+Math.round(Pt(kn.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=kt.workingColorSpace){kt.workingToColorSpace(kn.copy(this),t);const r=kn.r,o=kn.g,l=kn.b,u=Math.max(r,o,l),d=Math.min(r,o,l);let p,g;const x=(d+u)/2;if(d===u)p=0,g=0;else{const _=u-d;switch(g=x<=.5?_/(u+d):_/(2-u-d),u){case r:p=(o-l)/_+(o<l?6:0);break;case o:p=(l-r)/_+2;break;case l:p=(r-o)/_+4;break}p/=6}return e.h=p,e.s=g,e.l=x,e}getRGB(e,t=kt.workingColorSpace){return kt.workingToColorSpace(kn.copy(this),t),e.r=kn.r,e.g=kn.g,e.b=kn.b,e}getStyle(e=fi){kt.workingToColorSpace(kn.copy(this),e);const t=kn.r,r=kn.g,o=kn.b;return e!==fi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Hr),this.setHSL(Hr.h+e,Hr.s+t,Hr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Hr),e.getHSL(Nl);const r=Gu(Hr.h,Nl.h,t),o=Gu(Hr.s,Nl.s,t),l=Gu(Hr.l,Nl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kn=new bt;bt.NAMES=X0;let y_=0;class So extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:y_++}),this.uuid=_o(),this.name="",this.type="Material",this.blending=xa,this.side=$r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ed,this.blendDst=wd,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=_a,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ea,this.stencilZFail=ea,this.stencilZPass=ea,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){xt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){xt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==xa&&(r.blending=this.blending),this.side!==$r&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ed&&(r.blendSrc=this.blendSrc),this.blendDst!==wd&&(r.blendDst=this.blendDst),this.blendEquation!==Ms&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==_a&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ea&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ea&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ea&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const d in l){const p=l[d];delete p.metadata,u.push(p)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Es extends So{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=C0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fn=new $,Pl=new ft;let S_=0;class $i{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:S_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Mm,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Pl.fromBufferAttribute(this,t),Pl.applyMatrix3(e),this.setXY(t,Pl.x,Pl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix3(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=io(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Jn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=io(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=io(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=io(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=io(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Jn(t,this.array),r=Jn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Jn(t,this.array),r=Jn(r,this.array),o=Jn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Jn(t,this.array),r=Jn(r,this.array),o=Jn(o,this.array),l=Jn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mm&&(e.usage=this.usage),e}}class q0 extends $i{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Y0 extends $i{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class An extends $i{constructor(e,t,r){super(new Float32Array(e),t,r)}}let M_=0;const Mi=new tn,ld=new Tn,ua=new $,di=new yo,oo=new yo,bn=new $;class Ei extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=_o(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(H0(e)?Y0:q0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new Mt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mi.makeRotationFromQuaternion(e),this.applyMatrix4(Mi),this}rotateX(e){return Mi.makeRotationX(e),this.applyMatrix4(Mi),this}rotateY(e){return Mi.makeRotationY(e),this.applyMatrix4(Mi),this}rotateZ(e){return Mi.makeRotationZ(e),this.applyMatrix4(Mi),this}translate(e,t,r){return Mi.makeTranslation(e,t,r),this.applyMatrix4(Mi),this}scale(e,t,r){return Mi.makeScale(e,t,r),this.applyMatrix4(Mi),this}lookAt(e){return ld.lookAt(e),ld.updateMatrix(),this.applyMatrix4(ld.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ua).negate(),this.translate(ua.x,ua.y,ua.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new An(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];di.setFromBufferAttribute(l),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const r=this.boundingSphere.center;if(di.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];oo.setFromBufferAttribute(d),this.morphTargetsRelative?(bn.addVectors(di.min,oo.min),di.expandByPoint(bn),bn.addVectors(di.max,oo.max),di.expandByPoint(bn)):(di.expandByPoint(oo.min),di.expandByPoint(oo.max))}di.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)bn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(bn));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],p=this.morphTargetsRelative;for(let g=0,x=d.count;g<x;g++)bn.fromBufferAttribute(d,g),p&&(ua.fromBufferAttribute(e,g),bn.add(ua)),o=Math.max(o,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $i(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],p=[];for(let G=0;G<r.count;G++)d[G]=new $,p[G]=new $;const g=new $,x=new $,_=new $,y=new ft,S=new ft,A=new ft,N=new $,M=new $;function v(G,b,P){g.fromBufferAttribute(r,G),x.fromBufferAttribute(r,b),_.fromBufferAttribute(r,P),y.fromBufferAttribute(l,G),S.fromBufferAttribute(l,b),A.fromBufferAttribute(l,P),x.sub(g),_.sub(g),S.sub(y),A.sub(y);const j=1/(S.x*A.y-A.x*S.y);isFinite(j)&&(N.copy(x).multiplyScalar(A.y).addScaledVector(_,-S.y).multiplyScalar(j),M.copy(_).multiplyScalar(S.x).addScaledVector(x,-A.x).multiplyScalar(j),d[G].add(N),d[b].add(N),d[P].add(N),p[G].add(M),p[b].add(M),p[P].add(M))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let G=0,b=T.length;G<b;++G){const P=T[G],j=P.start,K=P.count;for(let Q=j,de=j+K;Q<de;Q+=3)v(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const D=new $,C=new $,I=new $,L=new $;function F(G){I.fromBufferAttribute(o,G),L.copy(I);const b=d[G];D.copy(b),D.sub(I.multiplyScalar(I.dot(b))).normalize(),C.crossVectors(L,b);const j=C.dot(p[G])<0?-1:1;u.setXYZW(G,D.x,D.y,D.z,j)}for(let G=0,b=T.length;G<b;++G){const P=T[G],j=P.start,K=P.count;for(let Q=j,de=j+K;Q<de;Q+=3)F(e.getX(Q+0)),F(e.getX(Q+1)),F(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new $i(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const o=new $,l=new $,u=new $,d=new $,p=new $,g=new $,x=new $,_=new $;if(e)for(let y=0,S=e.count;y<S;y+=3){const A=e.getX(y+0),N=e.getX(y+1),M=e.getX(y+2);o.fromBufferAttribute(t,A),l.fromBufferAttribute(t,N),u.fromBufferAttribute(t,M),x.subVectors(u,l),_.subVectors(o,l),x.cross(_),d.fromBufferAttribute(r,A),p.fromBufferAttribute(r,N),g.fromBufferAttribute(r,M),d.add(x),p.add(x),g.add(x),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(N,p.x,p.y,p.z),r.setXYZ(M,g.x,g.y,g.z)}else for(let y=0,S=t.count;y<S;y+=3)o.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),u.fromBufferAttribute(t,y+2),x.subVectors(u,l),_.subVectors(o,l),x.cross(_),r.setXYZ(y+0,x.x,x.y,x.z),r.setXYZ(y+1,x.x,x.y,x.z),r.setXYZ(y+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)bn.fromBufferAttribute(e,t),bn.normalize(),e.setXYZ(t,bn.x,bn.y,bn.z)}toNonIndexed(){function e(d,p){const g=d.array,x=d.itemSize,_=d.normalized,y=new g.constructor(p.length*x);let S=0,A=0;for(let N=0,M=p.length;N<M;N++){d.isInterleavedBufferAttribute?S=p[N]*d.data.stride+d.offset:S=p[N]*x;for(let v=0;v<x;v++)y[A++]=g[S++]}return new $i(y,x,_)}if(this.index===null)return xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ei,r=this.index.array,o=this.attributes;for(const d in o){const p=o[d],g=e(p,r);t.setAttribute(d,g)}const l=this.morphAttributes;for(const d in l){const p=[],g=l[d];for(let x=0,_=g.length;x<_;x++){const y=g[x],S=e(y,r);p.push(S)}t.morphAttributes[d]=p}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,p=u.length;d<p;d++){const g=u[d];t.addGroup(g.start,g.count,g.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const g in p)p[g]!==void 0&&(e[g]=p[g]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const g=r[p];e.data.attributes[p]=g.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const g=this.morphAttributes[p],x=[];for(let _=0,y=g.length;_<y;_++){const S=g[_];x.push(S.toJSON(e.data))}x.length>0&&(o[p]=x,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const g in o){const x=o[g];this.setAttribute(g,x.clone(t))}const l=e.morphAttributes;for(const g in l){const x=[],_=l[g];for(let y=0,S=_.length;y<S;y++)x.push(_[y].clone(t));this.morphAttributes[g]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let g=0,x=u.length;g<x;g++){const _=u[g];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fm=new tn,xs=new Pf,Dl=new Nf,km=new $,Ll=new $,Il=new $,Ul=new $,cd=new $,Ol=new $,Bm=new $,Fl=new $;class yt extends Tn{constructor(e=new Ei,t=new Es){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){Ol.set(0,0,0);for(let p=0,g=l.length;p<g;p++){const x=d[p],_=l[p];x!==0&&(cd.fromBufferAttribute(_,e),u?Ol.addScaledVector(cd,x):Ol.addScaledVector(cd.sub(t),x))}t.add(Ol)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Dl.copy(r.boundingSphere),Dl.applyMatrix4(l),xs.copy(e.ray).recast(e.near),!(Dl.containsPoint(xs.origin)===!1&&(xs.intersectSphere(Dl,km)===null||xs.origin.distanceToSquared(km)>(e.far-e.near)**2))&&(Fm.copy(l).invert(),xs.copy(e.ray).applyMatrix4(Fm),!(r.boundingBox!==null&&xs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,xs)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,d=l.index,p=l.attributes.position,g=l.attributes.uv,x=l.attributes.uv1,_=l.attributes.normal,y=l.groups,S=l.drawRange;if(d!==null)if(Array.isArray(u))for(let A=0,N=y.length;A<N;A++){const M=y[A],v=u[M.materialIndex],T=Math.max(M.start,S.start),D=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let C=T,I=D;C<I;C+=3){const L=d.getX(C),F=d.getX(C+1),G=d.getX(C+2);o=kl(this,v,e,r,g,x,_,L,F,G),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=M.materialIndex,t.push(o))}}else{const A=Math.max(0,S.start),N=Math.min(d.count,S.start+S.count);for(let M=A,v=N;M<v;M+=3){const T=d.getX(M),D=d.getX(M+1),C=d.getX(M+2);o=kl(this,u,e,r,g,x,_,T,D,C),o&&(o.faceIndex=Math.floor(M/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let A=0,N=y.length;A<N;A++){const M=y[A],v=u[M.materialIndex],T=Math.max(M.start,S.start),D=Math.min(p.count,Math.min(M.start+M.count,S.start+S.count));for(let C=T,I=D;C<I;C+=3){const L=C,F=C+1,G=C+2;o=kl(this,v,e,r,g,x,_,L,F,G),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=M.materialIndex,t.push(o))}}else{const A=Math.max(0,S.start),N=Math.min(p.count,S.start+S.count);for(let M=A,v=N;M<v;M+=3){const T=M,D=M+1,C=M+2;o=kl(this,u,e,r,g,x,_,T,D,C),o&&(o.faceIndex=Math.floor(M/3),t.push(o))}}}}function E_(s,e,t,r,o,l,u,d){let p;if(e.side===ri?p=r.intersectTriangle(u,l,o,!0,d):p=r.intersectTriangle(o,l,u,e.side===$r,d),p===null)return null;Fl.copy(d),Fl.applyMatrix4(s.matrixWorld);const g=t.ray.origin.distanceTo(Fl);return g<t.near||g>t.far?null:{distance:g,point:Fl.clone(),object:s}}function kl(s,e,t,r,o,l,u,d,p,g){s.getVertexPosition(d,Ll),s.getVertexPosition(p,Il),s.getVertexPosition(g,Ul);const x=E_(s,e,t,r,Ll,Il,Ul,Bm);if(x){const _=new $;Ui.getBarycoord(Bm,Ll,Il,Ul,_),o&&(x.uv=Ui.getInterpolatedAttribute(o,d,p,g,_,new ft)),l&&(x.uv1=Ui.getInterpolatedAttribute(l,d,p,g,_,new ft)),u&&(x.normal=Ui.getInterpolatedAttribute(u,d,p,g,_,new $),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const y={a:d,b:p,c:g,normal:new $,materialIndex:0};Ui.getNormal(Ll,Il,Ul,y.normal),x.face=y,x.barycoord=_}return x}class xn extends Ei{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const p=[],g=[],x=[],_=[];let y=0,S=0;A("z","y","x",-1,-1,r,t,e,u,l,0),A("z","y","x",1,-1,r,t,-e,u,l,1),A("x","z","y",1,1,e,r,t,o,u,2),A("x","z","y",1,-1,e,r,-t,o,u,3),A("x","y","z",1,-1,e,t,r,o,l,4),A("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(p),this.setAttribute("position",new An(g,3)),this.setAttribute("normal",new An(x,3)),this.setAttribute("uv",new An(_,2));function A(N,M,v,T,D,C,I,L,F,G,b){const P=C/F,j=I/G,K=C/2,Q=I/2,de=L/2,ue=F+1,re=G+1;let Z=0,Y=0;const pe=new $;for(let se=0;se<re;se++){const B=se*j-Q;for(let le=0;le<ue;le++){const _e=le*P-K;pe[N]=_e*T,pe[M]=B*D,pe[v]=de,g.push(pe.x,pe.y,pe.z),pe[N]=0,pe[M]=0,pe[v]=L>0?1:-1,x.push(pe.x,pe.y,pe.z),_.push(le/F),_.push(1-se/G),Z+=1}}for(let se=0;se<G;se++)for(let B=0;B<F;B++){const le=y+B+ue*se,_e=y+B+ue*(se+1),O=y+(B+1)+ue*(se+1),Te=y+(B+1)+ue*se;p.push(le,_e,Te),p.push(_e,O,Te),Y+=6}d.addGroup(S,Y,b),S+=Y,y+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ea(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Wn(s){const e={};for(let t=0;t<s.length;t++){const r=Ea(s[t]);for(const o in r)e[o]=r[o]}return e}function w_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function $0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:kt.workingColorSpace}const b_={clone:Ea,merge:Wn};var T_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,A_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends So{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=T_,this.fragmentShader=A_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ea(e.uniforms),this.uniformsGroups=w_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class K0 extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wr=new $,zm=new ft,jm=new ft;class ii extends K0{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=nc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($l*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nc*2*Math.atan(Math.tan($l*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z),Wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z)}getViewSize(e,t){return this.getViewBounds(e,zm,jm),t.subVectors(jm,zm)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($l*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,g=u.fullHeight;l+=u.offsetX*o/p,t-=u.offsetY*r/g,o*=u.width/p,r*=u.height/g}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const da=-90,fa=1;class C_ extends Tn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ii(da,fa,e,t);o.layers=this.layers,this.add(o);const l=new ii(da,fa,e,t);l.layers=this.layers,this.add(l);const u=new ii(da,fa,e,t);u.layers=this.layers,this.add(u);const d=new ii(da,fa,e,t);d.layers=this.layers,this.add(d);const p=new ii(da,fa,e,t);p.layers=this.layers,this.add(p);const g=new ii(da,fa,e,t);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,d,p]=t;for(const g of t)this.remove(g);if(e===Xi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===ec)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of t)this.add(g),g.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,p,g,x]=this.children,_=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const N=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,d),e.setRenderTarget(r,3,o),e.render(t,p),e.setRenderTarget(r,4,o),e.render(t,g),r.texture.generateMipmaps=N,e.setRenderTarget(r,5,o),e.render(t,x),e.setRenderTarget(_,y,S),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class Z0 extends zn{constructor(e=[],t=Cs,r,o,l,u,d,p,g,x){super(e,t,r,o,l,u,d,p,g,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Q0 extends Yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Z0(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new xn(5,5,5),l=new Qi({name:"CubemapFromEquirect",uniforms:Ea(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ri,blending:xr});l.uniforms.tEquirect.value=t;const u=new yt(o,l),d=t.minFilter;return t.minFilter===bs&&(t.minFilter=Bn),new C_(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}class ni extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const R_={type:"move"};class ud{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ni,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ni,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ni,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const d=this._targetRay,p=this._grip,g=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(g&&e.hand){u=!0;for(const N of e.hand.values()){const M=t.getJointPose(N,r),v=this._getHandJoint(g,N);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const x=g.joints["index-finger-tip"],_=g.joints["thumb-tip"],y=x.position.distanceTo(_.position),S=.02,A=.005;g.inputState.pinching&&y>S+A?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&y<=S-A&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(R_)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=l!==null),g!==null&&(g.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ni;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class Lf{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new bt(e),this.density=t}clone(){return new Lf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class N_ extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zi,this.environmentIntensity=1,this.environmentRotation=new Zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class P_ extends zn{constructor(e=null,t=1,r=1,o,l,u,d,p,g=Pn,x=Pn,_,y){super(null,u,d,p,g,x,o,l,_,y),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const dd=new $,D_=new $,L_=new Mt;class Xr{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=dd.subVectors(r,t).cross(D_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(dd),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||L_.getNormalMatrix(e),o=this.coplanarPoint(dd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vs=new Nf,I_=new ft(.5,.5),Bl=new $;class If{constructor(e=new Xr,t=new Xr,r=new Xr,o=new Xr,l=new Xr,u=new Xr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Xi,r=!1){const o=this.planes,l=e.elements,u=l[0],d=l[1],p=l[2],g=l[3],x=l[4],_=l[5],y=l[6],S=l[7],A=l[8],N=l[9],M=l[10],v=l[11],T=l[12],D=l[13],C=l[14],I=l[15];if(o[0].setComponents(g-u,S-x,v-A,I-T).normalize(),o[1].setComponents(g+u,S+x,v+A,I+T).normalize(),o[2].setComponents(g+d,S+_,v+N,I+D).normalize(),o[3].setComponents(g-d,S-_,v-N,I-D).normalize(),r)o[4].setComponents(p,y,M,C).normalize(),o[5].setComponents(g-p,S-y,v-M,I-C).normalize();else if(o[4].setComponents(g-p,S-y,v-M,I-C).normalize(),t===Xi)o[5].setComponents(g+p,S+y,v+M,I+C).normalize();else if(t===ec)o[5].setComponents(p,y,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(e){vs.center.set(0,0,0);const t=I_.distanceTo(e.center);return vs.radius=.7071067811865476+t,vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Bl.x=o.normal.x>0?e.max.x:e.min.x,Bl.y=o.normal.y>0?e.max.y:e.min.y,Bl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Bl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class U_ extends zn{constructor(e,t,r,o,l,u,d,p,g){super(e,t,r,o,l,u,d,p,g),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vo extends zn{constructor(e,t,r=Ki,o,l,u,d=Pn,p=Pn,g,x=yr,_=1){if(x!==yr&&x!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:t,depth:_};super(y,o,l,u,d,p,x,r,g),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class O_ extends vo{constructor(e,t=Ki,r=Cs,o,l,u=Pn,d=Pn,p,g=yr){const x={width:e,height:e,depth:1},_=[x,x,x,x,x,x];super(e,e,t,r,o,l,u,d,p,g),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class J0 extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ti extends Ei{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:d,thetaLength:p};const g=this;o=Math.floor(o),l=Math.floor(l);const x=[],_=[],y=[],S=[];let A=0;const N=[],M=r/2;let v=0;T(),u===!1&&(e>0&&D(!0),t>0&&D(!1)),this.setIndex(x),this.setAttribute("position",new An(_,3)),this.setAttribute("normal",new An(y,3)),this.setAttribute("uv",new An(S,2));function T(){const C=new $,I=new $;let L=0;const F=(t-e)/r;for(let G=0;G<=l;G++){const b=[],P=G/l,j=P*(t-e)+e;for(let K=0;K<=o;K++){const Q=K/o,de=Q*p+d,ue=Math.sin(de),re=Math.cos(de);I.x=j*ue,I.y=-P*r+M,I.z=j*re,_.push(I.x,I.y,I.z),C.set(ue,F,re).normalize(),y.push(C.x,C.y,C.z),S.push(Q,1-P),b.push(A++)}N.push(b)}for(let G=0;G<o;G++)for(let b=0;b<l;b++){const P=N[b][G],j=N[b+1][G],K=N[b+1][G+1],Q=N[b][G+1];(e>0||b!==0)&&(x.push(P,j,Q),L+=3),(t>0||b!==l-1)&&(x.push(j,K,Q),L+=3)}g.addGroup(v,L,0),v+=L}function D(C){const I=A,L=new ft,F=new $;let G=0;const b=C===!0?e:t,P=C===!0?1:-1;for(let K=1;K<=o;K++)_.push(0,M*P,0),y.push(0,P,0),S.push(.5,.5),A++;const j=A;for(let K=0;K<=o;K++){const de=K/o*p+d,ue=Math.cos(de),re=Math.sin(de);F.x=b*re,F.y=M*P,F.z=b*ue,_.push(F.x,F.y,F.z),y.push(0,P,0),L.x=ue*.5+.5,L.y=re*.5*P+.5,S.push(L.x,L.y),A++}for(let K=0;K<o;K++){const Q=I+K,de=j+K;C===!0?x.push(de,de+1,Q):x.push(de+1,de,Q),G+=3}g.addGroup(v,G,C===!0?1:2),v+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ti(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Uf extends ti{constructor(e=1,t=1,r=32,o=1,l=!1,u=0,d=Math.PI*2){super(0,e,t,r,o,l,u,d),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:d}}static fromJSON(e){return new Uf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Of extends Ei{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const l=[],u=[];d(o),g(r),x(),this.setAttribute("position",new An(l,3)),this.setAttribute("normal",new An(l.slice(),3)),this.setAttribute("uv",new An(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function d(T){const D=new $,C=new $,I=new $;for(let L=0;L<t.length;L+=3)S(t[L+0],D),S(t[L+1],C),S(t[L+2],I),p(D,C,I,T)}function p(T,D,C,I){const L=I+1,F=[];for(let G=0;G<=L;G++){F[G]=[];const b=T.clone().lerp(C,G/L),P=D.clone().lerp(C,G/L),j=L-G;for(let K=0;K<=j;K++)K===0&&G===L?F[G][K]=b:F[G][K]=b.clone().lerp(P,K/j)}for(let G=0;G<L;G++)for(let b=0;b<2*(L-G)-1;b++){const P=Math.floor(b/2);b%2===0?(y(F[G][P+1]),y(F[G+1][P]),y(F[G][P])):(y(F[G][P+1]),y(F[G+1][P+1]),y(F[G+1][P]))}}function g(T){const D=new $;for(let C=0;C<l.length;C+=3)D.x=l[C+0],D.y=l[C+1],D.z=l[C+2],D.normalize().multiplyScalar(T),l[C+0]=D.x,l[C+1]=D.y,l[C+2]=D.z}function x(){const T=new $;for(let D=0;D<l.length;D+=3){T.x=l[D+0],T.y=l[D+1],T.z=l[D+2];const C=M(T)/2/Math.PI+.5,I=v(T)/Math.PI+.5;u.push(C,1-I)}A(),_()}function _(){for(let T=0;T<u.length;T+=6){const D=u[T+0],C=u[T+2],I=u[T+4],L=Math.max(D,C,I),F=Math.min(D,C,I);L>.9&&F<.1&&(D<.2&&(u[T+0]+=1),C<.2&&(u[T+2]+=1),I<.2&&(u[T+4]+=1))}}function y(T){l.push(T.x,T.y,T.z)}function S(T,D){const C=T*3;D.x=e[C+0],D.y=e[C+1],D.z=e[C+2]}function A(){const T=new $,D=new $,C=new $,I=new $,L=new ft,F=new ft,G=new ft;for(let b=0,P=0;b<l.length;b+=9,P+=6){T.set(l[b+0],l[b+1],l[b+2]),D.set(l[b+3],l[b+4],l[b+5]),C.set(l[b+6],l[b+7],l[b+8]),L.set(u[P+0],u[P+1]),F.set(u[P+2],u[P+3]),G.set(u[P+4],u[P+5]),I.copy(T).add(D).add(C).divideScalar(3);const j=M(I);N(L,P+0,T,j),N(F,P+2,D,j),N(G,P+4,C,j)}}function N(T,D,C,I){I<0&&T.x===1&&(u[D]=T.x-1),C.x===0&&C.z===0&&(u[D]=I/2/Math.PI+.5)}function M(T){return Math.atan2(T.z,-T.x)}function v(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Of(e.vertices,e.indices,e.radius,e.detail)}}class Ff extends Of{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=1/r,l=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-o,-r,0,-o,r,0,o,-r,0,o,r,-o,-r,0,-o,r,0,o,-r,0,o,r,0,-r,0,-o,r,0,-o,-r,0,o,r,0,o],u=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(l,u,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ff(e.radius,e.detail)}}class As extends Ei{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,d=Math.floor(r),p=Math.floor(o),g=d+1,x=p+1,_=e/d,y=t/p,S=[],A=[],N=[],M=[];for(let v=0;v<x;v++){const T=v*y-u;for(let D=0;D<g;D++){const C=D*_-l;A.push(C,-T,0),N.push(0,0,1),M.push(D/d),M.push(1-v/p)}}for(let v=0;v<p;v++)for(let T=0;T<d;T++){const D=T+g*v,C=T+g*(v+1),I=T+1+g*(v+1),L=T+1+g*v;S.push(D,C,L),S.push(C,I,L)}this.setIndex(S),this.setAttribute("position",new An(A,3)),this.setAttribute("normal",new An(N,3)),this.setAttribute("uv",new An(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new As(e.width,e.height,e.widthSegments,e.heightSegments)}}class ma extends Ei{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const p=Math.min(u+d,Math.PI);let g=0;const x=[],_=new $,y=new $,S=[],A=[],N=[],M=[];for(let v=0;v<=r;v++){const T=[],D=v/r;let C=0;v===0&&u===0?C=.5/t:v===r&&p===Math.PI&&(C=-.5/t);for(let I=0;I<=t;I++){const L=I/t;_.x=-e*Math.cos(o+L*l)*Math.sin(u+D*d),_.y=e*Math.cos(u+D*d),_.z=e*Math.sin(o+L*l)*Math.sin(u+D*d),A.push(_.x,_.y,_.z),y.copy(_).normalize(),N.push(y.x,y.y,y.z),M.push(L+C,1-D),T.push(g++)}x.push(T)}for(let v=0;v<r;v++)for(let T=0;T<t;T++){const D=x[v][T+1],C=x[v][T],I=x[v+1][T],L=x[v+1][T+1];(v!==0||u>0)&&S.push(D,C,L),(v!==r-1||p<Math.PI)&&S.push(C,I,L)}this.setIndex(S),this.setAttribute("position",new An(A,3)),this.setAttribute("normal",new An(N,3)),this.setAttribute("uv",new An(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ma(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class F_ extends Qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class hn extends So{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=G0,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class k_ extends So{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$v,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class B_ extends So{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ac extends Tn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const fd=new tn,Vm=new $,Gm=new $;class kf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new If,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Vm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vm),Gm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gm),t.updateMatrixWorld(),fd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fd,t.coordinateSystem,t.reversedDepth),t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(fd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class z_ extends kf{constructor(){super(new ii(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,r=nc*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height*this.aspect,l=e.distance||t.far;(r!==t.fov||o!==t.aspect||l!==t.far)&&(t.fov=r,t.aspect=o,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class j_ extends ac{constructor(e,t,r=0,o=Math.PI/3,l=0,u=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.distance=r,this.angle=o,this.penumbra=l,this.decay=u,this.map=null,this.shadow=new z_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class V_ extends kf{constructor(){super(new ii(90,1,.5,500)),this.isPointLightShadow=!0}}class Hm extends ac{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new V_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Bf extends K0{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=g*this.view.offsetX,u=l+g*this.view.width,d-=x*this.view.offsetY,p=d-x*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class G_ extends kf{constructor(){super(new Bf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class H_ extends ac{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.shadow=new G_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class W_ extends ac{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class X_ extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class q_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Wm=new tn;class Y_{constructor(e,t,r=0,o=1/0){this.ray=new Pf(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new Df,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ft("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Wm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wm),this}intersectObject(e,t=!0,r=[]){return mf(e,this,r,t),r.sort(Xm),r}intersectObjects(e,t=!0,r=[]){for(let o=0,l=e.length;o<l;o++)mf(e[o],this,r,t);return r.sort(Xm),r}}function Xm(s,e){return s.distance-e.distance}function mf(s,e,t,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const l=s.children;for(let u=0,d=l.length;u<d;u++)mf(l[u],e,t,!0)}}class qm{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Pt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class $_ extends Ns{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){xt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Ym(s,e,t,r){const o=K_(r);switch(t){case z0:return s*e;case V0:return s*e/o.components*o.byteLength;case wf:return s*e/o.components*o.byteLength;case Sa:return s*e*2/o.components*o.byteLength;case bf:return s*e*2/o.components*o.byteLength;case j0:return s*e*3/o.components*o.byteLength;case Oi:return s*e*4/o.components*o.byteLength;case Tf:return s*e*4/o.components*o.byteLength;case Wl:case Xl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ql:case Yl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Fd:case Bd:return Math.max(s,16)*Math.max(e,8)/4;case Od:case kd:return Math.max(s,8)*Math.max(e,8)/2;case zd:case jd:case Gd:case Hd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Vd:case Wd:case Xd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Yd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case $d:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Qd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ef:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case tf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case nf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case rf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case sf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case af:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case of:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case lf:case cf:case uf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case df:case ff:return Math.ceil(s/4)*Math.ceil(e/4)*8;case hf:case pf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function K_(s){switch(s){case hi:case O0:return{byteLength:1,components:1};case mo:case F0:case _r:return{byteLength:2,components:1};case Mf:case Ef:return{byteLength:2,components:4};case Ki:case Sf:case Wi:return{byteLength:4,components:1};case k0:case B0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_f}}));typeof window<"u"&&(window.__THREE__?xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_f);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function eg(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Z_(s){const e=new WeakMap;function t(d,p){const g=d.array,x=d.usage,_=g.byteLength,y=s.createBuffer();s.bindBuffer(p,y),s.bufferData(p,g,x),d.onUploadCallback();let S;if(g instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&g instanceof Float16Array)S=s.HALF_FLOAT;else if(g instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(g instanceof Int16Array)S=s.SHORT;else if(g instanceof Uint32Array)S=s.UNSIGNED_INT;else if(g instanceof Int32Array)S=s.INT;else if(g instanceof Int8Array)S=s.BYTE;else if(g instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:y,type:S,bytesPerElement:g.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,p,g){const x=p.array,_=p.updateRanges;if(s.bindBuffer(g,d),_.length===0)s.bufferSubData(g,0,x);else{_.sort((S,A)=>S.start-A.start);let y=0;for(let S=1;S<_.length;S++){const A=_[y],N=_[S];N.start<=A.start+A.count+1?A.count=Math.max(A.count,N.start+N.count-A.start):(++y,_[y]=N)}_.length=y+1;for(let S=0,A=_.length;S<A;S++){const N=_[S];s.bufferSubData(g,N.start*x.BYTES_PER_ELEMENT,x,N.start,N.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function u(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const g=e.get(d);if(g===void 0)e.set(d,t(d,p));else if(g.version<d.version){if(g.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(g.buffer,d,p),g.version=d.version}}return{get:o,remove:l,update:u}}var Q_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J_=`#ifdef USE_ALPHAHASH
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
#endif`,e1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,i1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,r1=`#ifdef USE_AOMAP
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
#endif`,s1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,a1=`#ifdef USE_BATCHING
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
#endif`,o1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,l1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,c1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,u1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,d1=`#ifdef USE_IRIDESCENCE
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
#endif`,f1=`#ifdef USE_BUMPMAP
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
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,p1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,m1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,g1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,x1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,v1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,y1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,S1=`#define PI 3.141592653589793
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
} // validated`,M1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,E1=`vec3 transformedNormal = objectNormal;
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
#endif`,b1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,T1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,A1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,C1="gl_FragColor = linearToOutputTexel( gl_FragColor );",R1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,N1=`#ifdef USE_ENVMAP
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
#endif`,P1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,D1=`#ifdef USE_ENVMAP
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
#endif`,I1=`#ifdef USE_ENVMAP
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
#endif`,U1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,O1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,F1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,k1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,B1=`#ifdef USE_GRADIENTMAP
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
}`,z1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j1=`LambertMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,G1=`uniform bool receiveShadow;
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
#endif`,H1=`#ifdef USE_ENVMAP
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
#endif`,W1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,X1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,q1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Y1=`varying vec3 vViewPosition;
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
#endif`,K1=`uniform sampler2D dfgLUT;
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
}`,Z1=`
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
#endif`,Q1=`#if defined( RE_IndirectDiffuse )
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
#endif`,J1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ey=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ty=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ny=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ry=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ay=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,oy=`#if defined( USE_POINTS_UV )
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
#endif`,ly=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hy=`#ifdef USE_MORPHTARGETS
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
#endif`,py=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,my=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_y=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yy=`#ifdef USE_NORMALMAP
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
#endif`,Sy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,My=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ey=`#ifdef USE_CLEARCOATMAP
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
#endif`,by=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ty=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ay=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ry=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ny=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Py=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dy=`#ifdef USE_ROUGHNESSMAP
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
#endif`,Iy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Oy=`float getShadowMask() {
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
#endif`,ky=`#ifdef USE_SKINNING
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
#endif`,By=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zy=`#ifdef USE_SKINNING
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
#endif`,jy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wy=`#ifdef USE_TRANSMISSION
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
#endif`,Xy=`#ifdef USE_TRANSMISSION
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
#endif`,qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ky=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qy=`uniform sampler2D t2D;
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
}`,Jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iS=`#include <common>
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
}`,rS=`#if DEPTH_PACKING == 3200
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
}`,sS=`#define DISTANCE
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
}`,aS=`#define DISTANCE
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
}`,oS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cS=`uniform float scale;
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
}`,uS=`uniform vec3 diffuse;
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
}`,dS=`#include <common>
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
}`,fS=`uniform vec3 diffuse;
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
}`,hS=`#define LAMBERT
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
}`,pS=`#define LAMBERT
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
}`,mS=`#define MATCAP
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
}`,gS=`#define MATCAP
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
}`,xS=`#define NORMAL
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
}`,vS=`#define NORMAL
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
}`,_S=`#define PHONG
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
}`,yS=`#define PHONG
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
}`,SS=`#define STANDARD
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
}`,MS=`#define STANDARD
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
}`,ES=`#define TOON
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
}`,bS=`uniform float size;
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
}`,TS=`uniform vec3 diffuse;
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
}`,AS=`#include <common>
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
}`,RS=`uniform float rotation;
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
}`,NS=`uniform vec3 diffuse;
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
}`,wt={alphahash_fragment:Q_,alphahash_pars_fragment:J_,alphamap_fragment:e1,alphamap_pars_fragment:t1,alphatest_fragment:n1,alphatest_pars_fragment:i1,aomap_fragment:r1,aomap_pars_fragment:s1,batching_pars_vertex:a1,batching_vertex:o1,begin_vertex:l1,beginnormal_vertex:c1,bsdfs:u1,iridescence_fragment:d1,bumpmap_pars_fragment:f1,clipping_planes_fragment:h1,clipping_planes_pars_fragment:p1,clipping_planes_pars_vertex:m1,clipping_planes_vertex:g1,color_fragment:x1,color_pars_fragment:v1,color_pars_vertex:_1,color_vertex:y1,common:S1,cube_uv_reflection_fragment:M1,defaultnormal_vertex:E1,displacementmap_pars_vertex:w1,displacementmap_vertex:b1,emissivemap_fragment:T1,emissivemap_pars_fragment:A1,colorspace_fragment:C1,colorspace_pars_fragment:R1,envmap_fragment:N1,envmap_common_pars_fragment:P1,envmap_pars_fragment:D1,envmap_pars_vertex:L1,envmap_physical_pars_fragment:H1,envmap_vertex:I1,fog_vertex:U1,fog_pars_vertex:O1,fog_fragment:F1,fog_pars_fragment:k1,gradientmap_pars_fragment:B1,lightmap_pars_fragment:z1,lights_lambert_fragment:j1,lights_lambert_pars_fragment:V1,lights_pars_begin:G1,lights_toon_fragment:W1,lights_toon_pars_fragment:X1,lights_phong_fragment:q1,lights_phong_pars_fragment:Y1,lights_physical_fragment:$1,lights_physical_pars_fragment:K1,lights_fragment_begin:Z1,lights_fragment_maps:Q1,lights_fragment_end:J1,logdepthbuf_fragment:ey,logdepthbuf_pars_fragment:ty,logdepthbuf_pars_vertex:ny,logdepthbuf_vertex:iy,map_fragment:ry,map_pars_fragment:sy,map_particle_fragment:ay,map_particle_pars_fragment:oy,metalnessmap_fragment:ly,metalnessmap_pars_fragment:cy,morphinstance_vertex:uy,morphcolor_vertex:dy,morphnormal_vertex:fy,morphtarget_pars_vertex:hy,morphtarget_vertex:py,normal_fragment_begin:my,normal_fragment_maps:gy,normal_pars_fragment:xy,normal_pars_vertex:vy,normal_vertex:_y,normalmap_pars_fragment:yy,clearcoat_normal_fragment_begin:Sy,clearcoat_normal_fragment_maps:My,clearcoat_pars_fragment:Ey,iridescence_pars_fragment:wy,opaque_fragment:by,packing:Ty,premultiplied_alpha_fragment:Ay,project_vertex:Cy,dithering_fragment:Ry,dithering_pars_fragment:Ny,roughnessmap_fragment:Py,roughnessmap_pars_fragment:Dy,shadowmap_pars_fragment:Ly,shadowmap_pars_vertex:Iy,shadowmap_vertex:Uy,shadowmask_pars_fragment:Oy,skinbase_vertex:Fy,skinning_pars_vertex:ky,skinning_vertex:By,skinnormal_vertex:zy,specularmap_fragment:jy,specularmap_pars_fragment:Vy,tonemapping_fragment:Gy,tonemapping_pars_fragment:Hy,transmission_fragment:Wy,transmission_pars_fragment:Xy,uv_pars_fragment:qy,uv_pars_vertex:Yy,uv_vertex:$y,worldpos_vertex:Ky,background_vert:Zy,background_frag:Qy,backgroundCube_vert:Jy,backgroundCube_frag:eS,cube_vert:tS,cube_frag:nS,depth_vert:iS,depth_frag:rS,distance_vert:sS,distance_frag:aS,equirect_vert:oS,equirect_frag:lS,linedashed_vert:cS,linedashed_frag:uS,meshbasic_vert:dS,meshbasic_frag:fS,meshlambert_vert:hS,meshlambert_frag:pS,meshmatcap_vert:mS,meshmatcap_frag:gS,meshnormal_vert:xS,meshnormal_frag:vS,meshphong_vert:_S,meshphong_frag:yS,meshphysical_vert:SS,meshphysical_frag:MS,meshtoon_vert:ES,meshtoon_frag:wS,points_vert:bS,points_frag:TS,shadow_vert:AS,shadow_frag:CS,sprite_vert:RS,sprite_frag:NS},Fe={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Mt}},envmap:{envMap:{value:null},envMapRotation:{value:new Mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Mt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0},uvTransform:{value:new Mt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}}},Hi={basic:{uniforms:Wn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:Wn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new bt(0)}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:Wn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:Wn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:Wn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new bt(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:Wn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:Wn([Fe.points,Fe.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:Wn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:Wn([Fe.common,Fe.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:Wn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:Wn([Fe.sprite,Fe.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Mt}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distance:{uniforms:Wn([Fe.common,Fe.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distance_vert,fragmentShader:wt.distance_frag},shadow:{uniforms:Wn([Fe.lights,Fe.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};Hi.physical={uniforms:Wn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Mt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Mt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Mt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Mt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Mt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Mt}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};const zl={r:0,b:0,g:0},_s=new Zi,PS=new tn;function DS(s,e,t,r,o,l,u){const d=new bt(0);let p=l===!0?0:1,g,x,_=null,y=0,S=null;function A(D){let C=D.isScene===!0?D.background:null;return C&&C.isTexture&&(C=(D.backgroundBlurriness>0?t:e).get(C)),C}function N(D){let C=!1;const I=A(D);I===null?v(d,p):I&&I.isColor&&(v(I,1),C=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?r.buffers.color.setClear(0,0,0,1,u):L==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(D,C){const I=A(C);I&&(I.isCubeTexture||I.mapping===sc)?(x===void 0&&(x=new yt(new xn(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:Ea(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(L,F,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(x)),_s.copy(C.backgroundRotation),_s.x*=-1,_s.y*=-1,_s.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),x.material.uniforms.envMap.value=I,x.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(PS.makeRotationFromEuler(_s)),x.material.toneMapped=kt.getTransfer(I.colorSpace)!==Ht,(_!==I||y!==I.version||S!==s.toneMapping)&&(x.material.needsUpdate=!0,_=I,y=I.version,S=s.toneMapping),x.layers.enableAll(),D.unshift(x,x.geometry,x.material,0,0,null)):I&&I.isTexture&&(g===void 0&&(g=new yt(new As(2,2),new Qi({name:"BackgroundMaterial",uniforms:Ea(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:$r,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(g)),g.material.uniforms.t2D.value=I,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.toneMapped=kt.getTransfer(I.colorSpace)!==Ht,I.matrixAutoUpdate===!0&&I.updateMatrix(),g.material.uniforms.uvTransform.value.copy(I.matrix),(_!==I||y!==I.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,_=I,y=I.version,S=s.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null))}function v(D,C){D.getRGB(zl,$0(s)),r.buffers.color.setClear(zl.r,zl.g,zl.b,C,u)}function T(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,C=1){d.set(D),p=C,v(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,v(d,p)},render:N,addToRenderList:M,dispose:T}}function LS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=y(null);let l=o,u=!1;function d(P,j,K,Q,de){let ue=!1;const re=_(Q,K,j);l!==re&&(l=re,g(l.object)),ue=S(P,Q,K,de),ue&&A(P,Q,K,de),de!==null&&e.update(de,s.ELEMENT_ARRAY_BUFFER),(ue||u)&&(u=!1,C(P,j,K,Q),de!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function p(){return s.createVertexArray()}function g(P){return s.bindVertexArray(P)}function x(P){return s.deleteVertexArray(P)}function _(P,j,K){const Q=K.wireframe===!0;let de=r[P.id];de===void 0&&(de={},r[P.id]=de);let ue=de[j.id];ue===void 0&&(ue={},de[j.id]=ue);let re=ue[Q];return re===void 0&&(re=y(p()),ue[Q]=re),re}function y(P){const j=[],K=[],Q=[];for(let de=0;de<t;de++)j[de]=0,K[de]=0,Q[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:K,attributeDivisors:Q,object:P,attributes:{},index:null}}function S(P,j,K,Q){const de=l.attributes,ue=j.attributes;let re=0;const Z=K.getAttributes();for(const Y in Z)if(Z[Y].location>=0){const se=de[Y];let B=ue[Y];if(B===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(B=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(B=P.instanceColor)),se===void 0||se.attribute!==B||B&&se.data!==B.data)return!0;re++}return l.attributesNum!==re||l.index!==Q}function A(P,j,K,Q){const de={},ue=j.attributes;let re=0;const Z=K.getAttributes();for(const Y in Z)if(Z[Y].location>=0){let se=ue[Y];se===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(se=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(se=P.instanceColor));const B={};B.attribute=se,se&&se.data&&(B.data=se.data),de[Y]=B,re++}l.attributes=de,l.attributesNum=re,l.index=Q}function N(){const P=l.newAttributes;for(let j=0,K=P.length;j<K;j++)P[j]=0}function M(P){v(P,0)}function v(P,j){const K=l.newAttributes,Q=l.enabledAttributes,de=l.attributeDivisors;K[P]=1,Q[P]===0&&(s.enableVertexAttribArray(P),Q[P]=1),de[P]!==j&&(s.vertexAttribDivisor(P,j),de[P]=j)}function T(){const P=l.newAttributes,j=l.enabledAttributes;for(let K=0,Q=j.length;K<Q;K++)j[K]!==P[K]&&(s.disableVertexAttribArray(K),j[K]=0)}function D(P,j,K,Q,de,ue,re){re===!0?s.vertexAttribIPointer(P,j,K,de,ue):s.vertexAttribPointer(P,j,K,Q,de,ue)}function C(P,j,K,Q){N();const de=Q.attributes,ue=K.getAttributes(),re=j.defaultAttributeValues;for(const Z in ue){const Y=ue[Z];if(Y.location>=0){let pe=de[Z];if(pe===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(pe=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(pe=P.instanceColor)),pe!==void 0){const se=pe.normalized,B=pe.itemSize,le=e.get(pe);if(le===void 0)continue;const _e=le.buffer,O=le.type,Te=le.bytesPerElement,te=O===s.INT||O===s.UNSIGNED_INT||pe.gpuType===Sf;if(pe.isInterleavedBufferAttribute){const oe=pe.data,ve=oe.stride,Be=pe.offset;if(oe.isInstancedInterleavedBuffer){for(let he=0;he<Y.locationSize;he++)v(Y.location+he,oe.meshPerAttribute);P.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let he=0;he<Y.locationSize;he++)M(Y.location+he);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let he=0;he<Y.locationSize;he++)D(Y.location+he,B/Y.locationSize,O,se,ve*Te,(Be+B/Y.locationSize*he)*Te,te)}else{if(pe.isInstancedBufferAttribute){for(let oe=0;oe<Y.locationSize;oe++)v(Y.location+oe,pe.meshPerAttribute);P.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let oe=0;oe<Y.locationSize;oe++)M(Y.location+oe);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let oe=0;oe<Y.locationSize;oe++)D(Y.location+oe,B/Y.locationSize,O,se,B*Te,B/Y.locationSize*oe*Te,te)}}else if(re!==void 0){const se=re[Z];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(Y.location,se);break;case 3:s.vertexAttrib3fv(Y.location,se);break;case 4:s.vertexAttrib4fv(Y.location,se);break;default:s.vertexAttrib1fv(Y.location,se)}}}}T()}function I(){G();for(const P in r){const j=r[P];for(const K in j){const Q=j[K];for(const de in Q)x(Q[de].object),delete Q[de];delete j[K]}delete r[P]}}function L(P){if(r[P.id]===void 0)return;const j=r[P.id];for(const K in j){const Q=j[K];for(const de in Q)x(Q[de].object),delete Q[de];delete j[K]}delete r[P.id]}function F(P){for(const j in r){const K=r[j];if(K[P.id]===void 0)continue;const Q=K[P.id];for(const de in Q)x(Q[de].object),delete Q[de];delete K[P.id]}}function G(){b(),u=!0,l!==o&&(l=o,g(l.object))}function b(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:G,resetDefaultState:b,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfProgram:F,initAttributes:N,enableAttribute:M,disableUnusedAttributes:T}}function IS(s,e,t){let r;function o(g){r=g}function l(g,x){s.drawArrays(r,g,x),t.update(x,r,1)}function u(g,x,_){_!==0&&(s.drawArraysInstanced(r,g,x,_),t.update(x,r,_))}function d(g,x,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,g,0,x,0,_);let S=0;for(let A=0;A<_;A++)S+=x[A];t.update(S,r,1)}function p(g,x,_,y){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let A=0;A<g.length;A++)u(g[A],x[A],y[A]);else{S.multiDrawArraysInstancedWEBGL(r,g,0,x,0,y,0,_);let A=0;for(let N=0;N<_;N++)A+=x[N]*y[N];t.update(A,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function US(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==Oi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const G=F===_r&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==hi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Wi&&!G)}function p(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=t.precision!==void 0?t.precision:"highp";const x=p(g);x!==g&&(xt("WebGLRenderer:",g,"not supported, using",x,"instead."),g=x);const _=t.logarithmicDepthBuffer===!0,y=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=s.getParameter(s.MAX_SAMPLES),L=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:d,precision:g,logarithmicDepthBuffer:_,reversedDepthBuffer:y,maxTextures:S,maxVertexTextures:A,maxTextureSize:N,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:T,maxVaryings:D,maxFragmentUniforms:C,maxSamples:I,samples:L}}function OS(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Xr,d=new Mt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const S=_.length!==0||y||r!==0||o;return o=y,r=_.length,S},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,y){t=x(_,y,0)},this.setState=function(_,y,S){const A=_.clippingPlanes,N=_.clipIntersection,M=_.clipShadows,v=s.get(_);if(!o||A===null||A.length===0||l&&!M)l?x(null):g();else{const T=l?0:r,D=T*4;let C=v.clippingState||null;p.value=C,C=x(A,y,D,S);for(let I=0;I!==D;++I)C[I]=t[I];v.clippingState=C,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=T}};function g(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(_,y,S,A){const N=_!==null?_.length:0;let M=null;if(N!==0){if(M=p.value,A!==!0||M===null){const v=S+N*4,T=y.matrixWorldInverse;d.getNormalMatrix(T),(M===null||M.length<v)&&(M=new Float32Array(v));for(let D=0,C=S;D!==N;++D,C+=4)u.copy(_[D]).applyMatrix4(T,d),u.normal.toArray(M,C),M[C+3]=u.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=N,e.numIntersection=0,M}}function FS(s){let e=new WeakMap;function t(u,d){return d===Dd?u.mapping=Cs:d===Ld&&(u.mapping=ya),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===Dd||d===Ld)if(e.has(u)){const p=e.get(u).texture;return t(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const g=new Q0(p.height);return g.fromEquirectangularTexture(s,u),e.set(u,g),u.addEventListener("dispose",o),t(g.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Yr=4,$m=[.125,.215,.35,.446,.526,.582],ws=20,kS=256,lo=new Bf,Km=new bt;let hd=null,pd=0,md=0,gd=!1;const BS=new $;class Zm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:d=BS}=l;hd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,d),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=e0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(hd,pd,md),this._renderer.xr.enabled=gd,e.scissorTest=!1,ha(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Cs||e.mapping===ya?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:_r,format:Oi,colorSpace:Ma,depthBuffer:!1},o=Qm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qm(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=zS(l)),this._blurMaterial=VS(l,e,t),this._ggxMaterial=jS(l,e,t)}return o}_compileMaterial(e){const t=new yt(new Ei,e);this._renderer.compile(t,lo)}_sceneToCubeUV(e,t,r,o,l){const p=new ii(90,1,t,r),g=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],_=this._renderer,y=_.autoClear,S=_.toneMapping;_.getClearColor(Km),_.toneMapping=qi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new yt(new xn,new Es({name:"PMREM.Background",side:ri,depthWrite:!1,depthTest:!1})));const N=this._backgroundBox,M=N.material;let v=!1;const T=e.background;T?T.isColor&&(M.color.copy(T),e.background=null,v=!0):(M.color.copy(Km),v=!0);for(let D=0;D<6;D++){const C=D%3;C===0?(p.up.set(0,g[D],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+x[D],l.y,l.z)):C===1?(p.up.set(0,0,g[D]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+x[D],l.z)):(p.up.set(0,g[D],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+x[D]));const I=this._cubeSize;ha(o,C*I,D>2?I:0,I,I),_.setRenderTarget(o),v&&_.render(N,p),_.render(e,p)}_.toneMapping=S,_.autoClear=y,e.background=T}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Cs||e.mapping===ya;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=e0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jm());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const d=l.uniforms;d.envMap.value=e;const p=this._cubeSize;ha(t,0,0,3*p,2*p),r.setRenderTarget(t),r.render(u,lo)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[r];d.material=u;const p=u.uniforms,g=r/(this._lodMeshes.length-1),x=t/(this._lodMeshes.length-1),_=Math.sqrt(g*g-x*x),y=0+g*1.25,S=_*y,{_lodMax:A}=this,N=this._sizeLods[r],M=3*N*(r>A-Yr?r-A+Yr:0),v=4*(this._cubeSize-N);p.envMap.value=e.texture,p.roughness.value=S,p.mipInt.value=A-t,ha(l,M,v,3*N,2*N),o.setRenderTarget(l),o.render(d,lo),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=A-r,ha(e,M,v,3*N,2*N),o.setRenderTarget(e),o.render(d,lo)}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,d){const p=this._renderer,g=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Ft("blur direction must be either latitudinal or longitudinal!");const x=3,_=this._lodMeshes[o];_.material=g;const y=g.uniforms,S=this._sizeLods[r]-1,A=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*ws-1),N=l/A,M=isFinite(l)?1+Math.floor(x*N):ws;M>ws&&xt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${ws}`);const v=[];let T=0;for(let F=0;F<ws;++F){const G=F/N,b=Math.exp(-G*G/2);v.push(b),F===0?T+=b:F<M&&(T+=2*b)}for(let F=0;F<v.length;F++)v[F]=v[F]/T;y.envMap.value=e.texture,y.samples.value=M,y.weights.value=v,y.latitudinal.value=u==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:D}=this;y.dTheta.value=A,y.mipInt.value=D-r;const C=this._sizeLods[o],I=3*C*(o>D-Yr?o-D+Yr:0),L=4*(this._cubeSize-C);ha(t,I,L,3*C,2*C),p.setRenderTarget(t),p.render(_,lo)}}function zS(s){const e=[],t=[],r=[];let o=s;const l=s-Yr+1+$m.length;for(let u=0;u<l;u++){const d=Math.pow(2,o);e.push(d);let p=1/d;u>s-Yr?p=$m[u-s+Yr-1]:u===0&&(p=0),t.push(p);const g=1/(d-2),x=-g,_=1+g,y=[x,x,_,x,_,_,x,x,_,_,x,_],S=6,A=6,N=3,M=2,v=1,T=new Float32Array(N*A*S),D=new Float32Array(M*A*S),C=new Float32Array(v*A*S);for(let L=0;L<S;L++){const F=L%3*2/3-1,G=L>2?0:-1,b=[F,G,0,F+2/3,G,0,F+2/3,G+1,0,F,G,0,F+2/3,G+1,0,F,G+1,0];T.set(b,N*A*L),D.set(y,M*A*L);const P=[L,L,L,L,L,L];C.set(P,v*A*L)}const I=new Ei;I.setAttribute("position",new $i(T,N)),I.setAttribute("uv",new $i(D,M)),I.setAttribute("faceIndex",new $i(C,v)),r.push(new yt(I,null)),o>Yr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function Qm(s,e,t){const r=new Yi(s,e,t);return r.texture.mapping=sc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ha(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function jS(s,e,t){return new Qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:kS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:oc(),fragmentShader:`

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
		`,blending:xr,depthTest:!1,depthWrite:!1})}function VS(s,e,t){const r=new Float32Array(ws),o=new $(0,1,0);return new Qi({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:oc(),fragmentShader:`

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
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Jm(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

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
		`,blending:xr,depthTest:!1,depthWrite:!1})}function e0(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function oc(){return`

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
	`}function GS(s){let e=new WeakMap,t=null;function r(d){if(d&&d.isTexture){const p=d.mapping,g=p===Dd||p===Ld,x=p===Cs||p===ya;if(g||x){let _=e.get(d);const y=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return t===null&&(t=new Zm(s)),_=g?t.fromEquirectangular(d,_):t.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const S=d.image;return g&&S&&S.height>0||x&&S&&o(S)?(t===null&&(t=new Zm(s)),_=g?t.fromEquirectangular(d):t.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",l),_.texture):null}}}return d}function o(d){let p=0;const g=6;for(let x=0;x<g;x++)d[x]!==void 0&&p++;return p===g}function l(d){const p=d.target;p.removeEventListener("dispose",l);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function HS(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&xo("WebGLRenderer: "+r+" extension not supported."),o}}}function WS(s,e,t,r){const o={},l=new WeakMap;function u(_){const y=_.target;y.index!==null&&e.remove(y.index);for(const A in y.attributes)e.remove(y.attributes[A]);y.removeEventListener("dispose",u),delete o[y.id];const S=l.get(y);S&&(e.remove(S),l.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function d(_,y){return o[y.id]===!0||(y.addEventListener("dispose",u),o[y.id]=!0,t.memory.geometries++),y}function p(_){const y=_.attributes;for(const S in y)e.update(y[S],s.ARRAY_BUFFER)}function g(_){const y=[],S=_.index,A=_.attributes.position;let N=0;if(S!==null){const T=S.array;N=S.version;for(let D=0,C=T.length;D<C;D+=3){const I=T[D+0],L=T[D+1],F=T[D+2];y.push(I,L,L,F,F,I)}}else if(A!==void 0){const T=A.array;N=A.version;for(let D=0,C=T.length/3-1;D<C;D+=3){const I=D+0,L=D+1,F=D+2;y.push(I,L,L,F,F,I)}}else return;const M=new(H0(y)?Y0:q0)(y,1);M.version=N;const v=l.get(_);v&&e.remove(v),l.set(_,M)}function x(_){const y=l.get(_);if(y){const S=_.index;S!==null&&y.version<S.version&&g(_)}else g(_);return l.get(_)}return{get:d,update:p,getWireframeAttribute:x}}function XS(s,e,t){let r;function o(y){r=y}let l,u;function d(y){l=y.type,u=y.bytesPerElement}function p(y,S){s.drawElements(r,S,l,y*u),t.update(S,r,1)}function g(y,S,A){A!==0&&(s.drawElementsInstanced(r,S,l,y*u,A),t.update(S,r,A))}function x(y,S,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,y,0,A);let M=0;for(let v=0;v<A;v++)M+=S[v];t.update(M,r,1)}function _(y,S,A,N){if(A===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<y.length;v++)g(y[v]/u,S[v],N[v]);else{M.multiDrawElementsInstancedWEBGL(r,S,0,l,y,0,N,0,A);let v=0;for(let T=0;T<A;T++)v+=S[T]*N[T];t.update(v,r,1)}}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=g,this.renderMultiDraw=x,this.renderMultiDrawInstances=_}function qS(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:Ft("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function YS(s,e,t){const r=new WeakMap,o=new sn;function l(u,d,p){const g=u.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=x!==void 0?x.length:0;let y=r.get(d);if(y===void 0||y.count!==_){let P=function(){G.dispose(),r.delete(d),d.removeEventListener("dispose",P)};var S=P;y!==void 0&&y.texture.dispose();const A=d.morphAttributes.position!==void 0,N=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],T=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let C=0;A===!0&&(C=1),N===!0&&(C=2),M===!0&&(C=3);let I=d.attributes.position.count*C,L=1;I>e.maxTextureSize&&(L=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const F=new Float32Array(I*L*4*_),G=new W0(F,I,L,_);G.type=Wi,G.needsUpdate=!0;const b=C*4;for(let j=0;j<_;j++){const K=v[j],Q=T[j],de=D[j],ue=I*L*4*j;for(let re=0;re<K.count;re++){const Z=re*b;A===!0&&(o.fromBufferAttribute(K,re),F[ue+Z+0]=o.x,F[ue+Z+1]=o.y,F[ue+Z+2]=o.z,F[ue+Z+3]=0),N===!0&&(o.fromBufferAttribute(Q,re),F[ue+Z+4]=o.x,F[ue+Z+5]=o.y,F[ue+Z+6]=o.z,F[ue+Z+7]=0),M===!0&&(o.fromBufferAttribute(de,re),F[ue+Z+8]=o.x,F[ue+Z+9]=o.y,F[ue+Z+10]=o.z,F[ue+Z+11]=de.itemSize===4?o.w:1)}}y={count:_,texture:G,size:new ft(I,L)},r.set(d,y),d.addEventListener("dispose",P)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let A=0;for(let M=0;M<g.length;M++)A+=g[M];const N=d.morphTargetsRelative?1:1-A;p.getUniforms().setValue(s,"morphTargetBaseInfluence",N),p.getUniforms().setValue(s,"morphTargetInfluences",g)}p.getUniforms().setValue(s,"morphTargetsTexture",y.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:l}}function $S(s,e,t,r){let o=new WeakMap;function l(p){const g=r.render.frame,x=p.geometry,_=e.get(p,x);if(o.get(_)!==g&&(e.update(_),o.set(_,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),o.get(p)!==g&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,g))),p.isSkinnedMesh){const y=p.skeleton;o.get(y)!==g&&(y.update(),o.set(y,g))}return _}function u(){o=new WeakMap}function d(p){const g=p.target;g.removeEventListener("dispose",d),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:l,dispose:u}}const KS={[R0]:"LINEAR_TONE_MAPPING",[N0]:"REINHARD_TONE_MAPPING",[P0]:"CINEON_TONE_MAPPING",[yf]:"ACES_FILMIC_TONE_MAPPING",[L0]:"AGX_TONE_MAPPING",[I0]:"NEUTRAL_TONE_MAPPING",[D0]:"CUSTOM_TONE_MAPPING"};function ZS(s,e,t,r,o){const l=new Yi(e,t,{type:s,depthBuffer:r,stencilBuffer:o}),u=new Yi(e,t,{type:_r,depthBuffer:!1,stencilBuffer:!1}),d=new Ei;d.setAttribute("position",new An([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new An([0,2,0,0,2,0],2));const p=new F_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new yt(d,p),x=new Bf(-1,1,1,-1,0,1);let _=null,y=null,S=!1,A,N=null,M=[],v=!1;this.setSize=function(T,D){l.setSize(T,D),u.setSize(T,D);for(let C=0;C<M.length;C++){const I=M[C];I.setSize&&I.setSize(T,D)}},this.setEffects=function(T){M=T,v=M.length>0&&M[0].isRenderPass===!0;const D=l.width,C=l.height;for(let I=0;I<M.length;I++){const L=M[I];L.setSize&&L.setSize(D,C)}},this.begin=function(T,D){if(S||T.toneMapping===qi&&M.length===0)return!1;if(N=D,D!==null){const C=D.width,I=D.height;(l.width!==C||l.height!==I)&&this.setSize(C,I)}return v===!1&&T.setRenderTarget(l),A=T.toneMapping,T.toneMapping=qi,!0},this.hasRenderPass=function(){return v},this.end=function(T,D){T.toneMapping=A,S=!0;let C=l,I=u;for(let L=0;L<M.length;L++){const F=M[L];if(F.enabled!==!1&&(F.render(T,I,C,D),F.needsSwap!==!1)){const G=C;C=I,I=G}}if(_!==T.outputColorSpace||y!==T.toneMapping){_=T.outputColorSpace,y=T.toneMapping,p.defines={},kt.getTransfer(_)===Ht&&(p.defines.SRGB_TRANSFER="");const L=KS[y];L&&(p.defines[L]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=C.texture,T.setRenderTarget(N),T.render(g,x),N=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){l.dispose(),u.dispose(),d.dispose(),p.dispose()}}const tg=new zn,gf=new vo(1,1),ng=new W0,ig=new f_,rg=new Z0,t0=[],n0=[],i0=new Float32Array(16),r0=new Float32Array(9),s0=new Float32Array(4);function wa(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=t0[o];if(l===void 0&&(l=new Float32Array(o),t0[o]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,s[u].toArray(l,d)}return l}function vn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function _n(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function lc(s,e){let t=n0[e];t===void 0&&(t=new Int32Array(e),n0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function QS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function JS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2fv(this.addr,e),_n(t,e)}}function eM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;s.uniform3fv(this.addr,e),_n(t,e)}}function tM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4fv(this.addr,e),_n(t,e)}}function nM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(vn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),_n(t,e)}else{if(vn(t,r))return;s0.set(r),s.uniformMatrix2fv(this.addr,!1,s0),_n(t,r)}}function iM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(vn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),_n(t,e)}else{if(vn(t,r))return;r0.set(r),s.uniformMatrix3fv(this.addr,!1,r0),_n(t,r)}}function rM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(vn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),_n(t,e)}else{if(vn(t,r))return;i0.set(r),s.uniformMatrix4fv(this.addr,!1,i0),_n(t,r)}}function sM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function aM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2iv(this.addr,e),_n(t,e)}}function oM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;s.uniform3iv(this.addr,e),_n(t,e)}}function lM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4iv(this.addr,e),_n(t,e)}}function cM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function uM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2uiv(this.addr,e),_n(t,e)}}function dM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;s.uniform3uiv(this.addr,e),_n(t,e)}}function fM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4uiv(this.addr,e),_n(t,e)}}function hM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(gf.compareFunction=t.isReversedDepthBuffer()?Cf:Af,l=gf):l=tg,t.setTexture2D(e||l,o)}function pM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||ig,o)}function mM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||rg,o)}function gM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||ng,o)}function xM(s){switch(s){case 5126:return QS;case 35664:return JS;case 35665:return eM;case 35666:return tM;case 35674:return nM;case 35675:return iM;case 35676:return rM;case 5124:case 35670:return sM;case 35667:case 35671:return aM;case 35668:case 35672:return oM;case 35669:case 35673:return lM;case 5125:return cM;case 36294:return uM;case 36295:return dM;case 36296:return fM;case 35678:case 36198:case 36298:case 36306:case 35682:return hM;case 35679:case 36299:case 36307:return pM;case 35680:case 36300:case 36308:case 36293:return mM;case 36289:case 36303:case 36311:case 36292:return gM}}function vM(s,e){s.uniform1fv(this.addr,e)}function _M(s,e){const t=wa(e,this.size,2);s.uniform2fv(this.addr,t)}function yM(s,e){const t=wa(e,this.size,3);s.uniform3fv(this.addr,t)}function SM(s,e){const t=wa(e,this.size,4);s.uniform4fv(this.addr,t)}function MM(s,e){const t=wa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function EM(s,e){const t=wa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function wM(s,e){const t=wa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function bM(s,e){s.uniform1iv(this.addr,e)}function TM(s,e){s.uniform2iv(this.addr,e)}function AM(s,e){s.uniform3iv(this.addr,e)}function CM(s,e){s.uniform4iv(this.addr,e)}function RM(s,e){s.uniform1uiv(this.addr,e)}function NM(s,e){s.uniform2uiv(this.addr,e)}function PM(s,e){s.uniform3uiv(this.addr,e)}function DM(s,e){s.uniform4uiv(this.addr,e)}function LM(s,e,t){const r=this.cache,o=e.length,l=lc(t,o);vn(r,l)||(s.uniform1iv(this.addr,l),_n(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=gf:u=tg;for(let d=0;d!==o;++d)t.setTexture2D(e[d]||u,l[d])}function IM(s,e,t){const r=this.cache,o=e.length,l=lc(t,o);vn(r,l)||(s.uniform1iv(this.addr,l),_n(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||ig,l[u])}function UM(s,e,t){const r=this.cache,o=e.length,l=lc(t,o);vn(r,l)||(s.uniform1iv(this.addr,l),_n(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||rg,l[u])}function OM(s,e,t){const r=this.cache,o=e.length,l=lc(t,o);vn(r,l)||(s.uniform1iv(this.addr,l),_n(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||ng,l[u])}function FM(s){switch(s){case 5126:return vM;case 35664:return _M;case 35665:return yM;case 35666:return SM;case 35674:return MM;case 35675:return EM;case 35676:return wM;case 5124:case 35670:return bM;case 35667:case 35671:return TM;case 35668:case 35672:return AM;case 35669:case 35673:return CM;case 5125:return RM;case 36294:return NM;case 36295:return PM;case 36296:return DM;case 35678:case 36198:case 36298:case 36306:case 35682:return LM;case 35679:case 36299:case 36307:return IM;case 35680:case 36300:case 36308:case 36293:return UM;case 36289:case 36303:case 36311:case 36292:return OM}}class kM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=xM(t.type)}}class BM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=FM(t.type)}}class zM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,t[d.id],r)}}}const xd=/(\w+)(\])?(\[|\.)?/g;function a0(s,e){s.seq.push(e),s.map[e.id]=e}function jM(s,e,t){const r=s.name,o=r.length;for(xd.lastIndex=0;;){const l=xd.exec(r),u=xd.lastIndex;let d=l[1];const p=l[2]==="]",g=l[3];if(p&&(d=d|0),g===void 0||g==="["&&u+2===o){a0(t,g===void 0?new kM(d,s,e):new BM(d,s,e));break}else{let _=t.map[d];_===void 0&&(_=new zM(d),a0(t,_)),t=_}}}class Kl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(t,u),p=e.getUniformLocation(t,d.name);jM(d,p,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const d=t[l],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function o0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const VM=37297;let GM=0;function HM(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const l0=new Mt;function WM(s){kt._getMatrix(l0,kt.workingColorSpace,s);const e=`mat3( ${l0.elements.map(t=>t.toFixed(4))} )`;switch(kt.getTransfer(s)){case Jl:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return xt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function c0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+HM(s.getShaderSource(e),d)}else return l}function XM(s,e){const t=WM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const qM={[R0]:"Linear",[N0]:"Reinhard",[P0]:"Cineon",[yf]:"ACESFilmic",[L0]:"AgX",[I0]:"Neutral",[D0]:"Custom"};function YM(s,e){const t=qM[e];return t===void 0?(xt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const jl=new $;function $M(){kt.getLuminanceCoefficients(jl);const s=jl.x.toFixed(4),e=jl.y.toFixed(4),t=jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ho).join(`
`)}function ZM(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function QM(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return t}function ho(s){return s!==""}function u0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function d0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const JM=/^[ \t]*#include +<([\w\d./]+)>/gm;function xf(s){return s.replace(JM,tE)}const eE=new Map;function tE(s,e){let t=wt[e];if(t===void 0){const r=eE.get(e);if(r!==void 0)t=wt[r],xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return xf(t)}const nE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function f0(s){return s.replace(nE,iE)}function iE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function h0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const rE={[Hl]:"SHADOWMAP_TYPE_PCF",[fo]:"SHADOWMAP_TYPE_VSM"};function sE(s){return rE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const aE={[Cs]:"ENVMAP_TYPE_CUBE",[ya]:"ENVMAP_TYPE_CUBE",[sc]:"ENVMAP_TYPE_CUBE_UV"};function oE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":aE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const lE={[ya]:"ENVMAP_MODE_REFRACTION"};function cE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":lE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const uE={[C0]:"ENVMAP_BLENDING_MULTIPLY",[Xv]:"ENVMAP_BLENDING_MIX",[qv]:"ENVMAP_BLENDING_ADD"};function dE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":uE[s.combine]||"ENVMAP_BLENDING_NONE"}function fE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function hE(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const p=sE(t),g=oE(t),x=cE(t),_=dE(t),y=fE(t),S=KM(t),A=ZM(l),N=o.createProgram();let M,v,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(ho).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(ho).join(`
`),v.length>0&&(v+=`
`)):(M=[h0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ho).join(`
`),v=[h0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.envMap?"#define "+x:"",t.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qi?"#define TONE_MAPPING":"",t.toneMapping!==qi?wt.tonemapping_pars_fragment:"",t.toneMapping!==qi?YM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,XM("linearToOutputTexel",t.outputColorSpace),$M(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ho).join(`
`)),u=xf(u),u=u0(u,t),u=d0(u,t),d=xf(d),d=u0(d,t),d=d0(d,t),u=f0(u),d=f0(d),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",t.glslVersion===Em?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Em?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const D=T+M+u,C=T+v+d,I=o0(o,o.VERTEX_SHADER,D),L=o0(o,o.FRAGMENT_SHADER,C);o.attachShader(N,I),o.attachShader(N,L),t.index0AttributeName!==void 0?o.bindAttribLocation(N,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(N,0,"position"),o.linkProgram(N);function F(j){if(s.debug.checkShaderErrors){const K=o.getProgramInfoLog(N)||"",Q=o.getShaderInfoLog(I)||"",de=o.getShaderInfoLog(L)||"",ue=K.trim(),re=Q.trim(),Z=de.trim();let Y=!0,pe=!0;if(o.getProgramParameter(N,o.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,N,I,L);else{const se=c0(o,I,"vertex"),B=c0(o,L,"fragment");Ft("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(N,o.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+ue+`
`+se+`
`+B)}else ue!==""?xt("WebGLProgram: Program Info Log:",ue):(re===""||Z==="")&&(pe=!1);pe&&(j.diagnostics={runnable:Y,programLog:ue,vertexShader:{log:re,prefix:M},fragmentShader:{log:Z,prefix:v}})}o.deleteShader(I),o.deleteShader(L),G=new Kl(o,N),b=QM(o,N)}let G;this.getUniforms=function(){return G===void 0&&F(this),G};let b;this.getAttributes=function(){return b===void 0&&F(this),b};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=o.getProgramParameter(N,VM)),P},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(N),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=GM++,this.cacheKey=e,this.usedTimes=1,this.program=N,this.vertexShader=I,this.fragmentShader=L,this}let pE=0;class mE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new gE(e),t.set(e,r)),r}}class gE{constructor(e){this.id=pE++,this.code=e,this.usedTimes=0}}function xE(s,e,t,r,o,l,u){const d=new Df,p=new mE,g=new Set,x=[],_=new Map,y=o.logarithmicDepthBuffer;let S=o.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function N(b){return g.add(b),b===0?"uv":`uv${b}`}function M(b,P,j,K,Q){const de=K.fog,ue=Q.geometry,re=b.isMeshStandardMaterial?K.environment:null,Z=(b.isMeshStandardMaterial?t:e).get(b.envMap||re),Y=Z&&Z.mapping===sc?Z.image.height:null,pe=A[b.type];b.precision!==null&&(S=o.getMaxPrecision(b.precision),S!==b.precision&&xt("WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const se=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,B=se!==void 0?se.length:0;let le=0;ue.morphAttributes.position!==void 0&&(le=1),ue.morphAttributes.normal!==void 0&&(le=2),ue.morphAttributes.color!==void 0&&(le=3);let _e,O,Te,te;if(pe){const Ct=Hi[pe];_e=Ct.vertexShader,O=Ct.fragmentShader}else _e=b.vertexShader,O=b.fragmentShader,p.update(b),Te=p.getVertexShaderID(b),te=p.getFragmentShaderID(b);const oe=s.getRenderTarget(),ve=s.state.buffers.depth.getReversed(),Be=Q.isInstancedMesh===!0,he=Q.isBatchedMesh===!0,Ae=!!b.map,We=!!b.matcap,ht=!!Z,St=!!b.aoMap,Dt=!!b.lightMap,pt=!!b.bumpMap,jt=!!b.normalMap,z=!!b.displacementMap,Vt=!!b.emissiveMap,vt=!!b.metalnessMap,Et=!!b.roughnessMap,Ve=b.anisotropy>0,U=b.clearcoat>0,E=b.dispersion>0,X=b.iridescence>0,me=b.sheen>0,xe=b.transmission>0,fe=Ve&&!!b.anisotropyMap,$e=U&&!!b.clearcoatMap,Ne=U&&!!b.clearcoatNormalMap,Ge=U&&!!b.clearcoatRoughnessMap,it=X&&!!b.iridescenceMap,Me=X&&!!b.iridescenceThicknessMap,Ce=me&&!!b.sheenColorMap,Xe=me&&!!b.sheenRoughnessMap,qe=!!b.specularMap,Le=!!b.specularColorMap,gt=!!b.specularIntensityMap,H=xe&&!!b.transmissionMap,Oe=xe&&!!b.thicknessMap,be=!!b.gradientMap,Ue=!!b.alphaMap,Ee=b.alphaTest>0,ge=!!b.alphaHash,De=!!b.extensions;let ot=qi;b.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(ot=s.toneMapping);const mt={shaderID:pe,shaderType:b.type,shaderName:b.name,vertexShader:_e,fragmentShader:O,defines:b.defines,customVertexShaderID:Te,customFragmentShaderID:te,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:he,batchingColor:he&&Q._colorsTexture!==null,instancing:Be,instancingColor:Be&&Q.instanceColor!==null,instancingMorph:Be&&Q.morphTexture!==null,outputColorSpace:oe===null?s.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Ma,alphaToCoverage:!!b.alphaToCoverage,map:Ae,matcap:We,envMap:ht,envMapMode:ht&&Z.mapping,envMapCubeUVHeight:Y,aoMap:St,lightMap:Dt,bumpMap:pt,normalMap:jt,displacementMap:z,emissiveMap:Vt,normalMapObjectSpace:jt&&b.normalMapType===Kv,normalMapTangentSpace:jt&&b.normalMapType===G0,metalnessMap:vt,roughnessMap:Et,anisotropy:Ve,anisotropyMap:fe,clearcoat:U,clearcoatMap:$e,clearcoatNormalMap:Ne,clearcoatRoughnessMap:Ge,dispersion:E,iridescence:X,iridescenceMap:it,iridescenceThicknessMap:Me,sheen:me,sheenColorMap:Ce,sheenRoughnessMap:Xe,specularMap:qe,specularColorMap:Le,specularIntensityMap:gt,transmission:xe,transmissionMap:H,thicknessMap:Oe,gradientMap:be,opaque:b.transparent===!1&&b.blending===xa&&b.alphaToCoverage===!1,alphaMap:Ue,alphaTest:Ee,alphaHash:ge,combine:b.combine,mapUv:Ae&&N(b.map.channel),aoMapUv:St&&N(b.aoMap.channel),lightMapUv:Dt&&N(b.lightMap.channel),bumpMapUv:pt&&N(b.bumpMap.channel),normalMapUv:jt&&N(b.normalMap.channel),displacementMapUv:z&&N(b.displacementMap.channel),emissiveMapUv:Vt&&N(b.emissiveMap.channel),metalnessMapUv:vt&&N(b.metalnessMap.channel),roughnessMapUv:Et&&N(b.roughnessMap.channel),anisotropyMapUv:fe&&N(b.anisotropyMap.channel),clearcoatMapUv:$e&&N(b.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&N(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&N(b.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&N(b.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&N(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&N(b.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&N(b.sheenRoughnessMap.channel),specularMapUv:qe&&N(b.specularMap.channel),specularColorMapUv:Le&&N(b.specularColorMap.channel),specularIntensityMapUv:gt&&N(b.specularIntensityMap.channel),transmissionMapUv:H&&N(b.transmissionMap.channel),thicknessMapUv:Oe&&N(b.thicknessMap.channel),alphaMapUv:Ue&&N(b.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(jt||Ve),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!ue.attributes.uv&&(Ae||Ue),fog:!!de,useFog:b.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:ve,skinning:Q.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:le,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&j.length>0,shadowMapType:s.shadowMap.type,toneMapping:ot,decodeVideoTexture:Ae&&b.map.isVideoTexture===!0&&kt.getTransfer(b.map.colorSpace)===Ht,decodeVideoTextureEmissive:Vt&&b.emissiveMap.isVideoTexture===!0&&kt.getTransfer(b.emissiveMap.colorSpace)===Ht,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===pr,flipSided:b.side===ri,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:De&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&b.extensions.multiDraw===!0||he)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return mt.vertexUv1s=g.has(1),mt.vertexUv2s=g.has(2),mt.vertexUv3s=g.has(3),g.clear(),mt}function v(b){const P=[];if(b.shaderID?P.push(b.shaderID):(P.push(b.customVertexShaderID),P.push(b.customFragmentShaderID)),b.defines!==void 0)for(const j in b.defines)P.push(j),P.push(b.defines[j]);return b.isRawShaderMaterial===!1&&(T(P,b),D(P,b),P.push(s.outputColorSpace)),P.push(b.customProgramCacheKey),P.join()}function T(b,P){b.push(P.precision),b.push(P.outputColorSpace),b.push(P.envMapMode),b.push(P.envMapCubeUVHeight),b.push(P.mapUv),b.push(P.alphaMapUv),b.push(P.lightMapUv),b.push(P.aoMapUv),b.push(P.bumpMapUv),b.push(P.normalMapUv),b.push(P.displacementMapUv),b.push(P.emissiveMapUv),b.push(P.metalnessMapUv),b.push(P.roughnessMapUv),b.push(P.anisotropyMapUv),b.push(P.clearcoatMapUv),b.push(P.clearcoatNormalMapUv),b.push(P.clearcoatRoughnessMapUv),b.push(P.iridescenceMapUv),b.push(P.iridescenceThicknessMapUv),b.push(P.sheenColorMapUv),b.push(P.sheenRoughnessMapUv),b.push(P.specularMapUv),b.push(P.specularColorMapUv),b.push(P.specularIntensityMapUv),b.push(P.transmissionMapUv),b.push(P.thicknessMapUv),b.push(P.combine),b.push(P.fogExp2),b.push(P.sizeAttenuation),b.push(P.morphTargetsCount),b.push(P.morphAttributeCount),b.push(P.numDirLights),b.push(P.numPointLights),b.push(P.numSpotLights),b.push(P.numSpotLightMaps),b.push(P.numHemiLights),b.push(P.numRectAreaLights),b.push(P.numDirLightShadows),b.push(P.numPointLightShadows),b.push(P.numSpotLightShadows),b.push(P.numSpotLightShadowsWithMaps),b.push(P.numLightProbes),b.push(P.shadowMapType),b.push(P.toneMapping),b.push(P.numClippingPlanes),b.push(P.numClipIntersection),b.push(P.depthPacking)}function D(b,P){d.disableAll(),P.instancing&&d.enable(0),P.instancingColor&&d.enable(1),P.instancingMorph&&d.enable(2),P.matcap&&d.enable(3),P.envMap&&d.enable(4),P.normalMapObjectSpace&&d.enable(5),P.normalMapTangentSpace&&d.enable(6),P.clearcoat&&d.enable(7),P.iridescence&&d.enable(8),P.alphaTest&&d.enable(9),P.vertexColors&&d.enable(10),P.vertexAlphas&&d.enable(11),P.vertexUv1s&&d.enable(12),P.vertexUv2s&&d.enable(13),P.vertexUv3s&&d.enable(14),P.vertexTangents&&d.enable(15),P.anisotropy&&d.enable(16),P.alphaHash&&d.enable(17),P.batching&&d.enable(18),P.dispersion&&d.enable(19),P.batchingColor&&d.enable(20),P.gradientMap&&d.enable(21),b.push(d.mask),d.disableAll(),P.fog&&d.enable(0),P.useFog&&d.enable(1),P.flatShading&&d.enable(2),P.logarithmicDepthBuffer&&d.enable(3),P.reversedDepthBuffer&&d.enable(4),P.skinning&&d.enable(5),P.morphTargets&&d.enable(6),P.morphNormals&&d.enable(7),P.morphColors&&d.enable(8),P.premultipliedAlpha&&d.enable(9),P.shadowMapEnabled&&d.enable(10),P.doubleSided&&d.enable(11),P.flipSided&&d.enable(12),P.useDepthPacking&&d.enable(13),P.dithering&&d.enable(14),P.transmission&&d.enable(15),P.sheen&&d.enable(16),P.opaque&&d.enable(17),P.pointsUvs&&d.enable(18),P.decodeVideoTexture&&d.enable(19),P.decodeVideoTextureEmissive&&d.enable(20),P.alphaToCoverage&&d.enable(21),b.push(d.mask)}function C(b){const P=A[b.type];let j;if(P){const K=Hi[P];j=b_.clone(K.uniforms)}else j=b.uniforms;return j}function I(b,P){let j=_.get(P);return j!==void 0?++j.usedTimes:(j=new hE(s,P,b,l),x.push(j),_.set(P,j)),j}function L(b){if(--b.usedTimes===0){const P=x.indexOf(b);x[P]=x[x.length-1],x.pop(),_.delete(b.cacheKey),b.destroy()}}function F(b){p.remove(b)}function G(){p.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:C,acquireProgram:I,releaseProgram:L,releaseShaderCache:F,programs:x,dispose:G}}function vE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function o(u,d,p){s.get(u)[d]=p}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function _E(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function p0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function m0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(_,y,S,A,N,M){let v=s[e];return v===void 0?(v={id:_.id,object:_,geometry:y,material:S,groupOrder:A,renderOrder:_.renderOrder,z:N,group:M},s[e]=v):(v.id=_.id,v.object=_,v.geometry=y,v.material=S,v.groupOrder=A,v.renderOrder=_.renderOrder,v.z=N,v.group=M),e++,v}function d(_,y,S,A,N,M){const v=u(_,y,S,A,N,M);S.transmission>0?r.push(v):S.transparent===!0?o.push(v):t.push(v)}function p(_,y,S,A,N,M){const v=u(_,y,S,A,N,M);S.transmission>0?r.unshift(v):S.transparent===!0?o.unshift(v):t.unshift(v)}function g(_,y){t.length>1&&t.sort(_||_E),r.length>1&&r.sort(y||p0),o.length>1&&o.sort(y||p0)}function x(){for(let _=e,y=s.length;_<y;_++){const S=s[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:d,unshift:p,finish:x,sort:g}}function yE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new m0,s.set(r,[u])):o>=l.length?(u=new m0,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function SE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new bt};break;case"SpotLight":t={position:new $,direction:new $,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":t={color:new bt,position:new $,halfWidth:new $,halfHeight:new $};break}return s[e.id]=t,t}}}function ME(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let EE=0;function wE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function bE(s){const e=new SE,t=ME(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)r.probe.push(new $);const o=new $,l=new tn,u=new tn;function d(g){let x=0,_=0,y=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let S=0,A=0,N=0,M=0,v=0,T=0,D=0,C=0,I=0,L=0,F=0;g.sort(wE);for(let b=0,P=g.length;b<P;b++){const j=g[b],K=j.color,Q=j.intensity,de=j.distance;let ue=null;if(j.shadow&&j.shadow.map&&(j.shadow.map.texture.format===Sa?ue=j.shadow.map.texture:ue=j.shadow.map.depthTexture||j.shadow.map.texture),j.isAmbientLight)x+=K.r*Q,_+=K.g*Q,y+=K.b*Q;else if(j.isLightProbe){for(let re=0;re<9;re++)r.probe[re].addScaledVector(j.sh.coefficients[re],Q);F++}else if(j.isDirectionalLight){const re=e.get(j);if(re.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const Z=j.shadow,Y=t.get(j);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,r.directionalShadow[S]=Y,r.directionalShadowMap[S]=ue,r.directionalShadowMatrix[S]=j.shadow.matrix,T++}r.directional[S]=re,S++}else if(j.isSpotLight){const re=e.get(j);re.position.setFromMatrixPosition(j.matrixWorld),re.color.copy(K).multiplyScalar(Q),re.distance=de,re.coneCos=Math.cos(j.angle),re.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),re.decay=j.decay,r.spot[N]=re;const Z=j.shadow;if(j.map&&(r.spotLightMap[I]=j.map,I++,Z.updateMatrices(j),j.castShadow&&L++),r.spotLightMatrix[N]=Z.matrix,j.castShadow){const Y=t.get(j);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,r.spotShadow[N]=Y,r.spotShadowMap[N]=ue,C++}N++}else if(j.isRectAreaLight){const re=e.get(j);re.color.copy(K).multiplyScalar(Q),re.halfWidth.set(j.width*.5,0,0),re.halfHeight.set(0,j.height*.5,0),r.rectArea[M]=re,M++}else if(j.isPointLight){const re=e.get(j);if(re.color.copy(j.color).multiplyScalar(j.intensity),re.distance=j.distance,re.decay=j.decay,j.castShadow){const Z=j.shadow,Y=t.get(j);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,Y.shadowCameraNear=Z.camera.near,Y.shadowCameraFar=Z.camera.far,r.pointShadow[A]=Y,r.pointShadowMap[A]=ue,r.pointShadowMatrix[A]=j.shadow.matrix,D++}r.point[A]=re,A++}else if(j.isHemisphereLight){const re=e.get(j);re.skyColor.copy(j.color).multiplyScalar(Q),re.groundColor.copy(j.groundColor).multiplyScalar(Q),r.hemi[v]=re,v++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Fe.LTC_FLOAT_1,r.rectAreaLTC2=Fe.LTC_FLOAT_2):(r.rectAreaLTC1=Fe.LTC_HALF_1,r.rectAreaLTC2=Fe.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=_,r.ambient[2]=y;const G=r.hash;(G.directionalLength!==S||G.pointLength!==A||G.spotLength!==N||G.rectAreaLength!==M||G.hemiLength!==v||G.numDirectionalShadows!==T||G.numPointShadows!==D||G.numSpotShadows!==C||G.numSpotMaps!==I||G.numLightProbes!==F)&&(r.directional.length=S,r.spot.length=N,r.rectArea.length=M,r.point.length=A,r.hemi.length=v,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=C+I-L,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=F,G.directionalLength=S,G.pointLength=A,G.spotLength=N,G.rectAreaLength=M,G.hemiLength=v,G.numDirectionalShadows=T,G.numPointShadows=D,G.numSpotShadows=C,G.numSpotMaps=I,G.numLightProbes=F,r.version=EE++)}function p(g,x){let _=0,y=0,S=0,A=0,N=0;const M=x.matrixWorldInverse;for(let v=0,T=g.length;v<T;v++){const D=g[v];if(D.isDirectionalLight){const C=r.directional[_];C.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(M),_++}else if(D.isSpotLight){const C=r.spot[S];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(M),C.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(M),S++}else if(D.isRectAreaLight){const C=r.rectArea[A];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(M),u.identity(),l.copy(D.matrixWorld),l.premultiply(M),u.extractRotation(l),C.halfWidth.set(D.width*.5,0,0),C.halfHeight.set(0,D.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),A++}else if(D.isPointLight){const C=r.point[y];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(M),y++}else if(D.isHemisphereLight){const C=r.hemi[N];C.direction.setFromMatrixPosition(D.matrixWorld),C.direction.transformDirection(M),N++}}}return{setup:d,setupView:p,state:r}}function g0(s){const e=new bE(s),t=[],r=[];function o(x){g.camera=x,t.length=0,r.length=0}function l(x){t.push(x)}function u(x){r.push(x)}function d(){e.setup(t)}function p(x){e.setupView(t,x)}const g={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:g,setupLights:d,setupLightsView:p,pushLight:l,pushShadow:u}}function TE(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new g0(s),e.set(o,[d])):l>=u.length?(d=new g0(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const AE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CE=`uniform sampler2D shadow_pass;
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
}`,RE=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],NE=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],x0=new tn,co=new $,vd=new $;function PE(s,e,t){let r=new If;const o=new ft,l=new ft,u=new sn,d=new k_,p=new B_,g={},x=t.maxTextureSize,_={[$r]:ri,[ri]:$r,[pr]:pr},y=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:AE,fragmentShader:CE}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const A=new Ei;A.setAttribute("position",new $i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const N=new yt(A,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hl;let v=this.type;this.render=function(L,F,G){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||L.length===0)return;L.type===A0&&(xt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),L.type=Hl);const b=s.getRenderTarget(),P=s.getActiveCubeFace(),j=s.getActiveMipmapLevel(),K=s.state;K.setBlending(xr),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const Q=v!==this.type;Q&&F.traverse(function(de){de.material&&(Array.isArray(de.material)?de.material.forEach(ue=>ue.needsUpdate=!0):de.material.needsUpdate=!0)});for(let de=0,ue=L.length;de<ue;de++){const re=L[de],Z=re.shadow;if(Z===void 0){xt("WebGLShadowMap:",re,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;o.copy(Z.mapSize);const Y=Z.getFrameExtents();if(o.multiply(Y),l.copy(Z.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(l.x=Math.floor(x/Y.x),o.x=l.x*Y.x,Z.mapSize.x=l.x),o.y>x&&(l.y=Math.floor(x/Y.y),o.y=l.y*Y.y,Z.mapSize.y=l.y)),Z.map===null||Q===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===fo){if(re.isPointLight){xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Yi(o.x,o.y,{format:Sa,type:_r,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),Z.map.texture.name=re.name+".shadowMap",Z.map.depthTexture=new vo(o.x,o.y,Wi),Z.map.depthTexture.name=re.name+".shadowMapDepth",Z.map.depthTexture.format=yr,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Pn,Z.map.depthTexture.magFilter=Pn}else{re.isPointLight?(Z.map=new Q0(o.x),Z.map.depthTexture=new O_(o.x,Ki)):(Z.map=new Yi(o.x,o.y),Z.map.depthTexture=new vo(o.x,o.y,Ki)),Z.map.depthTexture.name=re.name+".shadowMap",Z.map.depthTexture.format=yr;const se=s.state.buffers.depth.getReversed();this.type===Hl?(Z.map.depthTexture.compareFunction=se?Cf:Af,Z.map.depthTexture.minFilter=Bn,Z.map.depthTexture.magFilter=Bn):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Pn,Z.map.depthTexture.magFilter=Pn)}Z.camera.updateProjectionMatrix()}const pe=Z.map.isWebGLCubeRenderTarget?6:1;for(let se=0;se<pe;se++){if(Z.map.isWebGLCubeRenderTarget)s.setRenderTarget(Z.map,se),s.clear();else{se===0&&(s.setRenderTarget(Z.map),s.clear());const B=Z.getViewport(se);u.set(l.x*B.x,l.y*B.y,l.x*B.z,l.y*B.w),K.viewport(u)}if(re.isPointLight){const B=Z.camera,le=Z.matrix,_e=re.distance||B.far;_e!==B.far&&(B.far=_e,B.updateProjectionMatrix()),co.setFromMatrixPosition(re.matrixWorld),B.position.copy(co),vd.copy(B.position),vd.add(RE[se]),B.up.copy(NE[se]),B.lookAt(vd),B.updateMatrixWorld(),le.makeTranslation(-co.x,-co.y,-co.z),x0.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(x0,B.coordinateSystem,B.reversedDepth)}else Z.updateMatrices(re);r=Z.getFrustum(),C(F,G,Z.camera,re,this.type)}Z.isPointLightShadow!==!0&&this.type===fo&&T(Z,G),Z.needsUpdate=!1}v=this.type,M.needsUpdate=!1,s.setRenderTarget(b,P,j)};function T(L,F){const G=e.update(N);y.defines.VSM_SAMPLES!==L.blurSamples&&(y.defines.VSM_SAMPLES=L.blurSamples,S.defines.VSM_SAMPLES=L.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Yi(o.x,o.y,{format:Sa,type:_r})),y.uniforms.shadow_pass.value=L.map.depthTexture,y.uniforms.resolution.value=L.mapSize,y.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(F,null,G,y,N,null),S.uniforms.shadow_pass.value=L.mapPass.texture,S.uniforms.resolution.value=L.mapSize,S.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(F,null,G,S,N,null)}function D(L,F,G,b){let P=null;const j=G.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(j!==void 0)P=j;else if(P=G.isPointLight===!0?p:d,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const K=P.uuid,Q=F.uuid;let de=g[K];de===void 0&&(de={},g[K]=de);let ue=de[Q];ue===void 0&&(ue=P.clone(),de[Q]=ue,F.addEventListener("dispose",I)),P=ue}if(P.visible=F.visible,P.wireframe=F.wireframe,b===fo?P.side=F.shadowSide!==null?F.shadowSide:F.side:P.side=F.shadowSide!==null?F.shadowSide:_[F.side],P.alphaMap=F.alphaMap,P.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,P.map=F.map,P.clipShadows=F.clipShadows,P.clippingPlanes=F.clippingPlanes,P.clipIntersection=F.clipIntersection,P.displacementMap=F.displacementMap,P.displacementScale=F.displacementScale,P.displacementBias=F.displacementBias,P.wireframeLinewidth=F.wireframeLinewidth,P.linewidth=F.linewidth,G.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const K=s.properties.get(P);K.light=G}return P}function C(L,F,G,b,P){if(L.visible===!1)return;if(L.layers.test(F.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&P===fo)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,L.matrixWorld);const Q=e.update(L),de=L.material;if(Array.isArray(de)){const ue=Q.groups;for(let re=0,Z=ue.length;re<Z;re++){const Y=ue[re],pe=de[Y.materialIndex];if(pe&&pe.visible){const se=D(L,pe,b,P);L.onBeforeShadow(s,L,F,G,Q,se,Y),s.renderBufferDirect(G,null,Q,se,L,Y),L.onAfterShadow(s,L,F,G,Q,se,Y)}}}else if(de.visible){const ue=D(L,de,b,P);L.onBeforeShadow(s,L,F,G,Q,ue,null),s.renderBufferDirect(G,null,Q,ue,L,null),L.onAfterShadow(s,L,F,G,Q,ue,null)}}const K=L.children;for(let Q=0,de=K.length;Q<de;Q++)C(K[Q],F,G,b,P)}function I(L){L.target.removeEventListener("dispose",I);for(const G in g){const b=g[G],P=L.target.uuid;P in b&&(b[P].dispose(),delete b[P])}}}const DE={[bd]:Td,[Ad]:Nd,[Cd]:Pd,[_a]:Rd,[Td]:bd,[Nd]:Ad,[Pd]:Cd,[Rd]:_a};function LE(s,e){function t(){let H=!1;const Oe=new sn;let be=null;const Ue=new sn(0,0,0,0);return{setMask:function(Ee){be!==Ee&&!H&&(s.colorMask(Ee,Ee,Ee,Ee),be=Ee)},setLocked:function(Ee){H=Ee},setClear:function(Ee,ge,De,ot,mt){mt===!0&&(Ee*=ot,ge*=ot,De*=ot),Oe.set(Ee,ge,De,ot),Ue.equals(Oe)===!1&&(s.clearColor(Ee,ge,De,ot),Ue.copy(Oe))},reset:function(){H=!1,be=null,Ue.set(-1,0,0,0)}}}function r(){let H=!1,Oe=!1,be=null,Ue=null,Ee=null;return{setReversed:function(ge){if(Oe!==ge){const De=e.get("EXT_clip_control");ge?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),Oe=ge;const ot=Ee;Ee=null,this.setClear(ot)}},getReversed:function(){return Oe},setTest:function(ge){ge?oe(s.DEPTH_TEST):ve(s.DEPTH_TEST)},setMask:function(ge){be!==ge&&!H&&(s.depthMask(ge),be=ge)},setFunc:function(ge){if(Oe&&(ge=DE[ge]),Ue!==ge){switch(ge){case bd:s.depthFunc(s.NEVER);break;case Td:s.depthFunc(s.ALWAYS);break;case Ad:s.depthFunc(s.LESS);break;case _a:s.depthFunc(s.LEQUAL);break;case Cd:s.depthFunc(s.EQUAL);break;case Rd:s.depthFunc(s.GEQUAL);break;case Nd:s.depthFunc(s.GREATER);break;case Pd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ue=ge}},setLocked:function(ge){H=ge},setClear:function(ge){Ee!==ge&&(Oe&&(ge=1-ge),s.clearDepth(ge),Ee=ge)},reset:function(){H=!1,be=null,Ue=null,Ee=null,Oe=!1}}}function o(){let H=!1,Oe=null,be=null,Ue=null,Ee=null,ge=null,De=null,ot=null,mt=null;return{setTest:function(Ct){H||(Ct?oe(s.STENCIL_TEST):ve(s.STENCIL_TEST))},setMask:function(Ct){Oe!==Ct&&!H&&(s.stencilMask(Ct),Oe=Ct)},setFunc:function(Ct,cn,Cn){(be!==Ct||Ue!==cn||Ee!==Cn)&&(s.stencilFunc(Ct,cn,Cn),be=Ct,Ue=cn,Ee=Cn)},setOp:function(Ct,cn,Cn){(ge!==Ct||De!==cn||ot!==Cn)&&(s.stencilOp(Ct,cn,Cn),ge=Ct,De=cn,ot=Cn)},setLocked:function(Ct){H=Ct},setClear:function(Ct){mt!==Ct&&(s.clearStencil(Ct),mt=Ct)},reset:function(){H=!1,Oe=null,be=null,Ue=null,Ee=null,ge=null,De=null,ot=null,mt=null}}}const l=new t,u=new r,d=new o,p=new WeakMap,g=new WeakMap;let x={},_={},y=new WeakMap,S=[],A=null,N=!1,M=null,v=null,T=null,D=null,C=null,I=null,L=null,F=new bt(0,0,0),G=0,b=!1,P=null,j=null,K=null,Q=null,de=null;const ue=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,Z=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),re=Z>=1):Y.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),re=Z>=2);let pe=null,se={};const B=s.getParameter(s.SCISSOR_BOX),le=s.getParameter(s.VIEWPORT),_e=new sn().fromArray(B),O=new sn().fromArray(le);function Te(H,Oe,be,Ue){const Ee=new Uint8Array(4),ge=s.createTexture();s.bindTexture(H,ge),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let De=0;De<be;De++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Oe,0,s.RGBA,1,1,Ue,0,s.RGBA,s.UNSIGNED_BYTE,Ee):s.texImage2D(Oe+De,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ee);return ge}const te={};te[s.TEXTURE_2D]=Te(s.TEXTURE_2D,s.TEXTURE_2D,1),te[s.TEXTURE_CUBE_MAP]=Te(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[s.TEXTURE_2D_ARRAY]=Te(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),te[s.TEXTURE_3D]=Te(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),oe(s.DEPTH_TEST),u.setFunc(_a),pt(!1),jt(xm),oe(s.CULL_FACE),St(xr);function oe(H){x[H]!==!0&&(s.enable(H),x[H]=!0)}function ve(H){x[H]!==!1&&(s.disable(H),x[H]=!1)}function Be(H,Oe){return _[H]!==Oe?(s.bindFramebuffer(H,Oe),_[H]=Oe,H===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Oe),H===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Oe),!0):!1}function he(H,Oe){let be=S,Ue=!1;if(H){be=y.get(Oe),be===void 0&&(be=[],y.set(Oe,be));const Ee=H.textures;if(be.length!==Ee.length||be[0]!==s.COLOR_ATTACHMENT0){for(let ge=0,De=Ee.length;ge<De;ge++)be[ge]=s.COLOR_ATTACHMENT0+ge;be.length=Ee.length,Ue=!0}}else be[0]!==s.BACK&&(be[0]=s.BACK,Ue=!0);Ue&&s.drawBuffers(be)}function Ae(H){return A!==H?(s.useProgram(H),A=H,!0):!1}const We={[Ms]:s.FUNC_ADD,[Rv]:s.FUNC_SUBTRACT,[Nv]:s.FUNC_REVERSE_SUBTRACT};We[Pv]=s.MIN,We[Dv]=s.MAX;const ht={[Lv]:s.ZERO,[Iv]:s.ONE,[Uv]:s.SRC_COLOR,[Ed]:s.SRC_ALPHA,[jv]:s.SRC_ALPHA_SATURATE,[Bv]:s.DST_COLOR,[Fv]:s.DST_ALPHA,[Ov]:s.ONE_MINUS_SRC_COLOR,[wd]:s.ONE_MINUS_SRC_ALPHA,[zv]:s.ONE_MINUS_DST_COLOR,[kv]:s.ONE_MINUS_DST_ALPHA,[Vv]:s.CONSTANT_COLOR,[Gv]:s.ONE_MINUS_CONSTANT_COLOR,[Hv]:s.CONSTANT_ALPHA,[Wv]:s.ONE_MINUS_CONSTANT_ALPHA};function St(H,Oe,be,Ue,Ee,ge,De,ot,mt,Ct){if(H===xr){N===!0&&(ve(s.BLEND),N=!1);return}if(N===!1&&(oe(s.BLEND),N=!0),H!==Cv){if(H!==M||Ct!==b){if((v!==Ms||C!==Ms)&&(s.blendEquation(s.FUNC_ADD),v=Ms,C=Ms),Ct)switch(H){case xa:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case vm:s.blendFunc(s.ONE,s.ONE);break;case _m:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ym:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ft("WebGLState: Invalid blending: ",H);break}else switch(H){case xa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case vm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case _m:Ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ym:Ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ft("WebGLState: Invalid blending: ",H);break}T=null,D=null,I=null,L=null,F.set(0,0,0),G=0,M=H,b=Ct}return}Ee=Ee||Oe,ge=ge||be,De=De||Ue,(Oe!==v||Ee!==C)&&(s.blendEquationSeparate(We[Oe],We[Ee]),v=Oe,C=Ee),(be!==T||Ue!==D||ge!==I||De!==L)&&(s.blendFuncSeparate(ht[be],ht[Ue],ht[ge],ht[De]),T=be,D=Ue,I=ge,L=De),(ot.equals(F)===!1||mt!==G)&&(s.blendColor(ot.r,ot.g,ot.b,mt),F.copy(ot),G=mt),M=H,b=!1}function Dt(H,Oe){H.side===pr?ve(s.CULL_FACE):oe(s.CULL_FACE);let be=H.side===ri;Oe&&(be=!be),pt(be),H.blending===xa&&H.transparent===!1?St(xr):St(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),l.setMask(H.colorWrite);const Ue=H.stencilWrite;d.setTest(Ue),Ue&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Vt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?oe(s.SAMPLE_ALPHA_TO_COVERAGE):ve(s.SAMPLE_ALPHA_TO_COVERAGE)}function pt(H){P!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),P=H)}function jt(H){H!==Tv?(oe(s.CULL_FACE),H!==j&&(H===xm?s.cullFace(s.BACK):H===Av?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ve(s.CULL_FACE),j=H}function z(H){H!==K&&(re&&s.lineWidth(H),K=H)}function Vt(H,Oe,be){H?(oe(s.POLYGON_OFFSET_FILL),(Q!==Oe||de!==be)&&(s.polygonOffset(Oe,be),Q=Oe,de=be)):ve(s.POLYGON_OFFSET_FILL)}function vt(H){H?oe(s.SCISSOR_TEST):ve(s.SCISSOR_TEST)}function Et(H){H===void 0&&(H=s.TEXTURE0+ue-1),pe!==H&&(s.activeTexture(H),pe=H)}function Ve(H,Oe,be){be===void 0&&(pe===null?be=s.TEXTURE0+ue-1:be=pe);let Ue=se[be];Ue===void 0&&(Ue={type:void 0,texture:void 0},se[be]=Ue),(Ue.type!==H||Ue.texture!==Oe)&&(pe!==be&&(s.activeTexture(be),pe=be),s.bindTexture(H,Oe||te[H]),Ue.type=H,Ue.texture=Oe)}function U(){const H=se[pe];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(H){Ft("WebGLState:",H)}}function X(){try{s.compressedTexImage3D(...arguments)}catch(H){Ft("WebGLState:",H)}}function me(){try{s.texSubImage2D(...arguments)}catch(H){Ft("WebGLState:",H)}}function xe(){try{s.texSubImage3D(...arguments)}catch(H){Ft("WebGLState:",H)}}function fe(){try{s.compressedTexSubImage2D(...arguments)}catch(H){Ft("WebGLState:",H)}}function $e(){try{s.compressedTexSubImage3D(...arguments)}catch(H){Ft("WebGLState:",H)}}function Ne(){try{s.texStorage2D(...arguments)}catch(H){Ft("WebGLState:",H)}}function Ge(){try{s.texStorage3D(...arguments)}catch(H){Ft("WebGLState:",H)}}function it(){try{s.texImage2D(...arguments)}catch(H){Ft("WebGLState:",H)}}function Me(){try{s.texImage3D(...arguments)}catch(H){Ft("WebGLState:",H)}}function Ce(H){_e.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),_e.copy(H))}function Xe(H){O.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),O.copy(H))}function qe(H,Oe){let be=g.get(Oe);be===void 0&&(be=new WeakMap,g.set(Oe,be));let Ue=be.get(H);Ue===void 0&&(Ue=s.getUniformBlockIndex(Oe,H.name),be.set(H,Ue))}function Le(H,Oe){const Ue=g.get(Oe).get(H);p.get(Oe)!==Ue&&(s.uniformBlockBinding(Oe,Ue,H.__bindingPointIndex),p.set(Oe,Ue))}function gt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},pe=null,se={},_={},y=new WeakMap,S=[],A=null,N=!1,M=null,v=null,T=null,D=null,C=null,I=null,L=null,F=new bt(0,0,0),G=0,b=!1,P=null,j=null,K=null,Q=null,de=null,_e.set(0,0,s.canvas.width,s.canvas.height),O.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:oe,disable:ve,bindFramebuffer:Be,drawBuffers:he,useProgram:Ae,setBlending:St,setMaterial:Dt,setFlipSided:pt,setCullFace:jt,setLineWidth:z,setPolygonOffset:Vt,setScissorTest:vt,activeTexture:Et,bindTexture:Ve,unbindTexture:U,compressedTexImage2D:E,compressedTexImage3D:X,texImage2D:it,texImage3D:Me,updateUBOMapping:qe,uniformBlockBinding:Le,texStorage2D:Ne,texStorage3D:Ge,texSubImage2D:me,texSubImage3D:xe,compressedTexSubImage2D:fe,compressedTexSubImage3D:$e,scissor:Ce,viewport:Xe,reset:gt}}function IE(s,e,t,r,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new ft,x=new WeakMap;let _;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(U,E){return S?new OffscreenCanvas(U,E):tc("canvas")}function N(U,E,X){let me=1;const xe=Ve(U);if((xe.width>X||xe.height>X)&&(me=X/Math.max(xe.width,xe.height)),me<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const fe=Math.floor(me*xe.width),$e=Math.floor(me*xe.height);_===void 0&&(_=A(fe,$e));const Ne=E?A(fe,$e):_;return Ne.width=fe,Ne.height=$e,Ne.getContext("2d").drawImage(U,0,0,fe,$e),xt("WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+fe+"x"+$e+")."),Ne}else return"data"in U&&xt("WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),U;return U}function M(U){return U.generateMipmaps}function v(U){s.generateMipmap(U)}function T(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(U,E,X,me,xe=!1){if(U!==null){if(s[U]!==void 0)return s[U];xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let fe=E;if(E===s.RED&&(X===s.FLOAT&&(fe=s.R32F),X===s.HALF_FLOAT&&(fe=s.R16F),X===s.UNSIGNED_BYTE&&(fe=s.R8)),E===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(fe=s.R8UI),X===s.UNSIGNED_SHORT&&(fe=s.R16UI),X===s.UNSIGNED_INT&&(fe=s.R32UI),X===s.BYTE&&(fe=s.R8I),X===s.SHORT&&(fe=s.R16I),X===s.INT&&(fe=s.R32I)),E===s.RG&&(X===s.FLOAT&&(fe=s.RG32F),X===s.HALF_FLOAT&&(fe=s.RG16F),X===s.UNSIGNED_BYTE&&(fe=s.RG8)),E===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(fe=s.RG8UI),X===s.UNSIGNED_SHORT&&(fe=s.RG16UI),X===s.UNSIGNED_INT&&(fe=s.RG32UI),X===s.BYTE&&(fe=s.RG8I),X===s.SHORT&&(fe=s.RG16I),X===s.INT&&(fe=s.RG32I)),E===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),X===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),X===s.UNSIGNED_INT&&(fe=s.RGB32UI),X===s.BYTE&&(fe=s.RGB8I),X===s.SHORT&&(fe=s.RGB16I),X===s.INT&&(fe=s.RGB32I)),E===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),X===s.UNSIGNED_INT&&(fe=s.RGBA32UI),X===s.BYTE&&(fe=s.RGBA8I),X===s.SHORT&&(fe=s.RGBA16I),X===s.INT&&(fe=s.RGBA32I)),E===s.RGB&&(X===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),X===s.UNSIGNED_INT_10F_11F_11F_REV&&(fe=s.R11F_G11F_B10F)),E===s.RGBA){const $e=xe?Jl:kt.getTransfer(me);X===s.FLOAT&&(fe=s.RGBA32F),X===s.HALF_FLOAT&&(fe=s.RGBA16F),X===s.UNSIGNED_BYTE&&(fe=$e===Ht?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function C(U,E){let X;return U?E===null||E===Ki||E===go?X=s.DEPTH24_STENCIL8:E===Wi?X=s.DEPTH32F_STENCIL8:E===mo&&(X=s.DEPTH24_STENCIL8,xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ki||E===go?X=s.DEPTH_COMPONENT24:E===Wi?X=s.DEPTH_COMPONENT32F:E===mo&&(X=s.DEPTH_COMPONENT16),X}function I(U,E){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==Pn&&U.minFilter!==Bn?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function L(U){const E=U.target;E.removeEventListener("dispose",L),G(E),E.isVideoTexture&&x.delete(E)}function F(U){const E=U.target;E.removeEventListener("dispose",F),P(E)}function G(U){const E=r.get(U);if(E.__webglInit===void 0)return;const X=U.source,me=y.get(X);if(me){const xe=me[E.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&b(U),Object.keys(me).length===0&&y.delete(X)}r.remove(U)}function b(U){const E=r.get(U);s.deleteTexture(E.__webglTexture);const X=U.source,me=y.get(X);delete me[E.__cacheKey],u.memory.textures--}function P(U){const E=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(E.__webglFramebuffer[me]))for(let xe=0;xe<E.__webglFramebuffer[me].length;xe++)s.deleteFramebuffer(E.__webglFramebuffer[me][xe]);else s.deleteFramebuffer(E.__webglFramebuffer[me]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[me])}else{if(Array.isArray(E.__webglFramebuffer))for(let me=0;me<E.__webglFramebuffer.length;me++)s.deleteFramebuffer(E.__webglFramebuffer[me]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let me=0;me<E.__webglColorRenderbuffer.length;me++)E.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[me]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const X=U.textures;for(let me=0,xe=X.length;me<xe;me++){const fe=r.get(X[me]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),u.memory.textures--),r.remove(X[me])}r.remove(U)}let j=0;function K(){j=0}function Q(){const U=j;return U>=o.maxTextures&&xt("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),j+=1,U}function de(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function ue(U,E){const X=r.get(U);if(U.isVideoTexture&&vt(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&X.__version!==U.version){const me=U.image;if(me===null)xt("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)xt("WebGLRenderer: Texture marked for update but image is incomplete");else{te(X,U,E);return}}else U.isExternalTexture&&(X.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+E)}function re(U,E){const X=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&X.__version!==U.version){te(X,U,E);return}else U.isExternalTexture&&(X.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+E)}function Z(U,E){const X=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&X.__version!==U.version){te(X,U,E);return}t.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+E)}function Y(U,E){const X=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&X.__version!==U.version){oe(X,U,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+E)}const pe={[Id]:s.REPEAT,[mr]:s.CLAMP_TO_EDGE,[Ud]:s.MIRRORED_REPEAT},se={[Pn]:s.NEAREST,[Yv]:s.NEAREST_MIPMAP_NEAREST,[Ml]:s.NEAREST_MIPMAP_LINEAR,[Bn]:s.LINEAR,[Vu]:s.LINEAR_MIPMAP_NEAREST,[bs]:s.LINEAR_MIPMAP_LINEAR},B={[Zv]:s.NEVER,[n_]:s.ALWAYS,[Qv]:s.LESS,[Af]:s.LEQUAL,[Jv]:s.EQUAL,[Cf]:s.GEQUAL,[e_]:s.GREATER,[t_]:s.NOTEQUAL};function le(U,E){if(E.type===Wi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Bn||E.magFilter===Vu||E.magFilter===Ml||E.magFilter===bs||E.minFilter===Bn||E.minFilter===Vu||E.minFilter===Ml||E.minFilter===bs)&&xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,pe[E.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,pe[E.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,pe[E.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,se[E.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,se[E.minFilter]),E.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,B[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Pn||E.minFilter!==Ml&&E.minFilter!==bs||E.type===Wi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function _e(U,E){let X=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",L));const me=E.source;let xe=y.get(me);xe===void 0&&(xe={},y.set(me,xe));const fe=de(E);if(fe!==U.__cacheKey){xe[fe]===void 0&&(xe[fe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,X=!0),xe[fe].usedTimes++;const $e=xe[U.__cacheKey];$e!==void 0&&(xe[U.__cacheKey].usedTimes--,$e.usedTimes===0&&b(E)),U.__cacheKey=fe,U.__webglTexture=xe[fe].texture}return X}function O(U,E,X){return Math.floor(Math.floor(U/X)/E)}function Te(U,E,X,me){const fe=U.updateRanges;if(fe.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,X,me,E.data);else{fe.sort((Me,Ce)=>Me.start-Ce.start);let $e=0;for(let Me=1;Me<fe.length;Me++){const Ce=fe[$e],Xe=fe[Me],qe=Ce.start+Ce.count,Le=O(Xe.start,E.width,4),gt=O(Ce.start,E.width,4);Xe.start<=qe+1&&Le===gt&&O(Xe.start+Xe.count-1,E.width,4)===Le?Ce.count=Math.max(Ce.count,Xe.start+Xe.count-Ce.start):(++$e,fe[$e]=Xe)}fe.length=$e+1;const Ne=s.getParameter(s.UNPACK_ROW_LENGTH),Ge=s.getParameter(s.UNPACK_SKIP_PIXELS),it=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Me=0,Ce=fe.length;Me<Ce;Me++){const Xe=fe[Me],qe=Math.floor(Xe.start/4),Le=Math.ceil(Xe.count/4),gt=qe%E.width,H=Math.floor(qe/E.width),Oe=Le,be=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,gt),s.pixelStorei(s.UNPACK_SKIP_ROWS,H),t.texSubImage2D(s.TEXTURE_2D,0,gt,H,Oe,be,X,me,E.data)}U.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ne),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ge),s.pixelStorei(s.UNPACK_SKIP_ROWS,it)}}function te(U,E,X){let me=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(me=s.TEXTURE_3D);const xe=_e(U,E),fe=E.source;t.bindTexture(me,U.__webglTexture,s.TEXTURE0+X);const $e=r.get(fe);if(fe.version!==$e.__version||xe===!0){t.activeTexture(s.TEXTURE0+X);const Ne=kt.getPrimaries(kt.workingColorSpace),Ge=E.colorSpace===qr?null:kt.getPrimaries(E.colorSpace),it=E.colorSpace===qr||Ne===Ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let Me=N(E.image,!1,o.maxTextureSize);Me=Et(E,Me);const Ce=l.convert(E.format,E.colorSpace),Xe=l.convert(E.type);let qe=D(E.internalFormat,Ce,Xe,E.colorSpace,E.isVideoTexture);le(me,E);let Le;const gt=E.mipmaps,H=E.isVideoTexture!==!0,Oe=$e.__version===void 0||xe===!0,be=fe.dataReady,Ue=I(E,Me);if(E.isDepthTexture)qe=C(E.format===Ts,E.type),Oe&&(H?t.texStorage2D(s.TEXTURE_2D,1,qe,Me.width,Me.height):t.texImage2D(s.TEXTURE_2D,0,qe,Me.width,Me.height,0,Ce,Xe,null));else if(E.isDataTexture)if(gt.length>0){H&&Oe&&t.texStorage2D(s.TEXTURE_2D,Ue,qe,gt[0].width,gt[0].height);for(let Ee=0,ge=gt.length;Ee<ge;Ee++)Le=gt[Ee],H?be&&t.texSubImage2D(s.TEXTURE_2D,Ee,0,0,Le.width,Le.height,Ce,Xe,Le.data):t.texImage2D(s.TEXTURE_2D,Ee,qe,Le.width,Le.height,0,Ce,Xe,Le.data);E.generateMipmaps=!1}else H?(Oe&&t.texStorage2D(s.TEXTURE_2D,Ue,qe,Me.width,Me.height),be&&Te(E,Me,Ce,Xe)):t.texImage2D(s.TEXTURE_2D,0,qe,Me.width,Me.height,0,Ce,Xe,Me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){H&&Oe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,qe,gt[0].width,gt[0].height,Me.depth);for(let Ee=0,ge=gt.length;Ee<ge;Ee++)if(Le=gt[Ee],E.format!==Oi)if(Ce!==null)if(H){if(be)if(E.layerUpdates.size>0){const De=Ym(Le.width,Le.height,E.format,E.type);for(const ot of E.layerUpdates){const mt=Le.data.subarray(ot*De/Le.data.BYTES_PER_ELEMENT,(ot+1)*De/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,ot,Le.width,Le.height,1,Ce,mt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,0,Le.width,Le.height,Me.depth,Ce,Le.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ee,qe,Le.width,Le.height,Me.depth,0,Le.data,0,0);else xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?be&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,0,Le.width,Le.height,Me.depth,Ce,Xe,Le.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Ee,qe,Le.width,Le.height,Me.depth,0,Ce,Xe,Le.data)}else{H&&Oe&&t.texStorage2D(s.TEXTURE_2D,Ue,qe,gt[0].width,gt[0].height);for(let Ee=0,ge=gt.length;Ee<ge;Ee++)Le=gt[Ee],E.format!==Oi?Ce!==null?H?be&&t.compressedTexSubImage2D(s.TEXTURE_2D,Ee,0,0,Le.width,Le.height,Ce,Le.data):t.compressedTexImage2D(s.TEXTURE_2D,Ee,qe,Le.width,Le.height,0,Le.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?be&&t.texSubImage2D(s.TEXTURE_2D,Ee,0,0,Le.width,Le.height,Ce,Xe,Le.data):t.texImage2D(s.TEXTURE_2D,Ee,qe,Le.width,Le.height,0,Ce,Xe,Le.data)}else if(E.isDataArrayTexture)if(H){if(Oe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,qe,Me.width,Me.height,Me.depth),be)if(E.layerUpdates.size>0){const Ee=Ym(Me.width,Me.height,E.format,E.type);for(const ge of E.layerUpdates){const De=Me.data.subarray(ge*Ee/Me.data.BYTES_PER_ELEMENT,(ge+1)*Ee/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ge,Me.width,Me.height,1,Ce,Xe,De)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Ce,Xe,Me.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,qe,Me.width,Me.height,Me.depth,0,Ce,Xe,Me.data);else if(E.isData3DTexture)H?(Oe&&t.texStorage3D(s.TEXTURE_3D,Ue,qe,Me.width,Me.height,Me.depth),be&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Ce,Xe,Me.data)):t.texImage3D(s.TEXTURE_3D,0,qe,Me.width,Me.height,Me.depth,0,Ce,Xe,Me.data);else if(E.isFramebufferTexture){if(Oe)if(H)t.texStorage2D(s.TEXTURE_2D,Ue,qe,Me.width,Me.height);else{let Ee=Me.width,ge=Me.height;for(let De=0;De<Ue;De++)t.texImage2D(s.TEXTURE_2D,De,qe,Ee,ge,0,Ce,Xe,null),Ee>>=1,ge>>=1}}else if(gt.length>0){if(H&&Oe){const Ee=Ve(gt[0]);t.texStorage2D(s.TEXTURE_2D,Ue,qe,Ee.width,Ee.height)}for(let Ee=0,ge=gt.length;Ee<ge;Ee++)Le=gt[Ee],H?be&&t.texSubImage2D(s.TEXTURE_2D,Ee,0,0,Ce,Xe,Le):t.texImage2D(s.TEXTURE_2D,Ee,qe,Ce,Xe,Le);E.generateMipmaps=!1}else if(H){if(Oe){const Ee=Ve(Me);t.texStorage2D(s.TEXTURE_2D,Ue,qe,Ee.width,Ee.height)}be&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ce,Xe,Me)}else t.texImage2D(s.TEXTURE_2D,0,qe,Ce,Xe,Me);M(E)&&v(me),$e.__version=fe.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function oe(U,E,X){if(E.image.length!==6)return;const me=_e(U,E),xe=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+X);const fe=r.get(xe);if(xe.version!==fe.__version||me===!0){t.activeTexture(s.TEXTURE0+X);const $e=kt.getPrimaries(kt.workingColorSpace),Ne=E.colorSpace===qr?null:kt.getPrimaries(E.colorSpace),Ge=E.colorSpace===qr||$e===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);const it=E.isCompressedTexture||E.image[0].isCompressedTexture,Me=E.image[0]&&E.image[0].isDataTexture,Ce=[];for(let ge=0;ge<6;ge++)!it&&!Me?Ce[ge]=N(E.image[ge],!0,o.maxCubemapSize):Ce[ge]=Me?E.image[ge].image:E.image[ge],Ce[ge]=Et(E,Ce[ge]);const Xe=Ce[0],qe=l.convert(E.format,E.colorSpace),Le=l.convert(E.type),gt=D(E.internalFormat,qe,Le,E.colorSpace),H=E.isVideoTexture!==!0,Oe=fe.__version===void 0||me===!0,be=xe.dataReady;let Ue=I(E,Xe);le(s.TEXTURE_CUBE_MAP,E);let Ee;if(it){H&&Oe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,gt,Xe.width,Xe.height);for(let ge=0;ge<6;ge++){Ee=Ce[ge].mipmaps;for(let De=0;De<Ee.length;De++){const ot=Ee[De];E.format!==Oi?qe!==null?H?be&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,De,0,0,ot.width,ot.height,qe,ot.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,De,gt,ot.width,ot.height,0,ot.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?be&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,De,0,0,ot.width,ot.height,qe,Le,ot.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,De,gt,ot.width,ot.height,0,qe,Le,ot.data)}}}else{if(Ee=E.mipmaps,H&&Oe){Ee.length>0&&Ue++;const ge=Ve(Ce[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,gt,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Me){H?be&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ce[ge].width,Ce[ge].height,qe,Le,Ce[ge].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,gt,Ce[ge].width,Ce[ge].height,0,qe,Le,Ce[ge].data);for(let De=0;De<Ee.length;De++){const mt=Ee[De].image[ge].image;H?be&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,De+1,0,0,mt.width,mt.height,qe,Le,mt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,De+1,gt,mt.width,mt.height,0,qe,Le,mt.data)}}else{H?be&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,qe,Le,Ce[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,gt,qe,Le,Ce[ge]);for(let De=0;De<Ee.length;De++){const ot=Ee[De];H?be&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,De+1,0,0,qe,Le,ot.image[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,De+1,gt,qe,Le,ot.image[ge])}}}M(E)&&v(s.TEXTURE_CUBE_MAP),fe.__version=xe.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function ve(U,E,X,me,xe,fe){const $e=l.convert(X.format,X.colorSpace),Ne=l.convert(X.type),Ge=D(X.internalFormat,$e,Ne,X.colorSpace),it=r.get(E),Me=r.get(X);if(Me.__renderTarget=E,!it.__hasExternalTextures){const Ce=Math.max(1,E.width>>fe),Xe=Math.max(1,E.height>>fe);xe===s.TEXTURE_3D||xe===s.TEXTURE_2D_ARRAY?t.texImage3D(xe,fe,Ge,Ce,Xe,E.depth,0,$e,Ne,null):t.texImage2D(xe,fe,Ge,Ce,Xe,0,$e,Ne,null)}t.bindFramebuffer(s.FRAMEBUFFER,U),Vt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,xe,Me.__webglTexture,0,z(E)):(xe===s.TEXTURE_2D||xe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,xe,Me.__webglTexture,fe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(U,E,X){if(s.bindRenderbuffer(s.RENDERBUFFER,U),E.depthBuffer){const me=E.depthTexture,xe=me&&me.isDepthTexture?me.type:null,fe=C(E.stencilBuffer,xe),$e=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Vt(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,z(E),fe,E.width,E.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,z(E),fe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,fe,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,$e,s.RENDERBUFFER,U)}else{const me=E.textures;for(let xe=0;xe<me.length;xe++){const fe=me[xe],$e=l.convert(fe.format,fe.colorSpace),Ne=l.convert(fe.type),Ge=D(fe.internalFormat,$e,Ne,fe.colorSpace);Vt(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,z(E),Ge,E.width,E.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,z(E),Ge,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Ge,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function he(U,E,X){const me=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=r.get(E.depthTexture);if(xe.__renderTarget=E,(!xe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),me){if(xe.__webglInit===void 0&&(xe.__webglInit=!0,E.depthTexture.addEventListener("dispose",L)),xe.__webglTexture===void 0){xe.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,xe.__webglTexture),le(s.TEXTURE_CUBE_MAP,E.depthTexture);const it=l.convert(E.depthTexture.format),Me=l.convert(E.depthTexture.type);let Ce;E.depthTexture.format===yr?Ce=s.DEPTH_COMPONENT24:E.depthTexture.format===Ts&&(Ce=s.DEPTH24_STENCIL8);for(let Xe=0;Xe<6;Xe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,0,Ce,E.width,E.height,0,it,Me,null)}}else ue(E.depthTexture,0);const fe=xe.__webglTexture,$e=z(E),Ne=me?s.TEXTURE_CUBE_MAP_POSITIVE_X+X:s.TEXTURE_2D,Ge=E.depthTexture.format===Ts?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===yr)Vt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ge,Ne,fe,0,$e):s.framebufferTexture2D(s.FRAMEBUFFER,Ge,Ne,fe,0);else if(E.depthTexture.format===Ts)Vt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ge,Ne,fe,0,$e):s.framebufferTexture2D(s.FRAMEBUFFER,Ge,Ne,fe,0);else throw new Error("Unknown depthTexture format")}function Ae(U){const E=r.get(U),X=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const me=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),me){const xe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,me.removeEventListener("dispose",xe)};me.addEventListener("dispose",xe),E.__depthDisposeCallback=xe}E.__boundDepthTexture=me}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if(X)for(let me=0;me<6;me++)he(E.__webglFramebuffer[me],U,me);else{const me=U.texture.mipmaps;me&&me.length>0?he(E.__webglFramebuffer[0],U,0):he(E.__webglFramebuffer,U,0)}else if(X){E.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[me]),E.__webglDepthbuffer[me]===void 0)E.__webglDepthbuffer[me]=s.createRenderbuffer(),Be(E.__webglDepthbuffer[me],U,!1);else{const xe=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=E.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,fe)}}else{const me=U.texture.mipmaps;if(me&&me.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Be(E.__webglDepthbuffer,U,!1);else{const xe=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,fe)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function We(U,E,X){const me=r.get(U);E!==void 0&&ve(me.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&Ae(U)}function ht(U){const E=U.texture,X=r.get(U),me=r.get(E);U.addEventListener("dispose",F);const xe=U.textures,fe=U.isWebGLCubeRenderTarget===!0,$e=xe.length>1;if($e||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=E.version,u.memory.textures++),fe){X.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[Ne]=[];for(let Ge=0;Ge<E.mipmaps.length;Ge++)X.__webglFramebuffer[Ne][Ge]=s.createFramebuffer()}else X.__webglFramebuffer[Ne]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let Ne=0;Ne<E.mipmaps.length;Ne++)X.__webglFramebuffer[Ne]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if($e)for(let Ne=0,Ge=xe.length;Ne<Ge;Ne++){const it=r.get(xe[Ne]);it.__webglTexture===void 0&&(it.__webglTexture=s.createTexture(),u.memory.textures++)}if(U.samples>0&&Vt(U)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Ne=0;Ne<xe.length;Ne++){const Ge=xe[Ne];X.__webglColorRenderbuffer[Ne]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[Ne]);const it=l.convert(Ge.format,Ge.colorSpace),Me=l.convert(Ge.type),Ce=D(Ge.internalFormat,it,Me,Ge.colorSpace,U.isXRRenderTarget===!0),Xe=z(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,Xe,Ce,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,X.__webglColorRenderbuffer[Ne])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),Be(X.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),le(s.TEXTURE_CUBE_MAP,E);for(let Ne=0;Ne<6;Ne++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ge=0;Ge<E.mipmaps.length;Ge++)ve(X.__webglFramebuffer[Ne][Ge],U,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ge);else ve(X.__webglFramebuffer[Ne],U,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);M(E)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($e){for(let Ne=0,Ge=xe.length;Ne<Ge;Ne++){const it=xe[Ne],Me=r.get(it);let Ce=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ce=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ce,Me.__webglTexture),le(Ce,it),ve(X.__webglFramebuffer,U,it,s.COLOR_ATTACHMENT0+Ne,Ce,0),M(it)&&v(Ce)}t.unbindTexture()}else{let Ne=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ne=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ne,me.__webglTexture),le(Ne,E),E.mipmaps&&E.mipmaps.length>0)for(let Ge=0;Ge<E.mipmaps.length;Ge++)ve(X.__webglFramebuffer[Ge],U,E,s.COLOR_ATTACHMENT0,Ne,Ge);else ve(X.__webglFramebuffer,U,E,s.COLOR_ATTACHMENT0,Ne,0);M(E)&&v(Ne),t.unbindTexture()}U.depthBuffer&&Ae(U)}function St(U){const E=U.textures;for(let X=0,me=E.length;X<me;X++){const xe=E[X];if(M(xe)){const fe=T(U),$e=r.get(xe).__webglTexture;t.bindTexture(fe,$e),v(fe),t.unbindTexture()}}}const Dt=[],pt=[];function jt(U){if(U.samples>0){if(Vt(U)===!1){const E=U.textures,X=U.width,me=U.height;let xe=s.COLOR_BUFFER_BIT;const fe=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$e=r.get(U),Ne=E.length>1;if(Ne)for(let it=0;it<E.length;it++)t.bindFramebuffer(s.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,$e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer);const Ge=U.texture.mipmaps;Ge&&Ge.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let it=0;it<E.length;it++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(xe|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(xe|=s.STENCIL_BUFFER_BIT)),Ne){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,$e.__webglColorRenderbuffer[it]);const Me=r.get(E[it]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Me,0)}s.blitFramebuffer(0,0,X,me,0,0,X,me,xe,s.NEAREST),p===!0&&(Dt.length=0,pt.length=0,Dt.push(s.COLOR_ATTACHMENT0+it),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Dt.push(fe),pt.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,pt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Dt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ne)for(let it=0;it<E.length;it++){t.bindFramebuffer(s.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.RENDERBUFFER,$e.__webglColorRenderbuffer[it]);const Me=r.get(E[it]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,$e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.TEXTURE_2D,Me,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&p){const E=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function z(U){return Math.min(o.maxSamples,U.samples)}function Vt(U){const E=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function vt(U){const E=u.render.frame;x.get(U)!==E&&(x.set(U,E),U.update())}function Et(U,E){const X=U.colorSpace,me=U.format,xe=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||X!==Ma&&X!==qr&&(kt.getTransfer(X)===Ht?(me!==Oi||xe!==hi)&&xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ft("WebGLTextures: Unsupported texture color space:",X)),E}function Ve(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(g.width=U.naturalWidth||U.width,g.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(g.width=U.displayWidth,g.height=U.displayHeight):(g.width=U.width,g.height=U.height),g}this.allocateTextureUnit=Q,this.resetTextureUnits=K,this.setTexture2D=ue,this.setTexture2DArray=re,this.setTexture3D=Z,this.setTextureCube=Y,this.rebindTextures=We,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Vt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function UE(s,e){function t(r,o=qr){let l;const u=kt.getTransfer(o);if(r===hi)return s.UNSIGNED_BYTE;if(r===Mf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Ef)return s.UNSIGNED_SHORT_5_5_5_1;if(r===k0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===B0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===O0)return s.BYTE;if(r===F0)return s.SHORT;if(r===mo)return s.UNSIGNED_SHORT;if(r===Sf)return s.INT;if(r===Ki)return s.UNSIGNED_INT;if(r===Wi)return s.FLOAT;if(r===_r)return s.HALF_FLOAT;if(r===z0)return s.ALPHA;if(r===j0)return s.RGB;if(r===Oi)return s.RGBA;if(r===yr)return s.DEPTH_COMPONENT;if(r===Ts)return s.DEPTH_STENCIL;if(r===V0)return s.RED;if(r===wf)return s.RED_INTEGER;if(r===Sa)return s.RG;if(r===bf)return s.RG_INTEGER;if(r===Tf)return s.RGBA_INTEGER;if(r===Wl||r===Xl||r===ql||r===Yl)if(u===Ht)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Wl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Xl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Yl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Wl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Xl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ql)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Yl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Od||r===Fd||r===kd||r===Bd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Od)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Fd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===kd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Bd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===zd||r===jd||r===Vd||r===Gd||r===Hd||r===Wd||r===Xd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===zd||r===jd)return u===Ht?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Vd)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Gd)return l.COMPRESSED_R11_EAC;if(r===Hd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Wd)return l.COMPRESSED_RG11_EAC;if(r===Xd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===qd||r===Yd||r===$d||r===Kd||r===Zd||r===Qd||r===Jd||r===ef||r===tf||r===nf||r===rf||r===sf||r===af||r===of)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===qd)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Yd)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===$d)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Kd)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Zd)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Qd)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Jd)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ef)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===tf)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===nf)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===rf)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===sf)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===af)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===of)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===lf||r===cf||r===uf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===lf)return u===Ht?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===cf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===uf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===df||r===ff||r===hf||r===pf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===df)return l.COMPRESSED_RED_RGTC1_EXT;if(r===ff)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===hf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===pf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===go?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const OE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FE=`
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

}`;class kE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new J0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Qi({vertexShader:OE,fragmentShader:FE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yt(new As(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BE extends Ns{constructor(e,t){super();const r=this;let o=null,l=1,u=null,d="local-floor",p=1,g=null,x=null,_=null,y=null,S=null,A=null;const N=typeof XRWebGLBinding<"u",M=new kE,v={},T=t.getContextAttributes();let D=null,C=null;const I=[],L=[],F=new ft;let G=null;const b=new ii;b.viewport=new sn;const P=new ii;P.viewport=new sn;const j=[b,P],K=new X_;let Q=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let oe=I[te];return oe===void 0&&(oe=new ud,I[te]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(te){let oe=I[te];return oe===void 0&&(oe=new ud,I[te]=oe),oe.getGripSpace()},this.getHand=function(te){let oe=I[te];return oe===void 0&&(oe=new ud,I[te]=oe),oe.getHandSpace()};function ue(te){const oe=L.indexOf(te.inputSource);if(oe===-1)return;const ve=I[oe];ve!==void 0&&(ve.update(te.inputSource,te.frame,g||u),ve.dispatchEvent({type:te.type,data:te.inputSource}))}function re(){o.removeEventListener("select",ue),o.removeEventListener("selectstart",ue),o.removeEventListener("selectend",ue),o.removeEventListener("squeeze",ue),o.removeEventListener("squeezestart",ue),o.removeEventListener("squeezeend",ue),o.removeEventListener("end",re),o.removeEventListener("inputsourceschange",Z);for(let te=0;te<I.length;te++){const oe=L[te];oe!==null&&(L[te]=null,I[te].disconnect(oe))}Q=null,de=null,M.reset();for(const te in v)delete v[te];e.setRenderTarget(D),S=null,y=null,_=null,o=null,C=null,Te.stop(),r.isPresenting=!1,e.setPixelRatio(G),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){l=te,r.isPresenting===!0&&xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){d=te,r.isPresenting===!0&&xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||u},this.setReferenceSpace=function(te){g=te},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return _===null&&N&&(_=new XRWebGLBinding(o,t)),_},this.getFrame=function(){return A},this.getSession=function(){return o},this.setSession=async function(te){if(o=te,o!==null){if(D=e.getRenderTarget(),o.addEventListener("select",ue),o.addEventListener("selectstart",ue),o.addEventListener("selectend",ue),o.addEventListener("squeeze",ue),o.addEventListener("squeezestart",ue),o.addEventListener("squeezeend",ue),o.addEventListener("end",re),o.addEventListener("inputsourceschange",Z),T.xrCompatible!==!0&&await t.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(F),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Be=null,he=null;T.depth&&(he=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=T.stencil?Ts:yr,Be=T.stencil?go:Ki);const Ae={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:l};_=this.getBinding(),y=_.createProjectionLayer(Ae),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),C=new Yi(y.textureWidth,y.textureHeight,{format:Oi,type:hi,depthTexture:new vo(y.textureWidth,y.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const ve={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,ve),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),C=new Yi(S.framebufferWidth,S.framebufferHeight,{format:Oi,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),g=null,u=await o.requestReferenceSpace(d),Te.setContext(o),Te.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Z(te){for(let oe=0;oe<te.removed.length;oe++){const ve=te.removed[oe],Be=L.indexOf(ve);Be>=0&&(L[Be]=null,I[Be].disconnect(ve))}for(let oe=0;oe<te.added.length;oe++){const ve=te.added[oe];let Be=L.indexOf(ve);if(Be===-1){for(let Ae=0;Ae<I.length;Ae++)if(Ae>=L.length){L.push(ve),Be=Ae;break}else if(L[Ae]===null){L[Ae]=ve,Be=Ae;break}if(Be===-1)break}const he=I[Be];he&&he.connect(ve)}}const Y=new $,pe=new $;function se(te,oe,ve){Y.setFromMatrixPosition(oe.matrixWorld),pe.setFromMatrixPosition(ve.matrixWorld);const Be=Y.distanceTo(pe),he=oe.projectionMatrix.elements,Ae=ve.projectionMatrix.elements,We=he[14]/(he[10]-1),ht=he[14]/(he[10]+1),St=(he[9]+1)/he[5],Dt=(he[9]-1)/he[5],pt=(he[8]-1)/he[0],jt=(Ae[8]+1)/Ae[0],z=We*pt,Vt=We*jt,vt=Be/(-pt+jt),Et=vt*-pt;if(oe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Et),te.translateZ(vt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),he[10]===-1)te.projectionMatrix.copy(oe.projectionMatrix),te.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Ve=We+vt,U=ht+vt,E=z-Et,X=Vt+(Be-Et),me=St*ht/U*Ve,xe=Dt*ht/U*Ve;te.projectionMatrix.makePerspective(E,X,me,xe,Ve,U),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function B(te,oe){oe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(oe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(o===null)return;let oe=te.near,ve=te.far;M.texture!==null&&(M.depthNear>0&&(oe=M.depthNear),M.depthFar>0&&(ve=M.depthFar)),K.near=P.near=b.near=oe,K.far=P.far=b.far=ve,(Q!==K.near||de!==K.far)&&(o.updateRenderState({depthNear:K.near,depthFar:K.far}),Q=K.near,de=K.far),K.layers.mask=te.layers.mask|6,b.layers.mask=K.layers.mask&3,P.layers.mask=K.layers.mask&5;const Be=te.parent,he=K.cameras;B(K,Be);for(let Ae=0;Ae<he.length;Ae++)B(he[Ae],Be);he.length===2?se(K,b,P):K.projectionMatrix.copy(b.projectionMatrix),le(te,K,Be)};function le(te,oe,ve){ve===null?te.matrix.copy(oe.matrixWorld):(te.matrix.copy(ve.matrixWorld),te.matrix.invert(),te.matrix.multiply(oe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(oe.projectionMatrix),te.projectionMatrixInverse.copy(oe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=nc*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(y===null&&S===null))return p},this.setFoveation=function(te){p=te,y!==null&&(y.fixedFoveation=te),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=te)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(K)},this.getCameraTexture=function(te){return v[te]};let _e=null;function O(te,oe){if(x=oe.getViewerPose(g||u),A=oe,x!==null){const ve=x.views;S!==null&&(e.setRenderTargetFramebuffer(C,S.framebuffer),e.setRenderTarget(C));let Be=!1;ve.length!==K.cameras.length&&(K.cameras.length=0,Be=!0);for(let ht=0;ht<ve.length;ht++){const St=ve[ht];let Dt=null;if(S!==null)Dt=S.getViewport(St);else{const jt=_.getViewSubImage(y,St);Dt=jt.viewport,ht===0&&(e.setRenderTargetTextures(C,jt.colorTexture,jt.depthStencilTexture),e.setRenderTarget(C))}let pt=j[ht];pt===void 0&&(pt=new ii,pt.layers.enable(ht),pt.viewport=new sn,j[ht]=pt),pt.matrix.fromArray(St.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(St.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),ht===0&&(K.matrix.copy(pt.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Be===!0&&K.cameras.push(pt)}const he=o.enabledFeatures;if(he&&he.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&N){_=r.getBinding();const ht=_.getDepthInformation(ve[0]);ht&&ht.isValid&&ht.texture&&M.init(ht,o.renderState)}if(he&&he.includes("camera-access")&&N){e.state.unbindTexture(),_=r.getBinding();for(let ht=0;ht<ve.length;ht++){const St=ve[ht].camera;if(St){let Dt=v[St];Dt||(Dt=new J0,v[St]=Dt);const pt=_.getCameraImage(St);Dt.sourceTexture=pt}}}}for(let ve=0;ve<I.length;ve++){const Be=L[ve],he=I[ve];Be!==null&&he!==void 0&&he.update(Be,oe,g||u)}_e&&_e(te,oe),oe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:oe}),A=null}const Te=new eg;Te.setAnimationLoop(O),this.setAnimationLoop=function(te){_e=te},this.dispose=function(){}}}const ys=new Zi,zE=new tn;function jE(s,e){function t(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function r(M,v){v.color.getRGB(M.fogColor.value,$0(s)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function o(M,v,T,D,C){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(M,v):v.isMeshToonMaterial?(l(M,v),_(M,v)):v.isMeshPhongMaterial?(l(M,v),x(M,v)):v.isMeshStandardMaterial?(l(M,v),y(M,v),v.isMeshPhysicalMaterial&&S(M,v,C)):v.isMeshMatcapMaterial?(l(M,v),A(M,v)):v.isMeshDepthMaterial?l(M,v):v.isMeshDistanceMaterial?(l(M,v),N(M,v)):v.isMeshNormalMaterial?l(M,v):v.isLineBasicMaterial?(u(M,v),v.isLineDashedMaterial&&d(M,v)):v.isPointsMaterial?p(M,v,T,D):v.isSpriteMaterial?g(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,t(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,t(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,t(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===ri&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,t(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===ri&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,t(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,t(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const T=e.get(v),D=T.envMap,C=T.envMapRotation;D&&(M.envMap.value=D,ys.copy(C),ys.x*=-1,ys.y*=-1,ys.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),M.envMapRotation.value.setFromMatrix4(zE.makeRotationFromEuler(ys)),M.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,M.aoMapTransform))}function u(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,t(v.map,M.mapTransform))}function d(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function p(M,v,T,D){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*T,M.scale.value=D*.5,v.map&&(M.map.value=v.map,t(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,t(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function g(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,t(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,t(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function x(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function _(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function y(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function S(M,v,T){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===ri&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=T.texture,M.transmissionSamplerSize.value.set(T.width,T.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,v){v.matcap&&(M.matcap.value=v.matcap)}function N(M,v){const T=e.get(v).light;M.referencePosition.value.setFromMatrixPosition(T.matrixWorld),M.nearDistance.value=T.shadow.camera.near,M.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function VE(s,e,t,r){let o={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(T,D){const C=D.program;r.uniformBlockBinding(T,C)}function g(T,D){let C=o[T.id];C===void 0&&(A(T),C=x(T),o[T.id]=C,T.addEventListener("dispose",M));const I=D.program;r.updateUBOMapping(T,I);const L=e.render.frame;l[T.id]!==L&&(y(T),l[T.id]=L)}function x(T){const D=_();T.__bindingPointIndex=D;const C=s.createBuffer(),I=T.__size,L=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,I,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,C),C}function _(){for(let T=0;T<d;T++)if(u.indexOf(T)===-1)return u.push(T),T;return Ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(T){const D=o[T.id],C=T.uniforms,I=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let L=0,F=C.length;L<F;L++){const G=Array.isArray(C[L])?C[L]:[C[L]];for(let b=0,P=G.length;b<P;b++){const j=G[b];if(S(j,L,b,I)===!0){const K=j.__offset,Q=Array.isArray(j.value)?j.value:[j.value];let de=0;for(let ue=0;ue<Q.length;ue++){const re=Q[ue],Z=N(re);typeof re=="number"||typeof re=="boolean"?(j.__data[0]=re,s.bufferSubData(s.UNIFORM_BUFFER,K+de,j.__data)):re.isMatrix3?(j.__data[0]=re.elements[0],j.__data[1]=re.elements[1],j.__data[2]=re.elements[2],j.__data[3]=0,j.__data[4]=re.elements[3],j.__data[5]=re.elements[4],j.__data[6]=re.elements[5],j.__data[7]=0,j.__data[8]=re.elements[6],j.__data[9]=re.elements[7],j.__data[10]=re.elements[8],j.__data[11]=0):(re.toArray(j.__data,de),de+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,K,j.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(T,D,C,I){const L=T.value,F=D+"_"+C;if(I[F]===void 0)return typeof L=="number"||typeof L=="boolean"?I[F]=L:I[F]=L.clone(),!0;{const G=I[F];if(typeof L=="number"||typeof L=="boolean"){if(G!==L)return I[F]=L,!0}else if(G.equals(L)===!1)return G.copy(L),!0}return!1}function A(T){const D=T.uniforms;let C=0;const I=16;for(let F=0,G=D.length;F<G;F++){const b=Array.isArray(D[F])?D[F]:[D[F]];for(let P=0,j=b.length;P<j;P++){const K=b[P],Q=Array.isArray(K.value)?K.value:[K.value];for(let de=0,ue=Q.length;de<ue;de++){const re=Q[de],Z=N(re),Y=C%I,pe=Y%Z.boundary,se=Y+pe;C+=pe,se!==0&&I-se<Z.storage&&(C+=I-se),K.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=C,C+=Z.storage}}}const L=C%I;return L>0&&(C+=I-L),T.__size=C,T.__cache={},this}function N(T){const D={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(D.boundary=4,D.storage=4):T.isVector2?(D.boundary=8,D.storage=8):T.isVector3||T.isColor?(D.boundary=16,D.storage=12):T.isVector4?(D.boundary=16,D.storage=16):T.isMatrix3?(D.boundary=48,D.storage=48):T.isMatrix4?(D.boundary=64,D.storage=64):T.isTexture?xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):xt("WebGLRenderer: Unsupported uniform value type.",T),D}function M(T){const D=T.target;D.removeEventListener("dispose",M);const C=u.indexOf(D.__bindingPointIndex);u.splice(C,1),s.deleteBuffer(o[D.id]),delete o[D.id],delete l[D.id]}function v(){for(const T in o)s.deleteBuffer(o[T]);u=[],o={},l={}}return{bind:p,update:g,dispose:v}}const GE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Gi=null;function HE(){return Gi===null&&(Gi=new P_(GE,16,16,Sa,_r),Gi.name="DFG_LUT",Gi.minFilter=Bn,Gi.magFilter=Bn,Gi.wrapS=mr,Gi.wrapT=mr,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}class WE{constructor(e={}){const{canvas:t=i_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:g=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:y=!1,outputBufferType:S=hi}=e;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=u;const N=S,M=new Set([Tf,bf,wf]),v=new Set([hi,Ki,mo,go,Mf,Ef]),T=new Uint32Array(4),D=new Int32Array(4);let C=null,I=null;const L=[],F=[];let G=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let P=!1;this._outputColorSpace=fi;let j=0,K=0,Q=null,de=-1,ue=null;const re=new sn,Z=new sn;let Y=null;const pe=new bt(0);let se=0,B=t.width,le=t.height,_e=1,O=null,Te=null;const te=new sn(0,0,B,le),oe=new sn(0,0,B,le);let ve=!1;const Be=new If;let he=!1,Ae=!1;const We=new tn,ht=new $,St=new sn,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function jt(){return Q===null?_e:1}let z=r;function Vt(R,q){return t.getContext(R,q)}try{const R={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:g,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_f}`),t.addEventListener("webglcontextlost",ot,!1),t.addEventListener("webglcontextrestored",mt,!1),t.addEventListener("webglcontextcreationerror",Ct,!1),z===null){const q="webgl2";if(z=Vt(q,R),z===null)throw Vt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Ft("WebGLRenderer: "+R.message),R}let vt,Et,Ve,U,E,X,me,xe,fe,$e,Ne,Ge,it,Me,Ce,Xe,qe,Le,gt,H,Oe,be,Ue,Ee;function ge(){vt=new HS(z),vt.init(),be=new UE(z,vt),Et=new US(z,vt,e,be),Ve=new LE(z,vt),Et.reversedDepthBuffer&&y&&Ve.buffers.depth.setReversed(!0),U=new qS(z),E=new vE,X=new IE(z,vt,Ve,E,Et,be,U),me=new FS(b),xe=new GS(b),fe=new Z_(z),Ue=new LS(z,fe),$e=new WS(z,fe,U,Ue),Ne=new $S(z,$e,fe,U),gt=new YS(z,Et,X),Xe=new OS(E),Ge=new xE(b,me,xe,vt,Et,Ue,Xe),it=new jE(b,E),Me=new yE,Ce=new TE(vt),Le=new DS(b,me,xe,Ve,Ne,A,p),qe=new PE(b,Ne,Et),Ee=new VE(z,U,Et,Ve),H=new IS(z,vt,U),Oe=new XS(z,vt,U),U.programs=Ge.programs,b.capabilities=Et,b.extensions=vt,b.properties=E,b.renderLists=Me,b.shadowMap=qe,b.state=Ve,b.info=U}ge(),N!==hi&&(G=new ZS(N,t.width,t.height,o,l));const De=new BE(b,z);this.xr=De,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const R=vt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=vt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(R){R!==void 0&&(_e=R,this.setSize(B,le,!1))},this.getSize=function(R){return R.set(B,le)},this.setSize=function(R,q,ae=!0){if(De.isPresenting){xt("WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,le=q,t.width=Math.floor(R*_e),t.height=Math.floor(q*_e),ae===!0&&(t.style.width=R+"px",t.style.height=q+"px"),G!==null&&G.setSize(t.width,t.height),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(B*_e,le*_e).floor()},this.setDrawingBufferSize=function(R,q,ae){B=R,le=q,_e=ae,t.width=Math.floor(R*ae),t.height=Math.floor(q*ae),this.setViewport(0,0,R,q)},this.setEffects=function(R){if(N===hi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let q=0;q<R.length;q++)if(R[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}G.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(re)},this.getViewport=function(R){return R.copy(te)},this.setViewport=function(R,q,ae,ne){R.isVector4?te.set(R.x,R.y,R.z,R.w):te.set(R,q,ae,ne),Ve.viewport(re.copy(te).multiplyScalar(_e).round())},this.getScissor=function(R){return R.copy(oe)},this.setScissor=function(R,q,ae,ne){R.isVector4?oe.set(R.x,R.y,R.z,R.w):oe.set(R,q,ae,ne),Ve.scissor(Z.copy(oe).multiplyScalar(_e).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(R){Ve.setScissorTest(ve=R)},this.setOpaqueSort=function(R){O=R},this.setTransparentSort=function(R){Te=R},this.getClearColor=function(R){return R.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,ae=!0){let ne=0;if(R){let J=!1;if(Q!==null){const Ie=Q.texture.format;J=M.has(Ie)}if(J){const Ie=Q.texture.type,ke=v.has(Ie),Pe=Le.getClearColor(),ze=Le.getClearAlpha(),je=Pe.r,rt=Pe.g,nt=Pe.b;ke?(T[0]=je,T[1]=rt,T[2]=nt,T[3]=ze,z.clearBufferuiv(z.COLOR,0,T)):(D[0]=je,D[1]=rt,D[2]=nt,D[3]=ze,z.clearBufferiv(z.COLOR,0,D))}else ne|=z.COLOR_BUFFER_BIT}q&&(ne|=z.DEPTH_BUFFER_BIT),ae&&(ne|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ot,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",Ct,!1),Le.dispose(),Me.dispose(),Ce.dispose(),E.dispose(),me.dispose(),xe.dispose(),Ne.dispose(),Ue.dispose(),Ee.dispose(),Ge.dispose(),De.dispose(),De.removeEventListener("sessionstart",Ji),De.removeEventListener("sessionend",bi),Xn.stop()};function ot(R){R.preventDefault(),bm("WebGLRenderer: Context Lost."),P=!0}function mt(){bm("WebGLRenderer: Context Restored."),P=!1;const R=U.autoReset,q=qe.enabled,ae=qe.autoUpdate,ne=qe.needsUpdate,J=qe.type;ge(),U.autoReset=R,qe.enabled=q,qe.autoUpdate=ae,qe.needsUpdate=ne,qe.type=J}function Ct(R){Ft("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function cn(R){const q=R.target;q.removeEventListener("dispose",cn),Cn(q)}function Cn(R){Kr(R),E.remove(R)}function Kr(R){const q=E.get(R).programs;q!==void 0&&(q.forEach(function(ae){Ge.releaseProgram(ae)}),R.isShaderMaterial&&Ge.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,ae,ne,J,Ie){q===null&&(q=Dt);const ke=J.isMesh&&J.matrixWorld.determinant()<0,Pe=es(R,q,ae,ne,J);Ve.setMaterial(ne,ke);let ze=ae.index,je=1;if(ne.wireframe===!0){if(ze=$e.getWireframeAttribute(ae),ze===void 0)return;je=2}const rt=ae.drawRange,nt=ae.attributes.position;let _t=rt.start*je,Rt=(rt.start+rt.count)*je;Ie!==null&&(_t=Math.max(_t,Ie.start*je),Rt=Math.min(Rt,(Ie.start+Ie.count)*je)),ze!==null?(_t=Math.max(_t,0),Rt=Math.min(Rt,ze.count)):nt!=null&&(_t=Math.max(_t,0),Rt=Math.min(Rt,nt.count));const Gt=Rt-_t;if(Gt<0||Gt===1/0)return;Ue.setup(J,ne,Pe,ae,ze);let zt,It=H;if(ze!==null&&(zt=fe.get(ze),It=Oe,It.setIndex(zt)),J.isMesh)ne.wireframe===!0?(Ve.setLineWidth(ne.wireframeLinewidth*jt()),It.setMode(z.LINES)):It.setMode(z.TRIANGLES);else if(J.isLine){let tt=ne.linewidth;tt===void 0&&(tt=1),Ve.setLineWidth(tt*jt()),J.isLineSegments?It.setMode(z.LINES):J.isLineLoop?It.setMode(z.LINE_LOOP):It.setMode(z.LINE_STRIP)}else J.isPoints?It.setMode(z.POINTS):J.isSprite&&It.setMode(z.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)xo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),It.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))It.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const tt=J._multiDrawStarts,Lt=J._multiDrawCounts,Tt=J._multiDrawCount,yn=ze?fe.get(ze).bytesPerElement:1,pi=E.get(ne).currentProgram.getUniforms();for(let nn=0;nn<Tt;nn++)pi.setValue(z,"_gl_DrawID",nn),It.render(tt[nn]/yn,Lt[nn])}else if(J.isInstancedMesh)It.renderInstances(_t,Gt,J.count);else if(ae.isInstancedBufferGeometry){const tt=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Lt=Math.min(ae.instanceCount,tt);It.renderInstances(_t,Gt,Lt)}else It.render(_t,Gt)};function wi(R,q,ae){R.transparent===!0&&R.side===pr&&R.forceSinglePass===!1?(R.side=ri,R.needsUpdate=!0,ki(R,q,ae),R.side=$r,R.needsUpdate=!0,ki(R,q,ae),R.side=pr):ki(R,q,ae)}this.compile=function(R,q,ae=null){ae===null&&(ae=R),I=Ce.get(ae),I.init(q),F.push(I),ae.traverseVisible(function(J){J.isLight&&J.layers.test(q.layers)&&(I.pushLight(J),J.castShadow&&I.pushShadow(J))}),R!==ae&&R.traverseVisible(function(J){J.isLight&&J.layers.test(q.layers)&&(I.pushLight(J),J.castShadow&&I.pushShadow(J))}),I.setupLights();const ne=new Set;return R.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Ie=J.material;if(Ie)if(Array.isArray(Ie))for(let ke=0;ke<Ie.length;ke++){const Pe=Ie[ke];wi(Pe,ae,J),ne.add(Pe)}else wi(Ie,ae,J),ne.add(Ie)}),I=F.pop(),ne},this.compileAsync=function(R,q,ae=null){const ne=this.compile(R,q,ae);return new Promise(J=>{function Ie(){if(ne.forEach(function(ke){E.get(ke).currentProgram.isReady()&&ne.delete(ke)}),ne.size===0){J(R);return}setTimeout(Ie,10)}vt.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Sr=null;function Fi(R){Sr&&Sr(R)}function Ji(){Xn.stop()}function bi(){Xn.start()}const Xn=new eg;Xn.setAnimationLoop(Fi),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(R){Sr=R,De.setAnimationLoop(R),R===null?Xn.stop():Xn.start()},De.addEventListener("sessionstart",Ji),De.addEventListener("sessionend",bi),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){Ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;const ae=De.enabled===!0&&De.isPresenting===!0,ne=G!==null&&(Q===null||ae)&&G.begin(b,Q);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(G===null||G.isCompositing()===!1)&&(De.cameraAutoUpdate===!0&&De.updateCamera(q),q=De.getCamera()),R.isScene===!0&&R.onBeforeRender(b,R,q,Q),I=Ce.get(R,F.length),I.init(q),F.push(I),We.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Be.setFromProjectionMatrix(We,Xi,q.reversedDepth),Ae=this.localClippingEnabled,he=Xe.init(this.clippingPlanes,Ae),C=Me.get(R,L.length),C.init(),L.push(C),De.enabled===!0&&De.isPresenting===!0){const ke=b.xr.getDepthSensingMesh();ke!==null&&Mr(ke,q,-1/0,b.sortObjects)}Mr(R,q,0,b.sortObjects),C.finish(),b.sortObjects===!0&&C.sort(O,Te),pt=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,pt&&Le.addToRenderList(C,R),this.info.render.frame++,he===!0&&Xe.beginShadows();const J=I.state.shadowsArray;if(qe.render(J,R,q),he===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&G.hasRenderPass())===!1){const ke=C.opaque,Pe=C.transmissive;if(I.setupLights(),q.isArrayCamera){const ze=q.cameras;if(Pe.length>0)for(let je=0,rt=ze.length;je<rt;je++){const nt=ze[je];Qr(ke,Pe,R,nt)}pt&&Le.render(R);for(let je=0,rt=ze.length;je<rt;je++){const nt=ze[je];Zr(C,R,nt,nt.viewport)}}else Pe.length>0&&Qr(ke,Pe,R,q),pt&&Le.render(R),Zr(C,R,q)}Q!==null&&K===0&&(X.updateMultisampleRenderTarget(Q),X.updateRenderTargetMipmap(Q)),ne&&G.end(b),R.isScene===!0&&R.onAfterRender(b,R,q),Ue.resetDefaultState(),de=-1,ue=null,F.pop(),F.length>0?(I=F[F.length-1],he===!0&&Xe.setGlobalState(b.clippingPlanes,I.state.camera)):I=null,L.pop(),L.length>0?C=L[L.length-1]:C=null};function Mr(R,q,ae,ne){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)ae=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)I.pushLight(R),R.castShadow&&I.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Be.intersectsSprite(R)){ne&&St.setFromMatrixPosition(R.matrixWorld).applyMatrix4(We);const ke=Ne.update(R),Pe=R.material;Pe.visible&&C.push(R,ke,Pe,ae,St.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Be.intersectsObject(R))){const ke=Ne.update(R),Pe=R.material;if(ne&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),St.copy(R.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),St.copy(ke.boundingSphere.center)),St.applyMatrix4(R.matrixWorld).applyMatrix4(We)),Array.isArray(Pe)){const ze=ke.groups;for(let je=0,rt=ze.length;je<rt;je++){const nt=ze[je],_t=Pe[nt.materialIndex];_t&&_t.visible&&C.push(R,ke,_t,ae,St.z,nt)}}else Pe.visible&&C.push(R,ke,Pe,ae,St.z,null)}}const Ie=R.children;for(let ke=0,Pe=Ie.length;ke<Pe;ke++)Mr(Ie[ke],q,ae,ne)}function Zr(R,q,ae,ne){const{opaque:J,transmissive:Ie,transparent:ke}=R;I.setupLightsView(ae),he===!0&&Xe.setGlobalState(b.clippingPlanes,ae),ne&&Ve.viewport(re.copy(ne)),J.length>0&&jn(J,q,ae),Ie.length>0&&jn(Ie,q,ae),ke.length>0&&jn(ke,q,ae),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function Qr(R,q,ae,ne){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[ne.id]===void 0){const _t=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[ne.id]=new Yi(1,1,{generateMipmaps:!0,type:_t?_r:hi,minFilter:bs,samples:Et.samples,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:kt.workingColorSpace})}const Ie=I.state.transmissionRenderTarget[ne.id],ke=ne.viewport||re;Ie.setSize(ke.z*b.transmissionResolutionScale,ke.w*b.transmissionResolutionScale);const Pe=b.getRenderTarget(),ze=b.getActiveCubeFace(),je=b.getActiveMipmapLevel();b.setRenderTarget(Ie),b.getClearColor(pe),se=b.getClearAlpha(),se<1&&b.setClearColor(16777215,.5),b.clear(),pt&&Le.render(ae);const rt=b.toneMapping;b.toneMapping=qi;const nt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),I.setupLightsView(ne),he===!0&&Xe.setGlobalState(b.clippingPlanes,ne),jn(R,ae,ne),X.updateMultisampleRenderTarget(Ie),X.updateRenderTargetMipmap(Ie),vt.has("WEBGL_multisampled_render_to_texture")===!1){let _t=!1;for(let Rt=0,Gt=q.length;Rt<Gt;Rt++){const zt=q[Rt],{object:It,geometry:tt,material:Lt,group:Tt}=zt;if(Lt.side===pr&&It.layers.test(ne.layers)){const yn=Lt.side;Lt.side=ri,Lt.needsUpdate=!0,Er(It,ae,ne,tt,Lt,Tt),Lt.side=yn,Lt.needsUpdate=!0,_t=!0}}_t===!0&&(X.updateMultisampleRenderTarget(Ie),X.updateRenderTargetMipmap(Ie))}b.setRenderTarget(Pe,ze,je),b.setClearColor(pe,se),nt!==void 0&&(ne.viewport=nt),b.toneMapping=rt}function jn(R,q,ae){const ne=q.isScene===!0?q.overrideMaterial:null;for(let J=0,Ie=R.length;J<Ie;J++){const ke=R[J],{object:Pe,geometry:ze,group:je}=ke;let rt=ke.material;rt.allowOverride===!0&&ne!==null&&(rt=ne),Pe.layers.test(ae.layers)&&Er(Pe,q,ae,ze,rt,je)}}function Er(R,q,ae,ne,J,Ie){R.onBeforeRender(b,q,ae,ne,J,Ie),R.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(b,q,ae,ne,R,Ie),J.transparent===!0&&J.side===pr&&J.forceSinglePass===!1?(J.side=ri,J.needsUpdate=!0,b.renderBufferDirect(ae,q,ne,J,R,Ie),J.side=$r,J.needsUpdate=!0,b.renderBufferDirect(ae,q,ne,J,R,Ie),J.side=pr):b.renderBufferDirect(ae,q,ne,J,R,Ie),R.onAfterRender(b,q,ae,ne,J,Ie)}function ki(R,q,ae){q.isScene!==!0&&(q=Dt);const ne=E.get(R),J=I.state.lights,Ie=I.state.shadowsArray,ke=J.state.version,Pe=Ge.getParameters(R,J.state,Ie,q,ae),ze=Ge.getProgramCacheKey(Pe);let je=ne.programs;ne.environment=R.isMeshStandardMaterial?q.environment:null,ne.fog=q.fog,ne.envMap=(R.isMeshStandardMaterial?xe:me).get(R.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,je===void 0&&(R.addEventListener("dispose",cn),je=new Map,ne.programs=je);let rt=je.get(ze);if(rt!==void 0){if(ne.currentProgram===rt&&ne.lightsStateVersion===ke)return Jr(R,Pe),rt}else Pe.uniforms=Ge.getUniforms(R),R.onBeforeCompile(Pe,b),rt=Ge.acquireProgram(Pe,ze),je.set(ze,rt),ne.uniforms=Pe.uniforms;const nt=ne.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(nt.clippingPlanes=Xe.uniform),Jr(R,Pe),ne.needsLights=ts(R),ne.lightsStateVersion=ke,ne.needsLights&&(nt.ambientLightColor.value=J.state.ambient,nt.lightProbe.value=J.state.probe,nt.directionalLights.value=J.state.directional,nt.directionalLightShadows.value=J.state.directionalShadow,nt.spotLights.value=J.state.spot,nt.spotLightShadows.value=J.state.spotShadow,nt.rectAreaLights.value=J.state.rectArea,nt.ltc_1.value=J.state.rectAreaLTC1,nt.ltc_2.value=J.state.rectAreaLTC2,nt.pointLights.value=J.state.point,nt.pointLightShadows.value=J.state.pointShadow,nt.hemisphereLights.value=J.state.hemi,nt.directionalShadowMap.value=J.state.directionalShadowMap,nt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,nt.spotShadowMap.value=J.state.spotShadowMap,nt.spotLightMatrix.value=J.state.spotLightMatrix,nt.spotLightMap.value=J.state.spotLightMap,nt.pointShadowMap.value=J.state.pointShadowMap,nt.pointShadowMatrix.value=J.state.pointShadowMatrix),ne.currentProgram=rt,ne.uniformsList=null,rt}function Vn(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=Kl.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Jr(R,q){const ae=E.get(R);ae.outputColorSpace=q.outputColorSpace,ae.batching=q.batching,ae.batchingColor=q.batchingColor,ae.instancing=q.instancing,ae.instancingColor=q.instancingColor,ae.instancingMorph=q.instancingMorph,ae.skinning=q.skinning,ae.morphTargets=q.morphTargets,ae.morphNormals=q.morphNormals,ae.morphColors=q.morphColors,ae.morphTargetsCount=q.morphTargetsCount,ae.numClippingPlanes=q.numClippingPlanes,ae.numIntersection=q.numClipIntersection,ae.vertexAlphas=q.vertexAlphas,ae.vertexTangents=q.vertexTangents,ae.toneMapping=q.toneMapping}function es(R,q,ae,ne,J){q.isScene!==!0&&(q=Dt),X.resetTextureUnits();const Ie=q.fog,ke=ne.isMeshStandardMaterial?q.environment:null,Pe=Q===null?b.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ma,ze=(ne.isMeshStandardMaterial?xe:me).get(ne.envMap||ke),je=ne.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,rt=!!ae.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),nt=!!ae.morphAttributes.position,_t=!!ae.morphAttributes.normal,Rt=!!ae.morphAttributes.color;let Gt=qi;ne.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Gt=b.toneMapping);const zt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,It=zt!==void 0?zt.length:0,tt=E.get(ne),Lt=I.state.lights;if(he===!0&&(Ae===!0||R!==ue)){const an=R===ue&&ne.id===de;Xe.setState(ne,R,an)}let Tt=!1;ne.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Lt.state.version||tt.outputColorSpace!==Pe||J.isBatchedMesh&&tt.batching===!1||!J.isBatchedMesh&&tt.batching===!0||J.isBatchedMesh&&tt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&tt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&tt.instancing===!1||!J.isInstancedMesh&&tt.instancing===!0||J.isSkinnedMesh&&tt.skinning===!1||!J.isSkinnedMesh&&tt.skinning===!0||J.isInstancedMesh&&tt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&tt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&tt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&tt.instancingMorph===!1&&J.morphTexture!==null||tt.envMap!==ze||ne.fog===!0&&tt.fog!==Ie||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Xe.numPlanes||tt.numIntersection!==Xe.numIntersection)||tt.vertexAlphas!==je||tt.vertexTangents!==rt||tt.morphTargets!==nt||tt.morphNormals!==_t||tt.morphColors!==Rt||tt.toneMapping!==Gt||tt.morphTargetsCount!==It)&&(Tt=!0):(Tt=!0,tt.__version=ne.version);let yn=tt.currentProgram;Tt===!0&&(yn=ki(ne,q,J));let pi=!1,nn=!1,mi=!1;const Nt=yn.getUniforms(),ut=tt.uniforms;if(Ve.useProgram(yn.program)&&(pi=!0,nn=!0,mi=!0),ne.id!==de&&(de=ne.id,nn=!0),pi||ue!==R){Ve.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Nt.setValue(z,"projectionMatrix",R.projectionMatrix),Nt.setValue(z,"viewMatrix",R.matrixWorldInverse);const on=Nt.map.cameraPosition;on!==void 0&&on.setValue(z,ht.setFromMatrixPosition(R.matrixWorld)),Et.logarithmicDepthBuffer&&Nt.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Nt.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),ue!==R&&(ue=R,nn=!0,mi=!0)}if(tt.needsLights&&(Lt.state.directionalShadowMap.length>0&&Nt.setValue(z,"directionalShadowMap",Lt.state.directionalShadowMap,X),Lt.state.spotShadowMap.length>0&&Nt.setValue(z,"spotShadowMap",Lt.state.spotShadowMap,X),Lt.state.pointShadowMap.length>0&&Nt.setValue(z,"pointShadowMap",Lt.state.pointShadowMap,X)),J.isSkinnedMesh){Nt.setOptional(z,J,"bindMatrix"),Nt.setOptional(z,J,"bindMatrixInverse");const an=J.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Nt.setValue(z,"boneTexture",an.boneTexture,X))}J.isBatchedMesh&&(Nt.setOptional(z,J,"batchingTexture"),Nt.setValue(z,"batchingTexture",J._matricesTexture,X),Nt.setOptional(z,J,"batchingIdTexture"),Nt.setValue(z,"batchingIdTexture",J._indirectTexture,X),Nt.setOptional(z,J,"batchingColorTexture"),J._colorsTexture!==null&&Nt.setValue(z,"batchingColorTexture",J._colorsTexture,X));const Sn=ae.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&gt.update(J,ae,yn),(nn||tt.receiveShadow!==J.receiveShadow)&&(tt.receiveShadow=J.receiveShadow,Nt.setValue(z,"receiveShadow",J.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(ut.envMap.value=ze,ut.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&q.environment!==null&&(ut.envMapIntensity.value=q.environmentIntensity),ut.dfgLUT!==void 0&&(ut.dfgLUT.value=HE()),nn&&(Nt.setValue(z,"toneMappingExposure",b.toneMappingExposure),tt.needsLights&&Ps(ut,mi),Ie&&ne.fog===!0&&it.refreshFogUniforms(ut,Ie),it.refreshMaterialUniforms(ut,ne,_e,le,I.state.transmissionRenderTarget[R.id]),Kl.upload(z,Vn(tt),ut,X)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Kl.upload(z,Vn(tt),ut,X),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Nt.setValue(z,"center",J.center),Nt.setValue(z,"modelViewMatrix",J.modelViewMatrix),Nt.setValue(z,"normalMatrix",J.normalMatrix),Nt.setValue(z,"modelMatrix",J.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const an=ne.uniformsGroups;for(let on=0,er=an.length;on<er;on++){const si=an[on];Ee.update(si,yn),Ee.bind(si,yn)}}return yn}function Ps(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function ts(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(R,q,ae){const ne=E.get(R);ne.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=q,E.get(R.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ae,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const ae=E.get(R);ae.__webglFramebuffer=q,ae.__useDefaultFramebuffer=q===void 0};const ba=z.createFramebuffer();this.setRenderTarget=function(R,q=0,ae=0){Q=R,j=q,K=ae;let ne=null,J=!1,Ie=!1;if(R){const Pe=E.get(R);if(Pe.__useDefaultFramebuffer!==void 0){Ve.bindFramebuffer(z.FRAMEBUFFER,Pe.__webglFramebuffer),re.copy(R.viewport),Z.copy(R.scissor),Y=R.scissorTest,Ve.viewport(re),Ve.scissor(Z),Ve.setScissorTest(Y),de=-1;return}else if(Pe.__webglFramebuffer===void 0)X.setupRenderTarget(R);else if(Pe.__hasExternalTextures)X.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const rt=R.depthTexture;if(Pe.__boundDepthTexture!==rt){if(rt!==null&&E.has(rt)&&(R.width!==rt.image.width||R.height!==rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(R)}}const ze=R.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ie=!0);const je=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(je[q])?ne=je[q][ae]:ne=je[q],J=!0):R.samples>0&&X.useMultisampledRTT(R)===!1?ne=E.get(R).__webglMultisampledFramebuffer:Array.isArray(je)?ne=je[ae]:ne=je,re.copy(R.viewport),Z.copy(R.scissor),Y=R.scissorTest}else re.copy(te).multiplyScalar(_e).floor(),Z.copy(oe).multiplyScalar(_e).floor(),Y=ve;if(ae!==0&&(ne=ba),Ve.bindFramebuffer(z.FRAMEBUFFER,ne)&&Ve.drawBuffers(R,ne),Ve.viewport(re),Ve.scissor(Z),Ve.setScissorTest(Y),J){const Pe=E.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+q,Pe.__webglTexture,ae)}else if(Ie){const Pe=q;for(let ze=0;ze<R.textures.length;ze++){const je=E.get(R.textures[ze]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+ze,je.__webglTexture,ae,Pe)}}else if(R!==null&&ae!==0){const Pe=E.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Pe.__webglTexture,ae)}de=-1},this.readRenderTargetPixels=function(R,q,ae,ne,J,Ie,ke,Pe=0){if(!(R&&R.isWebGLRenderTarget)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ke!==void 0&&(ze=ze[ke]),ze){Ve.bindFramebuffer(z.FRAMEBUFFER,ze);try{const je=R.textures[Pe],rt=je.format,nt=je.type;if(!Et.textureFormatReadable(rt)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(nt)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-ne&&ae>=0&&ae<=R.height-J&&(R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Pe),z.readPixels(q,ae,ne,J,be.convert(rt),be.convert(nt),Ie))}finally{const je=Q!==null?E.get(Q).__webglFramebuffer:null;Ve.bindFramebuffer(z.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(R,q,ae,ne,J,Ie,ke,Pe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ke!==void 0&&(ze=ze[ke]),ze)if(q>=0&&q<=R.width-ne&&ae>=0&&ae<=R.height-J){Ve.bindFramebuffer(z.FRAMEBUFFER,ze);const je=R.textures[Pe],rt=je.format,nt=je.type;if(!Et.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _t=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,_t),z.bufferData(z.PIXEL_PACK_BUFFER,Ie.byteLength,z.STREAM_READ),R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Pe),z.readPixels(q,ae,ne,J,be.convert(rt),be.convert(nt),0);const Rt=Q!==null?E.get(Q).__webglFramebuffer:null;Ve.bindFramebuffer(z.FRAMEBUFFER,Rt);const Gt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await r_(z,Gt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,_t),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Ie),z.deleteBuffer(_t),z.deleteSync(Gt),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,ae=0){const ne=Math.pow(2,-ae),J=Math.floor(R.image.width*ne),Ie=Math.floor(R.image.height*ne),ke=q!==null?q.x:0,Pe=q!==null?q.y:0;X.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,ae,0,0,ke,Pe,J,Ie),Ve.unbindTexture()};const ns=z.createFramebuffer(),qt=z.createFramebuffer();this.copyTextureToTexture=function(R,q,ae=null,ne=null,J=0,Ie=null){Ie===null&&(J!==0?(xo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ie=J,J=0):Ie=0);let ke,Pe,ze,je,rt,nt,_t,Rt,Gt;const zt=R.isCompressedTexture?R.mipmaps[Ie]:R.image;if(ae!==null)ke=ae.max.x-ae.min.x,Pe=ae.max.y-ae.min.y,ze=ae.isBox3?ae.max.z-ae.min.z:1,je=ae.min.x,rt=ae.min.y,nt=ae.isBox3?ae.min.z:0;else{const Sn=Math.pow(2,-J);ke=Math.floor(zt.width*Sn),Pe=Math.floor(zt.height*Sn),R.isDataArrayTexture?ze=zt.depth:R.isData3DTexture?ze=Math.floor(zt.depth*Sn):ze=1,je=0,rt=0,nt=0}ne!==null?(_t=ne.x,Rt=ne.y,Gt=ne.z):(_t=0,Rt=0,Gt=0);const It=be.convert(q.format),tt=be.convert(q.type);let Lt;q.isData3DTexture?(X.setTexture3D(q,0),Lt=z.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(X.setTexture2DArray(q,0),Lt=z.TEXTURE_2D_ARRAY):(X.setTexture2D(q,0),Lt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment);const Tt=z.getParameter(z.UNPACK_ROW_LENGTH),yn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),pi=z.getParameter(z.UNPACK_SKIP_PIXELS),nn=z.getParameter(z.UNPACK_SKIP_ROWS),mi=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,zt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,zt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,je),z.pixelStorei(z.UNPACK_SKIP_ROWS,rt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,nt);const Nt=R.isDataArrayTexture||R.isData3DTexture,ut=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const Sn=E.get(R),an=E.get(q),on=E.get(Sn.__renderTarget),er=E.get(an.__renderTarget);Ve.bindFramebuffer(z.READ_FRAMEBUFFER,on.__webglFramebuffer),Ve.bindFramebuffer(z.DRAW_FRAMEBUFFER,er.__webglFramebuffer);for(let si=0;si<ze;si++)Nt&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,E.get(R).__webglTexture,J,nt+si),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,E.get(q).__webglTexture,Ie,Gt+si)),z.blitFramebuffer(je,rt,ke,Pe,_t,Rt,ke,Pe,z.DEPTH_BUFFER_BIT,z.NEAREST);Ve.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(J!==0||R.isRenderTargetTexture||E.has(R)){const Sn=E.get(R),an=E.get(q);Ve.bindFramebuffer(z.READ_FRAMEBUFFER,ns),Ve.bindFramebuffer(z.DRAW_FRAMEBUFFER,qt);for(let on=0;on<ze;on++)Nt?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Sn.__webglTexture,J,nt+on):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Sn.__webglTexture,J),ut?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,an.__webglTexture,Ie,Gt+on):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,an.__webglTexture,Ie),J!==0?z.blitFramebuffer(je,rt,ke,Pe,_t,Rt,ke,Pe,z.COLOR_BUFFER_BIT,z.NEAREST):ut?z.copyTexSubImage3D(Lt,Ie,_t,Rt,Gt+on,je,rt,ke,Pe):z.copyTexSubImage2D(Lt,Ie,_t,Rt,je,rt,ke,Pe);Ve.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else ut?R.isDataTexture||R.isData3DTexture?z.texSubImage3D(Lt,Ie,_t,Rt,Gt,ke,Pe,ze,It,tt,zt.data):q.isCompressedArrayTexture?z.compressedTexSubImage3D(Lt,Ie,_t,Rt,Gt,ke,Pe,ze,It,zt.data):z.texSubImage3D(Lt,Ie,_t,Rt,Gt,ke,Pe,ze,It,tt,zt):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Ie,_t,Rt,ke,Pe,It,tt,zt.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Ie,_t,Rt,zt.width,zt.height,It,zt.data):z.texSubImage2D(z.TEXTURE_2D,Ie,_t,Rt,ke,Pe,It,tt,zt);z.pixelStorei(z.UNPACK_ROW_LENGTH,Tt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,yn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,pi),z.pixelStorei(z.UNPACK_SKIP_ROWS,nn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,mi),Ie===0&&q.generateMipmaps&&z.generateMipmap(Lt),Ve.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&X.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?X.setTextureCube(R,0):R.isData3DTexture?X.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?X.setTexture2DArray(R,0):X.setTexture2D(R,0),Ve.unbindTexture()},this.resetState=function(){j=0,K=0,Q=null,Ve.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=kt._getDrawingBufferColorSpace(e),t.unpackColorSpace=kt._getUnpackColorSpace()}}const v0={type:"change"},zf={type:"start"},sg={type:"end"},Vl=new Pf,_0=new Xr,XE=Math.cos(70*a_.DEG2RAD),gn=new $,ei=2*Math.PI,Wt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_d=1e-6;class qE extends $_{constructor(e,t=null){super(e,t),this.state=Wt.NONE,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ga.ROTATE,MIDDLE:ga.DOLLY,RIGHT:ga.PAN},this.touches={ONE:pa.ROTATE,TWO:pa.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new Rs,this._lastTargetPosition=new $,this._quat=new Rs().setFromUnitVectors(e.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new qm,this._sphericalDelta=new qm,this._scale=1,this._panOffset=new $,this._rotateStart=new ft,this._rotateEnd=new ft,this._rotateDelta=new ft,this._panStart=new ft,this._panEnd=new ft,this._panDelta=new ft,this._dollyStart=new ft,this._dollyEnd=new ft,this._dollyDelta=new ft,this._dollyDirection=new $,this._mouse=new ft,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$E.bind(this),this._onPointerDown=YE.bind(this),this._onPointerUp=KE.bind(this),this._onContextMenu=iw.bind(this),this._onMouseWheel=JE.bind(this),this._onKeyDown=ew.bind(this),this._onTouchStart=tw.bind(this),this._onTouchMove=nw.bind(this),this._onMouseDown=ZE.bind(this),this._onMouseMove=QE.bind(this),this._interceptControlDown=rw.bind(this),this._interceptControlUp=sw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(v0),this.update(),this.state=Wt.NONE}update(e=null){const t=this.object.position;gn.copy(t).sub(this.target),gn.applyQuaternion(this._quat),this._spherical.setFromVector3(gn),this.autoRotate&&this.state===Wt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=ei:r>Math.PI&&(r-=ei),o<-Math.PI?o+=ei:o>Math.PI&&(o-=ei),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(gn.setFromSpherical(this._spherical),gn.applyQuaternion(this._quatInverse),t.copy(this.target).add(gn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const d=gn.length();u=this._clampDistance(d*this._scale);const p=d-u;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),l=!!p}else if(this.object.isOrthographicCamera){const d=new $(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=p!==this.object.zoom;const g=new $(this._mouse.x,this._mouse.y,0);g.unproject(this.object),this.object.position.sub(g).add(d),this.object.updateMatrixWorld(),u=gn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Vl.origin.copy(this.object.position),Vl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Vl.direction))<XE?this.object.lookAt(this.target):(_0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Vl.intersectPlane(_0,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>_d||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_d||this._lastTargetPosition.distanceToSquared(this.target)>_d?(this.dispatchEvent(v0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ei/60*this.autoRotateSpeed*e:ei/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){gn.setFromMatrixColumn(t,0),gn.multiplyScalar(-e),this._panOffset.add(gn)}_panUp(e,t){this.screenSpacePanning===!0?gn.setFromMatrixColumn(t,1):(gn.setFromMatrixColumn(t,0),gn.crossVectors(this.object.up,gn)),gn.multiplyScalar(e),this._panOffset.add(gn)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;gn.copy(o).sub(this.target);let l=gn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,l=t-r.top,u=r.width,d=r.height;this._mouse.x=o/u*2-1,this._mouse.y=-(l/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ei*this._rotateDelta.x/t.clientHeight),this._rotateUp(ei*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ei*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ei*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ei*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ei*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(o,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ei*this._rotateDelta.x/t.clientHeight),this._rotateUp(ei*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,d=(e.pageY+t.y)*.5;this._updateZoomParameters(u,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ft,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function YE(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function $E(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function KE(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sg),this.state=Wt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ZE(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ga.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Wt.DOLLY;break;case ga.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Wt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Wt.ROTATE}break;case ga.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Wt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Wt.PAN}break;default:this.state=Wt.NONE}this.state!==Wt.NONE&&this.dispatchEvent(zf)}function QE(s){switch(this.state){case Wt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Wt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Wt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function JE(s){this.enabled===!1||this.enableZoom===!1||this.state!==Wt.NONE||(s.preventDefault(),this.dispatchEvent(zf),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(sg))}function ew(s){this.enabled!==!1&&this._handleKeyDown(s)}function tw(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case pa.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Wt.TOUCH_ROTATE;break;case pa.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Wt.TOUCH_PAN;break;default:this.state=Wt.NONE}break;case 2:switch(this.touches.TWO){case pa.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Wt.TOUCH_DOLLY_PAN;break;case pa.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Wt.TOUCH_DOLLY_ROTATE;break;default:this.state=Wt.NONE}break;default:this.state=Wt.NONE}this.state!==Wt.NONE&&this.dispatchEvent(zf)}function nw(s){switch(this._trackPointer(s),this.state){case Wt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Wt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Wt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Wt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Wt.NONE}}function iw(s){this.enabled!==!1&&s.preventDefault()}function rw(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function sw(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const aw=()=>{const s=Qe.useRef(null),e=Qe.useRef(null),[t,r]=Qe.useState("STANDBY"),o=Qe.useRef("STANDBY");o.current=t;const[l,u]=Qe.useState(10),d=Qe.useRef(10);d.current=l;const[p,g]=Qe.useState({temp:180,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"PRONTIDÃO",countdown:10}),[x,_]=Qe.useState(null),[y,S]=Qe.useState("geral"),A=Qe.useRef(null),N=Qe.useRef(null),M=Qe.useRef(null),v=Qe.useRef(null),T=Qe.useRef(null),D=Qe.useRef(null),C=Qe.useRef(null),I=Qe.useRef(null),L=Qe.useRef(null),F=Qe.useRef(null),G=Qe.useRef(null),b=Qe.useRef(null),P=Qe.useRef(null),j=Qe.useRef(null),K=Qe.useRef(null),Q=Qe.useRef(null),de=Qe.useRef(null),ue=Qe.useRef(null);Qe.useRef(null);const re=Qe.useRef(new $(0,2.2,4.4)),Z=Qe.useRef(new $(0,1.4,0)),Y=Qe.useCallback(()=>{let _e=D.current;_e||(_e=document.createElement("canvas"),_e.width=1024,_e.height=740,D.current=_e);const O=_e.getContext("2d");if(!O)return;const Te=o.current,te=d.current;O.fillStyle="#121418",O.fillRect(0,0,1024,740),O.strokeStyle="rgba(255, 255, 255, 0.03)",O.lineWidth=1;for(let z=10;z<740;z+=8)O.beginPath(),O.moveTo(0,z),O.lineTo(1024,z),O.stroke();O.strokeStyle="#d4af37",O.lineWidth=4,O.strokeRect(16,16,992,708),O.strokeStyle="rgba(212, 175, 55, 0.4)",O.lineWidth=1.5,O.strokeRect(24,24,976,692),O.fillStyle="#d4af37",O.font='bold 38px "Outfit", Inter, sans-serif',O.textAlign="left",O.fillText("OUTFIRE",50,70),O.fillStyle="#e5c05d",O.font="600 13px Inter, sans-serif",O.fillText("SISTEMA AUTOMÁTICO DE COMBATE A INCÊNDIO EM COZINHA INDUSTRIAL",50,94),O.fillStyle="#94a3b8",O.font="500 11px monospace",O.fillText("CONFORME ABNT NBR 14518 / NFPA 96 & 17A",50,112);const oe=130,ve=240,Be=65;O.beginPath(),O.arc(oe,ve,Be,0,Math.PI*2),O.fillStyle="#0a0b0d",O.fill(),O.strokeStyle="#2a2e36",O.lineWidth=2,O.stroke(),O.fillStyle="#1a1d24";for(let z=12;z<=Be-10;z+=12){const Vt=Math.floor(2*Math.PI*z/12);for(let vt=0;vt<Vt;vt++){const Et=vt*2*Math.PI/Vt,Ve=oe+z*Math.cos(Et),U=ve+z*Math.sin(Et);O.beginPath(),O.arc(Ve,U,2.5,0,Math.PI*2),O.fill()}}O.fillStyle="#64748b",O.font="bold 10px monospace",O.textAlign="center",O.fillText("ALTO-FALANTE GUIA POR VOZ",oe,ve+Be+22);const he=260,Ae=145,We=440,ht=340;O.fillStyle="#05070a",O.fillRect(he-8,Ae-8,We+16,ht+16),O.strokeStyle="#27272a",O.lineWidth=2,O.strokeRect(he-8,Ae-8,We+16,ht+16),Te==="STANDBY"?O.fillStyle="#071318":Te==="FIRE_ALARM"?O.fillStyle="#3a0808":Te==="SUPPRESSION"?O.fillStyle="#3a1f04":O.fillStyle="#062419",O.fillRect(he,Ae,We,ht),O.fillStyle="rgba(0, 0, 0, 0.4)",O.fillRect(he,Ae,We,36),O.fillStyle="#94a3b8",O.font="bold 12px monospace",O.textAlign="left",O.fillText("OUTFIRE IHM v3.2",he+16,Ae+23),O.textAlign="right",O.fillStyle="#10b981",O.fillText("BATERIA: 13.8V [100%]",he+We-16,Ae+23),Te==="STANDBY"?(O.fillStyle="#10b981",O.font="bold 22px Inter, sans-serif",O.textAlign="center",O.fillText("● SISTEMA PROTEGIDO",he+We/2,Ae+80),O.fillStyle="#cbd5e1",O.font="13px monospace",O.fillText("MONITORAMENTO TÉRMICO ATIVO",he+We/2,Ae+110),O.fillStyle="#0f2922",O.fillRect(he+24,Ae+135,We-48,44),O.fillStyle="#a7f3d0",O.font="12px Inter, sans-serif",O.textAlign="left",O.fillText("SENSOR COIFA (145°C): OK",he+36,Ae+162),O.textAlign="right",O.fillText("180°C (OPERACIONAL)",he+We-36,Ae+162),O.fillStyle="#0f2922",O.fillRect(he+24,Ae+190,We-48,44),O.fillStyle="#a7f3d0",O.textAlign="left",O.fillText("SENSOR DUTO (300°C): OK",he+36,Ae+217),O.textAlign="right",O.fillText("75°C (NORMAL)",he+We-36,Ae+217),O.fillStyle="#0f2922",O.fillRect(he+24,Ae+245,We-48,44),O.fillStyle="#a7f3d0",O.textAlign="left",O.fillText("VÁLVULA SOLENOIDE DE GÁS:",he+36,Ae+272),O.textAlign="right",O.fillStyle="#34d399",O.fillText("ABERTA / LIBERADA",he+We-36,Ae+272),O.fillStyle="#64748b",O.font="10px monospace",O.textAlign="center",O.fillText("PRESSIONE O ACIONADOR MANUAL EM CASO DE EMERGÊNCIA",he+We/2,Ae+318)):Te==="FIRE_ALARM"?(O.fillStyle="#ef4444",O.font="bold 24px Inter, sans-serif",O.textAlign="center",O.fillText("🚨 FOGO DETECTADO! 🚨",he+We/2,Ae+75),O.fillStyle="#fecaca",O.font="bold 13px Inter, sans-serif",O.fillText("SENSOR TÉRMICO SUPEROU 145°C",he+We/2,Ae+102),O.fillStyle="#1c0505",O.fillRect(he+50,Ae+120,We-100,95),O.strokeStyle="#ef4444",O.lineWidth=2,O.strokeRect(he+50,Ae+120,We-100,95),O.fillStyle="#ffffff",O.font="bold 54px monospace",O.fillText(`00:0${Math.max(0,te)}`,he+We/2,Ae+185),O.fillStyle="#fca5a5",O.font="bold 12px Inter, sans-serif",O.fillText("DISPARO AUTOMÁTICO DE SAPONIFICANTE",he+We/2,Ae+240),O.fillStyle="#f59e0b",O.font="11px monospace",O.fillText("ACIONE O BOTAO MANUAL PARA DISPARO IMEDIATO",he+We/2,Ae+265),O.fillStyle="#dc2626",O.fillRect(he+24,Ae+285,We-48,38),O.fillStyle="#ffffff",O.font="bold 12px Inter, sans-serif",O.fillText("EVACUE A ÁREA DE COZIMENTO IMEDIATAMENTE",he+We/2,Ae+309)):Te==="SUPPRESSION"?(O.fillStyle="#f59e0b",O.font="bold 24px Inter, sans-serif",O.textAlign="center",O.fillText("⚡ DISPARO ATIVO EM CURSO ⚡",he+We/2,Ae+80),O.fillStyle="#ffffff",O.font="bold 15px monospace",O.fillText("DESCARGA DE SAPONIFICANTE & CO2",he+We/2,Ae+115),O.fillStyle="#ef4444",O.fillRect(he+24,Ae+140,We-48,48),O.fillStyle="#ffffff",O.font="bold 14px Inter, sans-serif",O.fillText("VÁLVULA DE GÁS: CORTADA (BLOQUEADA)",he+We/2,Ae+170),O.fillStyle="#3b82f6",O.fillRect(he+24,Ae+200,We-48,48),O.fillStyle="#ffffff",O.fillText("EXAUSTOR: DESLIGADO (DAMPER FECHADO)",he+We/2,Ae+230),O.fillStyle="#cbd5e1",O.font="bold 13px Inter, sans-serif",O.fillText("ESPUMA ENCAPSULANDO O ÓLEO QUENTE",he+We/2,Ae+280),O.fillStyle="#a7f3d0",O.font="11px monospace",O.fillText("TEMPERATURA EM QUEDA DRÁSTICA...",he+We/2,Ae+310)):Te==="EXTINGUISHED"&&(O.fillStyle="#10b981",O.font="bold 24px Inter, sans-serif",O.textAlign="center",O.fillText("✓ INCÊNDIO EXTINTO COM SUCESSO",he+We/2,Ae+80),O.fillStyle="#e2e8f0",O.font="bold 14px Inter, sans-serif",O.fillText("REIGNIÇÃO 100% IMPEDIDA (SAPONIFICAÇÃO)",he+We/2,Ae+115),O.fillStyle="#064e3b",O.fillRect(he+24,Ae+140,We-48,44),O.fillStyle="#6ee7b7",O.font="12px Inter, sans-serif",O.textAlign="left",O.fillText("TEMPERATURA FINAL DO ÓLEO:",he+36,Ae+167),O.textAlign="right",O.fillText("42°C (TOTALMENTE RESFRIADO)",he+We-36,Ae+167),O.fillStyle="#064e3b",O.fillRect(he+24,Ae+195,We-48,44),O.fillStyle="#6ee7b7",O.textAlign="left",O.fillText("INTERTRAVAMENTO DE SEGURANÇA:",he+36,Ae+222),O.textAlign="right",O.fillText("ATIVO / SEGURO",he+We-36,Ae+222),O.fillStyle="#064e3b",O.fillRect(he+24,Ae+250,We-48,44),O.fillStyle="#6ee7b7",O.textAlign="left",O.fillText("COZINHA & PESSOAS:",he+36,Ae+277),O.textAlign="right",O.fillText("100% PRESERVADAS",he+We-36,Ae+277),O.fillStyle="#94a3b8",O.font="10px monospace",O.textAlign="center",O.fillText("SISTEMA PRONTO PARA LIMPEZA COM ÁGUA E REARME",he+We/2,Ae+318));const St=720,Dt=145;O.fillStyle="#ffffff",O.font="bold 12px Inter, sans-serif",O.textAlign="left",O.fillText("🛡️ GUIA DE OPERAÇÃO",St,Dt+15),O.fillStyle="#94a3b8",O.font="10px Inter, sans-serif";const pt=["SISTEMA DE VOZ FALADA:","A central avisa em áudio qualquer alteração.","","🟢 TUDO VERDE = OPERANDO","Cozinha Protegida (CO2 e Saponificante OK).","","🔴 TELA VERMELHA = ALERTA","Temperatura na coifa > 145°C.","Disparo automático em 10 segundos.","","🚨 ACIONADOR MANUAL:","Puxe a alavanca da botoeira para supressão","imediata sem esperar o timer.","","⚡ CORTE AUTOMÁTICO:","Válvula solenoide de gás fecha e exaustor","intertrava para abafar o oxigênio."];let jt=Dt+40;pt.forEach(z=>{O.fillText(z,St,jt),jt+=15}),O.fillStyle="#b91c1c",O.fillRect(30,520,964,170),O.fillStyle="#ffffff",O.font='900 28px "Outfit", Inter, sans-serif',O.textAlign="center",O.fillText("EM CASO DE INCÊNDIO EVACUAR O LOCAL",512,565),O.fillStyle="#fef08a",O.font="bold 15px Inter, sans-serif",O.fillText("AOS 144°C O SISTEMA DISPARA AUTOMATICAMENTE. SE NECESSÁRIO, ACIONE A BOTOEIRA MANUAL.",512,600),O.fillStyle="#ffffff",O.font="bold 12px monospace",O.fillText("MANUTENÇÃO & SUPORTE TÉCNICO: (15) 99657-6807  |  WWW.OUTFIRE.COM.BR",512,635),O.fillStyle="rgba(255, 255, 255, 0.7)",O.font="10px monospace",O.fillText("EQUIPAMENTO HOMOLOGADO PARA COZINHAS INDUSTRIAIS - ABNT NBR 14518 / CORPO DE BOMBEIROS (AVCB)",512,665),T.current&&(T.current.needsUpdate=!0)},[]),pe=Qe.useCallback(()=>{o.current!=="FIRE_ALARM"&&(r("FIRE_ALARM"),u(10),g(_e=>({..._e,temp:365,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"ALERTA DE FOGO",countdown:10})))},[]),se=Qe.useCallback(()=>{o.current==="SUPPRESSION"||o.current==="EXTINGUISHED"||(r("SUPPRESSION"),u(0),g(_e=>({..._e,temp:140,gasStatus:"CORTADO",exhaustStatus:"INTERTRAVADO",systemStatus:"COMBATE ATIVO",countdown:0})),F.current&&(F.current.rotation.x=.65),setTimeout(()=>{r("EXTINGUISHED"),g(_e=>({..._e,temp:42,gasStatus:"CORTADO",exhaustStatus:"INTERTRAVADO",systemStatus:"INCÊNDIO EXTINTO",countdown:0}))},3800))},[]),B=Qe.useCallback(()=>{r("STANDBY"),u(10),g({temp:180,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"PRONTIDÃO",countdown:10}),F.current&&(F.current.rotation.x=0),j.current&&(j.current.scale.set(.001,.001,.001),j.current.visible=!1)},[]);Qe.useEffect(()=>{let _e;return t==="FIRE_ALARM"&&(_e=setInterval(()=>{u(O=>{if(O<=1)return se(),0;const Te=O-1;return g(te=>({...te,countdown:Te})),Te})},1e3)),()=>clearInterval(_e)},[t,se]),Qe.useEffect(()=>{Y()},[t,l,Y]);const le=_e=>{S(_e),_e==="geral"?(re.current.set(0,2.2,4.4),Z.current.set(0,1.4,0)):_e==="central"?(re.current.set(2,1.85,1.6),Z.current.set(2.1,1.8,.15)):_e==="fritadeira"?(re.current.set(-.2,1.4,2.2),Z.current.set(-.2,1,0)):_e==="botoeira"&&(re.current.set(1.4,1.45,1.3),Z.current.set(1.45,1.4,.05))};return Qe.useEffect(()=>{if(!e.current||!s.current)return;const _e=s.current.clientWidth||window.innerWidth,O=s.current.clientHeight||window.innerHeight,Te=new N_;A.current=Te,Te.background=new bt(658448),Te.fog=new Lf(658448,.035);const te=new ii(45,_e/O,.1,100);te.position.set(0,2.2,4.4),N.current=te;const oe=new WE({canvas:e.current,antialias:!0,powerPreference:"high-performance"});oe.setSize(_e,O),oe.setPixelRatio(Math.min(window.devicePixelRatio,2)),oe.shadowMap.enabled=!0,oe.shadowMap.type=A0,oe.toneMapping=yf,oe.toneMappingExposure=1.1,M.current=oe;const ve=new qE(te,oe.domElement);ve.enableDamping=!0,ve.dampingFactor=.05,ve.maxPolarAngle=Math.PI/2+.05,ve.minDistance=1.2,ve.maxDistance=8,ve.target.set(0,1.4,0),v.current=ve;const Be=new W_(16774890,.7);Te.add(Be);const he=new H_(16777215,1.2);he.position.set(4,6,4),he.castShadow=!0,he.shadow.mapSize.width=1024,he.shadow.mapSize.height=1024,Te.add(he);const Ae=new j_(16766880,2.5,6,Math.PI/3,.3);Ae.position.set(0,2.7,0),Ae.target.position.set(0,.9,0),Te.add(Ae),Te.add(Ae.target);const We=new Hm(16733440,0,5);We.position.set(-.35,1.2,.1),Te.add(We),L.current=We;const ht=new Hm(16711680,0,8);ht.position.set(2.1,2.25,.2),Te.add(ht),C.current=ht;const St=new hn({color:13421772,metalness:.9,roughness:.22}),Dt=new hn({color:1579551,roughness:.6,metalness:.1}),pt=new hn({color:987413,roughness:.8,metalness:.2}),jt=new As(14,14),z=new yt(jt,pt);z.rotation.x=-Math.PI/2,z.receiveShadow=!0,Te.add(z);const Vt=new As(14,8),vt=new yt(Vt,Dt);vt.position.set(0,4,-1.2),vt.receiveShadow=!0,Te.add(vt);const Et=new yt(new As(14,8),Dt);Et.rotation.y=Math.PI/2,Et.position.set(-4.5,4,0),Te.add(Et);const Ve=new ni;Te.add(Ve);const U=new yt(new xn(2.6,.9,1),St);U.position.set(0,.45,0),U.castShadow=!0,U.receiveShadow=!0,Ve.add(U);const E=new ni;E.position.set(-.55,.9,0),Ve.add(E),P.current=E;const X=new yt(new xn(.85,.12,.75),St);X.position.set(0,.06,0),E.add(X);const me=new xn(.72,.02,.62),xe=new hn({color:9584654,roughness:.1,metalness:.3}),fe=new yt(me,xe);fe.position.set(0,.11,0),E.add(fe);const $e=new hn({color:1118481,roughness:.5}),Ne=new yt(new ti(.012,.012,.28),$e);Ne.position.set(-.16,.22,.34),Ne.rotation.x=Math.PI/3,E.add(Ne);const Ge=new yt(new ti(.012,.012,.28),$e);Ge.position.set(.16,.22,.34),Ge.rotation.x=Math.PI/3,E.add(Ge);const it=new ni;it.position.set(.65,.9,0),Ve.add(it);const Me=new yt(new xn(.95,.06,.75),new hn({color:3355448,roughness:.4,metalness:.7}));Me.position.set(0,.03,0),it.add(Me);const Ce=new ni;Ce.position.set(0,2.3,0),Te.add(Ce);const Xe=new xn(2.8,.6,1.2),qe=new yt(Xe,St);qe.castShadow=!0,Ce.add(qe);const Le=new hn({color:10066329,metalness:.9,roughness:.3});for(let Ut=-1;Ut<=1;Ut+=.5){const lt=new yt(new xn(.42,.35,.04),Le);lt.position.set(Ut,-.15,0),lt.rotation.x=-Math.PI/6,Ce.add(lt)}const gt=new ti(.28,.28,1.5,32),H=new yt(gt,St);H.position.set(0,1,0),Ce.add(H);const Oe=new hn({color:11817737,metalness:.8,roughness:.3}),be=new hn({color:13938487,metalness:.9,roughness:.2}),Ue=new yt(new ti(.015,.015,2.4),Oe);Ue.rotation.z=Math.PI/2,Ue.position.set(0,-.28,-.2),Ce.add(Ue),[[-.7,-.32,0],[-.35,-.32,0],[.45,-.32,0],[.85,-.32,0]].forEach(([Ut,lt,Dn])=>{const Zt=new yt(new Uf(.025,.06,16),be);Zt.position.set(Ut,lt,Dn),Zt.rotation.x=Math.PI,Ce.add(Zt)});const ge=new hn({color:14251782,roughness:.2}),De=new yt(new ti(.008,.008,.08),ge);De.position.set(-.55,-.25,.1),Ce.add(De);const ot=new yt(new ti(.008,.008,.08),ge);ot.position.set(0,.4,0),Ce.add(ot);const mt=new ni;mt.position.set(2.1,1.8,.15),mt.rotation.y=-.28,Te.add(mt),b.current=mt,mt.userData={interactiveType:"central",name:"Central Outfire VTS 32S3"},Y();const Ct=new U_(D.current);Ct.colorSpace=fi,T.current=Ct;const cn=new hn({color:1513757,roughness:.45,metalness:.8}),Cn=new hn({map:Ct,roughness:.35,metalness:.3}),Kr=[cn,cn,cn,cn,Cn,cn],wi=new yt(new xn(.72,.52,.22),Kr);wi.castShadow=!0,mt.add(wi);const Sr=new yt(new ti(.016,.016,1.6,16),St);Sr.position.set(0,1.05,0),mt.add(Sr);const Fi=new yt(new ti(.045,.045,.03,16),new hn({color:1118481,metalness:.8}));Fi.position.set(0,.275,0),mt.add(Fi);const Ji=new hn({color:16711680,transparent:!0,opacity:.85,roughness:.1}),bi=new yt(new ti(.038,.042,.065,16),Ji);bi.position.set(0,.32,0),mt.add(bi),I.current=bi;const Xn=new yt(new xn(.68,.02,.2),cn);Xn.position.set(0,-.32,0),mt.add(Xn);const Mr=new hn({color:592396,roughness:.5}),Zr=new yt(new xn(.24,.15,.14),Mr);Zr.position.set(-.16,-.23,0),mt.add(Zr);const Qr=new yt(new xn(.24,.15,.14),Mr);Qr.position.set(.16,-.23,0),mt.add(Qr);const jn=new hn({color:2450411,metalness:.7}),Er=new yt(new ti(.008,.008,.02),jn);Er.position.set(-.22,-.14,.04),mt.add(Er);const ki=new yt(new ti(.008,.008,.02),jn);ki.position.set(.1,-.14,.04),mt.add(ki);const Vn=new ni;Vn.position.set(1.45,1.4,.08),Te.add(Vn),G.current=Vn,Vn.userData={interactiveType:"botoeira",name:"Acionador Manual de Emergência"};const Jr=new hn({color:13373713,roughness:.3,metalness:.3}),es=new yt(new xn(.18,.24,.08),Jr);es.castShadow=!0,Vn.add(es);const Ps=new hn({color:16777215,transparent:!0,opacity:.45,roughness:.1}),ts=new yt(new xn(.14,.18,.015),Ps);ts.position.set(0,0,.042),Vn.add(ts);const ba=new hn({color:16436245,roughness:.3}),ns=new yt(new xn(.1,.06,.025),ba);ns.position.set(0,-.01,.048),Vn.add(ns),F.current=ns;const qt=new yt(new ma(.012,16,16),new Es({color:2278750}));qt.position.set(0,.085,.045),Vn.add(qt);const R=new xn(.74,.08,.64),q=new hn({color:16317180,roughness:.9,metalness:.05,bumpScale:.05}),ae=new yt(R,q);ae.position.set(-.55,1.05,0),ae.scale.set(.001,.001,.001),ae.visible=!1,Te.add(ae),j.current=ae;const ne=new ni;Te.add(ne),K.current=ne;const J=65,Ie=new Ff(.08,1),ke=new Es({color:16729344,transparent:!0,opacity:.85}),Pe=[];for(let Ut=0;Ut<J;Ut++){const lt=new yt(Ie,ke.clone());lt.position.set(-.55+(Math.random()-.5)*.5,1.05+Math.random()*.4,(Math.random()-.5)*.4),lt.userData={baseY:1.05,speedY:.8+Math.random()*1.5,rndX:(Math.random()-.5)*.3,rndZ:(Math.random()-.5)*.3,scale:.4+Math.random()*.8},ne.add(lt),Pe.push(lt)}const ze=new ni;Te.add(ze),Q.current=ze;const je=50,rt=new ma(.12,8,8),nt=new Es({color:2040877,transparent:!0,opacity:.4}),_t=[];for(let Ut=0;Ut<je;Ut++){const lt=new yt(rt,nt.clone());lt.position.set(-.55+(Math.random()-.5)*.6,1.3+Math.random()*1,(Math.random()-.5)*.4),lt.userData={speedY:.6+Math.random()*1,maxH:2.2},ze.add(lt),_t.push(lt)}const Rt=new ni;Te.add(Rt),de.current=Rt;const Gt=80,zt=new ma(.025,8,8),It=new Es({color:16777215,transparent:!0,opacity:.9}),tt=[];for(let Ut=0;Ut<Gt;Ut++){const lt=new yt(zt,It);lt.position.set(-.55,1.9,0),lt.userData={origY:1.98,speed:3.5+Math.random()*2,spread:(Math.random()-.5)*.4},Rt.add(lt),tt.push(lt)}const Lt=new ni;Te.add(Lt),ue.current=Lt;const Tt=35,yn=new ma(.16,8,8),pi=new Es({color:14870768,transparent:!0,opacity:.4}),nn=[];for(let Ut=0;Ut<Tt;Ut++){const lt=new yt(yn,pi.clone());lt.position.set((Math.random()-.5)*.4,2.7+Math.random()*.5,(Math.random()-.5)*.3),Lt.add(lt),nn.push(lt)}const mi=new Y_,Nt=new ft,ut=Ut=>{var Zt,et;const lt=oe.domElement.getBoundingClientRect();Nt.x=(Ut.clientX-lt.left)/lt.width*2-1,Nt.y=-((Ut.clientY-lt.top)/lt.height)*2+1,mi.setFromCamera(Nt,te);const Dn=mi.intersectObjects([Vn,mt,E],!0);if(Dn.length>0){let Xt=Dn[0].object;for(;Xt&&!((Zt=Xt.userData)!=null&&Zt.interactiveType)&&Xt.parent;)Xt=Xt.parent;if(Xt&&((et=Xt.userData)!=null&&et.interactiveType)){oe.domElement.style.cursor="pointer",_(Xt.userData.name);return}}oe.domElement.style.cursor="default",_(null)},Sn=Ut=>{var Zt,et,Xt;const lt=oe.domElement.getBoundingClientRect();Nt.x=(Ut.clientX-lt.left)/lt.width*2-1,Nt.y=-((Ut.clientY-lt.top)/lt.height)*2+1,mi.setFromCamera(Nt,te);const Dn=mi.intersectObjects([Vn,mt,E],!0);if(Dn.length>0){let un=Dn[0].object;for(;un&&!((Zt=un.userData)!=null&&Zt.interactiveType)&&un.parent;)un=un.parent;((et=un==null?void 0:un.userData)==null?void 0:et.interactiveType)==="botoeira"?se():((Xt=un==null?void 0:un.userData)==null?void 0:Xt.interactiveType)==="central"&&le("central")}};oe.domElement.addEventListener("mousemove",ut),oe.domElement.addEventListener("click",Sn);const an=()=>{if(!s.current||!M.current||!N.current)return;const Ut=s.current.clientWidth,lt=s.current.clientHeight;N.current.aspect=Ut/lt,N.current.updateProjectionMatrix(),M.current.setSize(Ut,lt)};window.addEventListener("resize",an);let on;const er=new q_,si=()=>{on=requestAnimationFrame(si);const Ut=er.getDelta(),lt=er.getElapsedTime();te.position.lerp(re.current,.05),ve.target.lerp(Z.current,.05),ve.update();const Dn=o.current;if(Dn==="FIRE_ALARM"){ne.visible=!0,ze.visible=!0,de.current.visible=!1,ue.current.visible=!1,L.current&&(L.current.intensity=2.5+Math.sin(lt*20)*1.5+Math.cos(lt*33)*.8,L.current.color.setHex(Math.random()>.3?16729344:16755200)),Pe.forEach((et,Xt)=>{et.visible=!0,et.position.y+=et.userData.speedY*Ut,et.position.x+=Math.sin(lt*10+Xt)*.006;const un=(et.position.y-et.userData.baseY)/1;et.scale.setScalar(Math.max(.01,(1-un)*et.userData.scale)),et.material.opacity=1-un,et.position.y>et.userData.baseY+.9&&(et.position.y=et.userData.baseY,et.position.x=-.55+(Math.random()-.5)*.5,et.position.z=(Math.random()-.5)*.4)}),_t.forEach(et=>{et.visible=!0,et.position.y+=et.userData.speedY*Ut,et.scale.addScalar(.005),et.position.y>et.userData.maxH&&(et.position.y=1.3,et.scale.set(1,1,1),et.position.x=-.55+(Math.random()-.5)*.4)});const Zt=Math.sin(lt*24)>0;C.current&&I.current&&(C.current.intensity=Zt?5:0,I.current.material.emissive=Zt?new bt(16711680):new bt(0))}else if(Dn==="SUPPRESSION"){ne.visible=!0,de.current.visible=!0,ue.current.visible=!0,Pe.forEach(et=>{et.scale.multiplyScalar(.92),et.scale.x<.05&&(et.visible=!1)}),L.current&&(L.current.intensity=Math.max(0,L.current.intensity-Ut*4)),tt.forEach((et,Xt)=>{et.visible=!0,et.position.y-=et.userData.speed*Ut,et.position.x+=Math.sin(lt*15+Xt)*.01,et.position.y<1.05&&(et.position.y=et.userData.origY,et.position.x=-.55+et.userData.spread)}),j.current&&(j.current.visible=!0,j.current.scale.lerp(new $(1,1,1),.08)),nn.forEach((et,Xt)=>{et.visible=!0,et.position.y+=Math.sin(lt*3+Xt)*.004,et.position.x+=Math.cos(lt*2+Xt)*.004});const Zt=Math.sin(lt*30)>0;C.current&&I.current&&(C.current.intensity=Zt?4:.2,I.current.material.emissive=Zt?new bt(16711680):new bt(3342336))}else Dn==="EXTINGUISHED"?(ne.visible=!1,ze.visible=!1,de.current.visible=!1,ue.current.visible=!1,L.current&&(L.current.intensity=0),j.current&&(j.current.visible=!0,j.current.scale.set(1,1,1)),C.current&&I.current&&(C.current.intensity=0,I.current.material.emissive=new bt(0))):(ne.visible=!1,ze.visible=!1,de.current.visible=!1,ue.current.visible=!1,L.current&&(L.current.intensity=0),j.current&&(j.current.visible=!1),C.current&&I.current&&(C.current.intensity=0,I.current.material.emissive=new bt(0)));oe.render(Te,te)};return si(),()=>{cancelAnimationFrame(on),window.removeEventListener("resize",an),oe.domElement.removeEventListener("mousemove",ut),oe.domElement.removeEventListener("click",Sn),oe.dispose()}},[se,Y]),h.jsxs("section",{id:"hero-3d",ref:s,className:"relative w-full h-[90vh] min-h-[640px] bg-[#07080a] overflow-hidden flex flex-col justify-between select-none",children:[h.jsx("canvas",{ref:e,className:"absolute inset-0 w-full h-full block z-0 outline-none"}),h.jsxs("div",{className:"relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pointer-events-none",children:[h.jsxs("div",{className:"flex flex-col gap-1.5 pointer-events-auto",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#d4af37]/40 shadow-glow-gold text-xs font-bold text-[#f3e5ab]",children:[h.jsx(w0,{className:"w-3.5 h-3.5 text-[#d4af37] animate-pulse"}),h.jsx("span",{children:"Simulador 3D Autônomo Outfire"}),h.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#d4af37]"}),h.jsx("span",{className:"text-[11px] font-mono text-gray-300",children:"NBR 14518"})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsxs("span",{className:`px-3 py-1 rounded-lg text-xs font-black tracking-wider uppercase flex items-center gap-1.5 backdrop-blur-md border ${t==="STANDBY"?"bg-emerald-950/80 border-emerald-500/40 text-emerald-300":t==="FIRE_ALARM"?"bg-red-950/90 border-red-500 text-red-200 animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.5)]":t==="SUPPRESSION"?"bg-amber-950/90 border-amber-500 text-amber-200 shadow-[0_0_20px_rgba(245,158,11,0.5)]":"bg-emerald-900/90 border-emerald-400 text-emerald-200"}`,children:[t==="STANDBY"&&h.jsx(Zl,{className:"w-4 h-4 text-emerald-400"}),t==="FIRE_ALARM"&&h.jsx(po,{className:"w-4 h-4 text-red-400 animate-bounce"}),t==="SUPPRESSION"&&h.jsx(av,{className:"w-4 h-4 text-amber-300 animate-spin"}),t==="EXTINGUISHED"&&h.jsx(ic,{className:"w-4 h-4 text-emerald-400"}),p.systemStatus]}),t==="FIRE_ALARM"&&h.jsxs("span",{className:"px-2.5 py-1 rounded-lg bg-red-600 text-white font-mono font-black text-xs animate-ping",children:["DISPARO EM ",l,"s"]})]})]}),h.jsxs("div",{className:"flex items-center gap-2 pointer-events-auto bg-black/75 backdrop-blur-md p-2 rounded-2xl border border-white/10 shadow-2xl",children:[h.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2",children:[h.jsx(po,{className:`w-3.5 h-3.5 ${p.temp>200?"text-red-400 animate-pulse":"text-amber-400"}`}),h.jsxs("div",{className:"flex flex-col",children:[h.jsx("span",{className:"text-[9px] text-gray-400 font-mono",children:"TEMP. ÓLEO"}),h.jsxs("span",{className:"text-xs font-bold text-white font-mono",children:[p.temp,"°C"]})]})]}),h.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2",children:[h.jsx(wv,{className:`w-3.5 h-3.5 ${p.gasStatus==="CORTADO"?"text-red-400":"text-emerald-400"}`}),h.jsxs("div",{className:"flex flex-col",children:[h.jsx("span",{className:"text-[9px] text-gray-400 font-mono",children:"VÁLVULA GÁS"}),h.jsx("span",{className:`text-xs font-bold font-mono ${p.gasStatus==="CORTADO"?"text-red-400":"text-emerald-400"}`,children:p.gasStatus})]})]}),h.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2",children:[h.jsx(T0,{className:`w-3.5 h-3.5 ${p.exhaustStatus==="INTERTRAVADO"?"text-red-400":"text-emerald-400"}`}),h.jsxs("div",{className:"flex flex-col",children:[h.jsx("span",{className:"text-[9px] text-gray-400 font-mono",children:"EXAUSTÃO"}),h.jsx("span",{className:`text-xs font-bold font-mono ${p.exhaustStatus==="INTERTRAVADO"?"text-red-400":"text-emerald-400"}`,children:p.exhaustStatus})]})]})]})]}),x&&h.jsxs("div",{className:"absolute top-28 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-4 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-[#d4af37]/60 text-xs text-[#f3e5ab] font-bold shadow-glow-gold flex items-center gap-2 animate-pulse",children:[h.jsx(E0,{className:"w-3.5 h-3.5 text-[#d4af37]"}),h.jsxs("span",{children:[x," — Clique para interagir"]})]}),h.jsxs("div",{className:"relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-5 flex flex-col md:flex-row items-center justify-between gap-4",children:[h.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[t==="STANDBY"&&h.jsxs("button",{onClick:pe,className:"py-3 px-6 rounded-2xl bg-gradient-to-r from-red-600 via-amber-600 to-red-600 hover:brightness-110 text-white font-extrabold text-sm shadow-[0_0_25px_rgba(239,68,68,0.5)] flex items-center gap-2.5 transition-all duration-300 active:scale-95 border border-red-400/40",children:[h.jsx(po,{className:"w-4 h-4 animate-bounce"}),h.jsx("span",{children:"Simular Superaquecimento & Fogo (145°C)"})]}),h.jsxs("button",{onClick:se,disabled:t==="SUPPRESSION"||t==="EXTINGUISHED",className:`py-3 px-6 rounded-2xl font-black text-sm flex items-center gap-2.5 transition-all duration-300 border ${t==="FIRE_ALARM"?"bg-gradient-to-r from-red-600 via-rose-500 to-red-700 text-white border-white animate-pulse shadow-[0_0_35px_rgba(225,29,72,0.8)] scale-105":t==="STANDBY"?"bg-[#181212]/90 hover:bg-red-950/80 text-red-300 border-red-500/40 shadow-lg":"bg-white/5 text-gray-500 border-white/5 cursor-not-allowed opacity-50"}`,children:[h.jsx(pv,{className:"w-4 h-4 text-red-400"}),h.jsx("span",{children:"🚨 Disparar Acionador Manual (Botoeira)"})]}),(t==="EXTINGUISHED"||t==="FIRE_ALARM"||t==="SUPPRESSION")&&h.jsxs("button",{onClick:B,className:"py-3 px-5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center gap-2 border border-white/15 transition-all duration-200 active:scale-95",children:[h.jsx(gv,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Restaurar Cozinha"})]})]}),h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsxs("div",{className:"hidden sm:flex items-center gap-1 bg-black/70 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 text-xs",children:[h.jsxs("span",{className:"text-[10px] text-gray-400 px-2 font-mono flex items-center gap-1",children:[h.jsx(nv,{className:"w-3 h-3 text-[#d4af37]"})," Câmera:"]}),h.jsx("button",{onClick:()=>le("geral"),className:`px-3 py-1 rounded-xl font-bold transition-all ${y==="geral"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-300 hover:text-white"}`,children:"Panorâmica"}),h.jsx("button",{onClick:()=>le("central"),className:`px-3 py-1 rounded-xl font-bold transition-all ${y==="central"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-300 hover:text-white"}`,children:"Central Outfire"}),h.jsx("button",{onClick:()=>le("fritadeira"),className:`px-3 py-1 rounded-xl font-bold transition-all ${y==="fritadeira"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-300 hover:text-white"}`,children:"Fritadeira & Bicos"}),h.jsx("button",{onClick:()=>le("botoeira"),className:`px-3 py-1 rounded-xl font-bold transition-all ${y==="botoeira"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-300 hover:text-white"}`,children:"Botoeira"})]}),h.jsx("div",{className:"hidden lg:flex items-center text-[11px] text-[#f3e5ab]/80 bg-black/60 backdrop-blur-md px-3 py-2 rounded-xl border border-[#d4af37]/20",children:h.jsx("span",{children:"🖱️ Arraste para orbitar 360° | Scroll para Zoom"})})]})]})]})},ow=()=>{const[s,e]=Qe.useState("ihm"),t=[{icon:lv,title:"Multicoifa Independente (Até 3 Coifas)",desc:"Capacidade de proteger e controlar até 3 coifas simultaneamente de maneira 100% autônoma. O disparo em uma coifa não interrompe a operação das demais."},{icon:pm,title:"IHM Touchscreen Inteligente",desc:"Interface gráfica colorida touch com diagnóstico contínuo de baterias, rede elétrica, pressão de cilindros e estado das válvulas de gás."},{icon:Mv,title:"Alertas Inteligentes por Voz Falada",desc:"Diferente de sistemas que apenas apitam gerando pânico, a Central VTS emite avisos sonoros falados em português, instruindo a brigada com clareza."},{icon:tv,title:"Agenda Semanal Automática de Gás",desc:"Programe os horários em que a válvula de gás deve abrir e fechar a cada dia da semana. Garante segurança total fora do horário de expediente e evita esquecimentos."},{icon:Sd,title:"Proteção Anti-Disparo com Botão Abortar",desc:"Em caso de alarme em falso, a tela exibe contagem regressiva configurável (ex: 60s) permitindo abortar com um toque antes de descarregar os cilindros."},{icon:w0,title:"Alarme Convencional Segregado",desc:"Integração perfeita com o sistema predial do shopping/edifício, mantendo a linha de supressão por saponificante imune a fumaças corriqueiras de grelhados."}];return h.jsxs("section",{id:"central-vts",className:"py-24 bg-[#08090c] relative overflow-hidden",children:[h.jsx("div",{className:"absolute top-1/4 -left-48 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[140px] pointer-events-none"}),h.jsx("div",{className:"absolute bottom-10 -right-48 w-96 h-96 bg-[#997b1a]/10 rounded-full blur-[140px] pointer-events-none"}),h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[h.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold tracking-wide uppercase mb-4",children:[h.jsx(pm,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Engenharia e Automação Nacional"]}),h.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Central de Comando Inteligente ",h.jsx("br",{}),h.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"Outfire VTS 32S3"})]}),h.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"O verdadeiro cérebro do sistema de supressão. Controle absoluto, monitoramento em tempo real, automação de gás e proteção anti-disparo acidental na ponta dos seus dedos."})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20",children:[h.jsxs("div",{className:"lg:col-span-7 flex flex-col items-center",children:[h.jsxs("div",{className:"relative w-full max-w-xl aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#14171e] to-[#0a0b0e] border border-[#d4af37]/30 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex items-center justify-center overflow-hidden group",children:[s==="ihm"&&h.jsx("img",{src:"/assets/central-outfire-fundo-removido.png",alt:"Central Outfire VTS 32S3",className:"max-h-full max-w-full object-contain filter drop-shadow-[0_20px_35px_rgba(212,175,55,0.25)] transition-all duration-500 group-hover:scale-105"}),s==="interno"&&h.jsx("img",{src:"/assets/central-outfire-interno.jpg",alt:"Placa e Relés Internos da Central Outfire",className:"w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:scale-105"}),s==="instalado"&&h.jsx("img",{src:"/assets/central-outfire-instalada.jpg",alt:"Central Outfire Instalada em Cozinha Real",className:"w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:scale-105"}),h.jsxs("div",{className:"absolute bottom-4 left-4 bg-[#08090b]/90 backdrop-blur-md border border-[#d4af37]/30 px-3 py-1.5 rounded-lg text-xs font-mono text-[#f3e5ab]",children:[s==="ihm"&&"Vista Frontal do Gabinete & IHM",s==="interno"&&"Eletrônica Robusta, Relés de Potência & Bornes",s==="instalado"&&"Instalação Real em Cozinha Profissional"]})]}),h.jsxs("div",{className:"flex items-center gap-2 mt-4 bg-[#12141a] p-1.5 rounded-2xl border border-[#d4af37]/25 shadow-md",children:[h.jsx("button",{onClick:()=>e("ihm"),className:`px-4 py-2 rounded-xl text-xs font-bold transition-all ${s==="ihm"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-400 hover:text-white"}`,children:"Gabinete & IHM Touch"}),h.jsx("button",{onClick:()=>e("interno"),className:`px-4 py-2 rounded-xl text-xs font-bold transition-all ${s==="interno"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-400 hover:text-white"}`,children:"Eletrônica Interna"}),h.jsx("button",{onClick:()=>e("instalado"),className:`px-4 py-2 rounded-xl text-xs font-bold transition-all ${s==="instalado"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-400 hover:text-white"}`,children:"Instalação Real"})]})]}),h.jsx("div",{className:"lg:col-span-5 space-y-4",children:h.jsxs("div",{className:"glass-panel-gold p-6 sm:p-8 rounded-3xl border border-[#d4af37]/30 relative",children:[h.jsxs("div",{className:"flex items-center justify-between mb-6",children:[h.jsxs("div",{children:[h.jsx("h3",{className:"text-2xl font-black text-white font-sans",children:"Painel Central VTS 32S3"}),h.jsx("span",{className:"text-xs text-[#e5c05d] font-mono font-bold",children:"AUTOMAÇÃO & SUPRESSÃO CONFORME NBR 14518"})]}),h.jsx("div",{className:"w-12 h-12 rounded-2xl bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]",children:h.jsx(Sv,{className:"w-6 h-6"})})]}),h.jsxs("div",{className:"space-y-3.5 text-sm",children:[h.jsxs("div",{className:"flex items-start gap-3",children:[h.jsx(Ss,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),h.jsxs("span",{className:"text-gray-300",children:[h.jsx("strong",{children:"Dupla Ação de Supressão:"})," Saponificante na cocção + CO2 e Dampers no duto."]})]}),h.jsxs("div",{className:"flex items-start gap-3",children:[h.jsx(Ss,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),h.jsxs("span",{className:"text-gray-300",children:[h.jsx("strong",{children:"Corte de Gás e Exaustor:"})," Intertravamento elétrico instantâneo ao sinal de disparo."]})]}),h.jsxs("div",{className:"flex items-start gap-3",children:[h.jsx(Ss,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),h.jsxs("span",{className:"text-gray-300",children:[h.jsx("strong",{children:"Detecção Térmica Regulável:"})," Calibração em 145°C na coifa e 300°C no duto."]})]}),h.jsxs("div",{className:"flex items-start gap-3",children:[h.jsx(Ss,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),h.jsxs("span",{className:"text-gray-300",children:[h.jsx("strong",{children:"Bateria de Backup Interna:"})," Funcionamento ininterrupto mesmo com queda de rede."]})]}),h.jsxs("div",{className:"flex items-start gap-3",children:[h.jsx(Ss,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),h.jsxs("span",{className:"text-gray-300",children:[h.jsx("strong",{children:"Menu protegido por senha:"})," Previne alterações indevidas por pessoas não autorizadas."]})]})]}),h.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3",children:[h.jsxs("a",{href:"#calculadora",className:"flex-1 py-3 px-4 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black text-center text-sm rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-2",children:[h.jsx("span",{children:"Dimensionar Cozinha"}),h.jsx(Gl,{className:"w-4 h-4 fill-black"})]}),h.jsx("a",{href:"/assets/manual-instalacao-central-outfire.pdf",target:"_blank",className:"py-3 px-4 bg-[#14171e] hover:bg-[#1f2430] text-[#f3e5ab] font-bold text-center text-sm rounded-xl border border-[#d4af37]/30 transition-all",children:"Baixar Manual Técnico"})]})]})})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:t.map((r,o)=>{const l=r.icon;return h.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-white/5 hover:border-[#d4af37]/40 transition-all duration-300 hover:-translate-y-1 group",children:[h.jsx("div",{className:"w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-300 shadow-sm",children:h.jsx(l,{className:"w-6 h-6"})}),h.jsx("h4",{className:"text-lg font-bold text-white mb-2 font-sans group-hover:text-[#f3e5ab] transition-colors",children:r.title}),h.jsx("p",{className:"text-sm text-gray-400 leading-relaxed",children:r.desc})]},o)})})]})]})},lw=()=>h.jsx("section",{id:"por-que-outfire",className:"py-24 bg-[#0a0c0e] relative border-t border-white/5",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wide mb-4",children:[h.jsx(Sd,{className:"w-3.5 h-3.5"}),"Entenda o Risco Real em Cozinhas Industriais"]}),h.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Por Que Extintores Comuns e Água ",h.jsx("br",{}),h.jsx("span",{className:"text-red-500",children:"São Fatais em Incêndio de Óleo?"})]}),h.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Mais de 65% dos incêndios que destroem restaurantes começam na linha de cocção. Conheça a diferença entre uma tragédia anunciada e a proteção autônoma Classe K."})]}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-16",children:[h.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-red-900/30 bg-gradient-to-b from-red-950/20 to-black/40 relative flex flex-col justify-between",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsx("span",{className:"text-xs font-mono font-bold bg-red-600/20 text-red-400 px-3 py-1 rounded-full border border-red-500/30",children:"PERIGO EXTREMO"}),h.jsx(hm,{className:"w-7 h-7 text-red-500"})]}),h.jsx("h3",{className:"text-xl font-bold text-white mb-2 font-sans",children:"Jogar Água em Óleo Fervente"}),h.jsxs("p",{className:"text-sm text-gray-400 leading-relaxed mb-6",children:["A água ferve a 100°C e o óleo em chamas está acima de 360°C. Ao atingir o fundo da cuba, a água vaporiza instantaneamente, expandindo seu volume em ",h.jsx("strong",{children:"1.700 vezes"}),"."]}),h.jsxs("div",{className:"p-4 rounded-xl bg-red-950/30 border border-red-900/40 text-xs text-red-300 space-y-2",children:[h.jsxs("div",{className:"flex items-center gap-2 font-bold",children:[h.jsx(po,{className:"w-4 h-4 text-red-400"}),"Efeito Bola de Fogo (BLEVE):"]}),h.jsx("p",{children:"O óleo ardente é arremessado no teto e contra os cozinheiros em uma fração de segundo, gerando queimaduras de 3° grau e destruição imediata da cozinha."})]})]}),h.jsx("div",{className:"mt-6 pt-4 border-t border-red-900/30 text-xs font-mono text-red-400 font-bold",children:"Resultado: Tragédia & Risco de Morte"})]}),h.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-amber-900/30 bg-gradient-to-b from-amber-950/10 to-black/40 relative flex flex-col justify-between",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsx("span",{className:"text-xs font-mono font-bold bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full border border-amber-500/30",children:"INEFICAZ NA PRÁTICA"}),h.jsx(hm,{className:"w-7 h-7 text-amber-500"})]}),h.jsx("h3",{className:"text-xl font-bold text-white mb-2 font-sans",children:"Extintor Manual de Pó (ABC)"}),h.jsxs("p",{className:"text-sm text-gray-400 leading-relaxed mb-6",children:["Extintores de pó químico comum sufocam a chama por poucos segundos, mas ",h.jsx("strong",{children:"não resfriam a massa de óleo"}),", que permanece acima do ponto de ignição."]}),h.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/20 border border-amber-900/30 text-xs text-amber-300 space-y-2",children:[h.jsxs("div",{className:"flex items-center gap-2 font-bold",children:[h.jsx(Sd,{className:"w-4 h-4 text-amber-400"}),"Reignição e Sujeira Tóxica:"]}),h.jsx("p",{children:"Assim que o pó se dissipa ou o ar circula, o óleo em chamas volta a pegar fogo com a mesma violência. Além disso, o pó contamina todos os alimentos e dutos."})]})]}),h.jsx("div",{className:"mt-6 pt-4 border-t border-amber-900/30 text-xs font-mono text-amber-400 font-bold",children:"Resultado: Reignição e Perda Total"})]}),h.jsxs("div",{className:"glass-panel-gold p-6 sm:p-8 rounded-3xl border border-[#d4af37]/60 bg-gradient-to-b from-[#1a170e]/80 via-[#0e1015] to-[#08090c] relative flex flex-col justify-between shadow-glow-gold",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsx("span",{className:"text-xs font-mono font-black bg-[#d4af37] text-black px-3 py-1 rounded-full shadow-glow-gold",children:"SOLUÇÃO DEFINITIVA OUTFIRE"}),h.jsx(ic,{className:"w-7 h-7 text-[#d4af37]"})]}),h.jsx("h3",{className:"text-xl font-black text-white mb-2 font-sans",children:"Sistema Automatizado Outfire"}),h.jsxs("p",{className:"text-sm text-gray-300 leading-relaxed mb-6",children:["Ao disparar, o agente saponificante reage quimicamente com os ácidos graxos do óleo quente em um processo chamado ",h.jsx("strong",{children:"saponificação"}),"."]}),h.jsxs("div",{className:"p-4 rounded-xl bg-[#14171e] border border-[#d4af37]/30 text-xs text-[#f3e5ab] space-y-2",children:[h.jsxs("div",{className:"flex items-center gap-2 font-bold text-[#e5c05d]",children:[h.jsx(rc,{className:"w-4 h-4 text-[#d4af37]"}),"Manta Espumosa e Resfriamento:"]}),h.jsx("p",{className:"text-gray-300",children:"Cria uma espessa manta de sabão alcalino que bloqueia o oxigênio, impede a liberação de vapores inflamáveis e resfria o óleo rapidamente. O CO2 protege o duto sem deixar resíduos."})]})]}),h.jsx("div",{className:"mt-6 pt-4 border-t border-[#d4af37]/30 text-xs font-mono text-[#e5c05d] font-bold",children:"Resultado: Fogo 100% Extinto & Cozinha Salva"})]})]}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 p-8 rounded-3xl bg-[#121418] border border-white/10 text-center",children:[h.jsxs("div",{className:"p-4",children:[h.jsx("div",{className:"text-3xl sm:text-4xl font-black text-red-500 font-mono",children:"65%"}),h.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"dos incêndios em restaurantes iniciam nos equipamentos de cocção e coifas."})]}),h.jsxs("div",{className:"p-4 border-t md:border-t-0 md:border-l border-white/10",children:[h.jsx("div",{className:"text-3xl sm:text-4xl font-black text-amber-400 font-mono",children:"360°C"}),h.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"temperatura crítica em que o óleo vegetal entra em autoignição espontânea."})]}),h.jsxs("div",{className:"p-4 border-t md:border-t-0 md:border-l border-white/10",children:[h.jsx("div",{className:"text-3xl sm:text-4xl font-black text-emerald-400 font-mono",children:"0 seg"}),h.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"tempo de hesitação humana: a Central Outfire atua 100% de forma autônoma."})]}),h.jsxs("div",{className:"p-4 border-t md:border-t-0 md:border-l border-white/10",children:[h.jsx("div",{className:"text-3xl sm:text-4xl font-black text-blue-400 font-mono",children:"100%"}),h.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"garantia de conformidade para aprovação em vistoria do Corpo de Bombeiros (AVCB)."})]})]})]})}),cw=()=>{const s=[{code:"ABNT NBR 14518",title:"Sistemas de Ventilação para Cozinhas Profissionais",authority:"Associação Brasileira de Normas Técnicas",details:"Estabelece a obrigatoriedade de sistema fixo automático de extinção de incêndio para coifas, dutos e equipamentos de cocção com óleo ou gordura.",highlights:["Intertravamento obrigatório de gás e energia elétrica","Desligamento automático do sistema de exaustão mecânica","Proteção específica por agente Classe K nos aparelhos de queima","Dampers corta-fogo para bloqueio de propagação em dutos"]},{code:"NFPA 96 & NFPA 17A",title:"Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations",authority:"National Fire Protection Association (USA)",details:"Padrão global mais respeitado do mundo para dimensionamento de agentes saponificantes líquidos e inundação por gás inerte em dutos de cocção comercial.",highlights:["Tempo máximo de resposta de detecção térmica","Cobertura milimétrica por bico aspersor calibrado","Mínimo de autonomia de agente extintor para resfriamento total","Acionador manual de emergência em rota de fuga"]},{code:"Instruções Técnicas do Corpo de Bombeiros",title:"Emissão e Renovação de AVCB / CLCB",authority:"Polícia Militar do Estado de São Paulo / Corpos de Bombeiros Estaduais",details:"Exigência legal indispensável para a liberação de alvarás de funcionamento de restaurantes, lanchonetes, padarias, hotéis e praças de alimentação de shoppings.",highlights:["Condição mandatória para aprovação em vistoria física","Evita multas pesadas e interdição cautelar imediata da cozinha","Garante laudo ART emitido por Engenheiro Mecânico credenciado","Laudo de comissionamento e teste hidrostático"]}];return h.jsx("section",{id:"normas",className:"py-24 bg-[#08090c] relative",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide mb-4",children:[h.jsx(xv,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Conformidade Regulatória Obrigatória"]}),h.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Normas Técnicas & Exigências ",h.jsx("br",{}),h.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"do Corpo de Bombeiros (AVCB)"})]}),h.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Instalar o sistema Outfire não é apenas segurança: é uma exigência legal para manter seu restaurante aberto, aprovado em vistorias e coberto pela apólice de seguro."})]}),h.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16",children:s.map((e,t)=>h.jsxs("div",{className:"glass-panel-gold p-6 sm:p-8 rounded-3xl border border-[#d4af37]/25 hover:border-[#d4af37]/60 transition-all flex flex-col justify-between shadow-lg",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsx("span",{className:"text-xs font-mono font-bold bg-[#d4af37]/15 text-[#e5c05d] px-3 py-1 rounded-full border border-[#d4af37]/30",children:e.code}),h.jsx(ov,{className:"w-6 h-6 text-[#d4af37]"})]}),h.jsx("h3",{className:"text-xl font-bold text-white mb-1 font-sans",children:e.title}),h.jsx("span",{className:"text-xs text-[#e5c05d] block mb-4 font-mono font-bold",children:e.authority}),h.jsx("p",{className:"text-sm text-gray-300 leading-relaxed mb-6",children:e.details}),h.jsx("div",{className:"space-y-2.5 pt-4 border-t border-white/10",children:e.highlights.map((r,o)=>h.jsxs("div",{className:"flex items-start gap-2.5 text-xs text-gray-300",children:[h.jsx(ic,{className:"w-4 h-4 text-[#d4af37] shrink-0 mt-0.5"}),h.jsx("span",{children:r})]},o))})]}),h.jsxs("div",{className:"mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-blue-400 font-semibold",children:[h.jsx("span",{children:"100% Atendido pelo Sistema Outfire"}),h.jsx(rv,{className:"w-4 h-4"})]})]},t))}),h.jsxs("div",{className:"p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-red-950/40 via-black/60 to-red-950/40 border border-red-500/30 flex flex-col md:flex-row items-center gap-6",children:[h.jsx("div",{className:"w-16 h-16 rounded-2xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500 shrink-0",children:h.jsx(ev,{className:"w-8 h-8"})}),h.jsxs("div",{className:"flex-1 text-center md:text-left",children:[h.jsx("h4",{className:"text-lg sm:text-xl font-bold text-white mb-1",children:"Atenção: Shoppings e Seguradoras não toleram improvisos!"}),h.jsxs("p",{className:"text-sm text-gray-300 leading-relaxed",children:["Em caso de princípio de incêndio em coifas sem sistema fixo automatizado conforme a ",h.jsx("strong",{children:"NBR 14518"}),", as companhias de seguro negam o pagamento da indenização por infração grave às normas. Grandes shoppings exigem laudo de comissionamento Outfire para liberar a operação da loja."]})]}),h.jsx("div",{className:"shrink-0",children:h.jsx("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20preciso%20de%20um%20laudo%20ou%20projeto%20Outfire%20para%20aprovar%20minha%20cozinha%20no%20Corpo%20de%20Bombeiros%2FShopping.",target:"_blank",rel:"noopener noreferrer",className:"py-3 px-6 bg-red-600 hover:bg-red-500 text-white font-bold text-sm rounded-xl shadow-glow-red transition-all block text-center",children:"Consultar Engenheiro Outfire"})})]})]})})},uw=({onAddToCart:s})=>{var M,v;const[e,t]=Qe.useState(1),[r,o]=Qe.useState(9),[l,u]=Qe.useState(!0),[d,p]=Qe.useState([{id:1,name:"Coifa Principal (Cocção Pesada)",lengthMeters:2.5,appliances:[{id:"1",name:"Fritadeira Industrial (2 cubas)",type:"fritadeira",icon:"🍟",widthMeters:.6},{id:"2",name:"Fogão Industrial 6 Bocas",type:"fogao",icon:"🍳",widthMeters:1.1},{id:"3",name:"Chapa de Lanche / Bifeira",type:"chapa",icon:"🥩",widthMeters:.8}]}]),g=T=>{if(t(T),T>d.length){const D=[...d];for(let C=d.length+1;C<=T;C++)D.push({id:C,name:`Coifa Setor ${C}`,lengthMeters:2,appliances:[{id:`${C}-1`,name:"Fogão 4 Bocas",type:"fogao",icon:"🍳",widthMeters:.9},{id:`${C}-2`,name:"Chapa Elétrica/Gás",type:"chapa",icon:"🥩",widthMeters:.8}]});p(D)}else T<d.length&&p(d.slice(0,T))},x=(T,D)=>{const C=[...d];C[T].lengthMeters=Math.max(1,Math.min(8,Number(D.toFixed(1)))),p(C)},_=(T,D)=>{const C={fritadeira:"Fritadeira Industrial",fogao:"Fogão Industrial",chapa:"Chapa Profissional",charbroiler:"Charbroiler / Grelha"},I={fritadeira:"🍟",fogao:"🍳",chapa:"🥩",charbroiler:"🔥"},L={fritadeira:.5,fogao:.9,chapa:.8,charbroiler:.7},F=[...d];F[T].appliances.push({id:Math.random().toString(36).substring(7),name:C[D],type:D,icon:I[D],widthMeters:L[D]}),p(F)},y=(T,D)=>{const C=[...d];C[T].appliances.splice(D,1),p(C)},S=Qe.useMemo(()=>{let T=0,D=0,C=0,I=0;d.forEach(pe=>{T+=pe.appliances.length,D+=2,l&&(C+=1);const se=Math.max(1,Math.round(pe.lengthMeters/.9));I+=se});const L=T+D+C,F=L*2,G=Math.max(9,F);let b=9;G>9&&G<=16?b=16:G>16&&G<=25?b=25:G>25&&(b=Math.ceil(G/9)*9);const P=Math.max(1,Math.ceil(r/3)),j=P,K=Math.max(10,Math.ceil(r/3*5)),Q=K<=10?10:K<=25?25:45,de=`Central Outfire VTS 32S3 (${e} Coifa${e>1?"s":""} Independentes)`,ue=e===1?8900:e===2?14500:19800,re=L*185+P*210,Z=I*295+j*320,Y=ue+re+Z+1200;return{applianceNozzlesCount:T,plenumNozzlesCount:D,damperNozzlesCount:C,totalSaponificanteNozzles:L,saponificanteLiters:G,recommendedSaponificanteCylinderLiters:b,hoodSensorsCount:I,co2NozzlesCount:P,ductSensorsCount:j,co2Kg:K,recommendedCo2CylinderKg:Q,centralModel:de,hoodsCount:e,dampersCount:e,gasValvesCount:1,estimatedPriceBRL:Y}},[d,r,l,e]),A=()=>{let T=`🔥 *ORÇAMENTO TÉCNICO - SISTEMA OUTFIRE VTS 32S3*

`;T+=`Olá, equipe de Engenharia da Outfire! Realizei o dimensionamento da minha cozinha no site outfire.com.br e gostaria de uma proposta formal:

`,T+=`🏢 *Configuração da Cozinha:*
`,T+=`• Quantidade de Coifas: ${e} independente(s)
`,T+=`• Comprimento do Duto de Exaustão: ${r} metros

`,d.forEach((C,I)=>{T+=`📍 *Coifa ${I+1} (${C.lengthMeters}m):*
`,T+=`  Equipamentos sob a coifa: ${C.appliances.map(L=>L.name).join(", ")||"Nenhum"}
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

`,T+="Gostaria de agendar uma consulta técnica ou receber a proposta com laudo ART para AVCB. Aguardo retorno!";const D=encodeURIComponent(T);window.open(`https://wa.me/5515996576807?text=${D}`,"_blank")},N=()=>{const T={id:`custom-kit-${Date.now()}`,sku:`OUT-CUSTOM-${e}C`,name:`Kit Personalizado Outfire VTS (${e} Coifa${e>1?"s":""} + Duto ${r}m)`,category:"kit",priceBRL:S.estimatedPriceBRL,description:`Sistema customizado: ${S.totalSaponificanteNozzles} bicos saponificante (${S.recommendedSaponificanteCylinderLiters}L), ${S.co2NozzlesCount} bicos CO2 (${S.recommendedCo2CylinderKg}kg), ${S.hoodSensorsCount} sensores 145°C e ${S.ductSensorsCount} sensores 300°C.`,image:"/assets/central-outfire-fundo-removido.png",specs:[`${S.centralModel}`,`Cilindro Saponificante Classe K: ${S.recommendedSaponificanteCylinderLiters} Litros`,`Cilindro CO2 pressurizado: ${S.recommendedCo2CylinderKg} Kg`,`Bicos Saponificante em Inox: ${S.totalSaponificanteNozzles} unidades`,`Bicos CO2 em Duto: ${S.co2NozzlesCount} unidades`,`Sensores Reguláveis: ${S.hoodSensorsCount} (145°C) + ${S.ductSensorsCount} (300°C)`,"Válvula de corte rápido de gás com rearme manual","Dampers corta-fogo com atuador elétrico"],inStock:!0};s(T)};return h.jsx("section",{id:"calculadora",className:"py-24 bg-[#0a0b0e] relative border-t border-white/5",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide mb-4",children:[h.jsx(M0,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Engenharia sob Medida"]}),h.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Calculadora de Supressão & ",h.jsx("br",{}),h.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"Diagrama Automatizado da sua Cozinha"})]}),h.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Informe as medidas da sua coifa, duto e equipamentos. O sistema calcula a quantidade exata de bicos de saponificante, CO2, sensores e gera o diagrama técnico em tempo real."})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16",children:[h.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[h.jsxs("div",{className:"glass-panel-gold p-6 rounded-2xl border border-[#d4af37]/30",children:[h.jsxs("label",{className:"text-sm font-bold text-white block mb-3 flex items-center justify-between",children:[h.jsx("span",{children:"1. Quantidade de Coifas Independentes:"}),h.jsx("span",{className:"text-xs font-mono text-[#e5c05d]",children:"Até 3 simultâneas"})]}),h.jsx("div",{className:"grid grid-cols-3 gap-2",children:[1,2,3].map(T=>h.jsxs("button",{onClick:()=>g(T),className:`py-3 px-4 rounded-xl text-sm font-bold flex flex-col items-center gap-1 transition-all ${e===T?"bg-[#d4af37] text-black shadow-glow-gold border border-[#e5c05d]":"bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"}`,children:[h.jsxs("span",{children:[T," ",T===1?"Coifa":"Coifas"]}),h.jsx("span",{className:"text-[10px] opacity-75 font-normal",children:T===1?"Individual":"Setorizada"})]},T))})]}),h.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-white/10",children:[h.jsxs("div",{className:"flex items-center justify-between mb-2",children:[h.jsxs("label",{className:"text-sm font-bold text-white flex items-center gap-2",children:[h.jsx(T0,{className:"w-4 h-4 text-cyan-400"}),h.jsx("span",{children:"2. Comprimento do Duto de Exaustão:"})]}),h.jsxs("span",{className:"font-mono text-base font-black text-cyan-400",children:[r," metros"]})]}),h.jsx("input",{type:"range",min:"3",max:"30",step:"1",value:r,onChange:T=>o(Number(T.target.value)),className:"w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"}),h.jsxs("div",{className:"flex justify-between text-[11px] text-gray-400 mt-2 font-mono",children:[h.jsx("span",{children:"3 m (Curto)"}),h.jsx("span",{children:"15 m (Médio)"}),h.jsx("span",{children:"30 m (Longo)"})]}),h.jsxs("div",{className:"mt-4 p-3 bg-cyan-950/20 border border-cyan-800/30 rounded-xl text-xs text-cyan-200 flex items-center justify-between",children:[h.jsx("span",{children:"Regra técnica: 1 bico de CO2 + 1 sensor (300°C) a cada 3m"}),h.jsxs("span",{className:"font-mono font-bold text-cyan-400",children:[S.co2NozzlesCount," bicos CO2"]})]})]}),d.map((T,D)=>h.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-white/10 space-y-4",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-3",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"w-6 h-6 rounded-full bg-red-600/30 border border-red-500/40 text-red-400 text-xs font-bold flex items-center justify-center",children:D+1}),h.jsx("h4",{className:"font-bold text-white text-sm",children:T.name})]}),h.jsxs("span",{className:"text-xs font-mono font-bold text-amber-400",children:[T.lengthMeters," m"]})]}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex justify-between text-xs text-gray-400 mb-1.5",children:[h.jsx("span",{children:"Comprimento da Coifa:"}),h.jsxs("span",{children:[T.lengthMeters," metros lineares"]})]}),h.jsx("input",{type:"range",min:"1.0",max:"6.0",step:"0.5",value:T.lengthMeters,onChange:C=>x(D,Number(C.target.value)),className:"w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-500"})]}),h.jsxs("div",{children:[h.jsxs("label",{className:"text-xs font-bold text-gray-300 block mb-2",children:["Equipamentos sob a Coifa (",T.appliances.length," protegidos):"]}),h.jsx("div",{className:"space-y-2 mb-3",children:T.appliances.map((C,I)=>h.jsxs("div",{className:"flex items-center justify-between p-2.5 bg-white/5 rounded-xl border border-white/5 text-xs",children:[h.jsxs("div",{className:"flex items-center gap-2 text-gray-200",children:[h.jsx("span",{className:"text-base",children:C.icon}),h.jsx("span",{className:"font-medium",children:C.name}),h.jsx("span",{className:"text-[10px] bg-[#1a170e] text-[#e5c05d] px-2 py-0.5 rounded border border-[#d4af37]/40 font-mono font-bold",children:"1 bico Saponificante"})]}),h.jsx("button",{onClick:()=>y(D,I),className:"p-1 text-gray-400 hover:text-red-400 transition-colors",title:"Remover equipamento",children:h.jsx(b0,{className:"w-3.5 h-3.5"})})]},C.id))}),h.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-1.5",children:[h.jsxs("button",{onClick:()=>_(D,"fritadeira"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[h.jsx(uo,{className:"w-3 h-3 text-[#d4af37]"}),h.jsx("span",{children:"+ Fritadeira"})]}),h.jsxs("button",{onClick:()=>_(D,"fogao"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[h.jsx(uo,{className:"w-3 h-3 text-[#d4af37]"}),h.jsx("span",{children:"+ Fogão"})]}),h.jsxs("button",{onClick:()=>_(D,"chapa"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[h.jsx(uo,{className:"w-3 h-3 text-[#d4af37]"}),h.jsx("span",{children:"+ Chapa"})]}),h.jsxs("button",{onClick:()=>_(D,"charbroiler"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[h.jsx(uo,{className:"w-3 h-3 text-[#d4af37]"}),h.jsx("span",{children:"+ Grelha"})]})]})]})]},T.id))]}),h.jsx("div",{className:"lg:col-span-7 space-y-6",children:h.jsxs("div",{className:"glass-panel p-6 rounded-3xl border border-white/10 overflow-hidden shadow-2xl relative",children:[h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"}),h.jsx("h3",{className:"font-bold text-white text-base font-sans",children:"Diagrama Esquemático da sua Cozinha"})]}),h.jsx("span",{className:"text-[11px] font-mono text-gray-400 bg-black/40 px-2 py-1 rounded-lg border border-white/5",children:"RENDERIZADO EM TEMPO REAL"})]}),h.jsxs("div",{className:"relative w-full aspect-[16/9] bg-[#0d0f14] rounded-2xl border border-white/10 p-4 flex flex-col justify-between overflow-hidden",children:[h.jsx("div",{className:"absolute inset-0 opacity-15 pointer-events-none",style:{backgroundImage:"radial-gradient(circle, #4a5568 1px, transparent 1px)",backgroundSize:"20px 20px"}}),h.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 600 340",children:[h.jsxs("defs",{children:[h.jsxs("linearGradient",{id:"ductGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[h.jsx("stop",{offset:"0%",stopColor:"#4a5568"}),h.jsx("stop",{offset:"50%",stopColor:"#718096"}),h.jsx("stop",{offset:"100%",stopColor:"#4a5568"})]}),h.jsxs("linearGradient",{id:"hoodGrad",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[h.jsx("stop",{offset:"0%",stopColor:"#2d3748"}),h.jsx("stop",{offset:"100%",stopColor:"#1a202c"})]})]}),h.jsx("rect",{x:"250",y:"40",width:"100",height:"70",fill:"url(#ductGrad)",stroke:"#a0aec0",strokeWidth:"1.5"}),h.jsx("rect",{x:"250",y:"30",width:"300",height:"40",fill:"url(#ductGrad)",stroke:"#a0aec0",strokeWidth:"1.5"}),h.jsx("rect",{x:"360",y:"24",width:"45",height:"52",fill:"#9b2c2c",stroke:"#feb2b2",strokeWidth:"1.5",rx:"3"}),h.jsx("text",{x:"382",y:"54",fill:"#ffffff",fontSize:"9",fontWeight:"bold",textAnchor:"middle",children:"DAMPER"}),Array.from({length:S.co2NozzlesCount}).map((T,D)=>{const C=270+D*(250/Math.max(1,S.co2NozzlesCount));return h.jsxs("g",{children:[h.jsx("circle",{cx:C,cy:"50",r:"6",fill:"#e53e3e",stroke:"#ffffff",strokeWidth:"1.5"}),h.jsx("text",{x:C,y:"68",fill:"#fc8181",fontSize:"8",fontWeight:"bold",textAnchor:"middle",children:"CO2"}),h.jsx("rect",{x:C+12,y:"44",width:"10",height:"10",fill:"#805ad5",stroke:"#ffffff",strokeWidth:"1",transform:`rotate(45, ${C+17}, 49)`})]},`co2-${D}`)}),h.jsx("polygon",{points:"60,150 120,110 480,110 540,150",fill:"url(#hoodGrad)",stroke:"#cbd5e0",strokeWidth:"2"}),h.jsx("rect",{x:"60",y:"150",width:"480",height:"25",fill:"#2d3748",stroke:"#cbd5e0",strokeWidth:"1.5"}),h.jsxs("text",{x:"300",y:"167",fill:"#cbd5e0",fontSize:"11",fontWeight:"bold",textAnchor:"middle",letterSpacing:"2",children:["COIFA INOX ",(M=d[0])==null?void 0:M.lengthMeters,"m (",e," ZONA",e>1?"S":"",")"]}),h.jsx("circle",{cx:"180",cy:"130",r:"6",fill:"#d4af37",stroke:"#ffffff",strokeWidth:"1.5"}),h.jsx("text",{x:"180",y:"120",fill:"#f6e05e",fontSize:"8",fontWeight:"bold",textAnchor:"middle",children:"PLENO 1"}),h.jsx("circle",{cx:"420",cy:"130",r:"6",fill:"#d4af37",stroke:"#ffffff",strokeWidth:"1.5"}),h.jsx("text",{x:"420",y:"120",fill:"#f6e05e",fontSize:"8",fontWeight:"bold",textAnchor:"middle",children:"PLENO 2"}),Array.from({length:S.hoodSensorsCount}).map((T,D)=>{const C=100+(D+1)*(400/(S.hoodSensorsCount+1));return h.jsxs("g",{children:[h.jsx("circle",{cx:C,cy:"142",r:"5",fill:"#dd6b20",stroke:"#ffffff",strokeWidth:"1.2"}),h.jsx("text",{x:C,y:"158",fill:"#fbd38d",fontSize:"7",fontWeight:"bold",textAnchor:"middle",children:"145°C"})]},`sensor-${D}`)}),h.jsx("rect",{x:"60",y:"240",width:"480",height:"70",fill:"#1a202c",stroke:"#4a5568",strokeWidth:"1.5"}),(v=d[0])==null?void 0:v.appliances.map((T,D)=>{const C=d[0].appliances.length,I=440/Math.max(1,C),L=80+D*I,F=I-10;return h.jsxs("g",{children:[h.jsx("rect",{x:L,y:"220",width:F,height:"80",fill:"#2d3748",stroke:"#718096",strokeWidth:"1.2",rx:"4"}),h.jsx("text",{x:L+F/2,y:"255",fill:"#ffffff",fontSize:"10",fontWeight:"bold",textAnchor:"middle",children:T.name.split(" ")[0]}),h.jsx("text",{x:L+F/2,y:"275",fill:"#a0aec0",fontSize:"8",textAnchor:"middle",children:T.type.toUpperCase()}),h.jsx("line",{x1:L+F/2,y1:"175",x2:L+F/2,y2:"200",stroke:"#d4af37",strokeWidth:"2"}),h.jsx("polygon",{points:`${L+F/2-5},200 ${L+F/2+5},200 ${L+F/2},210`,fill:"#d4af37"}),h.jsx("text",{x:L+F/2,y:"195",fill:"#ecc94b",fontSize:"7",fontWeight:"bold",textAnchor:"end",children:"BICOK"})]},T.id)}),h.jsx("rect",{x:"535",y:"160",width:"55",height:"85",fill:"#171923",stroke:"#e53e3e",strokeWidth:"2",rx:"5"}),h.jsx("rect",{x:"542",y:"170",width:"40",height:"30",fill:"#3182ce",rx:"2"}),h.jsx("text",{x:"562",y:"188",fill:"#ffffff",fontSize:"8",fontWeight:"bold",textAnchor:"middle",children:"VTS 32S3"}),h.jsx("circle",{cx:"562",cy:"225",r:"7",fill:"#e53e3e"}),h.jsx("text",{x:"562",y:"240",fill:"#e2e8f0",fontSize:"6",fontWeight:"bold",textAnchor:"middle",children:"OUTFIRE"}),h.jsx("line",{x1:"60",y1:"310",x2:"540",y2:"310",stroke:"#ecc94b",strokeWidth:"3"}),h.jsx("rect",{x:"180",y:"303",width:"20",height:"14",fill:"#e53e3e",stroke:"#ffffff",strokeWidth:"1"}),h.jsx("text",{x:"190",y:"328",fill:"#feb2b2",fontSize:"7",fontWeight:"bold",textAnchor:"middle",children:"VÁLVULA GÁS"})]}),h.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3 pt-2 border-t border-white/10 text-[10px] text-gray-300",children:[h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-[#d4af37]"}),h.jsx("span",{children:"Bico Saponificante Classe K"})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-red-500"}),h.jsx("span",{children:"Bico CO2 Duto"})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-amber-500"}),h.jsx("span",{children:"Sensor 145°C Coifa"})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-purple-500"}),h.jsx("span",{children:"Sensor 300°C Duto"})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("span",{className:"w-2.5 h-2.5 rounded-sm bg-red-700"}),h.jsx("span",{children:"Damper Corta-Fogo"})]})]})]}),h.jsxs("div",{className:"mt-6 space-y-3",children:[h.jsxs("h4",{className:"text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2",children:[h.jsx(Ss,{className:"w-4 h-4 text-emerald-400"}),h.jsx("span",{children:"Resumo do Dimensionamento Técnico (BOM)"})]}),h.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[h.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[h.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Bicos Saponificante"}),h.jsxs("span",{className:"text-lg font-black text-amber-400 font-mono",children:[S.totalSaponificanteNozzles," un"]}),h.jsxs("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:["(",S.saponificanteLiters,"L calculados)"]})]}),h.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[h.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Cilindro Saponificante"}),h.jsxs("span",{className:"text-lg font-black text-amber-400 font-mono",children:[S.recommendedSaponificanteCylinderLiters," L"]}),h.jsx("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:"Mínimo de 9L"})]}),h.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[h.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Bicos de CO2 (Duto)"}),h.jsxs("span",{className:"text-lg font-black text-cyan-400 font-mono",children:[S.co2NozzlesCount," un"]}),h.jsx("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:"(1 a cada 3m de duto)"})]}),h.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[h.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Cilindro de CO2"}),h.jsxs("span",{className:"text-lg font-black text-cyan-400 font-mono",children:[S.recommendedCo2CylinderKg," Kg"]}),h.jsx("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:"Mínimo de 10kg"})]})]}),h.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3",children:[h.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[h.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Sensores Coifa (145°C)"}),h.jsxs("span",{className:"text-base font-bold text-white font-mono",children:[S.hoodSensorsCount," un (1/metro)"]})]}),h.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[h.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Sensores Duto (300°C)"}),h.jsxs("span",{className:"text-base font-bold text-white font-mono",children:[S.ductSensorsCount," un (1 a cada 3m)"]})]}),h.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5 col-span-2 sm:col-span-1",children:[h.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Intertravamento Total"}),h.jsx("span",{className:"text-xs font-bold text-emerald-400 block",children:"Gás + Exaustão + Damper"})]})]})]}),h.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4",children:[h.jsxs("button",{onClick:A,className:"flex-1 py-4 px-6 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-bold rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 group",children:[h.jsx(gr,{className:"w-5 h-5 group-hover:scale-110 transition-transform"}),h.jsx("span",{children:"Enviar Orçamento para WhatsApp"})]}),h.jsxs("button",{onClick:N,className:"py-4 px-6 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black rounded-2xl shadow-glow-gold transition-all flex items-center justify-center gap-2",children:[h.jsx(Jx,{className:"w-5 h-5 fill-black"}),h.jsx("span",{children:"Comprar Kit na Loja"})]})]}),h.jsx("p",{className:"text-center text-xs text-gray-400 mt-3",children:"*O projeto inclui memória de cálculo e documentação pronta para laudo ART e vistoria do Corpo de Bombeiros."})]})})]})]})})},dw=[{id:"central-outfire-vts-1",sku:"OUT-VTS-1C",name:"Central Outfire VTS 32S3 - 1 Coifa (Kit Completo)",category:"kit",priceBRL:8900,description:"Sistema completo integrado de CO2 e Saponificante Classe K para 1 coifa industrial. Acompanha IHM touchscreen colorida, cilindro saponificante 9L, cilindro CO2 10kg, bicos de inox, sensores térmicos reguláveis e intertravamento de gás.",image:"/assets/central-outfire-fundo-removido.png",specs:["Controle autônomo para 1 coifa","IHM Touchscreen colorida com avisos de voz","1x Cilindro Saponificante 9 Litros Classe K","1x Cilindro CO2 10 Kg com cabeçote solenoide","Intertravamento de Gás e Exaustor","Certificação em conformidade com NBR 14518"],featured:!0,inStock:!0},{id:"central-outfire-vts-2",sku:"OUT-VTS-2C",name:"Central Outfire VTS 32S3 - 2 Coifas (Atuação Independente)",category:"kit",priceBRL:14500,description:"Sistema de supressão inteligente para cozinhas de médio/grande porte com 2 coifas independentes. Se disparar a Coifa 1, a Coifa 2 continua operando com segurança.",image:"/assets/central-outfire-instalada.jpg",specs:["Controle independente para até 2 coifas","IHM Touchscreen com monitoramento individual por setor","2x Cilindros Saponificante (dimensionados sob medida)","Cilindros de CO2 dedicados para cada duto","Contagem regressiva de segurança anti-disparo acidental","Agenda semanal para abertura e corte automático de gás"],featured:!0,inStock:!0},{id:"central-outfire-vts-3",sku:"OUT-VTS-3C",name:"Central Outfire VTS 32S3 - 3 Coifas (Linha Master Industrial)",category:"kit",priceBRL:19800,description:"A mais avançada central de combate a incêndio em cozinhas profissionais do Brasil. Monitora e protege até 3 coifas simultâneas de forma 100% autônoma e setorizada.",image:"/assets/central-outfire-ihm.jpg",specs:["Controle simultâneo e independente de 3 coifas","Acionamento individual de dampers e CO2 por duto","Alertas de voz falada de alta potência","Histórico completo de eventos e diagnósticos de vazamento","Interface para integração com Alarme Predial de Shoppings","Atende plenamente ABNT NBR 14518, NFPA 96 e NFPA 17A"],featured:!0,inStock:!0},{id:"bico-saponificante-inox",sku:"OUT-BIC-SAP",name:"Bico Aspersor de Inox para Saponificante (Classe K)",category:"bicos",priceBRL:185,description:"Bico difusor de alta vazão em aço inoxidável 304 com rosca NPT. Acompanha capa protetora de borracha/silicone de alta temperatura contra acúmulo de gordura.",image:"/assets/central-outfire-interno.jpg",specs:["Material: Aço Inoxidável 304 polido",'Rosca: 3/8" ou 1/2" NPT',"Ângulo de abertura especial para cubas e filtros","Capa protetora com cordão de retenção inclusa"],featured:!1,inStock:!0},{id:"bico-co2-duto",sku:"OUT-BIC-CO2",name:"Bico Difusor de CO2 para Dutos de Exaustão",category:"bicos",priceBRL:210,description:"Bico de alta pressão calibrado para inundação total de CO2 dentro da linha de dutos, eliminando o oxigênio rapidamente.",image:"/assets/central-outfire-interno.jpg",specs:["Inundação rápida em alta pressão","Rosca NPT padronizada","Resistente a calor contínuo de até 400°C"],featured:!1,inStock:!0},{id:"sensor-coifa-145c",sku:"OUT-SNS-145",name:"Sensor Térmico Regulável para Coifa (Calibrado 145°C)",category:"sensores",priceBRL:295,description:"Sensor eletromecânico e termostático de precisão em aço inox para monitoramento de temperatura na zona de cocção.",image:"/assets/central-outfire-interno.jpg",specs:["Faixa de regulagem: 50°C a 200°C (ajustado em 145°C)","Haste blindada em inox resistente a vapores e gordura","Contato seco normalmente aberto/fechado","Cabo de alta temperatura blindado em malha metálica"],featured:!1,inStock:!0},{id:"sensor-duto-300c",sku:"OUT-SNS-300",name:"Sensor Térmico Regulável para Duto (Calibrado 300°C)",category:"sensores",priceBRL:320,description:"Sensor de alta temperatura para detecção de fogo na linha de duto de exaustão e acionamento instantâneo de CO2 e dampers.",image:"/assets/central-outfire-interno.jpg",specs:["Faixa de operação: até 350°C (ajustado em 300°C)","Instalação externa com sonda inserida no duto","Conexão estanque anti-vazamento de óleo"],featured:!1,inStock:!0},{id:"recarga-saponificante-9l",sku:"OUT-AG-SAP9",name:"Galão Agente Saponificante Classe K Outfire (9 Litros)",category:"cilindro",priceBRL:680,description:"Composto líquido à base de sais orgânicos e acetato de potássio formulado especificamente para saponificação imediata de óleos vegetais e gorduras animais.",image:"/assets/central-outfire-fundo-removido.png",specs:["Volume: 9 Litros líquidos","Ação de saponificação com espuma refrigerante espessa","Não tóxico e biodegradável","Laudo técnico de conformidade para bombeiros"],featured:!1,inStock:!0},{id:"valvula-gas-solenoide-1pol",sku:"OUT-VLV-GAS1",name:'Válvula Solenoide de Corte Rápido de Gás 1" (Bivolt)',category:"valvulas",priceBRL:840,description:"Válvula de corte de segurança para linha de GLP / Gás Natural. Fecha instantaneamente ao menor sinal de disparo ou vazamento de gás.",image:"/assets/central-outfire-interno.jpg",specs:["Diâmetro: 1 polegada BSP/NPT","Rearme manual para segurança obrigatória","Corpo em latão forjado de alta resistência","Compatível com GLP e Gás Natural encanado"],featured:!1,inStock:!0},{id:"damper-corta-fogo-motorizado",sku:"OUT-DMP-CF",name:"Damper Corta-Fogo Motorizado com Mola de Retorno",category:"acessorios",priceBRL:1250,description:"Damper para isolamento mecânico de dutos de coifa. Fecha automaticamente no disparo de CO2 para aprisionar o gás e sufocar o incêndio.",image:"/assets/central-outfire-interno.jpg",specs:["Lâminas corta-fogo com vedação hermética","Atuador 24V com retorno por mola mecânica","Resistência ao fogo: 120 minutos (TRRF 120)","Microswitch de confirmação de fechamento"],featured:!1,inStock:!0},{id:"acionador-manual-pull",sku:"OUT-ACT-MAN",name:"Estação de Disparo Manual de Emergência (Tipo Puxador)",category:"acessorios",priceBRL:310,description:"Acionador de emergência de dupla ação em caixa metálica amarela/vermelha com lacre e trava de segurança.",image:"/assets/central-outfire-fundo-removido.png",specs:["Acionamento mecânico e elétrico simultâneo","Pintura eletrostática de alta visibilidade","Trava de segurança para impedir toque acidental"],featured:!1,inStock:!0}],fw=({onAddToCart:s})=>{const[e,t]=Qe.useState("all"),[r,o]=Qe.useState(""),l=[{id:"all",name:"Todos os Produtos"},{id:"kit",name:"Sistemas Completos"},{id:"bicos",name:"Bicos de Aspersão"},{id:"sensores",name:"Sensores Reguláveis"},{id:"cilindro",name:"Cilindros & Recargas"},{id:"valvulas",name:"Válvulas de Gás"},{id:"acessorios",name:"Acessórios & Acionadores"}],u=dw.filter(p=>{const g=e==="all"||p.category===e,x=p.name.toLowerCase().includes(r.toLowerCase())||p.description.toLowerCase().includes(r.toLowerCase())||p.sku.toLowerCase().includes(r.toLowerCase());return g&&x}),d=p=>{const g=`Olá! Gostaria de comprar ou solicitar proposta para o produto:
*${p.name}* (SKU: ${p.sku})
Valor: R$ ${p.priceBRL.toLocaleString("pt-BR")},00.
Poderia me passar os prazos de entrega e condições de faturamento?`;window.open(`https://wa.me/5515996576807?text=${encodeURIComponent(g)}`,"_blank")};return h.jsx("section",{id:"loja",className:"py-24 bg-[#08090c] relative",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide mb-4",children:[h.jsx(Ql,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Loja Oficial Outfire"]}),h.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Sistemas Completos & ",h.jsx("br",{}),h.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"Peças de Reposição Certificadas"})]}),h.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Adquira o sistema completo para sua cozinha ou componentes avulsos para manutenção preventiva. Entrega expressa para todo o Brasil com nota fiscal e laudos de conformidade técnica."})]}),h.jsxs("div",{className:"flex flex-col lg:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10",children:[h.jsx("div",{className:"flex flex-wrap items-center gap-2 w-full lg:w-auto",children:l.map(p=>h.jsx("button",{onClick:()=>t(p.id),className:`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${e===p.id?"bg-[#d4af37] text-black shadow-glow-gold":"bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5"}`,children:p.name},p.id))}),h.jsxs("div",{className:"relative w-full lg:w-72",children:[h.jsx(vv,{className:"w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2"}),h.jsx("input",{type:"text",placeholder:"Buscar bicos, sensores, cilindros...",value:r,onChange:p=>o(p.target.value),className:"w-full bg-[#12141a] border border-[#d4af37]/20 text-white text-xs rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-[#d4af37] transition-colors"})]})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:u.map(p=>h.jsxs("div",{className:"glass-panel-gold rounded-3xl border border-[#d4af37]/25 hover:border-[#d4af37]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 shadow-lg",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"relative w-full h-56 bg-gradient-to-br from-[#171a22] to-[#0a0c10] p-6 flex items-center justify-center overflow-hidden border-b border-white/5",children:[h.jsx("img",{src:p.image,alt:p.name,className:"max-h-full max-w-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-500"}),h.jsxs("div",{className:"absolute top-3 left-3 flex flex-col gap-1.5",children:[p.featured&&h.jsxs("span",{className:"bg-gradient-to-r from-[#d4af37] to-[#e5c05d] text-black text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-glow-gold flex items-center gap-1",children:[h.jsx(rc,{className:"w-3 h-3 fill-black"}),"Mais Vendido"]}),h.jsxs("span",{className:"bg-black/80 backdrop-blur-md text-[#f3e5ab] text-[10px] font-mono px-2 py-0.5 rounded border border-[#d4af37]/30",children:["SKU: ",p.sku]})]}),h.jsx("span",{className:"absolute bottom-3 right-3 text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800",children:"Pronta Entrega"})]}),h.jsxs("div",{className:"p-6",children:[h.jsx("h3",{className:"text-lg font-bold text-white mb-2 font-sans line-clamp-1",children:p.name}),h.jsx("p",{className:"text-xs text-gray-400 leading-relaxed mb-4 line-clamp-2",children:p.description}),h.jsx("div",{className:"space-y-1.5 mb-6",children:p.specs.slice(0,3).map((g,x)=>h.jsxs("div",{className:"flex items-start gap-2 text-[11px] text-gray-300",children:[h.jsx(iv,{className:"w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5"}),h.jsx("span",{className:"line-clamp-1",children:g})]},x))})]})]}),h.jsxs("div",{className:"p-6 pt-0",children:[h.jsxs("div",{className:"flex items-baseline justify-between mb-4 pt-4 border-t border-white/10",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Preço à vista ou faturado"}),h.jsxs("span",{className:"text-2xl font-black text-[#f3e5ab] font-mono",children:["R$ ",p.priceBRL.toLocaleString("pt-BR"),",00"]})]}),h.jsx("span",{className:"text-xs text-[#e5c05d] font-bold",children:"Em até 12x"})]}),h.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[h.jsxs("button",{onClick:()=>s(p),className:"py-2.5 px-3 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black text-xs font-black rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-1.5",children:[h.jsx(Ql,{className:"w-3.5 h-3.5 fill-black"}),h.jsx("span",{children:"Adicionar"})]}),h.jsxs("button",{onClick:()=>d(p),className:"py-2.5 px-3 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5",title:"Negociar faturamento via WhatsApp",children:[h.jsx(gr,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"WhatsApp"})]})]})]})]},p.id))})]})})},hw=()=>{const s=[{title:"Manual de Instalação e Esquema Elétrico Central Outfire VTS 32S3",type:"PDF Oficial de Fábrica",size:"939 KB",description:"Diagrama completo de ligação dos bornes, ligação dos relés de gás e exaustão, sensores reguláveis, dampers e alimentação 12V/Bateria.",link:"/assets/manual-instalacao-central-outfire.pdf",featured:!0},{title:"Procedimento Operacional Padrão (POP) Pós-Disparo",type:"Guia Técnico",size:"280 KB",description:"Instruções passo a passo para a equipe do restaurante após o combate a incêndio: limpeza do agente saponificante, rearme da válvula e recarga.",link:"#contato"},{title:"Certificado de Conformidade Técnica & Memorial Descritivo (NBR 14518)",type:"Documento para Bombeiros / AVCB",size:"420 KB",description:"Documentação comprobatória das características técnicas e ensaios de conformidade para instrução de processos no Corpo de Bombeiros.",link:"#contato"}],e=[{step:"01",title:"Posicionamento da Central VTS 32S3",desc:"Fixar o painel em local de fácil visualização e acesso fora da zona de fogo direto, a 1,50m do piso, próximo à rota de saída."},{step:"02",title:"Passagem dos Cabos Blindados de Alta Temperatura",desc:"Lançar a fiação dos sensores da coifa (145°C) e dos sensores do duto (300°C) utilizando conduítes metálicos independentes."},{step:"03",title:"Interligação da Válvula de Gás e Exaustor",desc:"Conectar os contatos secos (relés) da central à bobina da válvula solenoide de gás e ao contator do motor de exaustão."},{step:"04",title:"Comissionamento e Teste sem Disparo",desc:"Simular acionamento pelo menu de teste da IHM para validar corte de gás e parada do exaustor antes da liberação final."}];return h.jsx("section",{id:"manuais",className:"py-24 bg-[#0a0c0e] relative border-t border-white/5",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wide mb-4",children:[h.jsx(Qx,{className:"w-3.5 h-3.5"}),"Engenharia & Suporte"]}),h.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Central de Manuais Técnicos & ",h.jsx("br",{}),h.jsx("span",{className:"gold-gradient-text",children:"Documentos de Instalação"})]}),h.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Tenha acesso imediato aos esquemas elétricos, guias de montagem passo a passo e memoriais de cálculo para instaladores, engenheiros e montadores de coifa."})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-16",children:s.map((t,r)=>h.jsxs("div",{className:`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all ${t.featured?"glass-panel-gold border-amber-500/40 bg-gradient-to-b from-[#1a1710] to-[#0e1014] shadow-glow-gold":"glass-panel border-white/10"}`,children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsx("span",{className:"text-[10px] font-mono font-bold bg-white/10 text-gray-300 px-2.5 py-1 rounded-md",children:t.type}),h.jsx(yd,{className:`w-6 h-6 ${t.featured?"text-amber-400":"text-gray-400"}`})]}),h.jsx("h3",{className:"text-lg font-bold text-white mb-2 font-sans",children:t.title}),h.jsx("p",{className:"text-xs text-gray-400 leading-relaxed mb-6",children:t.description})]}),h.jsxs("div",{className:"pt-4 border-t border-white/10 flex items-center justify-between",children:[h.jsxs("span",{className:"text-xs text-gray-400 font-mono",children:["Tamanho: ",t.size]}),h.jsxs("a",{href:t.link,target:t.link.startsWith("http")||t.link.endsWith(".pdf")?"_blank":"_self",rel:"noopener noreferrer",className:`py-2 px-4 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${t.featured?"gold-gradient hover:brightness-110 text-black font-extrabold shadow-glow-gold":"bg-white/10 hover:bg-white/20 text-white"}`,children:[h.jsx(sv,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Baixar Documento"})]})]})]},r))}),h.jsxs("div",{className:"glass-panel p-8 rounded-3xl border border-white/10",children:[h.jsxs("div",{className:"flex items-center gap-2.5 mb-6",children:[h.jsx(Ev,{className:"w-5 h-5 text-amber-400"}),h.jsx("h3",{className:"text-lg font-bold text-white font-sans",children:"Guia Prático de Instalação da Central Outfire VTS 32S3"})]}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:e.map((t,r)=>h.jsxs("div",{className:"p-4 bg-white/5 rounded-2xl border border-white/5 relative",children:[h.jsx("span",{className:"text-2xl font-black text-amber-400 font-mono block mb-2 opacity-90",children:t.step}),h.jsx("h4",{className:"text-sm font-bold text-white mb-1.5 font-sans",children:t.title}),h.jsx("p",{className:"text-xs text-gray-400 leading-relaxed",children:t.desc})]},r))}),h.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4",children:[h.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-300 text-center sm:text-left",children:[h.jsx(Zl,{className:"w-4 h-4 text-emerald-400 shrink-0"}),h.jsx("span",{children:"Precisa de suporte na instalação da sua equipe? Engenheiros especializados disponíveis por WhatsApp."})]}),h.jsx("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20sou%20instalador%2Fengenheiro%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20t%C3%A9cnica%20sobre%20a%20Central%20Outfire.",target:"_blank",rel:"noopener noreferrer",className:"py-2.5 px-5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/10 transition-all shrink-0",children:"Suporte Técnico de Engenharia →"})]})]})]})})},pw=()=>{const[s,e]=Qe.useState(null),t=[{src:"/assets/central-outfire-instalada.jpg",title:"Central Outfire VTS Instalada em Cozinha Real",category:"Instalação em Restaurante",desc:"Central montada estrategicamente na parede lateral da coifa, com chicote elétrico de alta temperatura interligado à válvula de corte de gás e aos dampers do duto."},{src:"/assets/central-outfire-interno.jpg",title:"Placa de Controle & Relés de Potência Outfire",category:"Engenharia Interna",desc:"Eletrônica industrial com proteção contra surtos, bornes reforçados para conexões dos sensores de 145°C e 300°C, relés dedicados e backup por bateria."},{src:"/assets/central-outfire-ihm.jpg",title:"IHM Touchscreen em Operação com Alerta",category:"Interface de Operação",desc:"Tela de alta resolução colorida exibindo o status de alerta térmico, contagem regressiva anti-disparo acidental e menu com senha para parametrizações."},{src:"/assets/central-outfire-fundo-removido.png",title:"Gabinete Industrial Outfire VTS 32S3",category:"Design Robusto",desc:"Construção em chapa de aço com pintura eletrostática texturizada de alta durabilidade, projetada para suportar a gordura e o ambiente severo de cozinhas industriais."}];return h.jsxs("section",{id:"galeria",className:"py-24 bg-[#0d0f13] relative",children:[h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wide mb-4",children:[h.jsx(rc,{className:"w-3.5 h-3.5"}),"Casos Reais & Engenharia em Campo"]}),h.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Instalações Reais do ",h.jsx("br",{}),h.jsx("span",{className:"gold-gradient-text",children:"Sistema Outfire em Ação"})]}),h.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Veja detalhes da montagem física da Central Outfire VTS 32S3, acabamento dos componentes e a integração visual impecável nas cozinhas dos nossos clientes."})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:t.map((r,o)=>h.jsxs("div",{onClick:()=>e(r),className:"glass-panel rounded-3xl border border-white/10 hover:border-amber-500/40 hover:shadow-glow-gold overflow-hidden cursor-pointer group transition-all duration-300 hover:-translate-y-1",children:[h.jsxs("div",{className:"relative h-72 sm:h-80 bg-black/50 overflow-hidden flex items-center justify-center",children:[h.jsx("img",{src:r.src,alt:r.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),h.jsxs("div",{className:"absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-sm",children:[h.jsx(E0,{className:"w-5 h-5 text-amber-400"}),h.jsx("span",{children:"Clique para Ampliar Foto"})]}),h.jsx("div",{className:"absolute top-4 left-4",children:h.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-amber-400 px-3 py-1 rounded-full border border-amber-500/30",children:r.category})})]}),h.jsxs("div",{className:"p-6",children:[h.jsxs("h3",{className:"text-lg font-bold text-white mb-2 font-sans flex items-center justify-between",children:[h.jsx("span",{children:r.title}),h.jsx(uv,{className:"w-4 h-4 text-gray-400 group-hover:text-amber-400 transition-colors"})]}),h.jsx("p",{className:"text-xs sm:text-sm text-gray-400 leading-relaxed",children:r.desc})]})]},o))})]}),s&&h.jsx("div",{onClick:()=>e(null),className:"fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8",children:h.jsxs("div",{onClick:r=>r.stopPropagation(),className:"max-w-4xl w-full bg-[#12141a] rounded-3xl border border-white/10 overflow-hidden shadow-2xl",children:[h.jsx("div",{className:"relative max-h-[70vh] bg-black flex items-center justify-center p-2",children:h.jsx("img",{src:s.src,alt:s.title,className:"max-h-[65vh] w-auto object-contain rounded-xl"})}),h.jsxs("div",{className:"p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10",children:[h.jsxs("div",{children:[h.jsx("h3",{className:"text-lg font-bold text-white",children:s.title}),h.jsx("p",{className:"text-xs text-gray-400 mt-1",children:s.desc})]}),h.jsx("button",{onClick:()=>e(null),className:"py-2 px-5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl transition-all",children:"Fechar"})]})]})})]})},mw=()=>{const[s,e]=Qe.useState({nome:"",empresa:"",telefone:"",cidade:"",coifas:"1",mensagem:""}),[t,r]=Qe.useState(!1),o=l=>{l.preventDefault();let u=`📋 *NOVO CONTATO PELO SITE OUTFIRE.COM.BR*

`;u+=`👤 *Nome:* ${s.nome}
`,u+=`🏢 *Empresa / Restaurante:* ${s.empresa||"Não informado"}
`,u+=`📱 *Telefone / WhatsApp:* ${s.telefone}
`,u+=`📍 *Cidade / Estado:* ${s.cidade}
`,u+=`🍳 *Qtd de Coifas:* ${s.coifas} coifa(s)
`,s.mensagem&&(u+=`💬 *Mensagem:* ${s.mensagem}
`),r(!0),setTimeout(()=>{window.open(`https://wa.me/5515996576807?text=${encodeURIComponent(u)}`,"_blank"),r(!1)},1e3)};return h.jsxs("footer",{id:"contato",className:"bg-[#08090b] text-gray-400 border-t border-white/10 relative overflow-hidden",children:[h.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10",children:h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",children:[h.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide",children:[h.jsx(gr,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Canais Diretos de Engenharia & Vendas"]}),h.jsxs("h3",{className:"text-3xl sm:text-4xl font-black text-white font-sans tracking-tight",children:["Fale com um Especialista ",h.jsx("br",{}),h.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"em Supressão Outfire"})]}),h.jsx("p",{className:"text-sm text-gray-400 leading-relaxed",children:"Dúvidas sobre dimensionamento de bicos, sensores, laudos para o Corpo de Bombeiros (AVCB) ou solicitação de visita técnica para cozinhas em shopping centers e restaurantes."}),h.jsxs("div",{className:"space-y-4 pt-4",children:[h.jsxs("a",{href:"https://wa.me/5515996576807",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 transition-all text-white group",children:[h.jsx("div",{className:"w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform",children:h.jsx(gr,{className:"w-5 h-5"})}),h.jsxs("div",{children:[h.jsx("span",{className:"text-xs text-gray-400 block font-mono",children:"WhatsApp Vendas & Orçamentos"}),h.jsx("span",{className:"text-base font-bold text-white group-hover:text-emerald-400 transition-colors",children:"(15) 99657-6807"})]})]}),h.jsxs("a",{href:"https://wa.me/5515981577847",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 transition-all text-white group",children:[h.jsx("div",{className:"w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform",children:h.jsx(gr,{className:"w-5 h-5"})}),h.jsxs("div",{children:[h.jsx("span",{className:"text-xs text-gray-400 block font-mono",children:"Suporte Técnico & Pós-Venda"}),h.jsx("span",{className:"text-base font-bold text-white group-hover:text-red-400 transition-colors",children:"(15) 98157-7847"})]})]}),h.jsxs("div",{className:"flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 text-xs text-gray-300",children:[h.jsx("div",{className:"w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0",children:h.jsx(cv,{className:"w-5 h-5"})}),h.jsxs("div",{children:[h.jsx("span",{className:"font-bold text-white block",children:"Atendimento em Todo o Brasil"}),h.jsx("span",{className:"text-gray-400",children:"Envio de kits prontos para instalação com laudo ART e suporte remoto."})]})]})]})]}),h.jsx("div",{className:"lg:col-span-7",children:h.jsxs("div",{className:"glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative",children:[h.jsx("h4",{className:"text-xl font-bold text-white mb-2 font-sans",children:"Solicite uma Proposta Técnica sem Compromisso"}),h.jsx("p",{className:"text-xs text-gray-400 mb-6",children:"Preencha os dados e nosso engenheiro entrará em contato em menos de 15 minutos com o dimensionamento preliminar."}),t?h.jsxs("div",{className:"p-8 text-center space-y-3 bg-emerald-950/30 border border-emerald-500/30 rounded-2xl",children:[h.jsx(Ss,{className:"w-12 h-12 text-emerald-400 mx-auto animate-bounce"}),h.jsx("h5",{className:"text-base font-bold text-white",children:"Encaminhando para o WhatsApp..."}),h.jsx("p",{className:"text-xs text-gray-300",children:"Você será direcionado diretamente para um especialista no WhatsApp."})]}):h.jsxs("form",{onSubmit:o,className:"space-y-4",children:[h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[h.jsxs("div",{children:[h.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Seu Nome Completo *"}),h.jsx("input",{type:"text",required:!0,placeholder:"Ex: Carlos Silva",value:s.nome,onChange:l=>e({...s,nome:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Nome do Restaurante / Empresa"}),h.jsx("input",{type:"text",placeholder:"Ex: Hamburgueria Grill",value:s.empresa,onChange:l=>e({...s,empresa:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]})]}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[h.jsxs("div",{children:[h.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"WhatsApp com DDD *"}),h.jsx("input",{type:"tel",required:!0,placeholder:"Ex: (11) 98765-4321",value:s.telefone,onChange:l=>e({...s,telefone:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Cidade e Estado *"}),h.jsx("input",{type:"text",required:!0,placeholder:"Ex: São Paulo / SP",value:s.cidade,onChange:l=>e({...s,cidade:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Quantas Coifas precisam de proteção?"}),h.jsxs("select",{value:s.coifas,onChange:l=>e({...s,coifas:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500",children:[h.jsx("option",{value:"1",children:"1 Coifa (Pequeno / Médio Porte)"}),h.jsx("option",{value:"2",children:"2 Coifas (Atuação Independente)"}),h.jsx("option",{value:"3",children:"3 Coifas (Atuação Independente)"}),h.jsx("option",{value:"mais de 3",children:"Mais de 3 Coifas / Projeto Especial"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Detalhes adicionais (opcional)"}),h.jsx("textarea",{rows:3,placeholder:"Ex: Tenho 2 fritadeiras e 1 chapa, preciso de laudo urgente para renovação de AVCB.",value:s.mensagem,onChange:l=>e({...s,mensagem:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]}),h.jsxs("button",{type:"submit",className:"w-full py-4 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black text-sm rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-2 group",children:[h.jsx(_v,{className:"w-4 h-4 group-hover:translate-x-1 transition-transform fill-black"}),h.jsx("span",{children:"Enviar para a Engenharia Outfire"})]})]})]})})]})}),h.jsx("div",{className:"border-t border-[#d4af37]/20 py-8 bg-[#050608]",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("img",{src:"/assets/logo-outfire-gold.png",alt:"OUTFIRE",className:"h-8 w-auto object-contain"}),h.jsxs("span",{children:["© ",new Date().getFullYear()," Outfire Sistemas contra Incêndio. Todos os direitos reservados."]})]}),h.jsxs("div",{className:"flex items-center gap-4 text-gray-400",children:[h.jsx("a",{href:"#hero-3d",className:"hover:text-white transition-colors",children:"Simulação 3D"}),h.jsx("a",{href:"#central-vts",className:"hover:text-white transition-colors",children:"Central VTS"}),h.jsx("a",{href:"#normas",className:"hover:text-white transition-colors",children:"Normas NBR"}),h.jsx("a",{href:"#calculadora",className:"hover:text-white transition-colors",children:"Calculadora"}),h.jsx("a",{href:"#loja",className:"hover:text-white transition-colors",children:"Loja"}),h.jsx("a",{href:"/assets/manual-instalacao-central-outfire.pdf",target:"_blank",className:"hover:text-white transition-colors",children:"Manual PDF"})]})]})})]})},gw=({isOpen:s,onClose:e,cartItems:t,onUpdateQuantity:r,onRemoveItem:o,onClearCart:l})=>{const[u,d]=Qe.useState(!1),[p,g]=Qe.useState(!1);if(!s)return null;const x=t.reduce((S,A)=>S+A.product.priceBRL*A.quantity,0),_=()=>{let S=`🛒 *PEDIDO LOJA OUTFIRE - PROPOSTA COMERCIAL*

`;S+=`Olá, equipe Outfire! Gostaria de fechar o pedido dos seguintes itens pelo site:

`,t.forEach((A,N)=>{S+=`${N+1}. *${A.product.name}*
`,S+=`   SKU: ${A.product.sku} | Qtd: ${A.quantity} un
`,S+=`   Valor: R$ ${(A.product.priceBRL*A.quantity).toLocaleString("pt-BR")},00

`}),S+=`💰 *TOTAL DO PEDIDO:* R$ ${x.toLocaleString("pt-BR")},00

`,S+="Por favor, me informe as opções de pagamento (Faturamento B2B / Boleto / Pix / Cartão) e valor do frete.",window.open(`https://wa.me/5515996576807?text=${encodeURIComponent(S)}`,"_blank")},y=S=>{g(!0),setTimeout(()=>{l(),g(!1),d(!1),e(),alert(`Pedido registrado com sucesso via ${S}! Nossa equipe entrará em contato para emissão de NF-e e envio.`)},2e3)};return h.jsxs("div",{className:"fixed inset-0 z-50 overflow-hidden",children:[h.jsx("div",{onClick:e,className:"absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"}),h.jsx("div",{className:"fixed inset-y-0 right-0 max-w-full flex pl-10",children:h.jsxs("div",{className:"w-screen max-w-md bg-[#0f1115] border-l border-white/10 flex flex-col justify-between shadow-2xl relative",children:[h.jsxs("div",{className:"p-6 border-b border-white/10 flex items-center justify-between",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(gm,{className:"w-5 h-5 text-[#d4af37]"}),h.jsx("h2",{className:"text-lg font-bold text-white font-sans",children:"Seu Carrinho de Compras"})]}),h.jsx("button",{onClick:e,className:"p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors",children:h.jsx(Md,{className:"w-5 h-5"})})]}),h.jsx("div",{className:"flex-1 overflow-y-auto p-6 space-y-4",children:t.length===0?h.jsxs("div",{className:"h-full flex flex-col items-center justify-center text-center text-gray-400 space-y-4",children:[h.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-gray-500",children:h.jsx(gm,{className:"w-8 h-8"})}),h.jsxs("div",{children:[h.jsx("h3",{className:"text-base font-bold text-white",children:"Seu carrinho está vazio"}),h.jsx("p",{className:"text-xs text-gray-400 mt-1 max-w-xs",children:"Monte um kit na calculadora ou adicione peças avulsas de reposição da nossa loja."})]}),h.jsx("a",{href:"#calculadora",onClick:e,className:"py-2.5 px-4 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-xl shadow-glow-red transition-all",children:"Abrir Calculadora da Cozinha"})]}):t.map(S=>h.jsxs("div",{className:"p-4 bg-white/5 rounded-2xl border border-white/5 flex items-start gap-3 relative group",children:[h.jsx("img",{src:S.product.image,alt:S.product.name,className:"w-16 h-16 object-contain rounded-xl bg-black/40 p-1 border border-white/5 shrink-0"}),h.jsxs("div",{className:"flex-1 min-w-0",children:[h.jsx("h4",{className:"text-xs font-bold text-white line-clamp-1",children:S.product.name}),h.jsxs("span",{className:"text-[10px] font-mono text-gray-400 block mt-0.5",children:["SKU: ",S.product.sku]}),h.jsxs("span",{className:"text-sm font-bold text-amber-400 font-mono block mt-1",children:["R$ ",S.product.priceBRL.toLocaleString("pt-BR"),",00"]}),h.jsxs("div",{className:"flex items-center gap-3 mt-2",children:[h.jsxs("div",{className:"flex items-center bg-black/50 border border-white/10 rounded-lg",children:[h.jsx("button",{onClick:()=>r(S.product.id,-1),className:"p-1 hover:text-red-400 transition-colors",children:h.jsx(hv,{className:"w-3 h-3"})}),h.jsx("span",{className:"px-2 text-xs font-bold text-white",children:S.quantity}),h.jsx("button",{onClick:()=>r(S.product.id,1),className:"p-1 hover:text-emerald-400 transition-colors",children:h.jsx(uo,{className:"w-3 h-3"})})]}),h.jsxs("button",{onClick:()=>o(S.product.id),className:"text-gray-400 hover:text-red-400 text-xs transition-colors flex items-center gap-1",children:[h.jsx(b0,{className:"w-3 h-3"}),h.jsx("span",{children:"Remover"})]})]})]})]},S.product.id))}),t.length>0&&h.jsxs("div",{className:"p-6 border-t border-white/10 bg-[#0c0d10] space-y-4",children:[h.jsxs("div",{className:"space-y-1.5",children:[h.jsxs("div",{className:"flex justify-between text-xs text-gray-400",children:[h.jsx("span",{children:"Subtotal:"}),h.jsxs("span",{children:["R$ ",x.toLocaleString("pt-BR"),",00"]})]}),h.jsxs("div",{className:"flex justify-between text-xs text-gray-400",children:[h.jsx("span",{children:"Nota Fiscal & Laudo ART:"}),h.jsx("span",{className:"text-emerald-400 font-medium",children:"Incluso"})]}),h.jsxs("div",{className:"flex justify-between text-base font-bold text-white pt-2 border-t border-white/10",children:[h.jsx("span",{children:"Total Estimado:"}),h.jsxs("span",{className:"font-mono text-xl text-amber-400",children:["R$ ",x.toLocaleString("pt-BR"),",00"]})]})]}),h.jsxs("div",{className:"space-y-2",children:[h.jsxs("button",{onClick:_,className:"w-full py-3.5 px-4 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2",children:[h.jsx(gr,{className:"w-4 h-4"}),h.jsx("span",{children:"Enviar Pedido pelo WhatsApp (Comercial)"})]}),h.jsxs("button",{onClick:()=>d(!0),className:"w-full py-3 px-4 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black text-xs rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-2",children:[h.jsx(mm,{className:"w-4 h-4 fill-black"}),h.jsx("span",{children:"Finalizar Pagamento Online (Pix / Cartão)"})]})]}),h.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-[11px] text-gray-400 text-center",children:[h.jsx(Zl,{className:"w-3.5 h-3.5 text-emerald-400"}),h.jsx("span",{children:"Compra segura com garantia direta do fabricante Outfire"})]})]}),u&&h.jsxs("div",{className:"absolute inset-0 bg-[#0d0f13] z-20 p-6 flex flex-col justify-between",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-white/10 mb-6",children:[h.jsx("h3",{className:"font-bold text-white text-base",children:"Checkout Rápido Outfire"}),h.jsx("button",{onClick:()=>d(!1),className:"p-1 text-gray-400 hover:text-white",children:h.jsx(Md,{className:"w-5 h-5"})})]}),p?h.jsxs("div",{className:"text-center py-12 space-y-4",children:[h.jsx(ic,{className:"w-16 h-16 text-emerald-400 mx-auto animate-bounce"}),h.jsx("h4",{className:"text-lg font-bold text-white",children:"Pagamento Confirmado!"}),h.jsx("p",{className:"text-xs text-gray-300",children:"Obrigado por confiar na Outfire. Seus dados foram encaminhados para a expedição e o engenheiro responsável entrará em contato."})]}):h.jsxs("div",{className:"space-y-4",children:[h.jsxs("p",{className:"text-xs text-gray-300",children:["Selecione a forma de pagamento desejada para concluir o pedido de ",h.jsxs("strong",{children:["R$ ",x.toLocaleString("pt-BR"),",00"]}),":"]}),h.jsxs("button",{onClick:()=>y("PIX"),className:"w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left transition-all",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx(mv,{className:"w-6 h-6 text-emerald-400"}),h.jsxs("div",{children:[h.jsx("span",{className:"text-sm font-bold text-white block",children:"Pagar via Pix"}),h.jsx("span",{className:"text-[11px] text-gray-400",children:"Aprovação imediata com 5% de desconto"})]})]}),h.jsx(Gl,{className:"w-4 h-4 text-gray-400"})]}),h.jsxs("button",{onClick:()=>y("Cartão de Crédito"),className:"w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left transition-all",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx(mm,{className:"w-6 h-6 text-blue-400"}),h.jsxs("div",{children:[h.jsx("span",{className:"text-sm font-bold text-white block",children:"Cartão de Crédito"}),h.jsx("span",{className:"text-[11px] text-gray-400",children:"Parcelamento em até 12x sem juros"})]})]}),h.jsx(Gl,{className:"w-4 h-4 text-gray-400"})]}),h.jsxs("button",{onClick:()=>y("Boleto Faturado B2B"),className:"w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left transition-all",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx(Zl,{className:"w-6 h-6 text-amber-400"}),h.jsxs("div",{children:[h.jsx("span",{className:"text-sm font-bold text-white block",children:"Faturamento B2B / Boleto PJ"}),h.jsx("span",{className:"text-[11px] text-gray-400",children:"Para restaurantes e empresas cadastradas"})]})]}),h.jsx(Gl,{className:"w-4 h-4 text-gray-400"})]})]})]}),h.jsx("button",{onClick:()=>d(!1),className:"w-full py-3 bg-white/10 text-gray-300 font-bold text-xs rounded-xl hover:bg-white/20 transition-all",children:"Voltar ao Carrinho"})]})]})})]})},xw=()=>h.jsxs("aside",{"aria-label":"Atendimento rápido",className:"fixed bottom-6 right-6 z-40 flex items-center group",children:[h.jsx("div",{className:"hidden sm:block mr-3 px-3.5 py-1.5 rounded-xl bg-[#12141a]/95 backdrop-blur-md border border-white/10 text-white text-xs font-semibold shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap",children:"Falar com Engenheiro no WhatsApp 💬"}),h.jsxs("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20estou%20no%20site%20da%20Outfire%20e%20gostaria%20de%20um%20or%C3%A7amento%20t%C3%A9cnico.",target:"_blank",rel:"noopener noreferrer",className:"w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-green-500 to-emerald-400 text-white flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 relative border-2 border-white/20",title:"Atendimento no WhatsApp","aria-label":"Atendimento no WhatsApp",children:[h.jsx(fv,{className:"w-7 h-7 fill-white/10"}),h.jsxs("span",{className:"absolute -top-1 -right-1 flex h-4 w-4",children:[h.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),h.jsx("span",{className:"relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border border-white"})]})]})]});function vw(){const[s,e]=Qe.useState([]),[t,r]=Qe.useState(!1),o=g=>{e(x=>x.find(y=>y.product.id===g.id)?x.map(y=>y.product.id===g.id?{...y,quantity:y.quantity+1}:y):[...x,{product:g,quantity:1}]),r(!0)},l=(g,x)=>{e(_=>_.map(y=>{if(y.product.id===g){const S=y.quantity+x;return S>0?{...y,quantity:S}:null}return y}).filter(Boolean))},u=g=>{e(x=>x.filter(_=>_.product.id!==g))},d=()=>{e([])},p=s.reduce((g,x)=>g+x.quantity,0);return h.jsxs("div",{className:"min-h-screen bg-[#0a0c0e] text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200",children:[h.jsx(bv,{cartCount:p,onOpenCart:()=>r(!0)}),h.jsxs("main",{className:"flex-1",children:[h.jsx(aw,{}),h.jsx(ow,{}),h.jsx(lw,{}),h.jsx(cw,{}),h.jsx(uw,{onAddToCart:o}),h.jsx(fw,{onAddToCart:o}),h.jsx(hw,{}),h.jsx(pw,{})]}),h.jsx(mw,{}),h.jsx(gw,{isOpen:t,onClose:()=>r(!1),cartItems:s,onUpdateQuantity:l,onRemoveItem:u,onClearCart:d}),h.jsx(xw,{})]})}Yx.createRoot(document.getElementById("root")).render(h.jsx(jx.StrictMode,{children:h.jsx(vw,{})}));
