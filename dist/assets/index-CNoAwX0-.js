(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function V0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var nd={exports:{}},Co={},id={exports:{}},At={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wm;function rv(){if(wm)return At;wm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.iterator;function S(F){return F===null||typeof F!="object"?null:(F=v&&F[v]||F["@@iterator"],typeof F=="function"?F:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,A={};function y(F,ce,Ne){this.props=F,this.context=ce,this.refs=A,this.updater=Ne||M}y.prototype.isReactComponent={},y.prototype.setState=function(F,ce){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,ce,"setState")},y.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function _(){}_.prototype=y.prototype;function C(F,ce,Ne){this.props=F,this.context=ce,this.refs=A,this.updater=Ne||M}var I=C.prototype=new _;I.constructor=C,T(I,y.prototype),I.isPureReactComponent=!0;var P=Array.isArray,U=Object.prototype.hasOwnProperty,L={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function j(F,ce,Ne){var qe,We={},ne=null,fe=null;if(ce!=null)for(qe in ce.ref!==void 0&&(fe=ce.ref),ce.key!==void 0&&(ne=""+ce.key),ce)U.call(ce,qe)&&!O.hasOwnProperty(qe)&&(We[qe]=ce[qe]);var ye=arguments.length-2;if(ye===1)We.children=Ne;else if(1<ye){for(var Be=Array(ye),Le=0;Le<ye;Le++)Be[Le]=arguments[Le+2];We.children=Be}if(F&&F.defaultProps)for(qe in ye=F.defaultProps,ye)We[qe]===void 0&&(We[qe]=ye[qe]);return{$$typeof:s,type:F,key:ne,ref:fe,props:We,_owner:L.current}}function b(F,ce){return{$$typeof:s,type:F.type,key:ce,ref:F.ref,props:F.props,_owner:F._owner}}function R(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function z(F){var ce={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Ne){return ce[Ne]})}var $=/\/+/g;function Q(F,ce){return typeof F=="object"&&F!==null&&F.key!=null?z(""+F.key):ce.toString(36)}function re(F,ce,Ne,qe,We){var ne=typeof F;(ne==="undefined"||ne==="boolean")&&(F=null);var fe=!1;if(F===null)fe=!0;else switch(ne){case"string":case"number":fe=!0;break;case"object":switch(F.$$typeof){case s:case e:fe=!0}}if(fe)return fe=F,We=We(fe),F=qe===""?"."+Q(fe,0):qe,P(We)?(Ne="",F!=null&&(Ne=F.replace($,"$&/")+"/"),re(We,ce,Ne,"",function(Le){return Le})):We!=null&&(R(We)&&(We=b(We,Ne+(!We.key||fe&&fe.key===We.key?"":(""+We.key).replace($,"$&/")+"/")+F)),ce.push(We)),1;if(fe=0,qe=qe===""?".":qe+":",P(F))for(var ye=0;ye<F.length;ye++){ne=F[ye];var Be=qe+Q(ne,ye);fe+=re(ne,ce,Ne,Be,We)}else if(Be=S(F),typeof Be=="function")for(F=Be.call(F),ye=0;!(ne=F.next()).done;)ne=ne.value,Be=qe+Q(ne,ye++),fe+=re(ne,ce,Ne,Be,We);else if(ne==="object")throw ce=String(F),Error("Objects are not valid as a React child (found: "+(ce==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":ce)+"). If you meant to render a collection of children, use an array instead.");return fe}function se(F,ce,Ne){if(F==null)return F;var qe=[],We=0;return re(F,qe,"","",function(ne){return ce.call(Ne,ne,We++)}),qe}function te(F){if(F._status===-1){var ce=F._result;ce=ce(),ce.then(function(Ne){(F._status===0||F._status===-1)&&(F._status=1,F._result=Ne)},function(Ne){(F._status===0||F._status===-1)&&(F._status=2,F._result=Ne)}),F._status===-1&&(F._status=0,F._result=ce)}if(F._status===1)return F._result.default;throw F._result}var q={current:null},X={transition:null},pe={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:X,ReactCurrentOwner:L};function oe(){throw Error("act(...) is not supported in production builds of React.")}return At.Children={map:se,forEach:function(F,ce,Ne){se(F,function(){ce.apply(this,arguments)},Ne)},count:function(F){var ce=0;return se(F,function(){ce++}),ce},toArray:function(F){return se(F,function(ce){return ce})||[]},only:function(F){if(!R(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},At.Component=y,At.Fragment=t,At.Profiler=o,At.PureComponent=C,At.StrictMode=r,At.Suspense=p,At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,At.act=oe,At.cloneElement=function(F,ce,Ne){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var qe=T({},F.props),We=F.key,ne=F.ref,fe=F._owner;if(ce!=null){if(ce.ref!==void 0&&(ne=ce.ref,fe=L.current),ce.key!==void 0&&(We=""+ce.key),F.type&&F.type.defaultProps)var ye=F.type.defaultProps;for(Be in ce)U.call(ce,Be)&&!O.hasOwnProperty(Be)&&(qe[Be]=ce[Be]===void 0&&ye!==void 0?ye[Be]:ce[Be])}var Be=arguments.length-2;if(Be===1)qe.children=Ne;else if(1<Be){ye=Array(Be);for(var Le=0;Le<Be;Le++)ye[Le]=arguments[Le+2];qe.children=ye}return{$$typeof:s,type:F.type,key:We,ref:ne,props:qe,_owner:fe}},At.createContext=function(F){return F={$$typeof:d,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},At.createElement=j,At.createFactory=function(F){var ce=j.bind(null,F);return ce.type=F,ce},At.createRef=function(){return{current:null}},At.forwardRef=function(F){return{$$typeof:f,render:F}},At.isValidElement=R,At.lazy=function(F){return{$$typeof:x,_payload:{_status:-1,_result:F},_init:te}},At.memo=function(F,ce){return{$$typeof:m,type:F,compare:ce===void 0?null:ce}},At.startTransition=function(F){var ce=X.transition;X.transition={};try{F()}finally{X.transition=ce}},At.unstable_act=oe,At.useCallback=function(F,ce){return q.current.useCallback(F,ce)},At.useContext=function(F){return q.current.useContext(F)},At.useDebugValue=function(){},At.useDeferredValue=function(F){return q.current.useDeferredValue(F)},At.useEffect=function(F,ce){return q.current.useEffect(F,ce)},At.useId=function(){return q.current.useId()},At.useImperativeHandle=function(F,ce,Ne){return q.current.useImperativeHandle(F,ce,Ne)},At.useInsertionEffect=function(F,ce){return q.current.useInsertionEffect(F,ce)},At.useLayoutEffect=function(F,ce){return q.current.useLayoutEffect(F,ce)},At.useMemo=function(F,ce){return q.current.useMemo(F,ce)},At.useReducer=function(F,ce,Ne){return q.current.useReducer(F,ce,Ne)},At.useRef=function(F){return q.current.useRef(F)},At.useState=function(F){return q.current.useState(F)},At.useSyncExternalStore=function(F,ce,Ne){return q.current.useSyncExternalStore(F,ce,Ne)},At.useTransition=function(){return q.current.useTransition()},At.version="18.3.1",At}var bm;function Vf(){return bm||(bm=1,id.exports=rv()),id.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Em;function sv(){if(Em)return Co;Em=1;var s=Vf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,m){var x,v={},S=null,M=null;m!==void 0&&(S=""+m),p.key!==void 0&&(S=""+p.key),p.ref!==void 0&&(M=p.ref);for(x in p)r.call(p,x)&&!l.hasOwnProperty(x)&&(v[x]=p[x]);if(f&&f.defaultProps)for(x in p=f.defaultProps,p)v[x]===void 0&&(v[x]=p[x]);return{$$typeof:e,type:f,key:S,ref:M,props:v,_owner:o.current}}return Co.Fragment=t,Co.jsx=d,Co.jsxs=d,Co}var Tm;function av(){return Tm||(Tm=1,nd.exports=sv()),nd.exports}var u=av(),Ue=Vf();const ov=V0(Ue);var Hl={},rd={exports:{}},ai={},sd={exports:{}},ad={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm;function lv(){return Cm||(Cm=1,(function(s){function e(X,pe){var oe=X.length;X.push(pe);e:for(;0<oe;){var F=oe-1>>>1,ce=X[F];if(0<o(ce,pe))X[F]=pe,X[oe]=ce,oe=F;else break e}}function t(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var pe=X[0],oe=X.pop();if(oe!==pe){X[0]=oe;e:for(var F=0,ce=X.length,Ne=ce>>>1;F<Ne;){var qe=2*(F+1)-1,We=X[qe],ne=qe+1,fe=X[ne];if(0>o(We,oe))ne<ce&&0>o(fe,We)?(X[F]=fe,X[ne]=oe,F=ne):(X[F]=We,X[qe]=oe,F=qe);else if(ne<ce&&0>o(fe,oe))X[F]=fe,X[ne]=oe,F=ne;else break e}}return pe}function o(X,pe){var oe=X.sortIndex-pe.sortIndex;return oe!==0?oe:X.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var d=Date,f=d.now();s.unstable_now=function(){return d.now()-f}}var p=[],m=[],x=1,v=null,S=3,M=!1,T=!1,A=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(X){for(var pe=t(m);pe!==null;){if(pe.callback===null)r(m);else if(pe.startTime<=X)r(m),pe.sortIndex=pe.expirationTime,e(p,pe);else break;pe=t(m)}}function P(X){if(A=!1,I(X),!T)if(t(p)!==null)T=!0,te(U);else{var pe=t(m);pe!==null&&q(P,pe.startTime-X)}}function U(X,pe){T=!1,A&&(A=!1,_(j),j=-1),M=!0;var oe=S;try{for(I(pe),v=t(p);v!==null&&(!(v.expirationTime>pe)||X&&!z());){var F=v.callback;if(typeof F=="function"){v.callback=null,S=v.priorityLevel;var ce=F(v.expirationTime<=pe);pe=s.unstable_now(),typeof ce=="function"?v.callback=ce:v===t(p)&&r(p),I(pe)}else r(p);v=t(p)}if(v!==null)var Ne=!0;else{var qe=t(m);qe!==null&&q(P,qe.startTime-pe),Ne=!1}return Ne}finally{v=null,S=oe,M=!1}}var L=!1,O=null,j=-1,b=5,R=-1;function z(){return!(s.unstable_now()-R<b)}function $(){if(O!==null){var X=s.unstable_now();R=X;var pe=!0;try{pe=O(!0,X)}finally{pe?Q():(L=!1,O=null)}}else L=!1}var Q;if(typeof C=="function")Q=function(){C($)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,se=re.port2;re.port1.onmessage=$,Q=function(){se.postMessage(null)}}else Q=function(){y($,0)};function te(X){O=X,L||(L=!0,Q())}function q(X,pe){j=y(function(){X(s.unstable_now())},pe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(X){X.callback=null},s.unstable_continueExecution=function(){T||M||(T=!0,te(U))},s.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<X?Math.floor(1e3/X):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function(X){switch(S){case 1:case 2:case 3:var pe=3;break;default:pe=S}var oe=S;S=pe;try{return X()}finally{S=oe}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(X,pe){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var oe=S;S=X;try{return pe()}finally{S=oe}},s.unstable_scheduleCallback=function(X,pe,oe){var F=s.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?F+oe:F):oe=F,X){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=oe+ce,X={id:x++,callback:pe,priorityLevel:X,startTime:oe,expirationTime:ce,sortIndex:-1},oe>F?(X.sortIndex=oe,e(m,X),t(p)===null&&X===t(m)&&(A?(_(j),j=-1):A=!0,q(P,oe-F))):(X.sortIndex=ce,e(p,X),T||M||(T=!0,te(U))),X},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(X){var pe=S;return function(){var oe=S;S=pe;try{return X.apply(this,arguments)}finally{S=oe}}}})(ad)),ad}var Am;function cv(){return Am||(Am=1,sd.exports=lv()),sd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rm;function uv(){if(Rm)return ai;Rm=1;var s=Vf(),e=cv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){d(n,i),d(n+"Capture",i)}function d(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},v={};function S(n){return p.call(v,n)?!0:p.call(x,n)?!1:m.test(n)?v[n]=!0:(x[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(n,i,a,c,h,g,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=E}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new A(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function C(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,C);y[i]=new A(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,C);y[i]=new A(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,C);y[i]=new A(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function I(n,i,a,c){var h=y.hasOwnProperty(i)?y[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,a,h,c)&&(a=null),c||h===null?S(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,c=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),L=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),z=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),se=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),q=Symbol.for("react.offscreen"),X=Symbol.iterator;function pe(n){return n===null||typeof n!="object"?null:(n=X&&n[X]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,F;function ce(n){if(F===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+n}var Ne=!1;function qe(n,i){if(!n||Ne)return"";Ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(de){var c=de}Reflect.construct(n,[],i)}else{try{i.call()}catch(de){c=de}n.call(i.prototype)}else{try{throw Error()}catch(de){c=de}n()}}catch(de){if(de&&c&&typeof de.stack=="string"){for(var h=de.stack.split(`
`),g=c.stack.split(`
`),E=h.length-1,k=g.length-1;1<=E&&0<=k&&h[E]!==g[k];)k--;for(;1<=E&&0<=k;E--,k--)if(h[E]!==g[k]){if(E!==1||k!==1)do if(E--,k--,0>k||h[E]!==g[k]){var G=`
`+h[E].replace(" at new "," at ");return n.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",n.displayName)),G}while(1<=E&&0<=k);break}}}finally{Ne=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ce(n):""}function We(n){switch(n.tag){case 5:return ce(n.type);case 16:return ce("Lazy");case 13:return ce("Suspense");case 19:return ce("SuspenseList");case 0:case 2:case 15:return n=qe(n.type,!1),n;case 11:return n=qe(n.type.render,!1),n;case 1:return n=qe(n.type,!0),n;default:return""}}function ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case L:return"Portal";case b:return"Profiler";case j:return"StrictMode";case Q:return"Suspense";case re:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case $:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case se:return i=n.displayName||null,i!==null?i:ne(n.type)||"Memo";case te:i=n._payload,n=n._init;try{return ne(n(i))}catch{}}return null}function fe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ne(i);case 8:return i===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ye(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Le(n){var i=Be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(E){c=""+E,g.call(this,E)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function gt(n){n._valueTracker||(n._valueTracker=Le(n))}function Jt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Be(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function _t(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Rt(n,i){var a=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Lt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=ye(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function pt(n,i){i=i.checked,i!=null&&I(n,"checked",i,!1)}function Ot(n,i){pt(n,i);var a=ye(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Yt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Yt(n,i.type,ye(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function V(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Yt(n,i,a){(i!=="number"||_t(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var St=Array.isArray;function xt(n,i,a,c){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&c&&(n[a].defaultSelected=!0)}else{for(a=""+ye(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function je(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function D(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(St(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:ye(a)}}function w(n,i){var a=ye(i.value),c=ye(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function B(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function le(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function he(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?le(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var K,Fe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(K=K||document.createElement("div"),K.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=K.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function be(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Oe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$e=["Webkit","ms","Moz","O"];Object.keys(Oe).forEach(function(n){$e.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Oe[i]=Oe[n]})});function xe(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Oe.hasOwnProperty(n)&&Oe[n]?(""+i).trim():i+"px"}function Ee(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=xe(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,h):n[a]=h}}var ke=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ge(n,i){if(i){if(ke[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Se(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ut=null;function H(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Pe=null,ve=null,Ie=null;function ge(n){if(n=fo(n)){if(typeof Pe!="function")throw Error(t(280));var i=n.stateNode;i&&(i=sl(i),Pe(n.stateNode,n.type,i))}}function me(n){ve?Ie?Ie.push(n):Ie=[n]:ve=n}function Ce(){if(ve){var n=ve,i=Ie;if(Ie=ve=null,ge(n),i)for(n=0;n<i.length;n++)ge(i[n])}}function rt(n,i){return n(i)}function dt(){}var tt=!1;function Vt(n,i,a){if(tt)return n(i,a);tt=!0;try{return rt(n,i,a)}finally{tt=!1,(ve!==null||Ie!==null)&&(dt(),Ce())}}function Ht(n,i){var a=n.stateNode;if(a===null)return null;var c=sl(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var hn=!1;if(f)try{var Ln={};Object.defineProperty(Ln,"passive",{get:function(){hn=!0}}),window.addEventListener("test",Ln,Ln),window.removeEventListener("test",Ln,Ln)}catch{hn=!1}function Pi(n,i,a,c,h,g,E,k,G){var de=Array.prototype.slice.call(arguments,3);try{i.apply(a,de)}catch(Me){this.onError(Me)}}var Yi=!1,$i=null,Ki=!1,ui=null,Vr={onError:function(n){Yi=!0,$i=n}};function Gr(n,i,a,c,h,g,E,k,G){Yi=!1,$i=null,Pi.apply(Vr,arguments)}function $s(n,i,a,c,h,g,E,k,G){if(Gr.apply(this,arguments),Yi){if(Yi){var de=$i;Yi=!1,$i=null}else throw Error(t(198));Ki||(Ki=!0,ui=de)}}function ei(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function pr(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Hr(n){if(ei(n)!==n)throw Error(t(188))}function an(n){var i=n.alternate;if(!i){if(i=ei(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var h=a.return;if(h===null)break;var g=h.alternate;if(g===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===a)return Hr(h),n;if(g===c)return Hr(h),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=h,c=g;else{for(var E=!1,k=h.child;k;){if(k===a){E=!0,a=h,c=g;break}if(k===c){E=!0,c=h,a=g;break}k=k.sibling}if(!E){for(k=g.child;k;){if(k===a){E=!0,a=g,c=h;break}if(k===c){E=!0,c=g,a=h;break}k=k.sibling}if(!E)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Ks(n){return n=an(n),n!==null?_s(n):null}function _s(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=_s(n);if(i!==null)return i;n=n.sibling}return null}var Zs=e.unstable_scheduleCallback,mr=e.unstable_cancelCallback,gr=e.unstable_shouldYield,ys=e.unstable_requestPaint,Wt=e.unstable_now,N=e.unstable_getCurrentPriorityLevel,Y=e.unstable_ImmediatePriority,ue=e.unstable_UserBlockingPriority,ae=e.unstable_NormalPriority,J=e.unstable_LowPriority,De=e.unstable_IdlePriority,Ve=null,Ae=null;function Ye(n){if(Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(Ve,n,void 0,(n.current.flags&128)===128)}catch{}}var He=Math.clz32?Math.clz32:Mt,st=Math.log,it=Math.LN2;function Mt(n){return n>>>=0,n===0?32:31-(st(n)/it|0)|0}var Nt=64,Xt=4194304;function Gt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function It(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,h=n.suspendedLanes,g=n.pingedLanes,E=a&268435455;if(E!==0){var k=E&~h;k!==0?c=Gt(k):(g&=E,g!==0&&(c=Gt(g)))}else E=a&~h,E!==0?c=Gt(E):g!==0&&(c=Gt(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,g=i&-i,h>=g||h===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-He(i),h=1<<a,c|=n[a],i&=~h;return c}function nt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ut(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes;0<g;){var E=31-He(g),k=1<<E,G=h[E];G===-1?((k&a)===0||(k&c)!==0)&&(h[E]=nt(k,i)):G<=i&&(n.expiredLanes|=k),g&=~k}}function Tt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function yn(){var n=Nt;return Nt<<=1,(Nt&4194240)===0&&(Nt=64),n}function di(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function $t(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-He(i),n[i]=a}function Zi(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-He(a),g=1<<h;i[h]=0,c[h]=-1,n[h]=-1,a&=~g}}function Ft(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-He(a),h=1<<c;h&i|n[c]&i&&(n[c]|=i),a&=~h}}var ht=0;function qt(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var un,pn,xr,fi,$a,Qs=!1,Ss=[],Si=null,Di=null,Li=null,Wr=new Map,Bn=new Map,Mi=[],Yo="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ka(n,i){switch(n){case"focusin":case"focusout":Si=null;break;case"dragenter":case"dragleave":Di=null;break;case"mouseover":case"mouseout":Li=null;break;case"pointerover":case"pointerout":Wr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bn.delete(i.pointerId)}}function Xr(n,i,a,c,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[h]},i!==null&&(i=fo(i),i!==null&&pn(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function $o(n,i,a,c,h){switch(i){case"focusin":return Si=Xr(Si,n,i,a,c,h),!0;case"dragenter":return Di=Xr(Di,n,i,a,c,h),!0;case"mouseover":return Li=Xr(Li,n,i,a,c,h),!0;case"pointerover":var g=h.pointerId;return Wr.set(g,Xr(Wr.get(g)||null,n,i,a,c,h)),!0;case"gotpointercapture":return g=h.pointerId,Bn.set(g,Xr(Bn.get(g)||null,n,i,a,c,h)),!0}return!1}function Js(n){var i=bs(n.target);if(i!==null){var a=ei(i);if(a!==null){if(i=a.tag,i===13){if(i=pr(a),i!==null){n.blockedOn=i,$a(n.priority,function(){xr(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Qi(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Za(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);ut=c,a.target.dispatchEvent(c),ut=null}else return i=fo(a),i!==null&&pn(i),n.blockedOn=a,!1;i.shift()}return!0}function Ji(n,i,a){Qi(n)&&a.delete(i)}function Dc(){Qs=!1,Si!==null&&Qi(Si)&&(Si=null),Di!==null&&Qi(Di)&&(Di=null),Li!==null&&Qi(Li)&&(Li=null),Wr.forEach(Ji),Bn.forEach(Ji)}function Ms(n,i){n.blockedOn===i&&(n.blockedOn=null,Qs||(Qs=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Dc)))}function vr(n){function i(h){return Ms(h,n)}if(0<Ss.length){Ms(Ss[0],n);for(var a=1;a<Ss.length;a++){var c=Ss[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Si!==null&&Ms(Si,n),Di!==null&&Ms(Di,n),Li!==null&&Ms(Li,n),Wr.forEach(i),Bn.forEach(i),a=0;a<Mi.length;a++)c=Mi[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Mi.length&&(a=Mi[0],a.blockedOn===null);)Js(a),a.blockedOn===null&&Mi.shift()}var hi=P.ReactCurrentBatchConfig,ea=!0;function Lc(n,i,a,c){var h=ht,g=hi.transition;hi.transition=null;try{ht=1,ws(n,i,a,c)}finally{ht=h,hi.transition=g}}function Ko(n,i,a,c){var h=ht,g=hi.transition;hi.transition=null;try{ht=4,ws(n,i,a,c)}finally{ht=h,hi.transition=g}}function ws(n,i,a,c){if(ea){var h=Za(n,i,a,c);if(h===null)Xc(n,i,c,ta,a),Ka(n,c);else if($o(h,n,i,a,c))c.stopPropagation();else if(Ka(n,c),i&4&&-1<Yo.indexOf(n)){for(;h!==null;){var g=fo(h);if(g!==null&&un(g),g=Za(n,i,a,c),g===null&&Xc(n,i,c,ta,a),g===h)break;h=g}h!==null&&c.stopPropagation()}else Xc(n,i,c,null,a)}}var ta=null;function Za(n,i,a,c){if(ta=null,n=H(c),n=bs(n),n!==null)if(i=ei(n),i===null)n=null;else if(a=i.tag,a===13){if(n=pr(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ta=n,null}function Qa(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(N()){case Y:return 1;case ue:return 4;case ae:case J:return 16;case De:return 536870912;default:return 16}default:return 16}}var wi=null,Ja=null,na=null;function eo(){if(na)return na;var n,i=Ja,a=i.length,c,h="value"in wi?wi.value:wi.textContent,g=h.length;for(n=0;n<a&&i[n]===h[n];n++);var E=a-n;for(c=1;c<=E&&i[a-c]===h[g-c];c++);return na=h.slice(n,1<c?1-c:void 0)}function _r(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ii(){return!0}function to(){return!1}function zn(n){function i(a,c,h,g,E){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var k in n)n.hasOwnProperty(k)&&(a=n[k],this[k]=a?a(g):g[k]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Ii:to,this.isPropagationStopped=to,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ii)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ii)},persist:function(){},isPersistent:Ii}),i}var yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ia=zn(yr),qr=oe({},yr,{view:0,detail:0}),Zo=zn(qr),Ct,lt,Kt,jn=oe({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Kt&&(Kt&&n.type==="mousemove"?(Ct=n.screenX-Kt.screenX,lt=n.screenY-Kt.screenY):lt=Ct=0,Kt=n),Ct)},movementY:function(n){return"movementY"in n?n.movementY:lt}}),$n=zn(jn),et=oe({},jn,{dataTransfer:0}),Ui=zn(et),Sn=oe({},qr,{relatedTarget:0}),Ic=zn(Sn),Ug=oe({},yr,{animationName:0,elapsedTime:0,pseudoElement:0}),Og=zn(Ug),Fg=oe({},yr,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),kg=zn(Fg),Bg=oe({},yr,{data:0}),hh=zn(Bg),zg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Vg[n])?!!i[n]:!1}function Uc(){return Gg}var Hg=oe({},qr,{key:function(n){if(n.key){var i=zg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=_r(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?jg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uc,charCode:function(n){return n.type==="keypress"?_r(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?_r(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Wg=zn(Hg),Xg=oe({},jn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ph=zn(Xg),qg=oe({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uc}),Yg=zn(qg),$g=oe({},yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kg=zn($g),Zg=oe({},jn,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Qg=zn(Zg),Jg=[9,13,27,32],Oc=f&&"CompositionEvent"in window,no=null;f&&"documentMode"in document&&(no=document.documentMode);var ex=f&&"TextEvent"in window&&!no,mh=f&&(!Oc||no&&8<no&&11>=no),gh=" ",xh=!1;function vh(n,i){switch(n){case"keyup":return Jg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _h(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ra=!1;function tx(n,i){switch(n){case"compositionend":return _h(i);case"keypress":return i.which!==32?null:(xh=!0,gh);case"textInput":return n=i.data,n===gh&&xh?null:n;default:return null}}function nx(n,i){if(ra)return n==="compositionend"||!Oc&&vh(n,i)?(n=eo(),na=Ja=wi=null,ra=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return mh&&i.locale!=="ko"?null:i.data;default:return null}}var ix={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!ix[n.type]:i==="textarea"}function Sh(n,i,a,c){me(c),i=nl(i,"onChange"),0<i.length&&(a=new ia("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var io=null,ro=null;function rx(n){Bh(n,0)}function Qo(n){var i=ca(n);if(Jt(i))return n}function sx(n,i){if(n==="change")return i}var Mh=!1;if(f){var Fc;if(f){var kc="oninput"in document;if(!kc){var wh=document.createElement("div");wh.setAttribute("oninput","return;"),kc=typeof wh.oninput=="function"}Fc=kc}else Fc=!1;Mh=Fc&&(!document.documentMode||9<document.documentMode)}function bh(){io&&(io.detachEvent("onpropertychange",Eh),ro=io=null)}function Eh(n){if(n.propertyName==="value"&&Qo(ro)){var i=[];Sh(i,ro,n,H(n)),Vt(rx,i)}}function ax(n,i,a){n==="focusin"?(bh(),io=i,ro=a,io.attachEvent("onpropertychange",Eh)):n==="focusout"&&bh()}function ox(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Qo(ro)}function lx(n,i){if(n==="click")return Qo(i)}function cx(n,i){if(n==="input"||n==="change")return Qo(i)}function ux(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Oi=typeof Object.is=="function"?Object.is:ux;function so(n,i){if(Oi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!p.call(i,h)||!Oi(n[h],i[h]))return!1}return!0}function Th(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ch(n,i){var a=Th(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Th(a)}}function Ah(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Ah(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Rh(){for(var n=window,i=_t();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=_t(n.document)}return i}function Bc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function dx(n){var i=Rh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Ah(a.ownerDocument.documentElement,a)){if(c!==null&&Bc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,g=Math.min(c.start,h);c=c.end===void 0?g:Math.min(c.end,h),!n.extend&&g>c&&(h=c,c=g,g=h),h=Ch(a,g);var E=Ch(a,c);h&&E&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var fx=f&&"documentMode"in document&&11>=document.documentMode,sa=null,zc=null,ao=null,jc=!1;function Nh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;jc||sa==null||sa!==_t(c)||(c=sa,"selectionStart"in c&&Bc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ao&&so(ao,c)||(ao=c,c=nl(zc,"onSelect"),0<c.length&&(i=new ia("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=sa)))}function Jo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var aa={animationend:Jo("Animation","AnimationEnd"),animationiteration:Jo("Animation","AnimationIteration"),animationstart:Jo("Animation","AnimationStart"),transitionend:Jo("Transition","TransitionEnd")},Vc={},Ph={};f&&(Ph=document.createElement("div").style,"AnimationEvent"in window||(delete aa.animationend.animation,delete aa.animationiteration.animation,delete aa.animationstart.animation),"TransitionEvent"in window||delete aa.transitionend.transition);function el(n){if(Vc[n])return Vc[n];if(!aa[n])return n;var i=aa[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Ph)return Vc[n]=i[a];return n}var Dh=el("animationend"),Lh=el("animationiteration"),Ih=el("animationstart"),Uh=el("transitionend"),Oh=new Map,Fh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yr(n,i){Oh.set(n,i),l(i,[n])}for(var Gc=0;Gc<Fh.length;Gc++){var Hc=Fh[Gc],hx=Hc.toLowerCase(),px=Hc[0].toUpperCase()+Hc.slice(1);Yr(hx,"on"+px)}Yr(Dh,"onAnimationEnd"),Yr(Lh,"onAnimationIteration"),Yr(Ih,"onAnimationStart"),Yr("dblclick","onDoubleClick"),Yr("focusin","onFocus"),Yr("focusout","onBlur"),Yr(Uh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mx=new Set("cancel close invalid load scroll toggle".split(" ").concat(oo));function kh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,$s(c,i,void 0,n),n.currentTarget=null}function Bh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],h=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var E=c.length-1;0<=E;E--){var k=c[E],G=k.instance,de=k.currentTarget;if(k=k.listener,G!==g&&h.isPropagationStopped())break e;kh(h,k,de),g=G}else for(E=0;E<c.length;E++){if(k=c[E],G=k.instance,de=k.currentTarget,k=k.listener,G!==g&&h.isPropagationStopped())break e;kh(h,k,de),g=G}}}if(Ki)throw n=ui,Ki=!1,ui=null,n}function tn(n,i){var a=i[Qc];a===void 0&&(a=i[Qc]=new Set);var c=n+"__bubble";a.has(c)||(zh(i,n,2,!1),a.add(c))}function Wc(n,i,a){var c=0;i&&(c|=4),zh(a,n,c,i)}var tl="_reactListening"+Math.random().toString(36).slice(2);function lo(n){if(!n[tl]){n[tl]=!0,r.forEach(function(a){a!=="selectionchange"&&(mx.has(a)||Wc(a,!1,n),Wc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[tl]||(i[tl]=!0,Wc("selectionchange",!1,i))}}function zh(n,i,a,c){switch(Qa(i)){case 1:var h=Lc;break;case 4:h=Ko;break;default:h=ws}a=h.bind(null,i,a,n),h=void 0,!hn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function Xc(n,i,a,c,h){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var k=c.stateNode.containerInfo;if(k===h||k.nodeType===8&&k.parentNode===h)break;if(E===4)for(E=c.return;E!==null;){var G=E.tag;if((G===3||G===4)&&(G=E.stateNode.containerInfo,G===h||G.nodeType===8&&G.parentNode===h))return;E=E.return}for(;k!==null;){if(E=bs(k),E===null)return;if(G=E.tag,G===5||G===6){c=g=E;continue e}k=k.parentNode}}c=c.return}Vt(function(){var de=g,Me=H(a),we=[];e:{var _e=Oh.get(n);if(_e!==void 0){var Xe=ia,Ze=n;switch(n){case"keypress":if(_r(a)===0)break e;case"keydown":case"keyup":Xe=Wg;break;case"focusin":Ze="focus",Xe=Ic;break;case"focusout":Ze="blur",Xe=Ic;break;case"beforeblur":case"afterblur":Xe=Ic;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Xe=$n;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Xe=Ui;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Xe=Yg;break;case Dh:case Lh:case Ih:Xe=Og;break;case Uh:Xe=Kg;break;case"scroll":Xe=Zo;break;case"wheel":Xe=Qg;break;case"copy":case"cut":case"paste":Xe=kg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Xe=ph}var Qe=(i&4)!==0,mn=!Qe&&n==="scroll",ee=Qe?_e!==null?_e+"Capture":null:_e;Qe=[];for(var W=de,ie;W!==null;){ie=W;var Te=ie.stateNode;if(ie.tag===5&&Te!==null&&(ie=Te,ee!==null&&(Te=Ht(W,ee),Te!=null&&Qe.push(co(W,Te,ie)))),mn)break;W=W.return}0<Qe.length&&(_e=new Xe(_e,Ze,null,a,Me),we.push({event:_e,listeners:Qe}))}}if((i&7)===0){e:{if(_e=n==="mouseover"||n==="pointerover",Xe=n==="mouseout"||n==="pointerout",_e&&a!==ut&&(Ze=a.relatedTarget||a.fromElement)&&(bs(Ze)||Ze[Sr]))break e;if((Xe||_e)&&(_e=Me.window===Me?Me:(_e=Me.ownerDocument)?_e.defaultView||_e.parentWindow:window,Xe?(Ze=a.relatedTarget||a.toElement,Xe=de,Ze=Ze?bs(Ze):null,Ze!==null&&(mn=ei(Ze),Ze!==mn||Ze.tag!==5&&Ze.tag!==6)&&(Ze=null)):(Xe=null,Ze=de),Xe!==Ze)){if(Qe=$n,Te="onMouseLeave",ee="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(Qe=ph,Te="onPointerLeave",ee="onPointerEnter",W="pointer"),mn=Xe==null?_e:ca(Xe),ie=Ze==null?_e:ca(Ze),_e=new Qe(Te,W+"leave",Xe,a,Me),_e.target=mn,_e.relatedTarget=ie,Te=null,bs(Me)===de&&(Qe=new Qe(ee,W+"enter",Ze,a,Me),Qe.target=ie,Qe.relatedTarget=mn,Te=Qe),mn=Te,Xe&&Ze)t:{for(Qe=Xe,ee=Ze,W=0,ie=Qe;ie;ie=oa(ie))W++;for(ie=0,Te=ee;Te;Te=oa(Te))ie++;for(;0<W-ie;)Qe=oa(Qe),W--;for(;0<ie-W;)ee=oa(ee),ie--;for(;W--;){if(Qe===ee||ee!==null&&Qe===ee.alternate)break t;Qe=oa(Qe),ee=oa(ee)}Qe=null}else Qe=null;Xe!==null&&jh(we,_e,Xe,Qe,!1),Ze!==null&&mn!==null&&jh(we,mn,Ze,Qe,!0)}}e:{if(_e=de?ca(de):window,Xe=_e.nodeName&&_e.nodeName.toLowerCase(),Xe==="select"||Xe==="input"&&_e.type==="file")var Je=sx;else if(yh(_e))if(Mh)Je=cx;else{Je=ox;var at=ax}else(Xe=_e.nodeName)&&Xe.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(Je=lx);if(Je&&(Je=Je(n,de))){Sh(we,Je,a,Me);break e}at&&at(n,_e,de),n==="focusout"&&(at=_e._wrapperState)&&at.controlled&&_e.type==="number"&&Yt(_e,"number",_e.value)}switch(at=de?ca(de):window,n){case"focusin":(yh(at)||at.contentEditable==="true")&&(sa=at,zc=de,ao=null);break;case"focusout":ao=zc=sa=null;break;case"mousedown":jc=!0;break;case"contextmenu":case"mouseup":case"dragend":jc=!1,Nh(we,a,Me);break;case"selectionchange":if(fx)break;case"keydown":case"keyup":Nh(we,a,Me)}var ot;if(Oc)e:{switch(n){case"compositionstart":var mt="onCompositionStart";break e;case"compositionend":mt="onCompositionEnd";break e;case"compositionupdate":mt="onCompositionUpdate";break e}mt=void 0}else ra?vh(n,a)&&(mt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(mt="onCompositionStart");mt&&(mh&&a.locale!=="ko"&&(ra||mt!=="onCompositionStart"?mt==="onCompositionEnd"&&ra&&(ot=eo()):(wi=Me,Ja="value"in wi?wi.value:wi.textContent,ra=!0)),at=nl(de,mt),0<at.length&&(mt=new hh(mt,n,null,a,Me),we.push({event:mt,listeners:at}),ot?mt.data=ot:(ot=_h(a),ot!==null&&(mt.data=ot)))),(ot=ex?tx(n,a):nx(n,a))&&(de=nl(de,"onBeforeInput"),0<de.length&&(Me=new hh("onBeforeInput","beforeinput",null,a,Me),we.push({event:Me,listeners:de}),Me.data=ot))}Bh(we,i)})}function co(n,i,a){return{instance:n,listener:i,currentTarget:a}}function nl(n,i){for(var a=i+"Capture",c=[];n!==null;){var h=n,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=Ht(n,a),g!=null&&c.unshift(co(n,g,h)),g=Ht(n,i),g!=null&&c.push(co(n,g,h))),n=n.return}return c}function oa(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function jh(n,i,a,c,h){for(var g=i._reactName,E=[];a!==null&&a!==c;){var k=a,G=k.alternate,de=k.stateNode;if(G!==null&&G===c)break;k.tag===5&&de!==null&&(k=de,h?(G=Ht(a,g),G!=null&&E.unshift(co(a,G,k))):h||(G=Ht(a,g),G!=null&&E.push(co(a,G,k)))),a=a.return}E.length!==0&&n.push({event:i,listeners:E})}var gx=/\r\n?/g,xx=/\u0000|\uFFFD/g;function Vh(n){return(typeof n=="string"?n:""+n).replace(gx,`
`).replace(xx,"")}function il(n,i,a){if(i=Vh(i),Vh(n)!==i&&a)throw Error(t(425))}function rl(){}var qc=null,Yc=null;function $c(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Kc=typeof setTimeout=="function"?setTimeout:void 0,vx=typeof clearTimeout=="function"?clearTimeout:void 0,Gh=typeof Promise=="function"?Promise:void 0,_x=typeof queueMicrotask=="function"?queueMicrotask:typeof Gh<"u"?function(n){return Gh.resolve(null).then(n).catch(yx)}:Kc;function yx(n){setTimeout(function(){throw n})}function Zc(n,i){var a=i,c=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){n.removeChild(h),vr(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);vr(i)}function $r(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Hh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var la=Math.random().toString(36).slice(2),er="__reactFiber$"+la,uo="__reactProps$"+la,Sr="__reactContainer$"+la,Qc="__reactEvents$"+la,Sx="__reactListeners$"+la,Mx="__reactHandles$"+la;function bs(n){var i=n[er];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Sr]||a[er]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Hh(n);n!==null;){if(a=n[er])return a;n=Hh(n)}return i}n=a,a=n.parentNode}return null}function fo(n){return n=n[er]||n[Sr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ca(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function sl(n){return n[uo]||null}var Jc=[],ua=-1;function Kr(n){return{current:n}}function nn(n){0>ua||(n.current=Jc[ua],Jc[ua]=null,ua--)}function en(n,i){ua++,Jc[ua]=n.current,n.current=i}var Zr={},Vn=Kr(Zr),ti=Kr(!1),Es=Zr;function da(n,i){var a=n.type.contextTypes;if(!a)return Zr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in a)h[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function ni(n){return n=n.childContextTypes,n!=null}function al(){nn(ti),nn(Vn)}function Wh(n,i,a){if(Vn.current!==Zr)throw Error(t(168));en(Vn,i),en(ti,a)}function Xh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,fe(n)||"Unknown",h));return oe({},a,c)}function ol(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Zr,Es=Vn.current,en(Vn,n),en(ti,ti.current),!0}function qh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Xh(n,i,Es),c.__reactInternalMemoizedMergedChildContext=n,nn(ti),nn(Vn),en(Vn,n)):nn(ti),en(ti,a)}var Mr=null,ll=!1,eu=!1;function Yh(n){Mr===null?Mr=[n]:Mr.push(n)}function wx(n){ll=!0,Yh(n)}function Qr(){if(!eu&&Mr!==null){eu=!0;var n=0,i=ht;try{var a=Mr;for(ht=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Mr=null,ll=!1}catch(h){throw Mr!==null&&(Mr=Mr.slice(n+1)),Zs(Y,Qr),h}finally{ht=i,eu=!1}}return null}var fa=[],ha=0,cl=null,ul=0,bi=[],Ei=0,Ts=null,wr=1,br="";function Cs(n,i){fa[ha++]=ul,fa[ha++]=cl,cl=n,ul=i}function $h(n,i,a){bi[Ei++]=wr,bi[Ei++]=br,bi[Ei++]=Ts,Ts=n;var c=wr;n=br;var h=32-He(c)-1;c&=~(1<<h),a+=1;var g=32-He(i)+h;if(30<g){var E=h-h%5;g=(c&(1<<E)-1).toString(32),c>>=E,h-=E,wr=1<<32-He(i)+h|a<<h|c,br=g+n}else wr=1<<g|a<<h|c,br=n}function tu(n){n.return!==null&&(Cs(n,1),$h(n,1,0))}function nu(n){for(;n===cl;)cl=fa[--ha],fa[ha]=null,ul=fa[--ha],fa[ha]=null;for(;n===Ts;)Ts=bi[--Ei],bi[Ei]=null,br=bi[--Ei],bi[Ei]=null,wr=bi[--Ei],bi[Ei]=null}var pi=null,mi=null,sn=!1,Fi=null;function Kh(n,i){var a=Ri(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Zh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,pi=n,mi=$r(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,pi=n,mi=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Ts!==null?{id:wr,overflow:br}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Ri(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,pi=n,mi=null,!0):!1;default:return!1}}function iu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ru(n){if(sn){var i=mi;if(i){var a=i;if(!Zh(n,i)){if(iu(n))throw Error(t(418));i=$r(a.nextSibling);var c=pi;i&&Zh(n,i)?Kh(c,a):(n.flags=n.flags&-4097|2,sn=!1,pi=n)}}else{if(iu(n))throw Error(t(418));n.flags=n.flags&-4097|2,sn=!1,pi=n}}}function Qh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;pi=n}function dl(n){if(n!==pi)return!1;if(!sn)return Qh(n),sn=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!$c(n.type,n.memoizedProps)),i&&(i=mi)){if(iu(n))throw Jh(),Error(t(418));for(;i;)Kh(n,i),i=$r(i.nextSibling)}if(Qh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){mi=$r(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}mi=null}}else mi=pi?$r(n.stateNode.nextSibling):null;return!0}function Jh(){for(var n=mi;n;)n=$r(n.nextSibling)}function pa(){mi=pi=null,sn=!1}function su(n){Fi===null?Fi=[n]:Fi.push(n)}var bx=P.ReactCurrentBatchConfig;function ho(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var h=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(E){var k=h.refs;E===null?delete k[g]:k[g]=E},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function fl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function ep(n){var i=n._init;return i(n._payload)}function tp(n){function i(ee,W){if(n){var ie=ee.deletions;ie===null?(ee.deletions=[W],ee.flags|=16):ie.push(W)}}function a(ee,W){if(!n)return null;for(;W!==null;)i(ee,W),W=W.sibling;return null}function c(ee,W){for(ee=new Map;W!==null;)W.key!==null?ee.set(W.key,W):ee.set(W.index,W),W=W.sibling;return ee}function h(ee,W){return ee=as(ee,W),ee.index=0,ee.sibling=null,ee}function g(ee,W,ie){return ee.index=ie,n?(ie=ee.alternate,ie!==null?(ie=ie.index,ie<W?(ee.flags|=2,W):ie):(ee.flags|=2,W)):(ee.flags|=1048576,W)}function E(ee){return n&&ee.alternate===null&&(ee.flags|=2),ee}function k(ee,W,ie,Te){return W===null||W.tag!==6?(W=Ku(ie,ee.mode,Te),W.return=ee,W):(W=h(W,ie),W.return=ee,W)}function G(ee,W,ie,Te){var Je=ie.type;return Je===O?Me(ee,W,ie.props.children,Te,ie.key):W!==null&&(W.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===te&&ep(Je)===W.type)?(Te=h(W,ie.props),Te.ref=ho(ee,W,ie),Te.return=ee,Te):(Te=Ol(ie.type,ie.key,ie.props,null,ee.mode,Te),Te.ref=ho(ee,W,ie),Te.return=ee,Te)}function de(ee,W,ie,Te){return W===null||W.tag!==4||W.stateNode.containerInfo!==ie.containerInfo||W.stateNode.implementation!==ie.implementation?(W=Zu(ie,ee.mode,Te),W.return=ee,W):(W=h(W,ie.children||[]),W.return=ee,W)}function Me(ee,W,ie,Te,Je){return W===null||W.tag!==7?(W=Us(ie,ee.mode,Te,Je),W.return=ee,W):(W=h(W,ie),W.return=ee,W)}function we(ee,W,ie){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Ku(""+W,ee.mode,ie),W.return=ee,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case U:return ie=Ol(W.type,W.key,W.props,null,ee.mode,ie),ie.ref=ho(ee,null,W),ie.return=ee,ie;case L:return W=Zu(W,ee.mode,ie),W.return=ee,W;case te:var Te=W._init;return we(ee,Te(W._payload),ie)}if(St(W)||pe(W))return W=Us(W,ee.mode,ie,null),W.return=ee,W;fl(ee,W)}return null}function _e(ee,W,ie,Te){var Je=W!==null?W.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return Je!==null?null:k(ee,W,""+ie,Te);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case U:return ie.key===Je?G(ee,W,ie,Te):null;case L:return ie.key===Je?de(ee,W,ie,Te):null;case te:return Je=ie._init,_e(ee,W,Je(ie._payload),Te)}if(St(ie)||pe(ie))return Je!==null?null:Me(ee,W,ie,Te,null);fl(ee,ie)}return null}function Xe(ee,W,ie,Te,Je){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return ee=ee.get(ie)||null,k(W,ee,""+Te,Je);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case U:return ee=ee.get(Te.key===null?ie:Te.key)||null,G(W,ee,Te,Je);case L:return ee=ee.get(Te.key===null?ie:Te.key)||null,de(W,ee,Te,Je);case te:var at=Te._init;return Xe(ee,W,ie,at(Te._payload),Je)}if(St(Te)||pe(Te))return ee=ee.get(ie)||null,Me(W,ee,Te,Je,null);fl(W,Te)}return null}function Ze(ee,W,ie,Te){for(var Je=null,at=null,ot=W,mt=W=0,Rn=null;ot!==null&&mt<ie.length;mt++){ot.index>mt?(Rn=ot,ot=null):Rn=ot.sibling;var jt=_e(ee,ot,ie[mt],Te);if(jt===null){ot===null&&(ot=Rn);break}n&&ot&&jt.alternate===null&&i(ee,ot),W=g(jt,W,mt),at===null?Je=jt:at.sibling=jt,at=jt,ot=Rn}if(mt===ie.length)return a(ee,ot),sn&&Cs(ee,mt),Je;if(ot===null){for(;mt<ie.length;mt++)ot=we(ee,ie[mt],Te),ot!==null&&(W=g(ot,W,mt),at===null?Je=ot:at.sibling=ot,at=ot);return sn&&Cs(ee,mt),Je}for(ot=c(ee,ot);mt<ie.length;mt++)Rn=Xe(ot,ee,mt,ie[mt],Te),Rn!==null&&(n&&Rn.alternate!==null&&ot.delete(Rn.key===null?mt:Rn.key),W=g(Rn,W,mt),at===null?Je=Rn:at.sibling=Rn,at=Rn);return n&&ot.forEach(function(os){return i(ee,os)}),sn&&Cs(ee,mt),Je}function Qe(ee,W,ie,Te){var Je=pe(ie);if(typeof Je!="function")throw Error(t(150));if(ie=Je.call(ie),ie==null)throw Error(t(151));for(var at=Je=null,ot=W,mt=W=0,Rn=null,jt=ie.next();ot!==null&&!jt.done;mt++,jt=ie.next()){ot.index>mt?(Rn=ot,ot=null):Rn=ot.sibling;var os=_e(ee,ot,jt.value,Te);if(os===null){ot===null&&(ot=Rn);break}n&&ot&&os.alternate===null&&i(ee,ot),W=g(os,W,mt),at===null?Je=os:at.sibling=os,at=os,ot=Rn}if(jt.done)return a(ee,ot),sn&&Cs(ee,mt),Je;if(ot===null){for(;!jt.done;mt++,jt=ie.next())jt=we(ee,jt.value,Te),jt!==null&&(W=g(jt,W,mt),at===null?Je=jt:at.sibling=jt,at=jt);return sn&&Cs(ee,mt),Je}for(ot=c(ee,ot);!jt.done;mt++,jt=ie.next())jt=Xe(ot,ee,mt,jt.value,Te),jt!==null&&(n&&jt.alternate!==null&&ot.delete(jt.key===null?mt:jt.key),W=g(jt,W,mt),at===null?Je=jt:at.sibling=jt,at=jt);return n&&ot.forEach(function(iv){return i(ee,iv)}),sn&&Cs(ee,mt),Je}function mn(ee,W,ie,Te){if(typeof ie=="object"&&ie!==null&&ie.type===O&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case U:e:{for(var Je=ie.key,at=W;at!==null;){if(at.key===Je){if(Je=ie.type,Je===O){if(at.tag===7){a(ee,at.sibling),W=h(at,ie.props.children),W.return=ee,ee=W;break e}}else if(at.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===te&&ep(Je)===at.type){a(ee,at.sibling),W=h(at,ie.props),W.ref=ho(ee,at,ie),W.return=ee,ee=W;break e}a(ee,at);break}else i(ee,at);at=at.sibling}ie.type===O?(W=Us(ie.props.children,ee.mode,Te,ie.key),W.return=ee,ee=W):(Te=Ol(ie.type,ie.key,ie.props,null,ee.mode,Te),Te.ref=ho(ee,W,ie),Te.return=ee,ee=Te)}return E(ee);case L:e:{for(at=ie.key;W!==null;){if(W.key===at)if(W.tag===4&&W.stateNode.containerInfo===ie.containerInfo&&W.stateNode.implementation===ie.implementation){a(ee,W.sibling),W=h(W,ie.children||[]),W.return=ee,ee=W;break e}else{a(ee,W);break}else i(ee,W);W=W.sibling}W=Zu(ie,ee.mode,Te),W.return=ee,ee=W}return E(ee);case te:return at=ie._init,mn(ee,W,at(ie._payload),Te)}if(St(ie))return Ze(ee,W,ie,Te);if(pe(ie))return Qe(ee,W,ie,Te);fl(ee,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,W!==null&&W.tag===6?(a(ee,W.sibling),W=h(W,ie),W.return=ee,ee=W):(a(ee,W),W=Ku(ie,ee.mode,Te),W.return=ee,ee=W),E(ee)):a(ee,W)}return mn}var ma=tp(!0),np=tp(!1),hl=Kr(null),pl=null,ga=null,au=null;function ou(){au=ga=pl=null}function lu(n){var i=hl.current;nn(hl),n._currentValue=i}function cu(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function xa(n,i){pl=n,au=ga=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(ii=!0),n.firstContext=null)}function Ti(n){var i=n._currentValue;if(au!==n)if(n={context:n,memoizedValue:i,next:null},ga===null){if(pl===null)throw Error(t(308));ga=n,pl.dependencies={lanes:0,firstContext:n}}else ga=ga.next=n;return i}var As=null;function uu(n){As===null?As=[n]:As.push(n)}function ip(n,i,a,c){var h=i.interleaved;return h===null?(a.next=a,uu(i)):(a.next=h.next,h.next=a),i.interleaved=a,Er(n,c)}function Er(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Jr=!1;function du(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Tr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function es(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(kt&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,Er(n,a)}return h=c.interleaved,h===null?(i.next=i,uu(c)):(i.next=h.next,h.next=i),c.interleaved=i,Er(n,a)}function ml(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Ft(n,a)}}function sp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?h=g=E:g=g.next=E,a=a.next}while(a!==null);g===null?h=g=i:g=g.next=i}else h=g=i;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function gl(n,i,a,c){var h=n.updateQueue;Jr=!1;var g=h.firstBaseUpdate,E=h.lastBaseUpdate,k=h.shared.pending;if(k!==null){h.shared.pending=null;var G=k,de=G.next;G.next=null,E===null?g=de:E.next=de,E=G;var Me=n.alternate;Me!==null&&(Me=Me.updateQueue,k=Me.lastBaseUpdate,k!==E&&(k===null?Me.firstBaseUpdate=de:k.next=de,Me.lastBaseUpdate=G))}if(g!==null){var we=h.baseState;E=0,Me=de=G=null,k=g;do{var _e=k.lane,Xe=k.eventTime;if((c&_e)===_e){Me!==null&&(Me=Me.next={eventTime:Xe,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var Ze=n,Qe=k;switch(_e=i,Xe=a,Qe.tag){case 1:if(Ze=Qe.payload,typeof Ze=="function"){we=Ze.call(Xe,we,_e);break e}we=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=Qe.payload,_e=typeof Ze=="function"?Ze.call(Xe,we,_e):Ze,_e==null)break e;we=oe({},we,_e);break e;case 2:Jr=!0}}k.callback!==null&&k.lane!==0&&(n.flags|=64,_e=h.effects,_e===null?h.effects=[k]:_e.push(k))}else Xe={eventTime:Xe,lane:_e,tag:k.tag,payload:k.payload,callback:k.callback,next:null},Me===null?(de=Me=Xe,G=we):Me=Me.next=Xe,E|=_e;if(k=k.next,k===null){if(k=h.shared.pending,k===null)break;_e=k,k=_e.next,_e.next=null,h.lastBaseUpdate=_e,h.shared.pending=null}}while(!0);if(Me===null&&(G=we),h.baseState=G,h.firstBaseUpdate=de,h.lastBaseUpdate=Me,i=h.shared.interleaved,i!==null){h=i;do E|=h.lane,h=h.next;while(h!==i)}else g===null&&(h.shared.lanes=0);Ps|=E,n.lanes=E,n.memoizedState=we}}function ap(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var po={},tr=Kr(po),mo=Kr(po),go=Kr(po);function Rs(n){if(n===po)throw Error(t(174));return n}function fu(n,i){switch(en(go,i),en(mo,n),en(tr,po),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:he(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=he(i,n)}nn(tr),en(tr,i)}function va(){nn(tr),nn(mo),nn(go)}function op(n){Rs(go.current);var i=Rs(tr.current),a=he(i,n.type);i!==a&&(en(mo,n),en(tr,a))}function hu(n){mo.current===n&&(nn(tr),nn(mo))}var on=Kr(0);function xl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var pu=[];function mu(){for(var n=0;n<pu.length;n++)pu[n]._workInProgressVersionPrimary=null;pu.length=0}var vl=P.ReactCurrentDispatcher,gu=P.ReactCurrentBatchConfig,Ns=0,ln=null,Mn=null,Cn=null,_l=!1,xo=!1,vo=0,Ex=0;function Gn(){throw Error(t(321))}function xu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Oi(n[a],i[a]))return!1;return!0}function vu(n,i,a,c,h,g){if(Ns=g,ln=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,vl.current=n===null||n.memoizedState===null?Rx:Nx,n=a(c,h),xo){g=0;do{if(xo=!1,vo=0,25<=g)throw Error(t(301));g+=1,Cn=Mn=null,i.updateQueue=null,vl.current=Px,n=a(c,h)}while(xo)}if(vl.current=Ml,i=Mn!==null&&Mn.next!==null,Ns=0,Cn=Mn=ln=null,_l=!1,i)throw Error(t(300));return n}function _u(){var n=vo!==0;return vo=0,n}function nr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Cn===null?ln.memoizedState=Cn=n:Cn=Cn.next=n,Cn}function Ci(){if(Mn===null){var n=ln.alternate;n=n!==null?n.memoizedState:null}else n=Mn.next;var i=Cn===null?ln.memoizedState:Cn.next;if(i!==null)Cn=i,Mn=n;else{if(n===null)throw Error(t(310));Mn=n,n={memoizedState:Mn.memoizedState,baseState:Mn.baseState,baseQueue:Mn.baseQueue,queue:Mn.queue,next:null},Cn===null?ln.memoizedState=Cn=n:Cn=Cn.next=n}return Cn}function _o(n,i){return typeof i=="function"?i(n):i}function yu(n){var i=Ci(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Mn,h=c.baseQueue,g=a.pending;if(g!==null){if(h!==null){var E=h.next;h.next=g.next,g.next=E}c.baseQueue=h=g,a.pending=null}if(h!==null){g=h.next,c=c.baseState;var k=E=null,G=null,de=g;do{var Me=de.lane;if((Ns&Me)===Me)G!==null&&(G=G.next={lane:0,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null}),c=de.hasEagerState?de.eagerState:n(c,de.action);else{var we={lane:Me,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null};G===null?(k=G=we,E=c):G=G.next=we,ln.lanes|=Me,Ps|=Me}de=de.next}while(de!==null&&de!==g);G===null?E=c:G.next=k,Oi(c,i.memoizedState)||(ii=!0),i.memoizedState=c,i.baseState=E,i.baseQueue=G,a.lastRenderedState=c}if(n=a.interleaved,n!==null){h=n;do g=h.lane,ln.lanes|=g,Ps|=g,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Su(n){var i=Ci(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,h=a.pending,g=i.memoizedState;if(h!==null){a.pending=null;var E=h=h.next;do g=n(g,E.action),E=E.next;while(E!==h);Oi(g,i.memoizedState)||(ii=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function lp(){}function cp(n,i){var a=ln,c=Ci(),h=i(),g=!Oi(c.memoizedState,h);if(g&&(c.memoizedState=h,ii=!0),c=c.queue,Mu(fp.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||Cn!==null&&Cn.memoizedState.tag&1){if(a.flags|=2048,yo(9,dp.bind(null,a,c,h,i),void 0,null),An===null)throw Error(t(349));(Ns&30)!==0||up(a,i,h)}return h}function up(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=ln.updateQueue,i===null?(i={lastEffect:null,stores:null},ln.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function dp(n,i,a,c){i.value=a,i.getSnapshot=c,hp(i)&&pp(n)}function fp(n,i,a){return a(function(){hp(i)&&pp(n)})}function hp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Oi(n,a)}catch{return!0}}function pp(n){var i=Er(n,1);i!==null&&ji(i,n,1,-1)}function mp(n){var i=nr();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_o,lastRenderedState:n},i.queue=n,n=n.dispatch=Ax.bind(null,ln,n),[i.memoizedState,n]}function yo(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=ln.updateQueue,i===null?(i={lastEffect:null,stores:null},ln.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function gp(){return Ci().memoizedState}function yl(n,i,a,c){var h=nr();ln.flags|=n,h.memoizedState=yo(1|i,a,void 0,c===void 0?null:c)}function Sl(n,i,a,c){var h=Ci();c=c===void 0?null:c;var g=void 0;if(Mn!==null){var E=Mn.memoizedState;if(g=E.destroy,c!==null&&xu(c,E.deps)){h.memoizedState=yo(i,a,g,c);return}}ln.flags|=n,h.memoizedState=yo(1|i,a,g,c)}function xp(n,i){return yl(8390656,8,n,i)}function Mu(n,i){return Sl(2048,8,n,i)}function vp(n,i){return Sl(4,2,n,i)}function _p(n,i){return Sl(4,4,n,i)}function yp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Sp(n,i,a){return a=a!=null?a.concat([n]):null,Sl(4,4,yp.bind(null,i,n),a)}function wu(){}function Mp(n,i){var a=Ci();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&xu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function wp(n,i){var a=Ci();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&xu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function bp(n,i,a){return(Ns&21)===0?(n.baseState&&(n.baseState=!1,ii=!0),n.memoizedState=a):(Oi(a,i)||(a=yn(),ln.lanes|=a,Ps|=a,n.baseState=!0),i)}function Tx(n,i){var a=ht;ht=a!==0&&4>a?a:4,n(!0);var c=gu.transition;gu.transition={};try{n(!1),i()}finally{ht=a,gu.transition=c}}function Ep(){return Ci().memoizedState}function Cx(n,i,a){var c=rs(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Tp(n))Cp(i,a);else if(a=ip(n,i,a,c),a!==null){var h=Zn();ji(a,n,c,h),Ap(a,i,c)}}function Ax(n,i,a){var c=rs(n),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Tp(n))Cp(i,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var E=i.lastRenderedState,k=g(E,a);if(h.hasEagerState=!0,h.eagerState=k,Oi(k,E)){var G=i.interleaved;G===null?(h.next=h,uu(i)):(h.next=G.next,G.next=h),i.interleaved=h;return}}catch{}finally{}a=ip(n,i,h,c),a!==null&&(h=Zn(),ji(a,n,c,h),Ap(a,i,c))}}function Tp(n){var i=n.alternate;return n===ln||i!==null&&i===ln}function Cp(n,i){xo=_l=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Ap(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Ft(n,a)}}var Ml={readContext:Ti,useCallback:Gn,useContext:Gn,useEffect:Gn,useImperativeHandle:Gn,useInsertionEffect:Gn,useLayoutEffect:Gn,useMemo:Gn,useReducer:Gn,useRef:Gn,useState:Gn,useDebugValue:Gn,useDeferredValue:Gn,useTransition:Gn,useMutableSource:Gn,useSyncExternalStore:Gn,useId:Gn,unstable_isNewReconciler:!1},Rx={readContext:Ti,useCallback:function(n,i){return nr().memoizedState=[n,i===void 0?null:i],n},useContext:Ti,useEffect:xp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,yl(4194308,4,yp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return yl(4194308,4,n,i)},useInsertionEffect:function(n,i){return yl(4,2,n,i)},useMemo:function(n,i){var a=nr();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=nr();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Cx.bind(null,ln,n),[c.memoizedState,n]},useRef:function(n){var i=nr();return n={current:n},i.memoizedState=n},useState:mp,useDebugValue:wu,useDeferredValue:function(n){return nr().memoizedState=n},useTransition:function(){var n=mp(!1),i=n[0];return n=Tx.bind(null,n[1]),nr().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=ln,h=nr();if(sn){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),An===null)throw Error(t(349));(Ns&30)!==0||up(c,i,a)}h.memoizedState=a;var g={value:a,getSnapshot:i};return h.queue=g,xp(fp.bind(null,c,g,n),[n]),c.flags|=2048,yo(9,dp.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=nr(),i=An.identifierPrefix;if(sn){var a=br,c=wr;a=(c&~(1<<32-He(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=vo++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Ex++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Nx={readContext:Ti,useCallback:Mp,useContext:Ti,useEffect:Mu,useImperativeHandle:Sp,useInsertionEffect:vp,useLayoutEffect:_p,useMemo:wp,useReducer:yu,useRef:gp,useState:function(){return yu(_o)},useDebugValue:wu,useDeferredValue:function(n){var i=Ci();return bp(i,Mn.memoizedState,n)},useTransition:function(){var n=yu(_o)[0],i=Ci().memoizedState;return[n,i]},useMutableSource:lp,useSyncExternalStore:cp,useId:Ep,unstable_isNewReconciler:!1},Px={readContext:Ti,useCallback:Mp,useContext:Ti,useEffect:Mu,useImperativeHandle:Sp,useInsertionEffect:vp,useLayoutEffect:_p,useMemo:wp,useReducer:Su,useRef:gp,useState:function(){return Su(_o)},useDebugValue:wu,useDeferredValue:function(n){var i=Ci();return Mn===null?i.memoizedState=n:bp(i,Mn.memoizedState,n)},useTransition:function(){var n=Su(_o)[0],i=Ci().memoizedState;return[n,i]},useMutableSource:lp,useSyncExternalStore:cp,useId:Ep,unstable_isNewReconciler:!1};function ki(n,i){if(n&&n.defaultProps){i=oe({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function bu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:oe({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var wl={isMounted:function(n){return(n=n._reactInternals)?ei(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Zn(),h=rs(n),g=Tr(c,h);g.payload=i,a!=null&&(g.callback=a),i=es(n,g,h),i!==null&&(ji(i,n,h,c),ml(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Zn(),h=rs(n),g=Tr(c,h);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=es(n,g,h),i!==null&&(ji(i,n,h,c),ml(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Zn(),c=rs(n),h=Tr(a,c);h.tag=2,i!=null&&(h.callback=i),i=es(n,h,c),i!==null&&(ji(i,n,c,a),ml(i,n,c))}};function Rp(n,i,a,c,h,g,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,E):i.prototype&&i.prototype.isPureReactComponent?!so(a,c)||!so(h,g):!0}function Np(n,i,a){var c=!1,h=Zr,g=i.contextType;return typeof g=="object"&&g!==null?g=Ti(g):(h=ni(i)?Es:Vn.current,c=i.contextTypes,g=(c=c!=null)?da(n,h):Zr),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=wl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=g),i}function Pp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&wl.enqueueReplaceState(i,i.state,null)}function Eu(n,i,a,c){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},du(n);var g=i.contextType;typeof g=="object"&&g!==null?h.context=Ti(g):(g=ni(i)?Es:Vn.current,h.context=da(n,g)),h.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(bu(n,i,g,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&wl.enqueueReplaceState(h,h.state,null),gl(n,a,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function _a(n,i){try{var a="",c=i;do a+=We(c),c=c.return;while(c);var h=a}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:h,digest:null}}function Tu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Cu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Dx=typeof WeakMap=="function"?WeakMap:Map;function Dp(n,i,a){a=Tr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Nl||(Nl=!0,Vu=c),Cu(n,i)},a}function Lp(n,i,a){a=Tr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;a.payload=function(){return c(h)},a.callback=function(){Cu(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Cu(n,i),typeof c!="function"&&(ns===null?ns=new Set([this]):ns.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function Ip(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Dx;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(a)||(h.add(a),n=Xx.bind(null,n,i,a),i.then(n,n))}function Up(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Op(n,i,a,c,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Tr(-1,1),i.tag=2,es(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var Lx=P.ReactCurrentOwner,ii=!1;function Kn(n,i,a,c){i.child=n===null?np(i,null,a,c):ma(i,n.child,a,c)}function Fp(n,i,a,c,h){a=a.render;var g=i.ref;return xa(i,h),c=vu(n,i,a,c,g,h),a=_u(),n!==null&&!ii?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Cr(n,i,h)):(sn&&a&&tu(i),i.flags|=1,Kn(n,i,c,h),i.child)}function kp(n,i,a,c,h){if(n===null){var g=a.type;return typeof g=="function"&&!$u(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,Bp(n,i,g,c,h)):(n=Ol(a.type,null,c,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&h)===0){var E=g.memoizedProps;if(a=a.compare,a=a!==null?a:so,a(E,c)&&n.ref===i.ref)return Cr(n,i,h)}return i.flags|=1,n=as(g,c),n.ref=i.ref,n.return=i,i.child=n}function Bp(n,i,a,c,h){if(n!==null){var g=n.memoizedProps;if(so(g,c)&&n.ref===i.ref)if(ii=!1,i.pendingProps=c=g,(n.lanes&h)!==0)(n.flags&131072)!==0&&(ii=!0);else return i.lanes=n.lanes,Cr(n,i,h)}return Au(n,i,a,c,h)}function zp(n,i,a){var c=i.pendingProps,h=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},en(Sa,gi),gi|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,en(Sa,gi),gi|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,en(Sa,gi),gi|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,en(Sa,gi),gi|=c;return Kn(n,i,h,a),i.child}function jp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Au(n,i,a,c,h){var g=ni(a)?Es:Vn.current;return g=da(i,g),xa(i,h),a=vu(n,i,a,c,g,h),c=_u(),n!==null&&!ii?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Cr(n,i,h)):(sn&&c&&tu(i),i.flags|=1,Kn(n,i,a,h),i.child)}function Vp(n,i,a,c,h){if(ni(a)){var g=!0;ol(i)}else g=!1;if(xa(i,h),i.stateNode===null)El(n,i),Np(i,a,c),Eu(i,a,c,h),c=!0;else if(n===null){var E=i.stateNode,k=i.memoizedProps;E.props=k;var G=E.context,de=a.contextType;typeof de=="object"&&de!==null?de=Ti(de):(de=ni(a)?Es:Vn.current,de=da(i,de));var Me=a.getDerivedStateFromProps,we=typeof Me=="function"||typeof E.getSnapshotBeforeUpdate=="function";we||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(k!==c||G!==de)&&Pp(i,E,c,de),Jr=!1;var _e=i.memoizedState;E.state=_e,gl(i,c,E,h),G=i.memoizedState,k!==c||_e!==G||ti.current||Jr?(typeof Me=="function"&&(bu(i,a,Me,c),G=i.memoizedState),(k=Jr||Rp(i,a,k,c,_e,G,de))?(we||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=G),E.props=c,E.state=G,E.context=de,c=k):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{E=i.stateNode,rp(n,i),k=i.memoizedProps,de=i.type===i.elementType?k:ki(i.type,k),E.props=de,we=i.pendingProps,_e=E.context,G=a.contextType,typeof G=="object"&&G!==null?G=Ti(G):(G=ni(a)?Es:Vn.current,G=da(i,G));var Xe=a.getDerivedStateFromProps;(Me=typeof Xe=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(k!==we||_e!==G)&&Pp(i,E,c,G),Jr=!1,_e=i.memoizedState,E.state=_e,gl(i,c,E,h);var Ze=i.memoizedState;k!==we||_e!==Ze||ti.current||Jr?(typeof Xe=="function"&&(bu(i,a,Xe,c),Ze=i.memoizedState),(de=Jr||Rp(i,a,de,c,_e,Ze,G)||!1)?(Me||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,Ze,G),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,Ze,G)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||k===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Ze),E.props=c,E.state=Ze,E.context=G,c=de):(typeof E.componentDidUpdate!="function"||k===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),c=!1)}return Ru(n,i,a,c,g,h)}function Ru(n,i,a,c,h,g){jp(n,i);var E=(i.flags&128)!==0;if(!c&&!E)return h&&qh(i,a,!1),Cr(n,i,g);c=i.stateNode,Lx.current=i;var k=E&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&E?(i.child=ma(i,n.child,null,g),i.child=ma(i,null,k,g)):Kn(n,i,k,g),i.memoizedState=c.state,h&&qh(i,a,!0),i.child}function Gp(n){var i=n.stateNode;i.pendingContext?Wh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Wh(n,i.context,!1),fu(n,i.containerInfo)}function Hp(n,i,a,c,h){return pa(),su(h),i.flags|=256,Kn(n,i,a,c),i.child}var Nu={dehydrated:null,treeContext:null,retryLane:0};function Pu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Wp(n,i,a){var c=i.pendingProps,h=on.current,g=!1,E=(i.flags&128)!==0,k;if((k=E)||(k=n!==null&&n.memoizedState===null?!1:(h&2)!==0),k?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),en(on,h&1),n===null)return ru(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=c.children,n=c.fallback,g?(c=i.mode,g=i.child,E={mode:"hidden",children:E},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=E):g=Fl(E,c,0,null),n=Us(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=Pu(a),i.memoizedState=Nu,n):Du(i,E));if(h=n.memoizedState,h!==null&&(k=h.dehydrated,k!==null))return Ix(n,i,E,c,k,h,a);if(g){g=c.fallback,E=i.mode,h=n.child,k=h.sibling;var G={mode:"hidden",children:c.children};return(E&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=G,i.deletions=null):(c=as(h,G),c.subtreeFlags=h.subtreeFlags&14680064),k!==null?g=as(k,g):(g=Us(g,E,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,E=n.child.memoizedState,E=E===null?Pu(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},g.memoizedState=E,g.childLanes=n.childLanes&~a,i.memoizedState=Nu,c}return g=n.child,n=g.sibling,c=as(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Du(n,i){return i=Fl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function bl(n,i,a,c){return c!==null&&su(c),ma(i,n.child,null,a),n=Du(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Ix(n,i,a,c,h,g,E){if(a)return i.flags&256?(i.flags&=-257,c=Tu(Error(t(422))),bl(n,i,E,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,h=i.mode,c=Fl({mode:"visible",children:c.children},h,0,null),g=Us(g,h,E,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&ma(i,n.child,null,E),i.child.memoizedState=Pu(E),i.memoizedState=Nu,g);if((i.mode&1)===0)return bl(n,i,E,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var k=c.dgst;return c=k,g=Error(t(419)),c=Tu(g,c,void 0),bl(n,i,E,c)}if(k=(E&n.childLanes)!==0,ii||k){if(c=An,c!==null){switch(E&-E){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|E))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,Er(n,h),ji(c,n,h,-1))}return Yu(),c=Tu(Error(t(421))),bl(n,i,E,c)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=qx.bind(null,n),h._reactRetry=i,null):(n=g.treeContext,mi=$r(h.nextSibling),pi=i,sn=!0,Fi=null,n!==null&&(bi[Ei++]=wr,bi[Ei++]=br,bi[Ei++]=Ts,wr=n.id,br=n.overflow,Ts=i),i=Du(i,c.children),i.flags|=4096,i)}function Xp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),cu(n.return,i,a)}function Lu(n,i,a,c,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=h)}function qp(n,i,a){var c=i.pendingProps,h=c.revealOrder,g=c.tail;if(Kn(n,i,c.children,a),c=on.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Xp(n,a,i);else if(n.tag===19)Xp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(en(on,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&xl(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Lu(i,!1,h,a,g);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&xl(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}Lu(i,!0,a,null,g);break;case"together":Lu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function El(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Cr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Ps|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=as(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=as(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Ux(n,i,a){switch(i.tag){case 3:Gp(i),pa();break;case 5:op(i);break;case 1:ni(i.type)&&ol(i);break;case 4:fu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;en(hl,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(en(on,on.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Wp(n,i,a):(en(on,on.current&1),n=Cr(n,i,a),n!==null?n.sibling:null);en(on,on.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return qp(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),en(on,on.current),c)break;return null;case 22:case 23:return i.lanes=0,zp(n,i,a)}return Cr(n,i,a)}var Yp,Iu,$p,Kp;Yp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Iu=function(){},$p=function(n,i,a,c){var h=n.memoizedProps;if(h!==c){n=i.stateNode,Rs(tr.current);var g=null;switch(a){case"input":h=Rt(n,h),c=Rt(n,c),g=[];break;case"select":h=oe({},h,{value:void 0}),c=oe({},c,{value:void 0}),g=[];break;case"textarea":h=je(n,h),c=je(n,c),g=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=rl)}Ge(a,c);var E;a=null;for(de in h)if(!c.hasOwnProperty(de)&&h.hasOwnProperty(de)&&h[de]!=null)if(de==="style"){var k=h[de];for(E in k)k.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else de!=="dangerouslySetInnerHTML"&&de!=="children"&&de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&de!=="autoFocus"&&(o.hasOwnProperty(de)?g||(g=[]):(g=g||[]).push(de,null));for(de in c){var G=c[de];if(k=h!=null?h[de]:void 0,c.hasOwnProperty(de)&&G!==k&&(G!=null||k!=null))if(de==="style")if(k){for(E in k)!k.hasOwnProperty(E)||G&&G.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in G)G.hasOwnProperty(E)&&k[E]!==G[E]&&(a||(a={}),a[E]=G[E])}else a||(g||(g=[]),g.push(de,a)),a=G;else de==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,k=k?k.__html:void 0,G!=null&&k!==G&&(g=g||[]).push(de,G)):de==="children"?typeof G!="string"&&typeof G!="number"||(g=g||[]).push(de,""+G):de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&(o.hasOwnProperty(de)?(G!=null&&de==="onScroll"&&tn("scroll",n),g||k===G||(g=[])):(g=g||[]).push(de,G))}a&&(g=g||[]).push("style",a);var de=g;(i.updateQueue=de)&&(i.flags|=4)}},Kp=function(n,i,a,c){a!==c&&(i.flags|=4)};function So(n,i){if(!sn)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Hn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Ox(n,i,a){var c=i.pendingProps;switch(nu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Hn(i),null;case 1:return ni(i.type)&&al(),Hn(i),null;case 3:return c=i.stateNode,va(),nn(ti),nn(Vn),mu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(dl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Fi!==null&&(Wu(Fi),Fi=null))),Iu(n,i),Hn(i),null;case 5:hu(i);var h=Rs(go.current);if(a=i.type,n!==null&&i.stateNode!=null)$p(n,i,a,c,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Hn(i),null}if(n=Rs(tr.current),dl(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[er]=i,c[uo]=g,n=(i.mode&1)!==0,a){case"dialog":tn("cancel",c),tn("close",c);break;case"iframe":case"object":case"embed":tn("load",c);break;case"video":case"audio":for(h=0;h<oo.length;h++)tn(oo[h],c);break;case"source":tn("error",c);break;case"img":case"image":case"link":tn("error",c),tn("load",c);break;case"details":tn("toggle",c);break;case"input":Lt(c,g),tn("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},tn("invalid",c);break;case"textarea":D(c,g),tn("invalid",c)}Ge(a,g),h=null;for(var E in g)if(g.hasOwnProperty(E)){var k=g[E];E==="children"?typeof k=="string"?c.textContent!==k&&(g.suppressHydrationWarning!==!0&&il(c.textContent,k,n),h=["children",k]):typeof k=="number"&&c.textContent!==""+k&&(g.suppressHydrationWarning!==!0&&il(c.textContent,k,n),h=["children",""+k]):o.hasOwnProperty(E)&&k!=null&&E==="onScroll"&&tn("scroll",c)}switch(a){case"input":gt(c),V(c,g,!0);break;case"textarea":gt(c),B(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=rl)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{E=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=le(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=E.createElement(a,{is:c.is}):(n=E.createElement(a),a==="select"&&(E=n,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):n=E.createElementNS(n,a),n[er]=i,n[uo]=c,Yp(n,i,!1,!1),i.stateNode=n;e:{switch(E=Se(a,c),a){case"dialog":tn("cancel",n),tn("close",n),h=c;break;case"iframe":case"object":case"embed":tn("load",n),h=c;break;case"video":case"audio":for(h=0;h<oo.length;h++)tn(oo[h],n);h=c;break;case"source":tn("error",n),h=c;break;case"img":case"image":case"link":tn("error",n),tn("load",n),h=c;break;case"details":tn("toggle",n),h=c;break;case"input":Lt(n,c),h=Rt(n,c),tn("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=oe({},c,{value:void 0}),tn("invalid",n);break;case"textarea":D(n,c),h=je(n,c),tn("invalid",n);break;default:h=c}Ge(a,h),k=h;for(g in k)if(k.hasOwnProperty(g)){var G=k[g];g==="style"?Ee(n,G):g==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,G!=null&&Fe(n,G)):g==="children"?typeof G=="string"?(a!=="textarea"||G!=="")&&be(n,G):typeof G=="number"&&be(n,""+G):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?G!=null&&g==="onScroll"&&tn("scroll",n):G!=null&&I(n,g,G,E))}switch(a){case"input":gt(n),V(n,c,!1);break;case"textarea":gt(n),B(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ye(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?xt(n,!!c.multiple,g,!1):c.defaultValue!=null&&xt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=rl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Hn(i),null;case 6:if(n&&i.stateNode!=null)Kp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Rs(go.current),Rs(tr.current),dl(i)){if(c=i.stateNode,a=i.memoizedProps,c[er]=i,(g=c.nodeValue!==a)&&(n=pi,n!==null))switch(n.tag){case 3:il(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&il(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[er]=i,i.stateNode=c}return Hn(i),null;case 13:if(nn(on),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(sn&&mi!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Jh(),pa(),i.flags|=98560,g=!1;else if(g=dl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[er]=i}else pa(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Hn(i),g=!1}else Fi!==null&&(Wu(Fi),Fi=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(on.current&1)!==0?wn===0&&(wn=3):Yu())),i.updateQueue!==null&&(i.flags|=4),Hn(i),null);case 4:return va(),Iu(n,i),n===null&&lo(i.stateNode.containerInfo),Hn(i),null;case 10:return lu(i.type._context),Hn(i),null;case 17:return ni(i.type)&&al(),Hn(i),null;case 19:if(nn(on),g=i.memoizedState,g===null)return Hn(i),null;if(c=(i.flags&128)!==0,E=g.rendering,E===null)if(c)So(g,!1);else{if(wn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=xl(n),E!==null){for(i.flags|=128,So(g,!1),c=E.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,E=g.alternate,E===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=E.childLanes,g.lanes=E.lanes,g.child=E.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=E.memoizedProps,g.memoizedState=E.memoizedState,g.updateQueue=E.updateQueue,g.type=E.type,n=E.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return en(on,on.current&1|2),i.child}n=n.sibling}g.tail!==null&&Wt()>Ma&&(i.flags|=128,c=!0,So(g,!1),i.lanes=4194304)}else{if(!c)if(n=xl(E),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),So(g,!0),g.tail===null&&g.tailMode==="hidden"&&!E.alternate&&!sn)return Hn(i),null}else 2*Wt()-g.renderingStartTime>Ma&&a!==1073741824&&(i.flags|=128,c=!0,So(g,!1),i.lanes=4194304);g.isBackwards?(E.sibling=i.child,i.child=E):(a=g.last,a!==null?a.sibling=E:i.child=E,g.last=E)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Wt(),i.sibling=null,a=on.current,en(on,c?a&1|2:a&1),i):(Hn(i),null);case 22:case 23:return qu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(gi&1073741824)!==0&&(Hn(i),i.subtreeFlags&6&&(i.flags|=8192)):Hn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Fx(n,i){switch(nu(i),i.tag){case 1:return ni(i.type)&&al(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return va(),nn(ti),nn(Vn),mu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return hu(i),null;case 13:if(nn(on),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));pa()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return nn(on),null;case 4:return va(),null;case 10:return lu(i.type._context),null;case 22:case 23:return qu(),null;case 24:return null;default:return null}}var Tl=!1,Wn=!1,kx=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function ya(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){dn(n,i,c)}else a.current=null}function Uu(n,i,a){try{a()}catch(c){dn(n,i,c)}}var Zp=!1;function Bx(n,i){if(qc=ea,n=Rh(),Bc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var E=0,k=-1,G=-1,de=0,Me=0,we=n,_e=null;t:for(;;){for(var Xe;we!==a||h!==0&&we.nodeType!==3||(k=E+h),we!==g||c!==0&&we.nodeType!==3||(G=E+c),we.nodeType===3&&(E+=we.nodeValue.length),(Xe=we.firstChild)!==null;)_e=we,we=Xe;for(;;){if(we===n)break t;if(_e===a&&++de===h&&(k=E),_e===g&&++Me===c&&(G=E),(Xe=we.nextSibling)!==null)break;we=_e,_e=we.parentNode}we=Xe}a=k===-1||G===-1?null:{start:k,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yc={focusedElem:n,selectionRange:a},ea=!1,Ke=i;Ke!==null;)if(i=Ke,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ke=n;else for(;Ke!==null;){i=Ke;try{var Ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ze!==null){var Qe=Ze.memoizedProps,mn=Ze.memoizedState,ee=i.stateNode,W=ee.getSnapshotBeforeUpdate(i.elementType===i.type?Qe:ki(i.type,Qe),mn);ee.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var ie=i.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){dn(i,i.return,Te)}if(n=i.sibling,n!==null){n.return=i.return,Ke=n;break}Ke=i.return}return Ze=Zp,Zp=!1,Ze}function Mo(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var g=h.destroy;h.destroy=void 0,g!==void 0&&Uu(i,a,g)}h=h.next}while(h!==c)}}function Cl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Ou(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Qp(n){var i=n.alternate;i!==null&&(n.alternate=null,Qp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[er],delete i[uo],delete i[Qc],delete i[Sx],delete i[Mx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Jp(n){return n.tag===5||n.tag===3||n.tag===4}function em(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Jp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Fu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=rl));else if(c!==4&&(n=n.child,n!==null))for(Fu(n,i,a),n=n.sibling;n!==null;)Fu(n,i,a),n=n.sibling}function ku(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(ku(n,i,a),n=n.sibling;n!==null;)ku(n,i,a),n=n.sibling}var In=null,Bi=!1;function ts(n,i,a){for(a=a.child;a!==null;)tm(n,i,a),a=a.sibling}function tm(n,i,a){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(Ve,a)}catch{}switch(a.tag){case 5:Wn||ya(a,i);case 6:var c=In,h=Bi;In=null,ts(n,i,a),In=c,Bi=h,In!==null&&(Bi?(n=In,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):In.removeChild(a.stateNode));break;case 18:In!==null&&(Bi?(n=In,a=a.stateNode,n.nodeType===8?Zc(n.parentNode,a):n.nodeType===1&&Zc(n,a),vr(n)):Zc(In,a.stateNode));break;case 4:c=In,h=Bi,In=a.stateNode.containerInfo,Bi=!0,ts(n,i,a),In=c,Bi=h;break;case 0:case 11:case 14:case 15:if(!Wn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var g=h,E=g.destroy;g=g.tag,E!==void 0&&((g&2)!==0||(g&4)!==0)&&Uu(a,i,E),h=h.next}while(h!==c)}ts(n,i,a);break;case 1:if(!Wn&&(ya(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(k){dn(a,i,k)}ts(n,i,a);break;case 21:ts(n,i,a);break;case 22:a.mode&1?(Wn=(c=Wn)||a.memoizedState!==null,ts(n,i,a),Wn=c):ts(n,i,a);break;default:ts(n,i,a)}}function nm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new kx),i.forEach(function(c){var h=Yx.bind(null,n,c);a.has(c)||(a.add(c),c.then(h,h))})}}function zi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var g=n,E=i,k=E;e:for(;k!==null;){switch(k.tag){case 5:In=k.stateNode,Bi=!1;break e;case 3:In=k.stateNode.containerInfo,Bi=!0;break e;case 4:In=k.stateNode.containerInfo,Bi=!0;break e}k=k.return}if(In===null)throw Error(t(160));tm(g,E,h),In=null,Bi=!1;var G=h.alternate;G!==null&&(G.return=null),h.return=null}catch(de){dn(h,i,de)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)im(i,n),i=i.sibling}function im(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(zi(i,n),ir(n),c&4){try{Mo(3,n,n.return),Cl(3,n)}catch(Qe){dn(n,n.return,Qe)}try{Mo(5,n,n.return)}catch(Qe){dn(n,n.return,Qe)}}break;case 1:zi(i,n),ir(n),c&512&&a!==null&&ya(a,a.return);break;case 5:if(zi(i,n),ir(n),c&512&&a!==null&&ya(a,a.return),n.flags&32){var h=n.stateNode;try{be(h,"")}catch(Qe){dn(n,n.return,Qe)}}if(c&4&&(h=n.stateNode,h!=null)){var g=n.memoizedProps,E=a!==null?a.memoizedProps:g,k=n.type,G=n.updateQueue;if(n.updateQueue=null,G!==null)try{k==="input"&&g.type==="radio"&&g.name!=null&&pt(h,g),Se(k,E);var de=Se(k,g);for(E=0;E<G.length;E+=2){var Me=G[E],we=G[E+1];Me==="style"?Ee(h,we):Me==="dangerouslySetInnerHTML"?Fe(h,we):Me==="children"?be(h,we):I(h,Me,we,de)}switch(k){case"input":Ot(h,g);break;case"textarea":w(h,g);break;case"select":var _e=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var Xe=g.value;Xe!=null?xt(h,!!g.multiple,Xe,!1):_e!==!!g.multiple&&(g.defaultValue!=null?xt(h,!!g.multiple,g.defaultValue,!0):xt(h,!!g.multiple,g.multiple?[]:"",!1))}h[uo]=g}catch(Qe){dn(n,n.return,Qe)}}break;case 6:if(zi(i,n),ir(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,g=n.memoizedProps;try{h.nodeValue=g}catch(Qe){dn(n,n.return,Qe)}}break;case 3:if(zi(i,n),ir(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{vr(i.containerInfo)}catch(Qe){dn(n,n.return,Qe)}break;case 4:zi(i,n),ir(n);break;case 13:zi(i,n),ir(n),h=n.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(ju=Wt())),c&4&&nm(n);break;case 22:if(Me=a!==null&&a.memoizedState!==null,n.mode&1?(Wn=(de=Wn)||Me,zi(i,n),Wn=de):zi(i,n),ir(n),c&8192){if(de=n.memoizedState!==null,(n.stateNode.isHidden=de)&&!Me&&(n.mode&1)!==0)for(Ke=n,Me=n.child;Me!==null;){for(we=Ke=Me;Ke!==null;){switch(_e=Ke,Xe=_e.child,_e.tag){case 0:case 11:case 14:case 15:Mo(4,_e,_e.return);break;case 1:ya(_e,_e.return);var Ze=_e.stateNode;if(typeof Ze.componentWillUnmount=="function"){c=_e,a=_e.return;try{i=c,Ze.props=i.memoizedProps,Ze.state=i.memoizedState,Ze.componentWillUnmount()}catch(Qe){dn(c,a,Qe)}}break;case 5:ya(_e,_e.return);break;case 22:if(_e.memoizedState!==null){am(we);continue}}Xe!==null?(Xe.return=_e,Ke=Xe):am(we)}Me=Me.sibling}e:for(Me=null,we=n;;){if(we.tag===5){if(Me===null){Me=we;try{h=we.stateNode,de?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(k=we.stateNode,G=we.memoizedProps.style,E=G!=null&&G.hasOwnProperty("display")?G.display:null,k.style.display=xe("display",E))}catch(Qe){dn(n,n.return,Qe)}}}else if(we.tag===6){if(Me===null)try{we.stateNode.nodeValue=de?"":we.memoizedProps}catch(Qe){dn(n,n.return,Qe)}}else if((we.tag!==22&&we.tag!==23||we.memoizedState===null||we===n)&&we.child!==null){we.child.return=we,we=we.child;continue}if(we===n)break e;for(;we.sibling===null;){if(we.return===null||we.return===n)break e;Me===we&&(Me=null),we=we.return}Me===we&&(Me=null),we.sibling.return=we.return,we=we.sibling}}break;case 19:zi(i,n),ir(n),c&4&&nm(n);break;case 21:break;default:zi(i,n),ir(n)}}function ir(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Jp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(be(h,""),c.flags&=-33);var g=em(n);ku(n,g,h);break;case 3:case 4:var E=c.stateNode.containerInfo,k=em(n);Fu(n,k,E);break;default:throw Error(t(161))}}catch(G){dn(n,n.return,G)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function zx(n,i,a){Ke=n,rm(n)}function rm(n,i,a){for(var c=(n.mode&1)!==0;Ke!==null;){var h=Ke,g=h.child;if(h.tag===22&&c){var E=h.memoizedState!==null||Tl;if(!E){var k=h.alternate,G=k!==null&&k.memoizedState!==null||Wn;k=Tl;var de=Wn;if(Tl=E,(Wn=G)&&!de)for(Ke=h;Ke!==null;)E=Ke,G=E.child,E.tag===22&&E.memoizedState!==null?om(h):G!==null?(G.return=E,Ke=G):om(h);for(;g!==null;)Ke=g,rm(g),g=g.sibling;Ke=h,Tl=k,Wn=de}sm(n)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,Ke=g):sm(n)}}function sm(n){for(;Ke!==null;){var i=Ke;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Wn||Cl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Wn)if(a===null)c.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:ki(i.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&ap(i,g,c);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}ap(i,E,a)}break;case 5:var k=i.stateNode;if(a===null&&i.flags&4){a=k;var G=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":G.autoFocus&&a.focus();break;case"img":G.src&&(a.src=G.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var de=i.alternate;if(de!==null){var Me=de.memoizedState;if(Me!==null){var we=Me.dehydrated;we!==null&&vr(we)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Wn||i.flags&512&&Ou(i)}catch(_e){dn(i,i.return,_e)}}if(i===n){Ke=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ke=a;break}Ke=i.return}}function am(n){for(;Ke!==null;){var i=Ke;if(i===n){Ke=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ke=a;break}Ke=i.return}}function om(n){for(;Ke!==null;){var i=Ke;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Cl(4,i)}catch(G){dn(i,a,G)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(G){dn(i,h,G)}}var g=i.return;try{Ou(i)}catch(G){dn(i,g,G)}break;case 5:var E=i.return;try{Ou(i)}catch(G){dn(i,E,G)}}}catch(G){dn(i,i.return,G)}if(i===n){Ke=null;break}var k=i.sibling;if(k!==null){k.return=i.return,Ke=k;break}Ke=i.return}}var jx=Math.ceil,Al=P.ReactCurrentDispatcher,Bu=P.ReactCurrentOwner,Ai=P.ReactCurrentBatchConfig,kt=0,An=null,xn=null,Un=0,gi=0,Sa=Kr(0),wn=0,wo=null,Ps=0,Rl=0,zu=0,bo=null,ri=null,ju=0,Ma=1/0,Ar=null,Nl=!1,Vu=null,ns=null,Pl=!1,is=null,Dl=0,Eo=0,Gu=null,Ll=-1,Il=0;function Zn(){return(kt&6)!==0?Wt():Ll!==-1?Ll:Ll=Wt()}function rs(n){return(n.mode&1)===0?1:(kt&2)!==0&&Un!==0?Un&-Un:bx.transition!==null?(Il===0&&(Il=yn()),Il):(n=ht,n!==0||(n=window.event,n=n===void 0?16:Qa(n.type)),n)}function ji(n,i,a,c){if(50<Eo)throw Eo=0,Gu=null,Error(t(185));$t(n,a,c),((kt&2)===0||n!==An)&&(n===An&&((kt&2)===0&&(Rl|=a),wn===4&&ss(n,Un)),si(n,c),a===1&&kt===0&&(i.mode&1)===0&&(Ma=Wt()+500,ll&&Qr()))}function si(n,i){var a=n.callbackNode;Ut(n,i);var c=It(n,n===An?Un:0);if(c===0)a!==null&&mr(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&mr(a),i===1)n.tag===0?wx(cm.bind(null,n)):Yh(cm.bind(null,n)),_x(function(){(kt&6)===0&&Qr()}),a=null;else{switch(qt(c)){case 1:a=Y;break;case 4:a=ue;break;case 16:a=ae;break;case 536870912:a=De;break;default:a=ae}a=xm(a,lm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function lm(n,i){if(Ll=-1,Il=0,(kt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(wa()&&n.callbackNode!==a)return null;var c=It(n,n===An?Un:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Ul(n,c);else{i=c;var h=kt;kt|=2;var g=dm();(An!==n||Un!==i)&&(Ar=null,Ma=Wt()+500,Ls(n,i));do try{Hx();break}catch(k){um(n,k)}while(!0);ou(),Al.current=g,kt=h,xn!==null?i=0:(An=null,Un=0,i=wn)}if(i!==0){if(i===2&&(h=Tt(n),h!==0&&(c=h,i=Hu(n,h))),i===1)throw a=wo,Ls(n,0),ss(n,c),si(n,Wt()),a;if(i===6)ss(n,c);else{if(h=n.current.alternate,(c&30)===0&&!Vx(h)&&(i=Ul(n,c),i===2&&(g=Tt(n),g!==0&&(c=g,i=Hu(n,g))),i===1))throw a=wo,Ls(n,0),ss(n,c),si(n,Wt()),a;switch(n.finishedWork=h,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Is(n,ri,Ar);break;case 3:if(ss(n,c),(c&130023424)===c&&(i=ju+500-Wt(),10<i)){if(It(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){Zn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=Kc(Is.bind(null,n,ri,Ar),i);break}Is(n,ri,Ar);break;case 4:if(ss(n,c),(c&4194240)===c)break;for(i=n.eventTimes,h=-1;0<c;){var E=31-He(c);g=1<<E,E=i[E],E>h&&(h=E),c&=~g}if(c=h,c=Wt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*jx(c/1960))-c,10<c){n.timeoutHandle=Kc(Is.bind(null,n,ri,Ar),c);break}Is(n,ri,Ar);break;case 5:Is(n,ri,Ar);break;default:throw Error(t(329))}}}return si(n,Wt()),n.callbackNode===a?lm.bind(null,n):null}function Hu(n,i){var a=bo;return n.current.memoizedState.isDehydrated&&(Ls(n,i).flags|=256),n=Ul(n,i),n!==2&&(i=ri,ri=a,i!==null&&Wu(i)),n}function Wu(n){ri===null?ri=n:ri.push.apply(ri,n)}function Vx(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],g=h.getSnapshot;h=h.value;try{if(!Oi(g(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ss(n,i){for(i&=~zu,i&=~Rl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-He(i),c=1<<a;n[a]=-1,i&=~c}}function cm(n){if((kt&6)!==0)throw Error(t(327));wa();var i=It(n,0);if((i&1)===0)return si(n,Wt()),null;var a=Ul(n,i);if(n.tag!==0&&a===2){var c=Tt(n);c!==0&&(i=c,a=Hu(n,c))}if(a===1)throw a=wo,Ls(n,0),ss(n,i),si(n,Wt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Is(n,ri,Ar),si(n,Wt()),null}function Xu(n,i){var a=kt;kt|=1;try{return n(i)}finally{kt=a,kt===0&&(Ma=Wt()+500,ll&&Qr())}}function Ds(n){is!==null&&is.tag===0&&(kt&6)===0&&wa();var i=kt;kt|=1;var a=Ai.transition,c=ht;try{if(Ai.transition=null,ht=1,n)return n()}finally{ht=c,Ai.transition=a,kt=i,(kt&6)===0&&Qr()}}function qu(){gi=Sa.current,nn(Sa)}function Ls(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,vx(a)),xn!==null)for(a=xn.return;a!==null;){var c=a;switch(nu(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&al();break;case 3:va(),nn(ti),nn(Vn),mu();break;case 5:hu(c);break;case 4:va();break;case 13:nn(on);break;case 19:nn(on);break;case 10:lu(c.type._context);break;case 22:case 23:qu()}a=a.return}if(An=n,xn=n=as(n.current,null),Un=gi=i,wn=0,wo=null,zu=Rl=Ps=0,ri=bo=null,As!==null){for(i=0;i<As.length;i++)if(a=As[i],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,g=a.pending;if(g!==null){var E=g.next;g.next=h,c.next=E}a.pending=c}As=null}return n}function um(n,i){do{var a=xn;try{if(ou(),vl.current=Ml,_l){for(var c=ln.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}_l=!1}if(Ns=0,Cn=Mn=ln=null,xo=!1,vo=0,Bu.current=null,a===null||a.return===null){wn=1,wo=i,xn=null;break}e:{var g=n,E=a.return,k=a,G=i;if(i=Un,k.flags|=32768,G!==null&&typeof G=="object"&&typeof G.then=="function"){var de=G,Me=k,we=Me.tag;if((Me.mode&1)===0&&(we===0||we===11||we===15)){var _e=Me.alternate;_e?(Me.updateQueue=_e.updateQueue,Me.memoizedState=_e.memoizedState,Me.lanes=_e.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var Xe=Up(E);if(Xe!==null){Xe.flags&=-257,Op(Xe,E,k,g,i),Xe.mode&1&&Ip(g,de,i),i=Xe,G=de;var Ze=i.updateQueue;if(Ze===null){var Qe=new Set;Qe.add(G),i.updateQueue=Qe}else Ze.add(G);break e}else{if((i&1)===0){Ip(g,de,i),Yu();break e}G=Error(t(426))}}else if(sn&&k.mode&1){var mn=Up(E);if(mn!==null){(mn.flags&65536)===0&&(mn.flags|=256),Op(mn,E,k,g,i),su(_a(G,k));break e}}g=G=_a(G,k),wn!==4&&(wn=2),bo===null?bo=[g]:bo.push(g),g=E;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var ee=Dp(g,G,i);sp(g,ee);break e;case 1:k=G;var W=g.type,ie=g.stateNode;if((g.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(ns===null||!ns.has(ie)))){g.flags|=65536,i&=-i,g.lanes|=i;var Te=Lp(g,k,i);sp(g,Te);break e}}g=g.return}while(g!==null)}hm(a)}catch(Je){i=Je,xn===a&&a!==null&&(xn=a=a.return);continue}break}while(!0)}function dm(){var n=Al.current;return Al.current=Ml,n===null?Ml:n}function Yu(){(wn===0||wn===3||wn===2)&&(wn=4),An===null||(Ps&268435455)===0&&(Rl&268435455)===0||ss(An,Un)}function Ul(n,i){var a=kt;kt|=2;var c=dm();(An!==n||Un!==i)&&(Ar=null,Ls(n,i));do try{Gx();break}catch(h){um(n,h)}while(!0);if(ou(),kt=a,Al.current=c,xn!==null)throw Error(t(261));return An=null,Un=0,wn}function Gx(){for(;xn!==null;)fm(xn)}function Hx(){for(;xn!==null&&!gr();)fm(xn)}function fm(n){var i=gm(n.alternate,n,gi);n.memoizedProps=n.pendingProps,i===null?hm(n):xn=i,Bu.current=null}function hm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Ox(a,i,gi),a!==null){xn=a;return}}else{if(a=Fx(a,i),a!==null){a.flags&=32767,xn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{wn=6,xn=null;return}}if(i=i.sibling,i!==null){xn=i;return}xn=i=n}while(i!==null);wn===0&&(wn=5)}function Is(n,i,a){var c=ht,h=Ai.transition;try{Ai.transition=null,ht=1,Wx(n,i,a,c)}finally{Ai.transition=h,ht=c}return null}function Wx(n,i,a,c){do wa();while(is!==null);if((kt&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(Zi(n,g),n===An&&(xn=An=null,Un=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Pl||(Pl=!0,xm(ae,function(){return wa(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Ai.transition,Ai.transition=null;var E=ht;ht=1;var k=kt;kt|=4,Bu.current=null,Bx(n,a),im(a,n),dx(Yc),ea=!!qc,Yc=qc=null,n.current=a,zx(a),ys(),kt=k,ht=E,Ai.transition=g}else n.current=a;if(Pl&&(Pl=!1,is=n,Dl=h),g=n.pendingLanes,g===0&&(ns=null),Ye(a.stateNode),si(n,Wt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(Nl)throw Nl=!1,n=Vu,Vu=null,n;return(Dl&1)!==0&&n.tag!==0&&wa(),g=n.pendingLanes,(g&1)!==0?n===Gu?Eo++:(Eo=0,Gu=n):Eo=0,Qr(),null}function wa(){if(is!==null){var n=qt(Dl),i=Ai.transition,a=ht;try{if(Ai.transition=null,ht=16>n?16:n,is===null)var c=!1;else{if(n=is,is=null,Dl=0,(kt&6)!==0)throw Error(t(331));var h=kt;for(kt|=4,Ke=n.current;Ke!==null;){var g=Ke,E=g.child;if((Ke.flags&16)!==0){var k=g.deletions;if(k!==null){for(var G=0;G<k.length;G++){var de=k[G];for(Ke=de;Ke!==null;){var Me=Ke;switch(Me.tag){case 0:case 11:case 15:Mo(8,Me,g)}var we=Me.child;if(we!==null)we.return=Me,Ke=we;else for(;Ke!==null;){Me=Ke;var _e=Me.sibling,Xe=Me.return;if(Qp(Me),Me===de){Ke=null;break}if(_e!==null){_e.return=Xe,Ke=_e;break}Ke=Xe}}}var Ze=g.alternate;if(Ze!==null){var Qe=Ze.child;if(Qe!==null){Ze.child=null;do{var mn=Qe.sibling;Qe.sibling=null,Qe=mn}while(Qe!==null)}}Ke=g}}if((g.subtreeFlags&2064)!==0&&E!==null)E.return=g,Ke=E;else e:for(;Ke!==null;){if(g=Ke,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Mo(9,g,g.return)}var ee=g.sibling;if(ee!==null){ee.return=g.return,Ke=ee;break e}Ke=g.return}}var W=n.current;for(Ke=W;Ke!==null;){E=Ke;var ie=E.child;if((E.subtreeFlags&2064)!==0&&ie!==null)ie.return=E,Ke=ie;else e:for(E=W;Ke!==null;){if(k=Ke,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:Cl(9,k)}}catch(Je){dn(k,k.return,Je)}if(k===E){Ke=null;break e}var Te=k.sibling;if(Te!==null){Te.return=k.return,Ke=Te;break e}Ke=k.return}}if(kt=h,Qr(),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(Ve,n)}catch{}c=!0}return c}finally{ht=a,Ai.transition=i}}return!1}function pm(n,i,a){i=_a(a,i),i=Dp(n,i,1),n=es(n,i,1),i=Zn(),n!==null&&($t(n,1,i),si(n,i))}function dn(n,i,a){if(n.tag===3)pm(n,n,a);else for(;i!==null;){if(i.tag===3){pm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ns===null||!ns.has(c))){n=_a(a,n),n=Lp(i,n,1),i=es(i,n,1),n=Zn(),i!==null&&($t(i,1,n),si(i,n));break}}i=i.return}}function Xx(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Zn(),n.pingedLanes|=n.suspendedLanes&a,An===n&&(Un&a)===a&&(wn===4||wn===3&&(Un&130023424)===Un&&500>Wt()-ju?Ls(n,0):zu|=a),si(n,i)}function mm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Xt,Xt<<=1,(Xt&130023424)===0&&(Xt=4194304)));var a=Zn();n=Er(n,i),n!==null&&($t(n,i,a),si(n,a))}function qx(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),mm(n,a)}function Yx(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),mm(n,a)}var gm;gm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||ti.current)ii=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return ii=!1,Ux(n,i,a);ii=(n.flags&131072)!==0}else ii=!1,sn&&(i.flags&1048576)!==0&&$h(i,ul,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;El(n,i),n=i.pendingProps;var h=da(i,Vn.current);xa(i,a),h=vu(null,i,c,n,h,a);var g=_u();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ni(c)?(g=!0,ol(i)):g=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,du(i),h.updater=wl,i.stateNode=h,h._reactInternals=i,Eu(i,c,n,a),i=Ru(null,i,c,!0,g,a)):(i.tag=0,sn&&g&&tu(i),Kn(null,i,h,a),i=i.child),i;case 16:c=i.elementType;e:{switch(El(n,i),n=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=Kx(c),n=ki(c,n),h){case 0:i=Au(null,i,c,n,a);break e;case 1:i=Vp(null,i,c,n,a);break e;case 11:i=Fp(null,i,c,n,a);break e;case 14:i=kp(null,i,c,ki(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:ki(c,h),Au(n,i,c,h,a);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:ki(c,h),Vp(n,i,c,h,a);case 3:e:{if(Gp(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,h=g.element,rp(n,i),gl(i,c,null,a);var E=i.memoizedState;if(c=E.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){h=_a(Error(t(423)),i),i=Hp(n,i,c,a,h);break e}else if(c!==h){h=_a(Error(t(424)),i),i=Hp(n,i,c,a,h);break e}else for(mi=$r(i.stateNode.containerInfo.firstChild),pi=i,sn=!0,Fi=null,a=np(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(pa(),c===h){i=Cr(n,i,a);break e}Kn(n,i,c,a)}i=i.child}return i;case 5:return op(i),n===null&&ru(i),c=i.type,h=i.pendingProps,g=n!==null?n.memoizedProps:null,E=h.children,$c(c,h)?E=null:g!==null&&$c(c,g)&&(i.flags|=32),jp(n,i),Kn(n,i,E,a),i.child;case 6:return n===null&&ru(i),null;case 13:return Wp(n,i,a);case 4:return fu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=ma(i,null,c,a):Kn(n,i,c,a),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:ki(c,h),Fp(n,i,c,h,a);case 7:return Kn(n,i,i.pendingProps,a),i.child;case 8:return Kn(n,i,i.pendingProps.children,a),i.child;case 12:return Kn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,g=i.memoizedProps,E=h.value,en(hl,c._currentValue),c._currentValue=E,g!==null)if(Oi(g.value,E)){if(g.children===h.children&&!ti.current){i=Cr(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var k=g.dependencies;if(k!==null){E=g.child;for(var G=k.firstContext;G!==null;){if(G.context===c){if(g.tag===1){G=Tr(-1,a&-a),G.tag=2;var de=g.updateQueue;if(de!==null){de=de.shared;var Me=de.pending;Me===null?G.next=G:(G.next=Me.next,Me.next=G),de.pending=G}}g.lanes|=a,G=g.alternate,G!==null&&(G.lanes|=a),cu(g.return,a,i),k.lanes|=a;break}G=G.next}}else if(g.tag===10)E=g.type===i.type?null:g.child;else if(g.tag===18){if(E=g.return,E===null)throw Error(t(341));E.lanes|=a,k=E.alternate,k!==null&&(k.lanes|=a),cu(E,a,i),E=g.sibling}else E=g.child;if(E!==null)E.return=g;else for(E=g;E!==null;){if(E===i){E=null;break}if(g=E.sibling,g!==null){g.return=E.return,E=g;break}E=E.return}g=E}Kn(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,xa(i,a),h=Ti(h),c=c(h),i.flags|=1,Kn(n,i,c,a),i.child;case 14:return c=i.type,h=ki(c,i.pendingProps),h=ki(c.type,h),kp(n,i,c,h,a);case 15:return Bp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:ki(c,h),El(n,i),i.tag=1,ni(c)?(n=!0,ol(i)):n=!1,xa(i,a),Np(i,c,h),Eu(i,c,h,a),Ru(null,i,c,!0,n,a);case 19:return qp(n,i,a);case 22:return zp(n,i,a)}throw Error(t(156,i.tag))};function xm(n,i){return Zs(n,i)}function $x(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ri(n,i,a,c){return new $x(n,i,a,c)}function $u(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Kx(n){if(typeof n=="function")return $u(n)?1:0;if(n!=null){if(n=n.$$typeof,n===$)return 11;if(n===se)return 14}return 2}function as(n,i){var a=n.alternate;return a===null?(a=Ri(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Ol(n,i,a,c,h,g){var E=2;if(c=n,typeof n=="function")$u(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case O:return Us(a.children,h,g,i);case j:E=8,h|=8;break;case b:return n=Ri(12,a,i,h|2),n.elementType=b,n.lanes=g,n;case Q:return n=Ri(13,a,i,h),n.elementType=Q,n.lanes=g,n;case re:return n=Ri(19,a,i,h),n.elementType=re,n.lanes=g,n;case q:return Fl(a,h,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:E=10;break e;case z:E=9;break e;case $:E=11;break e;case se:E=14;break e;case te:E=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Ri(E,a,i,h),i.elementType=n,i.type=c,i.lanes=g,i}function Us(n,i,a,c){return n=Ri(7,n,c,i),n.lanes=a,n}function Fl(n,i,a,c){return n=Ri(22,n,c,i),n.elementType=q,n.lanes=a,n.stateNode={isHidden:!1},n}function Ku(n,i,a){return n=Ri(6,n,null,i),n.lanes=a,n}function Zu(n,i,a){return i=Ri(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Zx(n,i,a,c,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=di(0),this.expirationTimes=di(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=di(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Qu(n,i,a,c,h,g,E,k,G){return n=new Zx(n,i,a,k,G),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Ri(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},du(g),n}function Qx(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function vm(n){if(!n)return Zr;n=n._reactInternals;e:{if(ei(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ni(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(ni(a))return Xh(n,a,i)}return i}function _m(n,i,a,c,h,g,E,k,G){return n=Qu(a,c,!0,n,h,g,E,k,G),n.context=vm(null),a=n.current,c=Zn(),h=rs(a),g=Tr(c,h),g.callback=i??null,es(a,g,h),n.current.lanes=h,$t(n,h,c),si(n,c),n}function kl(n,i,a,c){var h=i.current,g=Zn(),E=rs(h);return a=vm(a),i.context===null?i.context=a:i.pendingContext=a,i=Tr(g,E),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=es(h,i,E),n!==null&&(ji(n,h,E,g),ml(n,h,E)),E}function Bl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function ym(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Ju(n,i){ym(n,i),(n=n.alternate)&&ym(n,i)}function Jx(){return null}var Sm=typeof reportError=="function"?reportError:function(n){console.error(n)};function ed(n){this._internalRoot=n}zl.prototype.render=ed.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));kl(n,i,null,null)},zl.prototype.unmount=ed.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Ds(function(){kl(null,n,null,null)}),i[Sr]=null}};function zl(n){this._internalRoot=n}zl.prototype.unstable_scheduleHydration=function(n){if(n){var i=fi();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Mi.length&&i!==0&&i<Mi[a].priority;a++);Mi.splice(a,0,n),a===0&&Js(n)}};function td(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function jl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Mm(){}function ev(n,i,a,c,h){if(h){if(typeof c=="function"){var g=c;c=function(){var de=Bl(E);g.call(de)}}var E=_m(i,c,n,0,null,!1,!1,"",Mm);return n._reactRootContainer=E,n[Sr]=E.current,lo(n.nodeType===8?n.parentNode:n),Ds(),E}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var k=c;c=function(){var de=Bl(G);k.call(de)}}var G=Qu(n,0,!1,null,null,!1,!1,"",Mm);return n._reactRootContainer=G,n[Sr]=G.current,lo(n.nodeType===8?n.parentNode:n),Ds(function(){kl(i,G,a,c)}),G}function Vl(n,i,a,c,h){var g=a._reactRootContainer;if(g){var E=g;if(typeof h=="function"){var k=h;h=function(){var G=Bl(E);k.call(G)}}kl(i,E,n,h)}else E=ev(a,i,n,h,c);return Bl(E)}un=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Gt(i.pendingLanes);a!==0&&(Ft(i,a|1),si(i,Wt()),(kt&6)===0&&(Ma=Wt()+500,Qr()))}break;case 13:Ds(function(){var c=Er(n,1);if(c!==null){var h=Zn();ji(c,n,1,h)}}),Ju(n,1)}},pn=function(n){if(n.tag===13){var i=Er(n,134217728);if(i!==null){var a=Zn();ji(i,n,134217728,a)}Ju(n,134217728)}},xr=function(n){if(n.tag===13){var i=rs(n),a=Er(n,i);if(a!==null){var c=Zn();ji(a,n,i,c)}Ju(n,i)}},fi=function(){return ht},$a=function(n,i){var a=ht;try{return ht=n,i()}finally{ht=a}},Pe=function(n,i,a){switch(i){case"input":if(Ot(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var h=sl(c);if(!h)throw Error(t(90));Jt(c),Ot(c,h)}}}break;case"textarea":w(n,a);break;case"select":i=a.value,i!=null&&xt(n,!!a.multiple,i,!1)}},rt=Xu,dt=Ds;var tv={usingClientEntryPoint:!1,Events:[fo,ca,sl,me,Ce,Xu]},To={findFiberByHostInstance:bs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nv={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ks(n),n===null?null:n.stateNode},findFiberByHostInstance:To.findFiberByHostInstance||Jx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gl.isDisabled&&Gl.supportsFiber)try{Ve=Gl.inject(nv),Ae=Gl}catch{}}return ai.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tv,ai.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!td(i))throw Error(t(200));return Qx(n,i,null,a)},ai.createRoot=function(n,i){if(!td(n))throw Error(t(299));var a=!1,c="",h=Sm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=Qu(n,1,!1,null,null,a,!1,c,h),n[Sr]=i.current,lo(n.nodeType===8?n.parentNode:n),new ed(i)},ai.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ks(i),n=n===null?null:n.stateNode,n},ai.flushSync=function(n){return Ds(n)},ai.hydrate=function(n,i,a){if(!jl(i))throw Error(t(200));return Vl(null,n,i,!0,a)},ai.hydrateRoot=function(n,i,a){if(!td(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,h=!1,g="",E=Sm;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=_m(i,null,n,1,a??null,h,!1,g,E),n[Sr]=i.current,lo(n),c)for(n=0;n<c.length;n++)a=c[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new zl(i)},ai.render=function(n,i,a){if(!jl(i))throw Error(t(200));return Vl(null,n,i,!1,a)},ai.unmountComponentAtNode=function(n){if(!jl(n))throw Error(t(40));return n._reactRootContainer?(Ds(function(){Vl(null,null,n,!1,function(){n._reactRootContainer=null,n[Sr]=null})}),!0):!1},ai.unstable_batchedUpdates=Xu,ai.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!jl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Vl(n,i,a,!1,c)},ai.version="18.3.1-next-f1338f8080-20240426",ai}var Nm;function dv(){if(Nm)return rd.exports;Nm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),rd.exports=uv(),rd.exports}var Pm;function fv(){if(Pm)return Hl;Pm=1;var s=dv();return Hl.createRoot=s.createRoot,Hl.hydrateRoot=s.hydrateRoot,Hl}var hv=fv();const pv=V0(hv);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),G0=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=Ue.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:d,...f},p)=>Ue.createElement("svg",{ref:p,...gv,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:G0("lucide",o),...f},[...d.map(([m,x])=>Ue.createElement(m,x)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=(s,e)=>{const t=Ue.forwardRef(({className:r,...o},l)=>Ue.createElement(xv,{ref:l,iconNode:e,className:G0(`lucide-${mv(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=ct("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=ct("Battery",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=ct("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=ct("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=ct("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=ct("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=ct("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=ct("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=ct("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=ct("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=ct("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=ct("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=ct("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=ct("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=ct("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=ct("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=ct("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=ct("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=ct("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=ct("FileCheck2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=ct("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=ct("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=ct("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=ct("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=ct("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=ct("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=ct("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=ct("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=ct("OctagonAlert",[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=ct("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=ct("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=ct("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=ct("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=ct("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=ct("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=ct("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=ct("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=ct("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=ct("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=ct("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=ct("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=ct("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ho=ct("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=ct("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=ct("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=ct("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=ct("Wind",[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=ct("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=ct("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=ct("ZapOff",[["path",{d:"M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317",key:"193nxd"}],["path",{d:"M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773",key:"27a7lr"}],["path",{d:"M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643",key:"1e0qe9"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=ct("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Gv=({cartCount:s,onOpenCart:e})=>{const[t,r]=Ue.useState(!1),[o,l]=Ue.useState(!1);Ue.useEffect(()=>{const f=()=>{r(window.scrollY>window.innerHeight*.7)};return window.addEventListener("scroll",f,{passive:!0}),f(),()=>window.removeEventListener("scroll",f)},[]);const d=[{name:"Simulação 3D",href:"#hero-3d",icon:ko},{name:"Central VTS",href:"#central-vts",icon:Fv},{name:"Normas NBR",href:"#normas",icon:jd},{name:"Calculadora & Diagrama",href:"#calculadora",icon:H0,highlight:!0},{name:"Loja Virtual",href:"#loja",icon:Mc},{name:"Manuais",href:"#manuais",icon:jd},{name:"Fotos Reais",href:"#galeria",icon:Ho},{name:"Contato",href:"#contato",icon:Fr}];return u.jsxs("div",{className:`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${t?"opacity-100 translate-y-0 pointer-events-auto":"opacity-0 -translate-y-full pointer-events-none"}`,children:[u.jsxs("div",{className:"bg-gradient-to-r from-[#08090b] via-[#141208] to-[#08090b] border-b border-[#d4af37]/30 text-xs py-1.5 px-4 text-center text-[#f3e5ab] flex items-center justify-center gap-2 font-medium shadow-md",children:[u.jsxs("span",{className:"flex h-2 w-2 relative",children:[u.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"}),u.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-[#d4af37]"})]}),u.jsxs("span",{className:"tracking-wide",children:["SISTEMA EM CONFORMIDADE TOTAL COM ",u.jsx("strong",{className:"text-[#e5c05d]",children:"ABNT NBR 14518"}),", ",u.jsx("strong",{className:"text-[#e5c05d]",children:"NFPA 96 & 17A"})," E CORPO DE BOMBEIROS (AVCB)"]})]}),u.jsxs("header",{className:"bg-[#08090b]/95 backdrop-blur-md border-b border-[#d4af37]/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-2.5",children:[u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between",children:[u.jsx("a",{href:"#",className:"flex items-center gap-3 group",children:u.jsx("img",{src:"/assets/logo-outfire-gold.png",alt:"OUTFIRE - Sistemas contra Incêndio",className:"h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]"})}),u.jsx("nav",{className:"hidden lg:flex items-center gap-1",children:d.map(f=>{const p=f.icon;return u.jsxs("a",{href:f.href,className:`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${f.highlight?"bg-[#d4af37]/15 text-[#e5c05d] hover:bg-[#d4af37]/25 border border-[#d4af37]/40 shadow-[0_0_15px_rgba(212,175,55,0.2)] font-semibold":"text-gray-300 hover:text-[#f3e5ab] hover:bg-white/5"}`,children:[u.jsx(p,{className:`w-3.5 h-3.5 ${f.highlight?"text-[#d4af37]":"opacity-70"}`}),f.name]},f.name)})}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsxs("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20do%20sistema%20Outfire%20para%20minha%20cozinha%20industrial.",target:"_blank",rel:"noopener noreferrer",className:"hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black text-xs font-black px-4 py-2 rounded-lg shadow-glow-gold hover:shadow-glow-gold-lg transition-all",children:[u.jsx(Fr,{className:"w-3.5 h-3.5 fill-black"}),u.jsx("span",{children:"(15) 99657-6807"})]}),u.jsxs("button",{onClick:e,className:"relative p-2.5 rounded-xl bg-[#14171e] hover:bg-[#1a1f28] border border-[#d4af37]/25 text-[#f3e5ab] hover:text-white transition-all flex items-center justify-center group shadow-md",title:"Ver Carrinho de Compras",children:[u.jsx(Mc,{className:"w-5 h-5 group-hover:scale-105 transition-transform"}),s>0&&u.jsx("span",{className:"absolute -top-1.5 -right-1.5 bg-[#d4af37] text-black font-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-glow-gold animate-pulse",children:s})]}),u.jsx("button",{onClick:()=>l(!o),className:"lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white",children:o?u.jsx(Gd,{className:"w-6 h-6"}):u.jsx(Nv,{className:"w-6 h-6"})})]})]}),o&&u.jsxs("div",{className:"lg:hidden mt-3 px-4 pt-2 pb-6 bg-[#0e1014] border-b border-[#d4af37]/20 space-y-2",children:[d.map(f=>{const p=f.icon;return u.jsxs("a",{href:f.href,onClick:()=>l(!1),className:"flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-200 hover:bg-[#d4af37]/10 hover:text-[#f3e5ab] transition-all",children:[u.jsx(p,{className:"w-4 h-4 text-[#d4af37]"}),u.jsx("span",{children:f.name})]},f.name)}),u.jsx("div",{className:"pt-3 border-t border-white/10",children:u.jsxs("a",{href:"https://wa.me/5515996576807",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#d4af37] to-[#e5c05d] text-black text-sm font-black rounded-lg shadow-glow-gold",children:[u.jsx(Fr,{className:"w-4 h-4 fill-black"}),"Falar com Engenharia Outfire no WhatsApp"]})})]})]})]})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gf="182",za={ROTATE:0,DOLLY:1,PAN:2},Ba={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hv=0,Fm=1,Wv=2,hc=1,Hf=2,Oo=3,vs=0,ci=1,Ur=2,kr=0,ja=1,km=2,Bm=3,zm=4,Xv=5,Vs=100,qv=101,Yv=102,$v=103,Kv=104,Zv=200,Qv=201,Jv=202,e_=203,Hd=204,Wd=205,t_=206,n_=207,i_=208,r_=209,s_=210,a_=211,o_=212,l_=213,c_=214,Xd=0,qd=1,Yd=2,Ga=3,$d=4,Kd=5,Zd=6,Qd=7,Z0=0,u_=1,d_=2,lr=0,Q0=1,J0=2,eg=3,Cc=4,tg=5,ng=6,ig=7,rg=300,Xs=301,Ha=302,Jd=303,ef=304,Ac=306,tf=1e3,Or=1001,nf=1002,Fn=1003,f_=1004,Wl=1005,Pn=1006,ld=1007,Hs=1008,_i=1009,sg=1010,ag=1011,Bo=1012,Wf=1013,dr=1014,ar=1015,zr=1016,Xf=1017,qf=1018,zo=1020,og=35902,lg=35899,cg=1021,ug=1022,qi=1023,jr=1026,Ws=1027,dg=1028,Yf=1029,Wa=1030,$f=1031,Kf=1033,pc=33776,mc=33777,gc=33778,xc=33779,rf=35840,sf=35841,af=35842,of=35843,lf=36196,cf=37492,uf=37496,df=37488,ff=37489,hf=37490,pf=37491,mf=37808,gf=37809,xf=37810,vf=37811,_f=37812,yf=37813,Sf=37814,Mf=37815,wf=37816,bf=37817,Ef=37818,Tf=37819,Cf=37820,Af=37821,Rf=36492,Nf=36494,Pf=36495,Df=36283,Lf=36284,If=36285,Uf=36286,h_=3200,fg=0,p_=1,gs="",On="srgb",Xa="srgb-linear",wc="linear",Zt="srgb",ba=7680,jm=519,m_=512,g_=513,x_=514,Zf=515,v_=516,__=517,Qf=518,y_=519,Vm=35044,Gm="300 es",or=2e3,bc=2001;function hg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function jo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function S_(){const s=jo("canvas");return s.style.display="block",s}const Hm={};function Wm(...s){const e="THREE."+s.shift();console.log(e,...s)}function vt(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Bt(...s){const e="THREE."+s.shift();console.error(e,...s)}function Vo(...s){const e=s.join(" ");e in Hm||(Hm[e]=!0,vt(...s))}function M_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}class Ys{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,d=o.length;l<d;l++)o[l].call(this,e);e.target=null}}}const Xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vc=Math.PI/180,Ec=180/Math.PI;function Wo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Xn[s&255]+Xn[s>>8&255]+Xn[s>>16&255]+Xn[s>>24&255]+"-"+Xn[e&255]+Xn[e>>8&255]+"-"+Xn[e>>16&15|64]+Xn[e>>24&255]+"-"+Xn[t&63|128]+Xn[t>>8&255]+"-"+Xn[t>>16&255]+Xn[t>>24&255]+Xn[r&255]+Xn[r>>8&255]+Xn[r>>16&255]+Xn[r>>24&255]).toLowerCase()}function Dt(s,e,t){return Math.max(e,Math.min(t,s))}function w_(s,e){return(s%e+e)%e}function cd(s,e,t){return(1-t)*s+t*e}function Ao(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function oi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const b_={DEG2RAD:vc};class ft{constructor(e=0,t=0){ft.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Dt(this.x,e.x,t.x),this.y=Dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Dt(this.x,e,t),this.y=Dt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Dt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Dt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,d=this.y-e.y;return this.x=l*r-d*o+e.x,this.y=l*o+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qs{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,d,f){let p=r[o+0],m=r[o+1],x=r[o+2],v=r[o+3],S=l[d+0],M=l[d+1],T=l[d+2],A=l[d+3];if(f<=0){e[t+0]=p,e[t+1]=m,e[t+2]=x,e[t+3]=v;return}if(f>=1){e[t+0]=S,e[t+1]=M,e[t+2]=T,e[t+3]=A;return}if(v!==A||p!==S||m!==M||x!==T){let y=p*S+m*M+x*T+v*A;y<0&&(S=-S,M=-M,T=-T,A=-A,y=-y);let _=1-f;if(y<.9995){const C=Math.acos(y),I=Math.sin(C);_=Math.sin(_*C)/I,f=Math.sin(f*C)/I,p=p*_+S*f,m=m*_+M*f,x=x*_+T*f,v=v*_+A*f}else{p=p*_+S*f,m=m*_+M*f,x=x*_+T*f,v=v*_+A*f;const C=1/Math.sqrt(p*p+m*m+x*x+v*v);p*=C,m*=C,x*=C,v*=C}}e[t]=p,e[t+1]=m,e[t+2]=x,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,l,d){const f=r[o],p=r[o+1],m=r[o+2],x=r[o+3],v=l[d],S=l[d+1],M=l[d+2],T=l[d+3];return e[t]=f*T+x*v+p*M-m*S,e[t+1]=p*T+x*S+m*v-f*M,e[t+2]=m*T+x*M+f*S-p*v,e[t+3]=x*T-f*v-p*S-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,d=e._order,f=Math.cos,p=Math.sin,m=f(r/2),x=f(o/2),v=f(l/2),S=p(r/2),M=p(o/2),T=p(l/2);switch(d){case"XYZ":this._x=S*x*v+m*M*T,this._y=m*M*v-S*x*T,this._z=m*x*T+S*M*v,this._w=m*x*v-S*M*T;break;case"YXZ":this._x=S*x*v+m*M*T,this._y=m*M*v-S*x*T,this._z=m*x*T-S*M*v,this._w=m*x*v+S*M*T;break;case"ZXY":this._x=S*x*v-m*M*T,this._y=m*M*v+S*x*T,this._z=m*x*T+S*M*v,this._w=m*x*v-S*M*T;break;case"ZYX":this._x=S*x*v-m*M*T,this._y=m*M*v+S*x*T,this._z=m*x*T-S*M*v,this._w=m*x*v+S*M*T;break;case"YZX":this._x=S*x*v+m*M*T,this._y=m*M*v+S*x*T,this._z=m*x*T-S*M*v,this._w=m*x*v-S*M*T;break;case"XZY":this._x=S*x*v-m*M*T,this._y=m*M*v-S*x*T,this._z=m*x*T+S*M*v,this._w=m*x*v+S*M*T;break;default:vt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],d=t[1],f=t[5],p=t[9],m=t[2],x=t[6],v=t[10],S=r+f+v;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(x-p)*M,this._y=(l-m)*M,this._z=(d-o)*M}else if(r>f&&r>v){const M=2*Math.sqrt(1+r-f-v);this._w=(x-p)/M,this._x=.25*M,this._y=(o+d)/M,this._z=(l+m)/M}else if(f>v){const M=2*Math.sqrt(1+f-r-v);this._w=(l-m)/M,this._x=(o+d)/M,this._y=.25*M,this._z=(p+x)/M}else{const M=2*Math.sqrt(1+v-r-f);this._w=(d-o)/M,this._x=(l+m)/M,this._y=(p+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,d=e._w,f=t._x,p=t._y,m=t._z,x=t._w;return this._x=r*x+d*f+o*m-l*p,this._y=o*x+d*p+l*f-r*m,this._z=l*x+d*m+r*p-o*f,this._w=d*x-r*f-o*p-l*m,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let r=e._x,o=e._y,l=e._z,d=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,d=-d,f=-f);let p=1-t;if(f<.9995){const m=Math.acos(f),x=Math.sin(m);p=Math.sin(p*m)/x,t=Math.sin(t*m)/x,this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+d*t,this._onChangeCallback()}else this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+d*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,t=0,r=0){Z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,d=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*d,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*d,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*d,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,d=e.y,f=e.z,p=e.w,m=2*(d*o-f*r),x=2*(f*t-l*o),v=2*(l*r-d*t);return this.x=t+p*m+d*v-f*x,this.y=r+p*x+f*m-l*v,this.z=o+p*v+l*x-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Dt(this.x,e.x,t.x),this.y=Dt(this.y,e.y,t.y),this.z=Dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Dt(this.x,e,t),this.y=Dt(this.y,e,t),this.z=Dt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Dt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,d=t.x,f=t.y,p=t.z;return this.x=o*p-l*f,this.y=l*d-r*p,this.z=r*f-o*d,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ud.copy(this).projectOnVector(e),this.sub(ud)}reflect(e){return this.sub(ud.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Dt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ud=new Z,Xm=new qs;class wt{constructor(e,t,r,o,l,d,f,p,m){wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,d,f,p,m)}set(e,t,r,o,l,d,f,p,m){const x=this.elements;return x[0]=e,x[1]=o,x[2]=f,x[3]=t,x[4]=l,x[5]=p,x[6]=r,x[7]=d,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,d=r[0],f=r[3],p=r[6],m=r[1],x=r[4],v=r[7],S=r[2],M=r[5],T=r[8],A=o[0],y=o[3],_=o[6],C=o[1],I=o[4],P=o[7],U=o[2],L=o[5],O=o[8];return l[0]=d*A+f*C+p*U,l[3]=d*y+f*I+p*L,l[6]=d*_+f*P+p*O,l[1]=m*A+x*C+v*U,l[4]=m*y+x*I+v*L,l[7]=m*_+x*P+v*O,l[2]=S*A+M*C+T*U,l[5]=S*y+M*I+T*L,l[8]=S*_+M*P+T*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],d=e[4],f=e[5],p=e[6],m=e[7],x=e[8];return t*d*x-t*f*m-r*l*x+r*f*p+o*l*m-o*d*p}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],d=e[4],f=e[5],p=e[6],m=e[7],x=e[8],v=x*d-f*m,S=f*p-x*l,M=m*l-d*p,T=t*v+r*S+o*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=v*A,e[1]=(o*m-x*r)*A,e[2]=(f*r-o*d)*A,e[3]=S*A,e[4]=(x*t-o*p)*A,e[5]=(o*l-f*t)*A,e[6]=M*A,e[7]=(r*p-m*t)*A,e[8]=(d*t-r*l)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,d,f){const p=Math.cos(l),m=Math.sin(l);return this.set(r*p,r*m,-r*(p*d+m*f)+d+e,-o*m,o*p,-o*(-m*d+p*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(dd.makeScale(e,t)),this}rotate(e){return this.premultiply(dd.makeRotation(-e)),this}translate(e,t){return this.premultiply(dd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const dd=new wt,qm=new wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ym=new wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function E_(){const s={enabled:!0,workingColorSpace:Xa,spaces:{},convert:function(o,l,d){return this.enabled===!1||l===d||!l||!d||(this.spaces[l].transfer===Zt&&(o.r=Br(o.r),o.g=Br(o.g),o.b=Br(o.b)),this.spaces[l].primaries!==this.spaces[d].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Zt&&(o.r=Va(o.r),o.g=Va(o.g),o.b=Va(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===gs?wc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,d){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Vo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Vo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Xa]:{primaries:e,whitePoint:r,transfer:wc,toXYZ:qm,fromXYZ:Ym,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:e,whitePoint:r,transfer:Zt,toXYZ:qm,fromXYZ:Ym,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),s}const zt=E_();function Br(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Va(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ea;class T_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ea===void 0&&(Ea=jo("canvas")),Ea.width=e.width,Ea.height=e.height;const o=Ea.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ea}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=jo("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let d=0;d<l.length;d++)l[d]=Br(l[d]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Br(t[r]/255)*255):t[r]=Br(t[r]);return{data:t,width:e.width,height:e.height}}else return vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let C_=0;class Jf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=Wo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let d=0,f=o.length;d<f;d++)o[d].isDataTexture?l.push(fd(o[d].image)):l.push(fd(o[d]))}else l=fd(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function fd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?T_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(vt("Texture: Unable to serialize Texture."),{})}let A_=0;const hd=new Z;class kn extends Ys{constructor(e=kn.DEFAULT_IMAGE,t=kn.DEFAULT_MAPPING,r=Or,o=Or,l=Pn,d=Hs,f=qi,p=_i,m=kn.DEFAULT_ANISOTROPY,x=gs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=Wo(),this.name="",this.source=new Jf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=d,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=p,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(hd).x}get height(){return this.source.getSize(hd).y}get depth(){return this.source.getSize(hd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){vt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){vt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tf:e.x=e.x-Math.floor(e.x);break;case Or:e.x=e.x<0?0:1;break;case nf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tf:e.y=e.y-Math.floor(e.y);break;case Or:e.y=e.y<0?0:1;break;case nf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=rg;kn.DEFAULT_ANISOTROPY=1;class fn{constructor(e=0,t=0,r=0,o=1){fn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,d=e.elements;return this.x=d[0]*t+d[4]*r+d[8]*o+d[12]*l,this.y=d[1]*t+d[5]*r+d[9]*o+d[13]*l,this.z=d[2]*t+d[6]*r+d[10]*o+d[14]*l,this.w=d[3]*t+d[7]*r+d[11]*o+d[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const p=e.elements,m=p[0],x=p[4],v=p[8],S=p[1],M=p[5],T=p[9],A=p[2],y=p[6],_=p[10];if(Math.abs(x-S)<.01&&Math.abs(v-A)<.01&&Math.abs(T-y)<.01){if(Math.abs(x+S)<.1&&Math.abs(v+A)<.1&&Math.abs(T+y)<.1&&Math.abs(m+M+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(m+1)/2,P=(M+1)/2,U=(_+1)/2,L=(x+S)/4,O=(v+A)/4,j=(T+y)/4;return I>P&&I>U?I<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(I),o=L/r,l=O/r):P>U?P<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),r=L/o,l=j/o):U<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(U),r=O/l,o=j/l),this.set(r,o,l,t),this}let C=Math.sqrt((y-T)*(y-T)+(v-A)*(v-A)+(S-x)*(S-x));return Math.abs(C)<.001&&(C=1),this.x=(y-T)/C,this.y=(v-A)/C,this.z=(S-x)/C,this.w=Math.acos((m+M+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Dt(this.x,e.x,t.x),this.y=Dt(this.y,e.y,t.y),this.z=Dt(this.z,e.z,t.z),this.w=Dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Dt(this.x,e,t),this.y=Dt(this.y,e,t),this.z=Dt(this.z,e,t),this.w=Dt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Dt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class R_ extends Ys{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new fn(0,0,e,t),this.scissorTest=!1,this.viewport=new fn(0,0,e,t);const o={width:e,height:t,depth:r.depth},l=new kn(o);this.textures=[];const d=r.count;for(let f=0;f<d;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Jf(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cr extends R_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class pg extends kn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class N_ extends kn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xo{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let d=0,f=l.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,Vi):Vi.fromBufferAttribute(l,d),Vi.applyMatrix4(e.matrixWorld),this.expandByPoint(Vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Xl.copy(r.boundingBox)),Xl.applyMatrix4(e.matrixWorld),this.union(Xl)}const o=e.children;for(let l=0,d=o.length;l<d;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vi),Vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),ql.subVectors(this.max,Ro),Ta.subVectors(e.a,Ro),Ca.subVectors(e.b,Ro),Aa.subVectors(e.c,Ro),ls.subVectors(Ca,Ta),cs.subVectors(Aa,Ca),Os.subVectors(Ta,Aa);let t=[0,-ls.z,ls.y,0,-cs.z,cs.y,0,-Os.z,Os.y,ls.z,0,-ls.x,cs.z,0,-cs.x,Os.z,0,-Os.x,-ls.y,ls.x,0,-cs.y,cs.x,0,-Os.y,Os.x,0];return!pd(t,Ta,Ca,Aa,ql)||(t=[1,0,0,0,1,0,0,0,1],!pd(t,Ta,Ca,Aa,ql))?!1:(Yl.crossVectors(ls,cs),t=[Yl.x,Yl.y,Yl.z],pd(t,Ta,Ca,Aa,ql))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Rr=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Vi=new Z,Xl=new Xo,Ta=new Z,Ca=new Z,Aa=new Z,ls=new Z,cs=new Z,Os=new Z,Ro=new Z,ql=new Z,Yl=new Z,Fs=new Z;function pd(s,e,t,r,o){for(let l=0,d=s.length-3;l<=d;l+=3){Fs.fromArray(s,l);const f=o.x*Math.abs(Fs.x)+o.y*Math.abs(Fs.y)+o.z*Math.abs(Fs.z),p=e.dot(Fs),m=t.dot(Fs),x=r.dot(Fs);if(Math.max(-Math.max(p,m,x),Math.min(p,m,x))>f)return!1}return!0}const P_=new Xo,No=new Z,md=new Z;class eh{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):P_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,d=e.length;l<d;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);const t=No.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(No,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(md.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(md)),this.expandByPoint(No.copy(e.center).sub(md))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Nr=new Z,gd=new Z,$l=new Z,us=new Z,xd=new Z,Kl=new Z,vd=new Z;class th{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nr.copy(this.origin).addScaledVector(this.direction,t),Nr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){gd.copy(e).add(t).multiplyScalar(.5),$l.copy(t).sub(e).normalize(),us.copy(this.origin).sub(gd);const l=e.distanceTo(t)*.5,d=-this.direction.dot($l),f=us.dot(this.direction),p=-us.dot($l),m=us.lengthSq(),x=Math.abs(1-d*d);let v,S,M,T;if(x>0)if(v=d*p-f,S=d*f-p,T=l*x,v>=0)if(S>=-T)if(S<=T){const A=1/x;v*=A,S*=A,M=v*(v+d*S+2*f)+S*(d*v+S+2*p)+m}else S=l,v=Math.max(0,-(d*S+f)),M=-v*v+S*(S+2*p)+m;else S=-l,v=Math.max(0,-(d*S+f)),M=-v*v+S*(S+2*p)+m;else S<=-T?(v=Math.max(0,-(-d*l+f)),S=v>0?-l:Math.min(Math.max(-l,-p),l),M=-v*v+S*(S+2*p)+m):S<=T?(v=0,S=Math.min(Math.max(-l,-p),l),M=S*(S+2*p)+m):(v=Math.max(0,-(d*l+f)),S=v>0?l:Math.min(Math.max(-l,-p),l),M=-v*v+S*(S+2*p)+m);else S=d>0?-l:l,v=Math.max(0,-(d*S+f)),M=-v*v+S*(S+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(gd).addScaledVector($l,S),M}intersectSphere(e,t){Nr.subVectors(e.center,this.origin);const r=Nr.dot(this.direction),o=Nr.dot(Nr)-r*r,l=e.radius*e.radius;if(o>l)return null;const d=Math.sqrt(l-o),f=r-d,p=r+d;return p<0?null:f<0?this.at(p,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,d,f,p;const m=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,S=this.origin;return m>=0?(r=(e.min.x-S.x)*m,o=(e.max.x-S.x)*m):(r=(e.max.x-S.x)*m,o=(e.min.x-S.x)*m),x>=0?(l=(e.min.y-S.y)*x,d=(e.max.y-S.y)*x):(l=(e.max.y-S.y)*x,d=(e.min.y-S.y)*x),r>d||l>o||((l>r||isNaN(r))&&(r=l),(d<o||isNaN(o))&&(o=d),v>=0?(f=(e.min.z-S.z)*v,p=(e.max.z-S.z)*v):(f=(e.max.z-S.z)*v,p=(e.min.z-S.z)*v),r>p||f>o)||((f>r||r!==r)&&(r=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Nr)!==null}intersectTriangle(e,t,r,o,l){xd.subVectors(t,e),Kl.subVectors(r,e),vd.crossVectors(xd,Kl);let d=this.direction.dot(vd),f;if(d>0){if(o)return null;f=1}else if(d<0)f=-1,d=-d;else return null;us.subVectors(this.origin,e);const p=f*this.direction.dot(Kl.crossVectors(us,Kl));if(p<0)return null;const m=f*this.direction.dot(xd.cross(us));if(m<0||p+m>d)return null;const x=-f*us.dot(vd);return x<0?null:this.at(x/d,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cn{constructor(e,t,r,o,l,d,f,p,m,x,v,S,M,T,A,y){cn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,d,f,p,m,x,v,S,M,T,A,y)}set(e,t,r,o,l,d,f,p,m,x,v,S,M,T,A,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=l,_[5]=d,_[9]=f,_[13]=p,_[2]=m,_[6]=x,_[10]=v,_[14]=S,_[3]=M,_[7]=T,_[11]=A,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cn().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Ra.setFromMatrixColumn(e,0).length(),l=1/Ra.setFromMatrixColumn(e,1).length(),d=1/Ra.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*d,t[9]=r[9]*d,t[10]=r[10]*d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,d=Math.cos(r),f=Math.sin(r),p=Math.cos(o),m=Math.sin(o),x=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const S=d*x,M=d*v,T=f*x,A=f*v;t[0]=p*x,t[4]=-p*v,t[8]=m,t[1]=M+T*m,t[5]=S-A*m,t[9]=-f*p,t[2]=A-S*m,t[6]=T+M*m,t[10]=d*p}else if(e.order==="YXZ"){const S=p*x,M=p*v,T=m*x,A=m*v;t[0]=S+A*f,t[4]=T*f-M,t[8]=d*m,t[1]=d*v,t[5]=d*x,t[9]=-f,t[2]=M*f-T,t[6]=A+S*f,t[10]=d*p}else if(e.order==="ZXY"){const S=p*x,M=p*v,T=m*x,A=m*v;t[0]=S-A*f,t[4]=-d*v,t[8]=T+M*f,t[1]=M+T*f,t[5]=d*x,t[9]=A-S*f,t[2]=-d*m,t[6]=f,t[10]=d*p}else if(e.order==="ZYX"){const S=d*x,M=d*v,T=f*x,A=f*v;t[0]=p*x,t[4]=T*m-M,t[8]=S*m+A,t[1]=p*v,t[5]=A*m+S,t[9]=M*m-T,t[2]=-m,t[6]=f*p,t[10]=d*p}else if(e.order==="YZX"){const S=d*p,M=d*m,T=f*p,A=f*m;t[0]=p*x,t[4]=A-S*v,t[8]=T*v+M,t[1]=v,t[5]=d*x,t[9]=-f*x,t[2]=-m*x,t[6]=M*v+T,t[10]=S-A*v}else if(e.order==="XZY"){const S=d*p,M=d*m,T=f*p,A=f*m;t[0]=p*x,t[4]=-v,t[8]=m*x,t[1]=S*v+A,t[5]=d*x,t[9]=M*v-T,t[2]=T*v-M,t[6]=f*x,t[10]=A*v+S}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(D_,e,L_)}lookAt(e,t,r){const o=this.elements;return xi.subVectors(e,t),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),ds.crossVectors(r,xi),ds.lengthSq()===0&&(Math.abs(r.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),ds.crossVectors(r,xi)),ds.normalize(),Zl.crossVectors(xi,ds),o[0]=ds.x,o[4]=Zl.x,o[8]=xi.x,o[1]=ds.y,o[5]=Zl.y,o[9]=xi.y,o[2]=ds.z,o[6]=Zl.z,o[10]=xi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,d=r[0],f=r[4],p=r[8],m=r[12],x=r[1],v=r[5],S=r[9],M=r[13],T=r[2],A=r[6],y=r[10],_=r[14],C=r[3],I=r[7],P=r[11],U=r[15],L=o[0],O=o[4],j=o[8],b=o[12],R=o[1],z=o[5],$=o[9],Q=o[13],re=o[2],se=o[6],te=o[10],q=o[14],X=o[3],pe=o[7],oe=o[11],F=o[15];return l[0]=d*L+f*R+p*re+m*X,l[4]=d*O+f*z+p*se+m*pe,l[8]=d*j+f*$+p*te+m*oe,l[12]=d*b+f*Q+p*q+m*F,l[1]=x*L+v*R+S*re+M*X,l[5]=x*O+v*z+S*se+M*pe,l[9]=x*j+v*$+S*te+M*oe,l[13]=x*b+v*Q+S*q+M*F,l[2]=T*L+A*R+y*re+_*X,l[6]=T*O+A*z+y*se+_*pe,l[10]=T*j+A*$+y*te+_*oe,l[14]=T*b+A*Q+y*q+_*F,l[3]=C*L+I*R+P*re+U*X,l[7]=C*O+I*z+P*se+U*pe,l[11]=C*j+I*$+P*te+U*oe,l[15]=C*b+I*Q+P*q+U*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],d=e[1],f=e[5],p=e[9],m=e[13],x=e[2],v=e[6],S=e[10],M=e[14],T=e[3],A=e[7],y=e[11],_=e[15],C=p*M-m*S,I=f*M-m*v,P=f*S-p*v,U=d*M-m*x,L=d*S-p*x,O=d*v-f*x;return t*(A*C-y*I+_*P)-r*(T*C-y*U+_*L)+o*(T*I-A*U+_*O)-l*(T*P-A*L+y*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],d=e[4],f=e[5],p=e[6],m=e[7],x=e[8],v=e[9],S=e[10],M=e[11],T=e[12],A=e[13],y=e[14],_=e[15],C=v*y*m-A*S*m+A*p*M-f*y*M-v*p*_+f*S*_,I=T*S*m-x*y*m-T*p*M+d*y*M+x*p*_-d*S*_,P=x*A*m-T*v*m+T*f*M-d*A*M-x*f*_+d*v*_,U=T*v*p-x*A*p-T*f*S+d*A*S+x*f*y-d*v*y,L=t*C+r*I+o*P+l*U;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/L;return e[0]=C*O,e[1]=(A*S*l-v*y*l-A*o*M+r*y*M+v*o*_-r*S*_)*O,e[2]=(f*y*l-A*p*l+A*o*m-r*y*m-f*o*_+r*p*_)*O,e[3]=(v*p*l-f*S*l-v*o*m+r*S*m+f*o*M-r*p*M)*O,e[4]=I*O,e[5]=(x*y*l-T*S*l+T*o*M-t*y*M-x*o*_+t*S*_)*O,e[6]=(T*p*l-d*y*l-T*o*m+t*y*m+d*o*_-t*p*_)*O,e[7]=(d*S*l-x*p*l+x*o*m-t*S*m-d*o*M+t*p*M)*O,e[8]=P*O,e[9]=(T*v*l-x*A*l-T*r*M+t*A*M+x*r*_-t*v*_)*O,e[10]=(d*A*l-T*f*l+T*r*m-t*A*m-d*r*_+t*f*_)*O,e[11]=(x*f*l-d*v*l-x*r*m+t*v*m+d*r*M-t*f*M)*O,e[12]=U*O,e[13]=(x*A*o-T*v*o+T*r*S-t*A*S-x*r*y+t*v*y)*O,e[14]=(T*f*o-d*A*o-T*r*p+t*A*p+d*r*y-t*f*y)*O,e[15]=(d*v*o-x*f*o+x*r*p-t*v*p-d*r*S+t*f*S)*O,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,d=e.x,f=e.y,p=e.z,m=l*d,x=l*f;return this.set(m*d+r,m*f-o*p,m*p+o*f,0,m*f+o*p,x*f+r,x*p-o*d,0,m*p-o*f,x*p+o*d,l*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,d){return this.set(1,r,l,0,e,1,d,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,d=t._y,f=t._z,p=t._w,m=l+l,x=d+d,v=f+f,S=l*m,M=l*x,T=l*v,A=d*x,y=d*v,_=f*v,C=p*m,I=p*x,P=p*v,U=r.x,L=r.y,O=r.z;return o[0]=(1-(A+_))*U,o[1]=(M+P)*U,o[2]=(T-I)*U,o[3]=0,o[4]=(M-P)*L,o[5]=(1-(S+_))*L,o[6]=(y+C)*L,o[7]=0,o[8]=(T+I)*O,o[9]=(y-C)*O,o[10]=(1-(S+A))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;if(e.x=o[12],e.y=o[13],e.z=o[14],this.determinant()===0)return r.set(1,1,1),t.identity(),this;let l=Ra.set(o[0],o[1],o[2]).length();const d=Ra.set(o[4],o[5],o[6]).length(),f=Ra.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),Gi.copy(this);const m=1/l,x=1/d,v=1/f;return Gi.elements[0]*=m,Gi.elements[1]*=m,Gi.elements[2]*=m,Gi.elements[4]*=x,Gi.elements[5]*=x,Gi.elements[6]*=x,Gi.elements[8]*=v,Gi.elements[9]*=v,Gi.elements[10]*=v,t.setFromRotationMatrix(Gi),r.x=l,r.y=d,r.z=f,this}makePerspective(e,t,r,o,l,d,f=or,p=!1){const m=this.elements,x=2*l/(t-e),v=2*l/(r-o),S=(t+e)/(t-e),M=(r+o)/(r-o);let T,A;if(p)T=l/(d-l),A=d*l/(d-l);else if(f===or)T=-(d+l)/(d-l),A=-2*d*l/(d-l);else if(f===bc)T=-d/(d-l),A=-d*l/(d-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=x,m[4]=0,m[8]=S,m[12]=0,m[1]=0,m[5]=v,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,r,o,l,d,f=or,p=!1){const m=this.elements,x=2/(t-e),v=2/(r-o),S=-(t+e)/(t-e),M=-(r+o)/(r-o);let T,A;if(p)T=1/(d-l),A=d/(d-l);else if(f===or)T=-2/(d-l),A=-(d+l)/(d-l);else if(f===bc)T=-1/(d-l),A=-l/(d-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=x,m[4]=0,m[8]=0,m[12]=S,m[1]=0,m[5]=v,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=T,m[14]=A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Ra=new Z,Gi=new cn,D_=new Z(0,0,0),L_=new Z(1,1,1),ds=new Z,Zl=new Z,xi=new Z,$m=new cn,Km=new qs;class fr{constructor(e=0,t=0,r=0,o=fr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],d=o[4],f=o[8],p=o[1],m=o[5],x=o[9],v=o[2],S=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(Dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-d,l)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Dt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Dt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-Dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-x,M),this._y=0);break;default:vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return $m.makeRotationFromQuaternion(e),this.setFromRotationMatrix($m,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Km.setFromEuler(this),this.setFromQuaternion(Km,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fr.DEFAULT_ORDER="XYZ";class nh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let I_=0;const Zm=new Z,Na=new qs,Pr=new cn,Ql=new Z,Po=new Z,U_=new Z,O_=new qs,Qm=new Z(1,0,0),Jm=new Z(0,1,0),e0=new Z(0,0,1),t0={type:"added"},F_={type:"removed"},Pa={type:"childadded",child:null},_d={type:"childremoved",child:null};class Dn extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:I_++}),this.uuid=Wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new Z,t=new fr,r=new qs,o=new Z(1,1,1);function l(){r.setFromEuler(t,!1)}function d(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new cn},normalMatrix:{value:new wt}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Na.setFromAxisAngle(e,t),this.quaternion.multiply(Na),this}rotateOnWorldAxis(e,t){return Na.setFromAxisAngle(e,t),this.quaternion.premultiply(Na),this}rotateX(e){return this.rotateOnAxis(Qm,e)}rotateY(e){return this.rotateOnAxis(Jm,e)}rotateZ(e){return this.rotateOnAxis(e0,e)}translateOnAxis(e,t){return Zm.copy(e).applyQuaternion(this.quaternion),this.position.add(Zm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qm,e)}translateY(e){return this.translateOnAxis(Jm,e)}translateZ(e){return this.translateOnAxis(e0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Ql.copy(e):Ql.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pr.lookAt(Po,Ql,this.up):Pr.lookAt(Ql,Po,this.up),this.quaternion.setFromRotationMatrix(Pr),o&&(Pr.extractRotation(o.matrixWorld),Na.setFromRotationMatrix(Pr),this.quaternion.premultiply(Na.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Bt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(t0),Pa.child=e,this.dispatchEvent(Pa),Pa.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(F_),_d.child=e,this.dispatchEvent(_d),_d.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(t0),Pa.child=e,this.dispatchEvent(Pa),Pa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const d=this.children[r].getObjectByProperty(e,t);if(d!==void 0)return d}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,d=o.length;l<d;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,e,U_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,O_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,d=o.length;l<d;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let m=0,x=p.length;m<x;m++){const v=p[m];l(e.shapes,v)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,m=this.material.length;p<m;p++)f.push(l(e.materials,this.material[p]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(l(e.animations,p))}}if(t){const f=d(e.geometries),p=d(e.materials),m=d(e.textures),x=d(e.images),v=d(e.shapes),S=d(e.skeletons),M=d(e.animations),T=d(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),x.length>0&&(r.images=x),v.length>0&&(r.shapes=v),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=o,r;function d(f){const p=[];for(const m in f){const x=f[m];delete x.metadata,p.push(x)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Dn.DEFAULT_UP=new Z(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hi=new Z,Dr=new Z,yd=new Z,Lr=new Z,Da=new Z,La=new Z,n0=new Z,Sd=new Z,Md=new Z,wd=new Z,bd=new fn,Ed=new fn,Td=new fn;class Wi{constructor(e=new Z,t=new Z,r=new Z){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Hi.subVectors(e,t),o.cross(Hi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Hi.subVectors(o,t),Dr.subVectors(r,t),yd.subVectors(e,t);const d=Hi.dot(Hi),f=Hi.dot(Dr),p=Hi.dot(yd),m=Dr.dot(Dr),x=Dr.dot(yd),v=d*m-f*f;if(v===0)return l.set(0,0,0),null;const S=1/v,M=(m*p-f*x)*S,T=(d*x-f*p)*S;return l.set(1-M-T,T,M)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Lr)===null?!1:Lr.x>=0&&Lr.y>=0&&Lr.x+Lr.y<=1}static getInterpolation(e,t,r,o,l,d,f,p){return this.getBarycoord(e,t,r,o,Lr)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Lr.x),p.addScaledVector(d,Lr.y),p.addScaledVector(f,Lr.z),p)}static getInterpolatedAttribute(e,t,r,o,l,d){return bd.setScalar(0),Ed.setScalar(0),Td.setScalar(0),bd.fromBufferAttribute(e,t),Ed.fromBufferAttribute(e,r),Td.fromBufferAttribute(e,o),d.setScalar(0),d.addScaledVector(bd,l.x),d.addScaledVector(Ed,l.y),d.addScaledVector(Td,l.z),d}static isFrontFacing(e,t,r,o){return Hi.subVectors(r,t),Dr.subVectors(e,t),Hi.cross(Dr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hi.subVectors(this.c,this.b),Dr.subVectors(this.a,this.b),Hi.cross(Dr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Wi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let d,f;Da.subVectors(o,r),La.subVectors(l,r),Sd.subVectors(e,r);const p=Da.dot(Sd),m=La.dot(Sd);if(p<=0&&m<=0)return t.copy(r);Md.subVectors(e,o);const x=Da.dot(Md),v=La.dot(Md);if(x>=0&&v<=x)return t.copy(o);const S=p*v-x*m;if(S<=0&&p>=0&&x<=0)return d=p/(p-x),t.copy(r).addScaledVector(Da,d);wd.subVectors(e,l);const M=Da.dot(wd),T=La.dot(wd);if(T>=0&&M<=T)return t.copy(l);const A=M*m-p*T;if(A<=0&&m>=0&&T<=0)return f=m/(m-T),t.copy(r).addScaledVector(La,f);const y=x*T-M*v;if(y<=0&&v-x>=0&&M-T>=0)return n0.subVectors(l,o),f=(v-x)/(v-x+(M-T)),t.copy(o).addScaledVector(n0,f);const _=1/(y+A+S);return d=A*_,f=S*_,t.copy(r).addScaledVector(Da,d).addScaledVector(La,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fs={h:0,s:0,l:0},Jl={h:0,s:0,l:0};function Cd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Et{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=zt.workingColorSpace){return this.r=e,this.g=t,this.b=r,zt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=zt.workingColorSpace){if(e=w_(e,1),t=Dt(t,0,1),r=Dt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,d=2*r-l;this.r=Cd(d,l,e+1/3),this.g=Cd(d,l,e),this.b=Cd(d,l,e-1/3)}return zt.colorSpaceToWorking(this,o),this}setStyle(e,t=On){function r(l){l!==void 0&&parseFloat(l)<1&&vt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const d=o[1],f=o[2];switch(d){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:vt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],d=l.length;if(d===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(d===6)return this.setHex(parseInt(l,16),t);vt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=On){const r=mg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):vt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Br(e.r),this.g=Br(e.g),this.b=Br(e.b),this}copyLinearToSRGB(e){return this.r=Va(e.r),this.g=Va(e.g),this.b=Va(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return zt.workingToColorSpace(qn.copy(this),e),Math.round(Dt(qn.r*255,0,255))*65536+Math.round(Dt(qn.g*255,0,255))*256+Math.round(Dt(qn.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=zt.workingColorSpace){zt.workingToColorSpace(qn.copy(this),t);const r=qn.r,o=qn.g,l=qn.b,d=Math.max(r,o,l),f=Math.min(r,o,l);let p,m;const x=(f+d)/2;if(f===d)p=0,m=0;else{const v=d-f;switch(m=x<=.5?v/(d+f):v/(2-d-f),d){case r:p=(o-l)/v+(o<l?6:0);break;case o:p=(l-r)/v+2;break;case l:p=(r-o)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=x,e}getRGB(e,t=zt.workingColorSpace){return zt.workingToColorSpace(qn.copy(this),t),e.r=qn.r,e.g=qn.g,e.b=qn.b,e}getStyle(e=On){zt.workingToColorSpace(qn.copy(this),e);const t=qn.r,r=qn.g,o=qn.b;return e!==On?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(fs),this.setHSL(fs.h+e,fs.s+t,fs.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(fs),e.getHSL(Jl);const r=cd(fs.h,Jl.h,t),o=cd(fs.s,Jl.s,t),l=cd(fs.l,Jl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qn=new Et;Et.NAMES=mg;let k_=0;class qo extends Ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=Wo(),this.name="",this.type="Material",this.blending=ja,this.side=vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hd,this.blendDst=Wd,this.blendEquation=Vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ba,this.stencilZFail=ba,this.stencilZPass=ba,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){vt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){vt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ja&&(r.blending=this.blending),this.side!==vs&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Hd&&(r.blendSrc=this.blendSrc),this.blendDst!==Wd&&(r.blendDst=this.blendDst),this.blendEquation!==Vs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ga&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ba&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ba&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ba&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const d=[];for(const f in l){const p=l[f];delete p.metadata,d.push(p)}return d}if(t){const l=o(e.textures),d=o(e.images);l.length>0&&(r.textures=l),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Xi extends qo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fr,this.combine=Z0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vn=new Z,ec=new ft;let B_=0;class ur{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:B_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Vm,this.updateRanges=[],this.gpuType=ar,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)ec.fromBufferAttribute(this,t),ec.applyMatrix3(e),this.setXY(t,ec.x,ec.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix3(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ao(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=oi(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ao(t,this.array)),t}setX(e,t){return this.normalized&&(t=oi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ao(t,this.array)),t}setY(e,t){return this.normalized&&(t=oi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ao(t,this.array)),t}setZ(e,t){return this.normalized&&(t=oi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ao(t,this.array)),t}setW(e,t){return this.normalized&&(t=oi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=oi(t,this.array),r=oi(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=oi(t,this.array),r=oi(r,this.array),o=oi(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=oi(t,this.array),r=oi(r,this.array),o=oi(o,this.array),l=oi(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vm&&(e.usage=this.usage),e}}class gg extends ur{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class xg extends ur{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class gn extends ur{constructor(e,t,r){super(new Float32Array(e),t,r)}}let z_=0;const Ni=new cn,Ad=new Dn,Ia=new Z,vi=new Xo,Do=new Xo,Nn=new Z;class yi extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=Wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hg(e)?xg:gg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new wt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ni.makeRotationFromQuaternion(e),this.applyMatrix4(Ni),this}rotateX(e){return Ni.makeRotationX(e),this.applyMatrix4(Ni),this}rotateY(e){return Ni.makeRotationY(e),this.applyMatrix4(Ni),this}rotateZ(e){return Ni.makeRotationZ(e),this.applyMatrix4(Ni),this}translate(e,t,r){return Ni.makeTranslation(e,t,r),this.applyMatrix4(Ni),this}scale(e,t,r){return Ni.makeScale(e,t,r),this.applyMatrix4(Ni),this}lookAt(e){return Ad.lookAt(e),Ad.updateMatrix(),this.applyMatrix4(Ad.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ia).negate(),this.translate(Ia.x,Ia.y,Ia.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const d=e[o];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new gn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];vi.setFromBufferAttribute(l),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,vi.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,vi.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(vi.min),this.boundingBox.expandByPoint(vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new eh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const r=this.boundingSphere.center;if(vi.setFromBufferAttribute(e),t)for(let l=0,d=t.length;l<d;l++){const f=t[l];Do.setFromBufferAttribute(f),this.morphTargetsRelative?(Nn.addVectors(vi.min,Do.min),vi.expandByPoint(Nn),Nn.addVectors(vi.max,Do.max),vi.expandByPoint(Nn)):(vi.expandByPoint(Do.min),vi.expandByPoint(Do.max))}vi.getCenter(r);let o=0;for(let l=0,d=e.count;l<d;l++)Nn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(Nn));if(t)for(let l=0,d=t.length;l<d;l++){const f=t[l],p=this.morphTargetsRelative;for(let m=0,x=f.count;m<x;m++)Nn.fromBufferAttribute(f,m),p&&(Ia.fromBufferAttribute(e,m),Nn.add(Ia)),o=Math.max(o,r.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ur(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),f=[],p=[];for(let j=0;j<r.count;j++)f[j]=new Z,p[j]=new Z;const m=new Z,x=new Z,v=new Z,S=new ft,M=new ft,T=new ft,A=new Z,y=new Z;function _(j,b,R){m.fromBufferAttribute(r,j),x.fromBufferAttribute(r,b),v.fromBufferAttribute(r,R),S.fromBufferAttribute(l,j),M.fromBufferAttribute(l,b),T.fromBufferAttribute(l,R),x.sub(m),v.sub(m),M.sub(S),T.sub(S);const z=1/(M.x*T.y-T.x*M.y);isFinite(z)&&(A.copy(x).multiplyScalar(T.y).addScaledVector(v,-M.y).multiplyScalar(z),y.copy(v).multiplyScalar(M.x).addScaledVector(x,-T.x).multiplyScalar(z),f[j].add(A),f[b].add(A),f[R].add(A),p[j].add(y),p[b].add(y),p[R].add(y))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let j=0,b=C.length;j<b;++j){const R=C[j],z=R.start,$=R.count;for(let Q=z,re=z+$;Q<re;Q+=3)_(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const I=new Z,P=new Z,U=new Z,L=new Z;function O(j){U.fromBufferAttribute(o,j),L.copy(U);const b=f[j];I.copy(b),I.sub(U.multiplyScalar(U.dot(b))).normalize(),P.crossVectors(L,b);const z=P.dot(p[j])<0?-1:1;d.setXYZW(j,I.x,I.y,I.z,z)}for(let j=0,b=C.length;j<b;++j){const R=C[j],z=R.start,$=R.count;for(let Q=z,re=z+$;Q<re;Q+=3)O(e.getX(Q+0)),O(e.getX(Q+1)),O(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ur(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const o=new Z,l=new Z,d=new Z,f=new Z,p=new Z,m=new Z,x=new Z,v=new Z;if(e)for(let S=0,M=e.count;S<M;S+=3){const T=e.getX(S+0),A=e.getX(S+1),y=e.getX(S+2);o.fromBufferAttribute(t,T),l.fromBufferAttribute(t,A),d.fromBufferAttribute(t,y),x.subVectors(d,l),v.subVectors(o,l),x.cross(v),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,A),m.fromBufferAttribute(r,y),f.add(x),p.add(x),m.add(x),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let S=0,M=t.count;S<M;S+=3)o.fromBufferAttribute(t,S+0),l.fromBufferAttribute(t,S+1),d.fromBufferAttribute(t,S+2),x.subVectors(d,l),v.subVectors(o,l),x.cross(v),r.setXYZ(S+0,x.x,x.y,x.z),r.setXYZ(S+1,x.x,x.y,x.z),r.setXYZ(S+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Nn.fromBufferAttribute(e,t),Nn.normalize(),e.setXYZ(t,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function e(f,p){const m=f.array,x=f.itemSize,v=f.normalized,S=new m.constructor(p.length*x);let M=0,T=0;for(let A=0,y=p.length;A<y;A++){f.isInterleavedBufferAttribute?M=p[A]*f.data.stride+f.offset:M=p[A]*x;for(let _=0;_<x;_++)S[T++]=m[M++]}return new ur(S,x,v)}if(this.index===null)return vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yi,r=this.index.array,o=this.attributes;for(const f in o){const p=o[f],m=e(p,r);t.setAttribute(f,m)}const l=this.morphAttributes;for(const f in l){const p=[],m=l[f];for(let x=0,v=m.length;x<v;x++){const S=m[x],M=e(S,r);p.push(M)}t.morphAttributes[f]=p}t.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,p=d.length;f<p;f++){const m=d[f];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],x=[];for(let v=0,S=m.length;v<S;v++){const M=m[v];x.push(M.toJSON(e.data))}x.length>0&&(o[p]=x,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const x=o[m];this.setAttribute(m,x.clone(t))}const l=e.morphAttributes;for(const m in l){const x=[],v=l[m];for(let S=0,M=v.length;S<M;S++)x.push(v[S].clone(t));this.morphAttributes[m]=x}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,x=d.length;m<x;m++){const v=d[m];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const i0=new cn,ks=new th,tc=new eh,r0=new Z,nc=new Z,ic=new Z,rc=new Z,Rd=new Z,sc=new Z,s0=new Z,ac=new Z;class Re extends Dn{constructor(e=new yi,t=new Xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=o.length;l<d;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,d=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){sc.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const x=f[p],v=l[p];x!==0&&(Rd.fromBufferAttribute(v,e),d?sc.addScaledVector(Rd,x):sc.addScaledVector(Rd.sub(t),x))}t.add(sc)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),tc.copy(r.boundingSphere),tc.applyMatrix4(l),ks.copy(e.ray).recast(e.near),!(tc.containsPoint(ks.origin)===!1&&(ks.intersectSphere(tc,r0)===null||ks.origin.distanceToSquared(r0)>(e.far-e.near)**2))&&(i0.copy(l).invert(),ks.copy(e.ray).applyMatrix4(i0),!(r.boundingBox!==null&&ks.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ks)))}_computeIntersections(e,t,r){let o;const l=this.geometry,d=this.material,f=l.index,p=l.attributes.position,m=l.attributes.uv,x=l.attributes.uv1,v=l.attributes.normal,S=l.groups,M=l.drawRange;if(f!==null)if(Array.isArray(d))for(let T=0,A=S.length;T<A;T++){const y=S[T],_=d[y.materialIndex],C=Math.max(y.start,M.start),I=Math.min(f.count,Math.min(y.start+y.count,M.start+M.count));for(let P=C,U=I;P<U;P+=3){const L=f.getX(P),O=f.getX(P+1),j=f.getX(P+2);o=oc(this,_,e,r,m,x,v,L,O,j),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const T=Math.max(0,M.start),A=Math.min(f.count,M.start+M.count);for(let y=T,_=A;y<_;y+=3){const C=f.getX(y),I=f.getX(y+1),P=f.getX(y+2);o=oc(this,d,e,r,m,x,v,C,I,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(d))for(let T=0,A=S.length;T<A;T++){const y=S[T],_=d[y.materialIndex],C=Math.max(y.start,M.start),I=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let P=C,U=I;P<U;P+=3){const L=P,O=P+1,j=P+2;o=oc(this,_,e,r,m,x,v,L,O,j),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const T=Math.max(0,M.start),A=Math.min(p.count,M.start+M.count);for(let y=T,_=A;y<_;y+=3){const C=y,I=y+1,P=y+2;o=oc(this,d,e,r,m,x,v,C,I,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function j_(s,e,t,r,o,l,d,f){let p;if(e.side===ci?p=r.intersectTriangle(d,l,o,!0,f):p=r.intersectTriangle(o,l,d,e.side===vs,f),p===null)return null;ac.copy(f),ac.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(ac);return m<t.near||m>t.far?null:{distance:m,point:ac.clone(),object:s}}function oc(s,e,t,r,o,l,d,f,p,m){s.getVertexPosition(f,nc),s.getVertexPosition(p,ic),s.getVertexPosition(m,rc);const x=j_(s,e,t,r,nc,ic,rc,s0);if(x){const v=new Z;Wi.getBarycoord(s0,nc,ic,rc,v),o&&(x.uv=Wi.getInterpolatedAttribute(o,f,p,m,v,new ft)),l&&(x.uv1=Wi.getInterpolatedAttribute(l,f,p,m,v,new ft)),d&&(x.normal=Wi.getInterpolatedAttribute(d,f,p,m,v,new Z),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const S={a:f,b:p,c:m,normal:new Z,materialIndex:0};Wi.getNormal(nc,ic,rc,S.normal),x.face=S,x.barycoord=v}return x}class Pt extends yi{constructor(e=1,t=1,r=1,o=1,l=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:d};const f=this;o=Math.floor(o),l=Math.floor(l),d=Math.floor(d);const p=[],m=[],x=[],v=[];let S=0,M=0;T("z","y","x",-1,-1,r,t,e,d,l,0),T("z","y","x",1,-1,r,t,-e,d,l,1),T("x","z","y",1,1,e,r,t,o,d,2),T("x","z","y",1,-1,e,r,-t,o,d,3),T("x","y","z",1,-1,e,t,r,o,l,4),T("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(p),this.setAttribute("position",new gn(m,3)),this.setAttribute("normal",new gn(x,3)),this.setAttribute("uv",new gn(v,2));function T(A,y,_,C,I,P,U,L,O,j,b){const R=P/O,z=U/j,$=P/2,Q=U/2,re=L/2,se=O+1,te=j+1;let q=0,X=0;const pe=new Z;for(let oe=0;oe<te;oe++){const F=oe*z-Q;for(let ce=0;ce<se;ce++){const Ne=ce*R-$;pe[A]=Ne*C,pe[y]=F*I,pe[_]=re,m.push(pe.x,pe.y,pe.z),pe[A]=0,pe[y]=0,pe[_]=L>0?1:-1,x.push(pe.x,pe.y,pe.z),v.push(ce/O),v.push(1-oe/j),q+=1}}for(let oe=0;oe<j;oe++)for(let F=0;F<O;F++){const ce=S+F+se*oe,Ne=S+F+se*(oe+1),qe=S+(F+1)+se*(oe+1),We=S+(F+1)+se*oe;p.push(ce,Ne,We),p.push(Ne,qe,We),X+=6}f.addGroup(M,X,b),M+=X,S+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qa(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Qn(s){const e={};for(let t=0;t<s.length;t++){const r=qa(s[t]);for(const o in r)e[o]=r[o]}return e}function V_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function vg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:zt.workingColorSpace}const G_={clone:qa,merge:Qn};var H_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,W_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hr extends qo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=H_,this.fragmentShader=W_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qa(e.uniforms),this.uniformsGroups=V_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?t.uniforms[o]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?t.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?t.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?t.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?t.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?t.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?t.uniforms[o]={type:"m4",value:d.toArray()}:t.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class _g extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=or,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hs=new Z,a0=new ft,o0=new ft;class Jn extends _g{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ec*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ec*2*Math.atan(Math.tan(vc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){hs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hs.x,hs.y).multiplyScalar(-e/hs.z),hs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(hs.x,hs.y).multiplyScalar(-e/hs.z)}getViewSize(e,t){return this.getViewBounds(e,a0,o0),t.subVectors(o0,a0)}setViewOffset(e,t,r,o,l,d){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vc*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;l+=d.offsetX*o/p,t-=d.offsetY*r/m,o*=d.width/p,r*=d.height/m}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ua=-90,Oa=1;class X_ extends Dn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Jn(Ua,Oa,e,t);o.layers=this.layers,this.add(o);const l=new Jn(Ua,Oa,e,t);l.layers=this.layers,this.add(l);const d=new Jn(Ua,Oa,e,t);d.layers=this.layers,this.add(d);const f=new Jn(Ua,Oa,e,t);f.layers=this.layers,this.add(f);const p=new Jn(Ua,Oa,e,t);p.layers=this.layers,this.add(p);const m=new Jn(Ua,Oa,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,d,f,p]=t;for(const m of t)this.remove(m);if(e===or)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===bc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,d,f,p,m,x]=this.children,v=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,d),e.setRenderTarget(r,2,o),e.render(t,f),e.setRenderTarget(r,3,o),e.render(t,p),e.setRenderTarget(r,4,o),e.render(t,m),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),e.render(t,x),e.setRenderTarget(v,S,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class yg extends kn{constructor(e=[],t=Xs,r,o,l,d,f,p,m,x){super(e,t,r,o,l,d,f,p,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sg extends cr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new yg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Pt(5,5,5),l=new hr({name:"CubemapFromEquirect",uniforms:qa(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ci,blending:kr});l.uniforms.tEquirect.value=t;const d=new Re(o,l),f=t.minFilter;return t.minFilter===Hs&&(t.minFilter=Pn),new X_(1,10,this).update(e,d),t.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(t,r,o);e.setRenderTarget(l)}}class _n extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const q_={type:"move"};class Nd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,d=null;const f=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const A of e.hand.values()){const y=t.getJointPose(A,r),_=this._getHandJoint(m,A);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const x=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],S=x.position.distanceTo(v.position),M=.02,T=.005;m.inputState.pinching&&S>M+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&S<=M-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(q_)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new _n;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class ih{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Et(e),this.density=t}clone(){return new ih(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Mg extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fr,this.environmentIntensity=1,this.environmentRotation=new fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Y_ extends kn{constructor(e=null,t=1,r=1,o,l,d,f,p,m=Fn,x=Fn,v,S){super(null,d,f,p,m,x,o,l,v,S),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pd=new Z,$_=new Z,K_=new wt;class ms{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Pd.subVectors(r,t).cross($_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Pd),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||K_.getNormalMatrix(e),o=this.coplanarPoint(Pd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bs=new eh,Z_=new ft(.5,.5),lc=new Z;class rh{constructor(e=new ms,t=new ms,r=new ms,o=new ms,l=new ms,d=new ms){this.planes=[e,t,r,o,l,d]}set(e,t,r,o,l,d){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(d),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=or,r=!1){const o=this.planes,l=e.elements,d=l[0],f=l[1],p=l[2],m=l[3],x=l[4],v=l[5],S=l[6],M=l[7],T=l[8],A=l[9],y=l[10],_=l[11],C=l[12],I=l[13],P=l[14],U=l[15];if(o[0].setComponents(m-d,M-x,_-T,U-C).normalize(),o[1].setComponents(m+d,M+x,_+T,U+C).normalize(),o[2].setComponents(m+f,M+v,_+A,U+I).normalize(),o[3].setComponents(m-f,M-v,_-A,U-I).normalize(),r)o[4].setComponents(p,S,y,P).normalize(),o[5].setComponents(m-p,M-S,_-y,U-P).normalize();else if(o[4].setComponents(m-p,M-S,_-y,U-P).normalize(),t===or)o[5].setComponents(m+p,M+S,_+y,U+P).normalize();else if(t===bc)o[5].setComponents(p,S,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bs)}intersectsSprite(e){Bs.center.set(0,0,0);const t=Z_.distanceTo(e.center);return Bs.radius=.7071067811865476+t,Bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(lc.x=o.normal.x>0?e.max.x:e.min.x,lc.y=o.normal.y>0?e.max.y:e.min.y,lc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(lc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Of extends kn{constructor(e,t,r,o,l,d,f,p,m){super(e,t,r,o,l,d,f,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Go extends kn{constructor(e,t,r=dr,o,l,d,f=Fn,p=Fn,m,x=jr,v=1){if(x!==jr&&x!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:t,depth:v};super(S,o,l,d,f,p,x,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Q_ extends Go{constructor(e,t=dr,r=Xs,o,l,d=Fn,f=Fn,p,m=jr){const x={width:e,height:e,depth:1},v=[x,x,x,x,x,x];super(e,e,t,r,o,l,d,f,p,m),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class wg extends kn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class sh extends yi{constructor(e=1,t=32,r=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:o},t=Math.max(3,t);const l=[],d=[],f=[],p=[],m=new Z,x=new ft;d.push(0,0,0),f.push(0,0,1),p.push(.5,.5);for(let v=0,S=3;v<=t;v++,S+=3){const M=r+v/t*o;m.x=e*Math.cos(M),m.y=e*Math.sin(M),d.push(m.x,m.y,m.z),f.push(0,0,1),x.x=(d[S]/e+1)/2,x.y=(d[S+1]/e+1)/2,p.push(x.x,x.y)}for(let v=1;v<=t;v++)l.push(v,v+1,0);this.setIndex(l),this.setAttribute("position",new gn(d,3)),this.setAttribute("normal",new gn(f,3)),this.setAttribute("uv",new gn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class rn extends yi{constructor(e=1,t=1,r=1,o=32,l=1,d=!1,f=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:d,thetaStart:f,thetaLength:p};const m=this;o=Math.floor(o),l=Math.floor(l);const x=[],v=[],S=[],M=[];let T=0;const A=[],y=r/2;let _=0;C(),d===!1&&(e>0&&I(!0),t>0&&I(!1)),this.setIndex(x),this.setAttribute("position",new gn(v,3)),this.setAttribute("normal",new gn(S,3)),this.setAttribute("uv",new gn(M,2));function C(){const P=new Z,U=new Z;let L=0;const O=(t-e)/r;for(let j=0;j<=l;j++){const b=[],R=j/l,z=R*(t-e)+e;for(let $=0;$<=o;$++){const Q=$/o,re=Q*p+f,se=Math.sin(re),te=Math.cos(re);U.x=z*se,U.y=-R*r+y,U.z=z*te,v.push(U.x,U.y,U.z),P.set(se,O,te).normalize(),S.push(P.x,P.y,P.z),M.push(Q,1-R),b.push(T++)}A.push(b)}for(let j=0;j<o;j++)for(let b=0;b<l;b++){const R=A[b][j],z=A[b+1][j],$=A[b+1][j+1],Q=A[b][j+1];(e>0||b!==0)&&(x.push(R,z,Q),L+=3),(t>0||b!==l-1)&&(x.push(z,$,Q),L+=3)}m.addGroup(_,L,0),_+=L}function I(P){const U=T,L=new ft,O=new Z;let j=0;const b=P===!0?e:t,R=P===!0?1:-1;for(let $=1;$<=o;$++)v.push(0,y*R,0),S.push(0,R,0),M.push(.5,.5),T++;const z=T;for(let $=0;$<=o;$++){const re=$/o*p+f,se=Math.cos(re),te=Math.sin(re);O.x=b*te,O.y=y*R,O.z=b*se,v.push(O.x,O.y,O.z),S.push(0,R,0),L.x=se*.5+.5,L.y=te*.5*R+.5,M.push(L.x,L.y),T++}for(let $=0;$<o;$++){const Q=U+$,re=z+$;P===!0?x.push(re,re+1,Q):x.push(re+1,re,Q),j+=3}m.addGroup(_,j,P===!0?1:2),_+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ah extends rn{constructor(e=1,t=1,r=32,o=1,l=!1,d=0,f=Math.PI*2){super(0,e,t,r,o,l,d,f),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:d,thetaLength:f}}static fromJSON(e){return new ah(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class oh extends yi{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const l=[],d=[];f(o),m(r),x(),this.setAttribute("position",new gn(l,3)),this.setAttribute("normal",new gn(l.slice(),3)),this.setAttribute("uv",new gn(d,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(C){const I=new Z,P=new Z,U=new Z;for(let L=0;L<t.length;L+=3)M(t[L+0],I),M(t[L+1],P),M(t[L+2],U),p(I,P,U,C)}function p(C,I,P,U){const L=U+1,O=[];for(let j=0;j<=L;j++){O[j]=[];const b=C.clone().lerp(P,j/L),R=I.clone().lerp(P,j/L),z=L-j;for(let $=0;$<=z;$++)$===0&&j===L?O[j][$]=b:O[j][$]=b.clone().lerp(R,$/z)}for(let j=0;j<L;j++)for(let b=0;b<2*(L-j)-1;b++){const R=Math.floor(b/2);b%2===0?(S(O[j][R+1]),S(O[j+1][R]),S(O[j][R])):(S(O[j][R+1]),S(O[j+1][R+1]),S(O[j+1][R]))}}function m(C){const I=new Z;for(let P=0;P<l.length;P+=3)I.x=l[P+0],I.y=l[P+1],I.z=l[P+2],I.normalize().multiplyScalar(C),l[P+0]=I.x,l[P+1]=I.y,l[P+2]=I.z}function x(){const C=new Z;for(let I=0;I<l.length;I+=3){C.x=l[I+0],C.y=l[I+1],C.z=l[I+2];const P=y(C)/2/Math.PI+.5,U=_(C)/Math.PI+.5;d.push(P,1-U)}T(),v()}function v(){for(let C=0;C<d.length;C+=6){const I=d[C+0],P=d[C+2],U=d[C+4],L=Math.max(I,P,U),O=Math.min(I,P,U);L>.9&&O<.1&&(I<.2&&(d[C+0]+=1),P<.2&&(d[C+2]+=1),U<.2&&(d[C+4]+=1))}}function S(C){l.push(C.x,C.y,C.z)}function M(C,I){const P=C*3;I.x=e[P+0],I.y=e[P+1],I.z=e[P+2]}function T(){const C=new Z,I=new Z,P=new Z,U=new Z,L=new ft,O=new ft,j=new ft;for(let b=0,R=0;b<l.length;b+=9,R+=6){C.set(l[b+0],l[b+1],l[b+2]),I.set(l[b+3],l[b+4],l[b+5]),P.set(l[b+6],l[b+7],l[b+8]),L.set(d[R+0],d[R+1]),O.set(d[R+2],d[R+3]),j.set(d[R+4],d[R+5]),U.copy(C).add(I).add(P).divideScalar(3);const z=y(U);A(L,R+0,C,z),A(O,R+2,I,z),A(j,R+4,P,z)}}function A(C,I,P,U){U<0&&C.x===1&&(d[I]=C.x-1),P.x===0&&P.z===0&&(d[I]=U/2/Math.PI+.5)}function y(C){return Math.atan2(C.z,-C.x)}function _(C){return Math.atan2(-C.y,Math.sqrt(C.x*C.x+C.z*C.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oh(e.vertices,e.indices,e.radius,e.detail)}}class lh extends oh{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=1/r,l=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-o,-r,0,-o,r,0,o,-r,0,o,r,-o,-r,0,-o,r,0,o,-r,0,o,r,0,-r,0,-o,r,0,-o,-r,0,o,r,0,o],d=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(l,d,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new lh(e.radius,e.detail)}}class Yn extends yi{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,d=t/2,f=Math.floor(r),p=Math.floor(o),m=f+1,x=p+1,v=e/f,S=t/p,M=[],T=[],A=[],y=[];for(let _=0;_<x;_++){const C=_*S-d;for(let I=0;I<m;I++){const P=I*v-l;T.push(P,-C,0),A.push(0,0,1),y.push(I/f),y.push(1-_/p)}}for(let _=0;_<p;_++)for(let C=0;C<f;C++){const I=C+m*_,P=C+m*(_+1),U=C+1+m*(_+1),L=C+1+m*_;M.push(I,P,L),M.push(P,U,L)}this.setIndex(M),this.setAttribute("position",new gn(T,3)),this.setAttribute("normal",new gn(A,3)),this.setAttribute("uv",new gn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ir extends yi{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,d=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:d,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const p=Math.min(d+f,Math.PI);let m=0;const x=[],v=new Z,S=new Z,M=[],T=[],A=[],y=[];for(let _=0;_<=r;_++){const C=[],I=_/r;let P=0;_===0&&d===0?P=.5/t:_===r&&p===Math.PI&&(P=-.5/t);for(let U=0;U<=t;U++){const L=U/t;v.x=-e*Math.cos(o+L*l)*Math.sin(d+I*f),v.y=e*Math.cos(d+I*f),v.z=e*Math.sin(o+L*l)*Math.sin(d+I*f),T.push(v.x,v.y,v.z),S.copy(v).normalize(),A.push(S.x,S.y,S.z),y.push(L+P,1-I),C.push(m++)}x.push(C)}for(let _=0;_<r;_++)for(let C=0;C<t;C++){const I=x[_][C+1],P=x[_][C],U=x[_+1][C],L=x[_+1][C+1];(_!==0||d>0)&&M.push(I,P,L),(_!==r-1||p<Math.PI)&&M.push(P,U,L)}this.setIndex(M),this.setAttribute("position",new gn(T,3)),this.setAttribute("normal",new gn(A,3)),this.setAttribute("uv",new gn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ir(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class J_ extends hr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yt extends qo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fg,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class e1 extends qo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=h_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class t1 extends qo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Dd={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class n1{constructor(e,t,r){const o=this;let l=!1,d=0,f=0,p;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this._abortController=null,this.itemStart=function(x){f++,l===!1&&o.onStart!==void 0&&o.onStart(x,d,f),l=!0},this.itemEnd=function(x){d++,o.onProgress!==void 0&&o.onProgress(x,d,f),d===f&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(x){o.onError!==void 0&&o.onError(x)},this.resolveURL=function(x){return p?p(x):x},this.setURLModifier=function(x){return p=x,this},this.addHandler=function(x,v){return m.push(x,v),this},this.removeHandler=function(x){const v=m.indexOf(x);return v!==-1&&m.splice(v,2),this},this.getHandler=function(x){for(let v=0,S=m.length;v<S;v+=2){const M=m[v],T=m[v+1];if(M.global&&(M.lastIndex=0),M.test(x))return T}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const i1=new n1;class ch{constructor(e){this.manager=e!==void 0?e:i1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(o,l){r.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ch.DEFAULT_MATERIAL_NAME="__DEFAULT";const Fa=new WeakMap;class r1 extends ch{constructor(e){super(e)}load(e,t,r,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,d=Dd.get(`image:${e}`);if(d!==void 0){if(d.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(d),l.manager.itemEnd(e)},0);else{let v=Fa.get(d);v===void 0&&(v=[],Fa.set(d,v)),v.push({onLoad:t,onError:o})}return d}const f=jo("img");function p(){x(),t&&t(this);const v=Fa.get(this)||[];for(let S=0;S<v.length;S++){const M=v[S];M.onLoad&&M.onLoad(this)}Fa.delete(this),l.manager.itemEnd(e)}function m(v){x(),o&&o(v),Dd.remove(`image:${e}`);const S=Fa.get(this)||[];for(let M=0;M<S.length;M++){const T=S[M];T.onError&&T.onError(v)}Fa.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function x(){f.removeEventListener("load",p,!1),f.removeEventListener("error",m,!1)}return f.addEventListener("load",p,!1),f.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),Dd.add(`image:${e}`,f),l.manager.itemStart(e),f.src=e,f}}class bg extends ch{constructor(e){super(e)}load(e,t,r,o){const l=new kn,d=new r1(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},r,o),l}}class Rc extends Dn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Ld=new cn,l0=new Z,c0=new Z;class uh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=_i,this.map=null,this.mapPass=null,this.matrix=new cn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rh,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new fn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;l0.setFromMatrixPosition(e.matrixWorld),t.position.copy(l0),c0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(c0),t.updateMatrixWorld(),Ld.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ld,t.coordinateSystem,t.reversedDepth),t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Ld)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class s1 extends uh{constructor(){super(new Jn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,r=Ec*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height*this.aspect,l=e.distance||t.far;(r!==t.fov||o!==t.aspect||l!==t.far)&&(t.fov=r,t.aspect=o,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class u0 extends Rc{constructor(e,t,r=0,o=Math.PI/3,l=0,d=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.distance=r,this.angle=o,this.penumbra=l,this.decay=d,this.map=null,this.shadow=new s1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class a1 extends uh{constructor(){super(new Jn(90,1,.5,500)),this.isPointLightShadow=!0}}class d0 extends Rc{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new a1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class dh extends _g{constructor(e=-1,t=1,r=1,o=-1,l=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=d,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,d=r+e,f=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,d=l+m*this.view.width,f-=x*this.view.offsetY,p=f-x*this.view.height}this.projectionMatrix.makeOrthographic(l,d,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class o1 extends uh{constructor(){super(new dh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ff extends Rc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new o1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Eg extends Rc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class l1 extends Jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class c1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const f0=new cn;class kf{constructor(e,t,r=0,o=1/0){this.ray=new th(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new nh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Bt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return f0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(f0),this}intersectObject(e,t=!0,r=[]){return Bf(e,this,r,t),r.sort(h0),r}intersectObjects(e,t=!0,r=[]){for(let o=0,l=e.length;o<l;o++)Bf(e[o],this,r,t);return r.sort(h0),r}}function h0(s,e){return s.distance-e.distance}function Bf(s,e,t,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const l=s.children;for(let d=0,f=l.length;d<f;d++)Bf(l[d],e,t,!0)}}class p0{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Dt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class u1 extends Ys{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){vt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function m0(s,e,t,r){const o=d1(r);switch(t){case cg:return s*e;case dg:return s*e/o.components*o.byteLength;case Yf:return s*e/o.components*o.byteLength;case Wa:return s*e*2/o.components*o.byteLength;case $f:return s*e*2/o.components*o.byteLength;case ug:return s*e*3/o.components*o.byteLength;case qi:return s*e*4/o.components*o.byteLength;case Kf:return s*e*4/o.components*o.byteLength;case pc:case mc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case gc:case xc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sf:case of:return Math.max(s,16)*Math.max(e,8)/4;case rf:case af:return Math.max(s,8)*Math.max(e,8)/2;case lf:case cf:case df:case ff:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case uf:case hf:case pf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case mf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case gf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case xf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case vf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case _f:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case yf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Sf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Mf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case wf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case bf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ef:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Tf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Cf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Af:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Rf:case Nf:case Pf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Df:case Lf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case If:case Uf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function d1(s){switch(s){case _i:case sg:return{byteLength:1,components:1};case Bo:case ag:case zr:return{byteLength:2,components:1};case Xf:case qf:return{byteLength:2,components:4};case dr:case Wf:case ar:return{byteLength:4,components:1};case og:case lg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gf}}));typeof window<"u"&&(window.__THREE__?vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Tg(){let s=null,e=!1,t=null,r=null;function o(l,d){t(l,d),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function f1(s){const e=new WeakMap;function t(f,p){const m=f.array,x=f.usage,v=m.byteLength,S=s.createBuffer();s.bindBuffer(p,S),s.bufferData(p,m,x),f.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=s.HALF_FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,p,m){const x=p.array,v=p.updateRanges;if(s.bindBuffer(m,f),v.length===0)s.bufferSubData(m,0,x);else{v.sort((M,T)=>M.start-T.start);let S=0;for(let M=1;M<v.length;M++){const T=v[S],A=v[M];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++S,v[S]=A)}v.length=S+1;for(let M=0,T=v.length;M<T;M++){const A=v[M];s.bufferSubData(m,A.start*x.BYTES_PER_ELEMENT,x,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function d(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const x=e.get(f);(!x||x.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,t(f,p));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,p),m.version=f.version}}return{get:o,remove:l,update:d}}var h1=`#ifdef USE_ALPHAHASH
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
}`,bt={alphahash_fragment:h1,alphahash_pars_fragment:p1,alphamap_fragment:m1,alphamap_pars_fragment:g1,alphatest_fragment:x1,alphatest_pars_fragment:v1,aomap_fragment:_1,aomap_pars_fragment:y1,batching_pars_vertex:S1,batching_vertex:M1,begin_vertex:w1,beginnormal_vertex:b1,bsdfs:E1,iridescence_fragment:T1,bumpmap_pars_fragment:C1,clipping_planes_fragment:A1,clipping_planes_pars_fragment:R1,clipping_planes_pars_vertex:N1,clipping_planes_vertex:P1,color_fragment:D1,color_pars_fragment:L1,color_pars_vertex:I1,color_vertex:U1,common:O1,cube_uv_reflection_fragment:F1,defaultnormal_vertex:k1,displacementmap_pars_vertex:B1,displacementmap_vertex:z1,emissivemap_fragment:j1,emissivemap_pars_fragment:V1,colorspace_fragment:G1,colorspace_pars_fragment:H1,envmap_fragment:W1,envmap_common_pars_fragment:X1,envmap_pars_fragment:q1,envmap_pars_vertex:Y1,envmap_physical_pars_fragment:sy,envmap_vertex:$1,fog_vertex:K1,fog_pars_vertex:Z1,fog_fragment:Q1,fog_pars_fragment:J1,gradientmap_pars_fragment:ey,lightmap_pars_fragment:ty,lights_lambert_fragment:ny,lights_lambert_pars_fragment:iy,lights_pars_begin:ry,lights_toon_fragment:ay,lights_toon_pars_fragment:oy,lights_phong_fragment:ly,lights_phong_pars_fragment:cy,lights_physical_fragment:uy,lights_physical_pars_fragment:dy,lights_fragment_begin:fy,lights_fragment_maps:hy,lights_fragment_end:py,logdepthbuf_fragment:my,logdepthbuf_pars_fragment:gy,logdepthbuf_pars_vertex:xy,logdepthbuf_vertex:vy,map_fragment:_y,map_pars_fragment:yy,map_particle_fragment:Sy,map_particle_pars_fragment:My,metalnessmap_fragment:wy,metalnessmap_pars_fragment:by,morphinstance_vertex:Ey,morphcolor_vertex:Ty,morphnormal_vertex:Cy,morphtarget_pars_vertex:Ay,morphtarget_vertex:Ry,normal_fragment_begin:Ny,normal_fragment_maps:Py,normal_pars_fragment:Dy,normal_pars_vertex:Ly,normal_vertex:Iy,normalmap_pars_fragment:Uy,clearcoat_normal_fragment_begin:Oy,clearcoat_normal_fragment_maps:Fy,clearcoat_pars_fragment:ky,iridescence_pars_fragment:By,opaque_fragment:zy,packing:jy,premultiplied_alpha_fragment:Vy,project_vertex:Gy,dithering_fragment:Hy,dithering_pars_fragment:Wy,roughnessmap_fragment:Xy,roughnessmap_pars_fragment:qy,shadowmap_pars_fragment:Yy,shadowmap_pars_vertex:$y,shadowmap_vertex:Ky,shadowmask_pars_fragment:Zy,skinbase_vertex:Qy,skinning_pars_vertex:Jy,skinning_vertex:eS,skinnormal_vertex:tS,specularmap_fragment:nS,specularmap_pars_fragment:iS,tonemapping_fragment:rS,tonemapping_pars_fragment:sS,transmission_fragment:aS,transmission_pars_fragment:oS,uv_pars_fragment:lS,uv_pars_vertex:cS,uv_vertex:uS,worldpos_vertex:dS,background_vert:fS,background_frag:hS,backgroundCube_vert:pS,backgroundCube_frag:mS,cube_vert:gS,cube_frag:xS,depth_vert:vS,depth_frag:_S,distance_vert:yS,distance_frag:SS,equirect_vert:MS,equirect_frag:wS,linedashed_vert:bS,linedashed_frag:ES,meshbasic_vert:TS,meshbasic_frag:CS,meshlambert_vert:AS,meshlambert_frag:RS,meshmatcap_vert:NS,meshmatcap_frag:PS,meshnormal_vert:DS,meshnormal_frag:LS,meshphong_vert:IS,meshphong_frag:US,meshphysical_vert:OS,meshphysical_frag:FS,meshtoon_vert:kS,meshtoon_frag:BS,points_vert:zS,points_frag:jS,shadow_vert:VS,shadow_frag:GS,sprite_vert:HS,sprite_frag:WS},ze={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},envMapRotation:{value:new wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},sr={basic:{uniforms:Qn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:bt.meshbasic_vert,fragmentShader:bt.meshbasic_frag},lambert:{uniforms:Qn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Et(0)}}]),vertexShader:bt.meshlambert_vert,fragmentShader:bt.meshlambert_frag},phong:{uniforms:Qn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:bt.meshphong_vert,fragmentShader:bt.meshphong_frag},standard:{uniforms:Qn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag},toon:{uniforms:Qn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new Et(0)}}]),vertexShader:bt.meshtoon_vert,fragmentShader:bt.meshtoon_frag},matcap:{uniforms:Qn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:bt.meshmatcap_vert,fragmentShader:bt.meshmatcap_frag},points:{uniforms:Qn([ze.points,ze.fog]),vertexShader:bt.points_vert,fragmentShader:bt.points_frag},dashed:{uniforms:Qn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:bt.linedashed_vert,fragmentShader:bt.linedashed_frag},depth:{uniforms:Qn([ze.common,ze.displacementmap]),vertexShader:bt.depth_vert,fragmentShader:bt.depth_frag},normal:{uniforms:Qn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:bt.meshnormal_vert,fragmentShader:bt.meshnormal_frag},sprite:{uniforms:Qn([ze.sprite,ze.fog]),vertexShader:bt.sprite_vert,fragmentShader:bt.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:bt.background_vert,fragmentShader:bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wt}},vertexShader:bt.backgroundCube_vert,fragmentShader:bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:bt.cube_vert,fragmentShader:bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:bt.equirect_vert,fragmentShader:bt.equirect_frag},distance:{uniforms:Qn([ze.common,ze.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:bt.distance_vert,fragmentShader:bt.distance_frag},shadow:{uniforms:Qn([ze.lights,ze.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:bt.shadow_vert,fragmentShader:bt.shadow_frag}};sr.physical={uniforms:Qn([sr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag};const cc={r:0,b:0,g:0},zs=new fr,XS=new cn;function qS(s,e,t,r,o,l,d){const f=new Et(0);let p=l===!0?0:1,m,x,v=null,S=0,M=null;function T(I){let P=I.isScene===!0?I.background:null;return P&&P.isTexture&&(P=(I.backgroundBlurriness>0?t:e).get(P)),P}function A(I){let P=!1;const U=T(I);U===null?_(f,p):U&&U.isColor&&(_(U,1),P=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?r.buffers.color.setClear(0,0,0,1,d):L==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(I,P){const U=T(P);U&&(U.isCubeTexture||U.mapping===Ac)?(x===void 0&&(x=new Re(new Pt(1,1,1),new hr({name:"BackgroundCubeMaterial",uniforms:qa(sr.backgroundCube.uniforms),vertexShader:sr.backgroundCube.vertexShader,fragmentShader:sr.backgroundCube.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(L,O,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(x)),zs.copy(P.backgroundRotation),zs.x*=-1,zs.y*=-1,zs.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(zs.y*=-1,zs.z*=-1),x.material.uniforms.envMap.value=U,x.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(XS.makeRotationFromEuler(zs)),x.material.toneMapped=zt.getTransfer(U.colorSpace)!==Zt,(v!==U||S!==U.version||M!==s.toneMapping)&&(x.material.needsUpdate=!0,v=U,S=U.version,M=s.toneMapping),x.layers.enableAll(),I.unshift(x,x.geometry,x.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new Re(new Yn(2,2),new hr({name:"BackgroundMaterial",uniforms:qa(sr.background.uniforms),vertexShader:sr.background.vertexShader,fragmentShader:sr.background.fragmentShader,side:vs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=zt.getTransfer(U.colorSpace)!==Zt,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(v!==U||S!==U.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,v=U,S=U.version,M=s.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function _(I,P){I.getRGB(cc,vg(s)),r.buffers.color.setClear(cc.r,cc.g,cc.b,P,d)}function C(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(I,P=1){f.set(I),p=P,_(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(I){p=I,_(f,p)},render:A,addToRenderList:y,dispose:C}}function YS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=S(null);let l=o,d=!1;function f(R,z,$,Q,re){let se=!1;const te=v(Q,$,z);l!==te&&(l=te,m(l.object)),se=M(R,Q,$,re),se&&T(R,Q,$,re),re!==null&&e.update(re,s.ELEMENT_ARRAY_BUFFER),(se||d)&&(d=!1,P(R,z,$,Q),re!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function p(){return s.createVertexArray()}function m(R){return s.bindVertexArray(R)}function x(R){return s.deleteVertexArray(R)}function v(R,z,$){const Q=$.wireframe===!0;let re=r[R.id];re===void 0&&(re={},r[R.id]=re);let se=re[z.id];se===void 0&&(se={},re[z.id]=se);let te=se[Q];return te===void 0&&(te=S(p()),se[Q]=te),te}function S(R){const z=[],$=[],Q=[];for(let re=0;re<t;re++)z[re]=0,$[re]=0,Q[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:$,attributeDivisors:Q,object:R,attributes:{},index:null}}function M(R,z,$,Q){const re=l.attributes,se=z.attributes;let te=0;const q=$.getAttributes();for(const X in q)if(q[X].location>=0){const oe=re[X];let F=se[X];if(F===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(F=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(F=R.instanceColor)),oe===void 0||oe.attribute!==F||F&&oe.data!==F.data)return!0;te++}return l.attributesNum!==te||l.index!==Q}function T(R,z,$,Q){const re={},se=z.attributes;let te=0;const q=$.getAttributes();for(const X in q)if(q[X].location>=0){let oe=se[X];oe===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(oe=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(oe=R.instanceColor));const F={};F.attribute=oe,oe&&oe.data&&(F.data=oe.data),re[X]=F,te++}l.attributes=re,l.attributesNum=te,l.index=Q}function A(){const R=l.newAttributes;for(let z=0,$=R.length;z<$;z++)R[z]=0}function y(R){_(R,0)}function _(R,z){const $=l.newAttributes,Q=l.enabledAttributes,re=l.attributeDivisors;$[R]=1,Q[R]===0&&(s.enableVertexAttribArray(R),Q[R]=1),re[R]!==z&&(s.vertexAttribDivisor(R,z),re[R]=z)}function C(){const R=l.newAttributes,z=l.enabledAttributes;for(let $=0,Q=z.length;$<Q;$++)z[$]!==R[$]&&(s.disableVertexAttribArray($),z[$]=0)}function I(R,z,$,Q,re,se,te){te===!0?s.vertexAttribIPointer(R,z,$,re,se):s.vertexAttribPointer(R,z,$,Q,re,se)}function P(R,z,$,Q){A();const re=Q.attributes,se=$.getAttributes(),te=z.defaultAttributeValues;for(const q in se){const X=se[q];if(X.location>=0){let pe=re[q];if(pe===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(pe=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(pe=R.instanceColor)),pe!==void 0){const oe=pe.normalized,F=pe.itemSize,ce=e.get(pe);if(ce===void 0)continue;const Ne=ce.buffer,qe=ce.type,We=ce.bytesPerElement,ne=qe===s.INT||qe===s.UNSIGNED_INT||pe.gpuType===Wf;if(pe.isInterleavedBufferAttribute){const fe=pe.data,ye=fe.stride,Be=pe.offset;if(fe.isInstancedInterleavedBuffer){for(let Le=0;Le<X.locationSize;Le++)_(X.location+Le,fe.meshPerAttribute);R.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Le=0;Le<X.locationSize;Le++)y(X.location+Le);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let Le=0;Le<X.locationSize;Le++)I(X.location+Le,F/X.locationSize,qe,oe,ye*We,(Be+F/X.locationSize*Le)*We,ne)}else{if(pe.isInstancedBufferAttribute){for(let fe=0;fe<X.locationSize;fe++)_(X.location+fe,pe.meshPerAttribute);R.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let fe=0;fe<X.locationSize;fe++)y(X.location+fe);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let fe=0;fe<X.locationSize;fe++)I(X.location+fe,F/X.locationSize,qe,oe,F*We,F/X.locationSize*fe*We,ne)}}else if(te!==void 0){const oe=te[q];if(oe!==void 0)switch(oe.length){case 2:s.vertexAttrib2fv(X.location,oe);break;case 3:s.vertexAttrib3fv(X.location,oe);break;case 4:s.vertexAttrib4fv(X.location,oe);break;default:s.vertexAttrib1fv(X.location,oe)}}}}C()}function U(){j();for(const R in r){const z=r[R];for(const $ in z){const Q=z[$];for(const re in Q)x(Q[re].object),delete Q[re];delete z[$]}delete r[R]}}function L(R){if(r[R.id]===void 0)return;const z=r[R.id];for(const $ in z){const Q=z[$];for(const re in Q)x(Q[re].object),delete Q[re];delete z[$]}delete r[R.id]}function O(R){for(const z in r){const $=r[z];if($[R.id]===void 0)continue;const Q=$[R.id];for(const re in Q)x(Q[re].object),delete Q[re];delete $[R.id]}}function j(){b(),d=!0,l!==o&&(l=o,m(l.object))}function b(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:j,resetDefaultState:b,dispose:U,releaseStatesOfGeometry:L,releaseStatesOfProgram:O,initAttributes:A,enableAttribute:y,disableUnusedAttributes:C}}function $S(s,e,t){let r;function o(m){r=m}function l(m,x){s.drawArrays(r,m,x),t.update(x,r,1)}function d(m,x,v){v!==0&&(s.drawArraysInstanced(r,m,x,v),t.update(x,r,v))}function f(m,x,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,x,0,v);let M=0;for(let T=0;T<v;T++)M+=x[T];t.update(M,r,1)}function p(m,x,v,S){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<m.length;T++)d(m[T],x[T],S[T]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,x,0,S,0,v);let T=0;for(let A=0;A<v;A++)T+=x[A]*S[A];t.update(T,r,1)}}this.setMode=o,this.render=l,this.renderInstances=d,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function KS(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function d(O){return!(O!==qi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const j=O===zr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==_i&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==ar&&!j)}function p(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const x=p(m);x!==m&&(vt("WebGLRenderer:",m,"not supported, using",x,"instead."),m=x);const v=t.logarithmicDepthBuffer===!0,S=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),C=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),I=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=s.getParameter(s.MAX_SAMPLES),L=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:v,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:C,maxVaryings:I,maxFragmentUniforms:P,maxSamples:U,samples:L}}function ZS(s){const e=this;let t=null,r=0,o=!1,l=!1;const d=new ms,f=new wt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const M=v.length!==0||S||r!==0||o;return o=S,r=v.length,M},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,S){t=x(v,S,0)},this.setState=function(v,S,M){const T=v.clippingPlanes,A=v.clipIntersection,y=v.clipShadows,_=s.get(v);if(!o||T===null||T.length===0||l&&!y)l?x(null):m();else{const C=l?0:r,I=C*4;let P=_.clippingState||null;p.value=P,P=x(T,S,I,M);for(let U=0;U!==I;++U)P[U]=t[U];_.clippingState=P,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=C}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(v,S,M,T){const A=v!==null?v.length:0;let y=null;if(A!==0){if(y=p.value,T!==!0||y===null){const _=M+A*4,C=S.matrixWorldInverse;f.getNormalMatrix(C),(y===null||y.length<_)&&(y=new Float32Array(_));for(let I=0,P=M;I!==A;++I,P+=4)d.copy(v[I]).applyMatrix4(C,f),d.normal.toArray(y,P),y[P+3]=d.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}function QS(s){let e=new WeakMap;function t(d,f){return f===Jd?d.mapping=Xs:f===ef&&(d.mapping=Ha),d}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===Jd||f===ef)if(e.has(d)){const p=e.get(d).texture;return t(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new Sg(p.height);return m.fromEquirectangularTexture(s,d),e.set(d,m),d.addEventListener("dispose",o),t(m.texture,d.mapping)}else return null}}return d}function o(d){const f=d.target;f.removeEventListener("dispose",o);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const xs=4,g0=[.125,.215,.35,.446,.526,.582],Gs=20,JS=256,Lo=new dh,x0=new Et;let Id=null,Ud=0,Od=0,Fd=!1;const eM=new Z;class v0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:d=256,position:f=eM}=l;Id=this._renderer.getRenderTarget(),Ud=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,f),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=S0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=y0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Id,Ud,Od),this._renderer.xr.enabled=Fd,e.scissorTest=!1,ka(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xs||e.mapping===Ha?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Id=this._renderer.getRenderTarget(),Ud=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:zr,format:qi,colorSpace:Xa,depthBuffer:!1},o=_0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_0(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=tM(l)),this._blurMaterial=iM(l,e,t),this._ggxMaterial=nM(l,e,t)}return o}_compileMaterial(e){const t=new Re(new yi,e);this._renderer.compile(t,Lo)}_sceneToCubeUV(e,t,r,o,l){const p=new Jn(90,1,t,r),m=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,M=v.toneMapping;v.getClearColor(x0),v.toneMapping=lr,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Re(new Pt,new Xi({name:"PMREM.Background",side:ci,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,y=A.material;let _=!1;const C=e.background;C?C.isColor&&(y.color.copy(C),e.background=null,_=!0):(y.color.copy(x0),_=!0);for(let I=0;I<6;I++){const P=I%3;P===0?(p.up.set(0,m[I],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+x[I],l.y,l.z)):P===1?(p.up.set(0,0,m[I]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+x[I],l.z)):(p.up.set(0,m[I],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+x[I]));const U=this._cubeSize;ka(o,P*U,I>2?U:0,U,U),v.setRenderTarget(o),_&&v.render(A,p),v.render(e,p)}v.toneMapping=M,v.autoClear=S,e.background=C}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Xs||e.mapping===Ha;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=S0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=y0());const l=o?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=l;const f=l.uniforms;f.envMap.value=e;const p=this._cubeSize;ka(t,0,0,3*p,2*p),r.setRenderTarget(t),r.render(d,Lo)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,d=this._ggxMaterial,f=this._lodMeshes[r];f.material=d;const p=d.uniforms,m=r/(this._lodMeshes.length-1),x=t/(this._lodMeshes.length-1),v=Math.sqrt(m*m-x*x),S=0+m*1.25,M=v*S,{_lodMax:T}=this,A=this._sizeLods[r],y=3*A*(r>T-xs?r-T+xs:0),_=4*(this._cubeSize-A);p.envMap.value=e.texture,p.roughness.value=M,p.mipInt.value=T-t,ka(l,y,_,3*A,2*A),o.setRenderTarget(l),o.render(f,Lo),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=T-r,ka(e,y,_,3*A,2*A),o.setRenderTarget(e),o.render(f,Lo)}_blur(e,t,r,o,l){const d=this._pingPongRenderTarget;this._halfBlur(e,d,t,r,o,"latitudinal",l),this._halfBlur(d,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,d,f){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Bt("blur direction must be either latitudinal or longitudinal!");const x=3,v=this._lodMeshes[o];v.material=m;const S=m.uniforms,M=this._sizeLods[r]-1,T=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*Gs-1),A=l/T,y=isFinite(l)?1+Math.floor(x*A):Gs;y>Gs&&vt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Gs}`);const _=[];let C=0;for(let O=0;O<Gs;++O){const j=O/A,b=Math.exp(-j*j/2);_.push(b),O===0?C+=b:O<y&&(C+=2*b)}for(let O=0;O<_.length;O++)_[O]=_[O]/C;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=_,S.latitudinal.value=d==="latitudinal",f&&(S.poleAxis.value=f);const{_lodMax:I}=this;S.dTheta.value=T,S.mipInt.value=I-r;const P=this._sizeLods[o],U=3*P*(o>I-xs?o-I+xs:0),L=4*(this._cubeSize-P);ka(t,U,L,3*P,2*P),p.setRenderTarget(t),p.render(v,Lo)}}function tM(s){const e=[],t=[],r=[];let o=s;const l=s-xs+1+g0.length;for(let d=0;d<l;d++){const f=Math.pow(2,o);e.push(f);let p=1/f;d>s-xs?p=g0[d-s+xs-1]:d===0&&(p=0),t.push(p);const m=1/(f-2),x=-m,v=1+m,S=[x,x,v,x,v,v,x,x,v,v,x,v],M=6,T=6,A=3,y=2,_=1,C=new Float32Array(A*T*M),I=new Float32Array(y*T*M),P=new Float32Array(_*T*M);for(let L=0;L<M;L++){const O=L%3*2/3-1,j=L>2?0:-1,b=[O,j,0,O+2/3,j,0,O+2/3,j+1,0,O,j,0,O+2/3,j+1,0,O,j+1,0];C.set(b,A*T*L),I.set(S,y*T*L);const R=[L,L,L,L,L,L];P.set(R,_*T*L)}const U=new yi;U.setAttribute("position",new ur(C,A)),U.setAttribute("uv",new ur(I,y)),U.setAttribute("faceIndex",new ur(P,_)),r.push(new Re(U,null)),o>xs&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function _0(s,e,t){const r=new cr(s,e,t);return r.texture.mapping=Ac,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ka(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function nM(s,e,t){return new hr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:JS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:kr,depthTest:!1,depthWrite:!1})}function iM(s,e,t){const r=new Float32Array(Gs),o=new Z(0,1,0);return new hr({name:"SphericalGaussianBlur",defines:{n:Gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:kr,depthTest:!1,depthWrite:!1})}function y0(){return new hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:kr,depthTest:!1,depthWrite:!1})}function S0(){return new hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function Nc(){return`

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
	`}function rM(s){let e=new WeakMap,t=null;function r(f){if(f&&f.isTexture){const p=f.mapping,m=p===Jd||p===ef,x=p===Xs||p===Ha;if(m||x){let v=e.get(f);const S=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==S)return t===null&&(t=new v0(s)),v=m?t.fromEquirectangular(f,v):t.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const M=f.image;return m&&M&&M.height>0||x&&M&&o(M)?(t===null&&(t=new v0(s)),v=m?t.fromEquirectangular(f):t.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function o(f){let p=0;const m=6;for(let x=0;x<m;x++)f[x]!==void 0&&p++;return p===m}function l(f){const p=f.target;p.removeEventListener("dispose",l);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:d}}function sM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Vo("WebGLRenderer: "+r+" extension not supported."),o}}}function aM(s,e,t,r){const o={},l=new WeakMap;function d(v){const S=v.target;S.index!==null&&e.remove(S.index);for(const T in S.attributes)e.remove(S.attributes[T]);S.removeEventListener("dispose",d),delete o[S.id];const M=l.get(S);M&&(e.remove(M),l.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,t.memory.geometries--}function f(v,S){return o[S.id]===!0||(S.addEventListener("dispose",d),o[S.id]=!0,t.memory.geometries++),S}function p(v){const S=v.attributes;for(const M in S)e.update(S[M],s.ARRAY_BUFFER)}function m(v){const S=[],M=v.index,T=v.attributes.position;let A=0;if(M!==null){const C=M.array;A=M.version;for(let I=0,P=C.length;I<P;I+=3){const U=C[I+0],L=C[I+1],O=C[I+2];S.push(U,L,L,O,O,U)}}else if(T!==void 0){const C=T.array;A=T.version;for(let I=0,P=C.length/3-1;I<P;I+=3){const U=I+0,L=I+1,O=I+2;S.push(U,L,L,O,O,U)}}else return;const y=new(hg(S)?xg:gg)(S,1);y.version=A;const _=l.get(v);_&&e.remove(_),l.set(v,y)}function x(v){const S=l.get(v);if(S){const M=v.index;M!==null&&S.version<M.version&&m(v)}else m(v);return l.get(v)}return{get:f,update:p,getWireframeAttribute:x}}function oM(s,e,t){let r;function o(S){r=S}let l,d;function f(S){l=S.type,d=S.bytesPerElement}function p(S,M){s.drawElements(r,M,l,S*d),t.update(M,r,1)}function m(S,M,T){T!==0&&(s.drawElementsInstanced(r,M,l,S*d,T),t.update(M,r,T))}function x(S,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,l,S,0,T);let y=0;for(let _=0;_<T;_++)y+=M[_];t.update(y,r,1)}function v(S,M,T,A){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<S.length;_++)m(S[_]/d,M[_],A[_]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,l,S,0,A,0,T);let _=0;for(let C=0;C<T;C++)_+=M[C]*A[C];t.update(_,r,1)}}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=m,this.renderMultiDraw=x,this.renderMultiDrawInstances=v}function lM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,d,f){switch(t.calls++,d){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Bt("WebGLInfo: Unknown draw mode:",d);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function cM(s,e,t){const r=new WeakMap,o=new fn;function l(d,f,p){const m=d.morphTargetInfluences,x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=x!==void 0?x.length:0;let S=r.get(f);if(S===void 0||S.count!==v){let R=function(){j.dispose(),r.delete(f),f.removeEventListener("dispose",R)};var M=R;S!==void 0&&S.texture.dispose();const T=f.morphAttributes.position!==void 0,A=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],C=f.morphAttributes.normal||[],I=f.morphAttributes.color||[];let P=0;T===!0&&(P=1),A===!0&&(P=2),y===!0&&(P=3);let U=f.attributes.position.count*P,L=1;U>e.maxTextureSize&&(L=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const O=new Float32Array(U*L*4*v),j=new pg(O,U,L,v);j.type=ar,j.needsUpdate=!0;const b=P*4;for(let z=0;z<v;z++){const $=_[z],Q=C[z],re=I[z],se=U*L*4*z;for(let te=0;te<$.count;te++){const q=te*b;T===!0&&(o.fromBufferAttribute($,te),O[se+q+0]=o.x,O[se+q+1]=o.y,O[se+q+2]=o.z,O[se+q+3]=0),A===!0&&(o.fromBufferAttribute(Q,te),O[se+q+4]=o.x,O[se+q+5]=o.y,O[se+q+6]=o.z,O[se+q+7]=0),y===!0&&(o.fromBufferAttribute(re,te),O[se+q+8]=o.x,O[se+q+9]=o.y,O[se+q+10]=o.z,O[se+q+11]=re.itemSize===4?o.w:1)}}S={count:v,texture:j,size:new ft(U,L)},r.set(f,S),f.addEventListener("dispose",R)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",d.morphTexture,t);else{let T=0;for(let y=0;y<m.length;y++)T+=m[y];const A=f.morphTargetsRelative?1:1-T;p.getUniforms().setValue(s,"morphTargetBaseInfluence",A),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",S.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",S.size)}return{update:l}}function uM(s,e,t,r){let o=new WeakMap;function l(p){const m=r.render.frame,x=p.geometry,v=e.get(p,x);if(o.get(v)!==m&&(e.update(v),o.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),o.get(p)!==m&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const S=p.skeleton;o.get(S)!==m&&(S.update(),o.set(S,m))}return v}function d(){o=new WeakMap}function f(p){const m=p.target;m.removeEventListener("dispose",f),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:d}}const dM={[Q0]:"LINEAR_TONE_MAPPING",[J0]:"REINHARD_TONE_MAPPING",[eg]:"CINEON_TONE_MAPPING",[Cc]:"ACES_FILMIC_TONE_MAPPING",[ng]:"AGX_TONE_MAPPING",[ig]:"NEUTRAL_TONE_MAPPING",[tg]:"CUSTOM_TONE_MAPPING"};function fM(s,e,t,r,o){const l=new cr(e,t,{type:s,depthBuffer:r,stencilBuffer:o}),d=new cr(e,t,{type:zr,depthBuffer:!1,stencilBuffer:!1}),f=new yi;f.setAttribute("position",new gn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new gn([0,2,0,0,2,0],2));const p=new J_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new Re(f,p),x=new dh(-1,1,1,-1,0,1);let v=null,S=null,M=!1,T,A=null,y=[],_=!1;this.setSize=function(C,I){l.setSize(C,I),d.setSize(C,I);for(let P=0;P<y.length;P++){const U=y[P];U.setSize&&U.setSize(C,I)}},this.setEffects=function(C){y=C,_=y.length>0&&y[0].isRenderPass===!0;const I=l.width,P=l.height;for(let U=0;U<y.length;U++){const L=y[U];L.setSize&&L.setSize(I,P)}},this.begin=function(C,I){if(M||C.toneMapping===lr&&y.length===0)return!1;if(A=I,I!==null){const P=I.width,U=I.height;(l.width!==P||l.height!==U)&&this.setSize(P,U)}return _===!1&&C.setRenderTarget(l),T=C.toneMapping,C.toneMapping=lr,!0},this.hasRenderPass=function(){return _},this.end=function(C,I){C.toneMapping=T,M=!0;let P=l,U=d;for(let L=0;L<y.length;L++){const O=y[L];if(O.enabled!==!1&&(O.render(C,U,P,I),O.needsSwap!==!1)){const j=P;P=U,U=j}}if(v!==C.outputColorSpace||S!==C.toneMapping){v=C.outputColorSpace,S=C.toneMapping,p.defines={},zt.getTransfer(v)===Zt&&(p.defines.SRGB_TRANSFER="");const L=dM[S];L&&(p.defines[L]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=P.texture,C.setRenderTarget(A),C.render(m,x),A=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){l.dispose(),d.dispose(),f.dispose(),p.dispose()}}const Cg=new kn,zf=new Go(1,1),Ag=new pg,Rg=new N_,Ng=new yg,M0=[],w0=[],b0=new Float32Array(16),E0=new Float32Array(9),T0=new Float32Array(4);function Ya(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=M0[o];if(l===void 0&&(l=new Float32Array(o),M0[o]=l),e!==0){r.toArray(l,0);for(let d=1,f=0;d!==e;++d)f+=t,s[d].toArray(l,f)}return l}function En(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Tn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Pc(s,e){let t=w0[e];t===void 0&&(t=new Int32Array(e),w0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function hM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function pM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;s.uniform2fv(this.addr,e),Tn(t,e)}}function mM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(En(t,e))return;s.uniform3fv(this.addr,e),Tn(t,e)}}function gM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;s.uniform4fv(this.addr,e),Tn(t,e)}}function xM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(En(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Tn(t,e)}else{if(En(t,r))return;T0.set(r),s.uniformMatrix2fv(this.addr,!1,T0),Tn(t,r)}}function vM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(En(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Tn(t,e)}else{if(En(t,r))return;E0.set(r),s.uniformMatrix3fv(this.addr,!1,E0),Tn(t,r)}}function _M(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(En(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Tn(t,e)}else{if(En(t,r))return;b0.set(r),s.uniformMatrix4fv(this.addr,!1,b0),Tn(t,r)}}function yM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function SM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;s.uniform2iv(this.addr,e),Tn(t,e)}}function MM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(En(t,e))return;s.uniform3iv(this.addr,e),Tn(t,e)}}function wM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;s.uniform4iv(this.addr,e),Tn(t,e)}}function bM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function EM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;s.uniform2uiv(this.addr,e),Tn(t,e)}}function TM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(En(t,e))return;s.uniform3uiv(this.addr,e),Tn(t,e)}}function CM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;s.uniform4uiv(this.addr,e),Tn(t,e)}}function AM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(zf.compareFunction=t.isReversedDepthBuffer()?Qf:Zf,l=zf):l=Cg,t.setTexture2D(e||l,o)}function RM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Rg,o)}function NM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Ng,o)}function PM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Ag,o)}function DM(s){switch(s){case 5126:return hM;case 35664:return pM;case 35665:return mM;case 35666:return gM;case 35674:return xM;case 35675:return vM;case 35676:return _M;case 5124:case 35670:return yM;case 35667:case 35671:return SM;case 35668:case 35672:return MM;case 35669:case 35673:return wM;case 5125:return bM;case 36294:return EM;case 36295:return TM;case 36296:return CM;case 35678:case 36198:case 36298:case 36306:case 35682:return AM;case 35679:case 36299:case 36307:return RM;case 35680:case 36300:case 36308:case 36293:return NM;case 36289:case 36303:case 36311:case 36292:return PM}}function LM(s,e){s.uniform1fv(this.addr,e)}function IM(s,e){const t=Ya(e,this.size,2);s.uniform2fv(this.addr,t)}function UM(s,e){const t=Ya(e,this.size,3);s.uniform3fv(this.addr,t)}function OM(s,e){const t=Ya(e,this.size,4);s.uniform4fv(this.addr,t)}function FM(s,e){const t=Ya(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function kM(s,e){const t=Ya(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function BM(s,e){const t=Ya(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function zM(s,e){s.uniform1iv(this.addr,e)}function jM(s,e){s.uniform2iv(this.addr,e)}function VM(s,e){s.uniform3iv(this.addr,e)}function GM(s,e){s.uniform4iv(this.addr,e)}function HM(s,e){s.uniform1uiv(this.addr,e)}function WM(s,e){s.uniform2uiv(this.addr,e)}function XM(s,e){s.uniform3uiv(this.addr,e)}function qM(s,e){s.uniform4uiv(this.addr,e)}function YM(s,e,t){const r=this.cache,o=e.length,l=Pc(t,o);En(r,l)||(s.uniform1iv(this.addr,l),Tn(r,l));let d;this.type===s.SAMPLER_2D_SHADOW?d=zf:d=Cg;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||d,l[f])}function $M(s,e,t){const r=this.cache,o=e.length,l=Pc(t,o);En(r,l)||(s.uniform1iv(this.addr,l),Tn(r,l));for(let d=0;d!==o;++d)t.setTexture3D(e[d]||Rg,l[d])}function KM(s,e,t){const r=this.cache,o=e.length,l=Pc(t,o);En(r,l)||(s.uniform1iv(this.addr,l),Tn(r,l));for(let d=0;d!==o;++d)t.setTextureCube(e[d]||Ng,l[d])}function ZM(s,e,t){const r=this.cache,o=e.length,l=Pc(t,o);En(r,l)||(s.uniform1iv(this.addr,l),Tn(r,l));for(let d=0;d!==o;++d)t.setTexture2DArray(e[d]||Ag,l[d])}function QM(s){switch(s){case 5126:return LM;case 35664:return IM;case 35665:return UM;case 35666:return OM;case 35674:return FM;case 35675:return kM;case 35676:return BM;case 5124:case 35670:return zM;case 35667:case 35671:return jM;case 35668:case 35672:return VM;case 35669:case 35673:return GM;case 5125:return HM;case 36294:return WM;case 36295:return XM;case 36296:return qM;case 35678:case 36198:case 36298:case 36306:case 35682:return YM;case 35679:case 36299:case 36307:return $M;case 35680:case 36300:case 36308:case 36293:return KM;case 36289:case 36303:case 36311:case 36292:return ZM}}class JM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=DM(t.type)}}class ew{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=QM(t.type)}}class tw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,d=o.length;l!==d;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const kd=/(\w+)(\])?(\[|\.)?/g;function C0(s,e){s.seq.push(e),s.map[e.id]=e}function nw(s,e,t){const r=s.name,o=r.length;for(kd.lastIndex=0;;){const l=kd.exec(r),d=kd.lastIndex;let f=l[1];const p=l[2]==="]",m=l[3];if(p&&(f=f|0),m===void 0||m==="["&&d+2===o){C0(t,m===void 0?new JM(f,s,e):new ew(f,s,e));break}else{let v=t.map[f];v===void 0&&(v=new tw(f),C0(t,v)),t=v}}}class _c{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const f=e.getActiveUniform(t,d),p=e.getUniformLocation(t,f.name);nw(f,p,this)}const o=[],l=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(d):l.push(d);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,d=t.length;l!==d;++l){const f=t[l],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const d=e[o];d.id in t&&r.push(d)}return r}}function A0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const iw=37297;let rw=0;function sw(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let d=o;d<l;d++){const f=d+1;r.push(`${f===e?">":" "} ${f}: ${t[d]}`)}return r.join(`
`)}const R0=new wt;function aw(s){zt._getMatrix(R0,zt.workingColorSpace,s);const e=`mat3( ${R0.elements.map(t=>t.toFixed(4))} )`;switch(zt.getTransfer(s)){case wc:return[e,"LinearTransferOETF"];case Zt:return[e,"sRGBTransferOETF"];default:return vt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function N0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const d=/ERROR: 0:(\d+)/.exec(l);if(d){const f=parseInt(d[1]);return t.toUpperCase()+`

`+l+`

`+sw(s.getShaderSource(e),f)}else return l}function ow(s,e){const t=aw(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const lw={[Q0]:"Linear",[J0]:"Reinhard",[eg]:"Cineon",[Cc]:"ACESFilmic",[ng]:"AgX",[ig]:"Neutral",[tg]:"Custom"};function cw(s,e){const t=lw[e];return t===void 0?(vt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const uc=new Z;function uw(){zt.getLuminanceCoefficients(uc);const s=uc.x.toFixed(4),e=uc.y.toFixed(4),t=uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fo).join(`
`)}function fw(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function hw(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),d=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[d]={type:l.type,location:s.getAttribLocation(e,d),locationSize:f}}return t}function Fo(s){return s!==""}function P0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function D0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pw=/^[ \t]*#include +<([\w\d./]+)>/gm;function jf(s){return s.replace(pw,gw)}const mw=new Map;function gw(s,e){let t=bt[e];if(t===void 0){const r=mw.get(e);if(r!==void 0)t=bt[r],vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return jf(t)}const xw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function L0(s){return s.replace(xw,vw)}function vw(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function I0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const _w={[hc]:"SHADOWMAP_TYPE_PCF",[Oo]:"SHADOWMAP_TYPE_VSM"};function yw(s){return _w[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Sw={[Xs]:"ENVMAP_TYPE_CUBE",[Ha]:"ENVMAP_TYPE_CUBE",[Ac]:"ENVMAP_TYPE_CUBE_UV"};function Mw(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Sw[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const ww={[Ha]:"ENVMAP_MODE_REFRACTION"};function bw(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":ww[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Ew={[Z0]:"ENVMAP_BLENDING_MULTIPLY",[u_]:"ENVMAP_BLENDING_MIX",[d_]:"ENVMAP_BLENDING_ADD"};function Tw(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Ew[s.combine]||"ENVMAP_BLENDING_NONE"}function Cw(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function Aw(s,e,t,r){const o=s.getContext(),l=t.defines;let d=t.vertexShader,f=t.fragmentShader;const p=yw(t),m=Mw(t),x=bw(t),v=Tw(t),S=Cw(t),M=dw(t),T=fw(l),A=o.createProgram();let y,_,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Fo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Fo).join(`
`),_.length>0&&(_+=`
`)):(y=[I0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fo).join(`
`),_=[I0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+x:"",t.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==lr?"#define TONE_MAPPING":"",t.toneMapping!==lr?bt.tonemapping_pars_fragment:"",t.toneMapping!==lr?cw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",bt.colorspace_pars_fragment,ow("linearToOutputTexel",t.outputColorSpace),uw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fo).join(`
`)),d=jf(d),d=P0(d,t),d=D0(d,t),f=jf(f),f=P0(f,t),f=D0(f,t),d=L0(d),f=L0(f),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===Gm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const I=C+y+d,P=C+_+f,U=A0(o,o.VERTEX_SHADER,I),L=A0(o,o.FRAGMENT_SHADER,P);o.attachShader(A,U),o.attachShader(A,L),t.index0AttributeName!==void 0?o.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function O(z){if(s.debug.checkShaderErrors){const $=o.getProgramInfoLog(A)||"",Q=o.getShaderInfoLog(U)||"",re=o.getShaderInfoLog(L)||"",se=$.trim(),te=Q.trim(),q=re.trim();let X=!0,pe=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,A,U,L);else{const oe=N0(o,U,"vertex"),F=N0(o,L,"fragment");Bt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+se+`
`+oe+`
`+F)}else se!==""?vt("WebGLProgram: Program Info Log:",se):(te===""||q==="")&&(pe=!1);pe&&(z.diagnostics={runnable:X,programLog:se,vertexShader:{log:te,prefix:y},fragmentShader:{log:q,prefix:_}})}o.deleteShader(U),o.deleteShader(L),j=new _c(o,A),b=hw(o,A)}let j;this.getUniforms=function(){return j===void 0&&O(this),j};let b;this.getAttributes=function(){return b===void 0&&O(this),b};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(A,iw)),R},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rw++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=U,this.fragmentShader=L,this}let Rw=0;class Nw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(o)===!1&&(d.add(o),o.usedTimes++),d.has(l)===!1&&(d.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Pw(e),t.set(e,r)),r}}class Pw{constructor(e){this.id=Rw++,this.code=e,this.usedTimes=0}}function Dw(s,e,t,r,o,l,d){const f=new nh,p=new Nw,m=new Set,x=[],v=new Map,S=o.logarithmicDepthBuffer;let M=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(b){return m.add(b),b===0?"uv":`uv${b}`}function y(b,R,z,$,Q){const re=$.fog,se=Q.geometry,te=b.isMeshStandardMaterial?$.environment:null,q=(b.isMeshStandardMaterial?t:e).get(b.envMap||te),X=q&&q.mapping===Ac?q.image.height:null,pe=T[b.type];b.precision!==null&&(M=o.getMaxPrecision(b.precision),M!==b.precision&&vt("WebGLProgram.getParameters:",b.precision,"not supported, using",M,"instead."));const oe=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,F=oe!==void 0?oe.length:0;let ce=0;se.morphAttributes.position!==void 0&&(ce=1),se.morphAttributes.normal!==void 0&&(ce=2),se.morphAttributes.color!==void 0&&(ce=3);let Ne,qe,We,ne;if(pe){const tt=sr[pe];Ne=tt.vertexShader,qe=tt.fragmentShader}else Ne=b.vertexShader,qe=b.fragmentShader,p.update(b),We=p.getVertexShaderID(b),ne=p.getFragmentShaderID(b);const fe=s.getRenderTarget(),ye=s.state.buffers.depth.getReversed(),Be=Q.isInstancedMesh===!0,Le=Q.isBatchedMesh===!0,gt=!!b.map,Jt=!!b.matcap,_t=!!q,Rt=!!b.aoMap,Lt=!!b.lightMap,pt=!!b.bumpMap,Ot=!!b.normalMap,V=!!b.displacementMap,Yt=!!b.emissiveMap,St=!!b.metalnessMap,xt=!!b.roughnessMap,je=b.anisotropy>0,D=b.clearcoat>0,w=b.dispersion>0,B=b.iridescence>0,le=b.sheen>0,he=b.transmission>0,K=je&&!!b.anisotropyMap,Fe=D&&!!b.clearcoatMap,be=D&&!!b.clearcoatNormalMap,Oe=D&&!!b.clearcoatRoughnessMap,$e=B&&!!b.iridescenceMap,xe=B&&!!b.iridescenceThicknessMap,Ee=le&&!!b.sheenColorMap,ke=le&&!!b.sheenRoughnessMap,Ge=!!b.specularMap,Se=!!b.specularColorMap,ut=!!b.specularIntensityMap,H=he&&!!b.transmissionMap,Pe=he&&!!b.thicknessMap,ve=!!b.gradientMap,Ie=!!b.alphaMap,ge=b.alphaTest>0,me=!!b.alphaHash,Ce=!!b.extensions;let rt=lr;b.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(rt=s.toneMapping);const dt={shaderID:pe,shaderType:b.type,shaderName:b.name,vertexShader:Ne,fragmentShader:qe,defines:b.defines,customVertexShaderID:We,customFragmentShaderID:ne,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:M,batching:Le,batchingColor:Le&&Q._colorsTexture!==null,instancing:Be,instancingColor:Be&&Q.instanceColor!==null,instancingMorph:Be&&Q.morphTexture!==null,outputColorSpace:fe===null?s.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Xa,alphaToCoverage:!!b.alphaToCoverage,map:gt,matcap:Jt,envMap:_t,envMapMode:_t&&q.mapping,envMapCubeUVHeight:X,aoMap:Rt,lightMap:Lt,bumpMap:pt,normalMap:Ot,displacementMap:V,emissiveMap:Yt,normalMapObjectSpace:Ot&&b.normalMapType===p_,normalMapTangentSpace:Ot&&b.normalMapType===fg,metalnessMap:St,roughnessMap:xt,anisotropy:je,anisotropyMap:K,clearcoat:D,clearcoatMap:Fe,clearcoatNormalMap:be,clearcoatRoughnessMap:Oe,dispersion:w,iridescence:B,iridescenceMap:$e,iridescenceThicknessMap:xe,sheen:le,sheenColorMap:Ee,sheenRoughnessMap:ke,specularMap:Ge,specularColorMap:Se,specularIntensityMap:ut,transmission:he,transmissionMap:H,thicknessMap:Pe,gradientMap:ve,opaque:b.transparent===!1&&b.blending===ja&&b.alphaToCoverage===!1,alphaMap:Ie,alphaTest:ge,alphaHash:me,combine:b.combine,mapUv:gt&&A(b.map.channel),aoMapUv:Rt&&A(b.aoMap.channel),lightMapUv:Lt&&A(b.lightMap.channel),bumpMapUv:pt&&A(b.bumpMap.channel),normalMapUv:Ot&&A(b.normalMap.channel),displacementMapUv:V&&A(b.displacementMap.channel),emissiveMapUv:Yt&&A(b.emissiveMap.channel),metalnessMapUv:St&&A(b.metalnessMap.channel),roughnessMapUv:xt&&A(b.roughnessMap.channel),anisotropyMapUv:K&&A(b.anisotropyMap.channel),clearcoatMapUv:Fe&&A(b.clearcoatMap.channel),clearcoatNormalMapUv:be&&A(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&A(b.clearcoatRoughnessMap.channel),iridescenceMapUv:$e&&A(b.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&A(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&A(b.sheenColorMap.channel),sheenRoughnessMapUv:ke&&A(b.sheenRoughnessMap.channel),specularMapUv:Ge&&A(b.specularMap.channel),specularColorMapUv:Se&&A(b.specularColorMap.channel),specularIntensityMapUv:ut&&A(b.specularIntensityMap.channel),transmissionMapUv:H&&A(b.transmissionMap.channel),thicknessMapUv:Pe&&A(b.thicknessMap.channel),alphaMapUv:Ie&&A(b.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(Ot||je),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!se.attributes.uv&&(gt||Ie),fog:!!re,useFog:b.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:ye,skinning:Q.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:ce,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:rt,decodeVideoTexture:gt&&b.map.isVideoTexture===!0&&zt.getTransfer(b.map.colorSpace)===Zt,decodeVideoTextureEmissive:Yt&&b.emissiveMap.isVideoTexture===!0&&zt.getTransfer(b.emissiveMap.colorSpace)===Zt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ur,flipSided:b.side===ci,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ce&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&b.extensions.multiDraw===!0||Le)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return dt.vertexUv1s=m.has(1),dt.vertexUv2s=m.has(2),dt.vertexUv3s=m.has(3),m.clear(),dt}function _(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const z in b.defines)R.push(z),R.push(b.defines[z]);return b.isRawShaderMaterial===!1&&(C(R,b),I(R,b),R.push(s.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function C(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function I(b,R){f.disableAll(),R.instancing&&f.enable(0),R.instancingColor&&f.enable(1),R.instancingMorph&&f.enable(2),R.matcap&&f.enable(3),R.envMap&&f.enable(4),R.normalMapObjectSpace&&f.enable(5),R.normalMapTangentSpace&&f.enable(6),R.clearcoat&&f.enable(7),R.iridescence&&f.enable(8),R.alphaTest&&f.enable(9),R.vertexColors&&f.enable(10),R.vertexAlphas&&f.enable(11),R.vertexUv1s&&f.enable(12),R.vertexUv2s&&f.enable(13),R.vertexUv3s&&f.enable(14),R.vertexTangents&&f.enable(15),R.anisotropy&&f.enable(16),R.alphaHash&&f.enable(17),R.batching&&f.enable(18),R.dispersion&&f.enable(19),R.batchingColor&&f.enable(20),R.gradientMap&&f.enable(21),b.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reversedDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),b.push(f.mask)}function P(b){const R=T[b.type];let z;if(R){const $=sr[R];z=G_.clone($.uniforms)}else z=b.uniforms;return z}function U(b,R){let z=v.get(R);return z!==void 0?++z.usedTimes:(z=new Aw(s,R,b,l),x.push(z),v.set(R,z)),z}function L(b){if(--b.usedTimes===0){const R=x.indexOf(b);x[R]=x[x.length-1],x.pop(),v.delete(b.cacheKey),b.destroy()}}function O(b){p.remove(b)}function j(){p.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:P,acquireProgram:U,releaseProgram:L,releaseShaderCache:O,programs:x,dispose:j}}function Lw(){let s=new WeakMap;function e(d){return s.has(d)}function t(d){let f=s.get(d);return f===void 0&&(f={},s.set(d,f)),f}function r(d){s.delete(d)}function o(d,f,p){s.get(d)[f]=p}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function Iw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function U0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function O0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function d(v,S,M,T,A,y){let _=s[e];return _===void 0?(_={id:v.id,object:v,geometry:S,material:M,groupOrder:T,renderOrder:v.renderOrder,z:A,group:y},s[e]=_):(_.id=v.id,_.object=v,_.geometry=S,_.material=M,_.groupOrder=T,_.renderOrder=v.renderOrder,_.z=A,_.group=y),e++,_}function f(v,S,M,T,A,y){const _=d(v,S,M,T,A,y);M.transmission>0?r.push(_):M.transparent===!0?o.push(_):t.push(_)}function p(v,S,M,T,A,y){const _=d(v,S,M,T,A,y);M.transmission>0?r.unshift(_):M.transparent===!0?o.unshift(_):t.unshift(_)}function m(v,S){t.length>1&&t.sort(v||Iw),r.length>1&&r.sort(S||U0),o.length>1&&o.sort(S||U0)}function x(){for(let v=e,S=s.length;v<S;v++){const M=s[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:f,unshift:p,finish:x,sort:m}}function Uw(){let s=new WeakMap;function e(r,o){const l=s.get(r);let d;return l===void 0?(d=new O0,s.set(r,[d])):o>=l.length?(d=new O0,l.push(d)):d=l[o],d}function t(){s=new WeakMap}return{get:e,dispose:t}}function Ow(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new Et};break;case"SpotLight":t={position:new Z,direction:new Z,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new Et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":t={color:new Et,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return s[e.id]=t,t}}}function Fw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let kw=0;function Bw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function zw(s){const e=new Ow,t=Fw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Z);const o=new Z,l=new cn,d=new cn;function f(m){let x=0,v=0,S=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let M=0,T=0,A=0,y=0,_=0,C=0,I=0,P=0,U=0,L=0,O=0;m.sort(Bw);for(let b=0,R=m.length;b<R;b++){const z=m[b],$=z.color,Q=z.intensity,re=z.distance;let se=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===Wa?se=z.shadow.map.texture:se=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)x+=$.r*Q,v+=$.g*Q,S+=$.b*Q;else if(z.isLightProbe){for(let te=0;te<9;te++)r.probe[te].addScaledVector(z.sh.coefficients[te],Q);O++}else if(z.isDirectionalLight){const te=e.get(z);if(te.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const q=z.shadow,X=t.get(z);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,r.directionalShadow[M]=X,r.directionalShadowMap[M]=se,r.directionalShadowMatrix[M]=z.shadow.matrix,C++}r.directional[M]=te,M++}else if(z.isSpotLight){const te=e.get(z);te.position.setFromMatrixPosition(z.matrixWorld),te.color.copy($).multiplyScalar(Q),te.distance=re,te.coneCos=Math.cos(z.angle),te.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),te.decay=z.decay,r.spot[A]=te;const q=z.shadow;if(z.map&&(r.spotLightMap[U]=z.map,U++,q.updateMatrices(z),z.castShadow&&L++),r.spotLightMatrix[A]=q.matrix,z.castShadow){const X=t.get(z);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,r.spotShadow[A]=X,r.spotShadowMap[A]=se,P++}A++}else if(z.isRectAreaLight){const te=e.get(z);te.color.copy($).multiplyScalar(Q),te.halfWidth.set(z.width*.5,0,0),te.halfHeight.set(0,z.height*.5,0),r.rectArea[y]=te,y++}else if(z.isPointLight){const te=e.get(z);if(te.color.copy(z.color).multiplyScalar(z.intensity),te.distance=z.distance,te.decay=z.decay,z.castShadow){const q=z.shadow,X=t.get(z);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,X.shadowCameraNear=q.camera.near,X.shadowCameraFar=q.camera.far,r.pointShadow[T]=X,r.pointShadowMap[T]=se,r.pointShadowMatrix[T]=z.shadow.matrix,I++}r.point[T]=te,T++}else if(z.isHemisphereLight){const te=e.get(z);te.skyColor.copy(z.color).multiplyScalar(Q),te.groundColor.copy(z.groundColor).multiplyScalar(Q),r.hemi[_]=te,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ze.LTC_FLOAT_1,r.rectAreaLTC2=ze.LTC_FLOAT_2):(r.rectAreaLTC1=ze.LTC_HALF_1,r.rectAreaLTC2=ze.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=v,r.ambient[2]=S;const j=r.hash;(j.directionalLength!==M||j.pointLength!==T||j.spotLength!==A||j.rectAreaLength!==y||j.hemiLength!==_||j.numDirectionalShadows!==C||j.numPointShadows!==I||j.numSpotShadows!==P||j.numSpotMaps!==U||j.numLightProbes!==O)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=y,r.point.length=T,r.hemi.length=_,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=P+U-L,r.spotLightMap.length=U,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=O,j.directionalLength=M,j.pointLength=T,j.spotLength=A,j.rectAreaLength=y,j.hemiLength=_,j.numDirectionalShadows=C,j.numPointShadows=I,j.numSpotShadows=P,j.numSpotMaps=U,j.numLightProbes=O,r.version=kw++)}function p(m,x){let v=0,S=0,M=0,T=0,A=0;const y=x.matrixWorldInverse;for(let _=0,C=m.length;_<C;_++){const I=m[_];if(I.isDirectionalLight){const P=r.directional[v];P.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),v++}else if(I.isSpotLight){const P=r.spot[M];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),M++}else if(I.isRectAreaLight){const P=r.rectArea[T];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(y),d.identity(),l.copy(I.matrixWorld),l.premultiply(y),d.extractRotation(l),P.halfWidth.set(I.width*.5,0,0),P.halfHeight.set(0,I.height*.5,0),P.halfWidth.applyMatrix4(d),P.halfHeight.applyMatrix4(d),T++}else if(I.isPointLight){const P=r.point[S];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(y),S++}else if(I.isHemisphereLight){const P=r.hemi[A];P.direction.setFromMatrixPosition(I.matrixWorld),P.direction.transformDirection(y),A++}}}return{setup:f,setupView:p,state:r}}function F0(s){const e=new zw(s),t=[],r=[];function o(x){m.camera=x,t.length=0,r.length=0}function l(x){t.push(x)}function d(x){r.push(x)}function f(){e.setup(t)}function p(x){e.setupView(t,x)}const m={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:d}}function jw(s){let e=new WeakMap;function t(o,l=0){const d=e.get(o);let f;return d===void 0?(f=new F0(s),e.set(o,[f])):l>=d.length?(f=new F0(s),d.push(f)):f=d[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const Vw=`void main() {
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
}`,Hw=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],Ww=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],k0=new cn,Io=new Z,Bd=new Z;function Xw(s,e,t){let r=new rh;const o=new ft,l=new ft,d=new fn,f=new e1,p=new t1,m={},x=t.maxTextureSize,v={[vs]:ci,[ci]:vs,[Ur]:Ur},S=new hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:Vw,fragmentShader:Gw}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const T=new yi;T.setAttribute("position",new ur(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Re(T,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hc;let _=this.type;this.render=function(L,O,j){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;L.type===Hf&&(vt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),L.type=hc);const b=s.getRenderTarget(),R=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),$=s.state;$.setBlending(kr),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const Q=_!==this.type;Q&&O.traverse(function(re){re.material&&(Array.isArray(re.material)?re.material.forEach(se=>se.needsUpdate=!0):re.material.needsUpdate=!0)});for(let re=0,se=L.length;re<se;re++){const te=L[re],q=te.shadow;if(q===void 0){vt("WebGLShadowMap:",te,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;o.copy(q.mapSize);const X=q.getFrameExtents();if(o.multiply(X),l.copy(q.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(l.x=Math.floor(x/X.x),o.x=l.x*X.x,q.mapSize.x=l.x),o.y>x&&(l.y=Math.floor(x/X.y),o.y=l.y*X.y,q.mapSize.y=l.y)),q.map===null||Q===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Oo){if(te.isPointLight){vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new cr(o.x,o.y,{format:Wa,type:zr,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),q.map.texture.name=te.name+".shadowMap",q.map.depthTexture=new Go(o.x,o.y,ar),q.map.depthTexture.name=te.name+".shadowMapDepth",q.map.depthTexture.format=jr,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Fn,q.map.depthTexture.magFilter=Fn}else{te.isPointLight?(q.map=new Sg(o.x),q.map.depthTexture=new Q_(o.x,dr)):(q.map=new cr(o.x,o.y),q.map.depthTexture=new Go(o.x,o.y,dr)),q.map.depthTexture.name=te.name+".shadowMap",q.map.depthTexture.format=jr;const oe=s.state.buffers.depth.getReversed();this.type===hc?(q.map.depthTexture.compareFunction=oe?Qf:Zf,q.map.depthTexture.minFilter=Pn,q.map.depthTexture.magFilter=Pn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Fn,q.map.depthTexture.magFilter=Fn)}q.camera.updateProjectionMatrix()}const pe=q.map.isWebGLCubeRenderTarget?6:1;for(let oe=0;oe<pe;oe++){if(q.map.isWebGLCubeRenderTarget)s.setRenderTarget(q.map,oe),s.clear();else{oe===0&&(s.setRenderTarget(q.map),s.clear());const F=q.getViewport(oe);d.set(l.x*F.x,l.y*F.y,l.x*F.z,l.y*F.w),$.viewport(d)}if(te.isPointLight){const F=q.camera,ce=q.matrix,Ne=te.distance||F.far;Ne!==F.far&&(F.far=Ne,F.updateProjectionMatrix()),Io.setFromMatrixPosition(te.matrixWorld),F.position.copy(Io),Bd.copy(F.position),Bd.add(Hw[oe]),F.up.copy(Ww[oe]),F.lookAt(Bd),F.updateMatrixWorld(),ce.makeTranslation(-Io.x,-Io.y,-Io.z),k0.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),q._frustum.setFromProjectionMatrix(k0,F.coordinateSystem,F.reversedDepth)}else q.updateMatrices(te);r=q.getFrustum(),P(O,j,q.camera,te,this.type)}q.isPointLightShadow!==!0&&this.type===Oo&&C(q,j),q.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(b,R,z)};function C(L,O){const j=e.update(A);S.defines.VSM_SAMPLES!==L.blurSamples&&(S.defines.VSM_SAMPLES=L.blurSamples,M.defines.VSM_SAMPLES=L.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new cr(o.x,o.y,{format:Wa,type:zr})),S.uniforms.shadow_pass.value=L.map.depthTexture,S.uniforms.resolution.value=L.mapSize,S.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(O,null,j,S,A,null),M.uniforms.shadow_pass.value=L.mapPass.texture,M.uniforms.resolution.value=L.mapSize,M.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(O,null,j,M,A,null)}function I(L,O,j,b){let R=null;const z=j.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(z!==void 0)R=z;else if(R=j.isPointLight===!0?p:f,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const $=R.uuid,Q=O.uuid;let re=m[$];re===void 0&&(re={},m[$]=re);let se=re[Q];se===void 0&&(se=R.clone(),re[Q]=se,O.addEventListener("dispose",U)),R=se}if(R.visible=O.visible,R.wireframe=O.wireframe,b===Oo?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:v[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,j.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const $=s.properties.get(R);$.light=j}return R}function P(L,O,j,b,R){if(L.visible===!1)return;if(L.layers.test(O.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&R===Oo)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,L.matrixWorld);const Q=e.update(L),re=L.material;if(Array.isArray(re)){const se=Q.groups;for(let te=0,q=se.length;te<q;te++){const X=se[te],pe=re[X.materialIndex];if(pe&&pe.visible){const oe=I(L,pe,b,R);L.onBeforeShadow(s,L,O,j,Q,oe,X),s.renderBufferDirect(j,null,Q,oe,L,X),L.onAfterShadow(s,L,O,j,Q,oe,X)}}}else if(re.visible){const se=I(L,re,b,R);L.onBeforeShadow(s,L,O,j,Q,se,null),s.renderBufferDirect(j,null,Q,se,L,null),L.onAfterShadow(s,L,O,j,Q,se,null)}}const $=L.children;for(let Q=0,re=$.length;Q<re;Q++)P($[Q],O,j,b,R)}function U(L){L.target.removeEventListener("dispose",U);for(const j in m){const b=m[j],R=L.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}const qw={[Xd]:qd,[Yd]:Zd,[$d]:Qd,[Ga]:Kd,[qd]:Xd,[Zd]:Yd,[Qd]:$d,[Kd]:Ga};function Yw(s,e){function t(){let H=!1;const Pe=new fn;let ve=null;const Ie=new fn(0,0,0,0);return{setMask:function(ge){ve!==ge&&!H&&(s.colorMask(ge,ge,ge,ge),ve=ge)},setLocked:function(ge){H=ge},setClear:function(ge,me,Ce,rt,dt){dt===!0&&(ge*=rt,me*=rt,Ce*=rt),Pe.set(ge,me,Ce,rt),Ie.equals(Pe)===!1&&(s.clearColor(ge,me,Ce,rt),Ie.copy(Pe))},reset:function(){H=!1,ve=null,Ie.set(-1,0,0,0)}}}function r(){let H=!1,Pe=!1,ve=null,Ie=null,ge=null;return{setReversed:function(me){if(Pe!==me){const Ce=e.get("EXT_clip_control");me?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),Pe=me;const rt=ge;ge=null,this.setClear(rt)}},getReversed:function(){return Pe},setTest:function(me){me?fe(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(me){ve!==me&&!H&&(s.depthMask(me),ve=me)},setFunc:function(me){if(Pe&&(me=qw[me]),Ie!==me){switch(me){case Xd:s.depthFunc(s.NEVER);break;case qd:s.depthFunc(s.ALWAYS);break;case Yd:s.depthFunc(s.LESS);break;case Ga:s.depthFunc(s.LEQUAL);break;case $d:s.depthFunc(s.EQUAL);break;case Kd:s.depthFunc(s.GEQUAL);break;case Zd:s.depthFunc(s.GREATER);break;case Qd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ie=me}},setLocked:function(me){H=me},setClear:function(me){ge!==me&&(Pe&&(me=1-me),s.clearDepth(me),ge=me)},reset:function(){H=!1,ve=null,Ie=null,ge=null,Pe=!1}}}function o(){let H=!1,Pe=null,ve=null,Ie=null,ge=null,me=null,Ce=null,rt=null,dt=null;return{setTest:function(tt){H||(tt?fe(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(tt){Pe!==tt&&!H&&(s.stencilMask(tt),Pe=tt)},setFunc:function(tt,Vt,Ht){(ve!==tt||Ie!==Vt||ge!==Ht)&&(s.stencilFunc(tt,Vt,Ht),ve=tt,Ie=Vt,ge=Ht)},setOp:function(tt,Vt,Ht){(me!==tt||Ce!==Vt||rt!==Ht)&&(s.stencilOp(tt,Vt,Ht),me=tt,Ce=Vt,rt=Ht)},setLocked:function(tt){H=tt},setClear:function(tt){dt!==tt&&(s.clearStencil(tt),dt=tt)},reset:function(){H=!1,Pe=null,ve=null,Ie=null,ge=null,me=null,Ce=null,rt=null,dt=null}}}const l=new t,d=new r,f=new o,p=new WeakMap,m=new WeakMap;let x={},v={},S=new WeakMap,M=[],T=null,A=!1,y=null,_=null,C=null,I=null,P=null,U=null,L=null,O=new Et(0,0,0),j=0,b=!1,R=null,z=null,$=null,Q=null,re=null;const se=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,q=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(X)[1]),te=q>=1):X.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),te=q>=2);let pe=null,oe={};const F=s.getParameter(s.SCISSOR_BOX),ce=s.getParameter(s.VIEWPORT),Ne=new fn().fromArray(F),qe=new fn().fromArray(ce);function We(H,Pe,ve,Ie){const ge=new Uint8Array(4),me=s.createTexture();s.bindTexture(H,me),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ce=0;Ce<ve;Ce++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,Ie,0,s.RGBA,s.UNSIGNED_BYTE,ge):s.texImage2D(Pe+Ce,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ge);return me}const ne={};ne[s.TEXTURE_2D]=We(s.TEXTURE_2D,s.TEXTURE_2D,1),ne[s.TEXTURE_CUBE_MAP]=We(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[s.TEXTURE_2D_ARRAY]=We(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ne[s.TEXTURE_3D]=We(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),d.setClear(1),f.setClear(0),fe(s.DEPTH_TEST),d.setFunc(Ga),pt(!1),Ot(Fm),fe(s.CULL_FACE),Rt(kr);function fe(H){x[H]!==!0&&(s.enable(H),x[H]=!0)}function ye(H){x[H]!==!1&&(s.disable(H),x[H]=!1)}function Be(H,Pe){return v[H]!==Pe?(s.bindFramebuffer(H,Pe),v[H]=Pe,H===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Pe),H===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function Le(H,Pe){let ve=M,Ie=!1;if(H){ve=S.get(Pe),ve===void 0&&(ve=[],S.set(Pe,ve));const ge=H.textures;if(ve.length!==ge.length||ve[0]!==s.COLOR_ATTACHMENT0){for(let me=0,Ce=ge.length;me<Ce;me++)ve[me]=s.COLOR_ATTACHMENT0+me;ve.length=ge.length,Ie=!0}}else ve[0]!==s.BACK&&(ve[0]=s.BACK,Ie=!0);Ie&&s.drawBuffers(ve)}function gt(H){return T!==H?(s.useProgram(H),T=H,!0):!1}const Jt={[Vs]:s.FUNC_ADD,[qv]:s.FUNC_SUBTRACT,[Yv]:s.FUNC_REVERSE_SUBTRACT};Jt[$v]=s.MIN,Jt[Kv]=s.MAX;const _t={[Zv]:s.ZERO,[Qv]:s.ONE,[Jv]:s.SRC_COLOR,[Hd]:s.SRC_ALPHA,[s_]:s.SRC_ALPHA_SATURATE,[i_]:s.DST_COLOR,[t_]:s.DST_ALPHA,[e_]:s.ONE_MINUS_SRC_COLOR,[Wd]:s.ONE_MINUS_SRC_ALPHA,[r_]:s.ONE_MINUS_DST_COLOR,[n_]:s.ONE_MINUS_DST_ALPHA,[a_]:s.CONSTANT_COLOR,[o_]:s.ONE_MINUS_CONSTANT_COLOR,[l_]:s.CONSTANT_ALPHA,[c_]:s.ONE_MINUS_CONSTANT_ALPHA};function Rt(H,Pe,ve,Ie,ge,me,Ce,rt,dt,tt){if(H===kr){A===!0&&(ye(s.BLEND),A=!1);return}if(A===!1&&(fe(s.BLEND),A=!0),H!==Xv){if(H!==y||tt!==b){if((_!==Vs||P!==Vs)&&(s.blendEquation(s.FUNC_ADD),_=Vs,P=Vs),tt)switch(H){case ja:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case km:s.blendFunc(s.ONE,s.ONE);break;case Bm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Bt("WebGLState: Invalid blending: ",H);break}else switch(H){case ja:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case km:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Bm:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zm:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",H);break}C=null,I=null,U=null,L=null,O.set(0,0,0),j=0,y=H,b=tt}return}ge=ge||Pe,me=me||ve,Ce=Ce||Ie,(Pe!==_||ge!==P)&&(s.blendEquationSeparate(Jt[Pe],Jt[ge]),_=Pe,P=ge),(ve!==C||Ie!==I||me!==U||Ce!==L)&&(s.blendFuncSeparate(_t[ve],_t[Ie],_t[me],_t[Ce]),C=ve,I=Ie,U=me,L=Ce),(rt.equals(O)===!1||dt!==j)&&(s.blendColor(rt.r,rt.g,rt.b,dt),O.copy(rt),j=dt),y=H,b=!1}function Lt(H,Pe){H.side===Ur?ye(s.CULL_FACE):fe(s.CULL_FACE);let ve=H.side===ci;Pe&&(ve=!ve),pt(ve),H.blending===ja&&H.transparent===!1?Rt(kr):Rt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),d.setFunc(H.depthFunc),d.setTest(H.depthTest),d.setMask(H.depthWrite),l.setMask(H.colorWrite);const Ie=H.stencilWrite;f.setTest(Ie),Ie&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Yt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?fe(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function pt(H){R!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),R=H)}function Ot(H){H!==Hv?(fe(s.CULL_FACE),H!==z&&(H===Fm?s.cullFace(s.BACK):H===Wv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),z=H}function V(H){H!==$&&(te&&s.lineWidth(H),$=H)}function Yt(H,Pe,ve){H?(fe(s.POLYGON_OFFSET_FILL),(Q!==Pe||re!==ve)&&(s.polygonOffset(Pe,ve),Q=Pe,re=ve)):ye(s.POLYGON_OFFSET_FILL)}function St(H){H?fe(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function xt(H){H===void 0&&(H=s.TEXTURE0+se-1),pe!==H&&(s.activeTexture(H),pe=H)}function je(H,Pe,ve){ve===void 0&&(pe===null?ve=s.TEXTURE0+se-1:ve=pe);let Ie=oe[ve];Ie===void 0&&(Ie={type:void 0,texture:void 0},oe[ve]=Ie),(Ie.type!==H||Ie.texture!==Pe)&&(pe!==ve&&(s.activeTexture(ve),pe=ve),s.bindTexture(H,Pe||ne[H]),Ie.type=H,Ie.texture=Pe)}function D(){const H=oe[pe];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function w(){try{s.compressedTexImage2D(...arguments)}catch(H){Bt("WebGLState:",H)}}function B(){try{s.compressedTexImage3D(...arguments)}catch(H){Bt("WebGLState:",H)}}function le(){try{s.texSubImage2D(...arguments)}catch(H){Bt("WebGLState:",H)}}function he(){try{s.texSubImage3D(...arguments)}catch(H){Bt("WebGLState:",H)}}function K(){try{s.compressedTexSubImage2D(...arguments)}catch(H){Bt("WebGLState:",H)}}function Fe(){try{s.compressedTexSubImage3D(...arguments)}catch(H){Bt("WebGLState:",H)}}function be(){try{s.texStorage2D(...arguments)}catch(H){Bt("WebGLState:",H)}}function Oe(){try{s.texStorage3D(...arguments)}catch(H){Bt("WebGLState:",H)}}function $e(){try{s.texImage2D(...arguments)}catch(H){Bt("WebGLState:",H)}}function xe(){try{s.texImage3D(...arguments)}catch(H){Bt("WebGLState:",H)}}function Ee(H){Ne.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),Ne.copy(H))}function ke(H){qe.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),qe.copy(H))}function Ge(H,Pe){let ve=m.get(Pe);ve===void 0&&(ve=new WeakMap,m.set(Pe,ve));let Ie=ve.get(H);Ie===void 0&&(Ie=s.getUniformBlockIndex(Pe,H.name),ve.set(H,Ie))}function Se(H,Pe){const Ie=m.get(Pe).get(H);p.get(Pe)!==Ie&&(s.uniformBlockBinding(Pe,Ie,H.__bindingPointIndex),p.set(Pe,Ie))}function ut(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},pe=null,oe={},v={},S=new WeakMap,M=[],T=null,A=!1,y=null,_=null,C=null,I=null,P=null,U=null,L=null,O=new Et(0,0,0),j=0,b=!1,R=null,z=null,$=null,Q=null,re=null,Ne.set(0,0,s.canvas.width,s.canvas.height),qe.set(0,0,s.canvas.width,s.canvas.height),l.reset(),d.reset(),f.reset()}return{buffers:{color:l,depth:d,stencil:f},enable:fe,disable:ye,bindFramebuffer:Be,drawBuffers:Le,useProgram:gt,setBlending:Rt,setMaterial:Lt,setFlipSided:pt,setCullFace:Ot,setLineWidth:V,setPolygonOffset:Yt,setScissorTest:St,activeTexture:xt,bindTexture:je,unbindTexture:D,compressedTexImage2D:w,compressedTexImage3D:B,texImage2D:$e,texImage3D:xe,updateUBOMapping:Ge,uniformBlockBinding:Se,texStorage2D:be,texStorage3D:Oe,texSubImage2D:le,texSubImage3D:he,compressedTexSubImage2D:K,compressedTexSubImage3D:Fe,scissor:Ee,viewport:ke,reset:ut}}function $w(s,e,t,r,o,l,d){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ft,x=new WeakMap;let v;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(D,w){return M?new OffscreenCanvas(D,w):jo("canvas")}function A(D,w,B){let le=1;const he=je(D);if((he.width>B||he.height>B)&&(le=B/Math.max(he.width,he.height)),le<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const K=Math.floor(le*he.width),Fe=Math.floor(le*he.height);v===void 0&&(v=T(K,Fe));const be=w?T(K,Fe):v;return be.width=K,be.height=Fe,be.getContext("2d").drawImage(D,0,0,K,Fe),vt("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+K+"x"+Fe+")."),be}else return"data"in D&&vt("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),D;return D}function y(D){return D.generateMipmaps}function _(D){s.generateMipmap(D)}function C(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function I(D,w,B,le,he=!1){if(D!==null){if(s[D]!==void 0)return s[D];vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let K=w;if(w===s.RED&&(B===s.FLOAT&&(K=s.R32F),B===s.HALF_FLOAT&&(K=s.R16F),B===s.UNSIGNED_BYTE&&(K=s.R8)),w===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(K=s.R8UI),B===s.UNSIGNED_SHORT&&(K=s.R16UI),B===s.UNSIGNED_INT&&(K=s.R32UI),B===s.BYTE&&(K=s.R8I),B===s.SHORT&&(K=s.R16I),B===s.INT&&(K=s.R32I)),w===s.RG&&(B===s.FLOAT&&(K=s.RG32F),B===s.HALF_FLOAT&&(K=s.RG16F),B===s.UNSIGNED_BYTE&&(K=s.RG8)),w===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(K=s.RG8UI),B===s.UNSIGNED_SHORT&&(K=s.RG16UI),B===s.UNSIGNED_INT&&(K=s.RG32UI),B===s.BYTE&&(K=s.RG8I),B===s.SHORT&&(K=s.RG16I),B===s.INT&&(K=s.RG32I)),w===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(K=s.RGB8UI),B===s.UNSIGNED_SHORT&&(K=s.RGB16UI),B===s.UNSIGNED_INT&&(K=s.RGB32UI),B===s.BYTE&&(K=s.RGB8I),B===s.SHORT&&(K=s.RGB16I),B===s.INT&&(K=s.RGB32I)),w===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),B===s.UNSIGNED_INT&&(K=s.RGBA32UI),B===s.BYTE&&(K=s.RGBA8I),B===s.SHORT&&(K=s.RGBA16I),B===s.INT&&(K=s.RGBA32I)),w===s.RGB&&(B===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),B===s.UNSIGNED_INT_10F_11F_11F_REV&&(K=s.R11F_G11F_B10F)),w===s.RGBA){const Fe=he?wc:zt.getTransfer(le);B===s.FLOAT&&(K=s.RGBA32F),B===s.HALF_FLOAT&&(K=s.RGBA16F),B===s.UNSIGNED_BYTE&&(K=Fe===Zt?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function P(D,w){let B;return D?w===null||w===dr||w===zo?B=s.DEPTH24_STENCIL8:w===ar?B=s.DEPTH32F_STENCIL8:w===Bo&&(B=s.DEPTH24_STENCIL8,vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===dr||w===zo?B=s.DEPTH_COMPONENT24:w===ar?B=s.DEPTH_COMPONENT32F:w===Bo&&(B=s.DEPTH_COMPONENT16),B}function U(D,w){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==Fn&&D.minFilter!==Pn?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function L(D){const w=D.target;w.removeEventListener("dispose",L),j(w),w.isVideoTexture&&x.delete(w)}function O(D){const w=D.target;w.removeEventListener("dispose",O),R(w)}function j(D){const w=r.get(D);if(w.__webglInit===void 0)return;const B=D.source,le=S.get(B);if(le){const he=le[w.__cacheKey];he.usedTimes--,he.usedTimes===0&&b(D),Object.keys(le).length===0&&S.delete(B)}r.remove(D)}function b(D){const w=r.get(D);s.deleteTexture(w.__webglTexture);const B=D.source,le=S.get(B);delete le[w.__cacheKey],d.memory.textures--}function R(D){const w=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(w.__webglFramebuffer[le]))for(let he=0;he<w.__webglFramebuffer[le].length;he++)s.deleteFramebuffer(w.__webglFramebuffer[le][he]);else s.deleteFramebuffer(w.__webglFramebuffer[le]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[le])}else{if(Array.isArray(w.__webglFramebuffer))for(let le=0;le<w.__webglFramebuffer.length;le++)s.deleteFramebuffer(w.__webglFramebuffer[le]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let le=0;le<w.__webglColorRenderbuffer.length;le++)w.__webglColorRenderbuffer[le]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[le]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const B=D.textures;for(let le=0,he=B.length;le<he;le++){const K=r.get(B[le]);K.__webglTexture&&(s.deleteTexture(K.__webglTexture),d.memory.textures--),r.remove(B[le])}r.remove(D)}let z=0;function $(){z=0}function Q(){const D=z;return D>=o.maxTextures&&vt("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),z+=1,D}function re(D){const w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function se(D,w){const B=r.get(D);if(D.isVideoTexture&&St(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&B.__version!==D.version){const le=D.image;if(le===null)vt("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)vt("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(B,D,w);return}}else D.isExternalTexture&&(B.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+w)}function te(D,w){const B=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&B.__version!==D.version){ne(B,D,w);return}else D.isExternalTexture&&(B.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+w)}function q(D,w){const B=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&B.__version!==D.version){ne(B,D,w);return}t.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+w)}function X(D,w){const B=r.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&B.__version!==D.version){fe(B,D,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+w)}const pe={[tf]:s.REPEAT,[Or]:s.CLAMP_TO_EDGE,[nf]:s.MIRRORED_REPEAT},oe={[Fn]:s.NEAREST,[f_]:s.NEAREST_MIPMAP_NEAREST,[Wl]:s.NEAREST_MIPMAP_LINEAR,[Pn]:s.LINEAR,[ld]:s.LINEAR_MIPMAP_NEAREST,[Hs]:s.LINEAR_MIPMAP_LINEAR},F={[m_]:s.NEVER,[y_]:s.ALWAYS,[g_]:s.LESS,[Zf]:s.LEQUAL,[x_]:s.EQUAL,[Qf]:s.GEQUAL,[v_]:s.GREATER,[__]:s.NOTEQUAL};function ce(D,w){if(w.type===ar&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Pn||w.magFilter===ld||w.magFilter===Wl||w.magFilter===Hs||w.minFilter===Pn||w.minFilter===ld||w.minFilter===Wl||w.minFilter===Hs)&&vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,pe[w.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,pe[w.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,pe[w.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,oe[w.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,oe[w.minFilter]),w.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,F[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Fn||w.minFilter!==Wl&&w.minFilter!==Hs||w.type===ar&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function Ne(D,w){let B=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",L));const le=w.source;let he=S.get(le);he===void 0&&(he={},S.set(le,he));const K=re(w);if(K!==D.__cacheKey){he[K]===void 0&&(he[K]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,B=!0),he[K].usedTimes++;const Fe=he[D.__cacheKey];Fe!==void 0&&(he[D.__cacheKey].usedTimes--,Fe.usedTimes===0&&b(w)),D.__cacheKey=K,D.__webglTexture=he[K].texture}return B}function qe(D,w,B){return Math.floor(Math.floor(D/B)/w)}function We(D,w,B,le){const K=D.updateRanges;if(K.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,B,le,w.data);else{K.sort((xe,Ee)=>xe.start-Ee.start);let Fe=0;for(let xe=1;xe<K.length;xe++){const Ee=K[Fe],ke=K[xe],Ge=Ee.start+Ee.count,Se=qe(ke.start,w.width,4),ut=qe(Ee.start,w.width,4);ke.start<=Ge+1&&Se===ut&&qe(ke.start+ke.count-1,w.width,4)===Se?Ee.count=Math.max(Ee.count,ke.start+ke.count-Ee.start):(++Fe,K[Fe]=ke)}K.length=Fe+1;const be=s.getParameter(s.UNPACK_ROW_LENGTH),Oe=s.getParameter(s.UNPACK_SKIP_PIXELS),$e=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let xe=0,Ee=K.length;xe<Ee;xe++){const ke=K[xe],Ge=Math.floor(ke.start/4),Se=Math.ceil(ke.count/4),ut=Ge%w.width,H=Math.floor(Ge/w.width),Pe=Se,ve=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ut),s.pixelStorei(s.UNPACK_SKIP_ROWS,H),t.texSubImage2D(s.TEXTURE_2D,0,ut,H,Pe,ve,B,le,w.data)}D.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,be),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Oe),s.pixelStorei(s.UNPACK_SKIP_ROWS,$e)}}function ne(D,w,B){let le=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(le=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(le=s.TEXTURE_3D);const he=Ne(D,w),K=w.source;t.bindTexture(le,D.__webglTexture,s.TEXTURE0+B);const Fe=r.get(K);if(K.version!==Fe.__version||he===!0){t.activeTexture(s.TEXTURE0+B);const be=zt.getPrimaries(zt.workingColorSpace),Oe=w.colorSpace===gs?null:zt.getPrimaries(w.colorSpace),$e=w.colorSpace===gs||be===Oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let xe=A(w.image,!1,o.maxTextureSize);xe=xt(w,xe);const Ee=l.convert(w.format,w.colorSpace),ke=l.convert(w.type);let Ge=I(w.internalFormat,Ee,ke,w.colorSpace,w.isVideoTexture);ce(le,w);let Se;const ut=w.mipmaps,H=w.isVideoTexture!==!0,Pe=Fe.__version===void 0||he===!0,ve=K.dataReady,Ie=U(w,xe);if(w.isDepthTexture)Ge=P(w.format===Ws,w.type),Pe&&(H?t.texStorage2D(s.TEXTURE_2D,1,Ge,xe.width,xe.height):t.texImage2D(s.TEXTURE_2D,0,Ge,xe.width,xe.height,0,Ee,ke,null));else if(w.isDataTexture)if(ut.length>0){H&&Pe&&t.texStorage2D(s.TEXTURE_2D,Ie,Ge,ut[0].width,ut[0].height);for(let ge=0,me=ut.length;ge<me;ge++)Se=ut[ge],H?ve&&t.texSubImage2D(s.TEXTURE_2D,ge,0,0,Se.width,Se.height,Ee,ke,Se.data):t.texImage2D(s.TEXTURE_2D,ge,Ge,Se.width,Se.height,0,Ee,ke,Se.data);w.generateMipmaps=!1}else H?(Pe&&t.texStorage2D(s.TEXTURE_2D,Ie,Ge,xe.width,xe.height),ve&&We(w,xe,Ee,ke)):t.texImage2D(s.TEXTURE_2D,0,Ge,xe.width,xe.height,0,Ee,ke,xe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){H&&Pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Ge,ut[0].width,ut[0].height,xe.depth);for(let ge=0,me=ut.length;ge<me;ge++)if(Se=ut[ge],w.format!==qi)if(Ee!==null)if(H){if(ve)if(w.layerUpdates.size>0){const Ce=m0(Se.width,Se.height,w.format,w.type);for(const rt of w.layerUpdates){const dt=Se.data.subarray(rt*Ce/Se.data.BYTES_PER_ELEMENT,(rt+1)*Ce/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,rt,Se.width,Se.height,1,Ee,dt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Se.width,Se.height,xe.depth,Ee,Se.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ge,Ge,Se.width,Se.height,xe.depth,0,Se.data,0,0);else vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?ve&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Se.width,Se.height,xe.depth,Ee,ke,Se.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ge,Ge,Se.width,Se.height,xe.depth,0,Ee,ke,Se.data)}else{H&&Pe&&t.texStorage2D(s.TEXTURE_2D,Ie,Ge,ut[0].width,ut[0].height);for(let ge=0,me=ut.length;ge<me;ge++)Se=ut[ge],w.format!==qi?Ee!==null?H?ve&&t.compressedTexSubImage2D(s.TEXTURE_2D,ge,0,0,Se.width,Se.height,Ee,Se.data):t.compressedTexImage2D(s.TEXTURE_2D,ge,Ge,Se.width,Se.height,0,Se.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?ve&&t.texSubImage2D(s.TEXTURE_2D,ge,0,0,Se.width,Se.height,Ee,ke,Se.data):t.texImage2D(s.TEXTURE_2D,ge,Ge,Se.width,Se.height,0,Ee,ke,Se.data)}else if(w.isDataArrayTexture)if(H){if(Pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Ge,xe.width,xe.height,xe.depth),ve)if(w.layerUpdates.size>0){const ge=m0(xe.width,xe.height,w.format,w.type);for(const me of w.layerUpdates){const Ce=xe.data.subarray(me*ge/xe.data.BYTES_PER_ELEMENT,(me+1)*ge/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,xe.width,xe.height,1,Ee,ke,Ce)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Ee,ke,xe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ge,xe.width,xe.height,xe.depth,0,Ee,ke,xe.data);else if(w.isData3DTexture)H?(Pe&&t.texStorage3D(s.TEXTURE_3D,Ie,Ge,xe.width,xe.height,xe.depth),ve&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Ee,ke,xe.data)):t.texImage3D(s.TEXTURE_3D,0,Ge,xe.width,xe.height,xe.depth,0,Ee,ke,xe.data);else if(w.isFramebufferTexture){if(Pe)if(H)t.texStorage2D(s.TEXTURE_2D,Ie,Ge,xe.width,xe.height);else{let ge=xe.width,me=xe.height;for(let Ce=0;Ce<Ie;Ce++)t.texImage2D(s.TEXTURE_2D,Ce,Ge,ge,me,0,Ee,ke,null),ge>>=1,me>>=1}}else if(ut.length>0){if(H&&Pe){const ge=je(ut[0]);t.texStorage2D(s.TEXTURE_2D,Ie,Ge,ge.width,ge.height)}for(let ge=0,me=ut.length;ge<me;ge++)Se=ut[ge],H?ve&&t.texSubImage2D(s.TEXTURE_2D,ge,0,0,Ee,ke,Se):t.texImage2D(s.TEXTURE_2D,ge,Ge,Ee,ke,Se);w.generateMipmaps=!1}else if(H){if(Pe){const ge=je(xe);t.texStorage2D(s.TEXTURE_2D,Ie,Ge,ge.width,ge.height)}ve&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee,ke,xe)}else t.texImage2D(s.TEXTURE_2D,0,Ge,Ee,ke,xe);y(w)&&_(le),Fe.__version=K.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function fe(D,w,B){if(w.image.length!==6)return;const le=Ne(D,w),he=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+B);const K=r.get(he);if(he.version!==K.__version||le===!0){t.activeTexture(s.TEXTURE0+B);const Fe=zt.getPrimaries(zt.workingColorSpace),be=w.colorSpace===gs?null:zt.getPrimaries(w.colorSpace),Oe=w.colorSpace===gs||Fe===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const $e=w.isCompressedTexture||w.image[0].isCompressedTexture,xe=w.image[0]&&w.image[0].isDataTexture,Ee=[];for(let me=0;me<6;me++)!$e&&!xe?Ee[me]=A(w.image[me],!0,o.maxCubemapSize):Ee[me]=xe?w.image[me].image:w.image[me],Ee[me]=xt(w,Ee[me]);const ke=Ee[0],Ge=l.convert(w.format,w.colorSpace),Se=l.convert(w.type),ut=I(w.internalFormat,Ge,Se,w.colorSpace),H=w.isVideoTexture!==!0,Pe=K.__version===void 0||le===!0,ve=he.dataReady;let Ie=U(w,ke);ce(s.TEXTURE_CUBE_MAP,w);let ge;if($e){H&&Pe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,ut,ke.width,ke.height);for(let me=0;me<6;me++){ge=Ee[me].mipmaps;for(let Ce=0;Ce<ge.length;Ce++){const rt=ge[Ce];w.format!==qi?Ge!==null?H?ve&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ce,0,0,rt.width,rt.height,Ge,rt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ce,ut,rt.width,rt.height,0,rt.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ce,0,0,rt.width,rt.height,Ge,Se,rt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ce,ut,rt.width,rt.height,0,Ge,Se,rt.data)}}}else{if(ge=w.mipmaps,H&&Pe){ge.length>0&&Ie++;const me=je(Ee[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,ut,me.width,me.height)}for(let me=0;me<6;me++)if(xe){H?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ee[me].width,Ee[me].height,Ge,Se,Ee[me].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ut,Ee[me].width,Ee[me].height,0,Ge,Se,Ee[me].data);for(let Ce=0;Ce<ge.length;Ce++){const dt=ge[Ce].image[me].image;H?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ce+1,0,0,dt.width,dt.height,Ge,Se,dt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ce+1,ut,dt.width,dt.height,0,Ge,Se,dt.data)}}else{H?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ge,Se,Ee[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ut,Ge,Se,Ee[me]);for(let Ce=0;Ce<ge.length;Ce++){const rt=ge[Ce];H?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ce+1,0,0,Ge,Se,rt.image[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ce+1,ut,Ge,Se,rt.image[me])}}}y(w)&&_(s.TEXTURE_CUBE_MAP),K.__version=he.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function ye(D,w,B,le,he,K){const Fe=l.convert(B.format,B.colorSpace),be=l.convert(B.type),Oe=I(B.internalFormat,Fe,be,B.colorSpace),$e=r.get(w),xe=r.get(B);if(xe.__renderTarget=w,!$e.__hasExternalTextures){const Ee=Math.max(1,w.width>>K),ke=Math.max(1,w.height>>K);he===s.TEXTURE_3D||he===s.TEXTURE_2D_ARRAY?t.texImage3D(he,K,Oe,Ee,ke,w.depth,0,Fe,be,null):t.texImage2D(he,K,Oe,Ee,ke,0,Fe,be,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),Yt(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,le,he,xe.__webglTexture,0,V(w)):(he===s.TEXTURE_2D||he>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,le,he,xe.__webglTexture,K),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(D,w,B){if(s.bindRenderbuffer(s.RENDERBUFFER,D),w.depthBuffer){const le=w.depthTexture,he=le&&le.isDepthTexture?le.type:null,K=P(w.stencilBuffer,he),Fe=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Yt(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,V(w),K,w.width,w.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,V(w),K,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,K,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Fe,s.RENDERBUFFER,D)}else{const le=w.textures;for(let he=0;he<le.length;he++){const K=le[he],Fe=l.convert(K.format,K.colorSpace),be=l.convert(K.type),Oe=I(K.internalFormat,Fe,be,K.colorSpace);Yt(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,V(w),Oe,w.width,w.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,V(w),Oe,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Oe,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Le(D,w,B){const le=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=r.get(w.depthTexture);if(he.__renderTarget=w,(!he.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),le){if(he.__webglInit===void 0&&(he.__webglInit=!0,w.depthTexture.addEventListener("dispose",L)),he.__webglTexture===void 0){he.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),ce(s.TEXTURE_CUBE_MAP,w.depthTexture);const $e=l.convert(w.depthTexture.format),xe=l.convert(w.depthTexture.type);let Ee;w.depthTexture.format===jr?Ee=s.DEPTH_COMPONENT24:w.depthTexture.format===Ws&&(Ee=s.DEPTH24_STENCIL8);for(let ke=0;ke<6;ke++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0,Ee,w.width,w.height,0,$e,xe,null)}}else se(w.depthTexture,0);const K=he.__webglTexture,Fe=V(w),be=le?s.TEXTURE_CUBE_MAP_POSITIVE_X+B:s.TEXTURE_2D,Oe=w.depthTexture.format===Ws?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===jr)Yt(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Oe,be,K,0,Fe):s.framebufferTexture2D(s.FRAMEBUFFER,Oe,be,K,0);else if(w.depthTexture.format===Ws)Yt(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Oe,be,K,0,Fe):s.framebufferTexture2D(s.FRAMEBUFFER,Oe,be,K,0);else throw new Error("Unknown depthTexture format")}function gt(D){const w=r.get(D),B=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){const le=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),le){const he=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,le.removeEventListener("dispose",he)};le.addEventListener("dispose",he),w.__depthDisposeCallback=he}w.__boundDepthTexture=le}if(D.depthTexture&&!w.__autoAllocateDepthBuffer)if(B)for(let le=0;le<6;le++)Le(w.__webglFramebuffer[le],D,le);else{const le=D.texture.mipmaps;le&&le.length>0?Le(w.__webglFramebuffer[0],D,0):Le(w.__webglFramebuffer,D,0)}else if(B){w.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[le]),w.__webglDepthbuffer[le]===void 0)w.__webglDepthbuffer[le]=s.createRenderbuffer(),Be(w.__webglDepthbuffer[le],D,!1);else{const he=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=w.__webglDepthbuffer[le];s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,K)}}else{const le=D.texture.mipmaps;if(le&&le.length>0?t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),Be(w.__webglDepthbuffer,D,!1);else{const he=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,K)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Jt(D,w,B){const le=r.get(D);w!==void 0&&ye(le.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&gt(D)}function _t(D){const w=D.texture,B=r.get(D),le=r.get(w);D.addEventListener("dispose",O);const he=D.textures,K=D.isWebGLCubeRenderTarget===!0,Fe=he.length>1;if(Fe||(le.__webglTexture===void 0&&(le.__webglTexture=s.createTexture()),le.__version=w.version,d.memory.textures++),K){B.__webglFramebuffer=[];for(let be=0;be<6;be++)if(w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer[be]=[];for(let Oe=0;Oe<w.mipmaps.length;Oe++)B.__webglFramebuffer[be][Oe]=s.createFramebuffer()}else B.__webglFramebuffer[be]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer=[];for(let be=0;be<w.mipmaps.length;be++)B.__webglFramebuffer[be]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(Fe)for(let be=0,Oe=he.length;be<Oe;be++){const $e=r.get(he[be]);$e.__webglTexture===void 0&&($e.__webglTexture=s.createTexture(),d.memory.textures++)}if(D.samples>0&&Yt(D)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let be=0;be<he.length;be++){const Oe=he[be];B.__webglColorRenderbuffer[be]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[be]);const $e=l.convert(Oe.format,Oe.colorSpace),xe=l.convert(Oe.type),Ee=I(Oe.internalFormat,$e,xe,Oe.colorSpace,D.isXRRenderTarget===!0),ke=V(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,ke,Ee,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,B.__webglColorRenderbuffer[be])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),Be(B.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){t.bindTexture(s.TEXTURE_CUBE_MAP,le.__webglTexture),ce(s.TEXTURE_CUBE_MAP,w);for(let be=0;be<6;be++)if(w.mipmaps&&w.mipmaps.length>0)for(let Oe=0;Oe<w.mipmaps.length;Oe++)ye(B.__webglFramebuffer[be][Oe],D,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Oe);else ye(B.__webglFramebuffer[be],D,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);y(w)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let be=0,Oe=he.length;be<Oe;be++){const $e=he[be],xe=r.get($e);let Ee=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ee=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ee,xe.__webglTexture),ce(Ee,$e),ye(B.__webglFramebuffer,D,$e,s.COLOR_ATTACHMENT0+be,Ee,0),y($e)&&_(Ee)}t.unbindTexture()}else{let be=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(be=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(be,le.__webglTexture),ce(be,w),w.mipmaps&&w.mipmaps.length>0)for(let Oe=0;Oe<w.mipmaps.length;Oe++)ye(B.__webglFramebuffer[Oe],D,w,s.COLOR_ATTACHMENT0,be,Oe);else ye(B.__webglFramebuffer,D,w,s.COLOR_ATTACHMENT0,be,0);y(w)&&_(be),t.unbindTexture()}D.depthBuffer&&gt(D)}function Rt(D){const w=D.textures;for(let B=0,le=w.length;B<le;B++){const he=w[B];if(y(he)){const K=C(D),Fe=r.get(he).__webglTexture;t.bindTexture(K,Fe),_(K),t.unbindTexture()}}}const Lt=[],pt=[];function Ot(D){if(D.samples>0){if(Yt(D)===!1){const w=D.textures,B=D.width,le=D.height;let he=s.COLOR_BUFFER_BIT;const K=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Fe=r.get(D),be=w.length>1;if(be)for(let $e=0;$e<w.length;$e++)t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer);const Oe=D.texture.mipmaps;Oe&&Oe.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let $e=0;$e<w.length;$e++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(he|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(he|=s.STENCIL_BUFFER_BIT)),be){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Fe.__webglColorRenderbuffer[$e]);const xe=r.get(w[$e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,xe,0)}s.blitFramebuffer(0,0,B,le,0,0,B,le,he,s.NEAREST),p===!0&&(Lt.length=0,pt.length=0,Lt.push(s.COLOR_ATTACHMENT0+$e),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Lt.push(K),pt.push(K),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,pt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Lt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),be)for(let $e=0;$e<w.length;$e++){t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.RENDERBUFFER,Fe.__webglColorRenderbuffer[$e]);const xe=r.get(w[$e]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.TEXTURE_2D,xe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&p){const w=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function V(D){return Math.min(o.maxSamples,D.samples)}function Yt(D){const w=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function St(D){const w=d.render.frame;x.get(D)!==w&&(x.set(D,w),D.update())}function xt(D,w){const B=D.colorSpace,le=D.format,he=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||B!==Xa&&B!==gs&&(zt.getTransfer(B)===Zt?(le!==qi||he!==_i)&&vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",B)),w}function je(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(m.width=D.naturalWidth||D.width,m.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(m.width=D.displayWidth,m.height=D.displayHeight):(m.width=D.width,m.height=D.height),m}this.allocateTextureUnit=Q,this.resetTextureUnits=$,this.setTexture2D=se,this.setTexture2DArray=te,this.setTexture3D=q,this.setTextureCube=X,this.rebindTextures=Jt,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Yt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Kw(s,e){function t(r,o=gs){let l;const d=zt.getTransfer(o);if(r===_i)return s.UNSIGNED_BYTE;if(r===Xf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===qf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===og)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===lg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===sg)return s.BYTE;if(r===ag)return s.SHORT;if(r===Bo)return s.UNSIGNED_SHORT;if(r===Wf)return s.INT;if(r===dr)return s.UNSIGNED_INT;if(r===ar)return s.FLOAT;if(r===zr)return s.HALF_FLOAT;if(r===cg)return s.ALPHA;if(r===ug)return s.RGB;if(r===qi)return s.RGBA;if(r===jr)return s.DEPTH_COMPONENT;if(r===Ws)return s.DEPTH_STENCIL;if(r===dg)return s.RED;if(r===Yf)return s.RED_INTEGER;if(r===Wa)return s.RG;if(r===$f)return s.RG_INTEGER;if(r===Kf)return s.RGBA_INTEGER;if(r===pc||r===mc||r===gc||r===xc)if(d===Zt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===pc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===mc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===gc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===xc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===pc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===mc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===gc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===xc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===rf||r===sf||r===af||r===of)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===rf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===sf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===af)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===of)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===lf||r===cf||r===uf||r===df||r===ff||r===hf||r===pf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===lf||r===cf)return d===Zt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===uf)return d===Zt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===df)return l.COMPRESSED_R11_EAC;if(r===ff)return l.COMPRESSED_SIGNED_R11_EAC;if(r===hf)return l.COMPRESSED_RG11_EAC;if(r===pf)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===mf||r===gf||r===xf||r===vf||r===_f||r===yf||r===Sf||r===Mf||r===wf||r===bf||r===Ef||r===Tf||r===Cf||r===Af)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===mf)return d===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===gf)return d===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===xf)return d===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vf)return d===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_f)return d===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===yf)return d===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Sf)return d===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Mf)return d===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===wf)return d===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===bf)return d===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ef)return d===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Tf)return d===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Cf)return d===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Af)return d===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Rf||r===Nf||r===Pf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Rf)return d===Zt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Nf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Pf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Df||r===Lf||r===If||r===Uf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Df)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Lf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===If)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Uf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===zo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const Zw=`
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

}`;class Jw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new wg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new hr({vertexShader:Zw,fragmentShader:Qw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Re(new Yn(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eb extends Ys{constructor(e,t){super();const r=this;let o=null,l=1,d=null,f="local-floor",p=1,m=null,x=null,v=null,S=null,M=null,T=null;const A=typeof XRWebGLBinding<"u",y=new Jw,_={},C=t.getContextAttributes();let I=null,P=null;const U=[],L=[],O=new ft;let j=null;const b=new Jn;b.viewport=new fn;const R=new Jn;R.viewport=new fn;const z=[b,R],$=new l1;let Q=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let fe=U[ne];return fe===void 0&&(fe=new Nd,U[ne]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ne){let fe=U[ne];return fe===void 0&&(fe=new Nd,U[ne]=fe),fe.getGripSpace()},this.getHand=function(ne){let fe=U[ne];return fe===void 0&&(fe=new Nd,U[ne]=fe),fe.getHandSpace()};function se(ne){const fe=L.indexOf(ne.inputSource);if(fe===-1)return;const ye=U[fe];ye!==void 0&&(ye.update(ne.inputSource,ne.frame,m||d),ye.dispatchEvent({type:ne.type,data:ne.inputSource}))}function te(){o.removeEventListener("select",se),o.removeEventListener("selectstart",se),o.removeEventListener("selectend",se),o.removeEventListener("squeeze",se),o.removeEventListener("squeezestart",se),o.removeEventListener("squeezeend",se),o.removeEventListener("end",te),o.removeEventListener("inputsourceschange",q);for(let ne=0;ne<U.length;ne++){const fe=L[ne];fe!==null&&(L[ne]=null,U[ne].disconnect(fe))}Q=null,re=null,y.reset();for(const ne in _)delete _[ne];e.setRenderTarget(I),M=null,S=null,v=null,o=null,P=null,We.stop(),r.isPresenting=!1,e.setPixelRatio(j),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){l=ne,r.isPresenting===!0&&vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){f=ne,r.isPresenting===!0&&vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(ne){m=ne},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(ne){if(o=ne,o!==null){if(I=e.getRenderTarget(),o.addEventListener("select",se),o.addEventListener("selectstart",se),o.addEventListener("selectend",se),o.addEventListener("squeeze",se),o.addEventListener("squeezestart",se),o.addEventListener("squeezeend",se),o.addEventListener("end",te),o.addEventListener("inputsourceschange",q),C.xrCompatible!==!0&&await t.makeXRCompatible(),j=e.getPixelRatio(),e.getSize(O),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Be=null,Le=null;C.depth&&(Le=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=C.stencil?Ws:jr,Be=C.stencil?zo:dr);const gt={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:l};v=this.getBinding(),S=v.createProjectionLayer(gt),o.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),P=new cr(S.textureWidth,S.textureHeight,{format:qi,type:_i,depthTexture:new Go(S.textureWidth,S.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const ye={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,ye),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new cr(M.framebufferWidth,M.framebufferHeight,{format:qi,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await o.requestReferenceSpace(f),We.setContext(o),We.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function q(ne){for(let fe=0;fe<ne.removed.length;fe++){const ye=ne.removed[fe],Be=L.indexOf(ye);Be>=0&&(L[Be]=null,U[Be].disconnect(ye))}for(let fe=0;fe<ne.added.length;fe++){const ye=ne.added[fe];let Be=L.indexOf(ye);if(Be===-1){for(let gt=0;gt<U.length;gt++)if(gt>=L.length){L.push(ye),Be=gt;break}else if(L[gt]===null){L[gt]=ye,Be=gt;break}if(Be===-1)break}const Le=U[Be];Le&&Le.connect(ye)}}const X=new Z,pe=new Z;function oe(ne,fe,ye){X.setFromMatrixPosition(fe.matrixWorld),pe.setFromMatrixPosition(ye.matrixWorld);const Be=X.distanceTo(pe),Le=fe.projectionMatrix.elements,gt=ye.projectionMatrix.elements,Jt=Le[14]/(Le[10]-1),_t=Le[14]/(Le[10]+1),Rt=(Le[9]+1)/Le[5],Lt=(Le[9]-1)/Le[5],pt=(Le[8]-1)/Le[0],Ot=(gt[8]+1)/gt[0],V=Jt*pt,Yt=Jt*Ot,St=Be/(-pt+Ot),xt=St*-pt;if(fe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(xt),ne.translateZ(St),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Le[10]===-1)ne.projectionMatrix.copy(fe.projectionMatrix),ne.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const je=Jt+St,D=_t+St,w=V-xt,B=Yt+(Be-xt),le=Rt*_t/D*je,he=Lt*_t/D*je;ne.projectionMatrix.makePerspective(w,B,le,he,je,D),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function F(ne,fe){fe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(fe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(o===null)return;let fe=ne.near,ye=ne.far;y.texture!==null&&(y.depthNear>0&&(fe=y.depthNear),y.depthFar>0&&(ye=y.depthFar)),$.near=R.near=b.near=fe,$.far=R.far=b.far=ye,(Q!==$.near||re!==$.far)&&(o.updateRenderState({depthNear:$.near,depthFar:$.far}),Q=$.near,re=$.far),$.layers.mask=ne.layers.mask|6,b.layers.mask=$.layers.mask&3,R.layers.mask=$.layers.mask&5;const Be=ne.parent,Le=$.cameras;F($,Be);for(let gt=0;gt<Le.length;gt++)F(Le[gt],Be);Le.length===2?oe($,b,R):$.projectionMatrix.copy(b.projectionMatrix),ce(ne,$,Be)};function ce(ne,fe,ye){ye===null?ne.matrix.copy(fe.matrixWorld):(ne.matrix.copy(ye.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(fe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(fe.projectionMatrix),ne.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Ec*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(S===null&&M===null))return p},this.setFoveation=function(ne){p=ne,S!==null&&(S.fixedFoveation=ne),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ne)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh($)},this.getCameraTexture=function(ne){return _[ne]};let Ne=null;function qe(ne,fe){if(x=fe.getViewerPose(m||d),T=fe,x!==null){const ye=x.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let Be=!1;ye.length!==$.cameras.length&&($.cameras.length=0,Be=!0);for(let _t=0;_t<ye.length;_t++){const Rt=ye[_t];let Lt=null;if(M!==null)Lt=M.getViewport(Rt);else{const Ot=v.getViewSubImage(S,Rt);Lt=Ot.viewport,_t===0&&(e.setRenderTargetTextures(P,Ot.colorTexture,Ot.depthStencilTexture),e.setRenderTarget(P))}let pt=z[_t];pt===void 0&&(pt=new Jn,pt.layers.enable(_t),pt.viewport=new fn,z[_t]=pt),pt.matrix.fromArray(Rt.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Rt.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),_t===0&&($.matrix.copy(pt.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Be===!0&&$.cameras.push(pt)}const Le=o.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){v=r.getBinding();const _t=v.getDepthInformation(ye[0]);_t&&_t.isValid&&_t.texture&&y.init(_t,o.renderState)}if(Le&&Le.includes("camera-access")&&A){e.state.unbindTexture(),v=r.getBinding();for(let _t=0;_t<ye.length;_t++){const Rt=ye[_t].camera;if(Rt){let Lt=_[Rt];Lt||(Lt=new wg,_[Rt]=Lt);const pt=v.getCameraImage(Rt);Lt.sourceTexture=pt}}}}for(let ye=0;ye<U.length;ye++){const Be=L[ye],Le=U[ye];Be!==null&&Le!==void 0&&Le.update(Be,fe,m||d)}Ne&&Ne(ne,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),T=null}const We=new Tg;We.setAnimationLoop(qe),this.setAnimationLoop=function(ne){Ne=ne},this.dispose=function(){}}}const js=new fr,tb=new cn;function nb(s,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,vg(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function o(y,_,C,I,P){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(y,_):_.isMeshToonMaterial?(l(y,_),v(y,_)):_.isMeshPhongMaterial?(l(y,_),x(y,_)):_.isMeshStandardMaterial?(l(y,_),S(y,_),_.isMeshPhysicalMaterial&&M(y,_,P)):_.isMeshMatcapMaterial?(l(y,_),T(y,_)):_.isMeshDepthMaterial?l(y,_):_.isMeshDistanceMaterial?(l(y,_),A(y,_)):_.isMeshNormalMaterial?l(y,_):_.isLineBasicMaterial?(d(y,_),_.isLineDashedMaterial&&f(y,_)):_.isPointsMaterial?p(y,_,C,I):_.isSpriteMaterial?m(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===ci&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===ci&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const C=e.get(_),I=C.envMap,P=C.envMapRotation;I&&(y.envMap.value=I,js.copy(P),js.x*=-1,js.y*=-1,js.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(js.y*=-1,js.z*=-1),y.envMapRotation.value.setFromMatrix4(tb.makeRotationFromEuler(js)),y.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function d(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function f(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function p(y,_,C,I){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*C,y.scale.value=I*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function m(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function x(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function S(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,C){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===ci&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=C.texture,y.transmissionSamplerSize.value.set(C.width,C.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,_){_.matcap&&(y.matcap.value=_.matcap)}function A(y,_){const C=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(C.matrixWorld),y.nearDistance.value=C.shadow.camera.near,y.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function ib(s,e,t,r){let o={},l={},d=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,I){const P=I.program;r.uniformBlockBinding(C,P)}function m(C,I){let P=o[C.id];P===void 0&&(T(C),P=x(C),o[C.id]=P,C.addEventListener("dispose",y));const U=I.program;r.updateUBOMapping(C,U);const L=e.render.frame;l[C.id]!==L&&(S(C),l[C.id]=L)}function x(C){const I=v();C.__bindingPointIndex=I;const P=s.createBuffer(),U=C.__size,L=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,U,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,I,P),P}function v(){for(let C=0;C<f;C++)if(d.indexOf(C)===-1)return d.push(C),C;return Bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(C){const I=o[C.id],P=C.uniforms,U=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,I);for(let L=0,O=P.length;L<O;L++){const j=Array.isArray(P[L])?P[L]:[P[L]];for(let b=0,R=j.length;b<R;b++){const z=j[b];if(M(z,L,b,U)===!0){const $=z.__offset,Q=Array.isArray(z.value)?z.value:[z.value];let re=0;for(let se=0;se<Q.length;se++){const te=Q[se],q=A(te);typeof te=="number"||typeof te=="boolean"?(z.__data[0]=te,s.bufferSubData(s.UNIFORM_BUFFER,$+re,z.__data)):te.isMatrix3?(z.__data[0]=te.elements[0],z.__data[1]=te.elements[1],z.__data[2]=te.elements[2],z.__data[3]=0,z.__data[4]=te.elements[3],z.__data[5]=te.elements[4],z.__data[6]=te.elements[5],z.__data[7]=0,z.__data[8]=te.elements[6],z.__data[9]=te.elements[7],z.__data[10]=te.elements[8],z.__data[11]=0):(te.toArray(z.__data,re),re+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,$,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(C,I,P,U){const L=C.value,O=I+"_"+P;if(U[O]===void 0)return typeof L=="number"||typeof L=="boolean"?U[O]=L:U[O]=L.clone(),!0;{const j=U[O];if(typeof L=="number"||typeof L=="boolean"){if(j!==L)return U[O]=L,!0}else if(j.equals(L)===!1)return j.copy(L),!0}return!1}function T(C){const I=C.uniforms;let P=0;const U=16;for(let O=0,j=I.length;O<j;O++){const b=Array.isArray(I[O])?I[O]:[I[O]];for(let R=0,z=b.length;R<z;R++){const $=b[R],Q=Array.isArray($.value)?$.value:[$.value];for(let re=0,se=Q.length;re<se;re++){const te=Q[re],q=A(te),X=P%U,pe=X%q.boundary,oe=X+pe;P+=pe,oe!==0&&U-oe<q.storage&&(P+=U-oe),$.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=P,P+=q.storage}}}const L=P%U;return L>0&&(P+=U-L),C.__size=P,C.__cache={},this}function A(C){const I={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(I.boundary=4,I.storage=4):C.isVector2?(I.boundary=8,I.storage=8):C.isVector3||C.isColor?(I.boundary=16,I.storage=12):C.isVector4?(I.boundary=16,I.storage=16):C.isMatrix3?(I.boundary=48,I.storage=48):C.isMatrix4?(I.boundary=64,I.storage=64):C.isTexture?vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):vt("WebGLRenderer: Unsupported uniform value type.",C),I}function y(C){const I=C.target;I.removeEventListener("dispose",y);const P=d.indexOf(I.__bindingPointIndex);d.splice(P,1),s.deleteBuffer(o[I.id]),delete o[I.id],delete l[I.id]}function _(){for(const C in o)s.deleteBuffer(o[C]);d=[],o={},l={}}return{bind:p,update:m,dispose:_}}const rb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let rr=null;function sb(){return rr===null&&(rr=new Y_(rb,16,16,Wa,zr),rr.name="DFG_LUT",rr.minFilter=Pn,rr.magFilter=Pn,rr.wrapS=Or,rr.wrapT=Or,rr.generateMipmaps=!1,rr.needsUpdate=!0),rr}class Pg{constructor(e={}){const{canvas:t=S_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:S=!1,outputBufferType:M=_i}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=d;const A=M,y=new Set([Kf,$f,Yf]),_=new Set([_i,dr,Bo,zo,Xf,qf]),C=new Uint32Array(4),I=new Int32Array(4);let P=null,U=null;const L=[],O=[];let j=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=lr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let R=!1;this._outputColorSpace=On;let z=0,$=0,Q=null,re=-1,se=null;const te=new fn,q=new fn;let X=null;const pe=new Et(0);let oe=0,F=t.width,ce=t.height,Ne=1,qe=null,We=null;const ne=new fn(0,0,F,ce),fe=new fn(0,0,F,ce);let ye=!1;const Be=new rh;let Le=!1,gt=!1;const Jt=new cn,_t=new Z,Rt=new fn,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Ot(){return Q===null?Ne:1}let V=r;function Yt(N,Y){return t.getContext(N,Y)}try{const N={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gf}`),t.addEventListener("webglcontextlost",rt,!1),t.addEventListener("webglcontextrestored",dt,!1),t.addEventListener("webglcontextcreationerror",tt,!1),V===null){const Y="webgl2";if(V=Yt(Y,N),V===null)throw Yt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw Bt("WebGLRenderer: "+N.message),N}let St,xt,je,D,w,B,le,he,K,Fe,be,Oe,$e,xe,Ee,ke,Ge,Se,ut,H,Pe,ve,Ie,ge;function me(){St=new sM(V),St.init(),ve=new Kw(V,St),xt=new KS(V,St,e,ve),je=new Yw(V,St),xt.reversedDepthBuffer&&S&&je.buffers.depth.setReversed(!0),D=new lM(V),w=new Lw,B=new $w(V,St,je,w,xt,ve,D),le=new QS(b),he=new rM(b),K=new f1(V),Ie=new YS(V,K),Fe=new aM(V,K,D,Ie),be=new uM(V,Fe,K,D),ut=new cM(V,xt,B),ke=new ZS(w),Oe=new Dw(b,le,he,St,xt,Ie,ke),$e=new nb(b,w),xe=new Uw,Ee=new jw(St),Se=new qS(b,le,he,je,be,T,p),Ge=new Xw(b,be,xt),ge=new ib(V,D,xt,je),H=new $S(V,St,D),Pe=new oM(V,St,D),D.programs=Oe.programs,b.capabilities=xt,b.extensions=St,b.properties=w,b.renderLists=xe,b.shadowMap=Ge,b.state=je,b.info=D}me(),A!==_i&&(j=new fM(A,t.width,t.height,o,l));const Ce=new eb(b,V);this.xr=Ce,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const N=St.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=St.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(N){N!==void 0&&(Ne=N,this.setSize(F,ce,!1))},this.getSize=function(N){return N.set(F,ce)},this.setSize=function(N,Y,ue=!0){if(Ce.isPresenting){vt("WebGLRenderer: Can't change size while VR device is presenting.");return}F=N,ce=Y,t.width=Math.floor(N*Ne),t.height=Math.floor(Y*Ne),ue===!0&&(t.style.width=N+"px",t.style.height=Y+"px"),j!==null&&j.setSize(t.width,t.height),this.setViewport(0,0,N,Y)},this.getDrawingBufferSize=function(N){return N.set(F*Ne,ce*Ne).floor()},this.setDrawingBufferSize=function(N,Y,ue){F=N,ce=Y,Ne=ue,t.width=Math.floor(N*ue),t.height=Math.floor(Y*ue),this.setViewport(0,0,N,Y)},this.setEffects=function(N){if(A===_i){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let Y=0;Y<N.length;Y++)if(N[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}j.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(te)},this.getViewport=function(N){return N.copy(ne)},this.setViewport=function(N,Y,ue,ae){N.isVector4?ne.set(N.x,N.y,N.z,N.w):ne.set(N,Y,ue,ae),je.viewport(te.copy(ne).multiplyScalar(Ne).round())},this.getScissor=function(N){return N.copy(fe)},this.setScissor=function(N,Y,ue,ae){N.isVector4?fe.set(N.x,N.y,N.z,N.w):fe.set(N,Y,ue,ae),je.scissor(q.copy(fe).multiplyScalar(Ne).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(N){je.setScissorTest(ye=N)},this.setOpaqueSort=function(N){qe=N},this.setTransparentSort=function(N){We=N},this.getClearColor=function(N){return N.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(N=!0,Y=!0,ue=!0){let ae=0;if(N){let J=!1;if(Q!==null){const De=Q.texture.format;J=y.has(De)}if(J){const De=Q.texture.type,Ve=_.has(De),Ae=Se.getClearColor(),Ye=Se.getClearAlpha(),He=Ae.r,st=Ae.g,it=Ae.b;Ve?(C[0]=He,C[1]=st,C[2]=it,C[3]=Ye,V.clearBufferuiv(V.COLOR,0,C)):(I[0]=He,I[1]=st,I[2]=it,I[3]=Ye,V.clearBufferiv(V.COLOR,0,I))}else ae|=V.COLOR_BUFFER_BIT}Y&&(ae|=V.DEPTH_BUFFER_BIT),ue&&(ae|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",tt,!1),Se.dispose(),xe.dispose(),Ee.dispose(),w.dispose(),le.dispose(),he.dispose(),be.dispose(),Ie.dispose(),ge.dispose(),Oe.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",$i),Ce.removeEventListener("sessionend",Ki),ui.stop()};function rt(N){N.preventDefault(),Wm("WebGLRenderer: Context Lost."),R=!0}function dt(){Wm("WebGLRenderer: Context Restored."),R=!1;const N=D.autoReset,Y=Ge.enabled,ue=Ge.autoUpdate,ae=Ge.needsUpdate,J=Ge.type;me(),D.autoReset=N,Ge.enabled=Y,Ge.autoUpdate=ue,Ge.needsUpdate=ae,Ge.type=J}function tt(N){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Vt(N){const Y=N.target;Y.removeEventListener("dispose",Vt),Ht(Y)}function Ht(N){hn(N),w.remove(N)}function hn(N){const Y=w.get(N).programs;Y!==void 0&&(Y.forEach(function(ue){Oe.releaseProgram(ue)}),N.isShaderMaterial&&Oe.releaseShaderCache(N))}this.renderBufferDirect=function(N,Y,ue,ae,J,De){Y===null&&(Y=Lt);const Ve=J.isMesh&&J.matrixWorld.determinant()<0,Ae=_s(N,Y,ue,ae,J);je.setMaterial(ae,Ve);let Ye=ue.index,He=1;if(ae.wireframe===!0){if(Ye=Fe.getWireframeAttribute(ue),Ye===void 0)return;He=2}const st=ue.drawRange,it=ue.attributes.position;let Mt=st.start*He,Nt=(st.start+st.count)*He;De!==null&&(Mt=Math.max(Mt,De.start*He),Nt=Math.min(Nt,(De.start+De.count)*He)),Ye!==null?(Mt=Math.max(Mt,0),Nt=Math.min(Nt,Ye.count)):it!=null&&(Mt=Math.max(Mt,0),Nt=Math.min(Nt,it.count));const Xt=Nt-Mt;if(Xt<0||Xt===1/0)return;Ie.setup(J,ae,Ae,ue,Ye);let Gt,It=H;if(Ye!==null&&(Gt=K.get(Ye),It=Pe,It.setIndex(Gt)),J.isMesh)ae.wireframe===!0?(je.setLineWidth(ae.wireframeLinewidth*Ot()),It.setMode(V.LINES)):It.setMode(V.TRIANGLES);else if(J.isLine){let nt=ae.linewidth;nt===void 0&&(nt=1),je.setLineWidth(nt*Ot()),J.isLineSegments?It.setMode(V.LINES):J.isLineLoop?It.setMode(V.LINE_LOOP):It.setMode(V.LINE_STRIP)}else J.isPoints?It.setMode(V.POINTS):J.isSprite&&It.setMode(V.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Vo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),It.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(St.get("WEBGL_multi_draw"))It.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const nt=J._multiDrawStarts,Ut=J._multiDrawCounts,Tt=J._multiDrawCount,yn=Ye?K.get(Ye).bytesPerElement:1,di=w.get(ae).currentProgram.getUniforms();for(let $t=0;$t<Tt;$t++)di.setValue(V,"_gl_DrawID",$t),It.render(nt[$t]/yn,Ut[$t])}else if(J.isInstancedMesh)It.renderInstances(Mt,Xt,J.count);else if(ue.isInstancedBufferGeometry){const nt=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Ut=Math.min(ue.instanceCount,nt);It.renderInstances(Mt,Xt,Ut)}else It.render(Mt,Xt)};function Ln(N,Y,ue){N.transparent===!0&&N.side===Ur&&N.forceSinglePass===!1?(N.side=ci,N.needsUpdate=!0,Hr(N,Y,ue),N.side=vs,N.needsUpdate=!0,Hr(N,Y,ue),N.side=Ur):Hr(N,Y,ue)}this.compile=function(N,Y,ue=null){ue===null&&(ue=N),U=Ee.get(ue),U.init(Y),O.push(U),ue.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(U.pushLight(J),J.castShadow&&U.pushShadow(J))}),N!==ue&&N.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(U.pushLight(J),J.castShadow&&U.pushShadow(J))}),U.setupLights();const ae=new Set;return N.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const De=J.material;if(De)if(Array.isArray(De))for(let Ve=0;Ve<De.length;Ve++){const Ae=De[Ve];Ln(Ae,ue,J),ae.add(Ae)}else Ln(De,ue,J),ae.add(De)}),U=O.pop(),ae},this.compileAsync=function(N,Y,ue=null){const ae=this.compile(N,Y,ue);return new Promise(J=>{function De(){if(ae.forEach(function(Ve){w.get(Ve).currentProgram.isReady()&&ae.delete(Ve)}),ae.size===0){J(N);return}setTimeout(De,10)}St.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Pi=null;function Yi(N){Pi&&Pi(N)}function $i(){ui.stop()}function Ki(){ui.start()}const ui=new Tg;ui.setAnimationLoop(Yi),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(N){Pi=N,Ce.setAnimationLoop(N),N===null?ui.stop():ui.start()},Ce.addEventListener("sessionstart",$i),Ce.addEventListener("sessionend",Ki),this.render=function(N,Y){if(Y!==void 0&&Y.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;const ue=Ce.enabled===!0&&Ce.isPresenting===!0,ae=j!==null&&(Q===null||ue)&&j.begin(b,Q);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(j===null||j.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(Y),Y=Ce.getCamera()),N.isScene===!0&&N.onBeforeRender(b,N,Y,Q),U=Ee.get(N,O.length),U.init(Y),O.push(U),Jt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Be.setFromProjectionMatrix(Jt,or,Y.reversedDepth),gt=this.localClippingEnabled,Le=ke.init(this.clippingPlanes,gt),P=xe.get(N,L.length),P.init(),L.push(P),Ce.enabled===!0&&Ce.isPresenting===!0){const Ve=b.xr.getDepthSensingMesh();Ve!==null&&Vr(Ve,Y,-1/0,b.sortObjects)}Vr(N,Y,0,b.sortObjects),P.finish(),b.sortObjects===!0&&P.sort(qe,We),pt=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,pt&&Se.addToRenderList(P,N),this.info.render.frame++,Le===!0&&ke.beginShadows();const J=U.state.shadowsArray;if(Ge.render(J,N,Y),Le===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ae&&j.hasRenderPass())===!1){const Ve=P.opaque,Ae=P.transmissive;if(U.setupLights(),Y.isArrayCamera){const Ye=Y.cameras;if(Ae.length>0)for(let He=0,st=Ye.length;He<st;He++){const it=Ye[He];$s(Ve,Ae,N,it)}pt&&Se.render(N);for(let He=0,st=Ye.length;He<st;He++){const it=Ye[He];Gr(P,N,it,it.viewport)}}else Ae.length>0&&$s(Ve,Ae,N,Y),pt&&Se.render(N),Gr(P,N,Y)}Q!==null&&$===0&&(B.updateMultisampleRenderTarget(Q),B.updateRenderTargetMipmap(Q)),ae&&j.end(b),N.isScene===!0&&N.onAfterRender(b,N,Y),Ie.resetDefaultState(),re=-1,se=null,O.pop(),O.length>0?(U=O[O.length-1],Le===!0&&ke.setGlobalState(b.clippingPlanes,U.state.camera)):U=null,L.pop(),L.length>0?P=L[L.length-1]:P=null};function Vr(N,Y,ue,ae){if(N.visible===!1)return;if(N.layers.test(Y.layers)){if(N.isGroup)ue=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(Y);else if(N.isLight)U.pushLight(N),N.castShadow&&U.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||Be.intersectsSprite(N)){ae&&Rt.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Jt);const Ve=be.update(N),Ae=N.material;Ae.visible&&P.push(N,Ve,Ae,ue,Rt.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||Be.intersectsObject(N))){const Ve=be.update(N),Ae=N.material;if(ae&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Rt.copy(N.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Rt.copy(Ve.boundingSphere.center)),Rt.applyMatrix4(N.matrixWorld).applyMatrix4(Jt)),Array.isArray(Ae)){const Ye=Ve.groups;for(let He=0,st=Ye.length;He<st;He++){const it=Ye[He],Mt=Ae[it.materialIndex];Mt&&Mt.visible&&P.push(N,Ve,Mt,ue,Rt.z,it)}}else Ae.visible&&P.push(N,Ve,Ae,ue,Rt.z,null)}}const De=N.children;for(let Ve=0,Ae=De.length;Ve<Ae;Ve++)Vr(De[Ve],Y,ue,ae)}function Gr(N,Y,ue,ae){const{opaque:J,transmissive:De,transparent:Ve}=N;U.setupLightsView(ue),Le===!0&&ke.setGlobalState(b.clippingPlanes,ue),ae&&je.viewport(te.copy(ae)),J.length>0&&ei(J,Y,ue),De.length>0&&ei(De,Y,ue),Ve.length>0&&ei(Ve,Y,ue),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function $s(N,Y,ue,ae){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[ae.id]===void 0){const Mt=St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[ae.id]=new cr(1,1,{generateMipmaps:!0,type:Mt?zr:_i,minFilter:Hs,samples:xt.samples,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:zt.workingColorSpace})}const De=U.state.transmissionRenderTarget[ae.id],Ve=ae.viewport||te;De.setSize(Ve.z*b.transmissionResolutionScale,Ve.w*b.transmissionResolutionScale);const Ae=b.getRenderTarget(),Ye=b.getActiveCubeFace(),He=b.getActiveMipmapLevel();b.setRenderTarget(De),b.getClearColor(pe),oe=b.getClearAlpha(),oe<1&&b.setClearColor(16777215,.5),b.clear(),pt&&Se.render(ue);const st=b.toneMapping;b.toneMapping=lr;const it=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),U.setupLightsView(ae),Le===!0&&ke.setGlobalState(b.clippingPlanes,ae),ei(N,ue,ae),B.updateMultisampleRenderTarget(De),B.updateRenderTargetMipmap(De),St.has("WEBGL_multisampled_render_to_texture")===!1){let Mt=!1;for(let Nt=0,Xt=Y.length;Nt<Xt;Nt++){const Gt=Y[Nt],{object:It,geometry:nt,material:Ut,group:Tt}=Gt;if(Ut.side===Ur&&It.layers.test(ae.layers)){const yn=Ut.side;Ut.side=ci,Ut.needsUpdate=!0,pr(It,ue,ae,nt,Ut,Tt),Ut.side=yn,Ut.needsUpdate=!0,Mt=!0}}Mt===!0&&(B.updateMultisampleRenderTarget(De),B.updateRenderTargetMipmap(De))}b.setRenderTarget(Ae,Ye,He),b.setClearColor(pe,oe),it!==void 0&&(ae.viewport=it),b.toneMapping=st}function ei(N,Y,ue){const ae=Y.isScene===!0?Y.overrideMaterial:null;for(let J=0,De=N.length;J<De;J++){const Ve=N[J],{object:Ae,geometry:Ye,group:He}=Ve;let st=Ve.material;st.allowOverride===!0&&ae!==null&&(st=ae),Ae.layers.test(ue.layers)&&pr(Ae,Y,ue,Ye,st,He)}}function pr(N,Y,ue,ae,J,De){N.onBeforeRender(b,Y,ue,ae,J,De),N.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),J.onBeforeRender(b,Y,ue,ae,N,De),J.transparent===!0&&J.side===Ur&&J.forceSinglePass===!1?(J.side=ci,J.needsUpdate=!0,b.renderBufferDirect(ue,Y,ae,J,N,De),J.side=vs,J.needsUpdate=!0,b.renderBufferDirect(ue,Y,ae,J,N,De),J.side=Ur):b.renderBufferDirect(ue,Y,ae,J,N,De),N.onAfterRender(b,Y,ue,ae,J,De)}function Hr(N,Y,ue){Y.isScene!==!0&&(Y=Lt);const ae=w.get(N),J=U.state.lights,De=U.state.shadowsArray,Ve=J.state.version,Ae=Oe.getParameters(N,J.state,De,Y,ue),Ye=Oe.getProgramCacheKey(Ae);let He=ae.programs;ae.environment=N.isMeshStandardMaterial?Y.environment:null,ae.fog=Y.fog,ae.envMap=(N.isMeshStandardMaterial?he:le).get(N.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&N.envMap===null?Y.environmentRotation:N.envMapRotation,He===void 0&&(N.addEventListener("dispose",Vt),He=new Map,ae.programs=He);let st=He.get(Ye);if(st!==void 0){if(ae.currentProgram===st&&ae.lightsStateVersion===Ve)return Ks(N,Ae),st}else Ae.uniforms=Oe.getUniforms(N),N.onBeforeCompile(Ae,b),st=Oe.acquireProgram(Ae,Ye),He.set(Ye,st),ae.uniforms=Ae.uniforms;const it=ae.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(it.clippingPlanes=ke.uniform),Ks(N,Ae),ae.needsLights=mr(N),ae.lightsStateVersion=Ve,ae.needsLights&&(it.ambientLightColor.value=J.state.ambient,it.lightProbe.value=J.state.probe,it.directionalLights.value=J.state.directional,it.directionalLightShadows.value=J.state.directionalShadow,it.spotLights.value=J.state.spot,it.spotLightShadows.value=J.state.spotShadow,it.rectAreaLights.value=J.state.rectArea,it.ltc_1.value=J.state.rectAreaLTC1,it.ltc_2.value=J.state.rectAreaLTC2,it.pointLights.value=J.state.point,it.pointLightShadows.value=J.state.pointShadow,it.hemisphereLights.value=J.state.hemi,it.directionalShadowMap.value=J.state.directionalShadowMap,it.directionalShadowMatrix.value=J.state.directionalShadowMatrix,it.spotShadowMap.value=J.state.spotShadowMap,it.spotLightMatrix.value=J.state.spotLightMatrix,it.spotLightMap.value=J.state.spotLightMap,it.pointShadowMap.value=J.state.pointShadowMap,it.pointShadowMatrix.value=J.state.pointShadowMatrix),ae.currentProgram=st,ae.uniformsList=null,st}function an(N){if(N.uniformsList===null){const Y=N.currentProgram.getUniforms();N.uniformsList=_c.seqWithValue(Y.seq,N.uniforms)}return N.uniformsList}function Ks(N,Y){const ue=w.get(N);ue.outputColorSpace=Y.outputColorSpace,ue.batching=Y.batching,ue.batchingColor=Y.batchingColor,ue.instancing=Y.instancing,ue.instancingColor=Y.instancingColor,ue.instancingMorph=Y.instancingMorph,ue.skinning=Y.skinning,ue.morphTargets=Y.morphTargets,ue.morphNormals=Y.morphNormals,ue.morphColors=Y.morphColors,ue.morphTargetsCount=Y.morphTargetsCount,ue.numClippingPlanes=Y.numClippingPlanes,ue.numIntersection=Y.numClipIntersection,ue.vertexAlphas=Y.vertexAlphas,ue.vertexTangents=Y.vertexTangents,ue.toneMapping=Y.toneMapping}function _s(N,Y,ue,ae,J){Y.isScene!==!0&&(Y=Lt),B.resetTextureUnits();const De=Y.fog,Ve=ae.isMeshStandardMaterial?Y.environment:null,Ae=Q===null?b.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Xa,Ye=(ae.isMeshStandardMaterial?he:le).get(ae.envMap||Ve),He=ae.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,st=!!ue.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),it=!!ue.morphAttributes.position,Mt=!!ue.morphAttributes.normal,Nt=!!ue.morphAttributes.color;let Xt=lr;ae.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Xt=b.toneMapping);const Gt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,It=Gt!==void 0?Gt.length:0,nt=w.get(ae),Ut=U.state.lights;if(Le===!0&&(gt===!0||N!==se)){const un=N===se&&ae.id===re;ke.setState(ae,N,un)}let Tt=!1;ae.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==Ut.state.version||nt.outputColorSpace!==Ae||J.isBatchedMesh&&nt.batching===!1||!J.isBatchedMesh&&nt.batching===!0||J.isBatchedMesh&&nt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&nt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&nt.instancing===!1||!J.isInstancedMesh&&nt.instancing===!0||J.isSkinnedMesh&&nt.skinning===!1||!J.isSkinnedMesh&&nt.skinning===!0||J.isInstancedMesh&&nt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&nt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&nt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&nt.instancingMorph===!1&&J.morphTexture!==null||nt.envMap!==Ye||ae.fog===!0&&nt.fog!==De||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==ke.numPlanes||nt.numIntersection!==ke.numIntersection)||nt.vertexAlphas!==He||nt.vertexTangents!==st||nt.morphTargets!==it||nt.morphNormals!==Mt||nt.morphColors!==Nt||nt.toneMapping!==Xt||nt.morphTargetsCount!==It)&&(Tt=!0):(Tt=!0,nt.__version=ae.version);let yn=nt.currentProgram;Tt===!0&&(yn=Hr(ae,Y,J));let di=!1,$t=!1,Zi=!1;const Ft=yn.getUniforms(),ht=nt.uniforms;if(je.useProgram(yn.program)&&(di=!0,$t=!0,Zi=!0),ae.id!==re&&(re=ae.id,$t=!0),di||se!==N){je.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Ft.setValue(V,"projectionMatrix",N.projectionMatrix),Ft.setValue(V,"viewMatrix",N.matrixWorldInverse);const pn=Ft.map.cameraPosition;pn!==void 0&&pn.setValue(V,_t.setFromMatrixPosition(N.matrixWorld)),xt.logarithmicDepthBuffer&&Ft.setValue(V,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Ft.setValue(V,"isOrthographic",N.isOrthographicCamera===!0),se!==N&&(se=N,$t=!0,Zi=!0)}if(nt.needsLights&&(Ut.state.directionalShadowMap.length>0&&Ft.setValue(V,"directionalShadowMap",Ut.state.directionalShadowMap,B),Ut.state.spotShadowMap.length>0&&Ft.setValue(V,"spotShadowMap",Ut.state.spotShadowMap,B),Ut.state.pointShadowMap.length>0&&Ft.setValue(V,"pointShadowMap",Ut.state.pointShadowMap,B)),J.isSkinnedMesh){Ft.setOptional(V,J,"bindMatrix"),Ft.setOptional(V,J,"bindMatrixInverse");const un=J.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Ft.setValue(V,"boneTexture",un.boneTexture,B))}J.isBatchedMesh&&(Ft.setOptional(V,J,"batchingTexture"),Ft.setValue(V,"batchingTexture",J._matricesTexture,B),Ft.setOptional(V,J,"batchingIdTexture"),Ft.setValue(V,"batchingIdTexture",J._indirectTexture,B),Ft.setOptional(V,J,"batchingColorTexture"),J._colorsTexture!==null&&Ft.setValue(V,"batchingColorTexture",J._colorsTexture,B));const qt=ue.morphAttributes;if((qt.position!==void 0||qt.normal!==void 0||qt.color!==void 0)&&ut.update(J,ue,yn),($t||nt.receiveShadow!==J.receiveShadow)&&(nt.receiveShadow=J.receiveShadow,Ft.setValue(V,"receiveShadow",J.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(ht.envMap.value=Ye,ht.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&Y.environment!==null&&(ht.envMapIntensity.value=Y.environmentIntensity),ht.dfgLUT!==void 0&&(ht.dfgLUT.value=sb()),$t&&(Ft.setValue(V,"toneMappingExposure",b.toneMappingExposure),nt.needsLights&&Zs(ht,Zi),De&&ae.fog===!0&&$e.refreshFogUniforms(ht,De),$e.refreshMaterialUniforms(ht,ae,Ne,ce,U.state.transmissionRenderTarget[N.id]),_c.upload(V,an(nt),ht,B)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(_c.upload(V,an(nt),ht,B),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Ft.setValue(V,"center",J.center),Ft.setValue(V,"modelViewMatrix",J.modelViewMatrix),Ft.setValue(V,"normalMatrix",J.normalMatrix),Ft.setValue(V,"modelMatrix",J.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const un=ae.uniformsGroups;for(let pn=0,xr=un.length;pn<xr;pn++){const fi=un[pn];ge.update(fi,yn),ge.bind(fi,yn)}}return yn}function Zs(N,Y){N.ambientLightColor.needsUpdate=Y,N.lightProbe.needsUpdate=Y,N.directionalLights.needsUpdate=Y,N.directionalLightShadows.needsUpdate=Y,N.pointLights.needsUpdate=Y,N.pointLightShadows.needsUpdate=Y,N.spotLights.needsUpdate=Y,N.spotLightShadows.needsUpdate=Y,N.rectAreaLights.needsUpdate=Y,N.hemisphereLights.needsUpdate=Y}function mr(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(N,Y,ue){const ae=w.get(N);ae.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),w.get(N.texture).__webglTexture=Y,w.get(N.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:ue,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,Y){const ue=w.get(N);ue.__webglFramebuffer=Y,ue.__useDefaultFramebuffer=Y===void 0};const gr=V.createFramebuffer();this.setRenderTarget=function(N,Y=0,ue=0){Q=N,z=Y,$=ue;let ae=null,J=!1,De=!1;if(N){const Ae=w.get(N);if(Ae.__useDefaultFramebuffer!==void 0){je.bindFramebuffer(V.FRAMEBUFFER,Ae.__webglFramebuffer),te.copy(N.viewport),q.copy(N.scissor),X=N.scissorTest,je.viewport(te),je.scissor(q),je.setScissorTest(X),re=-1;return}else if(Ae.__webglFramebuffer===void 0)B.setupRenderTarget(N);else if(Ae.__hasExternalTextures)B.rebindTextures(N,w.get(N.texture).__webglTexture,w.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const st=N.depthTexture;if(Ae.__boundDepthTexture!==st){if(st!==null&&w.has(st)&&(N.width!==st.image.width||N.height!==st.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(N)}}const Ye=N.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(De=!0);const He=w.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(He[Y])?ae=He[Y][ue]:ae=He[Y],J=!0):N.samples>0&&B.useMultisampledRTT(N)===!1?ae=w.get(N).__webglMultisampledFramebuffer:Array.isArray(He)?ae=He[ue]:ae=He,te.copy(N.viewport),q.copy(N.scissor),X=N.scissorTest}else te.copy(ne).multiplyScalar(Ne).floor(),q.copy(fe).multiplyScalar(Ne).floor(),X=ye;if(ue!==0&&(ae=gr),je.bindFramebuffer(V.FRAMEBUFFER,ae)&&je.drawBuffers(N,ae),je.viewport(te),je.scissor(q),je.setScissorTest(X),J){const Ae=w.get(N.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ae.__webglTexture,ue)}else if(De){const Ae=Y;for(let Ye=0;Ye<N.textures.length;Ye++){const He=w.get(N.textures[Ye]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ye,He.__webglTexture,ue,Ae)}}else if(N!==null&&ue!==0){const Ae=w.get(N.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ae.__webglTexture,ue)}re=-1},this.readRenderTargetPixels=function(N,Y,ue,ae,J,De,Ve,Ae=0){if(!(N&&N.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=w.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ye=Ye[Ve]),Ye){je.bindFramebuffer(V.FRAMEBUFFER,Ye);try{const He=N.textures[Ae],st=He.format,it=He.type;if(!xt.textureFormatReadable(st)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable(it)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=N.width-ae&&ue>=0&&ue<=N.height-J&&(N.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ae),V.readPixels(Y,ue,ae,J,ve.convert(st),ve.convert(it),De))}finally{const He=Q!==null?w.get(Q).__webglFramebuffer:null;je.bindFramebuffer(V.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(N,Y,ue,ae,J,De,Ve,Ae=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=w.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ye=Ye[Ve]),Ye)if(Y>=0&&Y<=N.width-ae&&ue>=0&&ue<=N.height-J){je.bindFramebuffer(V.FRAMEBUFFER,Ye);const He=N.textures[Ae],st=He.format,it=He.type;if(!xt.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xt.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Mt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Mt),V.bufferData(V.PIXEL_PACK_BUFFER,De.byteLength,V.STREAM_READ),N.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ae),V.readPixels(Y,ue,ae,J,ve.convert(st),ve.convert(it),0);const Nt=Q!==null?w.get(Q).__webglFramebuffer:null;je.bindFramebuffer(V.FRAMEBUFFER,Nt);const Xt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await M_(V,Xt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Mt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,De),V.deleteBuffer(Mt),V.deleteSync(Xt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,Y=null,ue=0){const ae=Math.pow(2,-ue),J=Math.floor(N.image.width*ae),De=Math.floor(N.image.height*ae),Ve=Y!==null?Y.x:0,Ae=Y!==null?Y.y:0;B.setTexture2D(N,0),V.copyTexSubImage2D(V.TEXTURE_2D,ue,0,0,Ve,Ae,J,De),je.unbindTexture()};const ys=V.createFramebuffer(),Wt=V.createFramebuffer();this.copyTextureToTexture=function(N,Y,ue=null,ae=null,J=0,De=null){De===null&&(J!==0?(Vo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),De=J,J=0):De=0);let Ve,Ae,Ye,He,st,it,Mt,Nt,Xt;const Gt=N.isCompressedTexture?N.mipmaps[De]:N.image;if(ue!==null)Ve=ue.max.x-ue.min.x,Ae=ue.max.y-ue.min.y,Ye=ue.isBox3?ue.max.z-ue.min.z:1,He=ue.min.x,st=ue.min.y,it=ue.isBox3?ue.min.z:0;else{const qt=Math.pow(2,-J);Ve=Math.floor(Gt.width*qt),Ae=Math.floor(Gt.height*qt),N.isDataArrayTexture?Ye=Gt.depth:N.isData3DTexture?Ye=Math.floor(Gt.depth*qt):Ye=1,He=0,st=0,it=0}ae!==null?(Mt=ae.x,Nt=ae.y,Xt=ae.z):(Mt=0,Nt=0,Xt=0);const It=ve.convert(Y.format),nt=ve.convert(Y.type);let Ut;Y.isData3DTexture?(B.setTexture3D(Y,0),Ut=V.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(B.setTexture2DArray(Y,0),Ut=V.TEXTURE_2D_ARRAY):(B.setTexture2D(Y,0),Ut=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Y.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Y.unpackAlignment);const Tt=V.getParameter(V.UNPACK_ROW_LENGTH),yn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),di=V.getParameter(V.UNPACK_SKIP_PIXELS),$t=V.getParameter(V.UNPACK_SKIP_ROWS),Zi=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Gt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Gt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,He),V.pixelStorei(V.UNPACK_SKIP_ROWS,st),V.pixelStorei(V.UNPACK_SKIP_IMAGES,it);const Ft=N.isDataArrayTexture||N.isData3DTexture,ht=Y.isDataArrayTexture||Y.isData3DTexture;if(N.isDepthTexture){const qt=w.get(N),un=w.get(Y),pn=w.get(qt.__renderTarget),xr=w.get(un.__renderTarget);je.bindFramebuffer(V.READ_FRAMEBUFFER,pn.__webglFramebuffer),je.bindFramebuffer(V.DRAW_FRAMEBUFFER,xr.__webglFramebuffer);for(let fi=0;fi<Ye;fi++)Ft&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,w.get(N).__webglTexture,J,it+fi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,w.get(Y).__webglTexture,De,Xt+fi)),V.blitFramebuffer(He,st,Ve,Ae,Mt,Nt,Ve,Ae,V.DEPTH_BUFFER_BIT,V.NEAREST);je.bindFramebuffer(V.READ_FRAMEBUFFER,null),je.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(J!==0||N.isRenderTargetTexture||w.has(N)){const qt=w.get(N),un=w.get(Y);je.bindFramebuffer(V.READ_FRAMEBUFFER,ys),je.bindFramebuffer(V.DRAW_FRAMEBUFFER,Wt);for(let pn=0;pn<Ye;pn++)Ft?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,qt.__webglTexture,J,it+pn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,qt.__webglTexture,J),ht?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,un.__webglTexture,De,Xt+pn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,un.__webglTexture,De),J!==0?V.blitFramebuffer(He,st,Ve,Ae,Mt,Nt,Ve,Ae,V.COLOR_BUFFER_BIT,V.NEAREST):ht?V.copyTexSubImage3D(Ut,De,Mt,Nt,Xt+pn,He,st,Ve,Ae):V.copyTexSubImage2D(Ut,De,Mt,Nt,He,st,Ve,Ae);je.bindFramebuffer(V.READ_FRAMEBUFFER,null),je.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else ht?N.isDataTexture||N.isData3DTexture?V.texSubImage3D(Ut,De,Mt,Nt,Xt,Ve,Ae,Ye,It,nt,Gt.data):Y.isCompressedArrayTexture?V.compressedTexSubImage3D(Ut,De,Mt,Nt,Xt,Ve,Ae,Ye,It,Gt.data):V.texSubImage3D(Ut,De,Mt,Nt,Xt,Ve,Ae,Ye,It,nt,Gt):N.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,De,Mt,Nt,Ve,Ae,It,nt,Gt.data):N.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,De,Mt,Nt,Gt.width,Gt.height,It,Gt.data):V.texSubImage2D(V.TEXTURE_2D,De,Mt,Nt,Ve,Ae,It,nt,Gt);V.pixelStorei(V.UNPACK_ROW_LENGTH,Tt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,yn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,di),V.pixelStorei(V.UNPACK_SKIP_ROWS,$t),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Zi),De===0&&Y.generateMipmaps&&V.generateMipmap(Ut),je.unbindTexture()},this.initRenderTarget=function(N){w.get(N).__webglFramebuffer===void 0&&B.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?B.setTextureCube(N,0):N.isData3DTexture?B.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?B.setTexture2DArray(N,0):B.setTexture2D(N,0),je.unbindTexture()},this.resetState=function(){z=0,$=0,Q=null,je.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return or}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=zt._getDrawingBufferColorSpace(e),t.unpackColorSpace=zt._getUnpackColorSpace()}}const B0={type:"change"},fh={type:"start"},Dg={type:"end"},dc=new th,z0=new ms,ab=Math.cos(70*b_.DEG2RAD),bn=new Z,li=2*Math.PI,Qt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},zd=1e-6;class Lg extends u1{constructor(e,t=null){super(e,t),this.state=Qt.NONE,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:za.ROTATE,MIDDLE:za.DOLLY,RIGHT:za.PAN},this.touches={ONE:Ba.ROTATE,TWO:Ba.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new qs,this._lastTargetPosition=new Z,this._quat=new qs().setFromUnitVectors(e.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new p0,this._sphericalDelta=new p0,this._scale=1,this._panOffset=new Z,this._rotateStart=new ft,this._rotateEnd=new ft,this._rotateDelta=new ft,this._panStart=new ft,this._panEnd=new ft,this._panDelta=new ft,this._dollyStart=new ft,this._dollyEnd=new ft,this._dollyDelta=new ft,this._dollyDirection=new Z,this._mouse=new ft,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=lb.bind(this),this._onPointerDown=ob.bind(this),this._onPointerUp=cb.bind(this),this._onContextMenu=gb.bind(this),this._onMouseWheel=fb.bind(this),this._onKeyDown=hb.bind(this),this._onTouchStart=pb.bind(this),this._onTouchMove=mb.bind(this),this._onMouseDown=ub.bind(this),this._onMouseMove=db.bind(this),this._interceptControlDown=xb.bind(this),this._interceptControlUp=vb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(B0),this.update(),this.state=Qt.NONE}update(e=null){const t=this.object.position;bn.copy(t).sub(this.target),bn.applyQuaternion(this._quat),this._spherical.setFromVector3(bn),this.autoRotate&&this.state===Qt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=li:r>Math.PI&&(r-=li),o<-Math.PI?o+=li:o>Math.PI&&(o-=li),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const d=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=d!=this._spherical.radius}if(bn.setFromSpherical(this._spherical),bn.applyQuaternion(this._quatInverse),t.copy(this.target).add(bn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let d=null;if(this.object.isPerspectiveCamera){const f=bn.length();d=this._clampDistance(f*this._scale);const p=f-d;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),l=!!p}else if(this.object.isOrthographicCamera){const f=new Z(this._mouse.x,this._mouse.y,0);f.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=p!==this.object.zoom;const m=new Z(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(f),this.object.updateMatrixWorld(),d=bn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;d!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(d).add(this.object.position):(dc.origin.copy(this.object.position),dc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(dc.direction))<ab?this.object.lookAt(this.target):(z0.setFromNormalAndCoplanarPoint(this.object.up,this.target),dc.intersectPlane(z0,this.target))))}else if(this.object.isOrthographicCamera){const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),d!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>zd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>zd||this._lastTargetPosition.distanceToSquared(this.target)>zd?(this.dispatchEvent(B0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?li/60*this.autoRotateSpeed*e:li/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){bn.setFromMatrixColumn(t,0),bn.multiplyScalar(-e),this._panOffset.add(bn)}_panUp(e,t){this.screenSpacePanning===!0?bn.setFromMatrixColumn(t,1):(bn.setFromMatrixColumn(t,0),bn.crossVectors(this.object.up,bn)),bn.multiplyScalar(e),this._panOffset.add(bn)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;bn.copy(o).sub(this.target);let l=bn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,l=t-r.top,d=r.width,f=r.height;this._mouse.x=o/d*2-1,this._mouse.y=-(l/f)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(li*this._rotateDelta.x/t.clientHeight),this._rotateUp(li*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(li*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-li*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(li*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-li*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(o,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(li*this._rotateDelta.x/t.clientHeight),this._rotateUp(li*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const d=(e.pageX+t.x)*.5,f=(e.pageY+t.y)*.5;this._updateZoomParameters(d,f)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ft,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function ob(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function lb(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function cb(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Dg),this.state=Qt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ub(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case za.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Qt.DOLLY;break;case za.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Qt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Qt.ROTATE}break;case za.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Qt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Qt.PAN}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent(fh)}function db(s){switch(this.state){case Qt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Qt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Qt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function fb(s){this.enabled===!1||this.enableZoom===!1||this.state!==Qt.NONE||(s.preventDefault(),this.dispatchEvent(fh),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Dg))}function hb(s){this.enabled!==!1&&this._handleKeyDown(s)}function pb(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ba.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Qt.TOUCH_ROTATE;break;case Ba.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Qt.TOUCH_PAN;break;default:this.state=Qt.NONE}break;case 2:switch(this.touches.TWO){case Ba.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Qt.TOUCH_DOLLY_PAN;break;case Ba.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Qt.TOUCH_DOLLY_ROTATE;break;default:this.state=Qt.NONE}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent(fh)}function mb(s){switch(this._trackPointer(s),this.state){case Qt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Qt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Qt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Qt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Qt.NONE}}function gb(s){this.enabled!==!1&&s.preventDefault()}function xb(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vb(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ig(){const s=document.createElement("canvas");s.width=1024,s.height=768;const e=s.getContext("2d");if(!e)return s;e.fillStyle="#08101a",e.fillRect(0,0,1024,768);const t=(f,p,m,x,v)=>{e.beginPath(),e.moveTo(f+v,p),e.lineTo(f+m-v,p),e.quadraticCurveTo(f+m,p,f+m,p+v),e.lineTo(f+m,p+x-v),e.quadraticCurveTo(f+m,p+x,f+m-v,p+x),e.lineTo(f+v,p+x),e.quadraticCurveTo(f,p+x,f,p+x-v),e.lineTo(f,p+v),e.quadraticCurveTo(f,p,f+v,p),e.closePath()},r=e.createLinearGradient(0,0,0,90);r.addColorStop(0,"#0284c7"),r.addColorStop(1,"#0369a1"),e.fillStyle=r,e.fillRect(0,0,1024,90),e.strokeStyle="#38bdf8",e.lineWidth=3,e.beginPath(),e.moveTo(0,90),e.lineTo(1024,90),e.stroke(),e.fillStyle="#ffffff",e.font='bold 38px "Courier New", Courier, monospace',e.textAlign="center",e.textBaseline="middle",e.fillText("10/05  15:42",490,48),e.beginPath(),e.arc(950,45,14,0,Math.PI*2),e.fillStyle="#22c55e",e.fill(),e.lineWidth=3,e.strokeStyle="#ffffff",e.stroke(),[{title:"EXAUSTOR",val:"OK",x:42},{title:"ENERGIA",val:"OK",x:367},{title:"GÁS",val:"ABERTO",x:692}].forEach(f=>{const p=e.createLinearGradient(0,120,0,245);p.addColorStop(0,"#22c55e"),p.addColorStop(1,"#15803d"),e.fillStyle=p,t(f.x,120,290,125,18),e.fill(),e.strokeStyle="#4ade80",e.lineWidth=3.5,e.stroke(),e.fillStyle="#ffffff",e.font='bold 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',e.textAlign="center",e.textBaseline="alphabetic",e.fillText(f.title,f.x+145,160),e.font='900 38px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',e.fillText(f.val,f.x+145,212)}),[{title:"SETORES",x:42,y:280},{title:"CONTROLE GÁS",x:532,y:280},{title:"REARMAR",x:42,y:470},{title:"CONFIG",x:532,y:470}].forEach(f=>{const p=e.createLinearGradient(0,f.y,0,f.y+160);p.addColorStop(0,"#2563eb"),p.addColorStop(.5,"#1d4ed8"),p.addColorStop(1,"#1e40af"),e.fillStyle=p,t(f.x,f.y,450,160,22),e.fill(),e.strokeStyle="#60a5fa",e.lineWidth=4,e.stroke(),e.fillStyle="rgba(255, 255, 255, 0.12)",t(f.x+4,f.y+4,442,75,18),e.fill(),e.fillStyle="#ffffff",e.font='900 36px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText(f.title,f.x+225,f.y+80)});const d=e.createLinearGradient(0,683,0,768);return d.addColorStop(0,"#0369a1"),d.addColorStop(1,"#0284c7"),e.fillStyle=d,e.fillRect(0,683,1024,85),e.strokeStyle="#38bdf8",e.lineWidth=3,e.beginPath(),e.moveTo(0,683),e.lineTo(1024,683),e.stroke(),e.fillStyle="#ffffff",e.font='900 34px "Courier New", Courier, monospace',e.textAlign="center",e.textBaseline="middle",e.fillText("SISTEMA OPERANTE",512,725),s}function j0(s,e){(s.width!==1024||s.height!==768)&&(s.width=1024,s.height=768);const t=s.getContext("2d");if(!t)return;t.fillStyle="#ba1016",t.fillRect(0,0,1024,768),t.fillStyle="#ffffff",t.font='bold 54px "Courier New", Courier, monospace',t.textAlign="center",t.textBaseline="middle",t.fillText("FOGO DETECTADO",490,75),t.beginPath(),t.arc(950,75,18,0,Math.PI*2),t.fillStyle="#22c55e",t.fill(),t.lineWidth=4,t.strokeStyle="#ffffff",t.stroke(),t.fillStyle="#ffffff",t.font='bold 42px "Courier New", Courier, monospace',t.fillText("FOGO DETECTADO: SUB-1",512,175),t.fillText("EM DISPARO",512,240);const o=`${Math.max(0,Math.round(e))}s`;t.save(),t.shadowColor="rgba(103, 232, 249, 0.75)",t.shadowBlur=24,t.fillStyle="#67e8f9",t.font='900 185px "Courier New", Courier, monospace',t.fillText(o,512,440),t.restore(),t.fillStyle="#ffffff",t.font='bold 38px "Courier New", Courier, monospace',t.fillText("TOQUE NA TELA PARA ABORTAR",512,670)}function _b(s){(s.width!==1024||s.height!==768)&&(s.width=1024,s.height=768);const e=s.getContext("2d");e&&(e.fillStyle="#7f1d1d",e.fillRect(0,0,1024,768),e.fillStyle="#ffffff",e.font='bold 48px "Courier New", Courier, monospace',e.textAlign="center",e.textBaseline="middle",e.fillText("SISTEMA CO2 / SAP",512,110),e.fillStyle="#fef08a",e.font='900 64px "Courier New", Courier, monospace',e.fillText("DESCARGA EFETUADA",512,260),e.fillStyle="#0284c7",e.fillRect(212,420,600,120),e.strokeStyle="#38bdf8",e.lineWidth=4,e.strokeRect(212,420,600,120),e.fillStyle="#ffffff",e.font='bold 44px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',e.fillText("REARMAR SISTEMA",512,480))}function yb(s){(s.width!==1024||s.height!==768)&&(s.width=1024,s.height=768);const e=s.getContext("2d");e&&(e.fillStyle="#06261c",e.fillRect(0,0,1024,768),e.fillStyle="#10b981",e.font='900 56px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText("● INCÊNDIO EXTINTO",512,140),e.fillStyle="#a7f3d0",e.font='bold 36px "Courier New", Courier, monospace',e.fillText("SUPRESSÃO CLASSE K BEM-SUCEDIDA",512,240),e.fillStyle="#064e3b",e.fillRect(100,340,824,110),e.strokeStyle="#34d399",e.lineWidth=4,e.strokeRect(100,340,824,110),e.fillStyle="#6ee7b7",e.font="bold 38px sans-serif",e.fillText("AVCB & NBR 14518 CONFORME",512,395),e.fillStyle="#d4af37",e.font='bold 32px "Courier New", Courier, monospace',e.fillText("COZINHA E VIDAS PRESERVADAS",512,570))}const Sb=()=>{const s=Ue.useRef(null),e=Ue.useRef(null),t=Ue.useRef(null),[r,o]=Ue.useState(0),l=Ue.useRef(0),[d,f]=Ue.useState(!1),p=Ue.useRef(!1),[m,x]=Ue.useState("STANDBY"),v=Ue.useRef("STANDBY");v.current=m;const[S,M]=Ue.useState(10),T=Ue.useRef(10);T.current=S;const[A,y]=Ue.useState({temp:180,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"PRONTIDÃO",countdown:10}),[_,C]=Ue.useState(null),[I,P]=Ue.useState("geral"),U=Ue.useRef(null),L=Ue.useRef(null),O=Ue.useRef(null),j=Ue.useRef(null),b=Ue.useRef(null),R=Ue.useRef(null),z=Ue.useRef(null),$=Ue.useRef(null),Q=Ue.useRef(null),re=Ue.useRef(null),se=Ue.useRef(null),te=Ue.useRef(null),q=Ue.useRef(null),X=Ue.useRef(null),pe=Ue.useRef(null),oe=Ue.useRef(null),F=Ue.useRef(null),ce=Ue.useRef(null),Ne=Ue.useRef(null),qe=Ue.useRef(null),We=Ue.useRef(null),ne=Ue.useRef(new Z(0,2.2,4.4)),fe=Ue.useRef(new Z(0,1.4,0)),ye=Ue.useCallback(()=>{const D=R.current;if(!D)return;const w=v.current,B=T.current;w==="FIRE_ALARM"?j0(D,B):w==="SUPPRESSION"?_b(D):w==="EXTINGUISHED"&&yb(D),b.current&&(b.current.needsUpdate=!0)},[]),[Be,Le]=Ue.useState(!1),gt=Ue.useCallback(()=>{m==="SUPPRESSION"||m==="EXTINGUISHED"||(q.current&&(q.current.rotation.x=.65),p.current=!0,f(!0),x("FIRE_ALARM"),M(60),Le(!0),y({temp:290,gasStatus:"CORTADO",exhaustStatus:"INTERTRAVADO",systemStatus:"ALERTA DE FOGO",countdown:60}))},[m]),Jt=Ue.useCallback(()=>{p.current=!1,f(!1),Le(!1),x("STANDBY"),M(60),y({temp:180,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"PRONTIDÃO",countdown:60}),q.current&&(q.current.rotation.x=0)},[]),_t=()=>{s.current?s.current.scrollIntoView({behavior:"smooth"}):window.scrollTo({top:window.innerHeight,behavior:"smooth"})},Rt=()=>{if(!s.current)return;const D=window.scrollY,w=window.innerHeight*.85;window.scrollTo({top:D+w,behavior:"smooth"})},Lt=D=>{if(!s.current)return;const w=s.current.offsetTop,B=s.current.offsetHeight-window.innerHeight,le=w+B*D;window.scrollTo({top:le,behavior:"smooth"})},pt=()=>{if(!s.current)return;const D=s.current.offsetTop+s.current.offsetHeight;window.scrollTo({top:D+10,behavior:"smooth"})},Ot=Ue.useRef({startY:0,lastY:0,startTime:0,lastTime:0,velocity:0,isDragging:!1,hasMoved:!1,animId:0}),V=D=>{if(D.touches.length!==1)return;const w=D.touches[0],B=Ot.current;cancelAnimationFrame(B.animId),B.startY=w.clientY,B.lastY=w.clientY,B.startTime=performance.now(),B.lastTime=performance.now(),B.velocity=0,B.isDragging=!0,B.hasMoved=!1},Yt=D=>{const w=Ot.current;if(!w.isDragging||D.touches.length!==1)return;const le=D.touches[0].clientY,he=performance.now(),K=w.lastY-le,Fe=Math.max(1,he-w.lastTime);Math.abs(le-w.startY)>6&&(w.hasMoved=!0),w.velocity=K/Fe,w.lastY=le,w.lastTime=he,window.scrollBy(0,K)},St=D=>{var he,K,Fe,be;const w=Ot.current;if(!w.isDragging)return;if(w.isDragging=!1,!w.hasMoved){const Oe=D.changedTouches[0];if(Oe&&L.current&&e.current){const $e=e.current.getBoundingClientRect(),xe=new ft((Oe.clientX-$e.left)/$e.width*2-1,-((Oe.clientY-$e.top)/$e.height)*2+1),Ee=new kf;Ee.setFromCamera(xe,L.current);const ke=[X.current,pe.current,oe.current].filter(Boolean),Ge=Ee.intersectObjects(ke,!0);if(Ge.length>0){let Se=Ge[0].object;for(;Se&&!((he=Se.userData)!=null&&he.interactiveType)&&Se.parent;)Se=Se.parent;((K=Se==null?void 0:Se.userData)==null?void 0:K.interactiveType)==="botoeira"?gt():((Fe=Se==null?void 0:Se.userData)==null?void 0:Fe.interactiveType)==="central"?je("central"):((be=Se==null?void 0:Se.userData)==null?void 0:be.interactiveType)==="fritadeira"&&je("fritadeira")}}return}const B=1.2;let le=Math.max(-B,Math.min(B,w.velocity*10));if(Math.abs(le)>.15){const $e=()=>{Math.abs(le)<.05||(window.scrollBy(0,le),le*=.9,w.animId=requestAnimationFrame($e))};w.animId=requestAnimationFrame($e)}};Ue.useEffect(()=>{if(m!=="FIRE_ALARM")return;const D=setInterval(()=>{M(w=>{if(w<=1)return clearInterval(D),Le(!1),x("SUPPRESSION"),y(le=>({...le,temp:140,systemStatus:"COMBATE ATIVO",countdown:0})),setTimeout(()=>{x("EXTINGUISHED"),y(le=>({...le,temp:38,systemStatus:"INCÊNDIO EXTINTO",countdown:0}))},3500),0;const B=w-1;return y(le=>({...le,countdown:B})),B})},1e3);return()=>clearInterval(D)},[m]);const xt=Ue.useCallback(()=>{p.current=!1,f(!1),Le(!1),x("STANDBY"),M(60),y({temp:180,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"PRONTIDÃO",countdown:60}),q.current&&(q.current.rotation.x=0),F.current&&(F.current.scale.set(.001,.001,.001),F.current.visible=!1)},[]);Ue.useEffect(()=>{ye()},[m,S,ye]),Ue.useEffect(()=>{const D=()=>{if(!s.current)return;const w=s.current.getBoundingClientRect(),B=s.current.offsetHeight-window.innerHeight;if(B<=0)return;const le=-w.top,he=Math.min(1,Math.max(0,le/B));if(l.current=he,o(he),!(p.current&&Be))if(p.current&&he<=.05&&(p.current=!1,f(!1),Le(!1)),he<.2)x("STANDBY"),y({temp:180,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"PRONTIDÃO",countdown:60});else if(he>=.2&&he<.45){x("HEATING");const K=Math.round(180+(he-.2)/.25*160);y({temp:K,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"AQUECIMENTO",countdown:60})}else if(he>=.45&&he<.7){x("FIRE_ALARM");const K=Math.max(1,Math.round(60-(he-.45)/.25*59));M(K),y({temp:380,gasStatus:"CORTADO",exhaustStatus:"INTERTRAVADO",systemStatus:"ALERTA DE FOGO",countdown:K})}else he>=.7&&he<.88?(x("SUPPRESSION"),y({temp:135,gasStatus:"CORTADO",exhaustStatus:"INTERTRAVADO",systemStatus:"COMBATE ATIVO",countdown:0})):(x("EXTINGUISHED"),y({temp:38,gasStatus:"CORTADO",exhaustStatus:"INTERTRAVADO",systemStatus:"INCÊNDIO EXTINTO",countdown:0}))};return window.addEventListener("scroll",D,{passive:!0}),D(),()=>window.removeEventListener("scroll",D)},[Be]);const je=D=>{P(D);const w=window.innerWidth<768;D==="geral"?w?(ne.current.set(.5,2.1,7),fe.current.set(.5,1.3,0)):(ne.current.set(0,2.2,4.4),fe.current.set(0,1.4,0)):D==="central"?w?(ne.current.set(1.9,1.85,1.6),fe.current.set(2.1,1.8,.15)):(ne.current.set(1.9,1.85,1.5),fe.current.set(2.1,1.8,.15)):D==="fritadeira"?w?(ne.current.set(-.2,1.4,2.6),fe.current.set(-.2,1,0)):(ne.current.set(-.2,1.4,2.2),fe.current.set(-.2,1,0)):D==="botoeira"&&(w?(ne.current.set(1.4,1.45,1.6),fe.current.set(1.45,1.4,.05)):(ne.current.set(1.4,1.45,1.3),fe.current.set(1.45,1.4,.05)))};return Ue.useEffect(()=>{if(!t.current||!e.current)return;const D=e.current.clientWidth||window.innerWidth,w=e.current.clientHeight||window.innerHeight,B=new Mg;U.current=B,B.background=new Et(658448),B.fog=new ih(658448,.035);const le=D<768,he=new Jn(le?68:45,D/w,.1,100);le?(he.position.set(.5,2.1,7),ne.current.set(.5,2.1,7),fe.current.set(.5,1.3,0)):(he.position.set(0,2.2,4.4),ne.current.set(0,2.2,4.4),fe.current.set(0,1.4,0)),L.current=he;const K=new Pg({canvas:t.current,antialias:!0,powerPreference:"high-performance"});K.setSize(D,w),K.setPixelRatio(Math.min(window.devicePixelRatio,2)),K.shadowMap.enabled=!0,K.shadowMap.type=Hf,K.toneMapping=Cc,K.toneMappingExposure=1.1,K.domElement.style.touchAction="pan-y",O.current=K;let Fe=null;le?j.current=null:(Fe=new Lg(he,K.domElement),Fe.enableDamping=!0,Fe.dampingFactor=.05,Fe.enableZoom=!1,Fe.enablePan=!1,Fe.maxPolarAngle=Math.PI/2+.05,Fe.target.set(0,1.4,0),j.current=Fe);const be=new Eg(16774890,.75);B.add(be);const Oe=new Ff(16777215,1.3);Oe.position.set(4,6,4),Oe.castShadow=!0,Oe.shadow.mapSize.width=1024,Oe.shadow.mapSize.height=1024,B.add(Oe);const $e=new u0(16766880,2.8,6,Math.PI/3,.3);$e.position.set(0,2.7,0),$e.target.position.set(0,.9,0),B.add($e),B.add($e.target);const xe=new d0(16733440,0,5);xe.position.set(-.35,1.2,.1),B.add(xe),te.current=xe;const Ee=new d0(16711680,0,8);Ee.position.set(2.1,2.25,.2),B.add(Ee),re.current=Ee;const ke=new yt({color:13421772,metalness:.9,roughness:.22}),Ge=new yt({color:1579551,roughness:.6,metalness:.1}),Se=new yt({color:987413,roughness:.8,metalness:.2}),ut=new Re(new Yn(14,14),Se);ut.rotation.x=-Math.PI/2,ut.receiveShadow=!0,B.add(ut);const H=new Re(new Yn(14,8),Ge);H.position.set(0,4,-1.2),H.receiveShadow=!0,B.add(H);const Pe=new Re(new Yn(14,8),Ge);Pe.rotation.y=Math.PI/2,Pe.position.set(-4.5,4,0),B.add(Pe);const ve=new _n;B.add(ve);const Ie=new Re(new Pt(2.6,.9,1),ke);Ie.position.set(0,.45,0),Ie.castShadow=!0,Ie.receiveShadow=!0,ve.add(Ie);const ge=new _n;ge.position.set(-.55,.9,0),ve.add(ge),oe.current=ge;const me=new Re(new Pt(.85,.12,.75),ke);me.position.set(0,.06,0),ge.add(me);const Ce=new Re(new Pt(.72,.02,.62),new yt({color:9584654,roughness:.1,metalness:.3}));Ce.position.set(0,.11,0),ge.add(Ce);const rt=new yt({color:1118481,roughness:.5}),dt=new Re(new rn(.012,.012,.28),rt);dt.position.set(-.16,.22,.34),dt.rotation.x=Math.PI/3,ge.add(dt);const tt=new Re(new rn(.012,.012,.28),rt);tt.position.set(.16,.22,.34),tt.rotation.x=Math.PI/3,ge.add(tt);const Vt=new _n;Vt.position.set(.65,.9,0),ve.add(Vt);const Ht=new Re(new Pt(.95,.06,.75),new yt({color:3355448,roughness:.4,metalness:.7}));Ht.position.set(0,.03,0),Vt.add(Ht);const hn=new _n;hn.position.set(0,2.3,0),B.add(hn);const Ln=new Re(new Pt(2.8,.6,1.2),ke);Ln.castShadow=!0,hn.add(Ln);const Pi=new yt({color:10066329,metalness:.9,roughness:.3});for(let Ct=-1;Ct<=1;Ct+=.5){const lt=new Re(new Pt(.42,.35,.04),Pi);lt.position.set(Ct,-.15,0),lt.rotation.x=-Math.PI/6,hn.add(lt)}const Yi=new Re(new rn(.28,.28,1.5,32),ke);Yi.position.set(0,1,0),hn.add(Yi);const $i=new Re(new Pt(.64,.18,.64),new yt({color:4674921,metalness:.85,roughness:.25}));$i.position.set(0,.55,0),hn.add($i);const Ki=new Re(new Pt(.14,.14,.14),new yt({color:14251782,roughness:.4}));Ki.position.set(.36,.55,0),hn.add(Ki);const ui=new yt({color:11580860,metalness:.88,roughness:.3}),Vr=new Re(new Yn(3.6,1.4),ui);Vr.position.set(0,1.6,-.6),B.add(Vr);const Gr=new Re(new rn(.008,.008,2.4,16),ke);Gr.rotation.z=Math.PI/2,Gr.position.set(0,1.95,-.58),B.add(Gr);const $s=new yt({color:11817737,metalness:.8,roughness:.3}),ei=new yt({color:13938487,metalness:.9,roughness:.2}),pr=new Re(new rn(.015,.015,2.4),$s);pr.rotation.z=Math.PI/2,pr.position.set(0,-.28,-.2),hn.add(pr),[[-.7,-.32,0],[-.35,-.32,0],[.45,-.32,0],[.85,-.32,0]].forEach(([Ct,lt,Kt])=>{const jn=new Re(new ah(.025,.06,16),ei);jn.position.set(Ct,lt,Kt),jn.rotation.x=Math.PI,hn.add(jn)});const an=new _n;an.position.set(2.1,1.8,.15),an.rotation.y=-.28,B.add(an),pe.current=an,an.userData={interactiveType:"central",name:"Central Outfire VTS"};const _s=new bg().load("/assets/tampa-central-moderna.png");_s.colorSpace=On;const Zs=Ig(),mr=new Of(Zs);mr.colorSpace=On,$.current=mr;const gr=document.createElement("canvas");gr.width=1024,gr.height=768,j0(gr,T.current);const ys=new Of(gr);ys.colorSpace=On,R.current=gr,b.current=ys,Q.current=ys;const Wt=new yt({color:1316378,roughness:.45,metalness:.8}),N=new yt({map:_s,roughness:.35,metalness:.25}),Y=[Wt,Wt,Wt,Wt,N,Wt],ue=new Re(new Pt(.72,.52,.22),Y);ue.castShadow=!0,an.add(ue);const ae=new yt({map:mr,roughness:.15,metalness:.05,emissive:16777215,emissiveMap:mr,emissiveIntensity:.95,depthTest:!0,depthWrite:!0});z.current=ae;const J=new Re(new Yn(.2,.15),ae);J.position.set(0,0,.116),J.renderOrder=10,J.userData={interactiveType:"central"},an.add(J);const De=new yt({color:1579552,metalness:.9,roughness:.35}),Ve=new _n,Ae=new Re(new Pt(.222,.012,.006),De);Ae.position.set(0,.081,.113);const Ye=new Re(new Pt(.222,.012,.006),De);Ye.position.set(0,-.081,.113);const He=new Re(new Pt(.012,.15,.006),De);He.position.set(-.106,0,.113);const st=new Re(new Pt(.012,.15,.006),De);st.position.set(.106,0,.113),Ve.add(Ae,Ye,He,st),an.add(Ve);const it=new yt({color:11580344,metalness:.95,roughness:.2}),Mt=new rn(.004,.004,.005,8);[[-.098,.072],[.098,.072],[-.098,-.072],[.098,-.072]].forEach(([Ct,lt])=>{const Kt=new Re(Mt,it);Kt.rotation.x=Math.PI/2,Kt.position.set(Ct,lt,.1155),an.add(Kt)});const Nt=new u0(16774890,2.2,5,Math.PI/3,.3);Nt.position.set(2.4,2.4,1.6),Nt.target=an,B.add(Nt);const Xt=new Re(new rn(.016,.016,1.6,16),ke);Xt.position.set(0,1.05,0),an.add(Xt);const Gt=new Re(new rn(.045,.045,.03,16),new yt({color:1118481,metalness:.8}));Gt.position.set(0,.275,0),an.add(Gt);const It=new yt({color:16711680,transparent:!0,opacity:.85,roughness:.1}),nt=new Re(new rn(.038,.042,.065,16),It);nt.position.set(0,.32,0),an.add(nt),se.current=nt;const Ut=new Re(new Pt(.68,.02,.2),Wt);Ut.position.set(0,-.32,0),an.add(Ut);const Tt=new yt({color:592396,roughness:.5}),yn=new Re(new Pt(.24,.15,.14),Tt);yn.position.set(-.16,-.23,0),an.add(yn);const di=new Re(new Pt(.24,.15,.14),Tt);di.position.set(.16,-.23,0),an.add(di);const $t=new _n;$t.position.set(1.45,1.4,.08),B.add($t),X.current=$t,$t.userData={interactiveType:"botoeira",name:"Acionador Manual de Emergência"};const Zi=new Re(new Pt(.18,.24,.08),new yt({color:13373713,roughness:.3,metalness:.3}));Zi.castShadow=!0,$t.add(Zi);const Ft=new Re(new Pt(.14,.18,.015),new yt({color:16777215,transparent:!0,opacity:.45,roughness:.1}));Ft.position.set(0,0,.042),$t.add(Ft);const ht=new Re(new Pt(.1,.06,.025),new yt({color:16436245,roughness:.3}));ht.position.set(0,-.01,.048),$t.add(ht),q.current=ht;const qt=new _n;qt.position.set(-1.85,1.1,-.3),B.add(qt),qt.userData={interactiveType:"saponificante",name:"Cilindro Saponificante Classe K (Inox Cromado)"};const un=new yt({color:15857145,metalness:.96,roughness:.12}),pn=new Re(new rn(.13,.13,.82,32),un);pn.castShadow=!0,qt.add(pn);const xr=new Re(new Ir(.13,32,16,0,Math.PI*2,0,Math.PI/2),un);xr.position.set(0,.41,0),qt.add(xr);const fi=new Re(new Ir(.13,32,16,0,Math.PI*2,Math.PI/2,Math.PI/2),un);fi.position.set(0,-.41,0),qt.add(fi);const $a=new yt({color:3355443,metalness:.8}),Qs=new Re(new Pt(.32,.04,.06),$a);Qs.position.set(0,.22,-.09),qt.add(Qs);const Ss=new Re(new Pt(.32,.04,.06),$a);Ss.position.set(0,-.22,-.09),qt.add(Ss);const Si=new Re(new rn(.032,.032,.02,16),new yt({color:13938487,metalness:.85}));Si.rotation.x=Math.PI/2,Si.position.set(0,.55,.08),qt.add(Si);const Di=new Re(new sh(.028,16),new Xi({color:2278750}));Di.position.set(0,.55,.091),qt.add(Di);const Li=new Re(new rn(.022,.022,.12,16),new yt({color:13938487,metalness:.9}));Li.position.set(0,.52,0),qt.add(Li);const Wr=new Re(new rn(.132,.132,.12,32),new yt({color:13938487,metalness:.85,roughness:.2}));Wr.position.set(0,.05,0),qt.add(Wr);const Bn=new _n;Bn.position.set(.85,2.7,-.35),B.add(Bn),Bn.userData={interactiveType:"co2",name:"Cilindro de CO2 (Injeção no Duto)"};const Mi=new yt({color:14427686,metalness:.65,roughness:.28}),Yo=new Re(new rn(.09,.09,.95,32),Mi);Yo.castShadow=!0,Bn.add(Yo);const Ka=new Re(new Ir(.09,32,16,0,Math.PI*2,0,Math.PI/2),Mi);Ka.position.set(0,.475,0),Bn.add(Ka);const Xr=new Re(new Ir(.09,32,16,0,Math.PI*2,Math.PI/2,Math.PI/2),Mi);Xr.position.set(0,-.475,0),Bn.add(Xr);const $o=new Re(new rn(.025,.025,.14,16),new yt({color:13938487,metalness:.85}));$o.position.set(0,.6,0),Bn.add($o);const Js=new Re(new rn(.012,.012,.85,16),ke);Js.rotation.z=Math.PI/2,Js.position.set(-.42,.66,.35),Bn.add(Js);const Qi=new Re(new Pt(.74,.08,.64),new yt({color:16317180,roughness:.9,metalness:.05}));Qi.position.set(-.55,1.05,0),Qi.scale.set(.001,.001,.001),Qi.visible=!1,B.add(Qi),F.current=Qi;const Ji=new _n;B.add(Ji),ce.current=Ji;const Dc=70,Ms=new lh(.08,1),vr=[];for(let Ct=0;Ct<Dc;Ct++){const lt=new Re(Ms,new Xi({color:16729344,transparent:!0,opacity:.85}));lt.position.set(-.55+(Math.random()-.5)*.5,1.05+Math.random()*.4,(Math.random()-.5)*.4),lt.userData={baseY:1.05,speedY:.8+Math.random()*1.5,scale:.4+Math.random()*.8},Ji.add(lt),vr.push(lt)}const hi=new _n;B.add(hi),Ne.current=hi;const ea=50,Lc=new Ir(.12,8,8),Ko=[];for(let Ct=0;Ct<ea;Ct++){const lt=new Re(Lc,new Xi({color:2040877,transparent:!0,opacity:.4}));lt.position.set(-.55+(Math.random()-.5)*.6,1.3+Math.random()*1,(Math.random()-.5)*.4),lt.userData={speedY:.6+Math.random()*1,maxH:2.2},hi.add(lt),Ko.push(lt)}const ws=new _n;B.add(ws),qe.current=ws;const ta=80,Za=new Ir(.025,8,8),Qa=[];for(let Ct=0;Ct<ta;Ct++){const lt=new Re(Za,new Xi({color:16777215,transparent:!0,opacity:.9}));lt.position.set(-.55,1.9,0),lt.userData={origY:1.98,speed:3.5+Math.random()*2,spread:(Math.random()-.5)*.4},ws.add(lt),Qa.push(lt)}const wi=new _n;B.add(wi),We.current=wi;const Ja=35,na=new Ir(.16,8,8),eo=[];for(let Ct=0;Ct<Ja;Ct++){const lt=new Re(na,new Xi({color:14870768,transparent:!0,opacity:.4}));lt.position.set((Math.random()-.5)*.4,2.7+Math.random()*.5,(Math.random()-.5)*.3),wi.add(lt),eo.push(lt)}const _r=new kf,Ii=new ft,to=Ct=>{var jn,$n;const lt=K.domElement.getBoundingClientRect();Ii.x=(Ct.clientX-lt.left)/lt.width*2-1,Ii.y=-((Ct.clientY-lt.top)/lt.height)*2+1,_r.setFromCamera(Ii,he);const Kt=_r.intersectObjects([$t,an,ge,qt,Bn],!0);if(Kt.length>0){let et=Kt[0].object;for(;et&&!((jn=et.userData)!=null&&jn.interactiveType)&&et.parent;)et=et.parent;if(et&&(($n=et.userData)!=null&&$n.interactiveType)){K.domElement.style.cursor="pointer",C(et.userData.name);return}}K.domElement.style.cursor="default",C(null)},zn=Ct=>{var jn,$n,et,Ui;const lt=K.domElement.getBoundingClientRect();Ii.x=(Ct.clientX-lt.left)/lt.width*2-1,Ii.y=-((Ct.clientY-lt.top)/lt.height)*2+1,_r.setFromCamera(Ii,he);const Kt=_r.intersectObjects([$t,an,ge,qt,Bn],!0);if(Kt.length>0){let Sn=Kt[0].object;for(;Sn&&!((jn=Sn.userData)!=null&&jn.interactiveType)&&Sn.parent;)Sn=Sn.parent;(($n=Sn==null?void 0:Sn.userData)==null?void 0:$n.interactiveType)==="botoeira"?gt():((et=Sn==null?void 0:Sn.userData)==null?void 0:et.interactiveType)==="central"?je("central"):((Ui=Sn==null?void 0:Sn.userData)==null?void 0:Ui.interactiveType)==="fritadeira"&&je("fritadeira")}};K.domElement.addEventListener("mousemove",to),K.domElement.addEventListener("click",zn);const yr=()=>{if(!e.current||!O.current||!L.current)return;const Ct=e.current.clientWidth,lt=e.current.clientHeight,Kt=Ct<768;L.current.aspect=Ct/lt,L.current.fov=Kt?68:45,L.current.updateProjectionMatrix(),O.current.setSize(Ct,lt)};window.addEventListener("resize",yr);let ia;const qr=new c1,Zo=()=>{ia=requestAnimationFrame(Zo);const Ct=qr.getDelta(),lt=qr.getElapsedTime();he.position.lerp(ne.current,.05),j.current?(j.current.target.lerp(fe.current,.05),j.current.update()):he.lookAt(fe.current);const Kt=v.current,jn=l.current;if(Kt==="HEATING"||Kt==="FIRE_ALARM"){Ji.visible=!0,hi.visible=!0,qe.current.visible=!1,We.current.visible=!1;const $n=Kt==="FIRE_ALARM"?1:Math.max(.2,(jn-.18)/.24);if(te.current&&(te.current.intensity=(2.5+Math.sin(lt*20)*1.5)*$n,te.current.color.setHex(Math.random()>.3?16729344:16755200)),vr.forEach((et,Ui)=>{et.visible=!0,et.position.y+=et.userData.speedY*Ct,et.position.x+=Math.sin(lt*10+Ui)*.006;const Sn=(et.position.y-et.userData.baseY)/1;et.scale.setScalar(Math.max(.01,(1-Sn)*et.userData.scale*$n)),et.material.opacity=1-Sn,et.position.y>et.userData.baseY+.9&&(et.position.y=et.userData.baseY,et.position.x=-.55+(Math.random()-.5)*.5,et.position.z=(Math.random()-.5)*.4)}),Ko.forEach(et=>{et.visible=!0,et.position.y+=et.userData.speedY*Ct,et.scale.setScalar($n),et.position.y>et.userData.maxH&&(et.position.y=1.3,et.position.x=-.55+(Math.random()-.5)*.4)}),Kt==="FIRE_ALARM"){const et=Math.sin(lt*24)>0;re.current&&se.current&&(re.current.intensity=et?5:0,se.current.material.emissive=et?new Et(16711680):new Et(0))}}else if(Kt==="SUPPRESSION"){Ji.visible=!0,qe.current.visible=!0,We.current.visible=!0,vr.forEach(et=>{et.scale.multiplyScalar(.92),et.scale.x<.05&&(et.visible=!1)}),te.current&&(te.current.intensity=Math.max(0,te.current.intensity-Ct*4)),Qa.forEach((et,Ui)=>{et.visible=!0,et.position.y-=et.userData.speed*Ct,et.position.x+=Math.sin(lt*15+Ui)*.01,et.position.y<1.05&&(et.position.y=et.userData.origY,et.position.x=-.55+et.userData.spread)}),F.current&&(F.current.visible=!0,F.current.scale.lerp(new Z(1,1,1),.08)),eo.forEach((et,Ui)=>{et.visible=!0,et.position.y+=Math.sin(lt*3+Ui)*.004,et.position.x+=Math.cos(lt*2+Ui)*.004});const $n=Math.sin(lt*30)>0;re.current&&se.current&&(re.current.intensity=$n?4:.2,se.current.material.emissive=$n?new Et(16711680):new Et(3342336))}else Kt==="EXTINGUISHED"?(Ji.visible=!1,hi.visible=!1,qe.current.visible=!1,We.current.visible=!1,te.current&&(te.current.intensity=0),F.current&&(F.current.visible=!0,F.current.scale.set(1,1,1)),re.current&&se.current&&(re.current.intensity=0,se.current.material.emissive=new Et(0))):(Ji.visible=!1,hi.visible=!1,qe.current.visible=!1,We.current.visible=!1,te.current&&(te.current.intensity=0),F.current&&(F.current.visible=!1),re.current&&se.current&&(re.current.intensity=0,se.current.material.emissive=new Et(0)));z.current&&(Kt==="FIRE_ALARM"||Kt==="SUPPRESSION"||Kt==="EXTINGUISHED"?b.current&&z.current.map!==b.current&&(z.current.map=b.current,z.current.emissiveMap=b.current,z.current.emissiveIntensity=1,z.current.needsUpdate=!0):$.current&&z.current.map!==$.current&&(z.current.map=$.current,z.current.emissiveMap=$.current,z.current.emissiveIntensity=.95,z.current.needsUpdate=!0)),K.render(B,he)};return Zo(),()=>{cancelAnimationFrame(ia),cancelAnimationFrame(Ot.current.animId),window.removeEventListener("resize",yr),K.domElement.removeEventListener("mousemove",to),K.domElement.removeEventListener("click",zn),j.current&&j.current.dispose(),K.dispose()}},[gt,ye]),u.jsxs(u.Fragment,{children:[u.jsxs("section",{id:"splash-hero",className:"relative w-full h-[100dvh] bg-[#05070a] flex flex-col items-center justify-center select-none overflow-hidden z-20",children:[u.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d4af37]/15 via-[#0a0c10]/60 to-[#05070a] pointer-events-none"}),u.jsx("div",{className:"relative z-10 flex flex-col items-center justify-center px-4 text-center",children:u.jsx("img",{src:"/assets/logo-outfire-gold.png",alt:"Outfire Sistemas Contra Incêndio",className:"w-80 sm:w-96 md:w-[480px] max-w-[88vw] object-contain drop-shadow-[0_0_45px_rgba(212,175,55,0.4)] select-none transition-transform duration-700 hover:scale-105"})}),u.jsx("button",{onClick:_t,"aria-label":"Descer para a simulação da cozinha",className:"absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer focus:outline-none",children:u.jsx("div",{className:"w-12 h-12 rounded-full border border-[#d4af37]/50 bg-black/70 backdrop-blur-md flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.35)] group-hover:border-[#d4af37] group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] transition-all",children:u.jsx(od,{className:"w-6 h-6 text-[#d4af37] animate-bounce"})})})]}),u.jsx("section",{id:"hero-3d",ref:s,className:"relative w-full h-[450vh] bg-[#07080a] overflow-x-clip",style:{touchAction:"pan-y"},children:u.jsxs("div",{ref:e,className:"sticky top-0 w-full h-[100dvh] overflow-x-clip flex flex-col justify-between select-none",style:{touchAction:"pan-y"},children:[u.jsx("canvas",{ref:t,className:"absolute inset-0 w-full h-full block z-0 outline-none pointer-events-none md:pointer-events-auto",style:{touchAction:"pan-y"}}),u.jsx("div",{className:"absolute inset-0 w-full h-full z-10 block md:hidden cursor-grab active:cursor-grabbing select-none",style:{touchAction:"none"},onTouchStart:V,onTouchMove:Yt,onTouchEnd:St,onTouchCancel:St}),u.jsxs("div",{className:"relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pointer-events-none",children:[u.jsxs("div",{className:"flex flex-col gap-1.5 pointer-events-auto",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-[#d4af37]/40 shadow-glow-gold text-xs font-bold text-[#f3e5ab]",children:[u.jsx(q0,{className:"w-3.5 h-3.5 text-[#d4af37] animate-pulse"}),u.jsx("span",{children:"Simulador 3D Autônomo Outfire"}),u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#d4af37]"}),u.jsx("span",{className:"text-[11px] font-mono text-gray-300",children:"NBR 14518"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsxs("span",{className:`px-3 py-1 rounded-lg text-xs font-black tracking-wider uppercase flex items-center gap-1.5 backdrop-blur-md border ${m==="STANDBY"?"bg-emerald-950/80 border-emerald-500/40 text-emerald-300":m==="HEATING"?"bg-amber-950/80 border-amber-500/50 text-amber-300":m==="FIRE_ALARM"?"bg-red-950/90 border-red-500 text-red-200 animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.5)]":m==="SUPPRESSION"?"bg-cyan-950/90 border-cyan-500 text-cyan-200 shadow-[0_0_20px_rgba(6,182,212,0.5)]":"bg-emerald-900/90 border-emerald-400 text-emerald-200"}`,children:[m==="STANDBY"&&u.jsx(Sc,{className:"w-4 h-4 text-emerald-400"}),m==="HEATING"&&u.jsx(ko,{className:"w-4 h-4 text-amber-400 animate-pulse"}),m==="FIRE_ALARM"&&u.jsx(ko,{className:"w-4 h-4 text-red-400 animate-bounce"}),m==="SUPPRESSION"&&u.jsx(Ev,{className:"w-4 h-4 text-cyan-300 animate-spin"}),m==="EXTINGUISHED"&&u.jsx(Tc,{className:"w-4 h-4 text-emerald-400"}),A.systemStatus]}),m==="FIRE_ALARM"&&u.jsxs("span",{className:"px-2.5 py-1 rounded-lg bg-red-600 text-white font-mono font-black text-xs animate-pulse",children:["DISPARO EM ",S,"s"]})]})]}),u.jsxs("div",{className:"flex items-center gap-2 pointer-events-auto bg-black/80 backdrop-blur-md p-2 rounded-2xl border border-white/10 shadow-2xl",children:[u.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2",children:[u.jsx(ko,{className:`w-3.5 h-3.5 ${A.temp>200?"text-red-400 animate-pulse":"text-amber-400"}`}),u.jsxs("div",{className:"flex flex-col",children:[u.jsx("span",{className:"text-[9px] text-gray-400 font-mono",children:"TEMP. ÓLEO"}),u.jsxs("span",{className:"text-xs font-bold text-white font-mono",children:[A.temp,"°C"]})]})]}),u.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2",children:[u.jsx(jv,{className:`w-3.5 h-3.5 ${A.gasStatus==="CORTADO"?"text-red-400":"text-emerald-400"}`}),u.jsxs("div",{className:"flex flex-col",children:[u.jsx("span",{className:"text-[9px] text-gray-400 font-mono",children:"VÁLVULA GÁS"}),u.jsx("span",{className:`text-xs font-bold font-mono ${A.gasStatus==="CORTADO"?"text-red-400":"text-emerald-400"}`,children:A.gasStatus})]})]}),u.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2",children:[u.jsx(K0,{className:`w-3.5 h-3.5 ${A.exhaustStatus==="INTERTRAVADO"?"text-red-400":"text-emerald-400"}`}),u.jsxs("div",{className:"flex flex-col",children:[u.jsx("span",{className:"text-[9px] text-gray-400 font-mono",children:"EXAUSTÃO"}),u.jsx("span",{className:`text-xs font-bold font-mono ${A.exhaustStatus==="INTERTRAVADO"?"text-red-400":"text-emerald-400"}`,children:A.exhaustStatus})]})]})]})]}),_&&u.jsxs("div",{className:"absolute top-28 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-4 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-[#d4af37]/60 text-xs text-[#f3e5ab] font-bold shadow-glow-gold flex items-center gap-2 animate-pulse",children:[u.jsx(X0,{className:"w-3.5 h-3.5 text-[#d4af37]"}),u.jsxs("span",{children:[_," — Clique para interagir"]})]}),Be&&u.jsxs("div",{className:"absolute top-44 left-1/2 -translate-x-1/2 z-20 pointer-events-auto px-5 py-3 rounded-2xl bg-red-950/95 backdrop-blur-md border border-red-500 text-white shadow-[0_0_40px_rgba(239,68,68,0.7)] flex flex-col items-center gap-2 text-center max-w-md animate-pulse",children:[u.jsxs("div",{className:"flex items-center gap-2 text-red-300 font-bold text-xs uppercase tracking-wider",children:[u.jsx(Um,{className:"w-4 h-4 text-red-400"}),u.jsx("span",{children:"Acionador Manual Disparado • Contagem de Segurança"})]}),u.jsxs("div",{className:"font-mono text-2xl font-black text-[#67e8f9]",children:["Supressão em ",S,"s"]}),u.jsxs("p",{className:"text-[11px] text-gray-200",children:["O saponificante ",u.jsx("strong",{children:"NÃO"})," é descarregado de imediato. Aguarda zerar a contagem para evacuação da cozinha ou cancelamento."]}),u.jsxs("button",{onClick:Jt,className:"mt-1 px-4 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 border border-white/30",children:[u.jsx(yc,{className:"w-3.5 h-3.5 text-white"}),u.jsx("span",{children:"Toque aqui para Abortar Disparo"})]})]}),u.jsxs("div",{className:"relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-5 flex flex-col items-center gap-3",children:[u.jsxs("div",{className:"flex items-center gap-3 bg-black/85 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#d4af37]/40 shadow-[0_10px_35px_rgba(0,0,0,0.9)] max-w-full overflow-hidden",children:[u.jsx("button",{onClick:Rt,"aria-label":"Avançar simulação para baixo",className:"w-10 h-10 rounded-full bg-gradient-to-b from-[#d4af37]/25 to-black/80 border border-[#d4af37]/60 flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-[0_0_15px_rgba(212,175,55,0.4)] cursor-pointer shrink-0",children:u.jsx(od,{className:`w-5 h-5 text-[#d4af37] ${m!=="STANDBY"?"animate-bounce":"animate-pulse"}`})}),u.jsxs("div",{className:"flex items-center gap-2 truncate",children:[m==="STANDBY"&&u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0"}),u.jsxs("span",{className:"text-xs sm:text-sm font-bold text-gray-200",children:["Cozinha Industrial em Standby • ",u.jsx("span",{className:"text-[#d4af37]",children:"Role para descer"})]})]}),m==="HEATING"&&u.jsxs("div",{className:"flex items-center gap-2 animate-pulse",children:[u.jsx("span",{className:"px-2.5 py-0.5 rounded-md bg-amber-500/20 border border-amber-500/60 text-amber-300 font-black text-xs shrink-0",children:"FASE 1"}),u.jsxs("span",{className:"text-xs sm:text-sm font-bold text-amber-200 truncate",children:["Princípio de Incêndio (Óleo a ",A.temp,"°C) — Continue descendo"]})]}),m==="FIRE_ALARM"&&u.jsxs("div",{className:"flex items-center gap-2 animate-pulse",children:[u.jsx("span",{className:"px-2.5 py-0.5 rounded-md bg-red-600/30 border border-red-500 text-red-200 font-black text-xs shrink-0 shadow-[0_0_15px_rgba(239,68,68,0.5)]",children:"FASE 2"}),u.jsxs("span",{className:"text-xs sm:text-sm font-bold text-red-200 truncate",children:["Alarme Térmico 145°C Disparado • Contagem: ",S,"s"]})]}),m==="SUPPRESSION"&&u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"px-2.5 py-0.5 rounded-md bg-cyan-600/30 border border-cyan-400 text-cyan-200 font-black text-xs shrink-0 shadow-[0_0_15px_rgba(34,211,238,0.5)]",children:"FASE 3"}),u.jsx("span",{className:"text-xs sm:text-sm font-bold text-cyan-200 truncate",children:"Supressão Ativa: Saponificante Classe K + CO2 no duto"})]}),m==="EXTINGUISHED"&&u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"px-2.5 py-0.5 rounded-md bg-emerald-600/30 border border-emerald-400 text-emerald-200 font-black text-xs shrink-0",children:"FASE 4"}),u.jsx("span",{className:"text-xs sm:text-sm font-bold text-emerald-200 truncate",children:"Cozinha Preservada • NBR 14518 Cumprida — Continue descendo"})]})]})]}),u.jsxs("div",{className:"w-full flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs",children:[u.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[u.jsxs("button",{onClick:gt,disabled:m==="SUPPRESSION"||m==="EXTINGUISHED"||Be,className:`py-2 px-4 rounded-xl font-black text-xs flex items-center gap-2 transition-all duration-300 border ${m==="FIRE_ALARM"?"bg-gradient-to-r from-red-600 via-rose-500 to-red-700 text-white border-white animate-pulse shadow-[0_0_25px_rgba(225,29,72,0.8)] scale-105":"bg-[#181212]/90 hover:bg-red-950/80 text-red-300 border-red-500/40 shadow-lg"}`,children:[u.jsx(Um,{className:"w-3.5 h-3.5 text-red-400"}),u.jsx("span",{children:"🚨 Disparar Acionador Manual"})]}),(Be||m==="FIRE_ALARM")&&u.jsxs("button",{onClick:Jt,className:"py-2 px-3.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 font-bold text-xs flex items-center gap-1.5 border border-amber-500/40 transition-all active:scale-95",children:[u.jsx(yc,{className:"w-3.5 h-3.5 text-amber-400"}),u.jsx("span",{children:"Abortar Disparo"})]}),(m==="EXTINGUISHED"||m==="FIRE_ALARM"||m==="SUPPRESSION")&&u.jsxs("button",{onClick:xt,className:"py-2 px-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center gap-1.5 border border-white/15 transition-all duration-200 active:scale-95",children:[u.jsx(Y0,{className:"w-3 h-3"}),u.jsx("span",{children:"Restaurar"})]})]}),u.jsxs("div",{className:"flex items-center gap-1 bg-black/75 backdrop-blur-md p-1 rounded-xl border border-white/10 text-xs",children:[u.jsxs("span",{className:"text-[10px] text-gray-400 px-1.5 font-mono flex items-center gap-1",children:[u.jsx(Mv,{className:"w-3 h-3 text-[#d4af37]"})," Câmera:"]}),u.jsx("button",{onClick:()=>je("geral"),className:`px-2 py-0.5 rounded-lg font-bold transition-all ${I==="geral"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-300 hover:text-white"}`,children:"Geral"}),u.jsx("button",{onClick:()=>je("central"),className:`px-2 py-0.5 rounded-lg font-bold transition-all ${I==="central"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-300 hover:text-white"}`,children:"Central"}),u.jsx("button",{onClick:()=>je("fritadeira"),className:`px-2 py-0.5 rounded-lg font-bold transition-all ${I==="fritadeira"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-300 hover:text-white"}`,children:"Fritadeira"}),u.jsx("button",{onClick:()=>je("botoeira"),className:`px-2 py-0.5 rounded-lg font-bold transition-all ${I==="botoeira"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-300 hover:text-white"}`,children:"Botoeira"})]})]})]}),u.jsxs("div",{className:"absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-1.5 pointer-events-auto",children:[u.jsx("div",{onClick:D=>{const w=D.currentTarget.getBoundingClientRect(),B=D.clientY-w.top,le=Math.max(0,Math.min(1,B/w.height));Lt(le)},title:"Clique para rolar na simulação",className:"relative w-2 sm:w-2.5 h-32 sm:h-48 rounded-full bg-black/75 backdrop-blur-md border border-[#d4af37]/40 shadow-[0_0_15px_rgba(212,175,55,0.25)] cursor-pointer p-0.5 flex flex-col justify-start overflow-hidden group hover:border-[#d4af37] transition-all",children:u.jsx("div",{className:"w-full rounded-full bg-gradient-to-b from-[#ffffff] via-[#d4af37] to-[#9a741e] shadow-[0_0_10px_rgba(212,175,55,0.8)] transition-[height] duration-150",style:{height:`${Math.max(10,r*100)}%`}})}),u.jsx("div",{className:"flex flex-col items-center gap-1",children:[{label:"0",title:"Início / Standby",progress:.05,stage:"STANDBY"},{label:"1",title:"Fase 1: Princípio de Incêndio",progress:.32,stage:"HEATING"},{label:"2",title:"Fase 2: Alarme Térmico 60s",progress:.58,stage:"FIRE_ALARM"},{label:"3",title:"Fase 3: Supressão Ativa",progress:.78,stage:"SUPPRESSION"},{label:"4",title:"Fase 4: Incêndio Extinto",progress:.95,stage:"EXTINGUISHED"}].map(D=>{const w=m===D.stage;return u.jsx("button",{onClick:()=>Lt(D.progress),title:D.title,className:`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-black transition-all ${w?"bg-[#d4af37] text-black shadow-[0_0_12px_rgba(212,175,55,0.9)] scale-110 border border-white":"bg-black/80 hover:bg-black text-gray-400 hover:text-white border border-[#d4af37]/30 hover:border-[#d4af37]"}`,children:D.label},D.label)})}),u.jsx("button",{onClick:pt,title:"Avançar para a Central Outfire",className:"mt-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black/80 hover:bg-black border border-[#d4af37]/50 text-[#d4af37] flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-glow-gold","aria-label":"Avançar para a próxima seção",children:u.jsx(od,{className:"w-3.5 h-3.5 animate-bounce"})})]})]})})]})},Mb=()=>{const[s,e]=Ue.useState("3d"),t=Ue.useRef(null),r=Ue.useRef(null),[o,l]=Ue.useState(!1),d=Ue.useRef(!1);d.current=o;const[f,p]=Ue.useState(!1),m=Ue.useRef(!1);m.current=f;const[x,v]=Ue.useState(null),S=Ue.useRef(null),M=Ue.useRef(null),T=Ue.useRef(null),A=Ue.useRef(null),y=()=>{l(P=>!P)},_=()=>{p(P=>!P)},C=()=>{T.current&&A.current&&(A.current.position.set(1.8,1.2,2.2),T.current.target.set(0,0,0),T.current.update())};Ue.useEffect(()=>{if(s!=="3d"||!t.current||!r.current)return;const P=r.current.clientWidth,U=r.current.clientHeight,L=new Mg;L.background=new Et(921879);const O=new Jn(40,P/U,.1,100);O.position.set(1.8,1.2,2.2),A.current=O;const j=new Pg({canvas:t.current,antialias:!0,powerPreference:"high-performance"});j.setSize(P,U),j.setPixelRatio(Math.min(window.devicePixelRatio,2)),j.shadowMap.enabled=!0,j.shadowMap.type=Hf,j.toneMapping=Cc,j.toneMappingExposure=1.15,j.domElement.style.touchAction="pan-y";const b=new Lg(O,j.domElement);b.enableDamping=!0,b.dampingFactor=.05,b.enableZoom=!1,b.minDistance=1.2,b.maxDistance=6,b.target.set(0,0,0),T.current=b;const R=new Eg(16774890,.9);L.add(R);const z=new Ff(16777215,1.5);z.position.set(3,4,3),z.castShadow=!0,L.add(z);const $=new Ff(13938487,.85);$.position.set(-3,-2,-3),L.add($);const Q=new Xi({color:0,transparent:!0,opacity:.35}),re=new Re(new Yn(2.2,1.4),Q);re.rotation.x=-Math.PI/2,re.position.set(0,-.65,0),L.add(re);const te=new bg().load("/assets/tampa-central-moderna.png");te.colorSpace=On;const q=new yt({color:1316379,metalness:.85,roughness:.35}),X=new yt({map:te,metalness:.2,roughness:.35}),pe=[q,q,q,q,X,q],oe=new Re(new Pt(1.4,1,.58),pe);oe.castShadow=!0,oe.receiveShadow=!0,L.add(oe);const F=new Xi({color:460810}),ce=new Re(new Yn(.88,.22),F);ce.rotation.x=-Math.PI/2,ce.position.set(0,.501,-.05),L.add(ce);const Ne=new Re(new Yn(.7,.22),F);Ne.rotation.x=Math.PI/2,Ne.position.set(0,-.501,-.05),L.add(Ne);const qe=Ig(),We=new Of(qe);We.colorSpace=On,We.generateMipmaps=!1,We.minFilter=Pn,We.magFilter=Pn;const ne=new yt({map:We,roughness:.15,metalness:.05,emissive:16777215,emissiveMap:We,emissiveIntensity:.95,depthTest:!0,depthWrite:!0}),fe=new Re(new Yn(.219,.164),ne);fe.position.set(0,0,.298),fe.renderOrder=10,L.add(fe);const ye=new yt({color:1579552,metalness:.9,roughness:.35}),Be=new _n,Le=new Re(new Pt(.244,.014,.008),ye);Le.position.set(0,.088,.294);const gt=new Re(new Pt(.244,.014,.008),ye);gt.position.set(0,-.088,.294);const Jt=new Re(new Pt(.014,.164,.008),ye);Jt.position.set(-.115,0,.294);const _t=new Re(new Pt(.014,.164,.008),ye);_t.position.set(.115,0,.294),Be.add(Le,gt,Jt,_t),L.add(Be);const Rt=new yt({color:11580344,metalness:.95,roughness:.2}),Lt=new rn(.004,.004,.006,8);[[-.108,.08],[.108,.08],[-.108,-.08],[.108,-.08]].forEach(([dt,tt])=>{const Vt=new Re(Lt,Rt);Vt.rotation.x=Math.PI/2,Vt.position.set(dt,tt,.2985),L.add(Vt)});const pt=new Xi({color:460810}),Ot=new Re(new Yn(.04,.12),pt);Ot.rotation.y=Math.PI,Ot.position.set(-.5,.3,-.291),L.add(Ot);const V=new Re(new Yn(.04,.12),pt);V.rotation.y=Math.PI,V.position.set(.5,.3,-.291),L.add(V);const Yt=new yt({color:11580344,metalness:.9,roughness:.2}),St=new rn(.012,.012,.015,8),xt=new _n;xt.position.set(0,0,-.05),L.add(xt),S.current=xt;const je=new yt({color:2040619,metalness:.8,roughness:.35}),D=new Re(new Pt(.95,.02,.25),je);D.position.set(0,.505,0),D.userData={isPsu:!0,name:"Tampa da Fonte de Alimentação"},xt.add(D),[[-.43,.518,-.09],[-.43,.518,.09],[.43,.518,-.09],[.43,.518,.09]].forEach(([dt,tt,Vt])=>{const Ht=new Re(St,Yt);Ht.position.set(dt,tt,Vt),xt.add(Ht)});const w=new yt({color:13948120,metalness:.9,roughness:.2}),B=new Re(new Pt(.85,.44,.2),w);B.position.set(0,.27,0),B.userData={isPsu:!0,name:"Fonte de Alimentação Andeli MS-350-24 (24V Industrial)"},xt.add(B);const le=new Xi({color:15381256}),he=new Re(new Yn(.24,.08),le);he.position.set(0,.27,.101),xt.add(he);const K=new _n;K.position.set(0,0,-.05),L.add(K),M.current=K;const Fe=new yt({color:2040619,metalness:.8,roughness:.35}),be=new Re(new Pt(.74,.02,.24),Fe);be.position.set(0,-.505,0),be.userData={isBattery:!0,name:"Tampa da Gaveta de Baterias"},K.add(be),[[-.33,-.518,-.09],[-.33,-.518,.09],[.33,-.518,-.09],[.33,-.518,.09]].forEach(([dt,tt,Vt])=>{const Ht=new Re(St,Yt);Ht.position.set(dt,tt,Vt),K.add(Ht)});const Oe=new yt({color:592397,roughness:.5}),$e=new Re(new Pt(.3,.38,.18),Oe);$e.position.set(-.18,-.305,0),$e.userData={isBattery:!0,name:"Bateria Pionero 12V 7Ah (Banco de Backup)"},K.add($e);const xe=new Re(new Pt(.3,.38,.18),Oe);xe.position.set(.18,-.305,0),xe.userData={isBattery:!0,name:"Bateria Pionero 12V 7Ah (Banco de Backup)"},K.add(xe);const Ee=new yt({color:2450411,metalness:.8}),ke=new yt({color:15680580,metalness:.8}),Ge=new Re(new rn(.012,.012,.03),Ee);Ge.position.set(-.24,-.1,.05),K.add(Ge);const Se=new Re(new rn(.012,.012,.03),ke);Se.position.set(-.12,-.1,.05),K.add(Se);const ut=new Re(new rn(.012,.012,.03),Ee);ut.position.set(.12,-.1,.05),K.add(ut);const H=new Re(new rn(.012,.012,.03),ke);H.position.set(.24,-.1,.05),K.add(H);const Pe=new kf,ve=new ft,Ie=dt=>{var Ht,hn;const tt=j.domElement.getBoundingClientRect();ve.x=(dt.clientX-tt.left)/tt.width*2-1,ve.y=-((dt.clientY-tt.top)/tt.height)*2+1,Pe.setFromCamera(ve,O);const Vt=Pe.intersectObjects([xt,K,oe],!0);if(Vt.length>0){let Ln=Vt[0].object;if((Ht=Ln.userData)!=null&&Ht.isPsu){j.domElement.style.cursor="pointer",v(d.current?"⚡ Fonte Aberta (Clique para recolher)":"⚡ Fonte de Alimentação (Clique para subir gaveta)");return}else if((hn=Ln.userData)!=null&&hn.isBattery){j.domElement.style.cursor="pointer",v(m.current?"🔋 Baterias Abertas (Clique para recolher)":"🔋 Baterias de Backup (Clique para descer gaveta)");return}else{j.domElement.style.cursor="grab",v("Gabinete Central Outfire (Arraste para girar 360°)");return}}j.domElement.style.cursor="default",v(null)},ge=dt=>{var Ht,hn;const tt=j.domElement.getBoundingClientRect();ve.x=(dt.clientX-tt.left)/tt.width*2-1,ve.y=-((dt.clientY-tt.top)/tt.height)*2+1,Pe.setFromCamera(ve,O);const Vt=Pe.intersectObjects([xt,K],!0);if(Vt.length>0){const Ln=Vt[0].object;(Ht=Ln.userData)!=null&&Ht.isPsu?l(Pi=>!Pi):(hn=Ln.userData)!=null&&hn.isBattery&&p(Pi=>!Pi)}};j.domElement.addEventListener("mousemove",Ie),j.domElement.addEventListener("click",ge);const me=()=>{if(!r.current||!j||!O)return;const dt=r.current.clientWidth,tt=r.current.clientHeight;O.aspect=dt/tt,O.updateProjectionMatrix(),j.setSize(dt,tt)};window.addEventListener("resize",me);let Ce;const rt=()=>{Ce=requestAnimationFrame(rt);const dt=d.current?.52:0;S.current&&(S.current.position.y+=(dt-S.current.position.y)*.12);const tt=m.current?-.52:0;M.current&&(M.current.position.y+=(tt-M.current.position.y)*.12),b.update(),j.render(L,O)};return rt(),()=>{cancelAnimationFrame(Ce),window.removeEventListener("resize",me),j.domElement.removeEventListener("mousemove",Ie),j.domElement.removeEventListener("click",ge),j.dispose()}},[s]);const I=[{icon:Cv,title:"Multicoifa Independente (Até 3 Coifas)",desc:"Capacidade de proteger e controlar até 3 coifas simultaneamente de maneira 100% autônoma. O disparo em uma coifa não interrompe a operação das demais."},{icon:Lm,title:"IHM Touchscreen Inteligente",desc:"Interface gráfica colorida touch com diagnóstico contínuo de baterias, rede elétrica, pressão de cilindros e estado das válvulas de gás."},{icon:Bv,title:"Alertas Inteligentes por Voz Falada",desc:"Diferente de sistemas que apenas apitam gerando pânico, a Central VTS emite avisos sonoros falados em português, instruindo a brigada com clareza."},{icon:Sv,title:"Agenda Semanal Automática de Gás",desc:"Programe os horários em que a válvula de gás deve abrir e fechar a cada dia da semana. Garante segurança total fora do horário de expediente e evita esquecimentos."},{icon:Vd,title:"Proteção Anti-Disparo com Botão Abortar",desc:"Em caso de alarme em falso, a tela exibe contagem regressiva configurável (ex: 60s) permitindo abortar com um toque antes de descarregar os cilindros."},{icon:q0,title:"Alarme Convencional Segregado",desc:"Integração perfeita com o sistema predial do shopping/edifício, mantendo a linha de supressão por saponificante imune a fumaças corriqueiras de grelhados."}];return u.jsxs("section",{id:"central-vts",className:"py-24 bg-[#08090c] relative overflow-hidden",children:[u.jsx("div",{className:"absolute top-1/4 -left-48 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[140px] pointer-events-none"}),u.jsx("div",{className:"absolute bottom-10 -right-48 w-96 h-96 bg-[#997b1a]/10 rounded-full blur-[140px] pointer-events-none"}),u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold tracking-wide uppercase mb-4",children:[u.jsx(Lm,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Engenharia e Automação Nacional"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Central de Comando Inteligente ",u.jsx("br",{}),u.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"Outfire VTS 32S3"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"O verdadeiro cérebro do sistema de supressão. Controle absoluto, monitoramento em tempo real, automação de gás e proteção anti-disparo acidental na ponta dos seus dedos."})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20",children:[u.jsxs("div",{className:"lg:col-span-7 flex flex-col items-center",children:[u.jsxs("div",{ref:r,className:"relative w-full max-w-xl aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#14171e] to-[#0a0b0e] border border-[#d4af37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex items-center justify-center overflow-hidden group",children:[s==="3d"&&u.jsxs("div",{className:"relative w-full h-full",children:[u.jsx("canvas",{ref:t,className:"w-full h-full block outline-none cursor-grab active:cursor-grabbing"}),x&&u.jsx("div",{className:"absolute top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-3.5 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-[#d4af37]/50 text-xs text-[#f3e5ab] font-bold shadow-glow-gold",children:x}),u.jsxs("div",{className:"absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-auto",children:[u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsxs("button",{onClick:y,className:`py-1.5 px-3 rounded-lg text-xs font-bold transition-all border flex items-center gap-1.5 ${o?"bg-amber-500 text-black border-amber-400 shadow-glow-gold":"bg-black/80 hover:bg-black text-[#f3e5ab] border-[#d4af37]/40"}`,children:[u.jsx(Vv,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:o?"Recolher Fonte":"Subir Fonte"})]}),u.jsxs("button",{onClick:_,className:`py-1.5 px-3 rounded-lg text-xs font-bold transition-all border flex items-center gap-1.5 ${f?"bg-amber-500 text-black border-amber-400 shadow-glow-gold":"bg-black/80 hover:bg-black text-[#f3e5ab] border-[#d4af37]/40"}`,children:[u.jsx(vv,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:f?"Recolher Baterias":"Descer Baterias"})]})]}),u.jsx("button",{onClick:C,title:"Resetar Câmera",className:"p-1.5 rounded-lg bg-black/80 hover:bg-black text-[#f3e5ab] border border-[#d4af37]/30 transition-all",children:u.jsx(Y0,{className:"w-4 h-4"})})]})]}),s==="interno"&&u.jsx("img",{src:"/assets/central-outfire-interno.jpg",alt:"Placa e Relés Internos da Central Outfire",className:"w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:scale-105"}),s==="instalado"&&u.jsx("img",{src:"/assets/central-outfire-instalada.jpg",alt:"Central Outfire Instalada em Cozinha Real",className:"w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:scale-105"}),u.jsxs("div",{className:"absolute top-4 left-4 bg-[#08090b]/90 backdrop-blur-md border border-[#d4af37]/30 px-3 py-1.5 rounded-lg text-xs font-mono text-[#f3e5ab] pointer-events-none",children:[s==="3d"&&"Gabinete 3D Interativo (Gire 360° com o mouse/toque)",s==="interno"&&"Eletrônica Robusta, Relés de Potência & Bornes",s==="instalado"&&"Instalação Real em Cozinha Profissional"]})]}),u.jsxs("div",{className:"flex items-center gap-2 mt-4 bg-[#12141a] p-1.5 rounded-2xl border border-[#d4af37]/25 shadow-md",children:[u.jsxs("button",{onClick:()=>e("3d"),className:`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${s==="3d"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-400 hover:text-white"}`,children:[u.jsx(Ho,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Gabinete 3D Interativo"})]}),u.jsx("button",{onClick:()=>e("interno"),className:`px-4 py-2 rounded-xl text-xs font-bold transition-all ${s==="interno"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-400 hover:text-white"}`,children:"Eletrônica Interna"}),u.jsx("button",{onClick:()=>e("instalado"),className:`px-4 py-2 rounded-xl text-xs font-bold transition-all ${s==="instalado"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-400 hover:text-white"}`,children:"Instalação Real"})]})]}),u.jsx("div",{className:"lg:col-span-5 space-y-4",children:u.jsxs("div",{className:"glass-panel-gold p-6 sm:p-8 rounded-3xl border border-[#d4af37]/30 relative",children:[u.jsxs("div",{className:"flex items-center justify-between mb-6",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"text-2xl font-black text-white font-sans",children:"Painel Central VTS 32S3"}),u.jsx("span",{className:"text-xs text-[#e5c05d] font-mono font-bold",children:"AUTOMAÇÃO & SUPRESSÃO CONFORME NBR 14518"})]}),u.jsx("div",{className:"w-12 h-12 rounded-2xl bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]",children:u.jsx(kv,{className:"w-6 h-6"})})]}),u.jsxs("div",{className:"space-y-3.5 text-sm",children:[u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx(ps,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsxs("span",{className:"text-gray-300",children:[u.jsx("strong",{children:"Dupla Ação de Supressão:"})," Saponificante na cocção + CO2 no duto e fechamento automático dos dampers."]})]}),u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx(ps,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsxs("span",{className:"text-gray-300",children:[u.jsx("strong",{children:"Corte de Gás e Exaustor:"})," Intertravamento elétrico instantâneo ao sinal de disparo."]})]}),u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx(ps,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsxs("span",{className:"text-gray-300",children:[u.jsx("strong",{children:"Detecção Térmica Regulável:"})," Calibração em 145°C na coifa e 300°C no duto."]})]}),u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx(ps,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsxs("span",{className:"text-gray-300",children:[u.jsx("strong",{children:"Bateria de Backup Interna:"})," Funcionamento ininterrupto mesmo com queda de rede."]})]}),u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx(ps,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsxs("span",{className:"text-gray-300",children:[u.jsx("strong",{children:"Menu protegido por senha:"})," Previne alterações indevidas por pessoas não autorizadas."]})]}),u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx(ps,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsxs("span",{className:"text-gray-300",children:[u.jsx("strong",{children:"Opção de Anular Disparo:"})," Sistema inteligente com botão de cancelamento na IHM para evitar disparos acidentais ou alarmes falsos."]})]})]}),u.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3",children:[u.jsxs("a",{href:"#calculadora",className:"flex-1 py-3 px-4 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black text-center text-sm rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-2",children:[u.jsx("span",{children:"Dimensionar Cozinha"}),u.jsx(fc,{className:"w-4 h-4 fill-black"})]}),u.jsxs("a",{href:"/assets/Manual_Tecnico_OutFire_2026.pdf",download:"Manual_Tecnico_OutFire_2026.pdf",target:"_blank",rel:"noopener noreferrer",className:"py-3 px-4 bg-[#14171e] hover:bg-[#1f2430] text-[#f3e5ab] font-bold text-center text-sm rounded-xl border border-[#d4af37]/30 transition-all flex items-center justify-center gap-2",children:[u.jsx(W0,{className:"w-4 h-4 text-[#d4af37]"}),u.jsx("span",{children:"Baixar Manual Técnico"})]})]})]})})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:I.map((P,U)=>{const L=P.icon;return u.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-white/5 hover:border-[#d4af37]/40 transition-all duration-300 hover:-translate-y-1 group",children:[u.jsx("div",{className:"w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-300 shadow-sm",children:u.jsx(L,{className:"w-6 h-6"})}),u.jsx("h4",{className:"text-lg font-bold text-white mb-2 font-sans group-hover:text-[#f3e5ab] transition-colors",children:P.title}),u.jsx("p",{className:"text-sm text-gray-400 leading-relaxed",children:P.desc})]},U)})})]})]})},wb=()=>u.jsx("section",{id:"por-que-outfire",className:"py-24 bg-[#0a0c0e] relative border-t border-white/5",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wide mb-4",children:[u.jsx(Vd,{className:"w-3.5 h-3.5"}),"Entenda o Risco Real em Cozinhas Industriais"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Por Que Extintores Comuns e Água ",u.jsx("br",{}),u.jsx("span",{className:"text-red-500",children:"São Fatais em Incêndio de Óleo?"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Mais de 65% dos incêndios que destroem restaurantes começam na linha de cocção. Conheça a diferença entre uma tragédia anunciada e a proteção autônoma Classe K."})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-16",children:[u.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-red-900/30 bg-gradient-to-b from-red-950/20 to-black/40 relative flex flex-col justify-between",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsx("span",{className:"text-xs font-mono font-bold bg-red-600/20 text-red-400 px-3 py-1 rounded-full border border-red-500/30",children:"PERIGO EXTREMO"}),u.jsx(yc,{className:"w-7 h-7 text-red-500"})]}),u.jsx("h3",{className:"text-xl font-bold text-white mb-2 font-sans",children:"Jogar Água em Óleo Fervente"}),u.jsxs("p",{className:"text-sm text-gray-400 leading-relaxed mb-6",children:["A água ferve a 100°C e o óleo em chamas está acima de 360°C. Ao atingir o fundo da cuba, a água vaporiza instantaneamente, expandindo seu volume em ",u.jsx("strong",{children:"1.700 vezes"}),"."]}),u.jsxs("div",{className:"p-4 rounded-xl bg-red-950/30 border border-red-900/40 text-xs text-red-300 space-y-2",children:[u.jsxs("div",{className:"flex items-center gap-2 font-bold",children:[u.jsx(ko,{className:"w-4 h-4 text-red-400"}),"Efeito Bola de Fogo (BLEVE):"]}),u.jsx("p",{children:"O óleo ardente é arremessado no teto e contra os cozinheiros em uma fração de segundo, gerando queimaduras de 3° grau e destruição imediata da cozinha."})]})]}),u.jsx("div",{className:"mt-6 pt-4 border-t border-red-900/30 text-xs font-mono text-red-400 font-bold",children:"Resultado: Tragédia & Risco de Morte"})]}),u.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-amber-900/30 bg-gradient-to-b from-amber-950/10 to-black/40 relative flex flex-col justify-between",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsx("span",{className:"text-xs font-mono font-bold bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full border border-amber-500/30",children:"INEFICAZ NA PRÁTICA"}),u.jsx(yc,{className:"w-7 h-7 text-amber-500"})]}),u.jsx("h3",{className:"text-xl font-bold text-white mb-2 font-sans",children:"Extintor Manual de Pó (ABC)"}),u.jsxs("p",{className:"text-sm text-gray-400 leading-relaxed mb-6",children:["Extintores de pó químico comum sufocam a chama por poucos segundos, mas ",u.jsx("strong",{children:"não resfriam a massa de óleo"}),", que permanece acima do ponto de ignição."]}),u.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/20 border border-amber-900/30 text-xs text-amber-300 space-y-2",children:[u.jsxs("div",{className:"flex items-center gap-2 font-bold",children:[u.jsx(Vd,{className:"w-4 h-4 text-amber-400"}),"Reignição e Sujeira Tóxica:"]}),u.jsx("p",{children:"Assim que o pó se dissipa ou o ar circula, o óleo em chamas volta a pegar fogo com a mesma violência. Além disso, o pó contamina todos os alimentos e dutos."})]})]}),u.jsx("div",{className:"mt-6 pt-4 border-t border-amber-900/30 text-xs font-mono text-amber-400 font-bold",children:"Resultado: Reignição e Perda Total"})]}),u.jsxs("div",{className:"glass-panel-gold p-6 sm:p-8 rounded-3xl border border-[#d4af37]/60 bg-gradient-to-b from-[#1a170e]/80 via-[#0e1015] to-[#08090c] relative flex flex-col justify-between shadow-glow-gold",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsx("span",{className:"text-xs font-mono font-black bg-[#d4af37] text-black px-3 py-1 rounded-full shadow-glow-gold",children:"SOLUÇÃO DEFINITIVA OUTFIRE"}),u.jsx(Tc,{className:"w-7 h-7 text-[#d4af37]"})]}),u.jsx("h3",{className:"text-xl font-black text-white mb-2 font-sans",children:"Sistema Automatizado Outfire"}),u.jsxs("p",{className:"text-sm text-gray-300 leading-relaxed mb-6",children:["Ao disparar, o agente saponificante reage quimicamente com os ácidos graxos do óleo quente em um processo chamado ",u.jsx("strong",{children:"saponificação"}),"."]}),u.jsxs("div",{className:"p-4 rounded-xl bg-[#14171e] border border-[#d4af37]/30 text-xs text-[#f3e5ab] space-y-2",children:[u.jsxs("div",{className:"flex items-center gap-2 font-bold text-[#e5c05d]",children:[u.jsx(Ho,{className:"w-4 h-4 text-[#d4af37]"}),"Manta Espumosa e Resfriamento:"]}),u.jsx("p",{className:"text-gray-300",children:"Cria uma espessa manta de sabão alcalino que bloqueia o oxigênio, impede a liberação de vapores inflamáveis e resfria o óleo rapidamente. O CO2 protege o duto sem deixar resíduos."})]})]}),u.jsx("div",{className:"mt-6 pt-4 border-t border-[#d4af37]/30 text-xs font-mono text-[#e5c05d] font-bold",children:"Resultado: Fogo 100% Extinto & Cozinha Salva"})]})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 p-8 rounded-3xl bg-[#121418] border border-white/10 text-center",children:[u.jsxs("div",{className:"p-4",children:[u.jsx("div",{className:"text-3xl sm:text-4xl font-black text-red-500 font-mono",children:"65%"}),u.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"dos incêndios em restaurantes iniciam nos equipamentos de cocção e coifas."})]}),u.jsxs("div",{className:"p-4 border-t md:border-t-0 md:border-l border-white/10",children:[u.jsx("div",{className:"text-3xl sm:text-4xl font-black text-amber-400 font-mono",children:"360°C"}),u.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"temperatura crítica em que o óleo vegetal entra em autoignição espontânea."})]}),u.jsxs("div",{className:"p-4 border-t md:border-t-0 md:border-l border-white/10",children:[u.jsx("div",{className:"text-3xl sm:text-4xl font-black text-emerald-400 font-mono",children:"0 seg"}),u.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"tempo de hesitação humana: a Central Outfire atua 100% de forma autônoma."})]}),u.jsxs("div",{className:"p-4 border-t md:border-t-0 md:border-l border-white/10",children:[u.jsx("div",{className:"text-3xl sm:text-4xl font-black text-blue-400 font-mono",children:"100%"}),u.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"garantia de conformidade para aprovação em vistoria do Corpo de Bombeiros (AVCB)."})]})]})]})}),bb=()=>{const s=[{code:"ABNT NBR 14518",title:"Sistemas de Ventilação para Cozinhas Profissionais",authority:"Associação Brasileira de Normas Técnicas",details:"Estabelece a obrigatoriedade de sistema fixo automático de extinção de incêndio para coifas, dutos e equipamentos de cocção com óleo ou gordura.",highlights:["Intertravamento obrigatório de gás e energia elétrica","Desligamento automático do sistema de exaustão mecânica","Proteção específica por agente Classe K nos aparelhos de queima","Dampers corta-fogo para bloqueio de propagação em dutos"]},{code:"NFPA 96 & NFPA 17A",title:"Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations",authority:"National Fire Protection Association (USA)",details:"Padrão global mais respeitado do mundo para dimensionamento de agentes saponificantes líquidos e inundação por gás inerte em dutos de cocção comercial.",highlights:["Tempo máximo de resposta de detecção térmica","Cobertura milimétrica por bico aspersor calibrado","Mínimo de autonomia de agente extintor para resfriamento total","Acionador manual de emergência em rota de fuga"]},{code:"Instruções Técnicas do Corpo de Bombeiros",title:"Emissão e Renovação de AVCB / CLCB",authority:"Polícia Militar do Estado de São Paulo / Corpos de Bombeiros Estaduais",details:"Exigência legal indispensável para a liberação de alvarás de funcionamento de restaurantes, lanchonetes, padarias, hotéis e praças de alimentação de shoppings.",highlights:["Condição mandatória para aprovação em vistoria física","Evita multas pesadas e interdição cautelar imediata da cozinha","Garante laudo ART emitido por Engenheiro Mecânico credenciado","Laudo de comissionamento e teste hidrostático"]}];return u.jsx("section",{id:"normas",className:"py-24 bg-[#08090c] relative",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide mb-4",children:[u.jsx(Iv,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Conformidade Regulatória Obrigatória"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Normas Técnicas & Exigências ",u.jsx("br",{}),u.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"do Corpo de Bombeiros (AVCB)"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Instalar o sistema Outfire não é apenas segurança: é uma exigência legal para manter seu restaurante aberto, aprovado em vistorias e coberto pela apólice de seguro."})]}),u.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16",children:s.map((e,t)=>u.jsxs("div",{className:"glass-panel-gold p-6 sm:p-8 rounded-3xl border border-[#d4af37]/25 hover:border-[#d4af37]/60 transition-all flex flex-col justify-between shadow-lg",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsx("span",{className:"text-xs font-mono font-bold bg-[#d4af37]/15 text-[#e5c05d] px-3 py-1 rounded-full border border-[#d4af37]/30",children:e.code}),u.jsx(Tv,{className:"w-6 h-6 text-[#d4af37]"})]}),u.jsx("h3",{className:"text-xl font-bold text-white mb-1 font-sans",children:e.title}),u.jsx("span",{className:"text-xs text-[#e5c05d] block mb-4 font-mono font-bold",children:e.authority}),u.jsx("p",{className:"text-sm text-gray-300 leading-relaxed mb-6",children:e.details}),u.jsx("div",{className:"space-y-2.5 pt-4 border-t border-white/10",children:e.highlights.map((r,o)=>u.jsxs("div",{className:"flex items-start gap-2.5 text-xs text-gray-300",children:[u.jsx(Tc,{className:"w-4 h-4 text-[#d4af37] shrink-0 mt-0.5"}),u.jsx("span",{children:r})]},o))})]}),u.jsxs("div",{className:"mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-blue-400 font-semibold",children:[u.jsx("span",{children:"100% Atendido pelo Sistema Outfire"}),u.jsx(bv,{className:"w-4 h-4"})]})]},t))}),u.jsxs("div",{className:"p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-red-950/40 via-black/60 to-red-950/40 border border-red-500/30 flex flex-col md:flex-row items-center gap-6",children:[u.jsx("div",{className:"w-16 h-16 rounded-2xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500 shrink-0",children:u.jsx(yv,{className:"w-8 h-8"})}),u.jsxs("div",{className:"flex-1 text-center md:text-left",children:[u.jsx("h4",{className:"text-lg sm:text-xl font-bold text-white mb-1",children:"Atenção: Shoppings e Seguradoras não toleram improvisos!"}),u.jsxs("p",{className:"text-sm text-gray-300 leading-relaxed",children:["Em caso de princípio de incêndio em coifas sem sistema fixo automatizado conforme a ",u.jsx("strong",{children:"NBR 14518"}),", as companhias de seguro negam o pagamento da indenização por infração grave às normas. Grandes shoppings exigem laudo de comissionamento Outfire para liberar a operação da loja."]})]}),u.jsx("div",{className:"shrink-0",children:u.jsx("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20preciso%20de%20um%20laudo%20ou%20projeto%20Outfire%20para%20aprovar%20minha%20cozinha%20no%20Corpo%20de%20Bombeiros%2FShopping.",target:"_blank",rel:"noopener noreferrer",className:"py-3 px-6 bg-red-600 hover:bg-red-500 text-white font-bold text-sm rounded-xl shadow-glow-red transition-all block text-center",children:"Consultar Engenheiro Outfire"})})]})]})})},Eb=({onAddToCart:s})=>{const[e,t]=Ue.useState(1),[r,o]=Ue.useState(9),[l,d]=Ue.useState(!0),[f,p]=Ue.useState([{id:1,name:"Coifa Principal (Cocção Pesada)",lengthMeters:2.5,appliances:[{id:"1",name:"Fritadeira Industrial (2 cubas)",type:"fritadeira",icon:"🍟",widthMeters:.6},{id:"2",name:"Fogão Industrial 6 Bocas",type:"fogao",icon:"🍳",widthMeters:1.1},{id:"3",name:"Chapa de Lanche / Bifeira",type:"chapa",icon:"🥩",widthMeters:.8}]}]),m=y=>{if(t(y),y>f.length){const _=[...f];for(let C=f.length+1;C<=y;C++)_.push({id:C,name:`Coifa Setor ${C}`,lengthMeters:2,appliances:[{id:`${C}-1`,name:"Fogão 4 Bocas",type:"fogao",icon:"🍳",widthMeters:.9},{id:`${C}-2`,name:"Chapa Elétrica/Gás",type:"chapa",icon:"🥩",widthMeters:.8}]});p(_)}else y<f.length&&p(f.slice(0,y))},x=(y,_)=>{const C=[...f];C[y].lengthMeters=Math.max(1,Math.min(8,Number(_.toFixed(1)))),p(C)},v=(y,_)=>{const C={fritadeira:"Fritadeira Industrial",fogao:"Fogão Industrial",chapa:"Chapa Profissional",charbroiler:"Charbroiler / Grelha"},I={fritadeira:"🍟",fogao:"🍳",chapa:"🥩",charbroiler:"🔥"},P={fritadeira:.5,fogao:.9,chapa:.8,charbroiler:.7},U=[...f];U[y].appliances.push({id:Math.random().toString(36).substring(7),name:C[_],type:_,icon:I[_],widthMeters:P[_]}),p(U)},S=(y,_)=>{const C=[...f];C[y].appliances.splice(_,1),p(C)},M=Ue.useMemo(()=>{let y=0,_=0,C=0,I=0;f.forEach(q=>{y+=q.appliances.length,_+=2,l&&(C+=1);const X=Math.max(1,Math.round(q.lengthMeters/.9));I+=X});const P=y+_+C,U=P*2,L=Math.max(9,U);let O=9;L>9&&L<=16?O=16:L>16&&L<=25?O=25:L>25&&(O=Math.ceil(L/9)*9);const j=Math.max(1,Math.ceil(r/3)),b=j,R=Math.max(10,Math.ceil(r/3*5)),z=R<=10?10:R<=25?25:45,$=`Central Outfire VTS 32S3 (${e} Coifa${e>1?"s":""} Independentes)`,Q=e===1?8900:e===2?14500:19800,re=P*185+j*210,se=I*295+b*320,te=Q+re+se+1200;return{applianceNozzlesCount:y,plenumNozzlesCount:_,damperNozzlesCount:C,totalSaponificanteNozzles:P,saponificanteLiters:L,recommendedSaponificanteCylinderLiters:O,hoodSensorsCount:I,co2NozzlesCount:j,ductSensorsCount:b,co2Kg:R,recommendedCo2CylinderKg:z,centralModel:$,hoodsCount:e,dampersCount:e,gasValvesCount:1,estimatedPriceBRL:te}},[f,r,l,e]),T=()=>{let y=`🔥 *ORÇAMENTO TÉCNICO - SISTEMA OUTFIRE VTS 32S3*

`;y+=`Olá, equipe de Engenharia da Outfire! Realizei o dimensionamento da minha cozinha no site outfire.com.br e gostaria de uma proposta formal:

`,y+=`🏢 *Configuração da Cozinha:*
`,y+=`• Quantidade de Coifas: ${e} independente(s)
`,y+=`• Comprimento do Duto de Exaustão: ${r} metros

`,f.forEach((C,I)=>{y+=`📍 *Coifa ${I+1} (${C.lengthMeters}m):*
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

`,y+="Gostaria de agendar uma consulta técnica ou receber a proposta com laudo ART para AVCB. Aguardo retorno!";const _=encodeURIComponent(y);window.open(`https://wa.me/5515996576807?text=${_}`,"_blank")},A=()=>{const y={id:`custom-kit-${Date.now()}`,sku:`OUT-CUSTOM-${e}C`,name:`Kit Personalizado Outfire VTS (${e} Coifa${e>1?"s":""} + Duto ${r}m)`,category:"kit",priceBRL:M.estimatedPriceBRL,description:`Sistema customizado: ${M.totalSaponificanteNozzles} bicos saponificante (${M.recommendedSaponificanteCylinderLiters}L), ${M.co2NozzlesCount} bicos CO2 (${M.recommendedCo2CylinderKg}kg), ${M.hoodSensorsCount} sensores 145°C e ${M.ductSensorsCount} sensores 300°C.`,image:"/assets/central-outfire-fundo-removido.png",specs:[`${M.centralModel}`,`Cilindro Saponificante Classe K: ${M.recommendedSaponificanteCylinderLiters} Litros`,`Cilindro CO2 pressurizado: ${M.recommendedCo2CylinderKg} Kg`,`Bicos Saponificante em Inox: ${M.totalSaponificanteNozzles} unidades`,`Bicos CO2 em Duto: ${M.co2NozzlesCount} unidades`,`Sensores Reguláveis: ${M.hoodSensorsCount} (145°C) + ${M.ductSensorsCount} (300°C)`,"Válvula de corte rápido de gás com rearme manual","Dampers corta-fogo com atuador elétrico"],inStock:!0};s(y)};return u.jsx("section",{id:"calculadora",className:"py-24 bg-[#0a0b0e] relative border-t border-white/5",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide mb-4",children:[u.jsx(H0,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Engenharia sob Medida"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Calculadora de Supressão & ",u.jsx("br",{}),u.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"Diagrama Automatizado da sua Cozinha"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Informe as medidas da sua coifa, duto e equipamentos. O sistema calcula a quantidade exata de bicos de saponificante, CO2, sensores e gera o diagrama técnico em tempo real."})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16",children:[u.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[u.jsxs("div",{className:"glass-panel-gold p-6 rounded-2xl border border-[#d4af37]/30",children:[u.jsxs("label",{className:"text-sm font-bold text-white block mb-3 flex items-center justify-between",children:[u.jsx("span",{children:"1. Quantidade de Coifas Independentes:"}),u.jsx("span",{className:"text-xs font-mono text-[#e5c05d]",children:"Até 3 simultâneas"})]}),u.jsx("div",{className:"grid grid-cols-3 gap-2",children:[1,2,3].map(y=>u.jsxs("button",{onClick:()=>m(y),className:`py-3 px-4 rounded-xl text-sm font-bold flex flex-col items-center gap-1 transition-all ${e===y?"bg-[#d4af37] text-black shadow-glow-gold border border-[#e5c05d]":"bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"}`,children:[u.jsxs("span",{children:[y," ",y===1?"Coifa":"Coifas"]}),u.jsx("span",{className:"text-[10px] opacity-75 font-normal",children:y===1?"Individual":"Setorizada"})]},y))})]}),u.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-white/10",children:[u.jsxs("div",{className:"flex items-center justify-between mb-2",children:[u.jsxs("label",{className:"text-sm font-bold text-white flex items-center gap-2",children:[u.jsx(K0,{className:"w-4 h-4 text-cyan-400"}),u.jsx("span",{children:"2. Comprimento do Duto de Exaustão:"})]}),u.jsxs("span",{className:"font-mono text-base font-black text-cyan-400",children:[r," metros"]})]}),u.jsx("input",{type:"range",min:"3",max:"30",step:"1",value:r,onChange:y=>o(Number(y.target.value)),className:"w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"}),u.jsxs("div",{className:"flex justify-between text-[11px] text-gray-400 mt-2 font-mono",children:[u.jsx("span",{children:"3 m (Curto)"}),u.jsx("span",{children:"15 m (Médio)"}),u.jsx("span",{children:"30 m (Longo)"})]}),u.jsxs("div",{className:"mt-4 p-3 bg-cyan-950/20 border border-cyan-800/30 rounded-xl text-xs text-cyan-200 flex items-center justify-between",children:[u.jsx("span",{children:"Regra técnica: 1 bico de CO2 + 1 sensor (300°C) a cada 3m"}),u.jsxs("span",{className:"font-mono font-bold text-cyan-400",children:[M.co2NozzlesCount," bicos CO2"]})]})]}),f.map((y,_)=>u.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-white/10 space-y-4",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-3",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-6 h-6 rounded-full bg-red-600/30 border border-red-500/40 text-red-400 text-xs font-bold flex items-center justify-center",children:_+1}),u.jsx("h4",{className:"font-bold text-white text-sm",children:y.name})]}),u.jsxs("span",{className:"text-xs font-mono font-bold text-amber-400",children:[y.lengthMeters," m"]})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between text-xs text-gray-400 mb-1.5",children:[u.jsx("span",{children:"Comprimento da Coifa:"}),u.jsxs("span",{children:[y.lengthMeters," metros lineares"]})]}),u.jsx("input",{type:"range",min:"1.0",max:"6.0",step:"0.5",value:y.lengthMeters,onChange:C=>x(_,Number(C.target.value)),className:"w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-500"})]}),u.jsxs("div",{children:[u.jsxs("label",{className:"text-xs font-bold text-gray-300 block mb-2",children:["Equipamentos sob a Coifa (",y.appliances.length," protegidos):"]}),u.jsx("div",{className:"space-y-2 mb-3",children:y.appliances.map((C,I)=>u.jsxs("div",{className:"flex items-center justify-between p-2.5 bg-white/5 rounded-xl border border-white/5 text-xs",children:[u.jsxs("div",{className:"flex items-center gap-2 text-gray-200",children:[u.jsx("span",{className:"text-base",children:C.icon}),u.jsx("span",{className:"font-medium",children:C.name}),u.jsx("span",{className:"text-[10px] bg-[#1a170e] text-[#e5c05d] px-2 py-0.5 rounded border border-[#d4af37]/40 font-mono font-bold",children:"1 bico Saponificante"})]}),u.jsx("button",{onClick:()=>S(_,I),className:"p-1 text-gray-400 hover:text-red-400 transition-colors",title:"Remover equipamento",children:u.jsx($0,{className:"w-3.5 h-3.5"})})]},C.id))}),u.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-1.5",children:[u.jsxs("button",{onClick:()=>v(_,"fritadeira"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[u.jsx(Uo,{className:"w-3 h-3 text-[#d4af37]"}),u.jsx("span",{children:"+ Fritadeira"})]}),u.jsxs("button",{onClick:()=>v(_,"fogao"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[u.jsx(Uo,{className:"w-3 h-3 text-[#d4af37]"}),u.jsx("span",{children:"+ Fogão"})]}),u.jsxs("button",{onClick:()=>v(_,"chapa"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[u.jsx(Uo,{className:"w-3 h-3 text-[#d4af37]"}),u.jsx("span",{children:"+ Chapa"})]}),u.jsxs("button",{onClick:()=>v(_,"charbroiler"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[u.jsx(Uo,{className:"w-3 h-3 text-[#d4af37]"}),u.jsx("span",{children:"+ Grelha"})]})]})]})]},y.id))]}),u.jsx("div",{className:"lg:col-span-7 space-y-6",children:u.jsxs("div",{className:"glass-panel p-6 rounded-3xl border border-white/10 overflow-hidden shadow-2xl relative",children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"}),u.jsx("h3",{className:"font-bold text-white text-base font-sans",children:"Diagrama Esquemático da sua Cozinha"})]}),u.jsx("span",{className:"text-[11px] font-mono text-gray-400 bg-black/40 px-2 py-1 rounded-lg border border-white/5",children:"RENDERIZADO EM TEMPO REAL"})]}),u.jsxs("div",{className:"relative w-full aspect-[16/9] bg-[#0d0f14] rounded-2xl border border-white/10 p-4 flex flex-col justify-between overflow-hidden",children:[u.jsx("div",{className:"absolute inset-0 opacity-15 pointer-events-none",style:{backgroundImage:"radial-gradient(circle, #4a5568 1px, transparent 1px)",backgroundSize:"20px 20px"}}),u.jsxs("svg",{className:"w-full h-auto",viewBox:"0 0 940 430",children:[u.jsxs("defs",{children:[u.jsxs("linearGradient",{id:"chromeGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[u.jsx("stop",{offset:"0%",stopColor:"#475569"}),u.jsx("stop",{offset:"25%",stopColor:"#cbd5e1"}),u.jsx("stop",{offset:"50%",stopColor:"#ffffff"}),u.jsx("stop",{offset:"75%",stopColor:"#e2e8f0"}),u.jsx("stop",{offset:"100%",stopColor:"#334155"})]}),u.jsxs("linearGradient",{id:"co2Grad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[u.jsx("stop",{offset:"0%",stopColor:"#7f1d1d"}),u.jsx("stop",{offset:"25%",stopColor:"#dc2626"}),u.jsx("stop",{offset:"50%",stopColor:"#ef4444"}),u.jsx("stop",{offset:"80%",stopColor:"#b91c1c"}),u.jsx("stop",{offset:"100%",stopColor:"#7f1d1d"})]}),u.jsxs("linearGradient",{id:"ductGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[u.jsx("stop",{offset:"0%",stopColor:"#334155"}),u.jsx("stop",{offset:"50%",stopColor:"#64748b"}),u.jsx("stop",{offset:"100%",stopColor:"#334155"})]}),u.jsxs("linearGradient",{id:"hoodGrad",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:"#334155"}),u.jsx("stop",{offset:"50%",stopColor:"#1e293b"}),u.jsx("stop",{offset:"100%",stopColor:"#0f172a"})]}),u.jsxs("linearGradient",{id:"damperGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:"#991b1b"}),u.jsx("stop",{offset:"50%",stopColor:"#dc2626"}),u.jsx("stop",{offset:"100%",stopColor:"#7f1d1d"})]}),u.jsxs("linearGradient",{id:"centralGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:"#181a20"}),u.jsx("stop",{offset:"50%",stopColor:"#111317"}),u.jsx("stop",{offset:"100%",stopColor:"#0a0c0f"})]}),u.jsxs("linearGradient",{id:"goldGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[u.jsx("stop",{offset:"0%",stopColor:"#b45309"}),u.jsx("stop",{offset:"50%",stopColor:"#f59e0b"}),u.jsx("stop",{offset:"100%",stopColor:"#d97706"})]})]}),u.jsx("rect",{x:"140",y:"24",width:"600",height:"34",fill:"url(#ductGrad)",stroke:"#94a3b8",strokeWidth:"1.5"}),u.jsxs("g",{fill:"#94a3b8",opacity:"0.6",children:[u.jsx("text",{x:"240",y:"44",fontSize:"10",fontWeight:"bold",letterSpacing:"3",children:"» » »"}),u.jsx("text",{x:"440",y:"44",fontSize:"10",fontWeight:"bold",letterSpacing:"3",children:"» » FLUXO DE EXAUSTÃO » »"}),u.jsx("text",{x:"640",y:"44",fontSize:"10",fontWeight:"bold",letterSpacing:"3",children:"» » »"})]}),Array.from({length:M.co2NozzlesCount}).map((y,_)=>{const C=180+_*(500/Math.max(1,M.co2NozzlesCount));return u.jsxs("g",{children:[u.jsx("line",{x1:C,y1:"24",x2:C,y2:"38",stroke:"#ef4444",strokeWidth:"2"}),u.jsx("circle",{cx:C,cy:"38",r:"5",fill:"#ef4444",stroke:"#ffffff",strokeWidth:"1.2"}),u.jsx("polygon",{points:`${C-4},43 ${C+4},43 ${C},49`,fill:"#ef4444",opacity:"0.8"}),u.jsx("text",{x:C,y:"19",fill:"#fca5a5",fontSize:"7",fontWeight:"bold",textAnchor:"middle",children:"CO2"}),u.jsx("rect",{x:C+14,y:"33",width:"9",height:"9",fill:"#a855f7",stroke:"#ffffff",strokeWidth:"1",transform:`rotate(45, ${C+18.5}, 37.5)`}),u.jsx("text",{x:C+18.5,y:"19",fill:"#d8b4fe",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"300°C"})]},`co2-duct-${_}`)}),u.jsx("rect",{x:"735",y:"16",width:"22",height:"50",fill:"#1e293b",stroke:"#cbd5e1",strokeWidth:"1.5",rx:"3"}),u.jsx("circle",{cx:"746",cy:"41",r:"9",fill:"#0f172a",stroke:"#94a3b8",strokeWidth:"1"}),u.jsx("path",{d:"M 746 34 L 746 48 M 739 41 L 753 41",stroke:"#38bdf8",strokeWidth:"1.5"}),u.jsx("text",{x:"746",y:"11",fill:"#94a3b8",fontSize:"7",fontWeight:"bold",textAnchor:"middle",children:"EXAUSTOR"}),u.jsxs("g",{id:"cilindro-co2",children:[u.jsx("path",{d:"M 780 40 L 780 20 L 740 20 L 740 24",fill:"none",stroke:"#ef4444",strokeWidth:"2.5"}),u.jsx("rect",{x:"774",y:"30",width:"12",height:"12",fill:"#1e293b",stroke:"#ef4444",strokeWidth:"1"}),u.jsx("rect",{x:"776",y:"42",width:"8",height:"10",fill:"#d97706",stroke:"#f59e0b",strokeWidth:"0.8"}),u.jsx("circle",{cx:"780",cy:"40",r:"4",fill:"#f59e0b"}),u.jsx("path",{d:"M 768 62 C 768 48, 792 48, 792 62 Z",fill:"url(#co2Grad)",stroke:"#fca5a5",strokeWidth:"1"}),u.jsx("rect",{x:"768",y:"60",width:"24",height:"85",rx:"3",fill:"url(#co2Grad)",stroke:"#fca5a5",strokeWidth:"1.2"}),u.jsx("rect",{x:"767",y:"145",width:"26",height:"5",rx:"2",fill:"#1e293b",stroke:"#7f1d1d",strokeWidth:"1"}),u.jsx("rect",{x:"770",y:"80",width:"20",height:"36",fill:"#1e293b",rx:"2",opacity:"0.9"}),u.jsx("text",{x:"780",y:"92",fill:"#ef4444",fontSize:"7",fontWeight:"bold",textAnchor:"middle",children:"CO2"}),u.jsxs("text",{x:"780",y:"102",fill:"#ffffff",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:[M.recommendedCo2CylinderKg,"kg"]}),u.jsx("text",{x:"780",y:"111",fill:"#94a3b8",fontSize:"4.5",textAnchor:"middle",children:"NBR 14518"}),u.jsx("text",{x:"780",y:"162",fill:"#fca5a5",fontSize:"7.5",fontWeight:"bold",textAnchor:"middle",children:"CILINDRO CO2"}),u.jsx("text",{x:"780",y:"171",fill:"#94a3b8",fontSize:"6.5",textAnchor:"middle",children:"(DUTO / EXAUSTÃO)"})]}),u.jsxs("g",{id:"cilindro-saponificante",children:[u.jsx("path",{d:"M 46 160 L 46 122 L 95 122",fill:"none",stroke:"#d4af37",strokeWidth:"3"}),u.jsx("rect",{x:"42",y:"160",width:"8",height:"12",fill:"#d97706",stroke:"#f59e0b",strokeWidth:"1"}),u.jsx("circle",{cx:"46",cy:"158",r:"4.5",fill:"#f59e0b"}),u.jsx("circle",{cx:"36",cy:"166",r:"6.5",fill:"#ffffff",stroke:"#334155",strokeWidth:"1.2"}),u.jsx("path",{d:"M 33 166 A 3.5 3.5 0 0 1 39 166",fill:"none",stroke:"#22c55e",strokeWidth:"1.5"}),u.jsx("line",{x1:"36",y1:"166",x2:"38",y2:"163",stroke:"#dc2626",strokeWidth:"1"}),u.jsx("path",{d:"M 28 184 C 28 168, 64 168, 64 184 Z",fill:"url(#chromeGrad)",stroke:"#cbd5e1",strokeWidth:"1.2"}),u.jsx("rect",{x:"28",y:"182",width:"36",height:"135",rx:"3",fill:"url(#chromeGrad)",stroke:"#cbd5e1",strokeWidth:"1.5"}),u.jsx("rect",{x:"26",y:"317",width:"40",height:"7",rx:"2",fill:"#1e293b",stroke:"#64748b",strokeWidth:"1"}),u.jsx("rect",{x:"31",y:"215",width:"30",height:"52",fill:"#0f172a",rx:"3",stroke:"#d4af37",strokeWidth:"0.8",opacity:"0.95"}),u.jsx("text",{x:"46",y:"228",fill:"#d4af37",fontSize:"6",fontWeight:"bold",textAnchor:"middle",children:"OUTFIRE"}),u.jsx("text",{x:"46",y:"238",fill:"#ffffff",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"CLASSE K"}),u.jsxs("text",{x:"46",y:"250",fill:"#38bdf8",fontSize:"8",fontWeight:"bold",textAnchor:"middle",children:[M.recommendedSaponificanteCylinderLiters,"L"]}),u.jsx("text",{x:"46",y:"260",fill:"#94a3b8",fontSize:"5",textAnchor:"middle",children:"INOX 304"}),u.jsx("text",{x:"46",y:"337",fill:"#fef08a",fontSize:"7.5",fontWeight:"bold",textAnchor:"middle",children:"SAPONIFICANTE"}),u.jsx("text",{x:"46",y:"347",fill:"#cbd5e1",fontSize:"6.5",textAnchor:"middle",children:"(CROMADO / INOX)"})]}),f.slice(0,e).map((y,_)=>{const C=e,I=635,P=C===1?0:C===2?30:18,U=(I-(C-1)*P)/C,L=95+_*(U+P),O=C===1?84:C===2?65:52,j=L+(U-O)/2,b=O+16,R=j-8,z=66,$=38,Q=y.appliances.length>0?y.appliances:[{id:`app-${_}`,name:"Fogão/Cocção",type:"fogao",icon:"🍳",widthMeters:.9}];return u.jsxs("g",{children:[u.jsx("rect",{x:j,y:"58",width:O,height:"60",fill:"url(#ductGrad)",stroke:"#94a3b8",strokeWidth:"1.5"}),u.jsxs("g",{id:`damper-${_}`,children:[u.jsx("rect",{x:R-2,y:z,width:b+4,height:"4",fill:"#475569",stroke:"#94a3b8",strokeWidth:"0.8"}),u.jsx("rect",{x:R-2,y:z+$-4,width:b+4,height:"4",fill:"#475569",stroke:"#94a3b8",strokeWidth:"0.8"}),u.jsx("rect",{x:R,y:z+3,width:b,height:$-6,fill:"url(#damperGrad)",stroke:"#fecaca",strokeWidth:"1.2",rx:"3"}),u.jsx("rect",{x:R+b-2,y:z+7,width:"12",height:"18",fill:"#0f172a",stroke:"#cbd5e1",strokeWidth:"1",rx:"2"}),u.jsx("circle",{cx:R+b+4,cy:z+16,r:"2.5",fill:"#eab308"}),u.jsxs("text",{x:R+b/2,y:z+18,fill:"#ffffff",fontSize:C===3?"7":"8",fontWeight:"bold",textAnchor:"middle",children:["DAMPER ",C>1?`#${_+1}`:""]}),u.jsx("text",{x:R+b/2,y:z+27,fill:"#fca5a5",fontSize:C===3?"5.5":"6.5",fontWeight:"bold",textAnchor:"middle",children:"CORTA-FOGO"})]}),u.jsx("line",{x1:_===0?95:L-P,y1:"122",x2:L+U-10,y2:"122",stroke:"#d4af37",strokeWidth:"2.5"}),u.jsx("polygon",{points:`${L},158 ${L+U*.12},118 ${L+U*.88},118 ${L+U},158`,fill:"url(#hoodGrad)",stroke:"#cbd5e1",strokeWidth:"1.8"}),u.jsx("rect",{x:L,y:"158",width:U,height:"20",fill:"#1e293b",stroke:"#cbd5e1",strokeWidth:"1.2"}),u.jsxs("text",{x:L+U/2,y:"172",fill:"#f8fafc",fontSize:C===3?"8":"9.5",fontWeight:"bold",textAnchor:"middle",letterSpacing:"1",children:["COIFA ",C>1?`${_+1}`:"INOX"," (",y.lengthMeters,"m - SETOR ",_+1,")"]}),u.jsxs("g",{children:[u.jsx("circle",{cx:L+U*.25,cy:"138",r:"5",fill:"#d4af37",stroke:"#ffffff",strokeWidth:"1.2"}),u.jsx("text",{x:L+U*.25,y:"132",fill:"#fef08a",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"PLENO 1"}),u.jsx("circle",{cx:L+U*.75,cy:"138",r:"5",fill:"#d4af37",stroke:"#ffffff",strokeWidth:"1.2"}),u.jsx("text",{x:L+U*.75,y:"132",fill:"#fef08a",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"PLENO 2"})]}),Array.from({length:Math.max(1,Math.round(y.lengthMeters/.9))}).map((re,se,te)=>{const q=L+25+se*((U-50)/Math.max(1,te.length-1||1));return u.jsxs("g",{children:[u.jsx("circle",{cx:q,cy:"150",r:"4",fill:"#ea580c",stroke:"#ffffff",strokeWidth:"1"}),u.jsx("text",{x:q,y:"164",fill:"#fdba74",fontSize:"6",fontWeight:"bold",textAnchor:"middle",children:"145°"})]},`sensor-h-${_}-${se}`)}),u.jsx("rect",{x:L,y:"240",width:U,height:"85",fill:"#0f172a",stroke:"#334155",strokeWidth:"1.2",rx:"3"}),Q.map((re,se)=>{const te=Q.length,q=(U-12)/te,X=L+6+se*q,pe=q-6;return u.jsxs("g",{children:[u.jsx("rect",{x:X,y:"245",width:pe,height:"75",fill:"#1e293b",stroke:"#475569",strokeWidth:"1",rx:"3"}),u.jsx("text",{x:X+pe/2,y:"272",fill:"#ffffff",fontSize:C===3?"7":"8.5",fontWeight:"bold",textAnchor:"middle",children:re.name.split(" ")[0]}),u.jsx("text",{x:X+pe/2,y:"286",fill:"#94a3b8",fontSize:C===3?"5.5":"6.5",textAnchor:"middle",children:re.type.toUpperCase()}),u.jsx("line",{x1:X+pe/2,y1:"178",x2:X+pe/2,y2:"225",stroke:"#d4af37",strokeWidth:"2"}),u.jsx("polygon",{points:`${X+pe/2-4},225 ${X+pe/2+4},225 ${X+pe/2},233`,fill:"#d4af37"}),u.jsx("text",{x:X+pe/2,y:"220",fill:"#fef08a",fontSize:"6",fontWeight:"bold",textAnchor:"middle",children:"BICOK"})]},re.id||`app-${_}-${se}`)})]},`hood-block-${y.id||_}`)}),u.jsxs("g",{id:"central-outfire-diagrama",children:[u.jsx("path",{d:"M 770 200 L 710 200 L 710 85 L 680 85",fill:"none",stroke:"#38bdf8",strokeWidth:"1.5",strokeDasharray:"3 3"}),u.jsx("path",{d:"M 770 330 L 740 330 L 740 375 L 300 375",fill:"none",stroke:"#eab308",strokeWidth:"1.5",strokeDasharray:"3 3"}),u.jsx("path",{d:"M 780 185 L 780 160",fill:"none",stroke:"#ef4444",strokeWidth:"1.5",strokeDasharray:"3 3"}),u.jsx("rect",{x:"765",y:"188",width:"155",height:"152",rx:"6",fill:"url(#centralGrad)",stroke:"#d4af37",strokeWidth:"1.8"}),u.jsx("rect",{x:"780",y:"184",width:"125",height:"6",rx:"1.5",fill:"#1f232b",stroke:"#94a3b8",strokeWidth:"0.8"}),u.jsx("circle",{cx:"788",cy:"187",r:"1.5",fill:"#cbd5e1"}),u.jsx("circle",{cx:"805",cy:"187",r:"1.5",fill:"#cbd5e1"}),u.jsx("circle",{cx:"880",cy:"187",r:"1.5",fill:"#cbd5e1"}),u.jsx("circle",{cx:"897",cy:"187",r:"1.5",fill:"#cbd5e1"}),u.jsx("rect",{x:"790",y:"338",width:"105",height:"6",rx:"1.5",fill:"#1f232b",stroke:"#94a3b8",strokeWidth:"0.8"}),u.jsx("circle",{cx:"798",cy:"341",r:"1.5",fill:"#cbd5e1"}),u.jsx("circle",{cx:"815",cy:"341",r:"1.5",fill:"#cbd5e1"}),u.jsx("circle",{cx:"870",cy:"341",r:"1.5",fill:"#cbd5e1"}),u.jsx("circle",{cx:"887",cy:"341",r:"1.5",fill:"#cbd5e1"}),u.jsx("text",{x:"842",y:"206",fill:"#f59e0b",fontSize:"9",fontWeight:"bold",textAnchor:"middle",letterSpacing:"1.5",children:"OUTFIRE"}),u.jsx("polygon",{points:"842,192 846,197 842,201 838,197",fill:"#f59e0b"}),u.jsxs("g",{transform:"translate(772, 218)",children:[u.jsx("rect",{x:"0",y:"0",width:"22",height:"22",fill:"#0f172a",stroke:"#d4af37",strokeWidth:"0.8"}),u.jsx("rect",{x:"3",y:"3",width:"5",height:"5",fill:"#d4af37"}),u.jsx("rect",{x:"14",y:"3",width:"5",height:"5",fill:"#d4af37"}),u.jsx("rect",{x:"3",y:"14",width:"5",height:"5",fill:"#d4af37"}),u.jsx("rect",{x:"10",y:"10",width:"3",height:"3",fill:"#d4af37"})]}),u.jsx("rect",{x:"798",y:"215",width:"114",height:"74",rx:"3",fill:"#061317",stroke:"#38bdf8",strokeWidth:"1"}),u.jsx("rect",{x:"798",y:"215",width:"114",height:"12",fill:"#0284c7"}),u.jsx("text",{x:"803",y:"224",fill:"#ffffff",fontSize:"6",fontWeight:"bold",children:"10/05 15:42"}),u.jsx("circle",{cx:"906",cy:"221",r:"2.5",fill:"#22c55e",stroke:"#ffffff",strokeWidth:"0.5"}),u.jsx("rect",{x:"801",y:"229",width:"25",height:"11",fill:"#15803d",rx:"1"}),u.jsx("text",{x:"813.5",y:"237",fill:"#ffffff",fontSize:"4.5",fontWeight:"bold",textAnchor:"middle",children:"EXAUST OK"}),u.jsx("rect",{x:"828",y:"229",width:"25",height:"11",fill:"#15803d",rx:"1"}),u.jsx("text",{x:"840.5",y:"237",fill:"#ffffff",fontSize:"4.5",fontWeight:"bold",textAnchor:"middle",children:"ENERG OK"}),u.jsx("rect",{x:"855",y:"229",width:"25",height:"11",fill:"#15803d",rx:"1"}),u.jsx("text",{x:"867.5",y:"237",fill:"#ffffff",fontSize:"4.5",fontWeight:"bold",textAnchor:"middle",children:"GÁS OK"}),u.jsx("rect",{x:"882",y:"229",width:"25",height:"11",fill:"#15803d",rx:"1"}),u.jsx("text",{x:"894.5",y:"237",fill:"#ffffff",fontSize:"4.5",fontWeight:"bold",textAnchor:"middle",children:"DAMP OK"}),u.jsx("rect",{x:"803",y:"243",width:"50",height:"14",fill:"#1d4ed8",rx:"2"}),u.jsx("text",{x:"828",y:"253",fill:"#ffffff",fontSize:"5.5",fontWeight:"bold",textAnchor:"middle",children:"SETORES"}),u.jsx("rect",{x:"857",y:"243",width:"50",height:"14",fill:"#1d4ed8",rx:"2"}),u.jsx("text",{x:"882",y:"253",fill:"#ffffff",fontSize:"5.5",fontWeight:"bold",textAnchor:"middle",children:"CONTROLE GÁS"}),u.jsx("rect",{x:"803",y:"260",width:"50",height:"14",fill:"#1d4ed8",rx:"2"}),u.jsx("text",{x:"828",y:"270",fill:"#ffffff",fontSize:"5.5",fontWeight:"bold",textAnchor:"middle",children:"REARMAR"}),u.jsx("rect",{x:"857",y:"260",width:"50",height:"14",fill:"#1d4ed8",rx:"2"}),u.jsx("text",{x:"882",y:"270",fill:"#ffffff",fontSize:"5.5",fontWeight:"bold",textAnchor:"middle",children:"CONFIG"}),u.jsx("rect",{x:"798",y:"277",width:"114",height:"12",fill:"#0284c7"}),u.jsx("text",{x:"855",y:"286",fill:"#ffffff",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"SISTEMA OPERANTE"}),u.jsx("rect",{x:"769",y:"300",width:"147",height:"24",fill:"#b91c1c",rx:"2"}),u.jsx("text",{x:"842",y:"311",fill:"#ffffff",fontSize:"6",fontWeight:"bold",textAnchor:"middle",children:"EM CASO DE INCÊNDIO EVACUAR O LOCAL"}),u.jsx("text",{x:"842",y:"319",fill:"#fef08a",fontSize:"5",fontWeight:"bold",textAnchor:"middle",children:"SUPORTE: (15) 98157-7847 / OUTFIRE.COM.BR"}),u.jsx("text",{x:"842",y:"360",fill:"#f59e0b",fontSize:"8",fontWeight:"bold",textAnchor:"middle",children:"CENTRAL VTS 32S3"}),u.jsxs("text",{x:"842",y:"370",fill:"#94a3b8",fontSize:"6.5",textAnchor:"middle",children:["(",e," Coifa",e>1?"s":""," Independentes)"]})]}),u.jsx("line",{x1:"90",y1:"385",x2:"740",y2:"385",stroke:"#eab308",strokeWidth:"3"}),u.jsx("rect",{x:"260",y:"374",width:"45",height:"22",fill:"#b91c1c",stroke:"#fecaca",strokeWidth:"1",rx:"2"}),u.jsx("rect",{x:"277",y:"366",width:"11",height:"9",fill:"#1e293b",stroke:"#eab308",strokeWidth:"0.8"}),u.jsx("text",{x:"282.5",y:"388",fill:"#ffffff",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"VÁLVULA GÁS"}),u.jsx("text",{x:"282.5",y:"405",fill:"#fef08a",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"CORTE INSTANTÂNEO"})]}),u.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-x-4 gap-y-2 pt-3 border-t border-white/10 text-[10.5px] text-gray-300",children:[u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-[#d4af37]"}),u.jsx("span",{children:"Bico Saponificante (Classe K)"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-2.5 h-4 rounded-sm bg-gradient-to-b from-gray-200 to-gray-400 border border-white/50"}),u.jsx("span",{children:"Cilindro Saponificante (Inox)"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-red-500"}),u.jsx("span",{children:"Bico CO2 Duto"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-2.5 h-4 rounded-sm bg-red-600 border border-red-300"}),u.jsx("span",{children:"Cilindro CO2 (Vermelho)"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-amber-500"}),u.jsx("span",{children:"Sensor 145°C Coifa"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-purple-500"}),u.jsx("span",{children:"Sensor 300°C Duto"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-3 h-2.5 rounded-sm bg-red-700 border border-red-300"}),u.jsx("span",{children:"Damper Corta-Fogo (Acima da Coifa)"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-3 h-3 rounded-sm bg-black border border-amber-400"}),u.jsx("span",{children:"Central Outfire VTS 32S3"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-3 h-2 rounded-sm bg-red-600 border border-amber-300"}),u.jsx("span",{children:"Válvula de Gás (Corte Automático)"})]})]})]}),u.jsxs("div",{className:"mt-6 space-y-3",children:[u.jsxs("h4",{className:"text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2",children:[u.jsx(ps,{className:"w-4 h-4 text-emerald-400"}),u.jsx("span",{children:"Resumo do Dimensionamento Técnico (BOM)"})]}),u.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Bicos Saponificante"}),u.jsxs("span",{className:"text-lg font-black text-amber-400 font-mono",children:[M.totalSaponificanteNozzles," un"]}),u.jsxs("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:["(",M.saponificanteLiters,"L calculados)"]})]}),u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Cilindro Saponificante"}),u.jsxs("span",{className:"text-lg font-black text-amber-400 font-mono",children:[M.recommendedSaponificanteCylinderLiters," L"]}),u.jsx("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:"Mínimo de 9L"})]}),u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Bicos de CO2 (Duto)"}),u.jsxs("span",{className:"text-lg font-black text-cyan-400 font-mono",children:[M.co2NozzlesCount," un"]}),u.jsx("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:"(1 a cada 3m de duto)"})]}),u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Cilindro de CO2"}),u.jsxs("span",{className:"text-lg font-black text-cyan-400 font-mono",children:[M.recommendedCo2CylinderKg," Kg"]}),u.jsx("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:"Mínimo de 10kg"})]})]}),u.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3",children:[u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Sensores Coifa (145°C)"}),u.jsxs("span",{className:"text-base font-bold text-white font-mono",children:[M.hoodSensorsCount," un (1/metro)"]})]}),u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Sensores Duto (300°C)"}),u.jsxs("span",{className:"text-base font-bold text-white font-mono",children:[M.ductSensorsCount," un (1 a cada 3m)"]})]}),u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5 col-span-2 sm:col-span-1",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Intertravamento Total"}),u.jsx("span",{className:"text-xs font-bold text-emerald-400 block",children:"Gás + Exaustão + Damper"})]})]})]}),u.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4",children:[u.jsxs("button",{onClick:T,className:"flex-1 py-4 px-6 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-bold rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 group",children:[u.jsx(Fr,{className:"w-5 h-5 group-hover:scale-110 transition-transform"}),u.jsx("span",{children:"Enviar Orçamento para WhatsApp"})]}),u.jsxs("button",{onClick:A,className:"py-4 px-6 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black rounded-2xl shadow-glow-gold transition-all flex items-center justify-center gap-2",children:[u.jsx(_v,{className:"w-5 h-5 fill-black"}),u.jsx("span",{children:"Comprar Kit na Loja"})]})]}),u.jsx("p",{className:"text-center text-xs text-gray-400 mt-3",children:"*O projeto inclui memória de cálculo e documentação pronta para laudo ART e vistoria do Corpo de Bombeiros."})]})})]})]})})},Tb=[{id:"central-outfire-vts-1",sku:"OUT-VTS-1C",name:"Central Outfire VTS 32S3 - 1 Coifa (Kit Completo)",category:"kit",priceBRL:8900,description:"Sistema completo integrado de CO2 e Saponificante Classe K para 1 coifa industrial. Acompanha IHM touchscreen colorida, cilindro saponificante 9L, cilindro CO2 10kg, bicos de inox, sensores térmicos reguláveis e intertravamento de gás.",image:"/assets/central-outfire-fundo-removido.png",specs:["Controle autônomo para 1 coifa","IHM Touchscreen colorida com avisos de voz","1x Cilindro Saponificante 9 Litros Classe K","1x Cilindro CO2 10 Kg com cabeçote solenoide","Intertravamento de Gás e Exaustor","Certificação em conformidade com NBR 14518"],featured:!0,inStock:!0},{id:"central-outfire-vts-2",sku:"OUT-VTS-2C",name:"Central Outfire VTS 32S3 - 2 Coifas (Atuação Independente)",category:"kit",priceBRL:14500,description:"Sistema de supressão inteligente para cozinhas de médio/grande porte com 2 coifas independentes. Se disparar a Coifa 1, a Coifa 2 continua operando com segurança.",image:"/assets/central-outfire-instalada.jpg",specs:["Controle independente para até 2 coifas","IHM Touchscreen com monitoramento individual por setor","2x Cilindros Saponificante (dimensionados sob medida)","Cilindros de CO2 dedicados para cada duto","Contagem regressiva de segurança anti-disparo acidental","Agenda semanal para abertura e corte automático de gás"],featured:!0,inStock:!0},{id:"central-outfire-vts-3",sku:"OUT-VTS-3C",name:"Central Outfire VTS 32S3 - 3 Coifas (Linha Master Industrial)",category:"kit",priceBRL:19800,description:"A mais avançada central de combate a incêndio em cozinhas profissionais do Brasil. Monitora e protege até 3 coifas simultâneas de forma 100% autônoma e setorizada.",image:"/assets/central-outfire-ihm.jpg",specs:["Controle simultâneo e independente de 3 coifas","Acionamento individual de dampers e CO2 por duto","Alertas de voz falada de alta potência","Histórico completo de eventos e diagnósticos de vazamento","Interface para integração com Alarme Predial de Shoppings","Atende plenamente ABNT NBR 14518, NFPA 96 e NFPA 17A"],featured:!0,inStock:!0},{id:"bico-saponificante-inox",sku:"OUT-BIC-SAP",name:"Bico Aspersor de Inox para Saponificante (Classe K)",category:"bicos",priceBRL:185,description:"Bico difusor de alta vazão em aço inoxidável 304 com rosca NPT. Acompanha capa protetora de borracha/silicone de alta temperatura contra acúmulo de gordura.",image:"/assets/central-outfire-interno.jpg",specs:["Material: Aço Inoxidável 304 polido",'Rosca: 3/8" ou 1/2" NPT',"Ângulo de abertura especial para cubas e filtros","Capa protetora com cordão de retenção inclusa"],featured:!1,inStock:!0},{id:"bico-co2-duto",sku:"OUT-BIC-CO2",name:"Bico Difusor de CO2 para Dutos de Exaustão",category:"bicos",priceBRL:210,description:"Bico de alta pressão calibrado para inundação total de CO2 dentro da linha de dutos, eliminando o oxigênio rapidamente.",image:"/assets/central-outfire-interno.jpg",specs:["Inundação rápida em alta pressão","Rosca NPT padronizada","Resistente a calor contínuo de até 400°C"],featured:!1,inStock:!0},{id:"sensor-coifa-145c",sku:"OUT-SNS-145",name:"Sensor Térmico Regulável para Coifa (Calibrado 145°C)",category:"sensores",priceBRL:295,description:"Sensor eletromecânico e termostático de precisão em aço inox para monitoramento de temperatura na zona de cocção.",image:"/assets/central-outfire-interno.jpg",specs:["Faixa de regulagem: 50°C a 200°C (ajustado em 145°C)","Haste blindada em inox resistente a vapores e gordura","Contato seco normalmente aberto/fechado","Cabo de alta temperatura blindado em malha metálica"],featured:!1,inStock:!0},{id:"sensor-duto-300c",sku:"OUT-SNS-300",name:"Sensor Térmico Regulável para Duto (Calibrado 300°C)",category:"sensores",priceBRL:320,description:"Sensor de alta temperatura para detecção de fogo na linha de duto de exaustão e acionamento instantâneo de CO2 e dampers.",image:"/assets/central-outfire-interno.jpg",specs:["Faixa de operação: até 350°C (ajustado em 300°C)","Instalação externa com sonda inserida no duto","Conexão estanque anti-vazamento de óleo"],featured:!1,inStock:!0},{id:"recarga-saponificante-9l",sku:"OUT-AG-SAP9",name:"Galão Agente Saponificante Classe K Outfire (9 Litros)",category:"cilindro",priceBRL:680,description:"Composto líquido à base de sais orgânicos e acetato de potássio formulado especificamente para saponificação imediata de óleos vegetais e gorduras animais.",image:"/assets/central-outfire-fundo-removido.png",specs:["Volume: 9 Litros líquidos","Ação de saponificação com espuma refrigerante espessa","Não tóxico e biodegradável","Laudo técnico de conformidade para bombeiros"],featured:!1,inStock:!0},{id:"valvula-gas-solenoide-1pol",sku:"OUT-VLV-GAS1",name:'Válvula Solenoide de Corte Rápido de Gás 1" (Bivolt)',category:"valvulas",priceBRL:840,description:"Válvula de corte de segurança para linha de GLP / Gás Natural. Fecha instantaneamente ao menor sinal de disparo ou vazamento de gás.",image:"/assets/central-outfire-interno.jpg",specs:["Diâmetro: 1 polegada BSP/NPT","Rearme manual para segurança obrigatória","Corpo em latão forjado de alta resistência","Compatível com GLP e Gás Natural encanado"],featured:!1,inStock:!0},{id:"damper-corta-fogo-motorizado",sku:"OUT-DMP-CF",name:"Damper Corta-Fogo Motorizado com Mola de Retorno",category:"acessorios",priceBRL:1250,description:"Damper para isolamento mecânico de dutos de coifa. Fecha automaticamente no disparo de CO2 para aprisionar o gás e sufocar o incêndio.",image:"/assets/central-outfire-interno.jpg",specs:["Lâminas corta-fogo com vedação hermética","Atuador 24V com retorno por mola mecânica","Resistência ao fogo: 120 minutos (TRRF 120)","Microswitch de confirmação de fechamento"],featured:!1,inStock:!0},{id:"acionador-manual-pull",sku:"OUT-ACT-MAN",name:"Estação de Disparo Manual de Emergência (Tipo Puxador)",category:"acessorios",priceBRL:310,description:"Acionador de emergência de dupla ação em caixa metálica amarela/vermelha com lacre e trava de segurança.",image:"/assets/central-outfire-fundo-removido.png",specs:["Acionamento mecânico e elétrico simultâneo","Pintura eletrostática de alta visibilidade","Trava de segurança para impedir toque acidental"],featured:!1,inStock:!0}],Cb=({onAddToCart:s})=>{const[e,t]=Ue.useState("all"),[r,o]=Ue.useState(""),l=[{id:"all",name:"Todos os Produtos"},{id:"kit",name:"Sistemas Completos"},{id:"bicos",name:"Bicos de Aspersão"},{id:"sensores",name:"Sensores Reguláveis"},{id:"cilindro",name:"Cilindros & Recargas"},{id:"valvulas",name:"Válvulas de Gás"},{id:"acessorios",name:"Acessórios & Acionadores"}],d=Tb.filter(p=>{const m=e==="all"||p.category===e,x=p.name.toLowerCase().includes(r.toLowerCase())||p.description.toLowerCase().includes(r.toLowerCase())||p.sku.toLowerCase().includes(r.toLowerCase());return m&&x}),f=p=>{const m=`Olá! Gostaria de comprar ou solicitar proposta para o produto:
*${p.name}* (SKU: ${p.sku})
Valor: R$ ${p.priceBRL.toLocaleString("pt-BR")},00.
Poderia me passar os prazos de entrega e condições de faturamento?`;window.open(`https://wa.me/5515996576807?text=${encodeURIComponent(m)}`,"_blank")};return u.jsx("section",{id:"loja",className:"py-24 bg-[#08090c] relative",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide mb-4",children:[u.jsx(Mc,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Loja Oficial Outfire"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Sistemas Completos & ",u.jsx("br",{}),u.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"Peças de Reposição Certificadas"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Adquira o sistema completo para sua cozinha ou componentes avulsos para manutenção preventiva. Entrega expressa para todo o Brasil com nota fiscal e laudos de conformidade técnica."})]}),u.jsxs("div",{className:"flex flex-col lg:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10",children:[u.jsx("div",{className:"flex flex-wrap items-center gap-2 w-full lg:w-auto",children:l.map(p=>u.jsx("button",{onClick:()=>t(p.id),className:`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${e===p.id?"bg-[#d4af37] text-black shadow-glow-gold":"bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5"}`,children:p.name},p.id))}),u.jsxs("div",{className:"relative w-full lg:w-72",children:[u.jsx(Uv,{className:"w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2"}),u.jsx("input",{type:"text",placeholder:"Buscar bicos, sensores, cilindros...",value:r,onChange:p=>o(p.target.value),className:"w-full bg-[#12141a] border border-[#d4af37]/20 text-white text-xs rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-[#d4af37] transition-colors"})]})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:d.map(p=>u.jsxs("div",{className:"glass-panel-gold rounded-3xl border border-[#d4af37]/25 hover:border-[#d4af37]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 shadow-lg",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"relative w-full h-56 bg-gradient-to-br from-[#171a22] to-[#0a0c10] p-6 flex items-center justify-center overflow-hidden border-b border-white/5",children:[u.jsx("img",{src:p.image,alt:p.name,className:"max-h-full max-w-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-500"}),u.jsxs("div",{className:"absolute top-3 left-3 flex flex-col gap-1.5",children:[p.featured&&u.jsxs("span",{className:"bg-gradient-to-r from-[#d4af37] to-[#e5c05d] text-black text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-glow-gold flex items-center gap-1",children:[u.jsx(Ho,{className:"w-3 h-3 fill-black"}),"Mais Vendido"]}),u.jsxs("span",{className:"bg-black/80 backdrop-blur-md text-[#f3e5ab] text-[10px] font-mono px-2 py-0.5 rounded border border-[#d4af37]/30",children:["SKU: ",p.sku]})]}),u.jsx("span",{className:"absolute bottom-3 right-3 text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800",children:"Pronta Entrega"})]}),u.jsxs("div",{className:"p-6",children:[u.jsx("h3",{className:"text-lg font-bold text-white mb-2 font-sans line-clamp-1",children:p.name}),u.jsx("p",{className:"text-xs text-gray-400 leading-relaxed mb-4 line-clamp-2",children:p.description}),u.jsx("div",{className:"space-y-1.5 mb-6",children:p.specs.slice(0,3).map((m,x)=>u.jsxs("div",{className:"flex items-start gap-2 text-[11px] text-gray-300",children:[u.jsx(wv,{className:"w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsx("span",{className:"line-clamp-1",children:m})]},x))})]})]}),u.jsxs("div",{className:"p-6 pt-0",children:[u.jsxs("div",{className:"flex items-baseline justify-between mb-4 pt-4 border-t border-white/10",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Preço à vista ou faturado"}),u.jsxs("span",{className:"text-2xl font-black text-[#f3e5ab] font-mono",children:["R$ ",p.priceBRL.toLocaleString("pt-BR"),",00"]})]}),u.jsx("span",{className:"text-xs text-[#e5c05d] font-bold",children:"Em até 12x"})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[u.jsxs("button",{onClick:()=>s(p),className:"py-2.5 px-3 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black text-xs font-black rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-1.5",children:[u.jsx(Mc,{className:"w-3.5 h-3.5 fill-black"}),u.jsx("span",{children:"Adicionar"})]}),u.jsxs("button",{onClick:()=>f(p),className:"py-2.5 px-3 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5",title:"Negociar faturamento via WhatsApp",children:[u.jsx(Fr,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"WhatsApp"})]})]})]})]},p.id))})]})})},Ab=()=>{const s=[{title:"Manual do Usuário — Sistema OutFire® (Edição Oficial 2026)",type:"Manual Mais Completo (14 Seções)",size:"1.2 MB",description:"Guia operacional definitivo da IHM: Dashboard 2026, Setores e Modo Limpeza, Central Mista (CO2 + Detecção), Checklist Wizard 8 etapas, Alertas de Falha, Pré-Alarme 15s, Agenda de Gás, Avisos de Voz DAC, Pareamento Sem Fio e Garantia de 12 Meses.",link:"/manual-usuario.html",pdfLink:"/assets/Manual_Usuario_OutFire_2026.pdf",featured:!0},{title:"Manual Técnico e Esquema Elétrico Central Outfire 2026",type:"PDF Oficial de Engenharia",size:"750 KB",description:"Diagrama elétrico completo de bornes, acionamento das solenoides, intertravamento do exaustor, sensores reguláveis 145°C/300°C e dampers motorizados.",link:"/assets/Manual_Tecnico_OutFire_2026.pdf",pdfLink:"/assets/Manual_Tecnico_OutFire_2026.pdf",featured:!0},{title:"Procedimento Operacional Padrão (POP) Pós-Disparo",type:"Guia Técnico Oficial (POP)",size:"A4 / Imprimível",description:"Instruções passo a passo para a equipe do restaurante após o combate a incêndio: limpeza do agente saponificante, cuidados com inox, rearme da válvula e recarga 24h.",link:"/pop-pos-disparo.html",pdfLink:"/pop-pos-disparo.html",featured:!0},{title:"Certificado de Conformidade Técnica & Memorial Descritivo (NBR 14518)",type:"Documento para Bombeiros / AVCB",size:"A4 / Laudo Oficial",description:"Documentação comprobatória das características técnicas, laudo de ensaios e conformidade estrita com a ABNT NBR 14518:2020 para instrução de processos no Corpo de Bombeiros.",link:"/certificado-conformidade-nbr14518.html",pdfLink:"/certificado-conformidade-nbr14518.html",featured:!0}],e=[{step:"01",title:"Posicionamento da Central VTS 32S3",desc:"Fixar o painel em local de fácil visualização e acesso fora da zona de fogo direto, a 1,50m do piso, próximo à rota de saída."},{step:"02",title:"Passagem dos Cabos Blindados de Alta Temperatura",desc:"Lançar a fiação dos sensores da coifa (145°C) e dos sensores do duto (300°C) utilizando conduítes metálicos independentes."},{step:"03",title:"Interligação da Válvula de Gás e Exaustor",desc:"Conectar os contatos secos (relés) da central à bobina da válvula solenoide de gás e ao contator do motor de exaustão."},{step:"04",title:"Comissionamento e Teste sem Disparo",desc:"Simular acionamento pelo menu de teste da IHM para validar corte de gás e parada do exaustor antes da liberação final."}];return u.jsx("section",{id:"manuais",className:"py-24 bg-[#0a0c0e] relative border-t border-white/5",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wide mb-4",children:[u.jsx(Dm,{className:"w-3.5 h-3.5"}),"Engenharia & Suporte"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Central de Manuais Técnicos & ",u.jsx("br",{}),u.jsx("span",{className:"gold-gradient-text",children:"Documentos de Instalação"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Tenha acesso imediato aos esquemas elétricos, guias de montagem passo a passo e memoriais de cálculo para instaladores, engenheiros e montadores de coifa."})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16",children:s.map((t,r)=>u.jsxs("div",{className:`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all ${t.featured?"glass-panel-gold border-amber-500/40 bg-gradient-to-b from-[#1a1710] to-[#0e1014] shadow-glow-gold":"glass-panel border-white/10"}`,children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsx("span",{className:"text-[10px] font-mono font-bold bg-white/10 text-gray-300 px-2.5 py-1 rounded-md",children:t.type}),u.jsx(jd,{className:`w-6 h-6 ${t.featured?"text-amber-400":"text-gray-400"}`})]}),u.jsx("h3",{className:"text-lg font-bold text-white mb-2 font-sans",children:t.title}),u.jsx("p",{className:"text-xs text-gray-400 leading-relaxed mb-6",children:t.description})]}),u.jsxs("div",{className:"pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[u.jsx("span",{className:"text-xs text-gray-400 font-mono",children:t.size}),u.jsxs("div",{className:"flex items-center gap-2",children:[t.pdfLink&&t.pdfLink!==t.link&&u.jsxs("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",className:"py-2 px-3 rounded-xl text-xs font-bold flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white transition-all",children:[u.jsx(Dm,{className:"w-3.5 h-3.5 text-amber-400"}),u.jsx("span",{children:"Ver Online"})]}),u.jsxs("a",{href:t.pdfLink||t.link,target:"_blank",rel:"noopener noreferrer",className:`py-2 px-4 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${t.featured?"gold-gradient hover:brightness-110 text-black font-extrabold shadow-glow-gold":"bg-white/10 hover:bg-white/20 text-white"}`,children:[u.jsx(W0,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:t.link.endsWith(".pdf")?"Baixar PDF":"Ver / Imprimir"})]})]})]})]},r))}),u.jsxs("div",{className:"glass-panel p-8 rounded-3xl border border-white/10",children:[u.jsxs("div",{className:"flex items-center gap-2.5 mb-6",children:[u.jsx(zv,{className:"w-5 h-5 text-amber-400"}),u.jsx("h3",{className:"text-lg font-bold text-white font-sans",children:"Guia Prático de Instalação da Central Outfire VTS 32S3"})]}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:e.map((t,r)=>u.jsxs("div",{className:"p-4 bg-white/5 rounded-2xl border border-white/5 relative",children:[u.jsx("span",{className:"text-2xl font-black text-amber-400 font-mono block mb-2 opacity-90",children:t.step}),u.jsx("h4",{className:"text-sm font-bold text-white mb-1.5 font-sans",children:t.title}),u.jsx("p",{className:"text-xs text-gray-400 leading-relaxed",children:t.desc})]},r))}),u.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4",children:[u.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-300 text-center sm:text-left",children:[u.jsx(Sc,{className:"w-4 h-4 text-emerald-400 shrink-0"}),u.jsx("span",{children:"Precisa de suporte na instalação da sua equipe? Engenheiros especializados disponíveis por WhatsApp."})]}),u.jsx("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20sou%20instalador%2Fengenheiro%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20t%C3%A9cnica%20sobre%20a%20Central%20Outfire.",target:"_blank",rel:"noopener noreferrer",className:"py-2.5 px-5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/10 transition-all shrink-0",children:"Suporte Técnico de Engenharia →"})]})]})]})})},Rb=()=>{const[s,e]=Ue.useState(null),t=[{src:"/assets/central-outfire-instalada.jpg",title:"Central Outfire VTS Instalada em Cozinha Real",category:"Instalação em Restaurante",desc:"Central montada estrategicamente na parede lateral da coifa, com chicote elétrico de alta temperatura interligado à válvula de corte de gás e aos dampers do duto."},{src:"/assets/central-outfire-interno.jpg",title:"Placa de Controle & Relés de Potência Outfire",category:"Engenharia Interna",desc:"Eletrônica industrial com proteção contra surtos, bornes reforçados para conexões dos sensores de 145°C e 300°C, relés dedicados e backup por bateria."},{src:"/assets/central-outfire-ihm.jpg",title:"IHM Touchscreen em Operação com Alerta",category:"Interface de Operação",desc:"Tela de alta resolução colorida exibindo o status de alerta térmico, contagem regressiva anti-disparo acidental e menu com senha para parametrizações."},{src:"/assets/central-outfire-fundo-removido.png",title:"Gabinete Industrial Outfire VTS 32S3",category:"Design Robusto",desc:"Construção em chapa de aço com pintura eletrostática texturizada de alta durabilidade, projetada para suportar a gordura e o ambiente severo de cozinhas industriais."}];return u.jsxs("section",{id:"galeria",className:"py-24 bg-[#0d0f13] relative",children:[u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wide mb-4",children:[u.jsx(Ho,{className:"w-3.5 h-3.5"}),"Casos Reais & Engenharia em Campo"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Instalações Reais do ",u.jsx("br",{}),u.jsx("span",{className:"gold-gradient-text",children:"Sistema Outfire em Ação"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Veja detalhes da montagem física da Central Outfire VTS 32S3, acabamento dos componentes e a integração visual impecável nas cozinhas dos nossos clientes."})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:t.map((r,o)=>u.jsxs("div",{onClick:()=>e(r),className:"glass-panel rounded-3xl border border-white/10 hover:border-amber-500/40 hover:shadow-glow-gold overflow-hidden cursor-pointer group transition-all duration-300 hover:-translate-y-1",children:[u.jsxs("div",{className:"relative h-72 sm:h-80 bg-black/50 overflow-hidden flex items-center justify-center",children:[u.jsx("img",{src:r.src,alt:r.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),u.jsxs("div",{className:"absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-sm",children:[u.jsx(X0,{className:"w-5 h-5 text-amber-400"}),u.jsx("span",{children:"Clique para Ampliar Foto"})]}),u.jsx("div",{className:"absolute top-4 left-4",children:u.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-amber-400 px-3 py-1 rounded-full border border-amber-500/30",children:r.category})})]}),u.jsxs("div",{className:"p-6",children:[u.jsxs("h3",{className:"text-lg font-bold text-white mb-2 font-sans flex items-center justify-between",children:[u.jsx("span",{children:r.title}),u.jsx(Rv,{className:"w-4 h-4 text-gray-400 group-hover:text-amber-400 transition-colors"})]}),u.jsx("p",{className:"text-xs sm:text-sm text-gray-400 leading-relaxed",children:r.desc})]})]},o))})]}),s&&u.jsx("div",{onClick:()=>e(null),className:"fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8",children:u.jsxs("div",{onClick:r=>r.stopPropagation(),className:"max-w-4xl w-full bg-[#12141a] rounded-3xl border border-white/10 overflow-hidden shadow-2xl",children:[u.jsx("div",{className:"relative max-h-[70vh] bg-black flex items-center justify-center p-2",children:u.jsx("img",{src:s.src,alt:s.title,className:"max-h-[65vh] w-auto object-contain rounded-xl"})}),u.jsxs("div",{className:"p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-bold text-white",children:s.title}),u.jsx("p",{className:"text-xs text-gray-400 mt-1",children:s.desc})]}),u.jsx("button",{onClick:()=>e(null),className:"py-2 px-5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl transition-all",children:"Fechar"})]})]})})]})},Nb=()=>{const[s,e]=Ue.useState({nome:"",empresa:"",telefone:"",cidade:"",coifas:"1",mensagem:""}),[t,r]=Ue.useState(!1),o=l=>{l.preventDefault();let d=`📋 *NOVO CONTATO PELO SITE OUTFIRE.COM.BR*

`;d+=`👤 *Nome:* ${s.nome}
`,d+=`🏢 *Empresa / Restaurante:* ${s.empresa||"Não informado"}
`,d+=`📱 *Telefone / WhatsApp:* ${s.telefone}
`,d+=`📍 *Cidade / Estado:* ${s.cidade}
`,d+=`🍳 *Qtd de Coifas:* ${s.coifas} coifa(s)
`,s.mensagem&&(d+=`💬 *Mensagem:* ${s.mensagem}
`),r(!0),setTimeout(()=>{window.open(`https://wa.me/5515996576807?text=${encodeURIComponent(d)}`,"_blank"),r(!1)},1e3)};return u.jsxs("footer",{id:"contato",className:"bg-[#08090b] text-gray-400 border-t border-white/10 relative overflow-hidden",children:[u.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10",children:u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",children:[u.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide",children:[u.jsx(Fr,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Canais Diretos de Engenharia & Vendas"]}),u.jsxs("h3",{className:"text-3xl sm:text-4xl font-black text-white font-sans tracking-tight",children:["Fale com um Especialista ",u.jsx("br",{}),u.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"em Supressão Outfire"})]}),u.jsx("p",{className:"text-sm text-gray-400 leading-relaxed",children:"Dúvidas sobre dimensionamento de bicos, sensores, laudos para o Corpo de Bombeiros (AVCB) ou solicitação de visita técnica para cozinhas em shopping centers e restaurantes."}),u.jsxs("div",{className:"space-y-4 pt-4",children:[u.jsxs("a",{href:"https://wa.me/5515996576807",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 transition-all text-white group",children:[u.jsx("div",{className:"w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform",children:u.jsx(Fr,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsx("span",{className:"text-xs text-gray-400 block font-mono",children:"WhatsApp Vendas & Orçamentos"}),u.jsx("span",{className:"text-base font-bold text-white group-hover:text-emerald-400 transition-colors",children:"(15) 99657-6807"})]})]}),u.jsxs("a",{href:"https://wa.me/5515981577847",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 transition-all text-white group",children:[u.jsx("div",{className:"w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform",children:u.jsx(Fr,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsx("span",{className:"text-xs text-gray-400 block font-mono",children:"Suporte Técnico & Pós-Venda"}),u.jsx("span",{className:"text-base font-bold text-white group-hover:text-red-400 transition-colors",children:"(15) 98157-7847"})]})]}),u.jsxs("div",{className:"flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 text-xs text-gray-300",children:[u.jsx("div",{className:"w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0",children:u.jsx(Av,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsx("span",{className:"font-bold text-white block",children:"Atendimento em Todo o Brasil"}),u.jsx("span",{className:"text-gray-400",children:"Envio de kits prontos para instalação com laudo ART e suporte remoto."})]})]})]})]}),u.jsx("div",{className:"lg:col-span-7",children:u.jsxs("div",{className:"glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative",children:[u.jsx("h4",{className:"text-xl font-bold text-white mb-2 font-sans",children:"Solicite uma Proposta Técnica sem Compromisso"}),u.jsx("p",{className:"text-xs text-gray-400 mb-6",children:"Preencha os dados e nosso engenheiro entrará em contato em menos de 15 minutos com o dimensionamento preliminar."}),t?u.jsxs("div",{className:"p-8 text-center space-y-3 bg-emerald-950/30 border border-emerald-500/30 rounded-2xl",children:[u.jsx(ps,{className:"w-12 h-12 text-emerald-400 mx-auto animate-bounce"}),u.jsx("h5",{className:"text-base font-bold text-white",children:"Encaminhando para o WhatsApp..."}),u.jsx("p",{className:"text-xs text-gray-300",children:"Você será direcionado diretamente para um especialista no WhatsApp."})]}):u.jsxs("form",{onSubmit:o,className:"space-y-4",children:[u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[u.jsxs("div",{children:[u.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Seu Nome Completo *"}),u.jsx("input",{type:"text",required:!0,placeholder:"Ex: Carlos Silva",value:s.nome,onChange:l=>e({...s,nome:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Nome do Restaurante / Empresa"}),u.jsx("input",{type:"text",placeholder:"Ex: Hamburgueria Grill",value:s.empresa,onChange:l=>e({...s,empresa:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[u.jsxs("div",{children:[u.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"WhatsApp com DDD *"}),u.jsx("input",{type:"tel",required:!0,placeholder:"Ex: (11) 98765-4321",value:s.telefone,onChange:l=>e({...s,telefone:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Cidade e Estado *"}),u.jsx("input",{type:"text",required:!0,placeholder:"Ex: São Paulo / SP",value:s.cidade,onChange:l=>e({...s,cidade:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Quantas Coifas precisam de proteção?"}),u.jsxs("select",{value:s.coifas,onChange:l=>e({...s,coifas:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500",children:[u.jsx("option",{value:"1",children:"1 Coifa (Pequeno / Médio Porte)"}),u.jsx("option",{value:"2",children:"2 Coifas (Atuação Independente)"}),u.jsx("option",{value:"3",children:"3 Coifas (Atuação Independente)"}),u.jsx("option",{value:"mais de 3",children:"Mais de 3 Coifas / Projeto Especial"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Detalhes adicionais (opcional)"}),u.jsx("textarea",{rows:3,placeholder:"Ex: Tenho 2 fritadeiras e 1 chapa, preciso de laudo urgente para renovação de AVCB.",value:s.mensagem,onChange:l=>e({...s,mensagem:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]}),u.jsxs("button",{type:"submit",className:"w-full py-4 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black text-sm rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-2 group",children:[u.jsx(Ov,{className:"w-4 h-4 group-hover:translate-x-1 transition-transform fill-black"}),u.jsx("span",{children:"Enviar para a Engenharia Outfire"})]})]})]})})]})}),u.jsx("div",{className:"border-t border-[#d4af37]/20 py-8 bg-[#050608]",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("img",{src:"/assets/logo-outfire-gold.png",alt:"OUTFIRE",className:"h-8 w-auto object-contain"}),u.jsxs("span",{children:["© ",new Date().getFullYear()," Outfire Sistemas contra Incêndio. Todos os direitos reservados."]})]}),u.jsxs("div",{className:"flex items-center gap-4 text-gray-400",children:[u.jsx("a",{href:"#hero-3d",className:"hover:text-white transition-colors",children:"Simulação 3D"}),u.jsx("a",{href:"#central-vts",className:"hover:text-white transition-colors",children:"Central VTS"}),u.jsx("a",{href:"#normas",className:"hover:text-white transition-colors",children:"Normas NBR"}),u.jsx("a",{href:"#calculadora",className:"hover:text-white transition-colors",children:"Calculadora"}),u.jsx("a",{href:"#loja",className:"hover:text-white transition-colors",children:"Loja"}),u.jsx("a",{href:"/assets/manual-instalacao-central-outfire.pdf",target:"_blank",className:"hover:text-white transition-colors",children:"Manual PDF"})]})]})})]})},Pb=({isOpen:s,onClose:e,cartItems:t,onUpdateQuantity:r,onRemoveItem:o,onClearCart:l})=>{const[d,f]=Ue.useState(!1),[p,m]=Ue.useState(!1);if(!s)return null;const x=t.reduce((M,T)=>M+T.product.priceBRL*T.quantity,0),v=()=>{let M=`🛒 *PEDIDO LOJA OUTFIRE - PROPOSTA COMERCIAL*

`;M+=`Olá, equipe Outfire! Gostaria de fechar o pedido dos seguintes itens pelo site:

`,t.forEach((T,A)=>{M+=`${A+1}. *${T.product.name}*
`,M+=`   SKU: ${T.product.sku} | Qtd: ${T.quantity} un
`,M+=`   Valor: R$ ${(T.product.priceBRL*T.quantity).toLocaleString("pt-BR")},00

`}),M+=`💰 *TOTAL DO PEDIDO:* R$ ${x.toLocaleString("pt-BR")},00

`,M+="Por favor, me informe as opções de pagamento (Faturamento B2B / Boleto / Pix / Cartão) e valor do frete.",window.open(`https://wa.me/5515996576807?text=${encodeURIComponent(M)}`,"_blank")},S=M=>{m(!0),setTimeout(()=>{l(),m(!1),f(!1),e(),alert(`Pedido registrado com sucesso via ${M}! Nossa equipe entrará em contato para emissão de NF-e e envio.`)},2e3)};return u.jsxs("div",{className:"fixed inset-0 z-50 overflow-hidden",children:[u.jsx("div",{onClick:e,className:"absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"}),u.jsx("div",{className:"fixed inset-y-0 right-0 max-w-full flex pl-10",children:u.jsxs("div",{className:"w-screen max-w-md bg-[#0f1115] border-l border-white/10 flex flex-col justify-between shadow-2xl relative",children:[u.jsxs("div",{className:"p-6 border-b border-white/10 flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(Om,{className:"w-5 h-5 text-[#d4af37]"}),u.jsx("h2",{className:"text-lg font-bold text-white font-sans",children:"Seu Carrinho de Compras"})]}),u.jsx("button",{onClick:e,className:"p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors",children:u.jsx(Gd,{className:"w-5 h-5"})})]}),u.jsx("div",{className:"flex-1 overflow-y-auto p-6 space-y-4",children:t.length===0?u.jsxs("div",{className:"h-full flex flex-col items-center justify-center text-center text-gray-400 space-y-4",children:[u.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-gray-500",children:u.jsx(Om,{className:"w-8 h-8"})}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-base font-bold text-white",children:"Seu carrinho está vazio"}),u.jsx("p",{className:"text-xs text-gray-400 mt-1 max-w-xs",children:"Monte um kit na calculadora ou adicione peças avulsas de reposição da nossa loja."})]}),u.jsx("a",{href:"#calculadora",onClick:e,className:"py-2.5 px-4 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-xl shadow-glow-red transition-all",children:"Abrir Calculadora da Cozinha"})]}):t.map(M=>u.jsxs("div",{className:"p-4 bg-white/5 rounded-2xl border border-white/5 flex items-start gap-3 relative group",children:[u.jsx("img",{src:M.product.image,alt:M.product.name,className:"w-16 h-16 object-contain rounded-xl bg-black/40 p-1 border border-white/5 shrink-0"}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsx("h4",{className:"text-xs font-bold text-white line-clamp-1",children:M.product.name}),u.jsxs("span",{className:"text-[10px] font-mono text-gray-400 block mt-0.5",children:["SKU: ",M.product.sku]}),u.jsxs("span",{className:"text-sm font-bold text-amber-400 font-mono block mt-1",children:["R$ ",M.product.priceBRL.toLocaleString("pt-BR"),",00"]}),u.jsxs("div",{className:"flex items-center gap-3 mt-2",children:[u.jsxs("div",{className:"flex items-center bg-black/50 border border-white/10 rounded-lg",children:[u.jsx("button",{onClick:()=>r(M.product.id,-1),className:"p-1 hover:text-red-400 transition-colors",children:u.jsx(Dv,{className:"w-3 h-3"})}),u.jsx("span",{className:"px-2 text-xs font-bold text-white",children:M.quantity}),u.jsx("button",{onClick:()=>r(M.product.id,1),className:"p-1 hover:text-emerald-400 transition-colors",children:u.jsx(Uo,{className:"w-3 h-3"})})]}),u.jsxs("button",{onClick:()=>o(M.product.id),className:"text-gray-400 hover:text-red-400 text-xs transition-colors flex items-center gap-1",children:[u.jsx($0,{className:"w-3 h-3"}),u.jsx("span",{children:"Remover"})]})]})]})]},M.product.id))}),t.length>0&&u.jsxs("div",{className:"p-6 border-t border-white/10 bg-[#0c0d10] space-y-4",children:[u.jsxs("div",{className:"space-y-1.5",children:[u.jsxs("div",{className:"flex justify-between text-xs text-gray-400",children:[u.jsx("span",{children:"Subtotal:"}),u.jsxs("span",{children:["R$ ",x.toLocaleString("pt-BR"),",00"]})]}),u.jsxs("div",{className:"flex justify-between text-xs text-gray-400",children:[u.jsx("span",{children:"Nota Fiscal & Laudo ART:"}),u.jsx("span",{className:"text-emerald-400 font-medium",children:"Incluso"})]}),u.jsxs("div",{className:"flex justify-between text-base font-bold text-white pt-2 border-t border-white/10",children:[u.jsx("span",{children:"Total Estimado:"}),u.jsxs("span",{className:"font-mono text-xl text-amber-400",children:["R$ ",x.toLocaleString("pt-BR"),",00"]})]})]}),u.jsxs("div",{className:"space-y-2",children:[u.jsxs("button",{onClick:v,className:"w-full py-3.5 px-4 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2",children:[u.jsx(Fr,{className:"w-4 h-4"}),u.jsx("span",{children:"Enviar Pedido pelo WhatsApp (Comercial)"})]}),u.jsxs("button",{onClick:()=>f(!0),className:"w-full py-3 px-4 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black text-xs rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-2",children:[u.jsx(Im,{className:"w-4 h-4 fill-black"}),u.jsx("span",{children:"Finalizar Pagamento Online (Pix / Cartão)"})]})]}),u.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-[11px] text-gray-400 text-center",children:[u.jsx(Sc,{className:"w-3.5 h-3.5 text-emerald-400"}),u.jsx("span",{children:"Compra segura com garantia direta do fabricante Outfire"})]})]}),d&&u.jsxs("div",{className:"absolute inset-0 bg-[#0d0f13] z-20 p-6 flex flex-col justify-between",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-white/10 mb-6",children:[u.jsx("h3",{className:"font-bold text-white text-base",children:"Checkout Rápido Outfire"}),u.jsx("button",{onClick:()=>f(!1),className:"p-1 text-gray-400 hover:text-white",children:u.jsx(Gd,{className:"w-5 h-5"})})]}),p?u.jsxs("div",{className:"text-center py-12 space-y-4",children:[u.jsx(Tc,{className:"w-16 h-16 text-emerald-400 mx-auto animate-bounce"}),u.jsx("h4",{className:"text-lg font-bold text-white",children:"Pagamento Confirmado!"}),u.jsx("p",{className:"text-xs text-gray-300",children:"Obrigado por confiar na Outfire. Seus dados foram encaminhados para a expedição e o engenheiro responsável entrará em contato."})]}):u.jsxs("div",{className:"space-y-4",children:[u.jsxs("p",{className:"text-xs text-gray-300",children:["Selecione a forma de pagamento desejada para concluir o pedido de ",u.jsxs("strong",{children:["R$ ",x.toLocaleString("pt-BR"),",00"]}),":"]}),u.jsxs("button",{onClick:()=>S("PIX"),className:"w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left transition-all",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx(Lv,{className:"w-6 h-6 text-emerald-400"}),u.jsxs("div",{children:[u.jsx("span",{className:"text-sm font-bold text-white block",children:"Pagar via Pix"}),u.jsx("span",{className:"text-[11px] text-gray-400",children:"Aprovação imediata com 5% de desconto"})]})]}),u.jsx(fc,{className:"w-4 h-4 text-gray-400"})]}),u.jsxs("button",{onClick:()=>S("Cartão de Crédito"),className:"w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left transition-all",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx(Im,{className:"w-6 h-6 text-blue-400"}),u.jsxs("div",{children:[u.jsx("span",{className:"text-sm font-bold text-white block",children:"Cartão de Crédito"}),u.jsx("span",{className:"text-[11px] text-gray-400",children:"Parcelamento em até 12x sem juros"})]})]}),u.jsx(fc,{className:"w-4 h-4 text-gray-400"})]}),u.jsxs("button",{onClick:()=>S("Boleto Faturado B2B"),className:"w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left transition-all",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx(Sc,{className:"w-6 h-6 text-amber-400"}),u.jsxs("div",{children:[u.jsx("span",{className:"text-sm font-bold text-white block",children:"Faturamento B2B / Boleto PJ"}),u.jsx("span",{className:"text-[11px] text-gray-400",children:"Para restaurantes e empresas cadastradas"})]})]}),u.jsx(fc,{className:"w-4 h-4 text-gray-400"})]})]})]}),u.jsx("button",{onClick:()=>f(!1),className:"w-full py-3 bg-white/10 text-gray-300 font-bold text-xs rounded-xl hover:bg-white/20 transition-all",children:"Voltar ao Carrinho"})]})]})})]})},Db=()=>u.jsxs("aside",{"aria-label":"Atendimento rápido",className:"fixed bottom-6 right-6 z-40 flex items-center group",children:[u.jsx("div",{className:"hidden sm:block mr-3 px-3.5 py-1.5 rounded-xl bg-[#12141a]/95 backdrop-blur-md border border-white/10 text-white text-xs font-semibold shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap",children:"Falar com Engenheiro no WhatsApp 💬"}),u.jsxs("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20estou%20no%20site%20da%20Outfire%20e%20gostaria%20de%20um%20or%C3%A7amento%20t%C3%A9cnico.",target:"_blank",rel:"noopener noreferrer",className:"w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-green-500 to-emerald-400 text-white flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 relative border-2 border-white/20",title:"Atendimento no WhatsApp","aria-label":"Atendimento no WhatsApp",children:[u.jsx(Pv,{className:"w-7 h-7 fill-white/10"}),u.jsxs("span",{className:"absolute -top-1 -right-1 flex h-4 w-4",children:[u.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),u.jsx("span",{className:"relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border border-white"})]})]})]});function Lb(){const[s,e]=Ue.useState([]),[t,r]=Ue.useState(!1),o=m=>{e(x=>x.find(S=>S.product.id===m.id)?x.map(S=>S.product.id===m.id?{...S,quantity:S.quantity+1}:S):[...x,{product:m,quantity:1}]),r(!0)},l=(m,x)=>{e(v=>v.map(S=>{if(S.product.id===m){const M=S.quantity+x;return M>0?{...S,quantity:M}:null}return S}).filter(Boolean))},d=m=>{e(x=>x.filter(v=>v.product.id!==m))},f=()=>{e([])},p=s.reduce((m,x)=>m+x.quantity,0);return u.jsxs("div",{className:"min-h-screen bg-[#0a0c0e] text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200",children:[u.jsx(Gv,{cartCount:p,onOpenCart:()=>r(!0)}),u.jsxs("main",{className:"flex-1",children:[u.jsx(Sb,{}),u.jsx(Mb,{}),u.jsx(wb,{}),u.jsx(bb,{}),u.jsx(Eb,{onAddToCart:o}),u.jsx(Cb,{onAddToCart:o}),u.jsx(Ab,{}),u.jsx(Rb,{})]}),u.jsx(Nb,{}),u.jsx(Pb,{isOpen:t,onClose:()=>r(!1),cartItems:s,onUpdateQuantity:l,onRemoveItem:d,onClearCart:f}),u.jsx(Db,{})]})}pv.createRoot(document.getElementById("root")).render(u.jsx(ov.StrictMode,{children:u.jsx(Lb,{})}));
