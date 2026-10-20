(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function E0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Fu={exports:{}},Ja={},ku={exports:{}},wt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var om;function jx(){if(om)return wt;om=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.iterator;function y(k){return k===null||typeof k!="object"?null:(k=v&&k[v]||k["@@iterator"],typeof k=="function"?k:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,C={};function M(k,se,Re){this.props=k,this.context=se,this.refs=C,this.updater=Re||S}M.prototype.isReactComponent={},M.prototype.setState=function(k,se){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,se,"setState")},M.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function _(){}_.prototype=M.prototype;function T(k,se,Re){this.props=k,this.context=se,this.refs=C,this.updater=Re||S}var D=T.prototype=new _;D.constructor=T,A(D,M.prototype),D.isPureReactComponent=!0;var R=Array.isArray,U=Object.prototype.hasOwnProperty,L={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function H(k,se,Re){var We,Je={},ie=null,fe=null;if(se!=null)for(We in se.ref!==void 0&&(fe=se.ref),se.key!==void 0&&(ie=""+se.key),se)U.call(se,We)&&!O.hasOwnProperty(We)&&(Je[We]=se[We]);var _e=arguments.length-2;if(_e===1)Je.children=Re;else if(1<_e){for(var Ce=Array(_e),j=0;j<_e;j++)Ce[j]=arguments[j+2];Je.children=Ce}if(k&&k.defaultProps)for(We in _e=k.defaultProps,_e)Je[We]===void 0&&(Je[We]=_e[We]);return{$$typeof:s,type:k,key:ie,ref:fe,props:Je,_owner:L.current}}function b(k,se){return{$$typeof:s,type:k.type,key:se,ref:k.ref,props:k.props,_owner:k._owner}}function P(k){return typeof k=="object"&&k!==null&&k.$$typeof===s}function B(k){var se={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Re){return se[Re]})}var $=/\/+/g;function K(k,se){return typeof k=="object"&&k!==null&&k.key!=null?B(""+k.key):se.toString(36)}function ue(k,se,Re,We,Je){var ie=typeof k;(ie==="undefined"||ie==="boolean")&&(k=null);var fe=!1;if(k===null)fe=!0;else switch(ie){case"string":case"number":fe=!0;break;case"object":switch(k.$$typeof){case s:case e:fe=!0}}if(fe)return fe=k,Je=Je(fe),k=We===""?"."+K(fe,0):We,R(Je)?(Re="",k!=null&&(Re=k.replace($,"$&/")+"/"),ue(Je,se,Re,"",function(j){return j})):Je!=null&&(P(Je)&&(Je=b(Je,Re+(!Je.key||fe&&fe.key===Je.key?"":(""+Je.key).replace($,"$&/")+"/")+k)),se.push(Je)),1;if(fe=0,We=We===""?".":We+":",R(k))for(var _e=0;_e<k.length;_e++){ie=k[_e];var Ce=We+K(ie,_e);fe+=ue(ie,se,Re,Ce,Je)}else if(Ce=y(k),typeof Ce=="function")for(k=Ce.call(k),_e=0;!(ie=k.next()).done;)ie=ie.value,Ce=We+K(ie,_e++),fe+=ue(ie,se,Re,Ce,Je);else if(ie==="object")throw se=String(k),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return fe}function de(k,se,Re){if(k==null)return k;var We=[],Je=0;return ue(k,We,"","",function(ie){return se.call(Re,ie,Je++)}),We}function re(k){if(k._status===-1){var se=k._result;se=se(),se.then(function(Re){(k._status===0||k._status===-1)&&(k._status=1,k._result=Re)},function(Re){(k._status===0||k._status===-1)&&(k._status=2,k._result=Re)}),k._status===-1&&(k._status=0,k._result=se)}if(k._status===1)return k._result.default;throw k._result}var Q={current:null},q={transition:null},me={ReactCurrentDispatcher:Q,ReactCurrentBatchConfig:q,ReactCurrentOwner:L};function le(){throw Error("act(...) is not supported in production builds of React.")}return wt.Children={map:de,forEach:function(k,se,Re){de(k,function(){se.apply(this,arguments)},Re)},count:function(k){var se=0;return de(k,function(){se++}),se},toArray:function(k){return de(k,function(se){return se})||[]},only:function(k){if(!P(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},wt.Component=M,wt.Fragment=t,wt.Profiler=o,wt.PureComponent=T,wt.StrictMode=r,wt.Suspense=p,wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,wt.act=le,wt.cloneElement=function(k,se,Re){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var We=A({},k.props),Je=k.key,ie=k.ref,fe=k._owner;if(se!=null){if(se.ref!==void 0&&(ie=se.ref,fe=L.current),se.key!==void 0&&(Je=""+se.key),k.type&&k.type.defaultProps)var _e=k.type.defaultProps;for(Ce in se)U.call(se,Ce)&&!O.hasOwnProperty(Ce)&&(We[Ce]=se[Ce]===void 0&&_e!==void 0?_e[Ce]:se[Ce])}var Ce=arguments.length-2;if(Ce===1)We.children=Re;else if(1<Ce){_e=Array(Ce);for(var j=0;j<Ce;j++)_e[j]=arguments[j+2];We.children=_e}return{$$typeof:s,type:k.type,key:Je,ref:ie,props:We,_owner:fe}},wt.createContext=function(k){return k={$$typeof:u,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:l,_context:k},k.Consumer=k},wt.createElement=H,wt.createFactory=function(k){var se=H.bind(null,k);return se.type=k,se},wt.createRef=function(){return{current:null}},wt.forwardRef=function(k){return{$$typeof:d,render:k}},wt.isValidElement=P,wt.lazy=function(k){return{$$typeof:x,_payload:{_status:-1,_result:k},_init:re}},wt.memo=function(k,se){return{$$typeof:m,type:k,compare:se===void 0?null:se}},wt.startTransition=function(k){var se=q.transition;q.transition={};try{k()}finally{q.transition=se}},wt.unstable_act=le,wt.useCallback=function(k,se){return Q.current.useCallback(k,se)},wt.useContext=function(k){return Q.current.useContext(k)},wt.useDebugValue=function(){},wt.useDeferredValue=function(k){return Q.current.useDeferredValue(k)},wt.useEffect=function(k,se){return Q.current.useEffect(k,se)},wt.useId=function(){return Q.current.useId()},wt.useImperativeHandle=function(k,se,Re){return Q.current.useImperativeHandle(k,se,Re)},wt.useInsertionEffect=function(k,se){return Q.current.useInsertionEffect(k,se)},wt.useLayoutEffect=function(k,se){return Q.current.useLayoutEffect(k,se)},wt.useMemo=function(k,se){return Q.current.useMemo(k,se)},wt.useReducer=function(k,se,Re){return Q.current.useReducer(k,se,Re)},wt.useRef=function(k){return Q.current.useRef(k)},wt.useState=function(k){return Q.current.useState(k)},wt.useSyncExternalStore=function(k,se,Re){return Q.current.useSyncExternalStore(k,se,Re)},wt.useTransition=function(){return Q.current.useTransition()},wt.version="18.3.1",wt}var lm;function _f(){return lm||(lm=1,ku.exports=jx()),ku.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm;function Vx(){if(cm)return Ja;cm=1;var s=_f(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,p,m){var x,v={},y=null,S=null;m!==void 0&&(y=""+m),p.key!==void 0&&(y=""+p.key),p.ref!==void 0&&(S=p.ref);for(x in p)r.call(p,x)&&!l.hasOwnProperty(x)&&(v[x]=p[x]);if(d&&d.defaultProps)for(x in p=d.defaultProps,p)v[x]===void 0&&(v[x]=p[x]);return{$$typeof:e,type:d,key:y,ref:S,props:v,_owner:o.current}}return Ja.Fragment=t,Ja.jsx=u,Ja.jsxs=u,Ja}var um;function Hx(){return um||(um=1,Fu.exports=Vx()),Fu.exports}var h=Hx(),Qe=_f();const Gx=E0(Qe);var Sl={},Bu={exports:{}},qn={},zu={exports:{}},ju={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function Wx(){return dm||(dm=1,(function(s){function e(q,me){var le=q.length;q.push(me);e:for(;0<le;){var k=le-1>>>1,se=q[k];if(0<o(se,me))q[k]=me,q[le]=se,le=k;else break e}}function t(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var me=q[0],le=q.pop();if(le!==me){q[0]=le;e:for(var k=0,se=q.length,Re=se>>>1;k<Re;){var We=2*(k+1)-1,Je=q[We],ie=We+1,fe=q[ie];if(0>o(Je,le))ie<se&&0>o(fe,Je)?(q[k]=fe,q[ie]=le,k=ie):(q[k]=Je,q[We]=le,k=We);else if(ie<se&&0>o(fe,le))q[k]=fe,q[ie]=le,k=ie;else break e}}return me}function o(q,me){var le=q.sortIndex-me.sortIndex;return le!==0?le:q.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var p=[],m=[],x=1,v=null,y=3,S=!1,A=!1,C=!1,M=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(q){for(var me=t(m);me!==null;){if(me.callback===null)r(m);else if(me.startTime<=q)r(m),me.sortIndex=me.expirationTime,e(p,me);else break;me=t(m)}}function R(q){if(C=!1,D(q),!A)if(t(p)!==null)A=!0,re(U);else{var me=t(m);me!==null&&Q(R,me.startTime-q)}}function U(q,me){A=!1,C&&(C=!1,_(H),H=-1),S=!0;var le=y;try{for(D(me),v=t(p);v!==null&&(!(v.expirationTime>me)||q&&!B());){var k=v.callback;if(typeof k=="function"){v.callback=null,y=v.priorityLevel;var se=k(v.expirationTime<=me);me=s.unstable_now(),typeof se=="function"?v.callback=se:v===t(p)&&r(p),D(me)}else r(p);v=t(p)}if(v!==null)var Re=!0;else{var We=t(m);We!==null&&Q(R,We.startTime-me),Re=!1}return Re}finally{v=null,y=le,S=!1}}var L=!1,O=null,H=-1,b=5,P=-1;function B(){return!(s.unstable_now()-P<b)}function $(){if(O!==null){var q=s.unstable_now();P=q;var me=!0;try{me=O(!0,q)}finally{me?K():(L=!1,O=null)}}else L=!1}var K;if(typeof T=="function")K=function(){T($)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,de=ue.port2;ue.port1.onmessage=$,K=function(){de.postMessage(null)}}else K=function(){M($,0)};function re(q){O=q,L||(L=!0,K())}function Q(q,me){H=M(function(){q(s.unstable_now())},me)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(q){q.callback=null},s.unstable_continueExecution=function(){A||S||(A=!0,re(U))},s.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<q?Math.floor(1e3/q):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function(q){switch(y){case 1:case 2:case 3:var me=3;break;default:me=y}var le=y;y=me;try{return q()}finally{y=le}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(q,me){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var le=y;y=q;try{return me()}finally{y=le}},s.unstable_scheduleCallback=function(q,me,le){var k=s.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?k+le:k):le=k,q){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=le+se,q={id:x++,callback:me,priorityLevel:q,startTime:le,expirationTime:se,sortIndex:-1},le>k?(q.sortIndex=le,e(m,q),t(p)===null&&q===t(m)&&(C?(_(H),H=-1):C=!0,Q(R,le-k))):(q.sortIndex=se,e(p,q),A||S||(A=!0,re(U))),q},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(q){var me=y;return function(){var le=y;y=me;try{return q.apply(this,arguments)}finally{y=le}}}})(ju)),ju}var fm;function Xx(){return fm||(fm=1,zu.exports=Wx()),zu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hm;function qx(){if(hm)return qn;hm=1;var s=_f(),e=Xx();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},v={};function y(n){return p.call(v,n)?!0:p.call(x,n)?!1:m.test(n)?v[n]=!0:(x[n]=!0,!1)}function S(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function A(n,i,a,c){if(i===null||typeof i>"u"||S(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(n,i,a,c,f,g,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=w}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){M[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];M[i]=new C(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){M[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){M[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){M[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){M[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){M[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){M[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){M[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function T(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,T);M[i]=new C(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,T);M[i]=new C(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,T);M[i]=new C(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){M[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),M.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){M[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function D(n,i,a,c){var f=M.hasOwnProperty(i)?M[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(A(i,a,f,c)&&(a=null),c||f===null?y(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,c=f.attributeNamespace,a===null?n.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),L=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),B=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),Q=Symbol.for("react.offscreen"),q=Symbol.iterator;function me(n){return n===null||typeof n!="object"?null:(n=q&&n[q]||n["@@iterator"],typeof n=="function"?n:null)}var le=Object.assign,k;function se(n){if(k===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||""}return`
`+k+n}var Re=!1;function We(n,i){if(!n||Re)return"";Re=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(oe){var c=oe}Reflect.construct(n,[],i)}else{try{i.call()}catch(oe){c=oe}n.call(i.prototype)}else{try{throw Error()}catch(oe){c=oe}n()}}catch(oe){if(oe&&c&&typeof oe.stack=="string"){for(var f=oe.stack.split(`
`),g=c.stack.split(`
`),w=f.length-1,F=g.length-1;1<=w&&0<=F&&f[w]!==g[F];)F--;for(;1<=w&&0<=F;w--,F--)if(f[w]!==g[F]){if(w!==1||F!==1)do if(w--,F--,0>F||f[w]!==g[F]){var V=`
`+f[w].replace(" at new "," at ");return n.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",n.displayName)),V}while(1<=w&&0<=F);break}}}finally{Re=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?se(n):""}function Je(n){switch(n.tag){case 5:return se(n.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return n=We(n.type,!1),n;case 11:return n=We(n.type.render,!1),n;case 1:return n=We(n.type,!0),n;default:return""}}function ie(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case L:return"Portal";case b:return"Profiler";case H:return"StrictMode";case K:return"Suspense";case ue:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case $:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case de:return i=n.displayName||null,i!==null?i:ie(n.type)||"Memo";case re:i=n._payload,n=n._init;try{return ie(n(i))}catch{}}return null}function fe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(i);case 8:return i===H?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function _e(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ce(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function j(n){var i=Ce(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(w){c=""+w,g.call(this,w)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Fe(n){n._valueTracker||(n._valueTracker=j(n))}function Dt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ce(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Be(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ft(n,i){var a=i.checked;return le({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Ot(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=_e(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ht(n,i){i=i.checked,i!=null&&D(n,"checked",i,!1)}function Vt(n,i){ht(n,i);var a=_e(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Gt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Gt(n,i.type,_e(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function z(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Gt(n,i,a){(i!=="number"||Be(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var _t=Array.isArray;function Tt(n,i,a,c){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&c&&(n[a].defaultSelected=!0)}else{for(a=""+_e(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function $e(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function I(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(_t(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:_e(a)}}function E(n,i){var a=_e(i.value),c=_e(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function X(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function he(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ge(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?he(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ce,Ke=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ce=ce||document.createElement("div"),ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ce.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ae(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var He={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},at=["Webkit","ms","Moz","O"];Object.keys(He).forEach(function(n){at.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),He[i]=He[n]})});function ye(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||He.hasOwnProperty(n)&&He[n]?(""+i).trim():i+"px"}function Pe(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=ye(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,f):n[a]=f}}var Xe=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ze(n,i){if(i){if(Xe[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ne(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xt=null;function G(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ue=null,Ee=null,Ie=null;function Se(n){if(n=ka(n)){if(typeof Ue!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Oo(i),Ue(n.stateNode,n.type,i))}}function pe(n){Ee?Ie?Ie.push(n):Ie=[n]:Ee=n}function De(){if(Ee){var n=Ee,i=Ie;if(Ie=Ee=null,Se(n),i)for(n=0;n<i.length;n++)Se(i[n])}}function ut(n,i){return n(i)}function At(){}var Rt=!1;function Un(n,i,a){if(Rt)return n(i,a);Rt=!0;try{return ut(n,i,a)}finally{Rt=!1,(Ee!==null||Ie!==null)&&(At(),De())}}function hn(n,i){var a=n.stateNode;if(a===null)return null;var c=Oo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Yi=!1;if(d)try{var Ai={};Object.defineProperty(Ai,"passive",{get:function(){Yi=!0}}),window.addEventListener("test",Ai,Ai),window.removeEventListener("test",Ai,Ai)}catch{Yi=!1}function xr(n,i,a,c,f,g,w,F,V){var oe=Array.prototype.slice.call(arguments,3);try{i.apply(a,oe)}catch(ve){this.onError(ve)}}var Ci=!1,Ri=null,$i=!1,On=null,vr={onError:function(n){Ci=!0,Ri=n}};function $r(n,i,a,c,f,g,w,F,V){Ci=!1,Ri=null,xr.apply(vr,arguments)}function Kr(n,i,a,c,f,g,w,F,V){if($r.apply(this,arguments),Ci){if(Ci){var oe=Ri;Ci=!1,Ri=null}else throw Error(t(198));$i||($i=!0,On=oe)}}function Fn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function kn(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Ni(n){if(Fn(n)!==n)throw Error(t(188))}function Zr(n){var i=n.alternate;if(!i){if(i=Fn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var f=a.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===a)return Ni(f),n;if(g===c)return Ni(f),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=f,c=g;else{for(var w=!1,F=f.child;F;){if(F===a){w=!0,a=f,c=g;break}if(F===c){w=!0,c=f,a=g;break}F=F.sibling}if(!w){for(F=g.child;F;){if(F===a){w=!0,a=g,c=f;break}if(F===c){w=!0,c=g,a=f;break}F=F.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Ki(n){return n=Zr(n),n!==null?Pi(n):null}function Pi(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Pi(n);if(i!==null)return i;n=n.sibling}return null}var oi=e.unstable_scheduleCallback,Ts=e.unstable_cancelCallback,Sa=e.unstable_shouldYield,Qr=e.unstable_requestPaint,zt=e.unstable_now,N=e.unstable_getCurrentPriorityLevel,Y=e.unstable_ImmediatePriority,ae=e.unstable_UserBlockingPriority,ne=e.unstable_NormalPriority,J=e.unstable_LowPriority,Le=e.unstable_IdlePriority,ke=null,be=null;function qe(n){if(be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(ke,n,void 0,(n.current.flags&128)===128)}catch{}}var je=Math.clz32?Math.clz32:pt,ot=Math.log,rt=Math.LN2;function pt(n){return n>>>=0,n===0?32:31-(ot(n)/rt|0)|0}var Ct=64,jt=4194304;function kt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Nt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,f=n.suspendedLanes,g=n.pingedLanes,w=a&268435455;if(w!==0){var F=w&~f;F!==0?c=kt(F):(g&=w,g!==0&&(c=kt(g)))}else w=a&~f,w!==0?c=kt(w):g!==0&&(c=kt(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,g=i&-i,f>=g||f===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-je(i),f=1<<a,c|=n[a],i&=~f;return c}function st(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pt(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,g=n.pendingLanes;0<g;){var w=31-je(g),F=1<<w,V=f[w];V===-1?((F&a)===0||(F&c)!==0)&&(f[w]=st(F,i)):V<=i&&(n.expiredLanes|=F),g&=~F}}function Ge(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function tt(){var n=Ct;return Ct<<=1,(Ct&4194240)===0&&(Ct=64),n}function qt(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Bt(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-je(i),n[i]=a}function rn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-je(a),g=1<<f;i[f]=0,c[f]=-1,n[f]=-1,a&=~g}}function Te(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-je(a),f=1<<c;f&i|n[c]&i&&(n[c]|=i),a&=~f}}var et=0;function pn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var mn,gn,As,Di,Hf,lc=!1,So=[],_r=null,yr=null,Sr=null,Ma=new Map,Ea=new Map,Mr=[],cg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gf(n,i){switch(n){case"focusin":case"focusout":_r=null;break;case"dragenter":case"dragleave":yr=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":Ma.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ea.delete(i.pointerId)}}function wa(n,i,a,c,f,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},i!==null&&(i=ka(i),i!==null&&gn(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function ug(n,i,a,c,f){switch(i){case"focusin":return _r=wa(_r,n,i,a,c,f),!0;case"dragenter":return yr=wa(yr,n,i,a,c,f),!0;case"mouseover":return Sr=wa(Sr,n,i,a,c,f),!0;case"pointerover":var g=f.pointerId;return Ma.set(g,wa(Ma.get(g)||null,n,i,a,c,f)),!0;case"gotpointercapture":return g=f.pointerId,Ea.set(g,wa(Ea.get(g)||null,n,i,a,c,f)),!0}return!1}function Wf(n){var i=Jr(n.target);if(i!==null){var a=Fn(i);if(a!==null){if(i=a.tag,i===13){if(i=kn(a),i!==null){n.blockedOn=i,Hf(n.priority,function(){As(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Mo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=uc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);xt=c,a.target.dispatchEvent(c),xt=null}else return i=ka(a),i!==null&&gn(i),n.blockedOn=a,!1;i.shift()}return!0}function Xf(n,i,a){Mo(n)&&a.delete(i)}function dg(){lc=!1,_r!==null&&Mo(_r)&&(_r=null),yr!==null&&Mo(yr)&&(yr=null),Sr!==null&&Mo(Sr)&&(Sr=null),Ma.forEach(Xf),Ea.forEach(Xf)}function ba(n,i){n.blockedOn===i&&(n.blockedOn=null,lc||(lc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,dg)))}function Ta(n){function i(f){return ba(f,n)}if(0<So.length){ba(So[0],n);for(var a=1;a<So.length;a++){var c=So[a];c.blockedOn===n&&(c.blockedOn=null)}}for(_r!==null&&ba(_r,n),yr!==null&&ba(yr,n),Sr!==null&&ba(Sr,n),Ma.forEach(i),Ea.forEach(i),a=0;a<Mr.length;a++)c=Mr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Mr.length&&(a=Mr[0],a.blockedOn===null);)Wf(a),a.blockedOn===null&&Mr.shift()}var Cs=R.ReactCurrentBatchConfig,Eo=!0;function fg(n,i,a,c){var f=et,g=Cs.transition;Cs.transition=null;try{et=1,cc(n,i,a,c)}finally{et=f,Cs.transition=g}}function hg(n,i,a,c){var f=et,g=Cs.transition;Cs.transition=null;try{et=4,cc(n,i,a,c)}finally{et=f,Cs.transition=g}}function cc(n,i,a,c){if(Eo){var f=uc(n,i,a,c);if(f===null)Ac(n,i,c,wo,a),Gf(n,c);else if(ug(f,n,i,a,c))c.stopPropagation();else if(Gf(n,c),i&4&&-1<cg.indexOf(n)){for(;f!==null;){var g=ka(f);if(g!==null&&mn(g),g=uc(n,i,a,c),g===null&&Ac(n,i,c,wo,a),g===f)break;f=g}f!==null&&c.stopPropagation()}else Ac(n,i,c,null,a)}}var wo=null;function uc(n,i,a,c){if(wo=null,n=G(c),n=Jr(n),n!==null)if(i=Fn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=kn(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return wo=n,null}function qf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(N()){case Y:return 1;case ae:return 4;case ne:case J:return 16;case Le:return 536870912;default:return 16}default:return 16}}var Er=null,dc=null,bo=null;function Yf(){if(bo)return bo;var n,i=dc,a=i.length,c,f="value"in Er?Er.value:Er.textContent,g=f.length;for(n=0;n<a&&i[n]===f[n];n++);var w=a-n;for(c=1;c<=w&&i[a-c]===f[g-c];c++);return bo=f.slice(n,1<c?1-c:void 0)}function To(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ao(){return!0}function $f(){return!1}function ei(n){function i(a,c,f,g,w){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var F in n)n.hasOwnProperty(F)&&(a=n[F],this[F]=a?a(g):g[F]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Ao:$f,this.isPropagationStopped=$f,this}return le(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ao)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ao)},persist:function(){},isPersistent:Ao}),i}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fc=ei(Rs),Aa=le({},Rs,{view:0,detail:0}),pg=ei(Aa),hc,pc,Ca,Co=le({},Aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ca&&(Ca&&n.type==="mousemove"?(hc=n.screenX-Ca.screenX,pc=n.screenY-Ca.screenY):pc=hc=0,Ca=n),hc)},movementY:function(n){return"movementY"in n?n.movementY:pc}}),Kf=ei(Co),mg=le({},Co,{dataTransfer:0}),gg=ei(mg),xg=le({},Aa,{relatedTarget:0}),mc=ei(xg),vg=le({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),_g=ei(vg),yg=le({},Rs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Sg=ei(yg),Mg=le({},Rs,{data:0}),Zf=ei(Mg),Eg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=bg[n])?!!i[n]:!1}function gc(){return Tg}var Ag=le({},Aa,{key:function(n){if(n.key){var i=Eg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=To(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?wg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gc,charCode:function(n){return n.type==="keypress"?To(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?To(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Cg=ei(Ag),Rg=le({},Co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qf=ei(Rg),Ng=le({},Aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gc}),Pg=ei(Ng),Dg=le({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lg=ei(Dg),Ig=le({},Co,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ug=ei(Ig),Og=[9,13,27,32],xc=d&&"CompositionEvent"in window,Ra=null;d&&"documentMode"in document&&(Ra=document.documentMode);var Fg=d&&"TextEvent"in window&&!Ra,Jf=d&&(!xc||Ra&&8<Ra&&11>=Ra),eh=" ",th=!1;function nh(n,i){switch(n){case"keyup":return Og.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ih(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ns=!1;function kg(n,i){switch(n){case"compositionend":return ih(i);case"keypress":return i.which!==32?null:(th=!0,eh);case"textInput":return n=i.data,n===eh&&th?null:n;default:return null}}function Bg(n,i){if(Ns)return n==="compositionend"||!xc&&nh(n,i)?(n=Yf(),bo=dc=Er=null,Ns=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Jf&&i.locale!=="ko"?null:i.data;default:return null}}var zg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!zg[n.type]:i==="textarea"}function sh(n,i,a,c){pe(c),i=Lo(i,"onChange"),0<i.length&&(a=new fc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Na=null,Pa=null;function jg(n){Eh(n,0)}function Ro(n){var i=Us(n);if(Dt(i))return n}function Vg(n,i){if(n==="change")return i}var ah=!1;if(d){var vc;if(d){var _c="oninput"in document;if(!_c){var oh=document.createElement("div");oh.setAttribute("oninput","return;"),_c=typeof oh.oninput=="function"}vc=_c}else vc=!1;ah=vc&&(!document.documentMode||9<document.documentMode)}function lh(){Na&&(Na.detachEvent("onpropertychange",ch),Pa=Na=null)}function ch(n){if(n.propertyName==="value"&&Ro(Pa)){var i=[];sh(i,Pa,n,G(n)),Un(jg,i)}}function Hg(n,i,a){n==="focusin"?(lh(),Na=i,Pa=a,Na.attachEvent("onpropertychange",ch)):n==="focusout"&&lh()}function Gg(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ro(Pa)}function Wg(n,i){if(n==="click")return Ro(i)}function Xg(n,i){if(n==="input"||n==="change")return Ro(i)}function qg(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var gi=typeof Object.is=="function"?Object.is:qg;function Da(n,i){if(gi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!p.call(i,f)||!gi(n[f],i[f]))return!1}return!0}function uh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function dh(n,i){var a=uh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=uh(a)}}function fh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?fh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function hh(){for(var n=window,i=Be();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Be(n.document)}return i}function yc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Yg(n){var i=hh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&fh(a.ownerDocument.documentElement,a)){if(c!==null&&yc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,g=Math.min(c.start,f);c=c.end===void 0?g:Math.min(c.end,f),!n.extend&&g>c&&(f=c,c=g,g=f),f=dh(a,g);var w=dh(a,c);f&&w&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var $g=d&&"documentMode"in document&&11>=document.documentMode,Ps=null,Sc=null,La=null,Mc=!1;function ph(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Mc||Ps==null||Ps!==Be(c)||(c=Ps,"selectionStart"in c&&yc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),La&&Da(La,c)||(La=c,c=Lo(Sc,"onSelect"),0<c.length&&(i=new fc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ps)))}function No(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ds={animationend:No("Animation","AnimationEnd"),animationiteration:No("Animation","AnimationIteration"),animationstart:No("Animation","AnimationStart"),transitionend:No("Transition","TransitionEnd")},Ec={},mh={};d&&(mh=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function Po(n){if(Ec[n])return Ec[n];if(!Ds[n])return n;var i=Ds[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in mh)return Ec[n]=i[a];return n}var gh=Po("animationend"),xh=Po("animationiteration"),vh=Po("animationstart"),_h=Po("transitionend"),yh=new Map,Sh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(n,i){yh.set(n,i),l(i,[n])}for(var wc=0;wc<Sh.length;wc++){var bc=Sh[wc],Kg=bc.toLowerCase(),Zg=bc[0].toUpperCase()+bc.slice(1);wr(Kg,"on"+Zg)}wr(gh,"onAnimationEnd"),wr(xh,"onAnimationIteration"),wr(vh,"onAnimationStart"),wr("dblclick","onDoubleClick"),wr("focusin","onFocus"),wr("focusout","onBlur"),wr(_h,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ia));function Mh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Kr(c,i,void 0,n),n.currentTarget=null}function Eh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],f=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var w=c.length-1;0<=w;w--){var F=c[w],V=F.instance,oe=F.currentTarget;if(F=F.listener,V!==g&&f.isPropagationStopped())break e;Mh(f,F,oe),g=V}else for(w=0;w<c.length;w++){if(F=c[w],V=F.instance,oe=F.currentTarget,F=F.listener,V!==g&&f.isPropagationStopped())break e;Mh(f,F,oe),g=V}}}if($i)throw n=On,$i=!1,On=null,n}function Yt(n,i){var a=i[Lc];a===void 0&&(a=i[Lc]=new Set);var c=n+"__bubble";a.has(c)||(wh(i,n,2,!1),a.add(c))}function Tc(n,i,a){var c=0;i&&(c|=4),wh(a,n,c,i)}var Do="_reactListening"+Math.random().toString(36).slice(2);function Ua(n){if(!n[Do]){n[Do]=!0,r.forEach(function(a){a!=="selectionchange"&&(Qg.has(a)||Tc(a,!1,n),Tc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Do]||(i[Do]=!0,Tc("selectionchange",!1,i))}}function wh(n,i,a,c){switch(qf(i)){case 1:var f=fg;break;case 4:f=hg;break;default:f=cc}a=f.bind(null,i,a,n),f=void 0,!Yi||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function Ac(n,i,a,c,f){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var F=c.stateNode.containerInfo;if(F===f||F.nodeType===8&&F.parentNode===f)break;if(w===4)for(w=c.return;w!==null;){var V=w.tag;if((V===3||V===4)&&(V=w.stateNode.containerInfo,V===f||V.nodeType===8&&V.parentNode===f))return;w=w.return}for(;F!==null;){if(w=Jr(F),w===null)return;if(V=w.tag,V===5||V===6){c=g=w;continue e}F=F.parentNode}}c=c.return}Un(function(){var oe=g,ve=G(a),Me=[];e:{var xe=yh.get(n);if(xe!==void 0){var Ve=fc,Ze=n;switch(n){case"keypress":if(To(a)===0)break e;case"keydown":case"keyup":Ve=Cg;break;case"focusin":Ze="focus",Ve=mc;break;case"focusout":Ze="blur",Ve=mc;break;case"beforeblur":case"afterblur":Ve=mc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ve=Kf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ve=gg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ve=Pg;break;case gh:case xh:case vh:Ve=_g;break;case _h:Ve=Lg;break;case"scroll":Ve=pg;break;case"wheel":Ve=Ug;break;case"copy":case"cut":case"paste":Ve=Sg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ve=Qf}var nt=(i&4)!==0,nn=!nt&&n==="scroll",ee=nt?xe!==null?xe+"Capture":null:xe;nt=[];for(var W=oe,te;W!==null;){te=W;var we=te.stateNode;if(te.tag===5&&we!==null&&(te=we,ee!==null&&(we=hn(W,ee),we!=null&&nt.push(Oa(W,we,te)))),nn)break;W=W.return}0<nt.length&&(xe=new Ve(xe,Ze,null,a,ve),Me.push({event:xe,listeners:nt}))}}if((i&7)===0){e:{if(xe=n==="mouseover"||n==="pointerover",Ve=n==="mouseout"||n==="pointerout",xe&&a!==xt&&(Ze=a.relatedTarget||a.fromElement)&&(Jr(Ze)||Ze[Zi]))break e;if((Ve||xe)&&(xe=ve.window===ve?ve:(xe=ve.ownerDocument)?xe.defaultView||xe.parentWindow:window,Ve?(Ze=a.relatedTarget||a.toElement,Ve=oe,Ze=Ze?Jr(Ze):null,Ze!==null&&(nn=Fn(Ze),Ze!==nn||Ze.tag!==5&&Ze.tag!==6)&&(Ze=null)):(Ve=null,Ze=oe),Ve!==Ze)){if(nt=Kf,we="onMouseLeave",ee="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(nt=Qf,we="onPointerLeave",ee="onPointerEnter",W="pointer"),nn=Ve==null?xe:Us(Ve),te=Ze==null?xe:Us(Ze),xe=new nt(we,W+"leave",Ve,a,ve),xe.target=nn,xe.relatedTarget=te,we=null,Jr(ve)===oe&&(nt=new nt(ee,W+"enter",Ze,a,ve),nt.target=te,nt.relatedTarget=nn,we=nt),nn=we,Ve&&Ze)t:{for(nt=Ve,ee=Ze,W=0,te=nt;te;te=Ls(te))W++;for(te=0,we=ee;we;we=Ls(we))te++;for(;0<W-te;)nt=Ls(nt),W--;for(;0<te-W;)ee=Ls(ee),te--;for(;W--;){if(nt===ee||ee!==null&&nt===ee.alternate)break t;nt=Ls(nt),ee=Ls(ee)}nt=null}else nt=null;Ve!==null&&bh(Me,xe,Ve,nt,!1),Ze!==null&&nn!==null&&bh(Me,nn,Ze,nt,!0)}}e:{if(xe=oe?Us(oe):window,Ve=xe.nodeName&&xe.nodeName.toLowerCase(),Ve==="select"||Ve==="input"&&xe.type==="file")var it=Vg;else if(rh(xe))if(ah)it=Xg;else{it=Gg;var lt=Hg}else(Ve=xe.nodeName)&&Ve.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(it=Wg);if(it&&(it=it(n,oe))){sh(Me,it,a,ve);break e}lt&&lt(n,xe,oe),n==="focusout"&&(lt=xe._wrapperState)&&lt.controlled&&xe.type==="number"&&Gt(xe,"number",xe.value)}switch(lt=oe?Us(oe):window,n){case"focusin":(rh(lt)||lt.contentEditable==="true")&&(Ps=lt,Sc=oe,La=null);break;case"focusout":La=Sc=Ps=null;break;case"mousedown":Mc=!0;break;case"contextmenu":case"mouseup":case"dragend":Mc=!1,ph(Me,a,ve);break;case"selectionchange":if($g)break;case"keydown":case"keyup":ph(Me,a,ve)}var ct;if(xc)e:{switch(n){case"compositionstart":var mt="onCompositionStart";break e;case"compositionend":mt="onCompositionEnd";break e;case"compositionupdate":mt="onCompositionUpdate";break e}mt=void 0}else Ns?nh(n,a)&&(mt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(mt="onCompositionStart");mt&&(Jf&&a.locale!=="ko"&&(Ns||mt!=="onCompositionStart"?mt==="onCompositionEnd"&&Ns&&(ct=Yf()):(Er=ve,dc="value"in Er?Er.value:Er.textContent,Ns=!0)),lt=Lo(oe,mt),0<lt.length&&(mt=new Zf(mt,n,null,a,ve),Me.push({event:mt,listeners:lt}),ct?mt.data=ct:(ct=ih(a),ct!==null&&(mt.data=ct)))),(ct=Fg?kg(n,a):Bg(n,a))&&(oe=Lo(oe,"onBeforeInput"),0<oe.length&&(ve=new Zf("onBeforeInput","beforeinput",null,a,ve),Me.push({event:ve,listeners:oe}),ve.data=ct))}Eh(Me,i)})}function Oa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Lo(n,i){for(var a=i+"Capture",c=[];n!==null;){var f=n,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=hn(n,a),g!=null&&c.unshift(Oa(n,g,f)),g=hn(n,i),g!=null&&c.push(Oa(n,g,f))),n=n.return}return c}function Ls(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function bh(n,i,a,c,f){for(var g=i._reactName,w=[];a!==null&&a!==c;){var F=a,V=F.alternate,oe=F.stateNode;if(V!==null&&V===c)break;F.tag===5&&oe!==null&&(F=oe,f?(V=hn(a,g),V!=null&&w.unshift(Oa(a,V,F))):f||(V=hn(a,g),V!=null&&w.push(Oa(a,V,F)))),a=a.return}w.length!==0&&n.push({event:i,listeners:w})}var Jg=/\r\n?/g,ex=/\u0000|\uFFFD/g;function Th(n){return(typeof n=="string"?n:""+n).replace(Jg,`
`).replace(ex,"")}function Io(n,i,a){if(i=Th(i),Th(n)!==i&&a)throw Error(t(425))}function Uo(){}var Cc=null,Rc=null;function Nc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Pc=typeof setTimeout=="function"?setTimeout:void 0,tx=typeof clearTimeout=="function"?clearTimeout:void 0,Ah=typeof Promise=="function"?Promise:void 0,nx=typeof queueMicrotask=="function"?queueMicrotask:typeof Ah<"u"?function(n){return Ah.resolve(null).then(n).catch(ix)}:Pc;function ix(n){setTimeout(function(){throw n})}function Dc(n,i){var a=i,c=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){n.removeChild(f),Ta(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);Ta(i)}function br(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Ch(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Is=Math.random().toString(36).slice(2),Li="__reactFiber$"+Is,Fa="__reactProps$"+Is,Zi="__reactContainer$"+Is,Lc="__reactEvents$"+Is,rx="__reactListeners$"+Is,sx="__reactHandles$"+Is;function Jr(n){var i=n[Li];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Zi]||a[Li]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Ch(n);n!==null;){if(a=n[Li])return a;n=Ch(n)}return i}n=a,a=n.parentNode}return null}function ka(n){return n=n[Li]||n[Zi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Us(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Oo(n){return n[Fa]||null}var Ic=[],Os=-1;function Tr(n){return{current:n}}function $t(n){0>Os||(n.current=Ic[Os],Ic[Os]=null,Os--)}function Xt(n,i){Os++,Ic[Os]=n.current,n.current=i}var Ar={},Cn=Tr(Ar),Vn=Tr(!1),es=Ar;function Fs(n,i){var a=n.type.contextTypes;if(!a)return Ar;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in a)f[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Hn(n){return n=n.childContextTypes,n!=null}function Fo(){$t(Vn),$t(Cn)}function Rh(n,i,a){if(Cn.current!==Ar)throw Error(t(168));Xt(Cn,i),Xt(Vn,a)}function Nh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,fe(n)||"Unknown",f));return le({},a,c)}function ko(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ar,es=Cn.current,Xt(Cn,n),Xt(Vn,Vn.current),!0}function Ph(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Nh(n,i,es),c.__reactInternalMemoizedMergedChildContext=n,$t(Vn),$t(Cn),Xt(Cn,n)):$t(Vn),Xt(Vn,a)}var Qi=null,Bo=!1,Uc=!1;function Dh(n){Qi===null?Qi=[n]:Qi.push(n)}function ax(n){Bo=!0,Dh(n)}function Cr(){if(!Uc&&Qi!==null){Uc=!0;var n=0,i=et;try{var a=Qi;for(et=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Qi=null,Bo=!1}catch(f){throw Qi!==null&&(Qi=Qi.slice(n+1)),oi(Y,Cr),f}finally{et=i,Uc=!1}}return null}var ks=[],Bs=0,zo=null,jo=0,li=[],ci=0,ts=null,Ji=1,er="";function ns(n,i){ks[Bs++]=jo,ks[Bs++]=zo,zo=n,jo=i}function Lh(n,i,a){li[ci++]=Ji,li[ci++]=er,li[ci++]=ts,ts=n;var c=Ji;n=er;var f=32-je(c)-1;c&=~(1<<f),a+=1;var g=32-je(i)+f;if(30<g){var w=f-f%5;g=(c&(1<<w)-1).toString(32),c>>=w,f-=w,Ji=1<<32-je(i)+f|a<<f|c,er=g+n}else Ji=1<<g|a<<f|c,er=n}function Oc(n){n.return!==null&&(ns(n,1),Lh(n,1,0))}function Fc(n){for(;n===zo;)zo=ks[--Bs],ks[Bs]=null,jo=ks[--Bs],ks[Bs]=null;for(;n===ts;)ts=li[--ci],li[ci]=null,er=li[--ci],li[ci]=null,Ji=li[--ci],li[ci]=null}var ti=null,ni=null,Kt=!1,xi=null;function Ih(n,i){var a=hi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Uh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ti=n,ni=br(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ti=n,ni=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=ts!==null?{id:Ji,overflow:er}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=hi(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,ti=n,ni=null,!0):!1;default:return!1}}function kc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Bc(n){if(Kt){var i=ni;if(i){var a=i;if(!Uh(n,i)){if(kc(n))throw Error(t(418));i=br(a.nextSibling);var c=ti;i&&Uh(n,i)?Ih(c,a):(n.flags=n.flags&-4097|2,Kt=!1,ti=n)}}else{if(kc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Kt=!1,ti=n}}}function Oh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ti=n}function Vo(n){if(n!==ti)return!1;if(!Kt)return Oh(n),Kt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Nc(n.type,n.memoizedProps)),i&&(i=ni)){if(kc(n))throw Fh(),Error(t(418));for(;i;)Ih(n,i),i=br(i.nextSibling)}if(Oh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){ni=br(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}ni=null}}else ni=ti?br(n.stateNode.nextSibling):null;return!0}function Fh(){for(var n=ni;n;)n=br(n.nextSibling)}function zs(){ni=ti=null,Kt=!1}function zc(n){xi===null?xi=[n]:xi.push(n)}var ox=R.ReactCurrentBatchConfig;function Ba(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var f=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(w){var F=f.refs;w===null?delete F[g]:F[g]=w},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ho(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function kh(n){var i=n._init;return i(n._payload)}function Bh(n){function i(ee,W){if(n){var te=ee.deletions;te===null?(ee.deletions=[W],ee.flags|=16):te.push(W)}}function a(ee,W){if(!n)return null;for(;W!==null;)i(ee,W),W=W.sibling;return null}function c(ee,W){for(ee=new Map;W!==null;)W.key!==null?ee.set(W.key,W):ee.set(W.index,W),W=W.sibling;return ee}function f(ee,W){return ee=Or(ee,W),ee.index=0,ee.sibling=null,ee}function g(ee,W,te){return ee.index=te,n?(te=ee.alternate,te!==null?(te=te.index,te<W?(ee.flags|=2,W):te):(ee.flags|=2,W)):(ee.flags|=1048576,W)}function w(ee){return n&&ee.alternate===null&&(ee.flags|=2),ee}function F(ee,W,te,we){return W===null||W.tag!==6?(W=Pu(te,ee.mode,we),W.return=ee,W):(W=f(W,te),W.return=ee,W)}function V(ee,W,te,we){var it=te.type;return it===O?ve(ee,W,te.props.children,we,te.key):W!==null&&(W.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===re&&kh(it)===W.type)?(we=f(W,te.props),we.ref=Ba(ee,W,te),we.return=ee,we):(we=hl(te.type,te.key,te.props,null,ee.mode,we),we.ref=Ba(ee,W,te),we.return=ee,we)}function oe(ee,W,te,we){return W===null||W.tag!==4||W.stateNode.containerInfo!==te.containerInfo||W.stateNode.implementation!==te.implementation?(W=Du(te,ee.mode,we),W.return=ee,W):(W=f(W,te.children||[]),W.return=ee,W)}function ve(ee,W,te,we,it){return W===null||W.tag!==7?(W=us(te,ee.mode,we,it),W.return=ee,W):(W=f(W,te),W.return=ee,W)}function Me(ee,W,te){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Pu(""+W,ee.mode,te),W.return=ee,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case U:return te=hl(W.type,W.key,W.props,null,ee.mode,te),te.ref=Ba(ee,null,W),te.return=ee,te;case L:return W=Du(W,ee.mode,te),W.return=ee,W;case re:var we=W._init;return Me(ee,we(W._payload),te)}if(_t(W)||me(W))return W=us(W,ee.mode,te,null),W.return=ee,W;Ho(ee,W)}return null}function xe(ee,W,te,we){var it=W!==null?W.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return it!==null?null:F(ee,W,""+te,we);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case U:return te.key===it?V(ee,W,te,we):null;case L:return te.key===it?oe(ee,W,te,we):null;case re:return it=te._init,xe(ee,W,it(te._payload),we)}if(_t(te)||me(te))return it!==null?null:ve(ee,W,te,we,null);Ho(ee,te)}return null}function Ve(ee,W,te,we,it){if(typeof we=="string"&&we!==""||typeof we=="number")return ee=ee.get(te)||null,F(W,ee,""+we,it);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case U:return ee=ee.get(we.key===null?te:we.key)||null,V(W,ee,we,it);case L:return ee=ee.get(we.key===null?te:we.key)||null,oe(W,ee,we,it);case re:var lt=we._init;return Ve(ee,W,te,lt(we._payload),it)}if(_t(we)||me(we))return ee=ee.get(te)||null,ve(W,ee,we,it,null);Ho(W,we)}return null}function Ze(ee,W,te,we){for(var it=null,lt=null,ct=W,mt=W=0,_n=null;ct!==null&&mt<te.length;mt++){ct.index>mt?(_n=ct,ct=null):_n=ct.sibling;var Ft=xe(ee,ct,te[mt],we);if(Ft===null){ct===null&&(ct=_n);break}n&&ct&&Ft.alternate===null&&i(ee,ct),W=g(Ft,W,mt),lt===null?it=Ft:lt.sibling=Ft,lt=Ft,ct=_n}if(mt===te.length)return a(ee,ct),Kt&&ns(ee,mt),it;if(ct===null){for(;mt<te.length;mt++)ct=Me(ee,te[mt],we),ct!==null&&(W=g(ct,W,mt),lt===null?it=ct:lt.sibling=ct,lt=ct);return Kt&&ns(ee,mt),it}for(ct=c(ee,ct);mt<te.length;mt++)_n=Ve(ct,ee,mt,te[mt],we),_n!==null&&(n&&_n.alternate!==null&&ct.delete(_n.key===null?mt:_n.key),W=g(_n,W,mt),lt===null?it=_n:lt.sibling=_n,lt=_n);return n&&ct.forEach(function(Fr){return i(ee,Fr)}),Kt&&ns(ee,mt),it}function nt(ee,W,te,we){var it=me(te);if(typeof it!="function")throw Error(t(150));if(te=it.call(te),te==null)throw Error(t(151));for(var lt=it=null,ct=W,mt=W=0,_n=null,Ft=te.next();ct!==null&&!Ft.done;mt++,Ft=te.next()){ct.index>mt?(_n=ct,ct=null):_n=ct.sibling;var Fr=xe(ee,ct,Ft.value,we);if(Fr===null){ct===null&&(ct=_n);break}n&&ct&&Fr.alternate===null&&i(ee,ct),W=g(Fr,W,mt),lt===null?it=Fr:lt.sibling=Fr,lt=Fr,ct=_n}if(Ft.done)return a(ee,ct),Kt&&ns(ee,mt),it;if(ct===null){for(;!Ft.done;mt++,Ft=te.next())Ft=Me(ee,Ft.value,we),Ft!==null&&(W=g(Ft,W,mt),lt===null?it=Ft:lt.sibling=Ft,lt=Ft);return Kt&&ns(ee,mt),it}for(ct=c(ee,ct);!Ft.done;mt++,Ft=te.next())Ft=Ve(ct,ee,mt,Ft.value,we),Ft!==null&&(n&&Ft.alternate!==null&&ct.delete(Ft.key===null?mt:Ft.key),W=g(Ft,W,mt),lt===null?it=Ft:lt.sibling=Ft,lt=Ft);return n&&ct.forEach(function(zx){return i(ee,zx)}),Kt&&ns(ee,mt),it}function nn(ee,W,te,we){if(typeof te=="object"&&te!==null&&te.type===O&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case U:e:{for(var it=te.key,lt=W;lt!==null;){if(lt.key===it){if(it=te.type,it===O){if(lt.tag===7){a(ee,lt.sibling),W=f(lt,te.props.children),W.return=ee,ee=W;break e}}else if(lt.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===re&&kh(it)===lt.type){a(ee,lt.sibling),W=f(lt,te.props),W.ref=Ba(ee,lt,te),W.return=ee,ee=W;break e}a(ee,lt);break}else i(ee,lt);lt=lt.sibling}te.type===O?(W=us(te.props.children,ee.mode,we,te.key),W.return=ee,ee=W):(we=hl(te.type,te.key,te.props,null,ee.mode,we),we.ref=Ba(ee,W,te),we.return=ee,ee=we)}return w(ee);case L:e:{for(lt=te.key;W!==null;){if(W.key===lt)if(W.tag===4&&W.stateNode.containerInfo===te.containerInfo&&W.stateNode.implementation===te.implementation){a(ee,W.sibling),W=f(W,te.children||[]),W.return=ee,ee=W;break e}else{a(ee,W);break}else i(ee,W);W=W.sibling}W=Du(te,ee.mode,we),W.return=ee,ee=W}return w(ee);case re:return lt=te._init,nn(ee,W,lt(te._payload),we)}if(_t(te))return Ze(ee,W,te,we);if(me(te))return nt(ee,W,te,we);Ho(ee,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,W!==null&&W.tag===6?(a(ee,W.sibling),W=f(W,te),W.return=ee,ee=W):(a(ee,W),W=Pu(te,ee.mode,we),W.return=ee,ee=W),w(ee)):a(ee,W)}return nn}var js=Bh(!0),zh=Bh(!1),Go=Tr(null),Wo=null,Vs=null,jc=null;function Vc(){jc=Vs=Wo=null}function Hc(n){var i=Go.current;$t(Go),n._currentValue=i}function Gc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Hs(n,i){Wo=n,jc=Vs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Gn=!0),n.firstContext=null)}function ui(n){var i=n._currentValue;if(jc!==n)if(n={context:n,memoizedValue:i,next:null},Vs===null){if(Wo===null)throw Error(t(308));Vs=n,Wo.dependencies={lanes:0,firstContext:n}}else Vs=Vs.next=n;return i}var is=null;function Wc(n){is===null?is=[n]:is.push(n)}function jh(n,i,a,c){var f=i.interleaved;return f===null?(a.next=a,Wc(i)):(a.next=f.next,f.next=a),i.interleaved=a,tr(n,c)}function tr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Rr=!1;function Xc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function nr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Nr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Lt&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,tr(n,a)}return f=c.interleaved,f===null?(i.next=i,Wc(c)):(i.next=f.next,f.next=i),c.interleaved=i,tr(n,a)}function Xo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Te(n,a)}}function Hh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?f=g=w:g=g.next=w,a=a.next}while(a!==null);g===null?f=g=i:g=g.next=i}else f=g=i;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function qo(n,i,a,c){var f=n.updateQueue;Rr=!1;var g=f.firstBaseUpdate,w=f.lastBaseUpdate,F=f.shared.pending;if(F!==null){f.shared.pending=null;var V=F,oe=V.next;V.next=null,w===null?g=oe:w.next=oe,w=V;var ve=n.alternate;ve!==null&&(ve=ve.updateQueue,F=ve.lastBaseUpdate,F!==w&&(F===null?ve.firstBaseUpdate=oe:F.next=oe,ve.lastBaseUpdate=V))}if(g!==null){var Me=f.baseState;w=0,ve=oe=V=null,F=g;do{var xe=F.lane,Ve=F.eventTime;if((c&xe)===xe){ve!==null&&(ve=ve.next={eventTime:Ve,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var Ze=n,nt=F;switch(xe=i,Ve=a,nt.tag){case 1:if(Ze=nt.payload,typeof Ze=="function"){Me=Ze.call(Ve,Me,xe);break e}Me=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=nt.payload,xe=typeof Ze=="function"?Ze.call(Ve,Me,xe):Ze,xe==null)break e;Me=le({},Me,xe);break e;case 2:Rr=!0}}F.callback!==null&&F.lane!==0&&(n.flags|=64,xe=f.effects,xe===null?f.effects=[F]:xe.push(F))}else Ve={eventTime:Ve,lane:xe,tag:F.tag,payload:F.payload,callback:F.callback,next:null},ve===null?(oe=ve=Ve,V=Me):ve=ve.next=Ve,w|=xe;if(F=F.next,F===null){if(F=f.shared.pending,F===null)break;xe=F,F=xe.next,xe.next=null,f.lastBaseUpdate=xe,f.shared.pending=null}}while(!0);if(ve===null&&(V=Me),f.baseState=V,f.firstBaseUpdate=oe,f.lastBaseUpdate=ve,i=f.shared.interleaved,i!==null){f=i;do w|=f.lane,f=f.next;while(f!==i)}else g===null&&(f.shared.lanes=0);as|=w,n.lanes=w,n.memoizedState=Me}}function Gh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var za={},Ii=Tr(za),ja=Tr(za),Va=Tr(za);function rs(n){if(n===za)throw Error(t(174));return n}function qc(n,i){switch(Xt(Va,i),Xt(ja,n),Xt(Ii,za),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ge(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ge(i,n)}$t(Ii),Xt(Ii,i)}function Gs(){$t(Ii),$t(ja),$t(Va)}function Wh(n){rs(Va.current);var i=rs(Ii.current),a=ge(i,n.type);i!==a&&(Xt(ja,n),Xt(Ii,a))}function Yc(n){ja.current===n&&($t(Ii),$t(ja))}var Zt=Tr(0);function Yo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var $c=[];function Kc(){for(var n=0;n<$c.length;n++)$c[n]._workInProgressVersionPrimary=null;$c.length=0}var $o=R.ReactCurrentDispatcher,Zc=R.ReactCurrentBatchConfig,ss=0,Qt=null,on=null,xn=null,Ko=!1,Ha=!1,Ga=0,lx=0;function Rn(){throw Error(t(321))}function Qc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!gi(n[a],i[a]))return!1;return!0}function Jc(n,i,a,c,f,g){if(ss=g,Qt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,$o.current=n===null||n.memoizedState===null?fx:hx,n=a(c,f),Ha){g=0;do{if(Ha=!1,Ga=0,25<=g)throw Error(t(301));g+=1,xn=on=null,i.updateQueue=null,$o.current=px,n=a(c,f)}while(Ha)}if($o.current=Jo,i=on!==null&&on.next!==null,ss=0,xn=on=Qt=null,Ko=!1,i)throw Error(t(300));return n}function eu(){var n=Ga!==0;return Ga=0,n}function Ui(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?Qt.memoizedState=xn=n:xn=xn.next=n,xn}function di(){if(on===null){var n=Qt.alternate;n=n!==null?n.memoizedState:null}else n=on.next;var i=xn===null?Qt.memoizedState:xn.next;if(i!==null)xn=i,on=n;else{if(n===null)throw Error(t(310));on=n,n={memoizedState:on.memoizedState,baseState:on.baseState,baseQueue:on.baseQueue,queue:on.queue,next:null},xn===null?Qt.memoizedState=xn=n:xn=xn.next=n}return xn}function Wa(n,i){return typeof i=="function"?i(n):i}function tu(n){var i=di(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=on,f=c.baseQueue,g=a.pending;if(g!==null){if(f!==null){var w=f.next;f.next=g.next,g.next=w}c.baseQueue=f=g,a.pending=null}if(f!==null){g=f.next,c=c.baseState;var F=w=null,V=null,oe=g;do{var ve=oe.lane;if((ss&ve)===ve)V!==null&&(V=V.next={lane:0,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),c=oe.hasEagerState?oe.eagerState:n(c,oe.action);else{var Me={lane:ve,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null};V===null?(F=V=Me,w=c):V=V.next=Me,Qt.lanes|=ve,as|=ve}oe=oe.next}while(oe!==null&&oe!==g);V===null?w=c:V.next=F,gi(c,i.memoizedState)||(Gn=!0),i.memoizedState=c,i.baseState=w,i.baseQueue=V,a.lastRenderedState=c}if(n=a.interleaved,n!==null){f=n;do g=f.lane,Qt.lanes|=g,as|=g,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function nu(n){var i=di(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,f=a.pending,g=i.memoizedState;if(f!==null){a.pending=null;var w=f=f.next;do g=n(g,w.action),w=w.next;while(w!==f);gi(g,i.memoizedState)||(Gn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function Xh(){}function qh(n,i){var a=Qt,c=di(),f=i(),g=!gi(c.memoizedState,f);if(g&&(c.memoizedState=f,Gn=!0),c=c.queue,iu(Kh.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||xn!==null&&xn.memoizedState.tag&1){if(a.flags|=2048,Xa(9,$h.bind(null,a,c,f,i),void 0,null),vn===null)throw Error(t(349));(ss&30)!==0||Yh(a,i,f)}return f}function Yh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Qt.updateQueue,i===null?(i={lastEffect:null,stores:null},Qt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function $h(n,i,a,c){i.value=a,i.getSnapshot=c,Zh(i)&&Qh(n)}function Kh(n,i,a){return a(function(){Zh(i)&&Qh(n)})}function Zh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!gi(n,a)}catch{return!0}}function Qh(n){var i=tr(n,1);i!==null&&Si(i,n,1,-1)}function Jh(n){var i=Ui();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:n},i.queue=n,n=n.dispatch=dx.bind(null,Qt,n),[i.memoizedState,n]}function Xa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Qt.updateQueue,i===null?(i={lastEffect:null,stores:null},Qt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function ep(){return di().memoizedState}function Zo(n,i,a,c){var f=Ui();Qt.flags|=n,f.memoizedState=Xa(1|i,a,void 0,c===void 0?null:c)}function Qo(n,i,a,c){var f=di();c=c===void 0?null:c;var g=void 0;if(on!==null){var w=on.memoizedState;if(g=w.destroy,c!==null&&Qc(c,w.deps)){f.memoizedState=Xa(i,a,g,c);return}}Qt.flags|=n,f.memoizedState=Xa(1|i,a,g,c)}function tp(n,i){return Zo(8390656,8,n,i)}function iu(n,i){return Qo(2048,8,n,i)}function np(n,i){return Qo(4,2,n,i)}function ip(n,i){return Qo(4,4,n,i)}function rp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function sp(n,i,a){return a=a!=null?a.concat([n]):null,Qo(4,4,rp.bind(null,i,n),a)}function ru(){}function ap(n,i){var a=di();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Qc(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function op(n,i){var a=di();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Qc(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function lp(n,i,a){return(ss&21)===0?(n.baseState&&(n.baseState=!1,Gn=!0),n.memoizedState=a):(gi(a,i)||(a=tt(),Qt.lanes|=a,as|=a,n.baseState=!0),i)}function cx(n,i){var a=et;et=a!==0&&4>a?a:4,n(!0);var c=Zc.transition;Zc.transition={};try{n(!1),i()}finally{et=a,Zc.transition=c}}function cp(){return di().memoizedState}function ux(n,i,a){var c=Ir(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},up(n))dp(i,a);else if(a=jh(n,i,a,c),a!==null){var f=zn();Si(a,n,c,f),fp(a,i,c)}}function dx(n,i,a){var c=Ir(n),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(up(n))dp(i,f);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var w=i.lastRenderedState,F=g(w,a);if(f.hasEagerState=!0,f.eagerState=F,gi(F,w)){var V=i.interleaved;V===null?(f.next=f,Wc(i)):(f.next=V.next,V.next=f),i.interleaved=f;return}}catch{}finally{}a=jh(n,i,f,c),a!==null&&(f=zn(),Si(a,n,c,f),fp(a,i,c))}}function up(n){var i=n.alternate;return n===Qt||i!==null&&i===Qt}function dp(n,i){Ha=Ko=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function fp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Te(n,a)}}var Jo={readContext:ui,useCallback:Rn,useContext:Rn,useEffect:Rn,useImperativeHandle:Rn,useInsertionEffect:Rn,useLayoutEffect:Rn,useMemo:Rn,useReducer:Rn,useRef:Rn,useState:Rn,useDebugValue:Rn,useDeferredValue:Rn,useTransition:Rn,useMutableSource:Rn,useSyncExternalStore:Rn,useId:Rn,unstable_isNewReconciler:!1},fx={readContext:ui,useCallback:function(n,i){return Ui().memoizedState=[n,i===void 0?null:i],n},useContext:ui,useEffect:tp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Zo(4194308,4,rp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Zo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Zo(4,2,n,i)},useMemo:function(n,i){var a=Ui();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Ui();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=ux.bind(null,Qt,n),[c.memoizedState,n]},useRef:function(n){var i=Ui();return n={current:n},i.memoizedState=n},useState:Jh,useDebugValue:ru,useDeferredValue:function(n){return Ui().memoizedState=n},useTransition:function(){var n=Jh(!1),i=n[0];return n=cx.bind(null,n[1]),Ui().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Qt,f=Ui();if(Kt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),vn===null)throw Error(t(349));(ss&30)!==0||Yh(c,i,a)}f.memoizedState=a;var g={value:a,getSnapshot:i};return f.queue=g,tp(Kh.bind(null,c,g,n),[n]),c.flags|=2048,Xa(9,$h.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=Ui(),i=vn.identifierPrefix;if(Kt){var a=er,c=Ji;a=(c&~(1<<32-je(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ga++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=lx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},hx={readContext:ui,useCallback:ap,useContext:ui,useEffect:iu,useImperativeHandle:sp,useInsertionEffect:np,useLayoutEffect:ip,useMemo:op,useReducer:tu,useRef:ep,useState:function(){return tu(Wa)},useDebugValue:ru,useDeferredValue:function(n){var i=di();return lp(i,on.memoizedState,n)},useTransition:function(){var n=tu(Wa)[0],i=di().memoizedState;return[n,i]},useMutableSource:Xh,useSyncExternalStore:qh,useId:cp,unstable_isNewReconciler:!1},px={readContext:ui,useCallback:ap,useContext:ui,useEffect:iu,useImperativeHandle:sp,useInsertionEffect:np,useLayoutEffect:ip,useMemo:op,useReducer:nu,useRef:ep,useState:function(){return nu(Wa)},useDebugValue:ru,useDeferredValue:function(n){var i=di();return on===null?i.memoizedState=n:lp(i,on.memoizedState,n)},useTransition:function(){var n=nu(Wa)[0],i=di().memoizedState;return[n,i]},useMutableSource:Xh,useSyncExternalStore:qh,useId:cp,unstable_isNewReconciler:!1};function vi(n,i){if(n&&n.defaultProps){i=le({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function su(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:le({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var el={isMounted:function(n){return(n=n._reactInternals)?Fn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=zn(),f=Ir(n),g=nr(c,f);g.payload=i,a!=null&&(g.callback=a),i=Nr(n,g,f),i!==null&&(Si(i,n,f,c),Xo(i,n,f))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=zn(),f=Ir(n),g=nr(c,f);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=Nr(n,g,f),i!==null&&(Si(i,n,f,c),Xo(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=zn(),c=Ir(n),f=nr(a,c);f.tag=2,i!=null&&(f.callback=i),i=Nr(n,f,c),i!==null&&(Si(i,n,c,a),Xo(i,n,c))}};function hp(n,i,a,c,f,g,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,w):i.prototype&&i.prototype.isPureReactComponent?!Da(a,c)||!Da(f,g):!0}function pp(n,i,a){var c=!1,f=Ar,g=i.contextType;return typeof g=="object"&&g!==null?g=ui(g):(f=Hn(i)?es:Cn.current,c=i.contextTypes,g=(c=c!=null)?Fs(n,f):Ar),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=el,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=g),i}function mp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&el.enqueueReplaceState(i,i.state,null)}function au(n,i,a,c){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},Xc(n);var g=i.contextType;typeof g=="object"&&g!==null?f.context=ui(g):(g=Hn(i)?es:Cn.current,f.context=Fs(n,g)),f.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(su(n,i,g,a),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&el.enqueueReplaceState(f,f.state,null),qo(n,a,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Ws(n,i){try{var a="",c=i;do a+=Je(c),c=c.return;while(c);var f=a}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:f,digest:null}}function ou(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function lu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var mx=typeof WeakMap=="function"?WeakMap:Map;function gp(n,i,a){a=nr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){ol||(ol=!0,Eu=c),lu(n,i)},a}function xp(n,i,a){a=nr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;a.payload=function(){return c(f)},a.callback=function(){lu(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){lu(n,i),typeof c!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function vp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new mx;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(a)||(f.add(a),n=Rx.bind(null,n,i,a),i.then(n,n))}function _p(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function yp(n,i,a,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=nr(-1,1),i.tag=2,Nr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var gx=R.ReactCurrentOwner,Gn=!1;function Bn(n,i,a,c){i.child=n===null?zh(i,null,a,c):js(i,n.child,a,c)}function Sp(n,i,a,c,f){a=a.render;var g=i.ref;return Hs(i,f),c=Jc(n,i,a,c,g,f),a=eu(),n!==null&&!Gn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,ir(n,i,f)):(Kt&&a&&Oc(i),i.flags|=1,Bn(n,i,c,f),i.child)}function Mp(n,i,a,c,f){if(n===null){var g=a.type;return typeof g=="function"&&!Nu(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,Ep(n,i,g,c,f)):(n=hl(a.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&f)===0){var w=g.memoizedProps;if(a=a.compare,a=a!==null?a:Da,a(w,c)&&n.ref===i.ref)return ir(n,i,f)}return i.flags|=1,n=Or(g,c),n.ref=i.ref,n.return=i,i.child=n}function Ep(n,i,a,c,f){if(n!==null){var g=n.memoizedProps;if(Da(g,c)&&n.ref===i.ref)if(Gn=!1,i.pendingProps=c=g,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Gn=!0);else return i.lanes=n.lanes,ir(n,i,f)}return cu(n,i,a,c,f)}function wp(n,i,a){var c=i.pendingProps,f=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xt(qs,ii),ii|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Xt(qs,ii),ii|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,Xt(qs,ii),ii|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,Xt(qs,ii),ii|=c;return Bn(n,i,f,a),i.child}function bp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function cu(n,i,a,c,f){var g=Hn(a)?es:Cn.current;return g=Fs(i,g),Hs(i,f),a=Jc(n,i,a,c,g,f),c=eu(),n!==null&&!Gn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,ir(n,i,f)):(Kt&&c&&Oc(i),i.flags|=1,Bn(n,i,a,f),i.child)}function Tp(n,i,a,c,f){if(Hn(a)){var g=!0;ko(i)}else g=!1;if(Hs(i,f),i.stateNode===null)nl(n,i),pp(i,a,c),au(i,a,c,f),c=!0;else if(n===null){var w=i.stateNode,F=i.memoizedProps;w.props=F;var V=w.context,oe=a.contextType;typeof oe=="object"&&oe!==null?oe=ui(oe):(oe=Hn(a)?es:Cn.current,oe=Fs(i,oe));var ve=a.getDerivedStateFromProps,Me=typeof ve=="function"||typeof w.getSnapshotBeforeUpdate=="function";Me||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(F!==c||V!==oe)&&mp(i,w,c,oe),Rr=!1;var xe=i.memoizedState;w.state=xe,qo(i,c,w,f),V=i.memoizedState,F!==c||xe!==V||Vn.current||Rr?(typeof ve=="function"&&(su(i,a,ve,c),V=i.memoizedState),(F=Rr||hp(i,a,F,c,xe,V,oe))?(Me||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=V),w.props=c,w.state=V,w.context=oe,c=F):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{w=i.stateNode,Vh(n,i),F=i.memoizedProps,oe=i.type===i.elementType?F:vi(i.type,F),w.props=oe,Me=i.pendingProps,xe=w.context,V=a.contextType,typeof V=="object"&&V!==null?V=ui(V):(V=Hn(a)?es:Cn.current,V=Fs(i,V));var Ve=a.getDerivedStateFromProps;(ve=typeof Ve=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(F!==Me||xe!==V)&&mp(i,w,c,V),Rr=!1,xe=i.memoizedState,w.state=xe,qo(i,c,w,f);var Ze=i.memoizedState;F!==Me||xe!==Ze||Vn.current||Rr?(typeof Ve=="function"&&(su(i,a,Ve,c),Ze=i.memoizedState),(oe=Rr||hp(i,a,oe,c,xe,Ze,V)||!1)?(ve||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,Ze,V),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,Ze,V)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||F===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Ze),w.props=c,w.state=Ze,w.context=V,c=oe):(typeof w.componentDidUpdate!="function"||F===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),c=!1)}return uu(n,i,a,c,g,f)}function uu(n,i,a,c,f,g){bp(n,i);var w=(i.flags&128)!==0;if(!c&&!w)return f&&Ph(i,a,!1),ir(n,i,g);c=i.stateNode,gx.current=i;var F=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&w?(i.child=js(i,n.child,null,g),i.child=js(i,null,F,g)):Bn(n,i,F,g),i.memoizedState=c.state,f&&Ph(i,a,!0),i.child}function Ap(n){var i=n.stateNode;i.pendingContext?Rh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Rh(n,i.context,!1),qc(n,i.containerInfo)}function Cp(n,i,a,c,f){return zs(),zc(f),i.flags|=256,Bn(n,i,a,c),i.child}var du={dehydrated:null,treeContext:null,retryLane:0};function fu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Rp(n,i,a){var c=i.pendingProps,f=Zt.current,g=!1,w=(i.flags&128)!==0,F;if((F=w)||(F=n!==null&&n.memoizedState===null?!1:(f&2)!==0),F?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Xt(Zt,f&1),n===null)return Bc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=c.children,n=c.fallback,g?(c=i.mode,g=i.child,w={mode:"hidden",children:w},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=w):g=pl(w,c,0,null),n=us(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=fu(a),i.memoizedState=du,n):hu(i,w));if(f=n.memoizedState,f!==null&&(F=f.dehydrated,F!==null))return xx(n,i,w,c,F,f,a);if(g){g=c.fallback,w=i.mode,f=n.child,F=f.sibling;var V={mode:"hidden",children:c.children};return(w&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=V,i.deletions=null):(c=Or(f,V),c.subtreeFlags=f.subtreeFlags&14680064),F!==null?g=Or(F,g):(g=us(g,w,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,w=n.child.memoizedState,w=w===null?fu(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=n.childLanes&~a,i.memoizedState=du,c}return g=n.child,n=g.sibling,c=Or(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function hu(n,i){return i=pl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function tl(n,i,a,c){return c!==null&&zc(c),js(i,n.child,null,a),n=hu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function xx(n,i,a,c,f,g,w){if(a)return i.flags&256?(i.flags&=-257,c=ou(Error(t(422))),tl(n,i,w,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,f=i.mode,c=pl({mode:"visible",children:c.children},f,0,null),g=us(g,f,w,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&js(i,n.child,null,w),i.child.memoizedState=fu(w),i.memoizedState=du,g);if((i.mode&1)===0)return tl(n,i,w,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var F=c.dgst;return c=F,g=Error(t(419)),c=ou(g,c,void 0),tl(n,i,w,c)}if(F=(w&n.childLanes)!==0,Gn||F){if(c=vn,c!==null){switch(w&-w){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|w))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,tr(n,f),Si(c,n,f,-1))}return Ru(),c=ou(Error(t(421))),tl(n,i,w,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=Nx.bind(null,n),f._reactRetry=i,null):(n=g.treeContext,ni=br(f.nextSibling),ti=i,Kt=!0,xi=null,n!==null&&(li[ci++]=Ji,li[ci++]=er,li[ci++]=ts,Ji=n.id,er=n.overflow,ts=i),i=hu(i,c.children),i.flags|=4096,i)}function Np(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Gc(n.return,i,a)}function pu(n,i,a,c,f){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=f)}function Pp(n,i,a){var c=i.pendingProps,f=c.revealOrder,g=c.tail;if(Bn(n,i,c.children,a),c=Zt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Np(n,a,i);else if(n.tag===19)Np(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Xt(Zt,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&Yo(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),pu(i,!1,f,a,g);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Yo(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}pu(i,!0,a,null,g);break;case"together":pu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function nl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function ir(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),as|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Or(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Or(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function vx(n,i,a){switch(i.tag){case 3:Ap(i),zs();break;case 5:Wh(i);break;case 1:Hn(i.type)&&ko(i);break;case 4:qc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Xt(Go,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Xt(Zt,Zt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Rp(n,i,a):(Xt(Zt,Zt.current&1),n=ir(n,i,a),n!==null?n.sibling:null);Xt(Zt,Zt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Pp(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Xt(Zt,Zt.current),c)break;return null;case 22:case 23:return i.lanes=0,wp(n,i,a)}return ir(n,i,a)}var Dp,mu,Lp,Ip;Dp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},mu=function(){},Lp=function(n,i,a,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,rs(Ii.current);var g=null;switch(a){case"input":f=ft(n,f),c=ft(n,c),g=[];break;case"select":f=le({},f,{value:void 0}),c=le({},c,{value:void 0}),g=[];break;case"textarea":f=$e(n,f),c=$e(n,c),g=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Uo)}ze(a,c);var w;a=null;for(oe in f)if(!c.hasOwnProperty(oe)&&f.hasOwnProperty(oe)&&f[oe]!=null)if(oe==="style"){var F=f[oe];for(w in F)F.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else oe!=="dangerouslySetInnerHTML"&&oe!=="children"&&oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&oe!=="autoFocus"&&(o.hasOwnProperty(oe)?g||(g=[]):(g=g||[]).push(oe,null));for(oe in c){var V=c[oe];if(F=f!=null?f[oe]:void 0,c.hasOwnProperty(oe)&&V!==F&&(V!=null||F!=null))if(oe==="style")if(F){for(w in F)!F.hasOwnProperty(w)||V&&V.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in V)V.hasOwnProperty(w)&&F[w]!==V[w]&&(a||(a={}),a[w]=V[w])}else a||(g||(g=[]),g.push(oe,a)),a=V;else oe==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,F=F?F.__html:void 0,V!=null&&F!==V&&(g=g||[]).push(oe,V)):oe==="children"?typeof V!="string"&&typeof V!="number"||(g=g||[]).push(oe,""+V):oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&(o.hasOwnProperty(oe)?(V!=null&&oe==="onScroll"&&Yt("scroll",n),g||F===V||(g=[])):(g=g||[]).push(oe,V))}a&&(g=g||[]).push("style",a);var oe=g;(i.updateQueue=oe)&&(i.flags|=4)}},Ip=function(n,i,a,c){a!==c&&(i.flags|=4)};function qa(n,i){if(!Kt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Nn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function _x(n,i,a){var c=i.pendingProps;switch(Fc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nn(i),null;case 1:return Hn(i.type)&&Fo(),Nn(i),null;case 3:return c=i.stateNode,Gs(),$t(Vn),$t(Cn),Kc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Vo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,xi!==null&&(Tu(xi),xi=null))),mu(n,i),Nn(i),null;case 5:Yc(i);var f=rs(Va.current);if(a=i.type,n!==null&&i.stateNode!=null)Lp(n,i,a,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Nn(i),null}if(n=rs(Ii.current),Vo(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[Li]=i,c[Fa]=g,n=(i.mode&1)!==0,a){case"dialog":Yt("cancel",c),Yt("close",c);break;case"iframe":case"object":case"embed":Yt("load",c);break;case"video":case"audio":for(f=0;f<Ia.length;f++)Yt(Ia[f],c);break;case"source":Yt("error",c);break;case"img":case"image":case"link":Yt("error",c),Yt("load",c);break;case"details":Yt("toggle",c);break;case"input":Ot(c,g),Yt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Yt("invalid",c);break;case"textarea":I(c,g),Yt("invalid",c)}ze(a,g),f=null;for(var w in g)if(g.hasOwnProperty(w)){var F=g[w];w==="children"?typeof F=="string"?c.textContent!==F&&(g.suppressHydrationWarning!==!0&&Io(c.textContent,F,n),f=["children",F]):typeof F=="number"&&c.textContent!==""+F&&(g.suppressHydrationWarning!==!0&&Io(c.textContent,F,n),f=["children",""+F]):o.hasOwnProperty(w)&&F!=null&&w==="onScroll"&&Yt("scroll",c)}switch(a){case"input":Fe(c),z(c,g,!0);break;case"textarea":Fe(c),X(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Uo)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{w=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=he(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=w.createElement(a,{is:c.is}):(n=w.createElement(a),a==="select"&&(w=n,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):n=w.createElementNS(n,a),n[Li]=i,n[Fa]=c,Dp(n,i,!1,!1),i.stateNode=n;e:{switch(w=Ne(a,c),a){case"dialog":Yt("cancel",n),Yt("close",n),f=c;break;case"iframe":case"object":case"embed":Yt("load",n),f=c;break;case"video":case"audio":for(f=0;f<Ia.length;f++)Yt(Ia[f],n);f=c;break;case"source":Yt("error",n),f=c;break;case"img":case"image":case"link":Yt("error",n),Yt("load",n),f=c;break;case"details":Yt("toggle",n),f=c;break;case"input":Ot(n,c),f=ft(n,c),Yt("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=le({},c,{value:void 0}),Yt("invalid",n);break;case"textarea":I(n,c),f=$e(n,c),Yt("invalid",n);break;default:f=c}ze(a,f),F=f;for(g in F)if(F.hasOwnProperty(g)){var V=F[g];g==="style"?Pe(n,V):g==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&Ke(n,V)):g==="children"?typeof V=="string"?(a!=="textarea"||V!=="")&&Ae(n,V):typeof V=="number"&&Ae(n,""+V):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?V!=null&&g==="onScroll"&&Yt("scroll",n):V!=null&&D(n,g,V,w))}switch(a){case"input":Fe(n),z(n,c,!1);break;case"textarea":Fe(n),X(n);break;case"option":c.value!=null&&n.setAttribute("value",""+_e(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?Tt(n,!!c.multiple,g,!1):c.defaultValue!=null&&Tt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Uo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Nn(i),null;case 6:if(n&&i.stateNode!=null)Ip(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=rs(Va.current),rs(Ii.current),Vo(i)){if(c=i.stateNode,a=i.memoizedProps,c[Li]=i,(g=c.nodeValue!==a)&&(n=ti,n!==null))switch(n.tag){case 3:Io(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Io(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Li]=i,i.stateNode=c}return Nn(i),null;case 13:if($t(Zt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Kt&&ni!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Fh(),zs(),i.flags|=98560,g=!1;else if(g=Vo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Li]=i}else zs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Nn(i),g=!1}else xi!==null&&(Tu(xi),xi=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Zt.current&1)!==0?ln===0&&(ln=3):Ru())),i.updateQueue!==null&&(i.flags|=4),Nn(i),null);case 4:return Gs(),mu(n,i),n===null&&Ua(i.stateNode.containerInfo),Nn(i),null;case 10:return Hc(i.type._context),Nn(i),null;case 17:return Hn(i.type)&&Fo(),Nn(i),null;case 19:if($t(Zt),g=i.memoizedState,g===null)return Nn(i),null;if(c=(i.flags&128)!==0,w=g.rendering,w===null)if(c)qa(g,!1);else{if(ln!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=Yo(n),w!==null){for(i.flags|=128,qa(g,!1),c=w.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,n=w.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Xt(Zt,Zt.current&1|2),i.child}n=n.sibling}g.tail!==null&&zt()>Ys&&(i.flags|=128,c=!0,qa(g,!1),i.lanes=4194304)}else{if(!c)if(n=Yo(w),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),qa(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!Kt)return Nn(i),null}else 2*zt()-g.renderingStartTime>Ys&&a!==1073741824&&(i.flags|=128,c=!0,qa(g,!1),i.lanes=4194304);g.isBackwards?(w.sibling=i.child,i.child=w):(a=g.last,a!==null?a.sibling=w:i.child=w,g.last=w)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=zt(),i.sibling=null,a=Zt.current,Xt(Zt,c?a&1|2:a&1),i):(Nn(i),null);case 22:case 23:return Cu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(ii&1073741824)!==0&&(Nn(i),i.subtreeFlags&6&&(i.flags|=8192)):Nn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function yx(n,i){switch(Fc(i),i.tag){case 1:return Hn(i.type)&&Fo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Gs(),$t(Vn),$t(Cn),Kc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Yc(i),null;case 13:if($t(Zt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));zs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return $t(Zt),null;case 4:return Gs(),null;case 10:return Hc(i.type._context),null;case 22:case 23:return Cu(),null;case 24:return null;default:return null}}var il=!1,Pn=!1,Sx=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function Xs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){en(n,i,c)}else a.current=null}function gu(n,i,a){try{a()}catch(c){en(n,i,c)}}var Up=!1;function Mx(n,i){if(Cc=Eo,n=hh(),yc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var w=0,F=-1,V=-1,oe=0,ve=0,Me=n,xe=null;t:for(;;){for(var Ve;Me!==a||f!==0&&Me.nodeType!==3||(F=w+f),Me!==g||c!==0&&Me.nodeType!==3||(V=w+c),Me.nodeType===3&&(w+=Me.nodeValue.length),(Ve=Me.firstChild)!==null;)xe=Me,Me=Ve;for(;;){if(Me===n)break t;if(xe===a&&++oe===f&&(F=w),xe===g&&++ve===c&&(V=w),(Ve=Me.nextSibling)!==null)break;Me=xe,xe=Me.parentNode}Me=Ve}a=F===-1||V===-1?null:{start:F,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Rc={focusedElem:n,selectionRange:a},Eo=!1,Ye=i;Ye!==null;)if(i=Ye,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ye=n;else for(;Ye!==null;){i=Ye;try{var Ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ze!==null){var nt=Ze.memoizedProps,nn=Ze.memoizedState,ee=i.stateNode,W=ee.getSnapshotBeforeUpdate(i.elementType===i.type?nt:vi(i.type,nt),nn);ee.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var te=i.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){en(i,i.return,we)}if(n=i.sibling,n!==null){n.return=i.return,Ye=n;break}Ye=i.return}return Ze=Up,Up=!1,Ze}function Ya(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var g=f.destroy;f.destroy=void 0,g!==void 0&&gu(i,a,g)}f=f.next}while(f!==c)}}function rl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function xu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Op(n){var i=n.alternate;i!==null&&(n.alternate=null,Op(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Li],delete i[Fa],delete i[Lc],delete i[rx],delete i[sx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Fp(n){return n.tag===5||n.tag===3||n.tag===4}function kp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Fp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function vu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Uo));else if(c!==4&&(n=n.child,n!==null))for(vu(n,i,a),n=n.sibling;n!==null;)vu(n,i,a),n=n.sibling}function _u(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(_u(n,i,a),n=n.sibling;n!==null;)_u(n,i,a),n=n.sibling}var wn=null,_i=!1;function Pr(n,i,a){for(a=a.child;a!==null;)Bp(n,i,a),a=a.sibling}function Bp(n,i,a){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(ke,a)}catch{}switch(a.tag){case 5:Pn||Xs(a,i);case 6:var c=wn,f=_i;wn=null,Pr(n,i,a),wn=c,_i=f,wn!==null&&(_i?(n=wn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):wn.removeChild(a.stateNode));break;case 18:wn!==null&&(_i?(n=wn,a=a.stateNode,n.nodeType===8?Dc(n.parentNode,a):n.nodeType===1&&Dc(n,a),Ta(n)):Dc(wn,a.stateNode));break;case 4:c=wn,f=_i,wn=a.stateNode.containerInfo,_i=!0,Pr(n,i,a),wn=c,_i=f;break;case 0:case 11:case 14:case 15:if(!Pn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var g=f,w=g.destroy;g=g.tag,w!==void 0&&((g&2)!==0||(g&4)!==0)&&gu(a,i,w),f=f.next}while(f!==c)}Pr(n,i,a);break;case 1:if(!Pn&&(Xs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(F){en(a,i,F)}Pr(n,i,a);break;case 21:Pr(n,i,a);break;case 22:a.mode&1?(Pn=(c=Pn)||a.memoizedState!==null,Pr(n,i,a),Pn=c):Pr(n,i,a);break;default:Pr(n,i,a)}}function zp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Sx),i.forEach(function(c){var f=Px.bind(null,n,c);a.has(c)||(a.add(c),c.then(f,f))})}}function yi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var g=n,w=i,F=w;e:for(;F!==null;){switch(F.tag){case 5:wn=F.stateNode,_i=!1;break e;case 3:wn=F.stateNode.containerInfo,_i=!0;break e;case 4:wn=F.stateNode.containerInfo,_i=!0;break e}F=F.return}if(wn===null)throw Error(t(160));Bp(g,w,f),wn=null,_i=!1;var V=f.alternate;V!==null&&(V.return=null),f.return=null}catch(oe){en(f,i,oe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)jp(i,n),i=i.sibling}function jp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(yi(i,n),Oi(n),c&4){try{Ya(3,n,n.return),rl(3,n)}catch(nt){en(n,n.return,nt)}try{Ya(5,n,n.return)}catch(nt){en(n,n.return,nt)}}break;case 1:yi(i,n),Oi(n),c&512&&a!==null&&Xs(a,a.return);break;case 5:if(yi(i,n),Oi(n),c&512&&a!==null&&Xs(a,a.return),n.flags&32){var f=n.stateNode;try{Ae(f,"")}catch(nt){en(n,n.return,nt)}}if(c&4&&(f=n.stateNode,f!=null)){var g=n.memoizedProps,w=a!==null?a.memoizedProps:g,F=n.type,V=n.updateQueue;if(n.updateQueue=null,V!==null)try{F==="input"&&g.type==="radio"&&g.name!=null&&ht(f,g),Ne(F,w);var oe=Ne(F,g);for(w=0;w<V.length;w+=2){var ve=V[w],Me=V[w+1];ve==="style"?Pe(f,Me):ve==="dangerouslySetInnerHTML"?Ke(f,Me):ve==="children"?Ae(f,Me):D(f,ve,Me,oe)}switch(F){case"input":Vt(f,g);break;case"textarea":E(f,g);break;case"select":var xe=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var Ve=g.value;Ve!=null?Tt(f,!!g.multiple,Ve,!1):xe!==!!g.multiple&&(g.defaultValue!=null?Tt(f,!!g.multiple,g.defaultValue,!0):Tt(f,!!g.multiple,g.multiple?[]:"",!1))}f[Fa]=g}catch(nt){en(n,n.return,nt)}}break;case 6:if(yi(i,n),Oi(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,g=n.memoizedProps;try{f.nodeValue=g}catch(nt){en(n,n.return,nt)}}break;case 3:if(yi(i,n),Oi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Ta(i.containerInfo)}catch(nt){en(n,n.return,nt)}break;case 4:yi(i,n),Oi(n);break;case 13:yi(i,n),Oi(n),f=n.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(Mu=zt())),c&4&&zp(n);break;case 22:if(ve=a!==null&&a.memoizedState!==null,n.mode&1?(Pn=(oe=Pn)||ve,yi(i,n),Pn=oe):yi(i,n),Oi(n),c&8192){if(oe=n.memoizedState!==null,(n.stateNode.isHidden=oe)&&!ve&&(n.mode&1)!==0)for(Ye=n,ve=n.child;ve!==null;){for(Me=Ye=ve;Ye!==null;){switch(xe=Ye,Ve=xe.child,xe.tag){case 0:case 11:case 14:case 15:Ya(4,xe,xe.return);break;case 1:Xs(xe,xe.return);var Ze=xe.stateNode;if(typeof Ze.componentWillUnmount=="function"){c=xe,a=xe.return;try{i=c,Ze.props=i.memoizedProps,Ze.state=i.memoizedState,Ze.componentWillUnmount()}catch(nt){en(c,a,nt)}}break;case 5:Xs(xe,xe.return);break;case 22:if(xe.memoizedState!==null){Gp(Me);continue}}Ve!==null?(Ve.return=xe,Ye=Ve):Gp(Me)}ve=ve.sibling}e:for(ve=null,Me=n;;){if(Me.tag===5){if(ve===null){ve=Me;try{f=Me.stateNode,oe?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(F=Me.stateNode,V=Me.memoizedProps.style,w=V!=null&&V.hasOwnProperty("display")?V.display:null,F.style.display=ye("display",w))}catch(nt){en(n,n.return,nt)}}}else if(Me.tag===6){if(ve===null)try{Me.stateNode.nodeValue=oe?"":Me.memoizedProps}catch(nt){en(n,n.return,nt)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===n)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===n)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===n)break e;ve===Me&&(ve=null),Me=Me.return}ve===Me&&(ve=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:yi(i,n),Oi(n),c&4&&zp(n);break;case 21:break;default:yi(i,n),Oi(n)}}function Oi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Fp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(Ae(f,""),c.flags&=-33);var g=kp(n);_u(n,g,f);break;case 3:case 4:var w=c.stateNode.containerInfo,F=kp(n);vu(n,F,w);break;default:throw Error(t(161))}}catch(V){en(n,n.return,V)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Ex(n,i,a){Ye=n,Vp(n)}function Vp(n,i,a){for(var c=(n.mode&1)!==0;Ye!==null;){var f=Ye,g=f.child;if(f.tag===22&&c){var w=f.memoizedState!==null||il;if(!w){var F=f.alternate,V=F!==null&&F.memoizedState!==null||Pn;F=il;var oe=Pn;if(il=w,(Pn=V)&&!oe)for(Ye=f;Ye!==null;)w=Ye,V=w.child,w.tag===22&&w.memoizedState!==null?Wp(f):V!==null?(V.return=w,Ye=V):Wp(f);for(;g!==null;)Ye=g,Vp(g),g=g.sibling;Ye=f,il=F,Pn=oe}Hp(n)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,Ye=g):Hp(n)}}function Hp(n){for(;Ye!==null;){var i=Ye;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Pn||rl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Pn)if(a===null)c.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:vi(i.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Gh(i,g,c);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Gh(i,w,a)}break;case 5:var F=i.stateNode;if(a===null&&i.flags&4){a=F;var V=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&a.focus();break;case"img":V.src&&(a.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var oe=i.alternate;if(oe!==null){var ve=oe.memoizedState;if(ve!==null){var Me=ve.dehydrated;Me!==null&&Ta(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Pn||i.flags&512&&xu(i)}catch(xe){en(i,i.return,xe)}}if(i===n){Ye=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ye=a;break}Ye=i.return}}function Gp(n){for(;Ye!==null;){var i=Ye;if(i===n){Ye=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ye=a;break}Ye=i.return}}function Wp(n){for(;Ye!==null;){var i=Ye;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{rl(4,i)}catch(V){en(i,a,V)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(V){en(i,f,V)}}var g=i.return;try{xu(i)}catch(V){en(i,g,V)}break;case 5:var w=i.return;try{xu(i)}catch(V){en(i,w,V)}}}catch(V){en(i,i.return,V)}if(i===n){Ye=null;break}var F=i.sibling;if(F!==null){F.return=i.return,Ye=F;break}Ye=i.return}}var wx=Math.ceil,sl=R.ReactCurrentDispatcher,yu=R.ReactCurrentOwner,fi=R.ReactCurrentBatchConfig,Lt=0,vn=null,sn=null,bn=0,ii=0,qs=Tr(0),ln=0,$a=null,as=0,al=0,Su=0,Ka=null,Wn=null,Mu=0,Ys=1/0,rr=null,ol=!1,Eu=null,Dr=null,ll=!1,Lr=null,cl=0,Za=0,wu=null,ul=-1,dl=0;function zn(){return(Lt&6)!==0?zt():ul!==-1?ul:ul=zt()}function Ir(n){return(n.mode&1)===0?1:(Lt&2)!==0&&bn!==0?bn&-bn:ox.transition!==null?(dl===0&&(dl=tt()),dl):(n=et,n!==0||(n=window.event,n=n===void 0?16:qf(n.type)),n)}function Si(n,i,a,c){if(50<Za)throw Za=0,wu=null,Error(t(185));Bt(n,a,c),((Lt&2)===0||n!==vn)&&(n===vn&&((Lt&2)===0&&(al|=a),ln===4&&Ur(n,bn)),Xn(n,c),a===1&&Lt===0&&(i.mode&1)===0&&(Ys=zt()+500,Bo&&Cr()))}function Xn(n,i){var a=n.callbackNode;Pt(n,i);var c=Nt(n,n===vn?bn:0);if(c===0)a!==null&&Ts(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Ts(a),i===1)n.tag===0?ax(qp.bind(null,n)):Dh(qp.bind(null,n)),nx(function(){(Lt&6)===0&&Cr()}),a=null;else{switch(pn(c)){case 1:a=Y;break;case 4:a=ae;break;case 16:a=ne;break;case 536870912:a=Le;break;default:a=ne}a=tm(a,Xp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Xp(n,i){if(ul=-1,dl=0,(Lt&6)!==0)throw Error(t(327));var a=n.callbackNode;if($s()&&n.callbackNode!==a)return null;var c=Nt(n,n===vn?bn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=fl(n,c);else{i=c;var f=Lt;Lt|=2;var g=$p();(vn!==n||bn!==i)&&(rr=null,Ys=zt()+500,ls(n,i));do try{Ax();break}catch(F){Yp(n,F)}while(!0);Vc(),sl.current=g,Lt=f,sn!==null?i=0:(vn=null,bn=0,i=ln)}if(i!==0){if(i===2&&(f=Ge(n),f!==0&&(c=f,i=bu(n,f))),i===1)throw a=$a,ls(n,0),Ur(n,c),Xn(n,zt()),a;if(i===6)Ur(n,c);else{if(f=n.current.alternate,(c&30)===0&&!bx(f)&&(i=fl(n,c),i===2&&(g=Ge(n),g!==0&&(c=g,i=bu(n,g))),i===1))throw a=$a,ls(n,0),Ur(n,c),Xn(n,zt()),a;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:cs(n,Wn,rr);break;case 3:if(Ur(n,c),(c&130023424)===c&&(i=Mu+500-zt(),10<i)){if(Nt(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){zn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Pc(cs.bind(null,n,Wn,rr),i);break}cs(n,Wn,rr);break;case 4:if(Ur(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var w=31-je(c);g=1<<w,w=i[w],w>f&&(f=w),c&=~g}if(c=f,c=zt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*wx(c/1960))-c,10<c){n.timeoutHandle=Pc(cs.bind(null,n,Wn,rr),c);break}cs(n,Wn,rr);break;case 5:cs(n,Wn,rr);break;default:throw Error(t(329))}}}return Xn(n,zt()),n.callbackNode===a?Xp.bind(null,n):null}function bu(n,i){var a=Ka;return n.current.memoizedState.isDehydrated&&(ls(n,i).flags|=256),n=fl(n,i),n!==2&&(i=Wn,Wn=a,i!==null&&Tu(i)),n}function Tu(n){Wn===null?Wn=n:Wn.push.apply(Wn,n)}function bx(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],g=f.getSnapshot;f=f.value;try{if(!gi(g(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ur(n,i){for(i&=~Su,i&=~al,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-je(i),c=1<<a;n[a]=-1,i&=~c}}function qp(n){if((Lt&6)!==0)throw Error(t(327));$s();var i=Nt(n,0);if((i&1)===0)return Xn(n,zt()),null;var a=fl(n,i);if(n.tag!==0&&a===2){var c=Ge(n);c!==0&&(i=c,a=bu(n,c))}if(a===1)throw a=$a,ls(n,0),Ur(n,i),Xn(n,zt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,cs(n,Wn,rr),Xn(n,zt()),null}function Au(n,i){var a=Lt;Lt|=1;try{return n(i)}finally{Lt=a,Lt===0&&(Ys=zt()+500,Bo&&Cr())}}function os(n){Lr!==null&&Lr.tag===0&&(Lt&6)===0&&$s();var i=Lt;Lt|=1;var a=fi.transition,c=et;try{if(fi.transition=null,et=1,n)return n()}finally{et=c,fi.transition=a,Lt=i,(Lt&6)===0&&Cr()}}function Cu(){ii=qs.current,$t(qs)}function ls(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,tx(a)),sn!==null)for(a=sn.return;a!==null;){var c=a;switch(Fc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Fo();break;case 3:Gs(),$t(Vn),$t(Cn),Kc();break;case 5:Yc(c);break;case 4:Gs();break;case 13:$t(Zt);break;case 19:$t(Zt);break;case 10:Hc(c.type._context);break;case 22:case 23:Cu()}a=a.return}if(vn=n,sn=n=Or(n.current,null),bn=ii=i,ln=0,$a=null,Su=al=as=0,Wn=Ka=null,is!==null){for(i=0;i<is.length;i++)if(a=is[i],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,g=a.pending;if(g!==null){var w=g.next;g.next=f,c.next=w}a.pending=c}is=null}return n}function Yp(n,i){do{var a=sn;try{if(Vc(),$o.current=Jo,Ko){for(var c=Qt.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}Ko=!1}if(ss=0,xn=on=Qt=null,Ha=!1,Ga=0,yu.current=null,a===null||a.return===null){ln=1,$a=i,sn=null;break}e:{var g=n,w=a.return,F=a,V=i;if(i=bn,F.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var oe=V,ve=F,Me=ve.tag;if((ve.mode&1)===0&&(Me===0||Me===11||Me===15)){var xe=ve.alternate;xe?(ve.updateQueue=xe.updateQueue,ve.memoizedState=xe.memoizedState,ve.lanes=xe.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Ve=_p(w);if(Ve!==null){Ve.flags&=-257,yp(Ve,w,F,g,i),Ve.mode&1&&vp(g,oe,i),i=Ve,V=oe;var Ze=i.updateQueue;if(Ze===null){var nt=new Set;nt.add(V),i.updateQueue=nt}else Ze.add(V);break e}else{if((i&1)===0){vp(g,oe,i),Ru();break e}V=Error(t(426))}}else if(Kt&&F.mode&1){var nn=_p(w);if(nn!==null){(nn.flags&65536)===0&&(nn.flags|=256),yp(nn,w,F,g,i),zc(Ws(V,F));break e}}g=V=Ws(V,F),ln!==4&&(ln=2),Ka===null?Ka=[g]:Ka.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var ee=gp(g,V,i);Hh(g,ee);break e;case 1:F=V;var W=g.type,te=g.stateNode;if((g.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(Dr===null||!Dr.has(te)))){g.flags|=65536,i&=-i,g.lanes|=i;var we=xp(g,F,i);Hh(g,we);break e}}g=g.return}while(g!==null)}Zp(a)}catch(it){i=it,sn===a&&a!==null&&(sn=a=a.return);continue}break}while(!0)}function $p(){var n=sl.current;return sl.current=Jo,n===null?Jo:n}function Ru(){(ln===0||ln===3||ln===2)&&(ln=4),vn===null||(as&268435455)===0&&(al&268435455)===0||Ur(vn,bn)}function fl(n,i){var a=Lt;Lt|=2;var c=$p();(vn!==n||bn!==i)&&(rr=null,ls(n,i));do try{Tx();break}catch(f){Yp(n,f)}while(!0);if(Vc(),Lt=a,sl.current=c,sn!==null)throw Error(t(261));return vn=null,bn=0,ln}function Tx(){for(;sn!==null;)Kp(sn)}function Ax(){for(;sn!==null&&!Sa();)Kp(sn)}function Kp(n){var i=em(n.alternate,n,ii);n.memoizedProps=n.pendingProps,i===null?Zp(n):sn=i,yu.current=null}function Zp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=_x(a,i,ii),a!==null){sn=a;return}}else{if(a=yx(a,i),a!==null){a.flags&=32767,sn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ln=6,sn=null;return}}if(i=i.sibling,i!==null){sn=i;return}sn=i=n}while(i!==null);ln===0&&(ln=5)}function cs(n,i,a){var c=et,f=fi.transition;try{fi.transition=null,et=1,Cx(n,i,a,c)}finally{fi.transition=f,et=c}return null}function Cx(n,i,a,c){do $s();while(Lr!==null);if((Lt&6)!==0)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(rn(n,g),n===vn&&(sn=vn=null,bn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ll||(ll=!0,tm(ne,function(){return $s(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=fi.transition,fi.transition=null;var w=et;et=1;var F=Lt;Lt|=4,yu.current=null,Mx(n,a),jp(a,n),Yg(Rc),Eo=!!Cc,Rc=Cc=null,n.current=a,Ex(a),Qr(),Lt=F,et=w,fi.transition=g}else n.current=a;if(ll&&(ll=!1,Lr=n,cl=f),g=n.pendingLanes,g===0&&(Dr=null),qe(a.stateNode),Xn(n,zt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)f=i[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(ol)throw ol=!1,n=Eu,Eu=null,n;return(cl&1)!==0&&n.tag!==0&&$s(),g=n.pendingLanes,(g&1)!==0?n===wu?Za++:(Za=0,wu=n):Za=0,Cr(),null}function $s(){if(Lr!==null){var n=pn(cl),i=fi.transition,a=et;try{if(fi.transition=null,et=16>n?16:n,Lr===null)var c=!1;else{if(n=Lr,Lr=null,cl=0,(Lt&6)!==0)throw Error(t(331));var f=Lt;for(Lt|=4,Ye=n.current;Ye!==null;){var g=Ye,w=g.child;if((Ye.flags&16)!==0){var F=g.deletions;if(F!==null){for(var V=0;V<F.length;V++){var oe=F[V];for(Ye=oe;Ye!==null;){var ve=Ye;switch(ve.tag){case 0:case 11:case 15:Ya(8,ve,g)}var Me=ve.child;if(Me!==null)Me.return=ve,Ye=Me;else for(;Ye!==null;){ve=Ye;var xe=ve.sibling,Ve=ve.return;if(Op(ve),ve===oe){Ye=null;break}if(xe!==null){xe.return=Ve,Ye=xe;break}Ye=Ve}}}var Ze=g.alternate;if(Ze!==null){var nt=Ze.child;if(nt!==null){Ze.child=null;do{var nn=nt.sibling;nt.sibling=null,nt=nn}while(nt!==null)}}Ye=g}}if((g.subtreeFlags&2064)!==0&&w!==null)w.return=g,Ye=w;else e:for(;Ye!==null;){if(g=Ye,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Ya(9,g,g.return)}var ee=g.sibling;if(ee!==null){ee.return=g.return,Ye=ee;break e}Ye=g.return}}var W=n.current;for(Ye=W;Ye!==null;){w=Ye;var te=w.child;if((w.subtreeFlags&2064)!==0&&te!==null)te.return=w,Ye=te;else e:for(w=W;Ye!==null;){if(F=Ye,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:rl(9,F)}}catch(it){en(F,F.return,it)}if(F===w){Ye=null;break e}var we=F.sibling;if(we!==null){we.return=F.return,Ye=we;break e}Ye=F.return}}if(Lt=f,Cr(),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(ke,n)}catch{}c=!0}return c}finally{et=a,fi.transition=i}}return!1}function Qp(n,i,a){i=Ws(a,i),i=gp(n,i,1),n=Nr(n,i,1),i=zn(),n!==null&&(Bt(n,1,i),Xn(n,i))}function en(n,i,a){if(n.tag===3)Qp(n,n,a);else for(;i!==null;){if(i.tag===3){Qp(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Dr===null||!Dr.has(c))){n=Ws(a,n),n=xp(i,n,1),i=Nr(i,n,1),n=zn(),i!==null&&(Bt(i,1,n),Xn(i,n));break}}i=i.return}}function Rx(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=zn(),n.pingedLanes|=n.suspendedLanes&a,vn===n&&(bn&a)===a&&(ln===4||ln===3&&(bn&130023424)===bn&&500>zt()-Mu?ls(n,0):Su|=a),Xn(n,i)}function Jp(n,i){i===0&&((n.mode&1)===0?i=1:(i=jt,jt<<=1,(jt&130023424)===0&&(jt=4194304)));var a=zn();n=tr(n,i),n!==null&&(Bt(n,i,a),Xn(n,a))}function Nx(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Jp(n,a)}function Px(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Jp(n,a)}var em;em=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Vn.current)Gn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Gn=!1,vx(n,i,a);Gn=(n.flags&131072)!==0}else Gn=!1,Kt&&(i.flags&1048576)!==0&&Lh(i,jo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;nl(n,i),n=i.pendingProps;var f=Fs(i,Cn.current);Hs(i,a),f=Jc(null,i,c,n,f,a);var g=eu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Hn(c)?(g=!0,ko(i)):g=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Xc(i),f.updater=el,i.stateNode=f,f._reactInternals=i,au(i,c,n,a),i=uu(null,i,c,!0,g,a)):(i.tag=0,Kt&&g&&Oc(i),Bn(null,i,f,a),i=i.child),i;case 16:c=i.elementType;e:{switch(nl(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=Lx(c),n=vi(c,n),f){case 0:i=cu(null,i,c,n,a);break e;case 1:i=Tp(null,i,c,n,a);break e;case 11:i=Sp(null,i,c,n,a);break e;case 14:i=Mp(null,i,c,vi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:vi(c,f),cu(n,i,c,f,a);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:vi(c,f),Tp(n,i,c,f,a);case 3:e:{if(Ap(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,f=g.element,Vh(n,i),qo(i,c,null,a);var w=i.memoizedState;if(c=w.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){f=Ws(Error(t(423)),i),i=Cp(n,i,c,a,f);break e}else if(c!==f){f=Ws(Error(t(424)),i),i=Cp(n,i,c,a,f);break e}else for(ni=br(i.stateNode.containerInfo.firstChild),ti=i,Kt=!0,xi=null,a=zh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(zs(),c===f){i=ir(n,i,a);break e}Bn(n,i,c,a)}i=i.child}return i;case 5:return Wh(i),n===null&&Bc(i),c=i.type,f=i.pendingProps,g=n!==null?n.memoizedProps:null,w=f.children,Nc(c,f)?w=null:g!==null&&Nc(c,g)&&(i.flags|=32),bp(n,i),Bn(n,i,w,a),i.child;case 6:return n===null&&Bc(i),null;case 13:return Rp(n,i,a);case 4:return qc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=js(i,null,c,a):Bn(n,i,c,a),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:vi(c,f),Sp(n,i,c,f,a);case 7:return Bn(n,i,i.pendingProps,a),i.child;case 8:return Bn(n,i,i.pendingProps.children,a),i.child;case 12:return Bn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,g=i.memoizedProps,w=f.value,Xt(Go,c._currentValue),c._currentValue=w,g!==null)if(gi(g.value,w)){if(g.children===f.children&&!Vn.current){i=ir(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var F=g.dependencies;if(F!==null){w=g.child;for(var V=F.firstContext;V!==null;){if(V.context===c){if(g.tag===1){V=nr(-1,a&-a),V.tag=2;var oe=g.updateQueue;if(oe!==null){oe=oe.shared;var ve=oe.pending;ve===null?V.next=V:(V.next=ve.next,ve.next=V),oe.pending=V}}g.lanes|=a,V=g.alternate,V!==null&&(V.lanes|=a),Gc(g.return,a,i),F.lanes|=a;break}V=V.next}}else if(g.tag===10)w=g.type===i.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=a,F=w.alternate,F!==null&&(F.lanes|=a),Gc(w,a,i),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===i){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}Bn(n,i,f.children,a),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,Hs(i,a),f=ui(f),c=c(f),i.flags|=1,Bn(n,i,c,a),i.child;case 14:return c=i.type,f=vi(c,i.pendingProps),f=vi(c.type,f),Mp(n,i,c,f,a);case 15:return Ep(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:vi(c,f),nl(n,i),i.tag=1,Hn(c)?(n=!0,ko(i)):n=!1,Hs(i,a),pp(i,c,f),au(i,c,f,a),uu(null,i,c,!0,n,a);case 19:return Pp(n,i,a);case 22:return wp(n,i,a)}throw Error(t(156,i.tag))};function tm(n,i){return oi(n,i)}function Dx(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(n,i,a,c){return new Dx(n,i,a,c)}function Nu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Lx(n){if(typeof n=="function")return Nu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===$)return 11;if(n===de)return 14}return 2}function Or(n,i){var a=n.alternate;return a===null?(a=hi(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function hl(n,i,a,c,f,g){var w=2;if(c=n,typeof n=="function")Nu(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case O:return us(a.children,f,g,i);case H:w=8,f|=8;break;case b:return n=hi(12,a,i,f|2),n.elementType=b,n.lanes=g,n;case K:return n=hi(13,a,i,f),n.elementType=K,n.lanes=g,n;case ue:return n=hi(19,a,i,f),n.elementType=ue,n.lanes=g,n;case Q:return pl(a,f,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:w=10;break e;case B:w=9;break e;case $:w=11;break e;case de:w=14;break e;case re:w=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=hi(w,a,i,f),i.elementType=n,i.type=c,i.lanes=g,i}function us(n,i,a,c){return n=hi(7,n,c,i),n.lanes=a,n}function pl(n,i,a,c){return n=hi(22,n,c,i),n.elementType=Q,n.lanes=a,n.stateNode={isHidden:!1},n}function Pu(n,i,a){return n=hi(6,n,null,i),n.lanes=a,n}function Du(n,i,a){return i=hi(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Ix(n,i,a,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qt(0),this.expirationTimes=qt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qt(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Lu(n,i,a,c,f,g,w,F,V){return n=new Ix(n,i,a,F,V),i===1?(i=1,g===!0&&(i|=8)):i=0,g=hi(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xc(g),n}function Ux(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function nm(n){if(!n)return Ar;n=n._reactInternals;e:{if(Fn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Hn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Hn(a))return Nh(n,a,i)}return i}function im(n,i,a,c,f,g,w,F,V){return n=Lu(a,c,!0,n,f,g,w,F,V),n.context=nm(null),a=n.current,c=zn(),f=Ir(a),g=nr(c,f),g.callback=i??null,Nr(a,g,f),n.current.lanes=f,Bt(n,f,c),Xn(n,c),n}function ml(n,i,a,c){var f=i.current,g=zn(),w=Ir(f);return a=nm(a),i.context===null?i.context=a:i.pendingContext=a,i=nr(g,w),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Nr(f,i,w),n!==null&&(Si(n,f,w,g),Xo(n,f,w)),w}function gl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function rm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Iu(n,i){rm(n,i),(n=n.alternate)&&rm(n,i)}function Ox(){return null}var sm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Uu(n){this._internalRoot=n}xl.prototype.render=Uu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ml(n,i,null,null)},xl.prototype.unmount=Uu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;os(function(){ml(null,n,null,null)}),i[Zi]=null}};function xl(n){this._internalRoot=n}xl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Di();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Mr.length&&i!==0&&i<Mr[a].priority;a++);Mr.splice(a,0,n),a===0&&Wf(n)}};function Ou(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function vl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function am(){}function Fx(n,i,a,c,f){if(f){if(typeof c=="function"){var g=c;c=function(){var oe=gl(w);g.call(oe)}}var w=im(i,c,n,0,null,!1,!1,"",am);return n._reactRootContainer=w,n[Zi]=w.current,Ua(n.nodeType===8?n.parentNode:n),os(),w}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var F=c;c=function(){var oe=gl(V);F.call(oe)}}var V=Lu(n,0,!1,null,null,!1,!1,"",am);return n._reactRootContainer=V,n[Zi]=V.current,Ua(n.nodeType===8?n.parentNode:n),os(function(){ml(i,V,a,c)}),V}function _l(n,i,a,c,f){var g=a._reactRootContainer;if(g){var w=g;if(typeof f=="function"){var F=f;f=function(){var V=gl(w);F.call(V)}}ml(i,w,n,f)}else w=Fx(a,i,n,f,c);return gl(w)}mn=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=kt(i.pendingLanes);a!==0&&(Te(i,a|1),Xn(i,zt()),(Lt&6)===0&&(Ys=zt()+500,Cr()))}break;case 13:os(function(){var c=tr(n,1);if(c!==null){var f=zn();Si(c,n,1,f)}}),Iu(n,1)}},gn=function(n){if(n.tag===13){var i=tr(n,134217728);if(i!==null){var a=zn();Si(i,n,134217728,a)}Iu(n,134217728)}},As=function(n){if(n.tag===13){var i=Ir(n),a=tr(n,i);if(a!==null){var c=zn();Si(a,n,i,c)}Iu(n,i)}},Di=function(){return et},Hf=function(n,i){var a=et;try{return et=n,i()}finally{et=a}},Ue=function(n,i,a){switch(i){case"input":if(Vt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var f=Oo(c);if(!f)throw Error(t(90));Dt(c),Vt(c,f)}}}break;case"textarea":E(n,a);break;case"select":i=a.value,i!=null&&Tt(n,!!a.multiple,i,!1)}},ut=Au,At=os;var kx={usingClientEntryPoint:!1,Events:[ka,Us,Oo,pe,De,Au]},Qa={findFiberByHostInstance:Jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Bx={bundleType:Qa.bundleType,version:Qa.version,rendererPackageName:Qa.rendererPackageName,rendererConfig:Qa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ki(n),n===null?null:n.stateNode},findFiberByHostInstance:Qa.findFiberByHostInstance||Ox,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yl.isDisabled&&yl.supportsFiber)try{ke=yl.inject(Bx),be=yl}catch{}}return qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kx,qn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ou(i))throw Error(t(200));return Ux(n,i,null,a)},qn.createRoot=function(n,i){if(!Ou(n))throw Error(t(299));var a=!1,c="",f=sm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Lu(n,1,!1,null,null,a,!1,c,f),n[Zi]=i.current,Ua(n.nodeType===8?n.parentNode:n),new Uu(i)},qn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ki(i),n=n===null?null:n.stateNode,n},qn.flushSync=function(n){return os(n)},qn.hydrate=function(n,i,a){if(!vl(i))throw Error(t(200));return _l(null,n,i,!0,a)},qn.hydrateRoot=function(n,i,a){if(!Ou(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,f=!1,g="",w=sm;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=im(i,null,n,1,a??null,f,!1,g,w),n[Zi]=i.current,Ua(n),c)for(n=0;n<c.length;n++)a=c[n],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new xl(i)},qn.render=function(n,i,a){if(!vl(i))throw Error(t(200));return _l(null,n,i,!1,a)},qn.unmountComponentAtNode=function(n){if(!vl(n))throw Error(t(40));return n._reactRootContainer?(os(function(){_l(null,null,n,!1,function(){n._reactRootContainer=null,n[Zi]=null})}),!0):!1},qn.unstable_batchedUpdates=Au,qn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!vl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return _l(n,i,a,!1,c)},qn.version="18.3.1-next-f1338f8080-20240426",qn}var pm;function Yx(){if(pm)return Bu.exports;pm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Bu.exports=qx(),Bu.exports}var mm;function $x(){if(mm)return Sl;mm=1;var s=Yx();return Sl.createRoot=s.createRoot,Sl.hydrateRoot=s.hydrateRoot,Sl}var Kx=$x();const Zx=E0(Kx);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),w0=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Jx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=Qe.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...d},p)=>Qe.createElement("svg",{ref:p,...Jx,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:w0("lucide",o),...d},[...u.map(([m,x])=>Qe.createElement(m,x)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=(s,e)=>{const t=Qe.forwardRef(({className:r,...o},l)=>Qe.createElement(ev,{ref:l,iconNode:e,className:w0(`lucide-${Qx(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=dt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=dt("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=dt("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=dt("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=dt("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=dt("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=dt("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=dt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=dt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=dt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=dt("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nc=dt("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=dt("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=dt("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=dt("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=dt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=dt("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=dt("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=dt("FileCheck2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=dt("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=dt("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=dt("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=dt("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=dt("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=dt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=dt("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=dt("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=dt("OctagonAlert",[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=dt("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=dt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=dt("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=dt("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=dt("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=dt("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=dt("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=dt("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=dt("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=dt("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=dt("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=dt("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=dt("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=dt("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=dt("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=dt("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=dt("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=dt("Wind",[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=dt("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=dt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=dt("ZapOff",[["path",{d:"M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317",key:"193nxd"}],["path",{d:"M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773",key:"27a7lr"}],["path",{d:"M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643",key:"1e0qe9"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]),Rv=({cartCount:s,onOpenCart:e})=>{const[t,r]=Qe.useState(!1),[o,l]=Qe.useState(!1);Qe.useEffect(()=>{const d=()=>{r(window.scrollY>40)};return window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)},[]);const u=[{name:"Simulação 3D",href:"#hero-3d",icon:uo},{name:"Central VTS",href:"#central-vts",icon:wv},{name:"Normas NBR",href:"#normas",icon:Sd},{name:"Calculadora & Diagrama",href:"#calculadora",icon:b0,highlight:!0},{name:"Loja Virtual",href:"#loja",icon:Ql},{name:"Manuais",href:"#manuais",icon:Sd},{name:"Fotos Reais",href:"#galeria",icon:ic},{name:"Contato",href:"#contato",icon:fr}];return h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"bg-gradient-to-r from-[#08090b] via-[#141208] to-[#08090b] border-b border-[#d4af37]/30 text-xs py-1.5 px-4 text-center text-[#f3e5ab] flex items-center justify-center gap-2 font-medium",children:[h.jsxs("span",{className:"flex h-2 w-2 relative",children:[h.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"}),h.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-[#d4af37]"})]}),h.jsxs("span",{className:"tracking-wide",children:["SISTEMA EM CONFORMIDADE TOTAL COM ",h.jsx("strong",{className:"text-[#e5c05d]",children:"ABNT NBR 14518"}),", ",h.jsx("strong",{className:"text-[#e5c05d]",children:"NFPA 96 & 17A"})," E CORPO DE BOMBEIROS (AVCB)"]})]}),h.jsxs("header",{className:`sticky top-0 z-50 transition-all duration-300 ${t?"bg-[#08090b]/95 backdrop-blur-md border-b border-[#d4af37]/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-2.5":"bg-[#08090b]/85 backdrop-blur-sm border-b border-white/5 py-3.5"}`,children:[h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between",children:[h.jsx("a",{href:"#",className:"flex items-center gap-3 group",children:h.jsx("img",{src:"/assets/logo-outfire-gold.png",alt:"OUTFIRE - Sistemas contra Incêndio",className:"h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]"})}),h.jsx("nav",{className:"hidden lg:flex items-center gap-1",children:u.map(d=>{const p=d.icon;return h.jsxs("a",{href:d.href,className:`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${d.highlight?"bg-[#d4af37]/15 text-[#e5c05d] hover:bg-[#d4af37]/25 border border-[#d4af37]/40 shadow-[0_0_15px_rgba(212,175,55,0.2)] font-semibold":"text-gray-300 hover:text-[#f3e5ab] hover:bg-white/5"}`,children:[h.jsx(p,{className:`w-3.5 h-3.5 ${d.highlight?"text-[#d4af37]":"opacity-70"}`}),d.name]},d.name)})}),h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsxs("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20do%20sistema%20Outfire%20para%20minha%20cozinha%20industrial.",target:"_blank",rel:"noopener noreferrer",className:"hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black text-xs font-black px-4 py-2 rounded-lg shadow-glow-gold hover:shadow-glow-gold-lg transition-all",children:[h.jsx(fr,{className:"w-3.5 h-3.5 fill-black"}),h.jsx("span",{children:"(15) 99657-6807"})]}),h.jsxs("button",{onClick:e,className:"relative p-2.5 rounded-xl bg-[#14171e] hover:bg-[#1a1f28] border border-[#d4af37]/25 text-[#f3e5ab] hover:text-white transition-all flex items-center justify-center group shadow-md",title:"Ver Carrinho de Compras",children:[h.jsx(Ql,{className:"w-5 h-5 group-hover:scale-105 transition-transform"}),s>0&&h.jsx("span",{className:"absolute -top-1.5 -right-1.5 bg-[#d4af37] text-black font-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-glow-gold animate-pulse",children:s})]}),h.jsx("button",{onClick:()=>l(!o),className:"lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white",children:o?h.jsx(Ed,{className:"w-6 h-6"}):h.jsx(mv,{className:"w-6 h-6"})})]})]}),o&&h.jsxs("div",{className:"lg:hidden mt-3 px-4 pt-2 pb-6 bg-[#0e1014] border-b border-[#d4af37]/20 space-y-2",children:[u.map(d=>{const p=d.icon;return h.jsxs("a",{href:d.href,onClick:()=>l(!1),className:"flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-200 hover:bg-[#d4af37]/10 hover:text-[#f3e5ab] transition-all",children:[h.jsx(p,{className:"w-4 h-4 text-[#d4af37]"}),h.jsx("span",{children:d.name})]},d.name)}),h.jsx("div",{className:"pt-3 border-t border-white/10",children:h.jsxs("a",{href:"https://wa.me/5515996576807",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#d4af37] to-[#e5c05d] text-black text-sm font-black rounded-lg shadow-glow-gold",children:[h.jsx(fr,{className:"w-4 h-4 fill-black"}),"Falar com Engenharia Outfire no WhatsApp"]})})]})]})]})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yf="182",fa={ROTATE:0,DOLLY:1,PAN:2},da={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Nv=0,ym=1,Pv=2,Gl=1,N0=2,lo=3,Yr=0,Jn=1,ur=2,hr=0,ha=1,Sm=2,Mm=3,Em=4,Dv=5,vs=100,Lv=101,Iv=102,Uv=103,Ov=104,Fv=200,kv=201,Bv=202,zv=203,wd=204,bd=205,jv=206,Vv=207,Hv=208,Gv=209,Wv=210,Xv=211,qv=212,Yv=213,$v=214,Td=0,Ad=1,Cd=2,ma=3,Rd=4,Nd=5,Pd=6,Dd=7,P0=0,Kv=1,Zv=2,Vi=0,D0=1,L0=2,I0=3,Sf=4,U0=5,O0=6,F0=7,k0=300,Es=301,ga=302,Ld=303,Id=304,rc=306,Ud=1e3,dr=1001,Od=1002,Tn=1003,Qv=1004,Ml=1005,In=1006,Vu=1007,Ss=1008,ai=1009,B0=1010,z0=1011,ho=1012,Mf=1013,Wi=1014,zi=1015,mr=1016,Ef=1017,wf=1018,po=1020,j0=35902,V0=35899,H0=1021,G0=1022,Ti=1023,gr=1026,Ms=1027,W0=1028,bf=1029,xa=1030,Tf=1031,Af=1033,Wl=33776,Xl=33777,ql=33778,Yl=33779,Fd=35840,kd=35841,Bd=35842,zd=35843,jd=36196,Vd=37492,Hd=37496,Gd=37488,Wd=37489,Xd=37490,qd=37491,Yd=37808,$d=37809,Kd=37810,Zd=37811,Qd=37812,Jd=37813,ef=37814,tf=37815,nf=37816,rf=37817,sf=37818,af=37819,of=37820,lf=37821,cf=36492,uf=36494,df=36495,ff=36283,hf=36284,pf=36285,mf=36286,Jv=3200,X0=0,e_=1,Wr="",Zn="srgb",va="srgb-linear",Jl="linear",Ht="srgb",Ks=7680,wm=519,t_=512,n_=513,i_=514,Cf=515,r_=516,s_=517,Rf=518,a_=519,bm=35044,Tm="300 es",ji=2e3,ec=2001;function q0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function mo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function o_(){const s=mo("canvas");return s.style.display="block",s}const Am={};function Cm(...s){const e="THREE."+s.shift();console.log(e,...s)}function vt(...s){const e="THREE."+s.shift();console.warn(e,...s)}function It(...s){const e="THREE."+s.shift();console.error(e,...s)}function go(...s){const e=s.join(" ");e in Am||(Am[e]=!0,vt(...s))}function l_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}class bs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$l=Math.PI/180,tc=180/Math.PI;function vo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[t&63|128]+Dn[t>>8&255]+"-"+Dn[t>>16&255]+Dn[t>>24&255]+Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]).toLowerCase()}function bt(s,e,t){return Math.max(e,Math.min(t,s))}function c_(s,e){return(s%e+e)%e}function Hu(s,e,t){return(1-t)*s+t*e}function eo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Yn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const u_={DEG2RAD:$l};class gt{constructor(e=0,t=0){gt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ws{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,d){let p=r[o+0],m=r[o+1],x=r[o+2],v=r[o+3],y=l[u+0],S=l[u+1],A=l[u+2],C=l[u+3];if(d<=0){e[t+0]=p,e[t+1]=m,e[t+2]=x,e[t+3]=v;return}if(d>=1){e[t+0]=y,e[t+1]=S,e[t+2]=A,e[t+3]=C;return}if(v!==C||p!==y||m!==S||x!==A){let M=p*y+m*S+x*A+v*C;M<0&&(y=-y,S=-S,A=-A,C=-C,M=-M);let _=1-d;if(M<.9995){const T=Math.acos(M),D=Math.sin(T);_=Math.sin(_*T)/D,d=Math.sin(d*T)/D,p=p*_+y*d,m=m*_+S*d,x=x*_+A*d,v=v*_+C*d}else{p=p*_+y*d,m=m*_+S*d,x=x*_+A*d,v=v*_+C*d;const T=1/Math.sqrt(p*p+m*m+x*x+v*v);p*=T,m*=T,x*=T,v*=T}}e[t]=p,e[t+1]=m,e[t+2]=x,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,l,u){const d=r[o],p=r[o+1],m=r[o+2],x=r[o+3],v=l[u],y=l[u+1],S=l[u+2],A=l[u+3];return e[t]=d*A+x*v+p*S-m*y,e[t+1]=p*A+x*y+m*v-d*S,e[t+2]=m*A+x*S+d*y-p*v,e[t+3]=x*A-d*v-p*y-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,p=Math.sin,m=d(r/2),x=d(o/2),v=d(l/2),y=p(r/2),S=p(o/2),A=p(l/2);switch(u){case"XYZ":this._x=y*x*v+m*S*A,this._y=m*S*v-y*x*A,this._z=m*x*A+y*S*v,this._w=m*x*v-y*S*A;break;case"YXZ":this._x=y*x*v+m*S*A,this._y=m*S*v-y*x*A,this._z=m*x*A-y*S*v,this._w=m*x*v+y*S*A;break;case"ZXY":this._x=y*x*v-m*S*A,this._y=m*S*v+y*x*A,this._z=m*x*A+y*S*v,this._w=m*x*v-y*S*A;break;case"ZYX":this._x=y*x*v-m*S*A,this._y=m*S*v+y*x*A,this._z=m*x*A-y*S*v,this._w=m*x*v+y*S*A;break;case"YZX":this._x=y*x*v+m*S*A,this._y=m*S*v+y*x*A,this._z=m*x*A-y*S*v,this._w=m*x*v-y*S*A;break;case"XZY":this._x=y*x*v-m*S*A,this._y=m*S*v-y*x*A,this._z=m*x*A+y*S*v,this._w=m*x*v+y*S*A;break;default:vt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],d=t[5],p=t[9],m=t[2],x=t[6],v=t[10],y=r+d+v;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(x-p)*S,this._y=(l-m)*S,this._z=(u-o)*S}else if(r>d&&r>v){const S=2*Math.sqrt(1+r-d-v);this._w=(x-p)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+m)/S}else if(d>v){const S=2*Math.sqrt(1+d-r-v);this._w=(l-m)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(p+x)/S}else{const S=2*Math.sqrt(1+v-r-d);this._w=(u-o)/S,this._x=(l+m)/S,this._y=(p+x)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,d=t._x,p=t._y,m=t._z,x=t._w;return this._x=r*x+u*d+o*m-l*p,this._y=o*x+u*p+l*d-r*m,this._z=l*x+u*m+r*p-o*d,this._w=u*x-r*d-o*p-l*m,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let r=e._x,o=e._y,l=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,l=-l,u=-u,d=-d);let p=1-t;if(d<.9995){const m=Math.acos(d),x=Math.sin(m);p=Math.sin(p*m)/x,t=Math.sin(t*m)/x,this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+u*t,this._onChangeCallback()}else this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,t=0,r=0){Z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,d=e.z,p=e.w,m=2*(u*o-d*r),x=2*(d*t-l*o),v=2*(l*r-u*t);return this.x=t+p*m+u*v-d*x,this.y=r+p*x+d*m-l*v,this.z=o+p*v+l*x-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,d=t.y,p=t.z;return this.x=o*p-l*d,this.y=l*u-r*p,this.z=r*d-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Gu.copy(this).projectOnVector(e),this.sub(Gu)}reflect(e){return this.sub(Gu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gu=new Z,Rm=new ws;class yt{constructor(e,t,r,o,l,u,d,p,m){yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,p,m)}set(e,t,r,o,l,u,d,p,m){const x=this.elements;return x[0]=e,x[1]=o,x[2]=d,x[3]=t,x[4]=l,x[5]=p,x[6]=r,x[7]=u,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[3],p=r[6],m=r[1],x=r[4],v=r[7],y=r[2],S=r[5],A=r[8],C=o[0],M=o[3],_=o[6],T=o[1],D=o[4],R=o[7],U=o[2],L=o[5],O=o[8];return l[0]=u*C+d*T+p*U,l[3]=u*M+d*D+p*L,l[6]=u*_+d*R+p*O,l[1]=m*C+x*T+v*U,l[4]=m*M+x*D+v*L,l[7]=m*_+x*R+v*O,l[2]=y*C+S*T+A*U,l[5]=y*M+S*D+A*L,l[8]=y*_+S*R+A*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],m=e[7],x=e[8];return t*u*x-t*d*m-r*l*x+r*d*p+o*l*m-o*u*p}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],m=e[7],x=e[8],v=x*u-d*m,y=d*p-x*l,S=m*l-u*p,A=t*v+r*y+o*S;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=v*C,e[1]=(o*m-x*r)*C,e[2]=(d*r-o*u)*C,e[3]=y*C,e[4]=(x*t-o*p)*C,e[5]=(o*l-d*t)*C,e[6]=S*C,e[7]=(r*p-m*t)*C,e[8]=(u*t-r*l)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,d){const p=Math.cos(l),m=Math.sin(l);return this.set(r*p,r*m,-r*(p*u+m*d)+u+e,-o*m,o*p,-o*(-m*u+p*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Wu.makeScale(e,t)),this}rotate(e){return this.premultiply(Wu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wu=new yt,Nm=new yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pm=new yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function d_(){const s={enabled:!0,workingColorSpace:va,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Ht&&(o.r=pr(o.r),o.g=pr(o.g),o.b=pr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ht&&(o.r=pa(o.r),o.g=pa(o.g),o.b=pa(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Wr?Jl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return go("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return go("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[va]:{primaries:e,whitePoint:r,transfer:Jl,toXYZ:Nm,fromXYZ:Pm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Zn},outputColorSpaceConfig:{drawingBufferColorSpace:Zn}},[Zn]:{primaries:e,whitePoint:r,transfer:Ht,toXYZ:Nm,fromXYZ:Pm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Zn}}}),s}const Ut=d_();function pr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function pa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Zs;class f_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Zs===void 0&&(Zs=mo("canvas")),Zs.width=e.width,Zs.height=e.height;const o=Zs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Zs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=mo("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=pr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(pr(t[r]/255)*255):t[r]=pr(t[r]);return{data:t,width:e.width,height:e.height}}else return vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let h_=0;class Nf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:h_++}),this.uuid=vo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(Xu(o[u].image)):l.push(Xu(o[u]))}else l=Xu(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Xu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?f_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(vt("Texture: Unable to serialize Texture."),{})}let p_=0;const qu=new Z;class An extends bs{constructor(e=An.DEFAULT_IMAGE,t=An.DEFAULT_MAPPING,r=dr,o=dr,l=In,u=Ss,d=Ti,p=ai,m=An.DEFAULT_ANISOTROPY,x=Wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=vo(),this.name="",this.source=new Nf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qu).x}get height(){return this.source.getSize(qu).y}get depth(){return this.source.getSize(qu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){vt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){vt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==k0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ud:e.x=e.x-Math.floor(e.x);break;case dr:e.x=e.x<0?0:1;break;case Od:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ud:e.y=e.y-Math.floor(e.y);break;case dr:e.y=e.y<0?0:1;break;case Od:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=k0;An.DEFAULT_ANISOTROPY=1;class tn{constructor(e=0,t=0,r=0,o=1){tn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const p=e.elements,m=p[0],x=p[4],v=p[8],y=p[1],S=p[5],A=p[9],C=p[2],M=p[6],_=p[10];if(Math.abs(x-y)<.01&&Math.abs(v-C)<.01&&Math.abs(A-M)<.01){if(Math.abs(x+y)<.1&&Math.abs(v+C)<.1&&Math.abs(A+M)<.1&&Math.abs(m+S+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(m+1)/2,R=(S+1)/2,U=(_+1)/2,L=(x+y)/4,O=(v+C)/4,H=(A+M)/4;return D>R&&D>U?D<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(D),o=L/r,l=O/r):R>U?R<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),r=L/o,l=H/o):U<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(U),r=O/l,o=H/l),this.set(r,o,l,t),this}let T=Math.sqrt((M-A)*(M-A)+(v-C)*(v-C)+(y-x)*(y-x));return Math.abs(T)<.001&&(T=1),this.x=(M-A)/T,this.y=(v-C)/T,this.z=(y-x)/T,this.w=Math.acos((m+S+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this.w=bt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this.w=bt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class m_ extends bs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new tn(0,0,e,t),this.scissorTest=!1,this.viewport=new tn(0,0,e,t);const o={width:e,height:t,depth:r.depth},l=new An(o);this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Nf(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends m_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Y0 extends An{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class g_ extends An{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _o{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,Mi):Mi.fromBufferAttribute(l,u),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),El.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),El.copy(r.boundingBox)),El.applyMatrix4(e.matrixWorld),this.union(El)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(to),wl.subVectors(this.max,to),Qs.subVectors(e.a,to),Js.subVectors(e.b,to),ea.subVectors(e.c,to),kr.subVectors(Js,Qs),Br.subVectors(ea,Js),ds.subVectors(Qs,ea);let t=[0,-kr.z,kr.y,0,-Br.z,Br.y,0,-ds.z,ds.y,kr.z,0,-kr.x,Br.z,0,-Br.x,ds.z,0,-ds.x,-kr.y,kr.x,0,-Br.y,Br.x,0,-ds.y,ds.x,0];return!Yu(t,Qs,Js,ea,wl)||(t=[1,0,0,0,1,0,0,0,1],!Yu(t,Qs,Js,ea,wl))?!1:(bl.crossVectors(kr,Br),t=[bl.x,bl.y,bl.z],Yu(t,Qs,Js,ea,wl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const sr=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Mi=new Z,El=new _o,Qs=new Z,Js=new Z,ea=new Z,kr=new Z,Br=new Z,ds=new Z,to=new Z,wl=new Z,bl=new Z,fs=new Z;function Yu(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){fs.fromArray(s,l);const d=o.x*Math.abs(fs.x)+o.y*Math.abs(fs.y)+o.z*Math.abs(fs.z),p=e.dot(fs),m=t.dot(fs),x=r.dot(fs);if(Math.max(-Math.max(p,m,x),Math.min(p,m,x))>d)return!1}return!0}const x_=new _o,no=new Z,$u=new Z;class Pf{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):x_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;no.subVectors(e,this.center);const t=no.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(no,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($u.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(no.copy(e.center).add($u)),this.expandByPoint(no.copy(e.center).sub($u))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ar=new Z,Ku=new Z,Tl=new Z,zr=new Z,Zu=new Z,Al=new Z,Qu=new Z;class Df{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ar.copy(this.origin).addScaledVector(this.direction,t),ar.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Ku.copy(e).add(t).multiplyScalar(.5),Tl.copy(t).sub(e).normalize(),zr.copy(this.origin).sub(Ku);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Tl),d=zr.dot(this.direction),p=-zr.dot(Tl),m=zr.lengthSq(),x=Math.abs(1-u*u);let v,y,S,A;if(x>0)if(v=u*p-d,y=u*d-p,A=l*x,v>=0)if(y>=-A)if(y<=A){const C=1/x;v*=C,y*=C,S=v*(v+u*y+2*d)+y*(u*v+y+2*p)+m}else y=l,v=Math.max(0,-(u*y+d)),S=-v*v+y*(y+2*p)+m;else y=-l,v=Math.max(0,-(u*y+d)),S=-v*v+y*(y+2*p)+m;else y<=-A?(v=Math.max(0,-(-u*l+d)),y=v>0?-l:Math.min(Math.max(-l,-p),l),S=-v*v+y*(y+2*p)+m):y<=A?(v=0,y=Math.min(Math.max(-l,-p),l),S=y*(y+2*p)+m):(v=Math.max(0,-(u*l+d)),y=v>0?l:Math.min(Math.max(-l,-p),l),S=-v*v+y*(y+2*p)+m);else y=u>0?-l:l,v=Math.max(0,-(u*y+d)),S=-v*v+y*(y+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Ku).addScaledVector(Tl,y),S}intersectSphere(e,t){ar.subVectors(e.center,this.origin);const r=ar.dot(this.direction),o=ar.dot(ar)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=r-u,p=r+u;return p<0?null:d<0?this.at(p,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,d,p;const m=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,y=this.origin;return m>=0?(r=(e.min.x-y.x)*m,o=(e.max.x-y.x)*m):(r=(e.max.x-y.x)*m,o=(e.min.x-y.x)*m),x>=0?(l=(e.min.y-y.y)*x,u=(e.max.y-y.y)*x):(l=(e.max.y-y.y)*x,u=(e.min.y-y.y)*x),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),v>=0?(d=(e.min.z-y.z)*v,p=(e.max.z-y.z)*v):(d=(e.max.z-y.z)*v,p=(e.min.z-y.z)*v),r>p||d>o)||((d>r||r!==r)&&(r=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,ar)!==null}intersectTriangle(e,t,r,o,l){Zu.subVectors(t,e),Al.subVectors(r,e),Qu.crossVectors(Zu,Al);let u=this.direction.dot(Qu),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;zr.subVectors(this.origin,e);const p=d*this.direction.dot(Al.crossVectors(zr,Al));if(p<0)return null;const m=d*this.direction.dot(Zu.cross(zr));if(m<0||p+m>u)return null;const x=-d*zr.dot(Qu);return x<0?null:this.at(x/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(e,t,r,o,l,u,d,p,m,x,v,y,S,A,C,M){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,p,m,x,v,y,S,A,C,M)}set(e,t,r,o,l,u,d,p,m,x,v,y,S,A,C,M){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=l,_[5]=u,_[9]=d,_[13]=p,_[2]=m,_[6]=x,_[10]=v,_[14]=y,_[3]=S,_[7]=A,_[11]=C,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/ta.setFromMatrixColumn(e,0).length(),l=1/ta.setFromMatrixColumn(e,1).length(),u=1/ta.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),p=Math.cos(o),m=Math.sin(o),x=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const y=u*x,S=u*v,A=d*x,C=d*v;t[0]=p*x,t[4]=-p*v,t[8]=m,t[1]=S+A*m,t[5]=y-C*m,t[9]=-d*p,t[2]=C-y*m,t[6]=A+S*m,t[10]=u*p}else if(e.order==="YXZ"){const y=p*x,S=p*v,A=m*x,C=m*v;t[0]=y+C*d,t[4]=A*d-S,t[8]=u*m,t[1]=u*v,t[5]=u*x,t[9]=-d,t[2]=S*d-A,t[6]=C+y*d,t[10]=u*p}else if(e.order==="ZXY"){const y=p*x,S=p*v,A=m*x,C=m*v;t[0]=y-C*d,t[4]=-u*v,t[8]=A+S*d,t[1]=S+A*d,t[5]=u*x,t[9]=C-y*d,t[2]=-u*m,t[6]=d,t[10]=u*p}else if(e.order==="ZYX"){const y=u*x,S=u*v,A=d*x,C=d*v;t[0]=p*x,t[4]=A*m-S,t[8]=y*m+C,t[1]=p*v,t[5]=C*m+y,t[9]=S*m-A,t[2]=-m,t[6]=d*p,t[10]=u*p}else if(e.order==="YZX"){const y=u*p,S=u*m,A=d*p,C=d*m;t[0]=p*x,t[4]=C-y*v,t[8]=A*v+S,t[1]=v,t[5]=u*x,t[9]=-d*x,t[2]=-m*x,t[6]=S*v+A,t[10]=y-C*v}else if(e.order==="XZY"){const y=u*p,S=u*m,A=d*p,C=d*m;t[0]=p*x,t[4]=-v,t[8]=m*x,t[1]=y*v+C,t[5]=u*x,t[9]=S*v-A,t[2]=A*v-S,t[6]=d*x,t[10]=C*v+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(v_,e,__)}lookAt(e,t,r){const o=this.elements;return ri.subVectors(e,t),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),jr.crossVectors(r,ri),jr.lengthSq()===0&&(Math.abs(r.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),jr.crossVectors(r,ri)),jr.normalize(),Cl.crossVectors(ri,jr),o[0]=jr.x,o[4]=Cl.x,o[8]=ri.x,o[1]=jr.y,o[5]=Cl.y,o[9]=ri.y,o[2]=jr.z,o[6]=Cl.z,o[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[4],p=r[8],m=r[12],x=r[1],v=r[5],y=r[9],S=r[13],A=r[2],C=r[6],M=r[10],_=r[14],T=r[3],D=r[7],R=r[11],U=r[15],L=o[0],O=o[4],H=o[8],b=o[12],P=o[1],B=o[5],$=o[9],K=o[13],ue=o[2],de=o[6],re=o[10],Q=o[14],q=o[3],me=o[7],le=o[11],k=o[15];return l[0]=u*L+d*P+p*ue+m*q,l[4]=u*O+d*B+p*de+m*me,l[8]=u*H+d*$+p*re+m*le,l[12]=u*b+d*K+p*Q+m*k,l[1]=x*L+v*P+y*ue+S*q,l[5]=x*O+v*B+y*de+S*me,l[9]=x*H+v*$+y*re+S*le,l[13]=x*b+v*K+y*Q+S*k,l[2]=A*L+C*P+M*ue+_*q,l[6]=A*O+C*B+M*de+_*me,l[10]=A*H+C*$+M*re+_*le,l[14]=A*b+C*K+M*Q+_*k,l[3]=T*L+D*P+R*ue+U*q,l[7]=T*O+D*B+R*de+U*me,l[11]=T*H+D*$+R*re+U*le,l[15]=T*b+D*K+R*Q+U*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],d=e[5],p=e[9],m=e[13],x=e[2],v=e[6],y=e[10],S=e[14],A=e[3],C=e[7],M=e[11],_=e[15],T=p*S-m*y,D=d*S-m*v,R=d*y-p*v,U=u*S-m*x,L=u*y-p*x,O=u*v-d*x;return t*(C*T-M*D+_*R)-r*(A*T-M*U+_*L)+o*(A*D-C*U+_*O)-l*(A*R-C*L+M*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],m=e[7],x=e[8],v=e[9],y=e[10],S=e[11],A=e[12],C=e[13],M=e[14],_=e[15],T=v*M*m-C*y*m+C*p*S-d*M*S-v*p*_+d*y*_,D=A*y*m-x*M*m-A*p*S+u*M*S+x*p*_-u*y*_,R=x*C*m-A*v*m+A*d*S-u*C*S-x*d*_+u*v*_,U=A*v*p-x*C*p-A*d*y+u*C*y+x*d*M-u*v*M,L=t*T+r*D+o*R+l*U;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/L;return e[0]=T*O,e[1]=(C*y*l-v*M*l-C*o*S+r*M*S+v*o*_-r*y*_)*O,e[2]=(d*M*l-C*p*l+C*o*m-r*M*m-d*o*_+r*p*_)*O,e[3]=(v*p*l-d*y*l-v*o*m+r*y*m+d*o*S-r*p*S)*O,e[4]=D*O,e[5]=(x*M*l-A*y*l+A*o*S-t*M*S-x*o*_+t*y*_)*O,e[6]=(A*p*l-u*M*l-A*o*m+t*M*m+u*o*_-t*p*_)*O,e[7]=(u*y*l-x*p*l+x*o*m-t*y*m-u*o*S+t*p*S)*O,e[8]=R*O,e[9]=(A*v*l-x*C*l-A*r*S+t*C*S+x*r*_-t*v*_)*O,e[10]=(u*C*l-A*d*l+A*r*m-t*C*m-u*r*_+t*d*_)*O,e[11]=(x*d*l-u*v*l-x*r*m+t*v*m+u*r*S-t*d*S)*O,e[12]=U*O,e[13]=(x*C*o-A*v*o+A*r*y-t*C*y-x*r*M+t*v*M)*O,e[14]=(A*d*o-u*C*o-A*r*p+t*C*p+u*r*M-t*d*M)*O,e[15]=(u*v*o-x*d*o+x*r*p-t*v*p-u*r*y+t*d*y)*O,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,d=e.y,p=e.z,m=l*u,x=l*d;return this.set(m*u+r,m*d-o*p,m*p+o*d,0,m*d+o*p,x*d+r,x*p-o*u,0,m*p-o*d,x*p+o*u,l*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,d=t._z,p=t._w,m=l+l,x=u+u,v=d+d,y=l*m,S=l*x,A=l*v,C=u*x,M=u*v,_=d*v,T=p*m,D=p*x,R=p*v,U=r.x,L=r.y,O=r.z;return o[0]=(1-(C+_))*U,o[1]=(S+R)*U,o[2]=(A-D)*U,o[3]=0,o[4]=(S-R)*L,o[5]=(1-(y+_))*L,o[6]=(M+T)*L,o[7]=0,o[8]=(A+D)*O,o[9]=(M-T)*O,o[10]=(1-(y+C))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;if(e.x=o[12],e.y=o[13],e.z=o[14],this.determinant()===0)return r.set(1,1,1),t.identity(),this;let l=ta.set(o[0],o[1],o[2]).length();const u=ta.set(o[4],o[5],o[6]).length(),d=ta.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),Ei.copy(this);const m=1/l,x=1/u,v=1/d;return Ei.elements[0]*=m,Ei.elements[1]*=m,Ei.elements[2]*=m,Ei.elements[4]*=x,Ei.elements[5]*=x,Ei.elements[6]*=x,Ei.elements[8]*=v,Ei.elements[9]*=v,Ei.elements[10]*=v,t.setFromRotationMatrix(Ei),r.x=l,r.y=u,r.z=d,this}makePerspective(e,t,r,o,l,u,d=ji,p=!1){const m=this.elements,x=2*l/(t-e),v=2*l/(r-o),y=(t+e)/(t-e),S=(r+o)/(r-o);let A,C;if(p)A=l/(u-l),C=u*l/(u-l);else if(d===ji)A=-(u+l)/(u-l),C=-2*u*l/(u-l);else if(d===ec)A=-u/(u-l),C=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=x,m[4]=0,m[8]=y,m[12]=0,m[1]=0,m[5]=v,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=A,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,r,o,l,u,d=ji,p=!1){const m=this.elements,x=2/(t-e),v=2/(r-o),y=-(t+e)/(t-e),S=-(r+o)/(r-o);let A,C;if(p)A=1/(u-l),C=u/(u-l);else if(d===ji)A=-2/(u-l),C=-(u+l)/(u-l);else if(d===ec)A=-1/(u-l),C=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=x,m[4]=0,m[8]=0,m[12]=y,m[1]=0,m[5]=v,m[9]=0,m[13]=S,m[2]=0,m[6]=0,m[10]=A,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const ta=new Z,Ei=new Jt,v_=new Z(0,0,0),__=new Z(1,1,1),jr=new Z,Cl=new Z,ri=new Z,Dm=new Jt,Lm=new ws;class Xi{constructor(e=0,t=0,r=0,o=Xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],p=o[1],m=o[5],x=o[9],v=o[2],y=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(bt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-bt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(bt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-x,S),this._y=0);break;default:vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Dm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lm.setFromEuler(this),this.setFromQuaternion(Lm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xi.DEFAULT_ORDER="XYZ";class Lf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let y_=0;const Im=new Z,na=new ws,or=new Jt,Rl=new Z,io=new Z,S_=new Z,M_=new ws,Um=new Z(1,0,0),Om=new Z(0,1,0),Fm=new Z(0,0,1),km={type:"added"},E_={type:"removed"},ia={type:"childadded",child:null},Ju={type:"childremoved",child:null};class Mn extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:y_++}),this.uuid=vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const e=new Z,t=new Xi,r=new ws,o=new Z(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Jt},normalMatrix:{value:new yt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return na.setFromAxisAngle(e,t),this.quaternion.multiply(na),this}rotateOnWorldAxis(e,t){return na.setFromAxisAngle(e,t),this.quaternion.premultiply(na),this}rotateX(e){return this.rotateOnAxis(Um,e)}rotateY(e){return this.rotateOnAxis(Om,e)}rotateZ(e){return this.rotateOnAxis(Fm,e)}translateOnAxis(e,t){return Im.copy(e).applyQuaternion(this.quaternion),this.position.add(Im.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Um,e)}translateY(e){return this.translateOnAxis(Om,e)}translateZ(e){return this.translateOnAxis(Fm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(or.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Rl.copy(e):Rl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?or.lookAt(io,Rl,this.up):or.lookAt(Rl,io,this.up),this.quaternion.setFromRotationMatrix(or),o&&(or.extractRotation(o.matrixWorld),na.setFromRotationMatrix(or),this.quaternion.premultiply(na.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(It("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(km),ia.child=e,this.dispatchEvent(ia),ia.child=null):It("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(E_),Ju.child=e,this.dispatchEvent(Ju),Ju.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),or.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),or.multiply(e.parent.matrixWorld)),e.applyMatrix4(or),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(km),ia.child=e,this.dispatchEvent(ia),ia.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,e,S_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,M_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,x=p.length;m<x;m++){const v=p[m];l(e.shapes,v)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(l(e.materials,this.material[p]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(l(e.animations,p))}}if(t){const d=u(e.geometries),p=u(e.materials),m=u(e.textures),x=u(e.images),v=u(e.shapes),y=u(e.skeletons),S=u(e.animations),A=u(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),x.length>0&&(r.images=x),v.length>0&&(r.shapes=v),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),A.length>0&&(r.nodes=A)}return r.object=o,r;function u(d){const p=[];for(const m in d){const x=d[m];delete x.metadata,p.push(x)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Mn.DEFAULT_UP=new Z(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new Z,lr=new Z,ed=new Z,cr=new Z,ra=new Z,sa=new Z,Bm=new Z,td=new Z,nd=new Z,id=new Z,rd=new tn,sd=new tn,ad=new tn;class bi{constructor(e=new Z,t=new Z,r=new Z){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),wi.subVectors(e,t),o.cross(wi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){wi.subVectors(o,t),lr.subVectors(r,t),ed.subVectors(e,t);const u=wi.dot(wi),d=wi.dot(lr),p=wi.dot(ed),m=lr.dot(lr),x=lr.dot(ed),v=u*m-d*d;if(v===0)return l.set(0,0,0),null;const y=1/v,S=(m*p-d*x)*y,A=(u*x-d*p)*y;return l.set(1-S-A,A,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,cr)===null?!1:cr.x>=0&&cr.y>=0&&cr.x+cr.y<=1}static getInterpolation(e,t,r,o,l,u,d,p){return this.getBarycoord(e,t,r,o,cr)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,cr.x),p.addScaledVector(u,cr.y),p.addScaledVector(d,cr.z),p)}static getInterpolatedAttribute(e,t,r,o,l,u){return rd.setScalar(0),sd.setScalar(0),ad.setScalar(0),rd.fromBufferAttribute(e,t),sd.fromBufferAttribute(e,r),ad.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(rd,l.x),u.addScaledVector(sd,l.y),u.addScaledVector(ad,l.z),u}static isFrontFacing(e,t,r,o){return wi.subVectors(r,t),lr.subVectors(e,t),wi.cross(lr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),lr.subVectors(this.a,this.b),wi.cross(lr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return bi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,d;ra.subVectors(o,r),sa.subVectors(l,r),td.subVectors(e,r);const p=ra.dot(td),m=sa.dot(td);if(p<=0&&m<=0)return t.copy(r);nd.subVectors(e,o);const x=ra.dot(nd),v=sa.dot(nd);if(x>=0&&v<=x)return t.copy(o);const y=p*v-x*m;if(y<=0&&p>=0&&x<=0)return u=p/(p-x),t.copy(r).addScaledVector(ra,u);id.subVectors(e,l);const S=ra.dot(id),A=sa.dot(id);if(A>=0&&S<=A)return t.copy(l);const C=S*m-p*A;if(C<=0&&m>=0&&A<=0)return d=m/(m-A),t.copy(r).addScaledVector(sa,d);const M=x*A-S*v;if(M<=0&&v-x>=0&&S-A>=0)return Bm.subVectors(l,o),d=(v-x)/(v-x+(S-A)),t.copy(o).addScaledVector(Bm,d);const _=1/(M+C+y);return u=C*_,d=y*_,t.copy(r).addScaledVector(ra,u).addScaledVector(sa,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vr={h:0,s:0,l:0},Nl={h:0,s:0,l:0};function od(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Et{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Ut.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ut.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Ut.workingColorSpace){if(e=c_(e,1),t=bt(t,0,1),r=bt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=od(u,l,e+1/3),this.g=od(u,l,e),this.b=od(u,l,e-1/3)}return Ut.colorSpaceToWorking(this,o),this}setStyle(e,t=Zn){function r(l){l!==void 0&&parseFloat(l)<1&&vt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:vt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);vt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zn){const r=$0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):vt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}copyLinearToSRGB(e){return this.r=pa(e.r),this.g=pa(e.g),this.b=pa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return Ut.workingToColorSpace(Ln.copy(this),e),Math.round(bt(Ln.r*255,0,255))*65536+Math.round(bt(Ln.g*255,0,255))*256+Math.round(bt(Ln.b*255,0,255))}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ut.workingColorSpace){Ut.workingToColorSpace(Ln.copy(this),t);const r=Ln.r,o=Ln.g,l=Ln.b,u=Math.max(r,o,l),d=Math.min(r,o,l);let p,m;const x=(d+u)/2;if(d===u)p=0,m=0;else{const v=u-d;switch(m=x<=.5?v/(u+d):v/(2-u-d),u){case r:p=(o-l)/v+(o<l?6:0);break;case o:p=(l-r)/v+2;break;case l:p=(r-o)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=x,e}getRGB(e,t=Ut.workingColorSpace){return Ut.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=Zn){Ut.workingToColorSpace(Ln.copy(this),e);const t=Ln.r,r=Ln.g,o=Ln.b;return e!==Zn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Vr),this.setHSL(Vr.h+e,Vr.s+t,Vr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Vr),e.getHSL(Nl);const r=Hu(Vr.h,Nl.h,t),o=Hu(Vr.s,Nl.s,t),l=Hu(Vr.l,Nl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Et;Et.NAMES=$0;let w_=0;class yo extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=vo(),this.name="",this.type="Material",this.blending=ha,this.side=Yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wd,this.blendDst=bd,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=ma,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ks,this.stencilZFail=Ks,this.stencilZPass=Ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){vt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){vt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ha&&(r.blending=this.blending),this.side!==Yr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==wd&&(r.blendSrc=this.blendSrc),this.blendDst!==bd&&(r.blendDst=this.blendDst),this.blendEquation!==vs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ma&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ks&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ks&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ks&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const d in l){const p=l[d];delete p.metadata,u.push(p)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _s extends yo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=P0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const an=new Z,Pl=new gt;let b_=0;class Gi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:b_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=bm,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Pl.fromBufferAttribute(this,t),Pl.applyMatrix3(e),this.setXY(t,Pl.x,Pl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=eo(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Yn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=eo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=eo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=eo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=eo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),r=Yn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),r=Yn(r,this.array),o=Yn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),r=Yn(r,this.array),o=Yn(o,this.array),l=Yn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bm&&(e.usage=this.usage),e}}class K0 extends Gi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Z0 extends Gi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class En extends Gi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let T_=0;const pi=new Jt,ld=new Mn,aa=new Z,si=new _o,ro=new _o,yn=new Z;class mi extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:T_++}),this.uuid=vo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(q0(e)?Z0:K0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new yt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,r){return pi.makeTranslation(e,t,r),this.applyMatrix4(pi),this}scale(e,t,r){return pi.makeScale(e,t,r),this.applyMatrix4(pi),this}lookAt(e){return ld.lookAt(e),ld.updateMatrix(),this.applyMatrix4(ld.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(aa).negate(),this.translate(aa.x,aa.y,aa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new En(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _o);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){It("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];si.setFromBufferAttribute(l),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&It('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){It("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const r=this.boundingSphere.center;if(si.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];ro.setFromBufferAttribute(d),this.morphTargetsRelative?(yn.addVectors(si.min,ro.min),si.expandByPoint(yn),yn.addVectors(si.max,ro.max),si.expandByPoint(yn)):(si.expandByPoint(ro.min),si.expandByPoint(ro.max))}si.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)yn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(yn));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],p=this.morphTargetsRelative;for(let m=0,x=d.count;m<x;m++)yn.fromBufferAttribute(d,m),p&&(aa.fromBufferAttribute(e,m),yn.add(aa)),o=Math.max(o,r.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&It('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){It("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],p=[];for(let H=0;H<r.count;H++)d[H]=new Z,p[H]=new Z;const m=new Z,x=new Z,v=new Z,y=new gt,S=new gt,A=new gt,C=new Z,M=new Z;function _(H,b,P){m.fromBufferAttribute(r,H),x.fromBufferAttribute(r,b),v.fromBufferAttribute(r,P),y.fromBufferAttribute(l,H),S.fromBufferAttribute(l,b),A.fromBufferAttribute(l,P),x.sub(m),v.sub(m),S.sub(y),A.sub(y);const B=1/(S.x*A.y-A.x*S.y);isFinite(B)&&(C.copy(x).multiplyScalar(A.y).addScaledVector(v,-S.y).multiplyScalar(B),M.copy(v).multiplyScalar(S.x).addScaledVector(x,-A.x).multiplyScalar(B),d[H].add(C),d[b].add(C),d[P].add(C),p[H].add(M),p[b].add(M),p[P].add(M))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let H=0,b=T.length;H<b;++H){const P=T[H],B=P.start,$=P.count;for(let K=B,ue=B+$;K<ue;K+=3)_(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const D=new Z,R=new Z,U=new Z,L=new Z;function O(H){U.fromBufferAttribute(o,H),L.copy(U);const b=d[H];D.copy(b),D.sub(U.multiplyScalar(U.dot(b))).normalize(),R.crossVectors(L,b);const B=R.dot(p[H])<0?-1:1;u.setXYZW(H,D.x,D.y,D.z,B)}for(let H=0,b=T.length;H<b;++H){const P=T[H],B=P.start,$=P.count;for(let K=B,ue=B+$;K<ue;K+=3)O(e.getX(K+0)),O(e.getX(K+1)),O(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Gi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const o=new Z,l=new Z,u=new Z,d=new Z,p=new Z,m=new Z,x=new Z,v=new Z;if(e)for(let y=0,S=e.count;y<S;y+=3){const A=e.getX(y+0),C=e.getX(y+1),M=e.getX(y+2);o.fromBufferAttribute(t,A),l.fromBufferAttribute(t,C),u.fromBufferAttribute(t,M),x.subVectors(u,l),v.subVectors(o,l),x.cross(v),d.fromBufferAttribute(r,A),p.fromBufferAttribute(r,C),m.fromBufferAttribute(r,M),d.add(x),p.add(x),m.add(x),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(M,m.x,m.y,m.z)}else for(let y=0,S=t.count;y<S;y+=3)o.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),u.fromBufferAttribute(t,y+2),x.subVectors(u,l),v.subVectors(o,l),x.cross(v),r.setXYZ(y+0,x.x,x.y,x.z),r.setXYZ(y+1,x.x,x.y,x.z),r.setXYZ(y+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(d,p){const m=d.array,x=d.itemSize,v=d.normalized,y=new m.constructor(p.length*x);let S=0,A=0;for(let C=0,M=p.length;C<M;C++){d.isInterleavedBufferAttribute?S=p[C]*d.data.stride+d.offset:S=p[C]*x;for(let _=0;_<x;_++)y[A++]=m[S++]}return new Gi(y,x,v)}if(this.index===null)return vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mi,r=this.index.array,o=this.attributes;for(const d in o){const p=o[d],m=e(p,r);t.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const p=[],m=l[d];for(let x=0,v=m.length;x<v;x++){const y=m[x],S=e(y,r);p.push(S)}t.morphAttributes[d]=p}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,p=u.length;d<p;d++){const m=u[d];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],x=[];for(let v=0,y=m.length;v<y;v++){const S=m[v];x.push(S.toJSON(e.data))}x.length>0&&(o[p]=x,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const x=o[m];this.setAttribute(m,x.clone(t))}const l=e.morphAttributes;for(const m in l){const x=[],v=l[m];for(let y=0,S=v.length;y<S;y++)x.push(v[y].clone(t));this.morphAttributes[m]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,x=u.length;m<x;m++){const v=u[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zm=new Jt,hs=new Df,Dl=new Pf,jm=new Z,Ll=new Z,Il=new Z,Ul=new Z,cd=new Z,Ol=new Z,Vm=new Z,Fl=new Z;class Mt extends Mn{constructor(e=new mi,t=new _s){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){Ol.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const x=d[p],v=l[p];x!==0&&(cd.fromBufferAttribute(v,e),u?Ol.addScaledVector(cd,x):Ol.addScaledVector(cd.sub(t),x))}t.add(Ol)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Dl.copy(r.boundingSphere),Dl.applyMatrix4(l),hs.copy(e.ray).recast(e.near),!(Dl.containsPoint(hs.origin)===!1&&(hs.intersectSphere(Dl,jm)===null||hs.origin.distanceToSquared(jm)>(e.far-e.near)**2))&&(zm.copy(l).invert(),hs.copy(e.ray).applyMatrix4(zm),!(r.boundingBox!==null&&hs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,hs)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,d=l.index,p=l.attributes.position,m=l.attributes.uv,x=l.attributes.uv1,v=l.attributes.normal,y=l.groups,S=l.drawRange;if(d!==null)if(Array.isArray(u))for(let A=0,C=y.length;A<C;A++){const M=y[A],_=u[M.materialIndex],T=Math.max(M.start,S.start),D=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let R=T,U=D;R<U;R+=3){const L=d.getX(R),O=d.getX(R+1),H=d.getX(R+2);o=kl(this,_,e,r,m,x,v,L,O,H),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=M.materialIndex,t.push(o))}}else{const A=Math.max(0,S.start),C=Math.min(d.count,S.start+S.count);for(let M=A,_=C;M<_;M+=3){const T=d.getX(M),D=d.getX(M+1),R=d.getX(M+2);o=kl(this,u,e,r,m,x,v,T,D,R),o&&(o.faceIndex=Math.floor(M/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let A=0,C=y.length;A<C;A++){const M=y[A],_=u[M.materialIndex],T=Math.max(M.start,S.start),D=Math.min(p.count,Math.min(M.start+M.count,S.start+S.count));for(let R=T,U=D;R<U;R+=3){const L=R,O=R+1,H=R+2;o=kl(this,_,e,r,m,x,v,L,O,H),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=M.materialIndex,t.push(o))}}else{const A=Math.max(0,S.start),C=Math.min(p.count,S.start+S.count);for(let M=A,_=C;M<_;M+=3){const T=M,D=M+1,R=M+2;o=kl(this,u,e,r,m,x,v,T,D,R),o&&(o.faceIndex=Math.floor(M/3),t.push(o))}}}}function A_(s,e,t,r,o,l,u,d){let p;if(e.side===Jn?p=r.intersectTriangle(u,l,o,!0,d):p=r.intersectTriangle(o,l,u,e.side===Yr,d),p===null)return null;Fl.copy(d),Fl.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(Fl);return m<t.near||m>t.far?null:{distance:m,point:Fl.clone(),object:s}}function kl(s,e,t,r,o,l,u,d,p,m){s.getVertexPosition(d,Ll),s.getVertexPosition(p,Il),s.getVertexPosition(m,Ul);const x=A_(s,e,t,r,Ll,Il,Ul,Vm);if(x){const v=new Z;bi.getBarycoord(Vm,Ll,Il,Ul,v),o&&(x.uv=bi.getInterpolatedAttribute(o,d,p,m,v,new gt)),l&&(x.uv1=bi.getInterpolatedAttribute(l,d,p,m,v,new gt)),u&&(x.normal=bi.getInterpolatedAttribute(u,d,p,m,v,new Z),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const y={a:d,b:p,c:m,normal:new Z,materialIndex:0};bi.getNormal(Ll,Il,Ul,y.normal),x.face=y,x.barycoord=v}return x}class un extends mi{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const p=[],m=[],x=[],v=[];let y=0,S=0;A("z","y","x",-1,-1,r,t,e,u,l,0),A("z","y","x",1,-1,r,t,-e,u,l,1),A("x","z","y",1,1,e,r,t,o,u,2),A("x","z","y",1,-1,e,r,-t,o,u,3),A("x","y","z",1,-1,e,t,r,o,l,4),A("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(p),this.setAttribute("position",new En(m,3)),this.setAttribute("normal",new En(x,3)),this.setAttribute("uv",new En(v,2));function A(C,M,_,T,D,R,U,L,O,H,b){const P=R/O,B=U/H,$=R/2,K=U/2,ue=L/2,de=O+1,re=H+1;let Q=0,q=0;const me=new Z;for(let le=0;le<re;le++){const k=le*B-K;for(let se=0;se<de;se++){const Re=se*P-$;me[C]=Re*T,me[M]=k*D,me[_]=ue,m.push(me.x,me.y,me.z),me[C]=0,me[M]=0,me[_]=L>0?1:-1,x.push(me.x,me.y,me.z),v.push(se/O),v.push(1-le/H),Q+=1}}for(let le=0;le<H;le++)for(let k=0;k<O;k++){const se=y+k+de*le,Re=y+k+de*(le+1),We=y+(k+1)+de*(le+1),Je=y+(k+1)+de*le;p.push(se,Re,Je),p.push(Re,We,Je),q+=6}d.addGroup(S,q,b),S+=q,y+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new un(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _a(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function jn(s){const e={};for(let t=0;t<s.length;t++){const r=_a(s[t]);for(const o in r)e[o]=r[o]}return e}function C_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Q0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ut.workingColorSpace}const R_={clone:_a,merge:jn};var N_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,P_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends yo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=N_,this.fragmentShader=P_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_a(e.uniforms),this.uniformsGroups=C_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class J0 extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hr=new Z,Hm=new gt,Gm=new gt;class Qn extends J0{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=tc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($l*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tc*2*Math.atan(Math.tan($l*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z),Hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z)}getViewSize(e,t){return this.getViewBounds(e,Hm,Gm),t.subVectors(Gm,Hm)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($l*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;l+=u.offsetX*o/p,t-=u.offsetY*r/m,o*=u.width/p,r*=u.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const oa=-90,la=1;class D_ extends Mn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Qn(oa,la,e,t);o.layers=this.layers,this.add(o);const l=new Qn(oa,la,e,t);l.layers=this.layers,this.add(l);const u=new Qn(oa,la,e,t);u.layers=this.layers,this.add(u);const d=new Qn(oa,la,e,t);d.layers=this.layers,this.add(d);const p=new Qn(oa,la,e,t);p.layers=this.layers,this.add(p);const m=new Qn(oa,la,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,d,p]=t;for(const m of t)this.remove(m);if(e===ji)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===ec)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,p,m,x]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,d),e.setRenderTarget(r,3,o),e.render(t,p),e.setRenderTarget(r,4,o),e.render(t,m),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,o),e.render(t,x),e.setRenderTarget(v,y,S),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class eg extends An{constructor(e=[],t=Es,r,o,l,u,d,p,m,x){super(e,t,r,o,l,u,d,p,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tg extends Hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new eg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new un(5,5,5),l=new qi({name:"CubemapFromEquirect",uniforms:_a(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Jn,blending:hr});l.uniforms.tEquirect.value=t;const u=new Mt(o,l),d=t.minFilter;return t.minFilter===Ss&&(t.minFilter=In),new D_(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}class Kn extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const L_={type:"move"};class ud{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const C of e.hand.values()){const M=t.getJointPose(C,r),_=this._getHandJoint(m,C);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const x=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],y=x.position.distanceTo(v.position),S=.02,A=.005;m.inputState.pinching&&y>S+A?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=S-A&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(L_)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Kn;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class If{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Et(e),this.density=t}clone(){return new If(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class I_ extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class U_ extends An{constructor(e=null,t=1,r=1,o,l,u,d,p,m=Tn,x=Tn,v,y){super(null,u,d,p,m,x,o,l,v,y),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const dd=new Z,O_=new Z,F_=new yt;class Gr{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=dd.subVectors(r,t).cross(O_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(dd),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||F_.getNormalMatrix(e),o=this.coplanarPoint(dd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new Pf,k_=new gt(.5,.5),Bl=new Z;class Uf{constructor(e=new Gr,t=new Gr,r=new Gr,o=new Gr,l=new Gr,u=new Gr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=ji,r=!1){const o=this.planes,l=e.elements,u=l[0],d=l[1],p=l[2],m=l[3],x=l[4],v=l[5],y=l[6],S=l[7],A=l[8],C=l[9],M=l[10],_=l[11],T=l[12],D=l[13],R=l[14],U=l[15];if(o[0].setComponents(m-u,S-x,_-A,U-T).normalize(),o[1].setComponents(m+u,S+x,_+A,U+T).normalize(),o[2].setComponents(m+d,S+v,_+C,U+D).normalize(),o[3].setComponents(m-d,S-v,_-C,U-D).normalize(),r)o[4].setComponents(p,y,M,R).normalize(),o[5].setComponents(m-p,S-y,_-M,U-R).normalize();else if(o[4].setComponents(m-p,S-y,_-M,U-R).normalize(),t===ji)o[5].setComponents(m+p,S+y,_+M,U+R).normalize();else if(t===ec)o[5].setComponents(p,y,M,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){ps.center.set(0,0,0);const t=k_.distanceTo(e.center);return ps.radius=.7071067811865476+t,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Bl.x=o.normal.x>0?e.max.x:e.min.x,Bl.y=o.normal.y>0?e.max.y:e.min.y,Bl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Bl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class B_ extends An{constructor(e,t,r,o,l,u,d,p,m){super(e,t,r,o,l,u,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xo extends An{constructor(e,t,r=Wi,o,l,u,d=Tn,p=Tn,m,x=gr,v=1){if(x!==gr&&x!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:t,depth:v};super(y,o,l,u,d,p,x,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Nf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class z_ extends xo{constructor(e,t=Wi,r=Es,o,l,u=Tn,d=Tn,p,m=gr){const x={width:e,height:e,depth:1},v=[x,x,x,x,x,x];super(e,e,t,r,o,l,u,d,p,m),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ng extends An{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ki extends mi{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:d,thetaLength:p};const m=this;o=Math.floor(o),l=Math.floor(l);const x=[],v=[],y=[],S=[];let A=0;const C=[],M=r/2;let _=0;T(),u===!1&&(e>0&&D(!0),t>0&&D(!1)),this.setIndex(x),this.setAttribute("position",new En(v,3)),this.setAttribute("normal",new En(y,3)),this.setAttribute("uv",new En(S,2));function T(){const R=new Z,U=new Z;let L=0;const O=(t-e)/r;for(let H=0;H<=l;H++){const b=[],P=H/l,B=P*(t-e)+e;for(let $=0;$<=o;$++){const K=$/o,ue=K*p+d,de=Math.sin(ue),re=Math.cos(ue);U.x=B*de,U.y=-P*r+M,U.z=B*re,v.push(U.x,U.y,U.z),R.set(de,O,re).normalize(),y.push(R.x,R.y,R.z),S.push(K,1-P),b.push(A++)}C.push(b)}for(let H=0;H<o;H++)for(let b=0;b<l;b++){const P=C[b][H],B=C[b+1][H],$=C[b+1][H+1],K=C[b][H+1];(e>0||b!==0)&&(x.push(P,B,K),L+=3),(t>0||b!==l-1)&&(x.push(B,$,K),L+=3)}m.addGroup(_,L,0),_+=L}function D(R){const U=A,L=new gt,O=new Z;let H=0;const b=R===!0?e:t,P=R===!0?1:-1;for(let $=1;$<=o;$++)v.push(0,M*P,0),y.push(0,P,0),S.push(.5,.5),A++;const B=A;for(let $=0;$<=o;$++){const ue=$/o*p+d,de=Math.cos(ue),re=Math.sin(ue);O.x=b*re,O.y=M*P,O.z=b*de,v.push(O.x,O.y,O.z),y.push(0,P,0),L.x=de*.5+.5,L.y=re*.5*P+.5,S.push(L.x,L.y),A++}for(let $=0;$<o;$++){const K=U+$,ue=B+$;R===!0?x.push(ue,ue+1,K):x.push(ue+1,ue,K),H+=3}m.addGroup(_,H,R===!0?1:2),_+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ki(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Of extends ki{constructor(e=1,t=1,r=32,o=1,l=!1,u=0,d=Math.PI*2){super(0,e,t,r,o,l,u,d),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:d}}static fromJSON(e){return new Of(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ff extends mi{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const l=[],u=[];d(o),m(r),x(),this.setAttribute("position",new En(l,3)),this.setAttribute("normal",new En(l.slice(),3)),this.setAttribute("uv",new En(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function d(T){const D=new Z,R=new Z,U=new Z;for(let L=0;L<t.length;L+=3)S(t[L+0],D),S(t[L+1],R),S(t[L+2],U),p(D,R,U,T)}function p(T,D,R,U){const L=U+1,O=[];for(let H=0;H<=L;H++){O[H]=[];const b=T.clone().lerp(R,H/L),P=D.clone().lerp(R,H/L),B=L-H;for(let $=0;$<=B;$++)$===0&&H===L?O[H][$]=b:O[H][$]=b.clone().lerp(P,$/B)}for(let H=0;H<L;H++)for(let b=0;b<2*(L-H)-1;b++){const P=Math.floor(b/2);b%2===0?(y(O[H][P+1]),y(O[H+1][P]),y(O[H][P])):(y(O[H][P+1]),y(O[H+1][P+1]),y(O[H+1][P]))}}function m(T){const D=new Z;for(let R=0;R<l.length;R+=3)D.x=l[R+0],D.y=l[R+1],D.z=l[R+2],D.normalize().multiplyScalar(T),l[R+0]=D.x,l[R+1]=D.y,l[R+2]=D.z}function x(){const T=new Z;for(let D=0;D<l.length;D+=3){T.x=l[D+0],T.y=l[D+1],T.z=l[D+2];const R=M(T)/2/Math.PI+.5,U=_(T)/Math.PI+.5;u.push(R,1-U)}A(),v()}function v(){for(let T=0;T<u.length;T+=6){const D=u[T+0],R=u[T+2],U=u[T+4],L=Math.max(D,R,U),O=Math.min(D,R,U);L>.9&&O<.1&&(D<.2&&(u[T+0]+=1),R<.2&&(u[T+2]+=1),U<.2&&(u[T+4]+=1))}}function y(T){l.push(T.x,T.y,T.z)}function S(T,D){const R=T*3;D.x=e[R+0],D.y=e[R+1],D.z=e[R+2]}function A(){const T=new Z,D=new Z,R=new Z,U=new Z,L=new gt,O=new gt,H=new gt;for(let b=0,P=0;b<l.length;b+=9,P+=6){T.set(l[b+0],l[b+1],l[b+2]),D.set(l[b+3],l[b+4],l[b+5]),R.set(l[b+6],l[b+7],l[b+8]),L.set(u[P+0],u[P+1]),O.set(u[P+2],u[P+3]),H.set(u[P+4],u[P+5]),U.copy(T).add(D).add(R).divideScalar(3);const B=M(U);C(L,P+0,T,B),C(O,P+2,D,B),C(H,P+4,R,B)}}function C(T,D,R,U){U<0&&T.x===1&&(u[D]=T.x-1),R.x===0&&R.z===0&&(u[D]=U/2/Math.PI+.5)}function M(T){return Math.atan2(T.z,-T.x)}function _(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ff(e.vertices,e.indices,e.radius,e.detail)}}class kf extends Ff{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=1/r,l=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-o,-r,0,-o,r,0,o,-r,0,o,r,-o,-r,0,-o,r,0,o,-r,0,o,r,0,-r,0,-o,r,0,-o,-r,0,o,r,0,o],u=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(l,u,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new kf(e.radius,e.detail)}}class Xr extends mi{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,d=Math.floor(r),p=Math.floor(o),m=d+1,x=p+1,v=e/d,y=t/p,S=[],A=[],C=[],M=[];for(let _=0;_<x;_++){const T=_*y-u;for(let D=0;D<m;D++){const R=D*v-l;A.push(R,-T,0),C.push(0,0,1),M.push(D/d),M.push(1-_/p)}}for(let _=0;_<p;_++)for(let T=0;T<d;T++){const D=T+m*_,R=T+m*(_+1),U=T+1+m*(_+1),L=T+1+m*_;S.push(D,R,L),S.push(R,U,L)}this.setIndex(S),this.setAttribute("position",new En(A,3)),this.setAttribute("normal",new En(C,3)),this.setAttribute("uv",new En(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.width,e.height,e.widthSegments,e.heightSegments)}}class fo extends mi{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const p=Math.min(u+d,Math.PI);let m=0;const x=[],v=new Z,y=new Z,S=[],A=[],C=[],M=[];for(let _=0;_<=r;_++){const T=[],D=_/r;let R=0;_===0&&u===0?R=.5/t:_===r&&p===Math.PI&&(R=-.5/t);for(let U=0;U<=t;U++){const L=U/t;v.x=-e*Math.cos(o+L*l)*Math.sin(u+D*d),v.y=e*Math.cos(u+D*d),v.z=e*Math.sin(o+L*l)*Math.sin(u+D*d),A.push(v.x,v.y,v.z),y.copy(v).normalize(),C.push(y.x,y.y,y.z),M.push(L+R,1-D),T.push(m++)}x.push(T)}for(let _=0;_<r;_++)for(let T=0;T<t;T++){const D=x[_][T+1],R=x[_][T],U=x[_+1][T],L=x[_+1][T+1];(_!==0||u>0)&&S.push(D,R,L),(_!==r-1||p<Math.PI)&&S.push(R,U,L)}this.setIndex(S),this.setAttribute("position",new En(A,3)),this.setAttribute("normal",new En(C,3)),this.setAttribute("uv",new En(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class j_ extends qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Sn extends yo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=X0,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class V_ extends yo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class H_ extends yo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fd={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class G_{constructor(e,t,r){const o=this;let l=!1,u=0,d=0,p;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this._abortController=null,this.itemStart=function(x){d++,l===!1&&o.onStart!==void 0&&o.onStart(x,u,d),l=!0},this.itemEnd=function(x){u++,o.onProgress!==void 0&&o.onProgress(x,u,d),u===d&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(x){o.onError!==void 0&&o.onError(x)},this.resolveURL=function(x){return p?p(x):x},this.setURLModifier=function(x){return p=x,this},this.addHandler=function(x,v){return m.push(x,v),this},this.removeHandler=function(x){const v=m.indexOf(x);return v!==-1&&m.splice(v,2),this},this.getHandler=function(x){for(let v=0,y=m.length;v<y;v+=2){const S=m[v],A=m[v+1];if(S.global&&(S.lastIndex=0),S.test(x))return A}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const W_=new G_;class Bf{constructor(e){this.manager=e!==void 0?e:W_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(o,l){r.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Bf.DEFAULT_MATERIAL_NAME="__DEFAULT";const ca=new WeakMap;class X_ extends Bf{constructor(e){super(e)}load(e,t,r,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=fd.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(u),l.manager.itemEnd(e)},0);else{let v=ca.get(u);v===void 0&&(v=[],ca.set(u,v)),v.push({onLoad:t,onError:o})}return u}const d=mo("img");function p(){x(),t&&t(this);const v=ca.get(this)||[];for(let y=0;y<v.length;y++){const S=v[y];S.onLoad&&S.onLoad(this)}ca.delete(this),l.manager.itemEnd(e)}function m(v){x(),o&&o(v),fd.remove(`image:${e}`);const y=ca.get(this)||[];for(let S=0;S<y.length;S++){const A=y[S];A.onError&&A.onError(v)}ca.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function x(){d.removeEventListener("load",p,!1),d.removeEventListener("error",m,!1)}return d.addEventListener("load",p,!1),d.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),fd.add(`image:${e}`,d),l.manager.itemStart(e),d.src=e,d}}class q_ extends Bf{constructor(e){super(e)}load(e,t,r,o){const l=new An,u=new X_(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(d){l.image=d,l.needsUpdate=!0,t!==void 0&&t(l)},r,o),l}}class sc extends Mn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const hd=new Jt,Wm=new Z,Xm=new Z;class zf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uf,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Wm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wm),Xm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xm),t.updateMatrixWorld(),hd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hd,t.coordinateSystem,t.reversedDepth),t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(hd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Y_ extends zf{constructor(){super(new Qn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,r=tc*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height*this.aspect,l=e.distance||t.far;(r!==t.fov||o!==t.aspect||l!==t.far)&&(t.fov=r,t.aspect=o,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class $_ extends sc{constructor(e,t,r=0,o=Math.PI/3,l=0,u=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.distance=r,this.angle=o,this.penumbra=l,this.decay=u,this.map=null,this.shadow=new Y_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class K_ extends zf{constructor(){super(new Qn(90,1,.5,500)),this.isPointLightShadow=!0}}class qm extends sc{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new K_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class jf extends J0{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,d-=x*this.view.offsetY,p=d-x*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Z_ extends zf{constructor(){super(new jf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Q_ extends sc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new Z_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class J_ extends sc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class e1 extends Qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class t1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Ym=new Jt;class n1{constructor(e,t,r=0,o=1/0){this.ray=new Df(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new Lf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):It("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ym.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ym),this}intersectObject(e,t=!0,r=[]){return gf(e,this,r,t),r.sort($m),r}intersectObjects(e,t=!0,r=[]){for(let o=0,l=e.length;o<l;o++)gf(e[o],this,r,t);return r.sort($m),r}}function $m(s,e){return s.distance-e.distance}function gf(s,e,t,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const l=s.children;for(let u=0,d=l.length;u<d;u++)gf(l[u],e,t,!0)}}class Km{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=bt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class i1 extends bs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){vt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Zm(s,e,t,r){const o=r1(r);switch(t){case H0:return s*e;case W0:return s*e/o.components*o.byteLength;case bf:return s*e/o.components*o.byteLength;case xa:return s*e*2/o.components*o.byteLength;case Tf:return s*e*2/o.components*o.byteLength;case G0:return s*e*3/o.components*o.byteLength;case Ti:return s*e*4/o.components*o.byteLength;case Af:return s*e*4/o.components*o.byteLength;case Wl:case Xl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ql:case Yl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case kd:case zd:return Math.max(s,16)*Math.max(e,8)/4;case Fd:case Bd:return Math.max(s,8)*Math.max(e,8)/2;case jd:case Vd:case Gd:case Wd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Hd:case Xd:case qd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Yd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $d:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Jd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ef:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case tf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case nf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case rf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case sf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case af:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case of:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case lf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case cf:case uf:case df:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ff:case hf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case pf:case mf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function r1(s){switch(s){case ai:case B0:return{byteLength:1,components:1};case ho:case z0:case mr:return{byteLength:2,components:1};case Ef:case wf:return{byteLength:2,components:4};case Wi:case Mf:case zi:return{byteLength:4,components:1};case j0:case V0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yf}}));typeof window<"u"&&(window.__THREE__?vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ig(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function s1(s){const e=new WeakMap;function t(d,p){const m=d.array,x=d.usage,v=m.byteLength,y=s.createBuffer();s.bindBuffer(p,y),s.bufferData(p,m,x),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)S=s.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,p,m){const x=p.array,v=p.updateRanges;if(s.bindBuffer(m,d),v.length===0)s.bufferSubData(m,0,x);else{v.sort((S,A)=>S.start-A.start);let y=0;for(let S=1;S<v.length;S++){const A=v[y],C=v[S];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++y,v[y]=C)}v.length=y+1;for(let S=0,A=v.length;S<A;S++){const C=v[S];s.bufferSubData(m,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function u(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,t(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:o,remove:l,update:u}}var a1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,o1=`#ifdef USE_ALPHAHASH
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
#endif`,l1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,c1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,d1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,f1=`#ifdef USE_AOMAP
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
#endif`,h1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,p1=`#ifdef USE_BATCHING
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
#endif`,m1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,g1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,x1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,v1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_1=`#ifdef USE_IRIDESCENCE
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
#endif`,y1=`#ifdef USE_BUMPMAP
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
#endif`,S1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,M1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,E1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,b1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,T1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,A1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,C1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,R1=`#define PI 3.141592653589793
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
} // validated`,N1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,P1=`vec3 transformedNormal = objectNormal;
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
#endif`,D1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,L1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,I1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,U1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,O1="gl_FragColor = linearToOutputTexel( gl_FragColor );",F1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,k1=`#ifdef USE_ENVMAP
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
#endif`,B1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,z1=`#ifdef USE_ENVMAP
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
#endif`,j1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,V1=`#ifdef USE_ENVMAP
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
#endif`,H1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,G1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,W1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,X1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,q1=`#ifdef USE_GRADIENTMAP
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
}`,Y1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,K1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Z1=`uniform bool receiveShadow;
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
#endif`,Q1=`#ifdef USE_ENVMAP
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
#endif`,J1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ey=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ty=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ny=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iy=`PhysicalMaterial material;
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
#endif`,ry=`uniform sampler2D dfgLUT;
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
}`,sy=`
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
#endif`,ay=`#if defined( RE_IndirectDiffuse )
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
#endif`,oy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ly=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,py=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,my=`#if defined( USE_POINTS_UV )
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
#endif`,gy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_y=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sy=`#ifdef USE_MORPHTARGETS
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
#endif`,My=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ey=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,by=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ty=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ay=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cy=`#ifdef USE_NORMALMAP
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
#endif`,Ry=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ny=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Py=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ly=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Iy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Uy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Oy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ky=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,By=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gy=`float getShadowMask() {
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
}`,Wy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xy=`#ifdef USE_SKINNING
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
#endif`,qy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yy=`#ifdef USE_SKINNING
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
#endif`,$y=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ky=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jy=`#ifdef USE_TRANSMISSION
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
#endif`,eS=`#ifdef USE_TRANSMISSION
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
#endif`,tS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aS=`uniform sampler2D t2D;
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
}`,oS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dS=`#include <common>
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
}`,fS=`#if DEPTH_PACKING == 3200
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
}`,hS=`#define DISTANCE
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
}`,pS=`#define DISTANCE
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
}`,mS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xS=`uniform float scale;
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
}`,vS=`uniform vec3 diffuse;
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
}`,_S=`#include <common>
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
}`,yS=`uniform vec3 diffuse;
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
}`,SS=`#define LAMBERT
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
}`,MS=`#define LAMBERT
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
}`,ES=`#define MATCAP
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
}`,wS=`#define MATCAP
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
}`,bS=`#define NORMAL
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
}`,TS=`#define NORMAL
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
}`,AS=`#define PHONG
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
}`,CS=`#define PHONG
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
}`,RS=`#define STANDARD
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
}`,NS=`#define STANDARD
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
}`,PS=`#define TOON
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
}`,DS=`#define TOON
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
}`,LS=`uniform float size;
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
}`,IS=`uniform vec3 diffuse;
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
}`,US=`#include <common>
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
}`,OS=`uniform vec3 color;
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
}`,FS=`uniform float rotation;
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
}`,kS=`uniform vec3 diffuse;
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
}`,St={alphahash_fragment:a1,alphahash_pars_fragment:o1,alphamap_fragment:l1,alphamap_pars_fragment:c1,alphatest_fragment:u1,alphatest_pars_fragment:d1,aomap_fragment:f1,aomap_pars_fragment:h1,batching_pars_vertex:p1,batching_vertex:m1,begin_vertex:g1,beginnormal_vertex:x1,bsdfs:v1,iridescence_fragment:_1,bumpmap_pars_fragment:y1,clipping_planes_fragment:S1,clipping_planes_pars_fragment:M1,clipping_planes_pars_vertex:E1,clipping_planes_vertex:w1,color_fragment:b1,color_pars_fragment:T1,color_pars_vertex:A1,color_vertex:C1,common:R1,cube_uv_reflection_fragment:N1,defaultnormal_vertex:P1,displacementmap_pars_vertex:D1,displacementmap_vertex:L1,emissivemap_fragment:I1,emissivemap_pars_fragment:U1,colorspace_fragment:O1,colorspace_pars_fragment:F1,envmap_fragment:k1,envmap_common_pars_fragment:B1,envmap_pars_fragment:z1,envmap_pars_vertex:j1,envmap_physical_pars_fragment:Q1,envmap_vertex:V1,fog_vertex:H1,fog_pars_vertex:G1,fog_fragment:W1,fog_pars_fragment:X1,gradientmap_pars_fragment:q1,lightmap_pars_fragment:Y1,lights_lambert_fragment:$1,lights_lambert_pars_fragment:K1,lights_pars_begin:Z1,lights_toon_fragment:J1,lights_toon_pars_fragment:ey,lights_phong_fragment:ty,lights_phong_pars_fragment:ny,lights_physical_fragment:iy,lights_physical_pars_fragment:ry,lights_fragment_begin:sy,lights_fragment_maps:ay,lights_fragment_end:oy,logdepthbuf_fragment:ly,logdepthbuf_pars_fragment:cy,logdepthbuf_pars_vertex:uy,logdepthbuf_vertex:dy,map_fragment:fy,map_pars_fragment:hy,map_particle_fragment:py,map_particle_pars_fragment:my,metalnessmap_fragment:gy,metalnessmap_pars_fragment:xy,morphinstance_vertex:vy,morphcolor_vertex:_y,morphnormal_vertex:yy,morphtarget_pars_vertex:Sy,morphtarget_vertex:My,normal_fragment_begin:Ey,normal_fragment_maps:wy,normal_pars_fragment:by,normal_pars_vertex:Ty,normal_vertex:Ay,normalmap_pars_fragment:Cy,clearcoat_normal_fragment_begin:Ry,clearcoat_normal_fragment_maps:Ny,clearcoat_pars_fragment:Py,iridescence_pars_fragment:Dy,opaque_fragment:Ly,packing:Iy,premultiplied_alpha_fragment:Uy,project_vertex:Oy,dithering_fragment:Fy,dithering_pars_fragment:ky,roughnessmap_fragment:By,roughnessmap_pars_fragment:zy,shadowmap_pars_fragment:jy,shadowmap_pars_vertex:Vy,shadowmap_vertex:Hy,shadowmask_pars_fragment:Gy,skinbase_vertex:Wy,skinning_pars_vertex:Xy,skinning_vertex:qy,skinnormal_vertex:Yy,specularmap_fragment:$y,specularmap_pars_fragment:Ky,tonemapping_fragment:Zy,tonemapping_pars_fragment:Qy,transmission_fragment:Jy,transmission_pars_fragment:eS,uv_pars_fragment:tS,uv_pars_vertex:nS,uv_vertex:iS,worldpos_vertex:rS,background_vert:sS,background_frag:aS,backgroundCube_vert:oS,backgroundCube_frag:lS,cube_vert:cS,cube_frag:uS,depth_vert:dS,depth_frag:fS,distance_vert:hS,distance_frag:pS,equirect_vert:mS,equirect_frag:gS,linedashed_vert:xS,linedashed_frag:vS,meshbasic_vert:_S,meshbasic_frag:yS,meshlambert_vert:SS,meshlambert_frag:MS,meshmatcap_vert:ES,meshmatcap_frag:wS,meshnormal_vert:bS,meshnormal_frag:TS,meshphong_vert:AS,meshphong_frag:CS,meshphysical_vert:RS,meshphysical_frag:NS,meshtoon_vert:PS,meshtoon_frag:DS,points_vert:LS,points_frag:IS,shadow_vert:US,shadow_frag:OS,sprite_vert:FS,sprite_frag:kS},Oe={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},envMapRotation:{value:new yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},Bi={basic:{uniforms:jn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:jn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Et(0)}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:jn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:jn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:jn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Et(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:jn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:jn([Oe.points,Oe.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:jn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:jn([Oe.common,Oe.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:jn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:jn([Oe.sprite,Oe.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new yt}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distance:{uniforms:jn([Oe.common,Oe.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distance_vert,fragmentShader:St.distance_frag},shadow:{uniforms:jn([Oe.lights,Oe.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};Bi.physical={uniforms:jn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const zl={r:0,b:0,g:0},ms=new Xi,BS=new Jt;function zS(s,e,t,r,o,l,u){const d=new Et(0);let p=l===!0?0:1,m,x,v=null,y=0,S=null;function A(D){let R=D.isScene===!0?D.background:null;return R&&R.isTexture&&(R=(D.backgroundBlurriness>0?t:e).get(R)),R}function C(D){let R=!1;const U=A(D);U===null?_(d,p):U&&U.isColor&&(_(U,1),R=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?r.buffers.color.setClear(0,0,0,1,u):L==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(D,R){const U=A(R);U&&(U.isCubeTexture||U.mapping===rc)?(x===void 0&&(x=new Mt(new un(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:_a(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(L,O,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(x)),ms.copy(R.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),x.material.uniforms.envMap.value=U,x.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(BS.makeRotationFromEuler(ms)),x.material.toneMapped=Ut.getTransfer(U.colorSpace)!==Ht,(v!==U||y!==U.version||S!==s.toneMapping)&&(x.material.needsUpdate=!0,v=U,y=U.version,S=s.toneMapping),x.layers.enableAll(),D.unshift(x,x.geometry,x.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new Mt(new Xr(2,2),new qi({name:"BackgroundMaterial",uniforms:_a(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:Yr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,m.material.toneMapped=Ut.getTransfer(U.colorSpace)!==Ht,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(v!==U||y!==U.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,v=U,y=U.version,S=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function _(D,R){D.getRGB(zl,Q0(s)),r.buffers.color.setClear(zl.r,zl.g,zl.b,R,u)}function T(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,R=1){d.set(D),p=R,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,_(d,p)},render:C,addToRenderList:M,dispose:T}}function jS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=y(null);let l=o,u=!1;function d(P,B,$,K,ue){let de=!1;const re=v(K,$,B);l!==re&&(l=re,m(l.object)),de=S(P,K,$,ue),de&&A(P,K,$,ue),ue!==null&&e.update(ue,s.ELEMENT_ARRAY_BUFFER),(de||u)&&(u=!1,R(P,B,$,K),ue!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function p(){return s.createVertexArray()}function m(P){return s.bindVertexArray(P)}function x(P){return s.deleteVertexArray(P)}function v(P,B,$){const K=$.wireframe===!0;let ue=r[P.id];ue===void 0&&(ue={},r[P.id]=ue);let de=ue[B.id];de===void 0&&(de={},ue[B.id]=de);let re=de[K];return re===void 0&&(re=y(p()),de[K]=re),re}function y(P){const B=[],$=[],K=[];for(let ue=0;ue<t;ue++)B[ue]=0,$[ue]=0,K[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:$,attributeDivisors:K,object:P,attributes:{},index:null}}function S(P,B,$,K){const ue=l.attributes,de=B.attributes;let re=0;const Q=$.getAttributes();for(const q in Q)if(Q[q].location>=0){const le=ue[q];let k=de[q];if(k===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(k=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(k=P.instanceColor)),le===void 0||le.attribute!==k||k&&le.data!==k.data)return!0;re++}return l.attributesNum!==re||l.index!==K}function A(P,B,$,K){const ue={},de=B.attributes;let re=0;const Q=$.getAttributes();for(const q in Q)if(Q[q].location>=0){let le=de[q];le===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(le=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(le=P.instanceColor));const k={};k.attribute=le,le&&le.data&&(k.data=le.data),ue[q]=k,re++}l.attributes=ue,l.attributesNum=re,l.index=K}function C(){const P=l.newAttributes;for(let B=0,$=P.length;B<$;B++)P[B]=0}function M(P){_(P,0)}function _(P,B){const $=l.newAttributes,K=l.enabledAttributes,ue=l.attributeDivisors;$[P]=1,K[P]===0&&(s.enableVertexAttribArray(P),K[P]=1),ue[P]!==B&&(s.vertexAttribDivisor(P,B),ue[P]=B)}function T(){const P=l.newAttributes,B=l.enabledAttributes;for(let $=0,K=B.length;$<K;$++)B[$]!==P[$]&&(s.disableVertexAttribArray($),B[$]=0)}function D(P,B,$,K,ue,de,re){re===!0?s.vertexAttribIPointer(P,B,$,ue,de):s.vertexAttribPointer(P,B,$,K,ue,de)}function R(P,B,$,K){C();const ue=K.attributes,de=$.getAttributes(),re=B.defaultAttributeValues;for(const Q in de){const q=de[Q];if(q.location>=0){let me=ue[Q];if(me===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(me=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(me=P.instanceColor)),me!==void 0){const le=me.normalized,k=me.itemSize,se=e.get(me);if(se===void 0)continue;const Re=se.buffer,We=se.type,Je=se.bytesPerElement,ie=We===s.INT||We===s.UNSIGNED_INT||me.gpuType===Mf;if(me.isInterleavedBufferAttribute){const fe=me.data,_e=fe.stride,Ce=me.offset;if(fe.isInstancedInterleavedBuffer){for(let j=0;j<q.locationSize;j++)_(q.location+j,fe.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let j=0;j<q.locationSize;j++)M(q.location+j);s.bindBuffer(s.ARRAY_BUFFER,Re);for(let j=0;j<q.locationSize;j++)D(q.location+j,k/q.locationSize,We,le,_e*Je,(Ce+k/q.locationSize*j)*Je,ie)}else{if(me.isInstancedBufferAttribute){for(let fe=0;fe<q.locationSize;fe++)_(q.location+fe,me.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let fe=0;fe<q.locationSize;fe++)M(q.location+fe);s.bindBuffer(s.ARRAY_BUFFER,Re);for(let fe=0;fe<q.locationSize;fe++)D(q.location+fe,k/q.locationSize,We,le,k*Je,k/q.locationSize*fe*Je,ie)}}else if(re!==void 0){const le=re[Q];if(le!==void 0)switch(le.length){case 2:s.vertexAttrib2fv(q.location,le);break;case 3:s.vertexAttrib3fv(q.location,le);break;case 4:s.vertexAttrib4fv(q.location,le);break;default:s.vertexAttrib1fv(q.location,le)}}}}T()}function U(){H();for(const P in r){const B=r[P];for(const $ in B){const K=B[$];for(const ue in K)x(K[ue].object),delete K[ue];delete B[$]}delete r[P]}}function L(P){if(r[P.id]===void 0)return;const B=r[P.id];for(const $ in B){const K=B[$];for(const ue in K)x(K[ue].object),delete K[ue];delete B[$]}delete r[P.id]}function O(P){for(const B in r){const $=r[B];if($[P.id]===void 0)continue;const K=$[P.id];for(const ue in K)x(K[ue].object),delete K[ue];delete $[P.id]}}function H(){b(),u=!0,l!==o&&(l=o,m(l.object))}function b(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:H,resetDefaultState:b,dispose:U,releaseStatesOfGeometry:L,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:M,disableUnusedAttributes:T}}function VS(s,e,t){let r;function o(m){r=m}function l(m,x){s.drawArrays(r,m,x),t.update(x,r,1)}function u(m,x,v){v!==0&&(s.drawArraysInstanced(r,m,x,v),t.update(x,r,v))}function d(m,x,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,x,0,v);let S=0;for(let A=0;A<v;A++)S+=x[A];t.update(S,r,1)}function p(m,x,v,y){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let A=0;A<m.length;A++)u(m[A],x[A],y[A]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,x,0,y,0,v);let A=0;for(let C=0;C<v;C++)A+=x[C]*y[C];t.update(A,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function HS(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==Ti&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const H=O===mr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==ai&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==zi&&!H)}function p(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const x=p(m);x!==m&&(vt("WebGLRenderer:",m,"not supported, using",x,"instead."),m=x);const v=t.logarithmicDepthBuffer===!0,y=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=s.getParameter(s.MAX_SAMPLES),L=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reversedDepthBuffer:y,maxTextures:S,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:T,maxVaryings:D,maxFragmentUniforms:R,maxSamples:U,samples:L}}function GS(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Gr,d=new yt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const S=v.length!==0||y||r!==0||o;return o=y,r=v.length,S},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,y){t=x(v,y,0)},this.setState=function(v,y,S){const A=v.clippingPlanes,C=v.clipIntersection,M=v.clipShadows,_=s.get(v);if(!o||A===null||A.length===0||l&&!M)l?x(null):m();else{const T=l?0:r,D=T*4;let R=_.clippingState||null;p.value=R,R=x(A,y,D,S);for(let U=0;U!==D;++U)R[U]=t[U];_.clippingState=R,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=T}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(v,y,S,A){const C=v!==null?v.length:0;let M=null;if(C!==0){if(M=p.value,A!==!0||M===null){const _=S+C*4,T=y.matrixWorldInverse;d.getNormalMatrix(T),(M===null||M.length<_)&&(M=new Float32Array(_));for(let D=0,R=S;D!==C;++D,R+=4)u.copy(v[D]).applyMatrix4(T,d),u.normal.toArray(M,R),M[R+3]=u.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}function WS(s){let e=new WeakMap;function t(u,d){return d===Ld?u.mapping=Es:d===Id&&(u.mapping=ga),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===Ld||d===Id)if(e.has(u)){const p=e.get(u).texture;return t(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const m=new tg(p.height);return m.fromEquirectangularTexture(s,u),e.set(u,m),u.addEventListener("dispose",o),t(m.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const qr=4,Qm=[.125,.215,.35,.446,.526,.582],ys=20,XS=256,so=new jf,Jm=new Et;let pd=null,md=0,gd=0,xd=!1;const qS=new Z;class e0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:d=qS}=l;pd=this._renderer.getRenderTarget(),md=this._renderer.getActiveCubeFace(),gd=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,d),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=i0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=n0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(pd,md,gd),this._renderer.xr.enabled=xd,e.scissorTest=!1,ua(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Es||e.mapping===ga?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pd=this._renderer.getRenderTarget(),md=this._renderer.getActiveCubeFace(),gd=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:In,minFilter:In,generateMipmaps:!1,type:mr,format:Ti,colorSpace:va,depthBuffer:!1},o=t0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=t0(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=YS(l)),this._blurMaterial=KS(l,e,t),this._ggxMaterial=$S(l,e,t)}return o}_compileMaterial(e){const t=new Mt(new mi,e);this._renderer.compile(t,so)}_sceneToCubeUV(e,t,r,o,l){const p=new Qn(90,1,t,r),m=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,S=v.toneMapping;v.getClearColor(Jm),v.toneMapping=Vi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mt(new un,new _s({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,M=C.material;let _=!1;const T=e.background;T?T.isColor&&(M.color.copy(T),e.background=null,_=!0):(M.color.copy(Jm),_=!0);for(let D=0;D<6;D++){const R=D%3;R===0?(p.up.set(0,m[D],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+x[D],l.y,l.z)):R===1?(p.up.set(0,0,m[D]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+x[D],l.z)):(p.up.set(0,m[D],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+x[D]));const U=this._cubeSize;ua(o,R*U,D>2?U:0,U,U),v.setRenderTarget(o),_&&v.render(C,p),v.render(e,p)}v.toneMapping=S,v.autoClear=y,e.background=T}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Es||e.mapping===ga;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=i0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=n0());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const d=l.uniforms;d.envMap.value=e;const p=this._cubeSize;ua(t,0,0,3*p,2*p),r.setRenderTarget(t),r.render(u,so)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[r];d.material=u;const p=u.uniforms,m=r/(this._lodMeshes.length-1),x=t/(this._lodMeshes.length-1),v=Math.sqrt(m*m-x*x),y=0+m*1.25,S=v*y,{_lodMax:A}=this,C=this._sizeLods[r],M=3*C*(r>A-qr?r-A+qr:0),_=4*(this._cubeSize-C);p.envMap.value=e.texture,p.roughness.value=S,p.mipInt.value=A-t,ua(l,M,_,3*C,2*C),o.setRenderTarget(l),o.render(d,so),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=A-r,ua(e,M,_,3*C,2*C),o.setRenderTarget(e),o.render(d,so)}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,d){const p=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&It("blur direction must be either latitudinal or longitudinal!");const x=3,v=this._lodMeshes[o];v.material=m;const y=m.uniforms,S=this._sizeLods[r]-1,A=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*ys-1),C=l/A,M=isFinite(l)?1+Math.floor(x*C):ys;M>ys&&vt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${ys}`);const _=[];let T=0;for(let O=0;O<ys;++O){const H=O/C,b=Math.exp(-H*H/2);_.push(b),O===0?T+=b:O<M&&(T+=2*b)}for(let O=0;O<_.length;O++)_[O]=_[O]/T;y.envMap.value=e.texture,y.samples.value=M,y.weights.value=_,y.latitudinal.value=u==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:D}=this;y.dTheta.value=A,y.mipInt.value=D-r;const R=this._sizeLods[o],U=3*R*(o>D-qr?o-D+qr:0),L=4*(this._cubeSize-R);ua(t,U,L,3*R,2*R),p.setRenderTarget(t),p.render(v,so)}}function YS(s){const e=[],t=[],r=[];let o=s;const l=s-qr+1+Qm.length;for(let u=0;u<l;u++){const d=Math.pow(2,o);e.push(d);let p=1/d;u>s-qr?p=Qm[u-s+qr-1]:u===0&&(p=0),t.push(p);const m=1/(d-2),x=-m,v=1+m,y=[x,x,v,x,v,v,x,x,v,v,x,v],S=6,A=6,C=3,M=2,_=1,T=new Float32Array(C*A*S),D=new Float32Array(M*A*S),R=new Float32Array(_*A*S);for(let L=0;L<S;L++){const O=L%3*2/3-1,H=L>2?0:-1,b=[O,H,0,O+2/3,H,0,O+2/3,H+1,0,O,H,0,O+2/3,H+1,0,O,H+1,0];T.set(b,C*A*L),D.set(y,M*A*L);const P=[L,L,L,L,L,L];R.set(P,_*A*L)}const U=new mi;U.setAttribute("position",new Gi(T,C)),U.setAttribute("uv",new Gi(D,M)),U.setAttribute("faceIndex",new Gi(R,_)),r.push(new Mt(U,null)),o>qr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function t0(s,e,t){const r=new Hi(s,e,t);return r.texture.mapping=rc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ua(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function $S(s,e,t){return new qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:XS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ac(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function KS(s,e,t){const r=new Float32Array(ys),o=new Z(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:ac(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function n0(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ac(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function i0(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function ac(){return`

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
	`}function ZS(s){let e=new WeakMap,t=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===Ld||p===Id,x=p===Es||p===ga;if(m||x){let v=e.get(d);const y=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return t===null&&(t=new e0(s)),v=m?t.fromEquirectangular(d,v):t.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const S=d.image;return m&&S&&S.height>0||x&&S&&o(S)?(t===null&&(t=new e0(s)),v=m?t.fromEquirectangular(d):t.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",l),v.texture):null}}}return d}function o(d){let p=0;const m=6;for(let x=0;x<m;x++)d[x]!==void 0&&p++;return p===m}function l(d){const p=d.target;p.removeEventListener("dispose",l);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function QS(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&go("WebGLRenderer: "+r+" extension not supported."),o}}}function JS(s,e,t,r){const o={},l=new WeakMap;function u(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const A in y.attributes)e.remove(y.attributes[A]);y.removeEventListener("dispose",u),delete o[y.id];const S=l.get(y);S&&(e.remove(S),l.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function d(v,y){return o[y.id]===!0||(y.addEventListener("dispose",u),o[y.id]=!0,t.memory.geometries++),y}function p(v){const y=v.attributes;for(const S in y)e.update(y[S],s.ARRAY_BUFFER)}function m(v){const y=[],S=v.index,A=v.attributes.position;let C=0;if(S!==null){const T=S.array;C=S.version;for(let D=0,R=T.length;D<R;D+=3){const U=T[D+0],L=T[D+1],O=T[D+2];y.push(U,L,L,O,O,U)}}else if(A!==void 0){const T=A.array;C=A.version;for(let D=0,R=T.length/3-1;D<R;D+=3){const U=D+0,L=D+1,O=D+2;y.push(U,L,L,O,O,U)}}else return;const M=new(q0(y)?Z0:K0)(y,1);M.version=C;const _=l.get(v);_&&e.remove(_),l.set(v,M)}function x(v){const y=l.get(v);if(y){const S=v.index;S!==null&&y.version<S.version&&m(v)}else m(v);return l.get(v)}return{get:d,update:p,getWireframeAttribute:x}}function eM(s,e,t){let r;function o(y){r=y}let l,u;function d(y){l=y.type,u=y.bytesPerElement}function p(y,S){s.drawElements(r,S,l,y*u),t.update(S,r,1)}function m(y,S,A){A!==0&&(s.drawElementsInstanced(r,S,l,y*u,A),t.update(S,r,A))}function x(y,S,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,y,0,A);let M=0;for(let _=0;_<A;_++)M+=S[_];t.update(M,r,1)}function v(y,S,A,C){if(A===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<y.length;_++)m(y[_]/u,S[_],C[_]);else{M.multiDrawElementsInstancedWEBGL(r,S,0,l,y,0,C,0,A);let _=0;for(let T=0;T<A;T++)_+=S[T]*C[T];t.update(_,r,1)}}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=x,this.renderMultiDrawInstances=v}function tM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:It("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function nM(s,e,t){const r=new WeakMap,o=new tn;function l(u,d,p){const m=u.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=x!==void 0?x.length:0;let y=r.get(d);if(y===void 0||y.count!==v){let P=function(){H.dispose(),r.delete(d),d.removeEventListener("dispose",P)};var S=P;y!==void 0&&y.texture.dispose();const A=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],T=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let R=0;A===!0&&(R=1),C===!0&&(R=2),M===!0&&(R=3);let U=d.attributes.position.count*R,L=1;U>e.maxTextureSize&&(L=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const O=new Float32Array(U*L*4*v),H=new Y0(O,U,L,v);H.type=zi,H.needsUpdate=!0;const b=R*4;for(let B=0;B<v;B++){const $=_[B],K=T[B],ue=D[B],de=U*L*4*B;for(let re=0;re<$.count;re++){const Q=re*b;A===!0&&(o.fromBufferAttribute($,re),O[de+Q+0]=o.x,O[de+Q+1]=o.y,O[de+Q+2]=o.z,O[de+Q+3]=0),C===!0&&(o.fromBufferAttribute(K,re),O[de+Q+4]=o.x,O[de+Q+5]=o.y,O[de+Q+6]=o.z,O[de+Q+7]=0),M===!0&&(o.fromBufferAttribute(ue,re),O[de+Q+8]=o.x,O[de+Q+9]=o.y,O[de+Q+10]=o.z,O[de+Q+11]=ue.itemSize===4?o.w:1)}}y={count:v,texture:H,size:new gt(U,L)},r.set(d,y),d.addEventListener("dispose",P)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let A=0;for(let M=0;M<m.length;M++)A+=m[M];const C=d.morphTargetsRelative?1:1-A;p.getUniforms().setValue(s,"morphTargetBaseInfluence",C),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",y.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:l}}function iM(s,e,t,r){let o=new WeakMap;function l(p){const m=r.render.frame,x=p.geometry,v=e.get(p,x);if(o.get(v)!==m&&(e.update(v),o.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),o.get(p)!==m&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;o.get(y)!==m&&(y.update(),o.set(y,m))}return v}function u(){o=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:u}}const rM={[D0]:"LINEAR_TONE_MAPPING",[L0]:"REINHARD_TONE_MAPPING",[I0]:"CINEON_TONE_MAPPING",[Sf]:"ACES_FILMIC_TONE_MAPPING",[O0]:"AGX_TONE_MAPPING",[F0]:"NEUTRAL_TONE_MAPPING",[U0]:"CUSTOM_TONE_MAPPING"};function sM(s,e,t,r,o){const l=new Hi(e,t,{type:s,depthBuffer:r,stencilBuffer:o}),u=new Hi(e,t,{type:mr,depthBuffer:!1,stencilBuffer:!1}),d=new mi;d.setAttribute("position",new En([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new En([0,2,0,0,2,0],2));const p=new j_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new Mt(d,p),x=new jf(-1,1,1,-1,0,1);let v=null,y=null,S=!1,A,C=null,M=[],_=!1;this.setSize=function(T,D){l.setSize(T,D),u.setSize(T,D);for(let R=0;R<M.length;R++){const U=M[R];U.setSize&&U.setSize(T,D)}},this.setEffects=function(T){M=T,_=M.length>0&&M[0].isRenderPass===!0;const D=l.width,R=l.height;for(let U=0;U<M.length;U++){const L=M[U];L.setSize&&L.setSize(D,R)}},this.begin=function(T,D){if(S||T.toneMapping===Vi&&M.length===0)return!1;if(C=D,D!==null){const R=D.width,U=D.height;(l.width!==R||l.height!==U)&&this.setSize(R,U)}return _===!1&&T.setRenderTarget(l),A=T.toneMapping,T.toneMapping=Vi,!0},this.hasRenderPass=function(){return _},this.end=function(T,D){T.toneMapping=A,S=!0;let R=l,U=u;for(let L=0;L<M.length;L++){const O=M[L];if(O.enabled!==!1&&(O.render(T,U,R,D),O.needsSwap!==!1)){const H=R;R=U,U=H}}if(v!==T.outputColorSpace||y!==T.toneMapping){v=T.outputColorSpace,y=T.toneMapping,p.defines={},Ut.getTransfer(v)===Ht&&(p.defines.SRGB_TRANSFER="");const L=rM[y];L&&(p.defines[L]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=R.texture,T.setRenderTarget(C),T.render(m,x),C=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){l.dispose(),u.dispose(),d.dispose(),p.dispose()}}const rg=new An,xf=new xo(1,1),sg=new Y0,ag=new g_,og=new eg,r0=[],s0=[],a0=new Float32Array(16),o0=new Float32Array(9),l0=new Float32Array(4);function ya(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=r0[o];if(l===void 0&&(l=new Float32Array(o),r0[o]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,s[u].toArray(l,d)}return l}function dn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function fn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function oc(s,e){let t=s0[e];t===void 0&&(t=new Int32Array(e),s0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function aM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function oM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;s.uniform2fv(this.addr,e),fn(t,e)}}function lM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;s.uniform3fv(this.addr,e),fn(t,e)}}function cM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;s.uniform4fv(this.addr,e),fn(t,e)}}function uM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(dn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,r))return;l0.set(r),s.uniformMatrix2fv(this.addr,!1,l0),fn(t,r)}}function dM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(dn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,r))return;o0.set(r),s.uniformMatrix3fv(this.addr,!1,o0),fn(t,r)}}function fM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(dn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,r))return;a0.set(r),s.uniformMatrix4fv(this.addr,!1,a0),fn(t,r)}}function hM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function pM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;s.uniform2iv(this.addr,e),fn(t,e)}}function mM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;s.uniform3iv(this.addr,e),fn(t,e)}}function gM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;s.uniform4iv(this.addr,e),fn(t,e)}}function xM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function vM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;s.uniform2uiv(this.addr,e),fn(t,e)}}function _M(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;s.uniform3uiv(this.addr,e),fn(t,e)}}function yM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;s.uniform4uiv(this.addr,e),fn(t,e)}}function SM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(xf.compareFunction=t.isReversedDepthBuffer()?Rf:Cf,l=xf):l=rg,t.setTexture2D(e||l,o)}function MM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||ag,o)}function EM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||og,o)}function wM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||sg,o)}function bM(s){switch(s){case 5126:return aM;case 35664:return oM;case 35665:return lM;case 35666:return cM;case 35674:return uM;case 35675:return dM;case 35676:return fM;case 5124:case 35670:return hM;case 35667:case 35671:return pM;case 35668:case 35672:return mM;case 35669:case 35673:return gM;case 5125:return xM;case 36294:return vM;case 36295:return _M;case 36296:return yM;case 35678:case 36198:case 36298:case 36306:case 35682:return SM;case 35679:case 36299:case 36307:return MM;case 35680:case 36300:case 36308:case 36293:return EM;case 36289:case 36303:case 36311:case 36292:return wM}}function TM(s,e){s.uniform1fv(this.addr,e)}function AM(s,e){const t=ya(e,this.size,2);s.uniform2fv(this.addr,t)}function CM(s,e){const t=ya(e,this.size,3);s.uniform3fv(this.addr,t)}function RM(s,e){const t=ya(e,this.size,4);s.uniform4fv(this.addr,t)}function NM(s,e){const t=ya(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function PM(s,e){const t=ya(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function DM(s,e){const t=ya(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function LM(s,e){s.uniform1iv(this.addr,e)}function IM(s,e){s.uniform2iv(this.addr,e)}function UM(s,e){s.uniform3iv(this.addr,e)}function OM(s,e){s.uniform4iv(this.addr,e)}function FM(s,e){s.uniform1uiv(this.addr,e)}function kM(s,e){s.uniform2uiv(this.addr,e)}function BM(s,e){s.uniform3uiv(this.addr,e)}function zM(s,e){s.uniform4uiv(this.addr,e)}function jM(s,e,t){const r=this.cache,o=e.length,l=oc(t,o);dn(r,l)||(s.uniform1iv(this.addr,l),fn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=xf:u=rg;for(let d=0;d!==o;++d)t.setTexture2D(e[d]||u,l[d])}function VM(s,e,t){const r=this.cache,o=e.length,l=oc(t,o);dn(r,l)||(s.uniform1iv(this.addr,l),fn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||ag,l[u])}function HM(s,e,t){const r=this.cache,o=e.length,l=oc(t,o);dn(r,l)||(s.uniform1iv(this.addr,l),fn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||og,l[u])}function GM(s,e,t){const r=this.cache,o=e.length,l=oc(t,o);dn(r,l)||(s.uniform1iv(this.addr,l),fn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||sg,l[u])}function WM(s){switch(s){case 5126:return TM;case 35664:return AM;case 35665:return CM;case 35666:return RM;case 35674:return NM;case 35675:return PM;case 35676:return DM;case 5124:case 35670:return LM;case 35667:case 35671:return IM;case 35668:case 35672:return UM;case 35669:case 35673:return OM;case 5125:return FM;case 36294:return kM;case 36295:return BM;case 36296:return zM;case 35678:case 36198:case 36298:case 36306:case 35682:return jM;case 35679:case 36299:case 36307:return VM;case 35680:case 36300:case 36308:case 36293:return HM;case 36289:case 36303:case 36311:case 36292:return GM}}class XM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=bM(t.type)}}class qM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=WM(t.type)}}class YM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,t[d.id],r)}}}const vd=/(\w+)(\])?(\[|\.)?/g;function c0(s,e){s.seq.push(e),s.map[e.id]=e}function $M(s,e,t){const r=s.name,o=r.length;for(vd.lastIndex=0;;){const l=vd.exec(r),u=vd.lastIndex;let d=l[1];const p=l[2]==="]",m=l[3];if(p&&(d=d|0),m===void 0||m==="["&&u+2===o){c0(t,m===void 0?new XM(d,s,e):new qM(d,s,e));break}else{let v=t.map[d];v===void 0&&(v=new YM(d),c0(t,v)),t=v}}}class Kl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(t,u),p=e.getUniformLocation(t,d.name);$M(d,p,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const d=t[l],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function u0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const KM=37297;let ZM=0;function QM(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const d0=new yt;function JM(s){Ut._getMatrix(d0,Ut.workingColorSpace,s);const e=`mat3( ${d0.elements.map(t=>t.toFixed(4))} )`;switch(Ut.getTransfer(s)){case Jl:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return vt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function f0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+QM(s.getShaderSource(e),d)}else return l}function eE(s,e){const t=JM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const tE={[D0]:"Linear",[L0]:"Reinhard",[I0]:"Cineon",[Sf]:"ACESFilmic",[O0]:"AgX",[F0]:"Neutral",[U0]:"Custom"};function nE(s,e){const t=tE[e];return t===void 0?(vt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const jl=new Z;function iE(){Ut.getLuminanceCoefficients(jl);const s=jl.x.toFixed(4),e=jl.y.toFixed(4),t=jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(co).join(`
`)}function sE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function aE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return t}function co(s){return s!==""}function h0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function p0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oE=/^[ \t]*#include +<([\w\d./]+)>/gm;function vf(s){return s.replace(oE,cE)}const lE=new Map;function cE(s,e){let t=St[e];if(t===void 0){const r=lE.get(e);if(r!==void 0)t=St[r],vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return vf(t)}const uE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function m0(s){return s.replace(uE,dE)}function dE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function g0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const fE={[Gl]:"SHADOWMAP_TYPE_PCF",[lo]:"SHADOWMAP_TYPE_VSM"};function hE(s){return fE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const pE={[Es]:"ENVMAP_TYPE_CUBE",[ga]:"ENVMAP_TYPE_CUBE",[rc]:"ENVMAP_TYPE_CUBE_UV"};function mE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":pE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const gE={[ga]:"ENVMAP_MODE_REFRACTION"};function xE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":gE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const vE={[P0]:"ENVMAP_BLENDING_MULTIPLY",[Kv]:"ENVMAP_BLENDING_MIX",[Zv]:"ENVMAP_BLENDING_ADD"};function _E(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":vE[s.combine]||"ENVMAP_BLENDING_NONE"}function yE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function SE(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const p=hE(t),m=mE(t),x=xE(t),v=_E(t),y=yE(t),S=rE(t),A=sE(l),C=o.createProgram();let M,_,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(co).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(co).join(`
`),_.length>0&&(_+=`
`)):(M=[g0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(co).join(`
`),_=[g0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+x:"",t.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vi?"#define TONE_MAPPING":"",t.toneMapping!==Vi?St.tonemapping_pars_fragment:"",t.toneMapping!==Vi?nE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,eE("linearToOutputTexel",t.outputColorSpace),iE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(co).join(`
`)),u=vf(u),u=h0(u,t),u=p0(u,t),d=vf(d),d=h0(d,t),d=p0(d,t),u=m0(u),d=m0(d),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",t.glslVersion===Tm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const D=T+M+u,R=T+_+d,U=u0(o,o.VERTEX_SHADER,D),L=u0(o,o.FRAGMENT_SHADER,R);o.attachShader(C,U),o.attachShader(C,L),t.index0AttributeName!==void 0?o.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function O(B){if(s.debug.checkShaderErrors){const $=o.getProgramInfoLog(C)||"",K=o.getShaderInfoLog(U)||"",ue=o.getShaderInfoLog(L)||"",de=$.trim(),re=K.trim(),Q=ue.trim();let q=!0,me=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,C,U,L);else{const le=f0(o,U,"vertex"),k=f0(o,L,"fragment");It("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+de+`
`+le+`
`+k)}else de!==""?vt("WebGLProgram: Program Info Log:",de):(re===""||Q==="")&&(me=!1);me&&(B.diagnostics={runnable:q,programLog:de,vertexShader:{log:re,prefix:M},fragmentShader:{log:Q,prefix:_}})}o.deleteShader(U),o.deleteShader(L),H=new Kl(o,C),b=aE(o,C)}let H;this.getUniforms=function(){return H===void 0&&O(this),H};let b;this.getAttributes=function(){return b===void 0&&O(this),b};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=o.getProgramParameter(C,KM)),P},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ZM++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=U,this.fragmentShader=L,this}let ME=0;class EE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new wE(e),t.set(e,r)),r}}class wE{constructor(e){this.id=ME++,this.code=e,this.usedTimes=0}}function bE(s,e,t,r,o,l,u){const d=new Lf,p=new EE,m=new Set,x=[],v=new Map,y=o.logarithmicDepthBuffer;let S=o.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(b){return m.add(b),b===0?"uv":`uv${b}`}function M(b,P,B,$,K){const ue=$.fog,de=K.geometry,re=b.isMeshStandardMaterial?$.environment:null,Q=(b.isMeshStandardMaterial?t:e).get(b.envMap||re),q=Q&&Q.mapping===rc?Q.image.height:null,me=A[b.type];b.precision!==null&&(S=o.getMaxPrecision(b.precision),S!==b.precision&&vt("WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const le=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,k=le!==void 0?le.length:0;let se=0;de.morphAttributes.position!==void 0&&(se=1),de.morphAttributes.normal!==void 0&&(se=2),de.morphAttributes.color!==void 0&&(se=3);let Re,We,Je,ie;if(me){const Rt=Bi[me];Re=Rt.vertexShader,We=Rt.fragmentShader}else Re=b.vertexShader,We=b.fragmentShader,p.update(b),Je=p.getVertexShaderID(b),ie=p.getFragmentShaderID(b);const fe=s.getRenderTarget(),_e=s.state.buffers.depth.getReversed(),Ce=K.isInstancedMesh===!0,j=K.isBatchedMesh===!0,Fe=!!b.map,Dt=!!b.matcap,Be=!!Q,ft=!!b.aoMap,Ot=!!b.lightMap,ht=!!b.bumpMap,Vt=!!b.normalMap,z=!!b.displacementMap,Gt=!!b.emissiveMap,_t=!!b.metalnessMap,Tt=!!b.roughnessMap,$e=b.anisotropy>0,I=b.clearcoat>0,E=b.dispersion>0,X=b.iridescence>0,he=b.sheen>0,ge=b.transmission>0,ce=$e&&!!b.anisotropyMap,Ke=I&&!!b.clearcoatMap,Ae=I&&!!b.clearcoatNormalMap,He=I&&!!b.clearcoatRoughnessMap,at=X&&!!b.iridescenceMap,ye=X&&!!b.iridescenceThicknessMap,Pe=he&&!!b.sheenColorMap,Xe=he&&!!b.sheenRoughnessMap,ze=!!b.specularMap,Ne=!!b.specularColorMap,xt=!!b.specularIntensityMap,G=ge&&!!b.transmissionMap,Ue=ge&&!!b.thicknessMap,Ee=!!b.gradientMap,Ie=!!b.alphaMap,Se=b.alphaTest>0,pe=!!b.alphaHash,De=!!b.extensions;let ut=Vi;b.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(ut=s.toneMapping);const At={shaderID:me,shaderType:b.type,shaderName:b.name,vertexShader:Re,fragmentShader:We,defines:b.defines,customVertexShaderID:Je,customFragmentShaderID:ie,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:j,batchingColor:j&&K._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&K.instanceColor!==null,instancingMorph:Ce&&K.morphTexture!==null,outputColorSpace:fe===null?s.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:va,alphaToCoverage:!!b.alphaToCoverage,map:Fe,matcap:Dt,envMap:Be,envMapMode:Be&&Q.mapping,envMapCubeUVHeight:q,aoMap:ft,lightMap:Ot,bumpMap:ht,normalMap:Vt,displacementMap:z,emissiveMap:Gt,normalMapObjectSpace:Vt&&b.normalMapType===e_,normalMapTangentSpace:Vt&&b.normalMapType===X0,metalnessMap:_t,roughnessMap:Tt,anisotropy:$e,anisotropyMap:ce,clearcoat:I,clearcoatMap:Ke,clearcoatNormalMap:Ae,clearcoatRoughnessMap:He,dispersion:E,iridescence:X,iridescenceMap:at,iridescenceThicknessMap:ye,sheen:he,sheenColorMap:Pe,sheenRoughnessMap:Xe,specularMap:ze,specularColorMap:Ne,specularIntensityMap:xt,transmission:ge,transmissionMap:G,thicknessMap:Ue,gradientMap:Ee,opaque:b.transparent===!1&&b.blending===ha&&b.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Se,alphaHash:pe,combine:b.combine,mapUv:Fe&&C(b.map.channel),aoMapUv:ft&&C(b.aoMap.channel),lightMapUv:Ot&&C(b.lightMap.channel),bumpMapUv:ht&&C(b.bumpMap.channel),normalMapUv:Vt&&C(b.normalMap.channel),displacementMapUv:z&&C(b.displacementMap.channel),emissiveMapUv:Gt&&C(b.emissiveMap.channel),metalnessMapUv:_t&&C(b.metalnessMap.channel),roughnessMapUv:Tt&&C(b.roughnessMap.channel),anisotropyMapUv:ce&&C(b.anisotropyMap.channel),clearcoatMapUv:Ke&&C(b.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&C(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&C(b.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&C(b.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&C(b.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&C(b.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&C(b.sheenRoughnessMap.channel),specularMapUv:ze&&C(b.specularMap.channel),specularColorMapUv:Ne&&C(b.specularColorMap.channel),specularIntensityMapUv:xt&&C(b.specularIntensityMap.channel),transmissionMapUv:G&&C(b.transmissionMap.channel),thicknessMapUv:Ue&&C(b.thicknessMap.channel),alphaMapUv:Ie&&C(b.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(Vt||$e),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!de.attributes.uv&&(Fe||Ie),fog:!!ue,useFog:b.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:_e,skinning:K.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:se,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:ut,decodeVideoTexture:Fe&&b.map.isVideoTexture===!0&&Ut.getTransfer(b.map.colorSpace)===Ht,decodeVideoTextureEmissive:Gt&&b.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(b.emissiveMap.colorSpace)===Ht,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ur,flipSided:b.side===Jn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:De&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&b.extensions.multiDraw===!0||j)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return At.vertexUv1s=m.has(1),At.vertexUv2s=m.has(2),At.vertexUv3s=m.has(3),m.clear(),At}function _(b){const P=[];if(b.shaderID?P.push(b.shaderID):(P.push(b.customVertexShaderID),P.push(b.customFragmentShaderID)),b.defines!==void 0)for(const B in b.defines)P.push(B),P.push(b.defines[B]);return b.isRawShaderMaterial===!1&&(T(P,b),D(P,b),P.push(s.outputColorSpace)),P.push(b.customProgramCacheKey),P.join()}function T(b,P){b.push(P.precision),b.push(P.outputColorSpace),b.push(P.envMapMode),b.push(P.envMapCubeUVHeight),b.push(P.mapUv),b.push(P.alphaMapUv),b.push(P.lightMapUv),b.push(P.aoMapUv),b.push(P.bumpMapUv),b.push(P.normalMapUv),b.push(P.displacementMapUv),b.push(P.emissiveMapUv),b.push(P.metalnessMapUv),b.push(P.roughnessMapUv),b.push(P.anisotropyMapUv),b.push(P.clearcoatMapUv),b.push(P.clearcoatNormalMapUv),b.push(P.clearcoatRoughnessMapUv),b.push(P.iridescenceMapUv),b.push(P.iridescenceThicknessMapUv),b.push(P.sheenColorMapUv),b.push(P.sheenRoughnessMapUv),b.push(P.specularMapUv),b.push(P.specularColorMapUv),b.push(P.specularIntensityMapUv),b.push(P.transmissionMapUv),b.push(P.thicknessMapUv),b.push(P.combine),b.push(P.fogExp2),b.push(P.sizeAttenuation),b.push(P.morphTargetsCount),b.push(P.morphAttributeCount),b.push(P.numDirLights),b.push(P.numPointLights),b.push(P.numSpotLights),b.push(P.numSpotLightMaps),b.push(P.numHemiLights),b.push(P.numRectAreaLights),b.push(P.numDirLightShadows),b.push(P.numPointLightShadows),b.push(P.numSpotLightShadows),b.push(P.numSpotLightShadowsWithMaps),b.push(P.numLightProbes),b.push(P.shadowMapType),b.push(P.toneMapping),b.push(P.numClippingPlanes),b.push(P.numClipIntersection),b.push(P.depthPacking)}function D(b,P){d.disableAll(),P.instancing&&d.enable(0),P.instancingColor&&d.enable(1),P.instancingMorph&&d.enable(2),P.matcap&&d.enable(3),P.envMap&&d.enable(4),P.normalMapObjectSpace&&d.enable(5),P.normalMapTangentSpace&&d.enable(6),P.clearcoat&&d.enable(7),P.iridescence&&d.enable(8),P.alphaTest&&d.enable(9),P.vertexColors&&d.enable(10),P.vertexAlphas&&d.enable(11),P.vertexUv1s&&d.enable(12),P.vertexUv2s&&d.enable(13),P.vertexUv3s&&d.enable(14),P.vertexTangents&&d.enable(15),P.anisotropy&&d.enable(16),P.alphaHash&&d.enable(17),P.batching&&d.enable(18),P.dispersion&&d.enable(19),P.batchingColor&&d.enable(20),P.gradientMap&&d.enable(21),b.push(d.mask),d.disableAll(),P.fog&&d.enable(0),P.useFog&&d.enable(1),P.flatShading&&d.enable(2),P.logarithmicDepthBuffer&&d.enable(3),P.reversedDepthBuffer&&d.enable(4),P.skinning&&d.enable(5),P.morphTargets&&d.enable(6),P.morphNormals&&d.enable(7),P.morphColors&&d.enable(8),P.premultipliedAlpha&&d.enable(9),P.shadowMapEnabled&&d.enable(10),P.doubleSided&&d.enable(11),P.flipSided&&d.enable(12),P.useDepthPacking&&d.enable(13),P.dithering&&d.enable(14),P.transmission&&d.enable(15),P.sheen&&d.enable(16),P.opaque&&d.enable(17),P.pointsUvs&&d.enable(18),P.decodeVideoTexture&&d.enable(19),P.decodeVideoTextureEmissive&&d.enable(20),P.alphaToCoverage&&d.enable(21),b.push(d.mask)}function R(b){const P=A[b.type];let B;if(P){const $=Bi[P];B=R_.clone($.uniforms)}else B=b.uniforms;return B}function U(b,P){let B=v.get(P);return B!==void 0?++B.usedTimes:(B=new SE(s,P,b,l),x.push(B),v.set(P,B)),B}function L(b){if(--b.usedTimes===0){const P=x.indexOf(b);x[P]=x[x.length-1],x.pop(),v.delete(b.cacheKey),b.destroy()}}function O(b){p.remove(b)}function H(){p.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:R,acquireProgram:U,releaseProgram:L,releaseShaderCache:O,programs:x,dispose:H}}function TE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function o(u,d,p){s.get(u)[d]=p}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function AE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function x0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function v0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(v,y,S,A,C,M){let _=s[e];return _===void 0?(_={id:v.id,object:v,geometry:y,material:S,groupOrder:A,renderOrder:v.renderOrder,z:C,group:M},s[e]=_):(_.id=v.id,_.object=v,_.geometry=y,_.material=S,_.groupOrder=A,_.renderOrder=v.renderOrder,_.z=C,_.group=M),e++,_}function d(v,y,S,A,C,M){const _=u(v,y,S,A,C,M);S.transmission>0?r.push(_):S.transparent===!0?o.push(_):t.push(_)}function p(v,y,S,A,C,M){const _=u(v,y,S,A,C,M);S.transmission>0?r.unshift(_):S.transparent===!0?o.unshift(_):t.unshift(_)}function m(v,y){t.length>1&&t.sort(v||AE),r.length>1&&r.sort(y||x0),o.length>1&&o.sort(y||x0)}function x(){for(let v=e,y=s.length;v<y;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:d,unshift:p,finish:x,sort:m}}function CE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new v0,s.set(r,[u])):o>=l.length?(u=new v0,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function RE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new Et};break;case"SpotLight":t={position:new Z,direction:new Z,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new Et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":t={color:new Et,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return s[e.id]=t,t}}}function NE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let PE=0;function DE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function LE(s){const e=new RE,t=NE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Z);const o=new Z,l=new Jt,u=new Jt;function d(m){let x=0,v=0,y=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let S=0,A=0,C=0,M=0,_=0,T=0,D=0,R=0,U=0,L=0,O=0;m.sort(DE);for(let b=0,P=m.length;b<P;b++){const B=m[b],$=B.color,K=B.intensity,ue=B.distance;let de=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===xa?de=B.shadow.map.texture:de=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)x+=$.r*K,v+=$.g*K,y+=$.b*K;else if(B.isLightProbe){for(let re=0;re<9;re++)r.probe[re].addScaledVector(B.sh.coefficients[re],K);O++}else if(B.isDirectionalLight){const re=e.get(B);if(re.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const Q=B.shadow,q=t.get(B);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,r.directionalShadow[S]=q,r.directionalShadowMap[S]=de,r.directionalShadowMatrix[S]=B.shadow.matrix,T++}r.directional[S]=re,S++}else if(B.isSpotLight){const re=e.get(B);re.position.setFromMatrixPosition(B.matrixWorld),re.color.copy($).multiplyScalar(K),re.distance=ue,re.coneCos=Math.cos(B.angle),re.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),re.decay=B.decay,r.spot[C]=re;const Q=B.shadow;if(B.map&&(r.spotLightMap[U]=B.map,U++,Q.updateMatrices(B),B.castShadow&&L++),r.spotLightMatrix[C]=Q.matrix,B.castShadow){const q=t.get(B);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,r.spotShadow[C]=q,r.spotShadowMap[C]=de,R++}C++}else if(B.isRectAreaLight){const re=e.get(B);re.color.copy($).multiplyScalar(K),re.halfWidth.set(B.width*.5,0,0),re.halfHeight.set(0,B.height*.5,0),r.rectArea[M]=re,M++}else if(B.isPointLight){const re=e.get(B);if(re.color.copy(B.color).multiplyScalar(B.intensity),re.distance=B.distance,re.decay=B.decay,B.castShadow){const Q=B.shadow,q=t.get(B);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,q.shadowCameraNear=Q.camera.near,q.shadowCameraFar=Q.camera.far,r.pointShadow[A]=q,r.pointShadowMap[A]=de,r.pointShadowMatrix[A]=B.shadow.matrix,D++}r.point[A]=re,A++}else if(B.isHemisphereLight){const re=e.get(B);re.skyColor.copy(B.color).multiplyScalar(K),re.groundColor.copy(B.groundColor).multiplyScalar(K),r.hemi[_]=re,_++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=v,r.ambient[2]=y;const H=r.hash;(H.directionalLength!==S||H.pointLength!==A||H.spotLength!==C||H.rectAreaLength!==M||H.hemiLength!==_||H.numDirectionalShadows!==T||H.numPointShadows!==D||H.numSpotShadows!==R||H.numSpotMaps!==U||H.numLightProbes!==O)&&(r.directional.length=S,r.spot.length=C,r.rectArea.length=M,r.point.length=A,r.hemi.length=_,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=R+U-L,r.spotLightMap.length=U,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=O,H.directionalLength=S,H.pointLength=A,H.spotLength=C,H.rectAreaLength=M,H.hemiLength=_,H.numDirectionalShadows=T,H.numPointShadows=D,H.numSpotShadows=R,H.numSpotMaps=U,H.numLightProbes=O,r.version=PE++)}function p(m,x){let v=0,y=0,S=0,A=0,C=0;const M=x.matrixWorldInverse;for(let _=0,T=m.length;_<T;_++){const D=m[_];if(D.isDirectionalLight){const R=r.directional[v];R.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(M),v++}else if(D.isSpotLight){const R=r.spot[S];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(M),R.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(M),S++}else if(D.isRectAreaLight){const R=r.rectArea[A];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(M),u.identity(),l.copy(D.matrixWorld),l.premultiply(M),u.extractRotation(l),R.halfWidth.set(D.width*.5,0,0),R.halfHeight.set(0,D.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),A++}else if(D.isPointLight){const R=r.point[y];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(M),y++}else if(D.isHemisphereLight){const R=r.hemi[C];R.direction.setFromMatrixPosition(D.matrixWorld),R.direction.transformDirection(M),C++}}}return{setup:d,setupView:p,state:r}}function _0(s){const e=new LE(s),t=[],r=[];function o(x){m.camera=x,t.length=0,r.length=0}function l(x){t.push(x)}function u(x){r.push(x)}function d(){e.setup(t)}function p(x){e.setupView(t,x)}const m={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:d,setupLightsView:p,pushLight:l,pushShadow:u}}function IE(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new _0(s),e.set(o,[d])):l>=u.length?(d=new _0(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const UE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OE=`uniform sampler2D shadow_pass;
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
}`,FE=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],kE=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],y0=new Jt,ao=new Z,_d=new Z;function BE(s,e,t){let r=new Uf;const o=new gt,l=new gt,u=new tn,d=new V_,p=new H_,m={},x=t.maxTextureSize,v={[Yr]:Jn,[Jn]:Yr,[ur]:ur},y=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:UE,fragmentShader:OE}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const A=new mi;A.setAttribute("position",new Gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Mt(A,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gl;let _=this.type;this.render=function(L,O,H){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||L.length===0)return;L.type===N0&&(vt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),L.type=Gl);const b=s.getRenderTarget(),P=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),$=s.state;$.setBlending(hr),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const K=_!==this.type;K&&O.traverse(function(ue){ue.material&&(Array.isArray(ue.material)?ue.material.forEach(de=>de.needsUpdate=!0):ue.material.needsUpdate=!0)});for(let ue=0,de=L.length;ue<de;ue++){const re=L[ue],Q=re.shadow;if(Q===void 0){vt("WebGLShadowMap:",re,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;o.copy(Q.mapSize);const q=Q.getFrameExtents();if(o.multiply(q),l.copy(Q.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(l.x=Math.floor(x/q.x),o.x=l.x*q.x,Q.mapSize.x=l.x),o.y>x&&(l.y=Math.floor(x/q.y),o.y=l.y*q.y,Q.mapSize.y=l.y)),Q.map===null||K===!0){if(Q.map!==null&&(Q.map.depthTexture!==null&&(Q.map.depthTexture.dispose(),Q.map.depthTexture=null),Q.map.dispose()),this.type===lo){if(re.isPointLight){vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Q.map=new Hi(o.x,o.y,{format:xa,type:mr,minFilter:In,magFilter:In,generateMipmaps:!1}),Q.map.texture.name=re.name+".shadowMap",Q.map.depthTexture=new xo(o.x,o.y,zi),Q.map.depthTexture.name=re.name+".shadowMapDepth",Q.map.depthTexture.format=gr,Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Tn,Q.map.depthTexture.magFilter=Tn}else{re.isPointLight?(Q.map=new tg(o.x),Q.map.depthTexture=new z_(o.x,Wi)):(Q.map=new Hi(o.x,o.y),Q.map.depthTexture=new xo(o.x,o.y,Wi)),Q.map.depthTexture.name=re.name+".shadowMap",Q.map.depthTexture.format=gr;const le=s.state.buffers.depth.getReversed();this.type===Gl?(Q.map.depthTexture.compareFunction=le?Rf:Cf,Q.map.depthTexture.minFilter=In,Q.map.depthTexture.magFilter=In):(Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Tn,Q.map.depthTexture.magFilter=Tn)}Q.camera.updateProjectionMatrix()}const me=Q.map.isWebGLCubeRenderTarget?6:1;for(let le=0;le<me;le++){if(Q.map.isWebGLCubeRenderTarget)s.setRenderTarget(Q.map,le),s.clear();else{le===0&&(s.setRenderTarget(Q.map),s.clear());const k=Q.getViewport(le);u.set(l.x*k.x,l.y*k.y,l.x*k.z,l.y*k.w),$.viewport(u)}if(re.isPointLight){const k=Q.camera,se=Q.matrix,Re=re.distance||k.far;Re!==k.far&&(k.far=Re,k.updateProjectionMatrix()),ao.setFromMatrixPosition(re.matrixWorld),k.position.copy(ao),_d.copy(k.position),_d.add(FE[le]),k.up.copy(kE[le]),k.lookAt(_d),k.updateMatrixWorld(),se.makeTranslation(-ao.x,-ao.y,-ao.z),y0.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Q._frustum.setFromProjectionMatrix(y0,k.coordinateSystem,k.reversedDepth)}else Q.updateMatrices(re);r=Q.getFrustum(),R(O,H,Q.camera,re,this.type)}Q.isPointLightShadow!==!0&&this.type===lo&&T(Q,H),Q.needsUpdate=!1}_=this.type,M.needsUpdate=!1,s.setRenderTarget(b,P,B)};function T(L,O){const H=e.update(C);y.defines.VSM_SAMPLES!==L.blurSamples&&(y.defines.VSM_SAMPLES=L.blurSamples,S.defines.VSM_SAMPLES=L.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Hi(o.x,o.y,{format:xa,type:mr})),y.uniforms.shadow_pass.value=L.map.depthTexture,y.uniforms.resolution.value=L.mapSize,y.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(O,null,H,y,C,null),S.uniforms.shadow_pass.value=L.mapPass.texture,S.uniforms.resolution.value=L.mapSize,S.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(O,null,H,S,C,null)}function D(L,O,H,b){let P=null;const B=H.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(B!==void 0)P=B;else if(P=H.isPointLight===!0?p:d,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const $=P.uuid,K=O.uuid;let ue=m[$];ue===void 0&&(ue={},m[$]=ue);let de=ue[K];de===void 0&&(de=P.clone(),ue[K]=de,O.addEventListener("dispose",U)),P=de}if(P.visible=O.visible,P.wireframe=O.wireframe,b===lo?P.side=O.shadowSide!==null?O.shadowSide:O.side:P.side=O.shadowSide!==null?O.shadowSide:v[O.side],P.alphaMap=O.alphaMap,P.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,P.map=O.map,P.clipShadows=O.clipShadows,P.clippingPlanes=O.clippingPlanes,P.clipIntersection=O.clipIntersection,P.displacementMap=O.displacementMap,P.displacementScale=O.displacementScale,P.displacementBias=O.displacementBias,P.wireframeLinewidth=O.wireframeLinewidth,P.linewidth=O.linewidth,H.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const $=s.properties.get(P);$.light=H}return P}function R(L,O,H,b,P){if(L.visible===!1)return;if(L.layers.test(O.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&P===lo)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,L.matrixWorld);const K=e.update(L),ue=L.material;if(Array.isArray(ue)){const de=K.groups;for(let re=0,Q=de.length;re<Q;re++){const q=de[re],me=ue[q.materialIndex];if(me&&me.visible){const le=D(L,me,b,P);L.onBeforeShadow(s,L,O,H,K,le,q),s.renderBufferDirect(H,null,K,le,L,q),L.onAfterShadow(s,L,O,H,K,le,q)}}}else if(ue.visible){const de=D(L,ue,b,P);L.onBeforeShadow(s,L,O,H,K,de,null),s.renderBufferDirect(H,null,K,de,L,null),L.onAfterShadow(s,L,O,H,K,de,null)}}const $=L.children;for(let K=0,ue=$.length;K<ue;K++)R($[K],O,H,b,P)}function U(L){L.target.removeEventListener("dispose",U);for(const H in m){const b=m[H],P=L.target.uuid;P in b&&(b[P].dispose(),delete b[P])}}}const zE={[Td]:Ad,[Cd]:Pd,[Rd]:Dd,[ma]:Nd,[Ad]:Td,[Pd]:Cd,[Dd]:Rd,[Nd]:ma};function jE(s,e){function t(){let G=!1;const Ue=new tn;let Ee=null;const Ie=new tn(0,0,0,0);return{setMask:function(Se){Ee!==Se&&!G&&(s.colorMask(Se,Se,Se,Se),Ee=Se)},setLocked:function(Se){G=Se},setClear:function(Se,pe,De,ut,At){At===!0&&(Se*=ut,pe*=ut,De*=ut),Ue.set(Se,pe,De,ut),Ie.equals(Ue)===!1&&(s.clearColor(Se,pe,De,ut),Ie.copy(Ue))},reset:function(){G=!1,Ee=null,Ie.set(-1,0,0,0)}}}function r(){let G=!1,Ue=!1,Ee=null,Ie=null,Se=null;return{setReversed:function(pe){if(Ue!==pe){const De=e.get("EXT_clip_control");pe?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),Ue=pe;const ut=Se;Se=null,this.setClear(ut)}},getReversed:function(){return Ue},setTest:function(pe){pe?fe(s.DEPTH_TEST):_e(s.DEPTH_TEST)},setMask:function(pe){Ee!==pe&&!G&&(s.depthMask(pe),Ee=pe)},setFunc:function(pe){if(Ue&&(pe=zE[pe]),Ie!==pe){switch(pe){case Td:s.depthFunc(s.NEVER);break;case Ad:s.depthFunc(s.ALWAYS);break;case Cd:s.depthFunc(s.LESS);break;case ma:s.depthFunc(s.LEQUAL);break;case Rd:s.depthFunc(s.EQUAL);break;case Nd:s.depthFunc(s.GEQUAL);break;case Pd:s.depthFunc(s.GREATER);break;case Dd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ie=pe}},setLocked:function(pe){G=pe},setClear:function(pe){Se!==pe&&(Ue&&(pe=1-pe),s.clearDepth(pe),Se=pe)},reset:function(){G=!1,Ee=null,Ie=null,Se=null,Ue=!1}}}function o(){let G=!1,Ue=null,Ee=null,Ie=null,Se=null,pe=null,De=null,ut=null,At=null;return{setTest:function(Rt){G||(Rt?fe(s.STENCIL_TEST):_e(s.STENCIL_TEST))},setMask:function(Rt){Ue!==Rt&&!G&&(s.stencilMask(Rt),Ue=Rt)},setFunc:function(Rt,Un,hn){(Ee!==Rt||Ie!==Un||Se!==hn)&&(s.stencilFunc(Rt,Un,hn),Ee=Rt,Ie=Un,Se=hn)},setOp:function(Rt,Un,hn){(pe!==Rt||De!==Un||ut!==hn)&&(s.stencilOp(Rt,Un,hn),pe=Rt,De=Un,ut=hn)},setLocked:function(Rt){G=Rt},setClear:function(Rt){At!==Rt&&(s.clearStencil(Rt),At=Rt)},reset:function(){G=!1,Ue=null,Ee=null,Ie=null,Se=null,pe=null,De=null,ut=null,At=null}}}const l=new t,u=new r,d=new o,p=new WeakMap,m=new WeakMap;let x={},v={},y=new WeakMap,S=[],A=null,C=!1,M=null,_=null,T=null,D=null,R=null,U=null,L=null,O=new Et(0,0,0),H=0,b=!1,P=null,B=null,$=null,K=null,ue=null;const de=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,Q=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(q)[1]),re=Q>=1):q.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),re=Q>=2);let me=null,le={};const k=s.getParameter(s.SCISSOR_BOX),se=s.getParameter(s.VIEWPORT),Re=new tn().fromArray(k),We=new tn().fromArray(se);function Je(G,Ue,Ee,Ie){const Se=new Uint8Array(4),pe=s.createTexture();s.bindTexture(G,pe),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let De=0;De<Ee;De++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Ue,0,s.RGBA,1,1,Ie,0,s.RGBA,s.UNSIGNED_BYTE,Se):s.texImage2D(Ue+De,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Se);return pe}const ie={};ie[s.TEXTURE_2D]=Je(s.TEXTURE_2D,s.TEXTURE_2D,1),ie[s.TEXTURE_CUBE_MAP]=Je(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[s.TEXTURE_2D_ARRAY]=Je(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ie[s.TEXTURE_3D]=Je(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),fe(s.DEPTH_TEST),u.setFunc(ma),ht(!1),Vt(ym),fe(s.CULL_FACE),ft(hr);function fe(G){x[G]!==!0&&(s.enable(G),x[G]=!0)}function _e(G){x[G]!==!1&&(s.disable(G),x[G]=!1)}function Ce(G,Ue){return v[G]!==Ue?(s.bindFramebuffer(G,Ue),v[G]=Ue,G===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ue),G===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ue),!0):!1}function j(G,Ue){let Ee=S,Ie=!1;if(G){Ee=y.get(Ue),Ee===void 0&&(Ee=[],y.set(Ue,Ee));const Se=G.textures;if(Ee.length!==Se.length||Ee[0]!==s.COLOR_ATTACHMENT0){for(let pe=0,De=Se.length;pe<De;pe++)Ee[pe]=s.COLOR_ATTACHMENT0+pe;Ee.length=Se.length,Ie=!0}}else Ee[0]!==s.BACK&&(Ee[0]=s.BACK,Ie=!0);Ie&&s.drawBuffers(Ee)}function Fe(G){return A!==G?(s.useProgram(G),A=G,!0):!1}const Dt={[vs]:s.FUNC_ADD,[Lv]:s.FUNC_SUBTRACT,[Iv]:s.FUNC_REVERSE_SUBTRACT};Dt[Uv]=s.MIN,Dt[Ov]=s.MAX;const Be={[Fv]:s.ZERO,[kv]:s.ONE,[Bv]:s.SRC_COLOR,[wd]:s.SRC_ALPHA,[Wv]:s.SRC_ALPHA_SATURATE,[Hv]:s.DST_COLOR,[jv]:s.DST_ALPHA,[zv]:s.ONE_MINUS_SRC_COLOR,[bd]:s.ONE_MINUS_SRC_ALPHA,[Gv]:s.ONE_MINUS_DST_COLOR,[Vv]:s.ONE_MINUS_DST_ALPHA,[Xv]:s.CONSTANT_COLOR,[qv]:s.ONE_MINUS_CONSTANT_COLOR,[Yv]:s.CONSTANT_ALPHA,[$v]:s.ONE_MINUS_CONSTANT_ALPHA};function ft(G,Ue,Ee,Ie,Se,pe,De,ut,At,Rt){if(G===hr){C===!0&&(_e(s.BLEND),C=!1);return}if(C===!1&&(fe(s.BLEND),C=!0),G!==Dv){if(G!==M||Rt!==b){if((_!==vs||R!==vs)&&(s.blendEquation(s.FUNC_ADD),_=vs,R=vs),Rt)switch(G){case ha:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Sm:s.blendFunc(s.ONE,s.ONE);break;case Mm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Em:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:It("WebGLState: Invalid blending: ",G);break}else switch(G){case ha:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Sm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Mm:It("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Em:It("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:It("WebGLState: Invalid blending: ",G);break}T=null,D=null,U=null,L=null,O.set(0,0,0),H=0,M=G,b=Rt}return}Se=Se||Ue,pe=pe||Ee,De=De||Ie,(Ue!==_||Se!==R)&&(s.blendEquationSeparate(Dt[Ue],Dt[Se]),_=Ue,R=Se),(Ee!==T||Ie!==D||pe!==U||De!==L)&&(s.blendFuncSeparate(Be[Ee],Be[Ie],Be[pe],Be[De]),T=Ee,D=Ie,U=pe,L=De),(ut.equals(O)===!1||At!==H)&&(s.blendColor(ut.r,ut.g,ut.b,At),O.copy(ut),H=At),M=G,b=!1}function Ot(G,Ue){G.side===ur?_e(s.CULL_FACE):fe(s.CULL_FACE);let Ee=G.side===Jn;Ue&&(Ee=!Ee),ht(Ee),G.blending===ha&&G.transparent===!1?ft(hr):ft(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),l.setMask(G.colorWrite);const Ie=G.stencilWrite;d.setTest(Ie),Ie&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Gt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?fe(s.SAMPLE_ALPHA_TO_COVERAGE):_e(s.SAMPLE_ALPHA_TO_COVERAGE)}function ht(G){P!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),P=G)}function Vt(G){G!==Nv?(fe(s.CULL_FACE),G!==B&&(G===ym?s.cullFace(s.BACK):G===Pv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_e(s.CULL_FACE),B=G}function z(G){G!==$&&(re&&s.lineWidth(G),$=G)}function Gt(G,Ue,Ee){G?(fe(s.POLYGON_OFFSET_FILL),(K!==Ue||ue!==Ee)&&(s.polygonOffset(Ue,Ee),K=Ue,ue=Ee)):_e(s.POLYGON_OFFSET_FILL)}function _t(G){G?fe(s.SCISSOR_TEST):_e(s.SCISSOR_TEST)}function Tt(G){G===void 0&&(G=s.TEXTURE0+de-1),me!==G&&(s.activeTexture(G),me=G)}function $e(G,Ue,Ee){Ee===void 0&&(me===null?Ee=s.TEXTURE0+de-1:Ee=me);let Ie=le[Ee];Ie===void 0&&(Ie={type:void 0,texture:void 0},le[Ee]=Ie),(Ie.type!==G||Ie.texture!==Ue)&&(me!==Ee&&(s.activeTexture(Ee),me=Ee),s.bindTexture(G,Ue||ie[G]),Ie.type=G,Ie.texture=Ue)}function I(){const G=le[me];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(G){It("WebGLState:",G)}}function X(){try{s.compressedTexImage3D(...arguments)}catch(G){It("WebGLState:",G)}}function he(){try{s.texSubImage2D(...arguments)}catch(G){It("WebGLState:",G)}}function ge(){try{s.texSubImage3D(...arguments)}catch(G){It("WebGLState:",G)}}function ce(){try{s.compressedTexSubImage2D(...arguments)}catch(G){It("WebGLState:",G)}}function Ke(){try{s.compressedTexSubImage3D(...arguments)}catch(G){It("WebGLState:",G)}}function Ae(){try{s.texStorage2D(...arguments)}catch(G){It("WebGLState:",G)}}function He(){try{s.texStorage3D(...arguments)}catch(G){It("WebGLState:",G)}}function at(){try{s.texImage2D(...arguments)}catch(G){It("WebGLState:",G)}}function ye(){try{s.texImage3D(...arguments)}catch(G){It("WebGLState:",G)}}function Pe(G){Re.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Re.copy(G))}function Xe(G){We.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),We.copy(G))}function ze(G,Ue){let Ee=m.get(Ue);Ee===void 0&&(Ee=new WeakMap,m.set(Ue,Ee));let Ie=Ee.get(G);Ie===void 0&&(Ie=s.getUniformBlockIndex(Ue,G.name),Ee.set(G,Ie))}function Ne(G,Ue){const Ie=m.get(Ue).get(G);p.get(Ue)!==Ie&&(s.uniformBlockBinding(Ue,Ie,G.__bindingPointIndex),p.set(Ue,Ie))}function xt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},me=null,le={},v={},y=new WeakMap,S=[],A=null,C=!1,M=null,_=null,T=null,D=null,R=null,U=null,L=null,O=new Et(0,0,0),H=0,b=!1,P=null,B=null,$=null,K=null,ue=null,Re.set(0,0,s.canvas.width,s.canvas.height),We.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:fe,disable:_e,bindFramebuffer:Ce,drawBuffers:j,useProgram:Fe,setBlending:ft,setMaterial:Ot,setFlipSided:ht,setCullFace:Vt,setLineWidth:z,setPolygonOffset:Gt,setScissorTest:_t,activeTexture:Tt,bindTexture:$e,unbindTexture:I,compressedTexImage2D:E,compressedTexImage3D:X,texImage2D:at,texImage3D:ye,updateUBOMapping:ze,uniformBlockBinding:Ne,texStorage2D:Ae,texStorage3D:He,texSubImage2D:he,texSubImage3D:ge,compressedTexSubImage2D:ce,compressedTexSubImage3D:Ke,scissor:Pe,viewport:Xe,reset:xt}}function VE(s,e,t,r,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new gt,x=new WeakMap;let v;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(I,E){return S?new OffscreenCanvas(I,E):mo("canvas")}function C(I,E,X){let he=1;const ge=$e(I);if((ge.width>X||ge.height>X)&&(he=X/Math.max(ge.width,ge.height)),he<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ce=Math.floor(he*ge.width),Ke=Math.floor(he*ge.height);v===void 0&&(v=A(ce,Ke));const Ae=E?A(ce,Ke):v;return Ae.width=ce,Ae.height=Ke,Ae.getContext("2d").drawImage(I,0,0,ce,Ke),vt("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ce+"x"+Ke+")."),Ae}else return"data"in I&&vt("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),I;return I}function M(I){return I.generateMipmaps}function _(I){s.generateMipmap(I)}function T(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(I,E,X,he,ge=!1){if(I!==null){if(s[I]!==void 0)return s[I];vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ce=E;if(E===s.RED&&(X===s.FLOAT&&(ce=s.R32F),X===s.HALF_FLOAT&&(ce=s.R16F),X===s.UNSIGNED_BYTE&&(ce=s.R8)),E===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(ce=s.R8UI),X===s.UNSIGNED_SHORT&&(ce=s.R16UI),X===s.UNSIGNED_INT&&(ce=s.R32UI),X===s.BYTE&&(ce=s.R8I),X===s.SHORT&&(ce=s.R16I),X===s.INT&&(ce=s.R32I)),E===s.RG&&(X===s.FLOAT&&(ce=s.RG32F),X===s.HALF_FLOAT&&(ce=s.RG16F),X===s.UNSIGNED_BYTE&&(ce=s.RG8)),E===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(ce=s.RG8UI),X===s.UNSIGNED_SHORT&&(ce=s.RG16UI),X===s.UNSIGNED_INT&&(ce=s.RG32UI),X===s.BYTE&&(ce=s.RG8I),X===s.SHORT&&(ce=s.RG16I),X===s.INT&&(ce=s.RG32I)),E===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(ce=s.RGB8UI),X===s.UNSIGNED_SHORT&&(ce=s.RGB16UI),X===s.UNSIGNED_INT&&(ce=s.RGB32UI),X===s.BYTE&&(ce=s.RGB8I),X===s.SHORT&&(ce=s.RGB16I),X===s.INT&&(ce=s.RGB32I)),E===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(ce=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(ce=s.RGBA16UI),X===s.UNSIGNED_INT&&(ce=s.RGBA32UI),X===s.BYTE&&(ce=s.RGBA8I),X===s.SHORT&&(ce=s.RGBA16I),X===s.INT&&(ce=s.RGBA32I)),E===s.RGB&&(X===s.UNSIGNED_INT_5_9_9_9_REV&&(ce=s.RGB9_E5),X===s.UNSIGNED_INT_10F_11F_11F_REV&&(ce=s.R11F_G11F_B10F)),E===s.RGBA){const Ke=ge?Jl:Ut.getTransfer(he);X===s.FLOAT&&(ce=s.RGBA32F),X===s.HALF_FLOAT&&(ce=s.RGBA16F),X===s.UNSIGNED_BYTE&&(ce=Ke===Ht?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)}return(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function R(I,E){let X;return I?E===null||E===Wi||E===po?X=s.DEPTH24_STENCIL8:E===zi?X=s.DEPTH32F_STENCIL8:E===ho&&(X=s.DEPTH24_STENCIL8,vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Wi||E===po?X=s.DEPTH_COMPONENT24:E===zi?X=s.DEPTH_COMPONENT32F:E===ho&&(X=s.DEPTH_COMPONENT16),X}function U(I,E){return M(I)===!0||I.isFramebufferTexture&&I.minFilter!==Tn&&I.minFilter!==In?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function L(I){const E=I.target;E.removeEventListener("dispose",L),H(E),E.isVideoTexture&&x.delete(E)}function O(I){const E=I.target;E.removeEventListener("dispose",O),P(E)}function H(I){const E=r.get(I);if(E.__webglInit===void 0)return;const X=I.source,he=y.get(X);if(he){const ge=he[E.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&b(I),Object.keys(he).length===0&&y.delete(X)}r.remove(I)}function b(I){const E=r.get(I);s.deleteTexture(E.__webglTexture);const X=I.source,he=y.get(X);delete he[E.__cacheKey],u.memory.textures--}function P(I){const E=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(E.__webglFramebuffer[he]))for(let ge=0;ge<E.__webglFramebuffer[he].length;ge++)s.deleteFramebuffer(E.__webglFramebuffer[he][ge]);else s.deleteFramebuffer(E.__webglFramebuffer[he]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[he])}else{if(Array.isArray(E.__webglFramebuffer))for(let he=0;he<E.__webglFramebuffer.length;he++)s.deleteFramebuffer(E.__webglFramebuffer[he]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let he=0;he<E.__webglColorRenderbuffer.length;he++)E.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[he]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const X=I.textures;for(let he=0,ge=X.length;he<ge;he++){const ce=r.get(X[he]);ce.__webglTexture&&(s.deleteTexture(ce.__webglTexture),u.memory.textures--),r.remove(X[he])}r.remove(I)}let B=0;function $(){B=0}function K(){const I=B;return I>=o.maxTextures&&vt("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+o.maxTextures),B+=1,I}function ue(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function de(I,E){const X=r.get(I);if(I.isVideoTexture&&_t(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&X.__version!==I.version){const he=I.image;if(he===null)vt("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)vt("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(X,I,E);return}}else I.isExternalTexture&&(X.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+E)}function re(I,E){const X=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){ie(X,I,E);return}else I.isExternalTexture&&(X.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+E)}function Q(I,E){const X=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){ie(X,I,E);return}t.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+E)}function q(I,E){const X=r.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&X.__version!==I.version){fe(X,I,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+E)}const me={[Ud]:s.REPEAT,[dr]:s.CLAMP_TO_EDGE,[Od]:s.MIRRORED_REPEAT},le={[Tn]:s.NEAREST,[Qv]:s.NEAREST_MIPMAP_NEAREST,[Ml]:s.NEAREST_MIPMAP_LINEAR,[In]:s.LINEAR,[Vu]:s.LINEAR_MIPMAP_NEAREST,[Ss]:s.LINEAR_MIPMAP_LINEAR},k={[t_]:s.NEVER,[a_]:s.ALWAYS,[n_]:s.LESS,[Cf]:s.LEQUAL,[i_]:s.EQUAL,[Rf]:s.GEQUAL,[r_]:s.GREATER,[s_]:s.NOTEQUAL};function se(I,E){if(E.type===zi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===In||E.magFilter===Vu||E.magFilter===Ml||E.magFilter===Ss||E.minFilter===In||E.minFilter===Vu||E.minFilter===Ml||E.minFilter===Ss)&&vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,me[E.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,me[E.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,me[E.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,le[E.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,le[E.minFilter]),E.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,k[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Tn||E.minFilter!==Ml&&E.minFilter!==Ss||E.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Re(I,E){let X=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",L));const he=E.source;let ge=y.get(he);ge===void 0&&(ge={},y.set(he,ge));const ce=ue(E);if(ce!==I.__cacheKey){ge[ce]===void 0&&(ge[ce]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,X=!0),ge[ce].usedTimes++;const Ke=ge[I.__cacheKey];Ke!==void 0&&(ge[I.__cacheKey].usedTimes--,Ke.usedTimes===0&&b(E)),I.__cacheKey=ce,I.__webglTexture=ge[ce].texture}return X}function We(I,E,X){return Math.floor(Math.floor(I/X)/E)}function Je(I,E,X,he){const ce=I.updateRanges;if(ce.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,X,he,E.data);else{ce.sort((ye,Pe)=>ye.start-Pe.start);let Ke=0;for(let ye=1;ye<ce.length;ye++){const Pe=ce[Ke],Xe=ce[ye],ze=Pe.start+Pe.count,Ne=We(Xe.start,E.width,4),xt=We(Pe.start,E.width,4);Xe.start<=ze+1&&Ne===xt&&We(Xe.start+Xe.count-1,E.width,4)===Ne?Pe.count=Math.max(Pe.count,Xe.start+Xe.count-Pe.start):(++Ke,ce[Ke]=Xe)}ce.length=Ke+1;const Ae=s.getParameter(s.UNPACK_ROW_LENGTH),He=s.getParameter(s.UNPACK_SKIP_PIXELS),at=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let ye=0,Pe=ce.length;ye<Pe;ye++){const Xe=ce[ye],ze=Math.floor(Xe.start/4),Ne=Math.ceil(Xe.count/4),xt=ze%E.width,G=Math.floor(ze/E.width),Ue=Ne,Ee=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,xt),s.pixelStorei(s.UNPACK_SKIP_ROWS,G),t.texSubImage2D(s.TEXTURE_2D,0,xt,G,Ue,Ee,X,he,E.data)}I.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ae),s.pixelStorei(s.UNPACK_SKIP_PIXELS,He),s.pixelStorei(s.UNPACK_SKIP_ROWS,at)}}function ie(I,E,X){let he=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(he=s.TEXTURE_3D);const ge=Re(I,E),ce=E.source;t.bindTexture(he,I.__webglTexture,s.TEXTURE0+X);const Ke=r.get(ce);if(ce.version!==Ke.__version||ge===!0){t.activeTexture(s.TEXTURE0+X);const Ae=Ut.getPrimaries(Ut.workingColorSpace),He=E.colorSpace===Wr?null:Ut.getPrimaries(E.colorSpace),at=E.colorSpace===Wr||Ae===He?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let ye=C(E.image,!1,o.maxTextureSize);ye=Tt(E,ye);const Pe=l.convert(E.format,E.colorSpace),Xe=l.convert(E.type);let ze=D(E.internalFormat,Pe,Xe,E.colorSpace,E.isVideoTexture);se(he,E);let Ne;const xt=E.mipmaps,G=E.isVideoTexture!==!0,Ue=Ke.__version===void 0||ge===!0,Ee=ce.dataReady,Ie=U(E,ye);if(E.isDepthTexture)ze=R(E.format===Ms,E.type),Ue&&(G?t.texStorage2D(s.TEXTURE_2D,1,ze,ye.width,ye.height):t.texImage2D(s.TEXTURE_2D,0,ze,ye.width,ye.height,0,Pe,Xe,null));else if(E.isDataTexture)if(xt.length>0){G&&Ue&&t.texStorage2D(s.TEXTURE_2D,Ie,ze,xt[0].width,xt[0].height);for(let Se=0,pe=xt.length;Se<pe;Se++)Ne=xt[Se],G?Ee&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,Ne.width,Ne.height,Pe,Xe,Ne.data):t.texImage2D(s.TEXTURE_2D,Se,ze,Ne.width,Ne.height,0,Pe,Xe,Ne.data);E.generateMipmaps=!1}else G?(Ue&&t.texStorage2D(s.TEXTURE_2D,Ie,ze,ye.width,ye.height),Ee&&Je(E,ye,Pe,Xe)):t.texImage2D(s.TEXTURE_2D,0,ze,ye.width,ye.height,0,Pe,Xe,ye.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){G&&Ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,ze,xt[0].width,xt[0].height,ye.depth);for(let Se=0,pe=xt.length;Se<pe;Se++)if(Ne=xt[Se],E.format!==Ti)if(Pe!==null)if(G){if(Ee)if(E.layerUpdates.size>0){const De=Zm(Ne.width,Ne.height,E.format,E.type);for(const ut of E.layerUpdates){const At=Ne.data.subarray(ut*De/Ne.data.BYTES_PER_ELEMENT,(ut+1)*De/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,ut,Ne.width,Ne.height,1,Pe,At)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,Ne.width,Ne.height,ye.depth,Pe,Ne.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Se,ze,Ne.width,Ne.height,ye.depth,0,Ne.data,0,0);else vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Ee&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,Ne.width,Ne.height,ye.depth,Pe,Xe,Ne.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Se,ze,Ne.width,Ne.height,ye.depth,0,Pe,Xe,Ne.data)}else{G&&Ue&&t.texStorage2D(s.TEXTURE_2D,Ie,ze,xt[0].width,xt[0].height);for(let Se=0,pe=xt.length;Se<pe;Se++)Ne=xt[Se],E.format!==Ti?Pe!==null?G?Ee&&t.compressedTexSubImage2D(s.TEXTURE_2D,Se,0,0,Ne.width,Ne.height,Pe,Ne.data):t.compressedTexImage2D(s.TEXTURE_2D,Se,ze,Ne.width,Ne.height,0,Ne.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Ee&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,Ne.width,Ne.height,Pe,Xe,Ne.data):t.texImage2D(s.TEXTURE_2D,Se,ze,Ne.width,Ne.height,0,Pe,Xe,Ne.data)}else if(E.isDataArrayTexture)if(G){if(Ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,ze,ye.width,ye.height,ye.depth),Ee)if(E.layerUpdates.size>0){const Se=Zm(ye.width,ye.height,E.format,E.type);for(const pe of E.layerUpdates){const De=ye.data.subarray(pe*Se/ye.data.BYTES_PER_ELEMENT,(pe+1)*Se/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,ye.width,ye.height,1,Pe,Xe,De)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Pe,Xe,ye.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ze,ye.width,ye.height,ye.depth,0,Pe,Xe,ye.data);else if(E.isData3DTexture)G?(Ue&&t.texStorage3D(s.TEXTURE_3D,Ie,ze,ye.width,ye.height,ye.depth),Ee&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Pe,Xe,ye.data)):t.texImage3D(s.TEXTURE_3D,0,ze,ye.width,ye.height,ye.depth,0,Pe,Xe,ye.data);else if(E.isFramebufferTexture){if(Ue)if(G)t.texStorage2D(s.TEXTURE_2D,Ie,ze,ye.width,ye.height);else{let Se=ye.width,pe=ye.height;for(let De=0;De<Ie;De++)t.texImage2D(s.TEXTURE_2D,De,ze,Se,pe,0,Pe,Xe,null),Se>>=1,pe>>=1}}else if(xt.length>0){if(G&&Ue){const Se=$e(xt[0]);t.texStorage2D(s.TEXTURE_2D,Ie,ze,Se.width,Se.height)}for(let Se=0,pe=xt.length;Se<pe;Se++)Ne=xt[Se],G?Ee&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,Pe,Xe,Ne):t.texImage2D(s.TEXTURE_2D,Se,ze,Pe,Xe,Ne);E.generateMipmaps=!1}else if(G){if(Ue){const Se=$e(ye);t.texStorage2D(s.TEXTURE_2D,Ie,ze,Se.width,Se.height)}Ee&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Pe,Xe,ye)}else t.texImage2D(s.TEXTURE_2D,0,ze,Pe,Xe,ye);M(E)&&_(he),Ke.__version=ce.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function fe(I,E,X){if(E.image.length!==6)return;const he=Re(I,E),ge=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+X);const ce=r.get(ge);if(ge.version!==ce.__version||he===!0){t.activeTexture(s.TEXTURE0+X);const Ke=Ut.getPrimaries(Ut.workingColorSpace),Ae=E.colorSpace===Wr?null:Ut.getPrimaries(E.colorSpace),He=E.colorSpace===Wr||Ke===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const at=E.isCompressedTexture||E.image[0].isCompressedTexture,ye=E.image[0]&&E.image[0].isDataTexture,Pe=[];for(let pe=0;pe<6;pe++)!at&&!ye?Pe[pe]=C(E.image[pe],!0,o.maxCubemapSize):Pe[pe]=ye?E.image[pe].image:E.image[pe],Pe[pe]=Tt(E,Pe[pe]);const Xe=Pe[0],ze=l.convert(E.format,E.colorSpace),Ne=l.convert(E.type),xt=D(E.internalFormat,ze,Ne,E.colorSpace),G=E.isVideoTexture!==!0,Ue=ce.__version===void 0||he===!0,Ee=ge.dataReady;let Ie=U(E,Xe);se(s.TEXTURE_CUBE_MAP,E);let Se;if(at){G&&Ue&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,xt,Xe.width,Xe.height);for(let pe=0;pe<6;pe++){Se=Pe[pe].mipmaps;for(let De=0;De<Se.length;De++){const ut=Se[De];E.format!==Ti?ze!==null?G?Ee&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,0,0,ut.width,ut.height,ze,ut.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,xt,ut.width,ut.height,0,ut.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,0,0,ut.width,ut.height,ze,Ne,ut.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,xt,ut.width,ut.height,0,ze,Ne,ut.data)}}}else{if(Se=E.mipmaps,G&&Ue){Se.length>0&&Ie++;const pe=$e(Pe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,xt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(ye){G?Ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Pe[pe].width,Pe[pe].height,ze,Ne,Pe[pe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,xt,Pe[pe].width,Pe[pe].height,0,ze,Ne,Pe[pe].data);for(let De=0;De<Se.length;De++){const At=Se[De].image[pe].image;G?Ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,0,0,At.width,At.height,ze,Ne,At.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,xt,At.width,At.height,0,ze,Ne,At.data)}}else{G?Ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ze,Ne,Pe[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,xt,ze,Ne,Pe[pe]);for(let De=0;De<Se.length;De++){const ut=Se[De];G?Ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,0,0,ze,Ne,ut.image[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,xt,ze,Ne,ut.image[pe])}}}M(E)&&_(s.TEXTURE_CUBE_MAP),ce.__version=ge.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function _e(I,E,X,he,ge,ce){const Ke=l.convert(X.format,X.colorSpace),Ae=l.convert(X.type),He=D(X.internalFormat,Ke,Ae,X.colorSpace),at=r.get(E),ye=r.get(X);if(ye.__renderTarget=E,!at.__hasExternalTextures){const Pe=Math.max(1,E.width>>ce),Xe=Math.max(1,E.height>>ce);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?t.texImage3D(ge,ce,He,Pe,Xe,E.depth,0,Ke,Ae,null):t.texImage2D(ge,ce,He,Pe,Xe,0,Ke,Ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),Gt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,ge,ye.__webglTexture,0,z(E)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,ge,ye.__webglTexture,ce),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ce(I,E,X){if(s.bindRenderbuffer(s.RENDERBUFFER,I),E.depthBuffer){const he=E.depthTexture,ge=he&&he.isDepthTexture?he.type:null,ce=R(E.stencilBuffer,ge),Ke=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Gt(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,z(E),ce,E.width,E.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,z(E),ce,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ce,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ke,s.RENDERBUFFER,I)}else{const he=E.textures;for(let ge=0;ge<he.length;ge++){const ce=he[ge],Ke=l.convert(ce.format,ce.colorSpace),Ae=l.convert(ce.type),He=D(ce.internalFormat,Ke,Ae,ce.colorSpace);Gt(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,z(E),He,E.width,E.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,z(E),He,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,He,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function j(I,E,X){const he=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=r.get(E.depthTexture);if(ge.__renderTarget=E,(!ge.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),he){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,E.depthTexture.addEventListener("dispose",L)),ge.__webglTexture===void 0){ge.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),se(s.TEXTURE_CUBE_MAP,E.depthTexture);const at=l.convert(E.depthTexture.format),ye=l.convert(E.depthTexture.type);let Pe;E.depthTexture.format===gr?Pe=s.DEPTH_COMPONENT24:E.depthTexture.format===Ms&&(Pe=s.DEPTH24_STENCIL8);for(let Xe=0;Xe<6;Xe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,0,Pe,E.width,E.height,0,at,ye,null)}}else de(E.depthTexture,0);const ce=ge.__webglTexture,Ke=z(E),Ae=he?s.TEXTURE_CUBE_MAP_POSITIVE_X+X:s.TEXTURE_2D,He=E.depthTexture.format===Ms?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===gr)Gt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,He,Ae,ce,0,Ke):s.framebufferTexture2D(s.FRAMEBUFFER,He,Ae,ce,0);else if(E.depthTexture.format===Ms)Gt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,He,Ae,ce,0,Ke):s.framebufferTexture2D(s.FRAMEBUFFER,He,Ae,ce,0);else throw new Error("Unknown depthTexture format")}function Fe(I){const E=r.get(I),X=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const he=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),he){const ge=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,he.removeEventListener("dispose",ge)};he.addEventListener("dispose",ge),E.__depthDisposeCallback=ge}E.__boundDepthTexture=he}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(X)for(let he=0;he<6;he++)j(E.__webglFramebuffer[he],I,he);else{const he=I.texture.mipmaps;he&&he.length>0?j(E.__webglFramebuffer[0],I,0):j(E.__webglFramebuffer,I,0)}else if(X){E.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[he]),E.__webglDepthbuffer[he]===void 0)E.__webglDepthbuffer[he]=s.createRenderbuffer(),Ce(E.__webglDepthbuffer[he],I,!1);else{const ge=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=E.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,ce)}}else{const he=I.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Ce(E.__webglDepthbuffer,I,!1);else{const ge=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,ce)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Dt(I,E,X){const he=r.get(I);E!==void 0&&_e(he.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&Fe(I)}function Be(I){const E=I.texture,X=r.get(I),he=r.get(E);I.addEventListener("dispose",O);const ge=I.textures,ce=I.isWebGLCubeRenderTarget===!0,Ke=ge.length>1;if(Ke||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=E.version,u.memory.textures++),ce){X.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[Ae]=[];for(let He=0;He<E.mipmaps.length;He++)X.__webglFramebuffer[Ae][He]=s.createFramebuffer()}else X.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let Ae=0;Ae<E.mipmaps.length;Ae++)X.__webglFramebuffer[Ae]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(Ke)for(let Ae=0,He=ge.length;Ae<He;Ae++){const at=r.get(ge[Ae]);at.__webglTexture===void 0&&(at.__webglTexture=s.createTexture(),u.memory.textures++)}if(I.samples>0&&Gt(I)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ge.length;Ae++){const He=ge[Ae];X.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[Ae]);const at=l.convert(He.format,He.colorSpace),ye=l.convert(He.type),Pe=D(He.internalFormat,at,ye,He.colorSpace,I.isXRRenderTarget===!0),Xe=z(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Xe,Pe,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,X.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),Ce(X.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ce){t.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),se(s.TEXTURE_CUBE_MAP,E);for(let Ae=0;Ae<6;Ae++)if(E.mipmaps&&E.mipmaps.length>0)for(let He=0;He<E.mipmaps.length;He++)_e(X.__webglFramebuffer[Ae][He],I,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,He);else _e(X.__webglFramebuffer[Ae],I,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);M(E)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ke){for(let Ae=0,He=ge.length;Ae<He;Ae++){const at=ge[Ae],ye=r.get(at);let Pe=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Pe=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Pe,ye.__webglTexture),se(Pe,at),_e(X.__webglFramebuffer,I,at,s.COLOR_ATTACHMENT0+Ae,Pe,0),M(at)&&_(Pe)}t.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ae=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ae,he.__webglTexture),se(Ae,E),E.mipmaps&&E.mipmaps.length>0)for(let He=0;He<E.mipmaps.length;He++)_e(X.__webglFramebuffer[He],I,E,s.COLOR_ATTACHMENT0,Ae,He);else _e(X.__webglFramebuffer,I,E,s.COLOR_ATTACHMENT0,Ae,0);M(E)&&_(Ae),t.unbindTexture()}I.depthBuffer&&Fe(I)}function ft(I){const E=I.textures;for(let X=0,he=E.length;X<he;X++){const ge=E[X];if(M(ge)){const ce=T(I),Ke=r.get(ge).__webglTexture;t.bindTexture(ce,Ke),_(ce),t.unbindTexture()}}}const Ot=[],ht=[];function Vt(I){if(I.samples>0){if(Gt(I)===!1){const E=I.textures,X=I.width,he=I.height;let ge=s.COLOR_BUFFER_BIT;const ce=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ke=r.get(I),Ae=E.length>1;if(Ae)for(let at=0;at<E.length;at++)t.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const He=I.texture.mipmaps;He&&He.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let at=0;at<E.length;at++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ke.__webglColorRenderbuffer[at]);const ye=r.get(E[at]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ye,0)}s.blitFramebuffer(0,0,X,he,0,0,X,he,ge,s.NEAREST),p===!0&&(Ot.length=0,ht.length=0,Ot.push(s.COLOR_ATTACHMENT0+at),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Ot.push(ce),ht.push(ce),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ht)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ot))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let at=0;at<E.length;at++){t.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,Ke.__webglColorRenderbuffer[at]);const ye=r.get(E[at]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,ye,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&p){const E=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function z(I){return Math.min(o.maxSamples,I.samples)}function Gt(I){const E=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function _t(I){const E=u.render.frame;x.get(I)!==E&&(x.set(I,E),I.update())}function Tt(I,E){const X=I.colorSpace,he=I.format,ge=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||X!==va&&X!==Wr&&(Ut.getTransfer(X)===Ht?(he!==Ti||ge!==ai)&&vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):It("WebGLTextures: Unsupported texture color space:",X)),E}function $e(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(m.width=I.naturalWidth||I.width,m.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(m.width=I.displayWidth,m.height=I.displayHeight):(m.width=I.width,m.height=I.height),m}this.allocateTextureUnit=K,this.resetTextureUnits=$,this.setTexture2D=de,this.setTexture2DArray=re,this.setTexture3D=Q,this.setTextureCube=q,this.rebindTextures=Dt,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function HE(s,e){function t(r,o=Wr){let l;const u=Ut.getTransfer(o);if(r===ai)return s.UNSIGNED_BYTE;if(r===Ef)return s.UNSIGNED_SHORT_4_4_4_4;if(r===wf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===j0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===V0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===B0)return s.BYTE;if(r===z0)return s.SHORT;if(r===ho)return s.UNSIGNED_SHORT;if(r===Mf)return s.INT;if(r===Wi)return s.UNSIGNED_INT;if(r===zi)return s.FLOAT;if(r===mr)return s.HALF_FLOAT;if(r===H0)return s.ALPHA;if(r===G0)return s.RGB;if(r===Ti)return s.RGBA;if(r===gr)return s.DEPTH_COMPONENT;if(r===Ms)return s.DEPTH_STENCIL;if(r===W0)return s.RED;if(r===bf)return s.RED_INTEGER;if(r===xa)return s.RG;if(r===Tf)return s.RG_INTEGER;if(r===Af)return s.RGBA_INTEGER;if(r===Wl||r===Xl||r===ql||r===Yl)if(u===Ht)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Wl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Xl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Yl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Wl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Xl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ql)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Yl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Fd||r===kd||r===Bd||r===zd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Fd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===kd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Bd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===zd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===jd||r===Vd||r===Hd||r===Gd||r===Wd||r===Xd||r===qd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===jd||r===Vd)return u===Ht?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Hd)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Gd)return l.COMPRESSED_R11_EAC;if(r===Wd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Xd)return l.COMPRESSED_RG11_EAC;if(r===qd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Yd||r===$d||r===Kd||r===Zd||r===Qd||r===Jd||r===ef||r===tf||r===nf||r===rf||r===sf||r===af||r===of||r===lf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Yd)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===$d)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Kd)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Zd)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Qd)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Jd)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ef)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===tf)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===nf)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===rf)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===sf)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===af)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===of)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===lf)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===cf||r===uf||r===df)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===cf)return u===Ht?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===uf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===df)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ff||r===hf||r===pf||r===mf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===ff)return l.COMPRESSED_RED_RGTC1_EXT;if(r===hf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===pf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===mf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===po?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const GE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WE=`
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

}`;class XE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new ng(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new qi({vertexShader:GE,fragmentShader:WE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mt(new Xr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qE extends bs{constructor(e,t){super();const r=this;let o=null,l=1,u=null,d="local-floor",p=1,m=null,x=null,v=null,y=null,S=null,A=null;const C=typeof XRWebGLBinding<"u",M=new XE,_={},T=t.getContextAttributes();let D=null,R=null;const U=[],L=[],O=new gt;let H=null;const b=new Qn;b.viewport=new tn;const P=new Qn;P.viewport=new tn;const B=[b,P],$=new e1;let K=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let fe=U[ie];return fe===void 0&&(fe=new ud,U[ie]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ie){let fe=U[ie];return fe===void 0&&(fe=new ud,U[ie]=fe),fe.getGripSpace()},this.getHand=function(ie){let fe=U[ie];return fe===void 0&&(fe=new ud,U[ie]=fe),fe.getHandSpace()};function de(ie){const fe=L.indexOf(ie.inputSource);if(fe===-1)return;const _e=U[fe];_e!==void 0&&(_e.update(ie.inputSource,ie.frame,m||u),_e.dispatchEvent({type:ie.type,data:ie.inputSource}))}function re(){o.removeEventListener("select",de),o.removeEventListener("selectstart",de),o.removeEventListener("selectend",de),o.removeEventListener("squeeze",de),o.removeEventListener("squeezestart",de),o.removeEventListener("squeezeend",de),o.removeEventListener("end",re),o.removeEventListener("inputsourceschange",Q);for(let ie=0;ie<U.length;ie++){const fe=L[ie];fe!==null&&(L[ie]=null,U[ie].disconnect(fe))}K=null,ue=null,M.reset();for(const ie in _)delete _[ie];e.setRenderTarget(D),S=null,y=null,v=null,o=null,R=null,Je.stop(),r.isPresenting=!1,e.setPixelRatio(H),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){l=ie,r.isPresenting===!0&&vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){d=ie,r.isPresenting===!0&&vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(ie){m=ie},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return A},this.getSession=function(){return o},this.setSession=async function(ie){if(o=ie,o!==null){if(D=e.getRenderTarget(),o.addEventListener("select",de),o.addEventListener("selectstart",de),o.addEventListener("selectend",de),o.addEventListener("squeeze",de),o.addEventListener("squeezestart",de),o.addEventListener("squeezeend",de),o.addEventListener("end",re),o.addEventListener("inputsourceschange",Q),T.xrCompatible!==!0&&await t.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(O),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Ce=null,j=null;T.depth&&(j=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=T.stencil?Ms:gr,Ce=T.stencil?po:Wi);const Fe={colorFormat:t.RGBA8,depthFormat:j,scaleFactor:l};v=this.getBinding(),y=v.createProjectionLayer(Fe),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),R=new Hi(y.textureWidth,y.textureHeight,{format:Ti,type:ai,depthTexture:new xo(y.textureWidth,y.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const _e={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,_e),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),R=new Hi(S.framebufferWidth,S.framebufferHeight,{format:Ti,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await o.requestReferenceSpace(d),Je.setContext(o),Je.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Q(ie){for(let fe=0;fe<ie.removed.length;fe++){const _e=ie.removed[fe],Ce=L.indexOf(_e);Ce>=0&&(L[Ce]=null,U[Ce].disconnect(_e))}for(let fe=0;fe<ie.added.length;fe++){const _e=ie.added[fe];let Ce=L.indexOf(_e);if(Ce===-1){for(let Fe=0;Fe<U.length;Fe++)if(Fe>=L.length){L.push(_e),Ce=Fe;break}else if(L[Fe]===null){L[Fe]=_e,Ce=Fe;break}if(Ce===-1)break}const j=U[Ce];j&&j.connect(_e)}}const q=new Z,me=new Z;function le(ie,fe,_e){q.setFromMatrixPosition(fe.matrixWorld),me.setFromMatrixPosition(_e.matrixWorld);const Ce=q.distanceTo(me),j=fe.projectionMatrix.elements,Fe=_e.projectionMatrix.elements,Dt=j[14]/(j[10]-1),Be=j[14]/(j[10]+1),ft=(j[9]+1)/j[5],Ot=(j[9]-1)/j[5],ht=(j[8]-1)/j[0],Vt=(Fe[8]+1)/Fe[0],z=Dt*ht,Gt=Dt*Vt,_t=Ce/(-ht+Vt),Tt=_t*-ht;if(fe.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Tt),ie.translateZ(_t),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),j[10]===-1)ie.projectionMatrix.copy(fe.projectionMatrix),ie.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const $e=Dt+_t,I=Be+_t,E=z-Tt,X=Gt+(Ce-Tt),he=ft*Be/I*$e,ge=Ot*Be/I*$e;ie.projectionMatrix.makePerspective(E,X,he,ge,$e,I),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function k(ie,fe){fe===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(fe.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(o===null)return;let fe=ie.near,_e=ie.far;M.texture!==null&&(M.depthNear>0&&(fe=M.depthNear),M.depthFar>0&&(_e=M.depthFar)),$.near=P.near=b.near=fe,$.far=P.far=b.far=_e,(K!==$.near||ue!==$.far)&&(o.updateRenderState({depthNear:$.near,depthFar:$.far}),K=$.near,ue=$.far),$.layers.mask=ie.layers.mask|6,b.layers.mask=$.layers.mask&3,P.layers.mask=$.layers.mask&5;const Ce=ie.parent,j=$.cameras;k($,Ce);for(let Fe=0;Fe<j.length;Fe++)k(j[Fe],Ce);j.length===2?le($,b,P):$.projectionMatrix.copy(b.projectionMatrix),se(ie,$,Ce)};function se(ie,fe,_e){_e===null?ie.matrix.copy(fe.matrixWorld):(ie.matrix.copy(_e.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(fe.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(fe.projectionMatrix),ie.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=tc*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(y===null&&S===null))return p},this.setFoveation=function(ie){p=ie,y!==null&&(y.fixedFoveation=ie),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ie)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh($)},this.getCameraTexture=function(ie){return _[ie]};let Re=null;function We(ie,fe){if(x=fe.getViewerPose(m||u),A=fe,x!==null){const _e=x.views;S!==null&&(e.setRenderTargetFramebuffer(R,S.framebuffer),e.setRenderTarget(R));let Ce=!1;_e.length!==$.cameras.length&&($.cameras.length=0,Ce=!0);for(let Be=0;Be<_e.length;Be++){const ft=_e[Be];let Ot=null;if(S!==null)Ot=S.getViewport(ft);else{const Vt=v.getViewSubImage(y,ft);Ot=Vt.viewport,Be===0&&(e.setRenderTargetTextures(R,Vt.colorTexture,Vt.depthStencilTexture),e.setRenderTarget(R))}let ht=B[Be];ht===void 0&&(ht=new Qn,ht.layers.enable(Be),ht.viewport=new tn,B[Be]=ht),ht.matrix.fromArray(ft.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(ft.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),Be===0&&($.matrix.copy(ht.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Ce===!0&&$.cameras.push(ht)}const j=o.enabledFeatures;if(j&&j.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){v=r.getBinding();const Be=v.getDepthInformation(_e[0]);Be&&Be.isValid&&Be.texture&&M.init(Be,o.renderState)}if(j&&j.includes("camera-access")&&C){e.state.unbindTexture(),v=r.getBinding();for(let Be=0;Be<_e.length;Be++){const ft=_e[Be].camera;if(ft){let Ot=_[ft];Ot||(Ot=new ng,_[ft]=Ot);const ht=v.getCameraImage(ft);Ot.sourceTexture=ht}}}}for(let _e=0;_e<U.length;_e++){const Ce=L[_e],j=U[_e];Ce!==null&&j!==void 0&&j.update(Ce,fe,m||u)}Re&&Re(ie,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),A=null}const Je=new ig;Je.setAnimationLoop(We),this.setAnimationLoop=function(ie){Re=ie},this.dispose=function(){}}}const gs=new Xi,YE=new Jt;function $E(s,e){function t(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,Q0(s)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function o(M,_,T,D,R){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(M,_):_.isMeshToonMaterial?(l(M,_),v(M,_)):_.isMeshPhongMaterial?(l(M,_),x(M,_)):_.isMeshStandardMaterial?(l(M,_),y(M,_),_.isMeshPhysicalMaterial&&S(M,_,R)):_.isMeshMatcapMaterial?(l(M,_),A(M,_)):_.isMeshDepthMaterial?l(M,_):_.isMeshDistanceMaterial?(l(M,_),C(M,_)):_.isMeshNormalMaterial?l(M,_):_.isLineBasicMaterial?(u(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?p(M,_,T,D):_.isSpriteMaterial?m(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,t(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,t(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,t(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===Jn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,t(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===Jn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,t(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,t(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const T=e.get(_),D=T.envMap,R=T.envMapRotation;D&&(M.envMap.value=D,gs.copy(R),gs.x*=-1,gs.y*=-1,gs.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),M.envMapRotation.value.setFromMatrix4(YE.makeRotationFromEuler(gs)),M.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,M.aoMapTransform))}function u(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,t(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function p(M,_,T,D){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*T,M.scale.value=D*.5,_.map&&(M.map.value=_.map,t(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,t(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function m(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,t(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,t(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function x(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function v(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function y(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function S(M,_,T){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Jn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=T.texture,M.transmissionSamplerSize.value.set(T.width,T.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,_){_.matcap&&(M.matcap.value=_.matcap)}function C(M,_){const T=e.get(_).light;M.referencePosition.value.setFromMatrixPosition(T.matrixWorld),M.nearDistance.value=T.shadow.camera.near,M.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function KE(s,e,t,r){let o={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(T,D){const R=D.program;r.uniformBlockBinding(T,R)}function m(T,D){let R=o[T.id];R===void 0&&(A(T),R=x(T),o[T.id]=R,T.addEventListener("dispose",M));const U=D.program;r.updateUBOMapping(T,U);const L=e.render.frame;l[T.id]!==L&&(y(T),l[T.id]=L)}function x(T){const D=v();T.__bindingPointIndex=D;const R=s.createBuffer(),U=T.__size,L=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,U,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,R),R}function v(){for(let T=0;T<d;T++)if(u.indexOf(T)===-1)return u.push(T),T;return It("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(T){const D=o[T.id],R=T.uniforms,U=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let L=0,O=R.length;L<O;L++){const H=Array.isArray(R[L])?R[L]:[R[L]];for(let b=0,P=H.length;b<P;b++){const B=H[b];if(S(B,L,b,U)===!0){const $=B.__offset,K=Array.isArray(B.value)?B.value:[B.value];let ue=0;for(let de=0;de<K.length;de++){const re=K[de],Q=C(re);typeof re=="number"||typeof re=="boolean"?(B.__data[0]=re,s.bufferSubData(s.UNIFORM_BUFFER,$+ue,B.__data)):re.isMatrix3?(B.__data[0]=re.elements[0],B.__data[1]=re.elements[1],B.__data[2]=re.elements[2],B.__data[3]=0,B.__data[4]=re.elements[3],B.__data[5]=re.elements[4],B.__data[6]=re.elements[5],B.__data[7]=0,B.__data[8]=re.elements[6],B.__data[9]=re.elements[7],B.__data[10]=re.elements[8],B.__data[11]=0):(re.toArray(B.__data,ue),ue+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,$,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(T,D,R,U){const L=T.value,O=D+"_"+R;if(U[O]===void 0)return typeof L=="number"||typeof L=="boolean"?U[O]=L:U[O]=L.clone(),!0;{const H=U[O];if(typeof L=="number"||typeof L=="boolean"){if(H!==L)return U[O]=L,!0}else if(H.equals(L)===!1)return H.copy(L),!0}return!1}function A(T){const D=T.uniforms;let R=0;const U=16;for(let O=0,H=D.length;O<H;O++){const b=Array.isArray(D[O])?D[O]:[D[O]];for(let P=0,B=b.length;P<B;P++){const $=b[P],K=Array.isArray($.value)?$.value:[$.value];for(let ue=0,de=K.length;ue<de;ue++){const re=K[ue],Q=C(re),q=R%U,me=q%Q.boundary,le=q+me;R+=me,le!==0&&U-le<Q.storage&&(R+=U-le),$.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=R,R+=Q.storage}}}const L=R%U;return L>0&&(R+=U-L),T.__size=R,T.__cache={},this}function C(T){const D={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(D.boundary=4,D.storage=4):T.isVector2?(D.boundary=8,D.storage=8):T.isVector3||T.isColor?(D.boundary=16,D.storage=12):T.isVector4?(D.boundary=16,D.storage=16):T.isMatrix3?(D.boundary=48,D.storage=48):T.isMatrix4?(D.boundary=64,D.storage=64):T.isTexture?vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):vt("WebGLRenderer: Unsupported uniform value type.",T),D}function M(T){const D=T.target;D.removeEventListener("dispose",M);const R=u.indexOf(D.__bindingPointIndex);u.splice(R,1),s.deleteBuffer(o[D.id]),delete o[D.id],delete l[D.id]}function _(){for(const T in o)s.deleteBuffer(o[T]);u=[],o={},l={}}return{bind:p,update:m,dispose:_}}const ZE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fi=null;function QE(){return Fi===null&&(Fi=new U_(ZE,16,16,xa,mr),Fi.name="DFG_LUT",Fi.minFilter=In,Fi.magFilter=In,Fi.wrapS=dr,Fi.wrapT=dr,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}class JE{constructor(e={}){const{canvas:t=o_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:y=!1,outputBufferType:S=ai}=e;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=u;const C=S,M=new Set([Af,Tf,bf]),_=new Set([ai,Wi,ho,po,Ef,wf]),T=new Uint32Array(4),D=new Int32Array(4);let R=null,U=null;const L=[],O=[];let H=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let P=!1;this._outputColorSpace=Zn;let B=0,$=0,K=null,ue=-1,de=null;const re=new tn,Q=new tn;let q=null;const me=new Et(0);let le=0,k=t.width,se=t.height,Re=1,We=null,Je=null;const ie=new tn(0,0,k,se),fe=new tn(0,0,k,se);let _e=!1;const Ce=new Uf;let j=!1,Fe=!1;const Dt=new Jt,Be=new Z,ft=new tn,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function Vt(){return K===null?Re:1}let z=r;function Gt(N,Y){return t.getContext(N,Y)}try{const N={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yf}`),t.addEventListener("webglcontextlost",ut,!1),t.addEventListener("webglcontextrestored",At,!1),t.addEventListener("webglcontextcreationerror",Rt,!1),z===null){const Y="webgl2";if(z=Gt(Y,N),z===null)throw Gt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw It("WebGLRenderer: "+N.message),N}let _t,Tt,$e,I,E,X,he,ge,ce,Ke,Ae,He,at,ye,Pe,Xe,ze,Ne,xt,G,Ue,Ee,Ie,Se;function pe(){_t=new QS(z),_t.init(),Ee=new HE(z,_t),Tt=new HS(z,_t,e,Ee),$e=new jE(z,_t),Tt.reversedDepthBuffer&&y&&$e.buffers.depth.setReversed(!0),I=new tM(z),E=new TE,X=new VE(z,_t,$e,E,Tt,Ee,I),he=new WS(b),ge=new ZS(b),ce=new s1(z),Ie=new jS(z,ce),Ke=new JS(z,ce,I,Ie),Ae=new iM(z,Ke,ce,I),xt=new nM(z,Tt,X),Xe=new GS(E),He=new bE(b,he,ge,_t,Tt,Ie,Xe),at=new $E(b,E),ye=new CE,Pe=new IE(_t),Ne=new zS(b,he,ge,$e,Ae,A,p),ze=new BE(b,Ae,Tt),Se=new KE(z,I,Tt,$e),G=new VS(z,_t,I),Ue=new eM(z,_t,I),I.programs=He.programs,b.capabilities=Tt,b.extensions=_t,b.properties=E,b.renderLists=ye,b.shadowMap=ze,b.state=$e,b.info=I}pe(),C!==ai&&(H=new sM(C,t.width,t.height,o,l));const De=new qE(b,z);this.xr=De,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const N=_t.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=_t.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return Re},this.setPixelRatio=function(N){N!==void 0&&(Re=N,this.setSize(k,se,!1))},this.getSize=function(N){return N.set(k,se)},this.setSize=function(N,Y,ae=!0){if(De.isPresenting){vt("WebGLRenderer: Can't change size while VR device is presenting.");return}k=N,se=Y,t.width=Math.floor(N*Re),t.height=Math.floor(Y*Re),ae===!0&&(t.style.width=N+"px",t.style.height=Y+"px"),H!==null&&H.setSize(t.width,t.height),this.setViewport(0,0,N,Y)},this.getDrawingBufferSize=function(N){return N.set(k*Re,se*Re).floor()},this.setDrawingBufferSize=function(N,Y,ae){k=N,se=Y,Re=ae,t.width=Math.floor(N*ae),t.height=Math.floor(Y*ae),this.setViewport(0,0,N,Y)},this.setEffects=function(N){if(C===ai){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let Y=0;Y<N.length;Y++)if(N[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}H.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(re)},this.getViewport=function(N){return N.copy(ie)},this.setViewport=function(N,Y,ae,ne){N.isVector4?ie.set(N.x,N.y,N.z,N.w):ie.set(N,Y,ae,ne),$e.viewport(re.copy(ie).multiplyScalar(Re).round())},this.getScissor=function(N){return N.copy(fe)},this.setScissor=function(N,Y,ae,ne){N.isVector4?fe.set(N.x,N.y,N.z,N.w):fe.set(N,Y,ae,ne),$e.scissor(Q.copy(fe).multiplyScalar(Re).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(N){$e.setScissorTest(_e=N)},this.setOpaqueSort=function(N){We=N},this.setTransparentSort=function(N){Je=N},this.getClearColor=function(N){return N.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(N=!0,Y=!0,ae=!0){let ne=0;if(N){let J=!1;if(K!==null){const Le=K.texture.format;J=M.has(Le)}if(J){const Le=K.texture.type,ke=_.has(Le),be=Ne.getClearColor(),qe=Ne.getClearAlpha(),je=be.r,ot=be.g,rt=be.b;ke?(T[0]=je,T[1]=ot,T[2]=rt,T[3]=qe,z.clearBufferuiv(z.COLOR,0,T)):(D[0]=je,D[1]=ot,D[2]=rt,D[3]=qe,z.clearBufferiv(z.COLOR,0,D))}else ne|=z.COLOR_BUFFER_BIT}Y&&(ne|=z.DEPTH_BUFFER_BIT),ae&&(ne|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",At,!1),t.removeEventListener("webglcontextcreationerror",Rt,!1),Ne.dispose(),ye.dispose(),Pe.dispose(),E.dispose(),he.dispose(),ge.dispose(),Ae.dispose(),Ie.dispose(),Se.dispose(),He.dispose(),De.dispose(),De.removeEventListener("sessionstart",Ri),De.removeEventListener("sessionend",$i),On.stop()};function ut(N){N.preventDefault(),Cm("WebGLRenderer: Context Lost."),P=!0}function At(){Cm("WebGLRenderer: Context Restored."),P=!1;const N=I.autoReset,Y=ze.enabled,ae=ze.autoUpdate,ne=ze.needsUpdate,J=ze.type;pe(),I.autoReset=N,ze.enabled=Y,ze.autoUpdate=ae,ze.needsUpdate=ne,ze.type=J}function Rt(N){It("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Un(N){const Y=N.target;Y.removeEventListener("dispose",Un),hn(Y)}function hn(N){Yi(N),E.remove(N)}function Yi(N){const Y=E.get(N).programs;Y!==void 0&&(Y.forEach(function(ae){He.releaseProgram(ae)}),N.isShaderMaterial&&He.releaseShaderCache(N))}this.renderBufferDirect=function(N,Y,ae,ne,J,Le){Y===null&&(Y=Ot);const ke=J.isMesh&&J.matrixWorld.determinant()<0,be=Pi(N,Y,ae,ne,J);$e.setMaterial(ne,ke);let qe=ae.index,je=1;if(ne.wireframe===!0){if(qe=Ke.getWireframeAttribute(ae),qe===void 0)return;je=2}const ot=ae.drawRange,rt=ae.attributes.position;let pt=ot.start*je,Ct=(ot.start+ot.count)*je;Le!==null&&(pt=Math.max(pt,Le.start*je),Ct=Math.min(Ct,(Le.start+Le.count)*je)),qe!==null?(pt=Math.max(pt,0),Ct=Math.min(Ct,qe.count)):rt!=null&&(pt=Math.max(pt,0),Ct=Math.min(Ct,rt.count));const jt=Ct-pt;if(jt<0||jt===1/0)return;Ie.setup(J,ne,be,ae,qe);let kt,Nt=G;if(qe!==null&&(kt=ce.get(qe),Nt=Ue,Nt.setIndex(kt)),J.isMesh)ne.wireframe===!0?($e.setLineWidth(ne.wireframeLinewidth*Vt()),Nt.setMode(z.LINES)):Nt.setMode(z.TRIANGLES);else if(J.isLine){let st=ne.linewidth;st===void 0&&(st=1),$e.setLineWidth(st*Vt()),J.isLineSegments?Nt.setMode(z.LINES):J.isLineLoop?Nt.setMode(z.LINE_LOOP):Nt.setMode(z.LINE_STRIP)}else J.isPoints?Nt.setMode(z.POINTS):J.isSprite&&Nt.setMode(z.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)go("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Nt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))Nt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const st=J._multiDrawStarts,Pt=J._multiDrawCounts,Ge=J._multiDrawCount,tt=qe?ce.get(qe).bytesPerElement:1,qt=E.get(ne).currentProgram.getUniforms();for(let Bt=0;Bt<Ge;Bt++)qt.setValue(z,"_gl_DrawID",Bt),Nt.render(st[Bt]/tt,Pt[Bt])}else if(J.isInstancedMesh)Nt.renderInstances(pt,jt,J.count);else if(ae.isInstancedBufferGeometry){const st=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Pt=Math.min(ae.instanceCount,st);Nt.renderInstances(pt,jt,Pt)}else Nt.render(pt,jt)};function Ai(N,Y,ae){N.transparent===!0&&N.side===ur&&N.forceSinglePass===!1?(N.side=Jn,N.needsUpdate=!0,Ni(N,Y,ae),N.side=Yr,N.needsUpdate=!0,Ni(N,Y,ae),N.side=ur):Ni(N,Y,ae)}this.compile=function(N,Y,ae=null){ae===null&&(ae=N),U=Pe.get(ae),U.init(Y),O.push(U),ae.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(U.pushLight(J),J.castShadow&&U.pushShadow(J))}),N!==ae&&N.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(U.pushLight(J),J.castShadow&&U.pushShadow(J))}),U.setupLights();const ne=new Set;return N.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Le=J.material;if(Le)if(Array.isArray(Le))for(let ke=0;ke<Le.length;ke++){const be=Le[ke];Ai(be,ae,J),ne.add(be)}else Ai(Le,ae,J),ne.add(Le)}),U=O.pop(),ne},this.compileAsync=function(N,Y,ae=null){const ne=this.compile(N,Y,ae);return new Promise(J=>{function Le(){if(ne.forEach(function(ke){E.get(ke).currentProgram.isReady()&&ne.delete(ke)}),ne.size===0){J(N);return}setTimeout(Le,10)}_t.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let xr=null;function Ci(N){xr&&xr(N)}function Ri(){On.stop()}function $i(){On.start()}const On=new ig;On.setAnimationLoop(Ci),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(N){xr=N,De.setAnimationLoop(N),N===null?On.stop():On.start()},De.addEventListener("sessionstart",Ri),De.addEventListener("sessionend",$i),this.render=function(N,Y){if(Y!==void 0&&Y.isCamera!==!0){It("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;const ae=De.enabled===!0&&De.isPresenting===!0,ne=H!==null&&(K===null||ae)&&H.begin(b,K);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(H===null||H.isCompositing()===!1)&&(De.cameraAutoUpdate===!0&&De.updateCamera(Y),Y=De.getCamera()),N.isScene===!0&&N.onBeforeRender(b,N,Y,K),U=Pe.get(N,O.length),U.init(Y),O.push(U),Dt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Ce.setFromProjectionMatrix(Dt,ji,Y.reversedDepth),Fe=this.localClippingEnabled,j=Xe.init(this.clippingPlanes,Fe),R=ye.get(N,L.length),R.init(),L.push(R),De.enabled===!0&&De.isPresenting===!0){const ke=b.xr.getDepthSensingMesh();ke!==null&&vr(ke,Y,-1/0,b.sortObjects)}vr(N,Y,0,b.sortObjects),R.finish(),b.sortObjects===!0&&R.sort(We,Je),ht=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,ht&&Ne.addToRenderList(R,N),this.info.render.frame++,j===!0&&Xe.beginShadows();const J=U.state.shadowsArray;if(ze.render(J,N,Y),j===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&H.hasRenderPass())===!1){const ke=R.opaque,be=R.transmissive;if(U.setupLights(),Y.isArrayCamera){const qe=Y.cameras;if(be.length>0)for(let je=0,ot=qe.length;je<ot;je++){const rt=qe[je];Kr(ke,be,N,rt)}ht&&Ne.render(N);for(let je=0,ot=qe.length;je<ot;je++){const rt=qe[je];$r(R,N,rt,rt.viewport)}}else be.length>0&&Kr(ke,be,N,Y),ht&&Ne.render(N),$r(R,N,Y)}K!==null&&$===0&&(X.updateMultisampleRenderTarget(K),X.updateRenderTargetMipmap(K)),ne&&H.end(b),N.isScene===!0&&N.onAfterRender(b,N,Y),Ie.resetDefaultState(),ue=-1,de=null,O.pop(),O.length>0?(U=O[O.length-1],j===!0&&Xe.setGlobalState(b.clippingPlanes,U.state.camera)):U=null,L.pop(),L.length>0?R=L[L.length-1]:R=null};function vr(N,Y,ae,ne){if(N.visible===!1)return;if(N.layers.test(Y.layers)){if(N.isGroup)ae=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(Y);else if(N.isLight)U.pushLight(N),N.castShadow&&U.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||Ce.intersectsSprite(N)){ne&&ft.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Dt);const ke=Ae.update(N),be=N.material;be.visible&&R.push(N,ke,be,ae,ft.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||Ce.intersectsObject(N))){const ke=Ae.update(N),be=N.material;if(ne&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),ft.copy(N.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),ft.copy(ke.boundingSphere.center)),ft.applyMatrix4(N.matrixWorld).applyMatrix4(Dt)),Array.isArray(be)){const qe=ke.groups;for(let je=0,ot=qe.length;je<ot;je++){const rt=qe[je],pt=be[rt.materialIndex];pt&&pt.visible&&R.push(N,ke,pt,ae,ft.z,rt)}}else be.visible&&R.push(N,ke,be,ae,ft.z,null)}}const Le=N.children;for(let ke=0,be=Le.length;ke<be;ke++)vr(Le[ke],Y,ae,ne)}function $r(N,Y,ae,ne){const{opaque:J,transmissive:Le,transparent:ke}=N;U.setupLightsView(ae),j===!0&&Xe.setGlobalState(b.clippingPlanes,ae),ne&&$e.viewport(re.copy(ne)),J.length>0&&Fn(J,Y,ae),Le.length>0&&Fn(Le,Y,ae),ke.length>0&&Fn(ke,Y,ae),$e.buffers.depth.setTest(!0),$e.buffers.depth.setMask(!0),$e.buffers.color.setMask(!0),$e.setPolygonOffset(!1)}function Kr(N,Y,ae,ne){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[ne.id]===void 0){const pt=_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[ne.id]=new Hi(1,1,{generateMipmaps:!0,type:pt?mr:ai,minFilter:Ss,samples:Tt.samples,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ut.workingColorSpace})}const Le=U.state.transmissionRenderTarget[ne.id],ke=ne.viewport||re;Le.setSize(ke.z*b.transmissionResolutionScale,ke.w*b.transmissionResolutionScale);const be=b.getRenderTarget(),qe=b.getActiveCubeFace(),je=b.getActiveMipmapLevel();b.setRenderTarget(Le),b.getClearColor(me),le=b.getClearAlpha(),le<1&&b.setClearColor(16777215,.5),b.clear(),ht&&Ne.render(ae);const ot=b.toneMapping;b.toneMapping=Vi;const rt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),U.setupLightsView(ne),j===!0&&Xe.setGlobalState(b.clippingPlanes,ne),Fn(N,ae,ne),X.updateMultisampleRenderTarget(Le),X.updateRenderTargetMipmap(Le),_t.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let Ct=0,jt=Y.length;Ct<jt;Ct++){const kt=Y[Ct],{object:Nt,geometry:st,material:Pt,group:Ge}=kt;if(Pt.side===ur&&Nt.layers.test(ne.layers)){const tt=Pt.side;Pt.side=Jn,Pt.needsUpdate=!0,kn(Nt,ae,ne,st,Pt,Ge),Pt.side=tt,Pt.needsUpdate=!0,pt=!0}}pt===!0&&(X.updateMultisampleRenderTarget(Le),X.updateRenderTargetMipmap(Le))}b.setRenderTarget(be,qe,je),b.setClearColor(me,le),rt!==void 0&&(ne.viewport=rt),b.toneMapping=ot}function Fn(N,Y,ae){const ne=Y.isScene===!0?Y.overrideMaterial:null;for(let J=0,Le=N.length;J<Le;J++){const ke=N[J],{object:be,geometry:qe,group:je}=ke;let ot=ke.material;ot.allowOverride===!0&&ne!==null&&(ot=ne),be.layers.test(ae.layers)&&kn(be,Y,ae,qe,ot,je)}}function kn(N,Y,ae,ne,J,Le){N.onBeforeRender(b,Y,ae,ne,J,Le),N.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),J.onBeforeRender(b,Y,ae,ne,N,Le),J.transparent===!0&&J.side===ur&&J.forceSinglePass===!1?(J.side=Jn,J.needsUpdate=!0,b.renderBufferDirect(ae,Y,ne,J,N,Le),J.side=Yr,J.needsUpdate=!0,b.renderBufferDirect(ae,Y,ne,J,N,Le),J.side=ur):b.renderBufferDirect(ae,Y,ne,J,N,Le),N.onAfterRender(b,Y,ae,ne,J,Le)}function Ni(N,Y,ae){Y.isScene!==!0&&(Y=Ot);const ne=E.get(N),J=U.state.lights,Le=U.state.shadowsArray,ke=J.state.version,be=He.getParameters(N,J.state,Le,Y,ae),qe=He.getProgramCacheKey(be);let je=ne.programs;ne.environment=N.isMeshStandardMaterial?Y.environment:null,ne.fog=Y.fog,ne.envMap=(N.isMeshStandardMaterial?ge:he).get(N.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&N.envMap===null?Y.environmentRotation:N.envMapRotation,je===void 0&&(N.addEventListener("dispose",Un),je=new Map,ne.programs=je);let ot=je.get(qe);if(ot!==void 0){if(ne.currentProgram===ot&&ne.lightsStateVersion===ke)return Ki(N,be),ot}else be.uniforms=He.getUniforms(N),N.onBeforeCompile(be,b),ot=He.acquireProgram(be,qe),je.set(qe,ot),ne.uniforms=be.uniforms;const rt=ne.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(rt.clippingPlanes=Xe.uniform),Ki(N,be),ne.needsLights=Ts(N),ne.lightsStateVersion=ke,ne.needsLights&&(rt.ambientLightColor.value=J.state.ambient,rt.lightProbe.value=J.state.probe,rt.directionalLights.value=J.state.directional,rt.directionalLightShadows.value=J.state.directionalShadow,rt.spotLights.value=J.state.spot,rt.spotLightShadows.value=J.state.spotShadow,rt.rectAreaLights.value=J.state.rectArea,rt.ltc_1.value=J.state.rectAreaLTC1,rt.ltc_2.value=J.state.rectAreaLTC2,rt.pointLights.value=J.state.point,rt.pointLightShadows.value=J.state.pointShadow,rt.hemisphereLights.value=J.state.hemi,rt.directionalShadowMap.value=J.state.directionalShadowMap,rt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,rt.spotShadowMap.value=J.state.spotShadowMap,rt.spotLightMatrix.value=J.state.spotLightMatrix,rt.spotLightMap.value=J.state.spotLightMap,rt.pointShadowMap.value=J.state.pointShadowMap,rt.pointShadowMatrix.value=J.state.pointShadowMatrix),ne.currentProgram=ot,ne.uniformsList=null,ot}function Zr(N){if(N.uniformsList===null){const Y=N.currentProgram.getUniforms();N.uniformsList=Kl.seqWithValue(Y.seq,N.uniforms)}return N.uniformsList}function Ki(N,Y){const ae=E.get(N);ae.outputColorSpace=Y.outputColorSpace,ae.batching=Y.batching,ae.batchingColor=Y.batchingColor,ae.instancing=Y.instancing,ae.instancingColor=Y.instancingColor,ae.instancingMorph=Y.instancingMorph,ae.skinning=Y.skinning,ae.morphTargets=Y.morphTargets,ae.morphNormals=Y.morphNormals,ae.morphColors=Y.morphColors,ae.morphTargetsCount=Y.morphTargetsCount,ae.numClippingPlanes=Y.numClippingPlanes,ae.numIntersection=Y.numClipIntersection,ae.vertexAlphas=Y.vertexAlphas,ae.vertexTangents=Y.vertexTangents,ae.toneMapping=Y.toneMapping}function Pi(N,Y,ae,ne,J){Y.isScene!==!0&&(Y=Ot),X.resetTextureUnits();const Le=Y.fog,ke=ne.isMeshStandardMaterial?Y.environment:null,be=K===null?b.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:va,qe=(ne.isMeshStandardMaterial?ge:he).get(ne.envMap||ke),je=ne.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,ot=!!ae.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),rt=!!ae.morphAttributes.position,pt=!!ae.morphAttributes.normal,Ct=!!ae.morphAttributes.color;let jt=Vi;ne.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(jt=b.toneMapping);const kt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Nt=kt!==void 0?kt.length:0,st=E.get(ne),Pt=U.state.lights;if(j===!0&&(Fe===!0||N!==de)){const mn=N===de&&ne.id===ue;Xe.setState(ne,N,mn)}let Ge=!1;ne.version===st.__version?(st.needsLights&&st.lightsStateVersion!==Pt.state.version||st.outputColorSpace!==be||J.isBatchedMesh&&st.batching===!1||!J.isBatchedMesh&&st.batching===!0||J.isBatchedMesh&&st.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&st.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&st.instancing===!1||!J.isInstancedMesh&&st.instancing===!0||J.isSkinnedMesh&&st.skinning===!1||!J.isSkinnedMesh&&st.skinning===!0||J.isInstancedMesh&&st.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&st.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&st.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&st.instancingMorph===!1&&J.morphTexture!==null||st.envMap!==qe||ne.fog===!0&&st.fog!==Le||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==Xe.numPlanes||st.numIntersection!==Xe.numIntersection)||st.vertexAlphas!==je||st.vertexTangents!==ot||st.morphTargets!==rt||st.morphNormals!==pt||st.morphColors!==Ct||st.toneMapping!==jt||st.morphTargetsCount!==Nt)&&(Ge=!0):(Ge=!0,st.__version=ne.version);let tt=st.currentProgram;Ge===!0&&(tt=Ni(ne,Y,J));let qt=!1,Bt=!1,rn=!1;const Te=tt.getUniforms(),et=st.uniforms;if($e.useProgram(tt.program)&&(qt=!0,Bt=!0,rn=!0),ne.id!==ue&&(ue=ne.id,Bt=!0),qt||de!==N){$e.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Te.setValue(z,"projectionMatrix",N.projectionMatrix),Te.setValue(z,"viewMatrix",N.matrixWorldInverse);const gn=Te.map.cameraPosition;gn!==void 0&&gn.setValue(z,Be.setFromMatrixPosition(N.matrixWorld)),Tt.logarithmicDepthBuffer&&Te.setValue(z,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Te.setValue(z,"isOrthographic",N.isOrthographicCamera===!0),de!==N&&(de=N,Bt=!0,rn=!0)}if(st.needsLights&&(Pt.state.directionalShadowMap.length>0&&Te.setValue(z,"directionalShadowMap",Pt.state.directionalShadowMap,X),Pt.state.spotShadowMap.length>0&&Te.setValue(z,"spotShadowMap",Pt.state.spotShadowMap,X),Pt.state.pointShadowMap.length>0&&Te.setValue(z,"pointShadowMap",Pt.state.pointShadowMap,X)),J.isSkinnedMesh){Te.setOptional(z,J,"bindMatrix"),Te.setOptional(z,J,"bindMatrixInverse");const mn=J.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Te.setValue(z,"boneTexture",mn.boneTexture,X))}J.isBatchedMesh&&(Te.setOptional(z,J,"batchingTexture"),Te.setValue(z,"batchingTexture",J._matricesTexture,X),Te.setOptional(z,J,"batchingIdTexture"),Te.setValue(z,"batchingIdTexture",J._indirectTexture,X),Te.setOptional(z,J,"batchingColorTexture"),J._colorsTexture!==null&&Te.setValue(z,"batchingColorTexture",J._colorsTexture,X));const pn=ae.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&xt.update(J,ae,tt),(Bt||st.receiveShadow!==J.receiveShadow)&&(st.receiveShadow=J.receiveShadow,Te.setValue(z,"receiveShadow",J.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(et.envMap.value=qe,et.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&Y.environment!==null&&(et.envMapIntensity.value=Y.environmentIntensity),et.dfgLUT!==void 0&&(et.dfgLUT.value=QE()),Bt&&(Te.setValue(z,"toneMappingExposure",b.toneMappingExposure),st.needsLights&&oi(et,rn),Le&&ne.fog===!0&&at.refreshFogUniforms(et,Le),at.refreshMaterialUniforms(et,ne,Re,se,U.state.transmissionRenderTarget[N.id]),Kl.upload(z,Zr(st),et,X)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Kl.upload(z,Zr(st),et,X),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Te.setValue(z,"center",J.center),Te.setValue(z,"modelViewMatrix",J.modelViewMatrix),Te.setValue(z,"normalMatrix",J.normalMatrix),Te.setValue(z,"modelMatrix",J.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const mn=ne.uniformsGroups;for(let gn=0,As=mn.length;gn<As;gn++){const Di=mn[gn];Se.update(Di,tt),Se.bind(Di,tt)}}return tt}function oi(N,Y){N.ambientLightColor.needsUpdate=Y,N.lightProbe.needsUpdate=Y,N.directionalLights.needsUpdate=Y,N.directionalLightShadows.needsUpdate=Y,N.pointLights.needsUpdate=Y,N.pointLightShadows.needsUpdate=Y,N.spotLights.needsUpdate=Y,N.spotLightShadows.needsUpdate=Y,N.rectAreaLights.needsUpdate=Y,N.hemisphereLights.needsUpdate=Y}function Ts(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(N,Y,ae){const ne=E.get(N);ne.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),E.get(N.texture).__webglTexture=Y,E.get(N.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ae,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,Y){const ae=E.get(N);ae.__webglFramebuffer=Y,ae.__useDefaultFramebuffer=Y===void 0};const Sa=z.createFramebuffer();this.setRenderTarget=function(N,Y=0,ae=0){K=N,B=Y,$=ae;let ne=null,J=!1,Le=!1;if(N){const be=E.get(N);if(be.__useDefaultFramebuffer!==void 0){$e.bindFramebuffer(z.FRAMEBUFFER,be.__webglFramebuffer),re.copy(N.viewport),Q.copy(N.scissor),q=N.scissorTest,$e.viewport(re),$e.scissor(Q),$e.setScissorTest(q),ue=-1;return}else if(be.__webglFramebuffer===void 0)X.setupRenderTarget(N);else if(be.__hasExternalTextures)X.rebindTextures(N,E.get(N.texture).__webglTexture,E.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const ot=N.depthTexture;if(be.__boundDepthTexture!==ot){if(ot!==null&&E.has(ot)&&(N.width!==ot.image.width||N.height!==ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(N)}}const qe=N.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Le=!0);const je=E.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(je[Y])?ne=je[Y][ae]:ne=je[Y],J=!0):N.samples>0&&X.useMultisampledRTT(N)===!1?ne=E.get(N).__webglMultisampledFramebuffer:Array.isArray(je)?ne=je[ae]:ne=je,re.copy(N.viewport),Q.copy(N.scissor),q=N.scissorTest}else re.copy(ie).multiplyScalar(Re).floor(),Q.copy(fe).multiplyScalar(Re).floor(),q=_e;if(ae!==0&&(ne=Sa),$e.bindFramebuffer(z.FRAMEBUFFER,ne)&&$e.drawBuffers(N,ne),$e.viewport(re),$e.scissor(Q),$e.setScissorTest(q),J){const be=E.get(N.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+Y,be.__webglTexture,ae)}else if(Le){const be=Y;for(let qe=0;qe<N.textures.length;qe++){const je=E.get(N.textures[qe]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+qe,je.__webglTexture,ae,be)}}else if(N!==null&&ae!==0){const be=E.get(N.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,be.__webglTexture,ae)}ue=-1},this.readRenderTargetPixels=function(N,Y,ae,ne,J,Le,ke,be=0){if(!(N&&N.isWebGLRenderTarget)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=E.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&ke!==void 0&&(qe=qe[ke]),qe){$e.bindFramebuffer(z.FRAMEBUFFER,qe);try{const je=N.textures[be],ot=je.format,rt=je.type;if(!Tt.textureFormatReadable(ot)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(rt)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=N.width-ne&&ae>=0&&ae<=N.height-J&&(N.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+be),z.readPixels(Y,ae,ne,J,Ee.convert(ot),Ee.convert(rt),Le))}finally{const je=K!==null?E.get(K).__webglFramebuffer:null;$e.bindFramebuffer(z.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(N,Y,ae,ne,J,Le,ke,be=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=E.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&ke!==void 0&&(qe=qe[ke]),qe)if(Y>=0&&Y<=N.width-ne&&ae>=0&&ae<=N.height-J){$e.bindFramebuffer(z.FRAMEBUFFER,qe);const je=N.textures[be],ot=je.format,rt=je.type;if(!Tt.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Tt.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,pt),z.bufferData(z.PIXEL_PACK_BUFFER,Le.byteLength,z.STREAM_READ),N.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+be),z.readPixels(Y,ae,ne,J,Ee.convert(ot),Ee.convert(rt),0);const Ct=K!==null?E.get(K).__webglFramebuffer:null;$e.bindFramebuffer(z.FRAMEBUFFER,Ct);const jt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await l_(z,jt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,pt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Le),z.deleteBuffer(pt),z.deleteSync(jt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,Y=null,ae=0){const ne=Math.pow(2,-ae),J=Math.floor(N.image.width*ne),Le=Math.floor(N.image.height*ne),ke=Y!==null?Y.x:0,be=Y!==null?Y.y:0;X.setTexture2D(N,0),z.copyTexSubImage2D(z.TEXTURE_2D,ae,0,0,ke,be,J,Le),$e.unbindTexture()};const Qr=z.createFramebuffer(),zt=z.createFramebuffer();this.copyTextureToTexture=function(N,Y,ae=null,ne=null,J=0,Le=null){Le===null&&(J!==0?(go("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Le=J,J=0):Le=0);let ke,be,qe,je,ot,rt,pt,Ct,jt;const kt=N.isCompressedTexture?N.mipmaps[Le]:N.image;if(ae!==null)ke=ae.max.x-ae.min.x,be=ae.max.y-ae.min.y,qe=ae.isBox3?ae.max.z-ae.min.z:1,je=ae.min.x,ot=ae.min.y,rt=ae.isBox3?ae.min.z:0;else{const pn=Math.pow(2,-J);ke=Math.floor(kt.width*pn),be=Math.floor(kt.height*pn),N.isDataArrayTexture?qe=kt.depth:N.isData3DTexture?qe=Math.floor(kt.depth*pn):qe=1,je=0,ot=0,rt=0}ne!==null?(pt=ne.x,Ct=ne.y,jt=ne.z):(pt=0,Ct=0,jt=0);const Nt=Ee.convert(Y.format),st=Ee.convert(Y.type);let Pt;Y.isData3DTexture?(X.setTexture3D(Y,0),Pt=z.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(X.setTexture2DArray(Y,0),Pt=z.TEXTURE_2D_ARRAY):(X.setTexture2D(Y,0),Pt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Y.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ge=z.getParameter(z.UNPACK_ROW_LENGTH),tt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),qt=z.getParameter(z.UNPACK_SKIP_PIXELS),Bt=z.getParameter(z.UNPACK_SKIP_ROWS),rn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,kt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,kt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,je),z.pixelStorei(z.UNPACK_SKIP_ROWS,ot),z.pixelStorei(z.UNPACK_SKIP_IMAGES,rt);const Te=N.isDataArrayTexture||N.isData3DTexture,et=Y.isDataArrayTexture||Y.isData3DTexture;if(N.isDepthTexture){const pn=E.get(N),mn=E.get(Y),gn=E.get(pn.__renderTarget),As=E.get(mn.__renderTarget);$e.bindFramebuffer(z.READ_FRAMEBUFFER,gn.__webglFramebuffer),$e.bindFramebuffer(z.DRAW_FRAMEBUFFER,As.__webglFramebuffer);for(let Di=0;Di<qe;Di++)Te&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,E.get(N).__webglTexture,J,rt+Di),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,E.get(Y).__webglTexture,Le,jt+Di)),z.blitFramebuffer(je,ot,ke,be,pt,Ct,ke,be,z.DEPTH_BUFFER_BIT,z.NEAREST);$e.bindFramebuffer(z.READ_FRAMEBUFFER,null),$e.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(J!==0||N.isRenderTargetTexture||E.has(N)){const pn=E.get(N),mn=E.get(Y);$e.bindFramebuffer(z.READ_FRAMEBUFFER,Qr),$e.bindFramebuffer(z.DRAW_FRAMEBUFFER,zt);for(let gn=0;gn<qe;gn++)Te?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,pn.__webglTexture,J,rt+gn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,pn.__webglTexture,J),et?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,mn.__webglTexture,Le,jt+gn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,mn.__webglTexture,Le),J!==0?z.blitFramebuffer(je,ot,ke,be,pt,Ct,ke,be,z.COLOR_BUFFER_BIT,z.NEAREST):et?z.copyTexSubImage3D(Pt,Le,pt,Ct,jt+gn,je,ot,ke,be):z.copyTexSubImage2D(Pt,Le,pt,Ct,je,ot,ke,be);$e.bindFramebuffer(z.READ_FRAMEBUFFER,null),$e.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else et?N.isDataTexture||N.isData3DTexture?z.texSubImage3D(Pt,Le,pt,Ct,jt,ke,be,qe,Nt,st,kt.data):Y.isCompressedArrayTexture?z.compressedTexSubImage3D(Pt,Le,pt,Ct,jt,ke,be,qe,Nt,kt.data):z.texSubImage3D(Pt,Le,pt,Ct,jt,ke,be,qe,Nt,st,kt):N.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Le,pt,Ct,ke,be,Nt,st,kt.data):N.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Le,pt,Ct,kt.width,kt.height,Nt,kt.data):z.texSubImage2D(z.TEXTURE_2D,Le,pt,Ct,ke,be,Nt,st,kt);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ge),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,tt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,qt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Bt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,rn),Le===0&&Y.generateMipmaps&&z.generateMipmap(Pt),$e.unbindTexture()},this.initRenderTarget=function(N){E.get(N).__webglFramebuffer===void 0&&X.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?X.setTextureCube(N,0):N.isData3DTexture?X.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?X.setTexture2DArray(N,0):X.setTexture2D(N,0),$e.unbindTexture()},this.resetState=function(){B=0,$=0,K=null,$e.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ut._getUnpackColorSpace()}}const S0={type:"change"},Vf={type:"start"},lg={type:"end"},Vl=new Df,M0=new Gr,ew=Math.cos(70*u_.DEG2RAD),cn=new Z,$n=2*Math.PI,Wt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},yd=1e-6;class tw extends i1{constructor(e,t=null){super(e,t),this.state=Wt.NONE,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fa.ROTATE,MIDDLE:fa.DOLLY,RIGHT:fa.PAN},this.touches={ONE:da.ROTATE,TWO:da.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new ws,this._lastTargetPosition=new Z,this._quat=new ws().setFromUnitVectors(e.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Km,this._sphericalDelta=new Km,this._scale=1,this._panOffset=new Z,this._rotateStart=new gt,this._rotateEnd=new gt,this._rotateDelta=new gt,this._panStart=new gt,this._panEnd=new gt,this._panDelta=new gt,this._dollyStart=new gt,this._dollyEnd=new gt,this._dollyDelta=new gt,this._dollyDirection=new Z,this._mouse=new gt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=iw.bind(this),this._onPointerDown=nw.bind(this),this._onPointerUp=rw.bind(this),this._onContextMenu=dw.bind(this),this._onMouseWheel=ow.bind(this),this._onKeyDown=lw.bind(this),this._onTouchStart=cw.bind(this),this._onTouchMove=uw.bind(this),this._onMouseDown=sw.bind(this),this._onMouseMove=aw.bind(this),this._interceptControlDown=fw.bind(this),this._interceptControlUp=hw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(S0),this.update(),this.state=Wt.NONE}update(e=null){const t=this.object.position;cn.copy(t).sub(this.target),cn.applyQuaternion(this._quat),this._spherical.setFromVector3(cn),this.autoRotate&&this.state===Wt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=$n:r>Math.PI&&(r-=$n),o<-Math.PI?o+=$n:o>Math.PI&&(o-=$n),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(cn.setFromSpherical(this._spherical),cn.applyQuaternion(this._quatInverse),t.copy(this.target).add(cn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const d=cn.length();u=this._clampDistance(d*this._scale);const p=d-u;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),l=!!p}else if(this.object.isOrthographicCamera){const d=new Z(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=p!==this.object.zoom;const m=new Z(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(d),this.object.updateMatrixWorld(),u=cn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Vl.origin.copy(this.object.position),Vl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Vl.direction))<ew?this.object.lookAt(this.target):(M0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Vl.intersectPlane(M0,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>yd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>yd||this._lastTargetPosition.distanceToSquared(this.target)>yd?(this.dispatchEvent(S0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?$n/60*this.autoRotateSpeed*e:$n/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){cn.setFromMatrixColumn(t,0),cn.multiplyScalar(-e),this._panOffset.add(cn)}_panUp(e,t){this.screenSpacePanning===!0?cn.setFromMatrixColumn(t,1):(cn.setFromMatrixColumn(t,0),cn.crossVectors(this.object.up,cn)),cn.multiplyScalar(e),this._panOffset.add(cn)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;cn.copy(o).sub(this.target);let l=cn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,l=t-r.top,u=r.width,d=r.height;this._mouse.x=o/u*2-1,this._mouse.y=-(l/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft($n*this._rotateDelta.x/t.clientHeight),this._rotateUp($n*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp($n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-$n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft($n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-$n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(o,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft($n*this._rotateDelta.x/t.clientHeight),this._rotateUp($n*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,d=(e.pageY+t.y)*.5;this._updateZoomParameters(u,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new gt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function nw(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function iw(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function rw(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(lg),this.state=Wt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function sw(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case fa.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Wt.DOLLY;break;case fa.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Wt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Wt.ROTATE}break;case fa.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Wt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Wt.PAN}break;default:this.state=Wt.NONE}this.state!==Wt.NONE&&this.dispatchEvent(Vf)}function aw(s){switch(this.state){case Wt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Wt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Wt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function ow(s){this.enabled===!1||this.enableZoom===!1||this.state!==Wt.NONE||(s.preventDefault(),this.dispatchEvent(Vf),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(lg))}function lw(s){this.enabled!==!1&&this._handleKeyDown(s)}function cw(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case da.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Wt.TOUCH_ROTATE;break;case da.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Wt.TOUCH_PAN;break;default:this.state=Wt.NONE}break;case 2:switch(this.touches.TWO){case da.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Wt.TOUCH_DOLLY_PAN;break;case da.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Wt.TOUCH_DOLLY_ROTATE;break;default:this.state=Wt.NONE}break;default:this.state=Wt.NONE}this.state!==Wt.NONE&&this.dispatchEvent(Vf)}function uw(s){switch(this._trackPointer(s),this.state){case Wt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Wt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Wt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Wt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Wt.NONE}}function dw(s){this.enabled!==!1&&s.preventDefault()}function fw(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hw(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const pw=()=>{const s=Qe.useRef(null),e=Qe.useRef(null),t=Qe.useRef(null),[r,o]=Qe.useState(0),l=Qe.useRef(0),[u,d]=Qe.useState(!1),p=Qe.useRef(!1),[m,x]=Qe.useState("STANDBY"),v=Qe.useRef("STANDBY");v.current=m;const[y,S]=Qe.useState(10),A=Qe.useRef(10);A.current=y;const[C,M]=Qe.useState({temp:180,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"PRONTIDÃO",countdown:10}),[_,T]=Qe.useState(null),[D,R]=Qe.useState("geral"),U=Qe.useRef(null),L=Qe.useRef(null),O=Qe.useRef(null),H=Qe.useRef(null),b=Qe.useRef(null),P=Qe.useRef(null),B=Qe.useRef(null),$=Qe.useRef(null),K=Qe.useRef(null),ue=Qe.useRef(null),de=Qe.useRef(null),re=Qe.useRef(null),Q=Qe.useRef(null),q=Qe.useRef(null),me=Qe.useRef(null),le=Qe.useRef(null),k=Qe.useRef(null),se=Qe.useRef(null),Re=Qe.useRef(new Z(0,2.2,4.4)),We=Qe.useRef(new Z(0,1.4,0)),Je=Qe.useCallback(()=>{let Ce=P.current;Ce||(Ce=document.createElement("canvas"),Ce.width=512,Ce.height=360,P.current=Ce);const j=Ce.getContext("2d");if(!j)return;const Fe=v.current,Dt=A.current;Fe==="STANDBY"||Fe==="HEATING"?j.fillStyle="#061a1b":Fe==="FIRE_ALARM"?j.fillStyle="#3a0808":Fe==="SUPPRESSION"?j.fillStyle="#3a1f04":j.fillStyle="#05291b",j.fillRect(0,0,512,360),j.strokeStyle="#3f3f46",j.lineWidth=4,j.strokeRect(2,2,508,356),j.fillStyle="rgba(0, 0, 0, 0.5)",j.fillRect(0,0,512,42),j.fillStyle="#94a3b8",j.font="bold 14px monospace",j.textAlign="left",j.fillText("OUTFIRE IHM v3.2",16,27),j.textAlign="right",j.fillStyle="#10b981",j.fillText("BAT: 13.8V [100%]",496,27),Fe==="STANDBY"||Fe==="HEATING"?(j.fillStyle="#10b981",j.font="bold 24px Inter, sans-serif",j.textAlign="center",j.fillText("● SISTEMA PROTEGIDO",256,90),j.fillStyle="#cbd5e1",j.font="13px monospace",j.fillText("MONITORAMENTO ATIVO (145°C / 300°C)",256,120),j.fillStyle="#0f2922",j.fillRect(24,145,464,46),j.fillStyle="#a7f3d0",j.font="13px Inter, sans-serif",j.textAlign="left",j.fillText("SENSOR COIFA (145°C):",38,174),j.textAlign="right",j.fillText(Fe==="HEATING"?"280°C [SUBINDO]":"180°C [NORMAL]",474,174),j.fillStyle="#0f2922",j.fillRect(24,200,464,46),j.fillStyle="#a7f3d0",j.textAlign="left",j.fillText("VÁLVULA SOLENOIDE DE GÁS:",38,229),j.textAlign="right",j.fillStyle="#34d399",j.fillText("ABERTA / LIBERADA",474,229),j.fillStyle="#0f2922",j.fillRect(24,255,464,46),j.fillStyle="#a7f3d0",j.textAlign="left",j.fillText("SISTEMA DE EXAUSTÃO:",38,284),j.textAlign="right",j.fillStyle="#34d399",j.fillText("OPERANDO / CONECTADO",474,284),j.fillStyle="#64748b",j.font="11px monospace",j.textAlign="center",j.fillText("DISPARO AUTOMÁTICO EM CASO DE FOGO OU BOTOEIRA MANUAL",256,332)):Fe==="FIRE_ALARM"?(j.fillStyle="#ef4444",j.font="bold 26px Inter, sans-serif",j.textAlign="center",j.fillText("🚨 FOGO DETECTADO! 🚨",256,82),j.fillStyle="#fecaca",j.font="bold 14px Inter, sans-serif",j.fillText("SENSOR TÉRMICO SUPEROU 145°C",256,110),j.fillStyle="#1c0505",j.fillRect(40,128,432,105),j.strokeStyle="#ef4444",j.lineWidth=3,j.strokeRect(40,128,432,105),j.fillStyle="#ffffff",j.font="bold 64px monospace",j.fillText(`00:0${Math.max(0,Dt)}`,256,204),j.fillStyle="#fca5a5",j.font="bold 13px Inter, sans-serif",j.fillText("DISPARO AUTOMÁTICO DE SAPONIFICANTE",256,260),j.fillStyle="#dc2626",j.fillRect(24,285,464,52),j.fillStyle="#ffffff",j.font="bold 14px Inter, sans-serif",j.fillText("EVACUAR O LOCAL OU ACIONAR A BOTOEIRA MANUAL",256,317)):Fe==="SUPPRESSION"?(j.fillStyle="#f59e0b",j.font="bold 25px Inter, sans-serif",j.textAlign="center",j.fillText("⚡ DISPARO DE SUPRESSÃO ATIVO ⚡",256,85),j.fillStyle="#ffffff",j.font="bold 15px monospace",j.fillText("DESCARGA DE SAPONIFICANTE & CO2",256,118),j.fillStyle="#ef4444",j.fillRect(24,140,464,48),j.fillStyle="#ffffff",j.font="bold 14px Inter, sans-serif",j.fillText("VÁLVULA DE GÁS: CORTADA (BLOQUEADA)",256,170),j.fillStyle="#3b82f6",j.fillRect(24,198,464,48),j.fillStyle="#ffffff",j.fillText("EXAUSTOR: DESLIGADO (DAMPER FECHADO)",256,228),j.fillStyle="#cbd5e1",j.font="bold 13px Inter, sans-serif",j.fillText("MANTA DE SABÃO ENCAPSULANDO O ÓLEO QUENTE",256,282),j.fillStyle="#a7f3d0",j.font="12px monospace",j.fillText("TEMPERATURA EM QUEDA DRÁSTICA...",256,318)):Fe==="EXTINGUISHED"&&(j.fillStyle="#10b981",j.font="bold 25px Inter, sans-serif",j.textAlign="center",j.fillText("✓ INCÊNDIO EXTINTO COM SUCESSO",256,85),j.fillStyle="#e2e8f0",j.font="bold 14px Inter, sans-serif",j.fillText("REIGNIÇÃO 100% IMPEDIDA (SAPONIFICAÇÃO)",256,118),j.fillStyle="#064e3b",j.fillRect(24,140,464,46),j.fillStyle="#6ee7b7",j.font="13px Inter, sans-serif",j.textAlign="left",j.fillText("TEMPERATURA FINAL DO ÓLEO:",38,169),j.textAlign="right",j.fillText("42°C (TOTALMENTE RESFRIADO)",474,169),j.fillStyle="#064e3b",j.fillRect(24,198,464,46),j.fillStyle="#6ee7b7",j.textAlign="left",j.fillText("INTERTRAVAMENTO DE SEGURANÇA:",38,227),j.textAlign="right",j.fillText("ATIVO / SEGURO",474,227),j.fillStyle="#064e3b",j.fillRect(24,256,464,46),j.fillStyle="#6ee7b7",j.textAlign="left",j.fillText("COZINHA & ESTRUTURA:",38,285),j.textAlign="right",j.fillText("100% PRESERVADAS (AVCB OK)",474,285),j.fillStyle="#94a3b8",j.font="11px monospace",j.textAlign="center",j.fillText("SISTEMA PRONTO PARA LIMPEZA COM ÁGUA E REARME",256,332)),b.current&&(b.current.needsUpdate=!0)},[]),ie=Qe.useCallback(()=>{p.current=!0,d(!0),x("SUPPRESSION"),S(0),M({temp:140,gasStatus:"CORTADO",exhaustStatus:"INTERTRAVADO",systemStatus:"COMBATE ATIVO",countdown:0}),ue.current&&(ue.current.rotation.x=.65),setTimeout(()=>{x("EXTINGUISHED"),M({temp:42,gasStatus:"CORTADO",exhaustStatus:"INTERTRAVADO",systemStatus:"INCÊNDIO EXTINTO",countdown:0})},3500)},[]),fe=Qe.useCallback(()=>{p.current=!1,d(!1),x("STANDBY"),S(10),M({temp:180,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"PRONTIDÃO",countdown:10}),ue.current&&(ue.current.rotation.x=0),q.current&&(q.current.scale.set(.001,.001,.001),q.current.visible=!1)},[]);Qe.useEffect(()=>{Je()},[m,y,Je]),Qe.useEffect(()=>{const Ce=()=>{if(!s.current)return;const j=s.current.getBoundingClientRect(),Fe=s.current.offsetHeight-window.innerHeight;if(Fe<=0)return;const Dt=-j.top,Be=Math.min(1,Math.max(0,Dt/Fe));if(l.current=Be,o(Be),!(p.current&&Be>.05))if(p.current&&Be<=.05&&(p.current=!1,d(!1)),Be<.18)x("STANDBY"),M({temp:180,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"PRONTIDÃO",countdown:10});else if(Be>=.18&&Be<.42){x("HEATING");const ft=Math.round(180+(Be-.18)/.24*185);M({temp:ft,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"AQUECIMENTO",countdown:10})}else if(Be>=.42&&Be<.65){x("FIRE_ALARM");const ft=Math.max(1,Math.round(10-(Be-.42)/.23*9));S(ft),M({temp:420,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"ALERTA DE FOGO",countdown:ft})}else Be>=.65&&Be<.85?(x("SUPPRESSION"),M({temp:160,gasStatus:"CORTADO",exhaustStatus:"INTERTRAVADO",systemStatus:"COMBATE ATIVO",countdown:0})):(x("EXTINGUISHED"),M({temp:42,gasStatus:"CORTADO",exhaustStatus:"INTERTRAVADO",systemStatus:"INCÊNDIO EXTINTO",countdown:0}))};return window.addEventListener("scroll",Ce,{passive:!0}),Ce(),()=>window.removeEventListener("scroll",Ce)},[]);const _e=Ce=>{R(Ce),Ce==="geral"?(Re.current.set(0,2.2,4.4),We.current.set(0,1.4,0)):Ce==="central"?(Re.current.set(1.9,1.85,1.5),We.current.set(2.1,1.8,.15)):Ce==="fritadeira"?(Re.current.set(-.2,1.4,2.2),We.current.set(-.2,1,0)):Ce==="botoeira"&&(Re.current.set(1.4,1.45,1.3),We.current.set(1.45,1.4,.05))};return Qe.useEffect(()=>{if(!t.current||!e.current)return;const Ce=e.current.clientWidth||window.innerWidth,j=e.current.clientHeight||window.innerHeight,Fe=new I_;U.current=Fe,Fe.background=new Et(658448),Fe.fog=new If(658448,.035);const Dt=new Qn(45,Ce/j,.1,100);Dt.position.set(0,2.2,4.4),L.current=Dt;const Be=new JE({canvas:t.current,antialias:!0,powerPreference:"high-performance"});Be.setSize(Ce,j),Be.setPixelRatio(Math.min(window.devicePixelRatio,2)),Be.shadowMap.enabled=!0,Be.shadowMap.type=N0,Be.toneMapping=Sf,Be.toneMappingExposure=1.1,O.current=Be;const ft=new tw(Dt,Be.domElement);ft.enableDamping=!0,ft.dampingFactor=.05,ft.enableZoom=!1,ft.enablePan=!1,ft.maxPolarAngle=Math.PI/2+.05,ft.target.set(0,1.4,0),H.current=ft;const Ot=new J_(16774890,.75);Fe.add(Ot);const ht=new Q_(16777215,1.3);ht.position.set(4,6,4),ht.castShadow=!0,ht.shadow.mapSize.width=1024,ht.shadow.mapSize.height=1024,Fe.add(ht);const Vt=new $_(16766880,2.8,6,Math.PI/3,.3);Vt.position.set(0,2.7,0),Vt.target.position.set(0,.9,0),Fe.add(Vt),Fe.add(Vt.target);const z=new qm(16733440,0,5);z.position.set(-.35,1.2,.1),Fe.add(z),K.current=z;const Gt=new qm(16711680,0,8);Gt.position.set(2.1,2.25,.2),Fe.add(Gt),B.current=Gt;const _t=new Sn({color:13421772,metalness:.9,roughness:.22}),Tt=new Sn({color:1579551,roughness:.6,metalness:.1}),$e=new Sn({color:987413,roughness:.8,metalness:.2}),I=new Mt(new Xr(14,14),$e);I.rotation.x=-Math.PI/2,I.receiveShadow=!0,Fe.add(I);const E=new Mt(new Xr(14,8),Tt);E.position.set(0,4,-1.2),E.receiveShadow=!0,Fe.add(E);const X=new Mt(new Xr(14,8),Tt);X.rotation.y=Math.PI/2,X.position.set(-4.5,4,0),Fe.add(X);const he=new Kn;Fe.add(he);const ge=new Mt(new un(2.6,.9,1),_t);ge.position.set(0,.45,0),ge.castShadow=!0,ge.receiveShadow=!0,he.add(ge);const ce=new Kn;ce.position.set(-.55,.9,0),he.add(ce),Q.current=ce;const Ke=new Mt(new un(.85,.12,.75),_t);Ke.position.set(0,.06,0),ce.add(Ke);const Ae=new Mt(new un(.72,.02,.62),new Sn({color:9584654,roughness:.1,metalness:.3}));Ae.position.set(0,.11,0),ce.add(Ae);const He=new Sn({color:1118481,roughness:.5}),at=new Mt(new ki(.012,.012,.28),He);at.position.set(-.16,.22,.34),at.rotation.x=Math.PI/3,ce.add(at);const ye=new Mt(new ki(.012,.012,.28),He);ye.position.set(.16,.22,.34),ye.rotation.x=Math.PI/3,ce.add(ye);const Pe=new Kn;Pe.position.set(.65,.9,0),he.add(Pe);const Xe=new Mt(new un(.95,.06,.75),new Sn({color:3355448,roughness:.4,metalness:.7}));Xe.position.set(0,.03,0),Pe.add(Xe);const ze=new Kn;ze.position.set(0,2.3,0),Fe.add(ze);const Ne=new Mt(new un(2.8,.6,1.2),_t);Ne.castShadow=!0,ze.add(Ne);const xt=new Sn({color:10066329,metalness:.9,roughness:.3});for(let Ge=-1;Ge<=1;Ge+=.5){const tt=new Mt(new un(.42,.35,.04),xt);tt.position.set(Ge,-.15,0),tt.rotation.x=-Math.PI/6,ze.add(tt)}const G=new Mt(new ki(.28,.28,1.5,32),_t);G.position.set(0,1,0),ze.add(G);const Ue=new Sn({color:11817737,metalness:.8,roughness:.3}),Ee=new Sn({color:13938487,metalness:.9,roughness:.2}),Ie=new Mt(new ki(.015,.015,2.4),Ue);Ie.rotation.z=Math.PI/2,Ie.position.set(0,-.28,-.2),ze.add(Ie),[[-.7,-.32,0],[-.35,-.32,0],[.45,-.32,0],[.85,-.32,0]].forEach(([Ge,tt,qt])=>{const Bt=new Mt(new Of(.025,.06,16),Ee);Bt.position.set(Ge,tt,qt),Bt.rotation.x=Math.PI,ze.add(Bt)});const pe=new Kn;pe.position.set(2.1,1.8,.15),pe.rotation.y=-.28,Fe.add(pe),re.current=pe,pe.userData={interactiveType:"central",name:"Central Outfire VTS"};const ut=new q_().load("/assets/tampa-central-moderna.png");ut.colorSpace=Zn;const At=new Sn({color:1316378,roughness:.45,metalness:.8}),Rt=new Sn({map:ut,roughness:.35,metalness:.25}),Un=[At,At,At,At,Rt,At],hn=new Mt(new un(.72,.52,.22),Un);hn.castShadow=!0,pe.add(hn),Je();const Yi=new B_(P.current);Yi.colorSpace=Zn,b.current=Yi;const Ai=new _s({map:Yi,transparent:!1}),xr=new Mt(new Xr(.29,.2),Ai);xr.position.set(.08,.02,.111),pe.add(xr);const Ci=new Mt(new ki(.016,.016,1.6,16),_t);Ci.position.set(0,1.05,0),pe.add(Ci);const Ri=new Mt(new ki(.045,.045,.03,16),new Sn({color:1118481,metalness:.8}));Ri.position.set(0,.275,0),pe.add(Ri);const $i=new Sn({color:16711680,transparent:!0,opacity:.85,roughness:.1}),On=new Mt(new ki(.038,.042,.065,16),$i);On.position.set(0,.32,0),pe.add(On),$.current=On;const vr=new Mt(new un(.68,.02,.2),At);vr.position.set(0,-.32,0),pe.add(vr);const $r=new Sn({color:592396,roughness:.5}),Kr=new Mt(new un(.24,.15,.14),$r);Kr.position.set(-.16,-.23,0),pe.add(Kr);const Fn=new Mt(new un(.24,.15,.14),$r);Fn.position.set(.16,-.23,0),pe.add(Fn);const kn=new Kn;kn.position.set(1.45,1.4,.08),Fe.add(kn),de.current=kn,kn.userData={interactiveType:"botoeira",name:"Acionador Manual de Emergência"};const Ni=new Mt(new un(.18,.24,.08),new Sn({color:13373713,roughness:.3,metalness:.3}));Ni.castShadow=!0,kn.add(Ni);const Zr=new Mt(new un(.14,.18,.015),new Sn({color:16777215,transparent:!0,opacity:.45,roughness:.1}));Zr.position.set(0,0,.042),kn.add(Zr);const Ki=new Mt(new un(.1,.06,.025),new Sn({color:16436245,roughness:.3}));Ki.position.set(0,-.01,.048),kn.add(Ki),ue.current=Ki;const Pi=new Mt(new un(.74,.08,.64),new Sn({color:16317180,roughness:.9,metalness:.05}));Pi.position.set(-.55,1.05,0),Pi.scale.set(.001,.001,.001),Pi.visible=!1,Fe.add(Pi),q.current=Pi;const oi=new Kn;Fe.add(oi),me.current=oi;const Ts=70,Sa=new kf(.08,1),Qr=[];for(let Ge=0;Ge<Ts;Ge++){const tt=new Mt(Sa,new _s({color:16729344,transparent:!0,opacity:.85}));tt.position.set(-.55+(Math.random()-.5)*.5,1.05+Math.random()*.4,(Math.random()-.5)*.4),tt.userData={baseY:1.05,speedY:.8+Math.random()*1.5,scale:.4+Math.random()*.8},oi.add(tt),Qr.push(tt)}const zt=new Kn;Fe.add(zt),le.current=zt;const N=50,Y=new fo(.12,8,8),ae=[];for(let Ge=0;Ge<N;Ge++){const tt=new Mt(Y,new _s({color:2040877,transparent:!0,opacity:.4}));tt.position.set(-.55+(Math.random()-.5)*.6,1.3+Math.random()*1,(Math.random()-.5)*.4),tt.userData={speedY:.6+Math.random()*1,maxH:2.2},zt.add(tt),ae.push(tt)}const ne=new Kn;Fe.add(ne),k.current=ne;const J=80,Le=new fo(.025,8,8),ke=[];for(let Ge=0;Ge<J;Ge++){const tt=new Mt(Le,new _s({color:16777215,transparent:!0,opacity:.9}));tt.position.set(-.55,1.9,0),tt.userData={origY:1.98,speed:3.5+Math.random()*2,spread:(Math.random()-.5)*.4},ne.add(tt),ke.push(tt)}const be=new Kn;Fe.add(be),se.current=be;const qe=35,je=new fo(.16,8,8),ot=[];for(let Ge=0;Ge<qe;Ge++){const tt=new Mt(je,new _s({color:14870768,transparent:!0,opacity:.4}));tt.position.set((Math.random()-.5)*.4,2.7+Math.random()*.5,(Math.random()-.5)*.3),be.add(tt),ot.push(tt)}const rt=new n1,pt=new gt,Ct=Ge=>{var Bt,rn;const tt=Be.domElement.getBoundingClientRect();pt.x=(Ge.clientX-tt.left)/tt.width*2-1,pt.y=-((Ge.clientY-tt.top)/tt.height)*2+1,rt.setFromCamera(pt,Dt);const qt=rt.intersectObjects([kn,pe,ce],!0);if(qt.length>0){let Te=qt[0].object;for(;Te&&!((Bt=Te.userData)!=null&&Bt.interactiveType)&&Te.parent;)Te=Te.parent;if(Te&&((rn=Te.userData)!=null&&rn.interactiveType)){Be.domElement.style.cursor="pointer",T(Te.userData.name);return}}Be.domElement.style.cursor="default",T(null)},jt=Ge=>{var Bt,rn,Te;const tt=Be.domElement.getBoundingClientRect();pt.x=(Ge.clientX-tt.left)/tt.width*2-1,pt.y=-((Ge.clientY-tt.top)/tt.height)*2+1,rt.setFromCamera(pt,Dt);const qt=rt.intersectObjects([kn,pe,ce],!0);if(qt.length>0){let et=qt[0].object;for(;et&&!((Bt=et.userData)!=null&&Bt.interactiveType)&&et.parent;)et=et.parent;((rn=et==null?void 0:et.userData)==null?void 0:rn.interactiveType)==="botoeira"?ie():((Te=et==null?void 0:et.userData)==null?void 0:Te.interactiveType)==="central"&&_e("central")}};Be.domElement.addEventListener("mousemove",Ct),Be.domElement.addEventListener("click",jt);const kt=()=>{if(!e.current||!O.current||!L.current)return;const Ge=e.current.clientWidth,tt=e.current.clientHeight;L.current.aspect=Ge/tt,L.current.updateProjectionMatrix(),O.current.setSize(Ge,tt)};window.addEventListener("resize",kt);let Nt;const st=new t1,Pt=()=>{Nt=requestAnimationFrame(Pt);const Ge=st.getDelta(),tt=st.getElapsedTime();Dt.position.lerp(Re.current,.05),ft.target.lerp(We.current,.05),ft.update();const qt=v.current,Bt=l.current;if(qt==="HEATING"||qt==="FIRE_ALARM"){oi.visible=!0,zt.visible=!0,k.current.visible=!1,se.current.visible=!1;const rn=qt==="FIRE_ALARM"?1:Math.max(.2,(Bt-.18)/.24);if(K.current&&(K.current.intensity=(2.5+Math.sin(tt*20)*1.5)*rn,K.current.color.setHex(Math.random()>.3?16729344:16755200)),Qr.forEach((Te,et)=>{Te.visible=!0,Te.position.y+=Te.userData.speedY*Ge,Te.position.x+=Math.sin(tt*10+et)*.006;const pn=(Te.position.y-Te.userData.baseY)/1;Te.scale.setScalar(Math.max(.01,(1-pn)*Te.userData.scale*rn)),Te.material.opacity=1-pn,Te.position.y>Te.userData.baseY+.9&&(Te.position.y=Te.userData.baseY,Te.position.x=-.55+(Math.random()-.5)*.5,Te.position.z=(Math.random()-.5)*.4)}),ae.forEach(Te=>{Te.visible=!0,Te.position.y+=Te.userData.speedY*Ge,Te.scale.setScalar(rn),Te.position.y>Te.userData.maxH&&(Te.position.y=1.3,Te.position.x=-.55+(Math.random()-.5)*.4)}),qt==="FIRE_ALARM"){const Te=Math.sin(tt*24)>0;B.current&&$.current&&(B.current.intensity=Te?5:0,$.current.material.emissive=Te?new Et(16711680):new Et(0))}}else if(qt==="SUPPRESSION"){oi.visible=!0,k.current.visible=!0,se.current.visible=!0,Qr.forEach(Te=>{Te.scale.multiplyScalar(.92),Te.scale.x<.05&&(Te.visible=!1)}),K.current&&(K.current.intensity=Math.max(0,K.current.intensity-Ge*4)),ke.forEach((Te,et)=>{Te.visible=!0,Te.position.y-=Te.userData.speed*Ge,Te.position.x+=Math.sin(tt*15+et)*.01,Te.position.y<1.05&&(Te.position.y=Te.userData.origY,Te.position.x=-.55+Te.userData.spread)}),q.current&&(q.current.visible=!0,q.current.scale.lerp(new Z(1,1,1),.08)),ot.forEach((Te,et)=>{Te.visible=!0,Te.position.y+=Math.sin(tt*3+et)*.004,Te.position.x+=Math.cos(tt*2+et)*.004});const rn=Math.sin(tt*30)>0;B.current&&$.current&&(B.current.intensity=rn?4:.2,$.current.material.emissive=rn?new Et(16711680):new Et(3342336))}else qt==="EXTINGUISHED"?(oi.visible=!1,zt.visible=!1,k.current.visible=!1,se.current.visible=!1,K.current&&(K.current.intensity=0),q.current&&(q.current.visible=!0,q.current.scale.set(1,1,1)),B.current&&$.current&&(B.current.intensity=0,$.current.material.emissive=new Et(0))):(oi.visible=!1,zt.visible=!1,k.current.visible=!1,se.current.visible=!1,K.current&&(K.current.intensity=0),q.current&&(q.current.visible=!1),B.current&&$.current&&(B.current.intensity=0,$.current.material.emissive=new Et(0)));Be.render(Fe,Dt)};return Pt(),()=>{cancelAnimationFrame(Nt),window.removeEventListener("resize",kt),Be.domElement.removeEventListener("mousemove",Ct),Be.domElement.removeEventListener("click",jt),Be.dispose()}},[ie,Je]),h.jsx("section",{id:"hero-3d",ref:s,className:"relative w-full h-[350vh] bg-[#07080a]",children:h.jsxs("div",{ref:e,className:"sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-between select-none",children:[h.jsx("canvas",{ref:t,className:"absolute inset-0 w-full h-full block z-0 outline-none"}),h.jsxs("div",{className:"relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pointer-events-none",children:[h.jsxs("div",{className:"flex flex-col gap-1.5 pointer-events-auto",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#d4af37]/40 shadow-glow-gold text-xs font-bold text-[#f3e5ab]",children:[h.jsx(A0,{className:"w-3.5 h-3.5 text-[#d4af37] animate-pulse"}),h.jsx("span",{children:"Simulador 3D Autônomo Outfire"}),h.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#d4af37]"}),h.jsx("span",{className:"text-[11px] font-mono text-gray-300",children:"NBR 14518"})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsxs("span",{className:`px-3 py-1 rounded-lg text-xs font-black tracking-wider uppercase flex items-center gap-1.5 backdrop-blur-md border ${m==="STANDBY"?"bg-emerald-950/80 border-emerald-500/40 text-emerald-300":m==="HEATING"?"bg-amber-950/80 border-amber-500/50 text-amber-300":m==="FIRE_ALARM"?"bg-red-950/90 border-red-500 text-red-200 animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.5)]":m==="SUPPRESSION"?"bg-amber-950/90 border-amber-500 text-amber-200 shadow-[0_0_20px_rgba(245,158,11,0.5)]":"bg-emerald-900/90 border-emerald-400 text-emerald-200"}`,children:[m==="STANDBY"&&h.jsx(Zl,{className:"w-4 h-4 text-emerald-400"}),m==="HEATING"&&h.jsx(uo,{className:"w-4 h-4 text-amber-400 animate-pulse"}),m==="FIRE_ALARM"&&h.jsx(uo,{className:"w-4 h-4 text-red-400 animate-bounce"}),m==="SUPPRESSION"&&h.jsx(uv,{className:"w-4 h-4 text-amber-300 animate-spin"}),m==="EXTINGUISHED"&&h.jsx(nc,{className:"w-4 h-4 text-emerald-400"}),C.systemStatus]}),m==="FIRE_ALARM"&&h.jsxs("span",{className:"px-2.5 py-1 rounded-lg bg-red-600 text-white font-mono font-black text-xs animate-ping",children:["DISPARO EM ",y,"s"]})]})]}),h.jsxs("div",{className:"flex items-center gap-2 pointer-events-auto bg-black/75 backdrop-blur-md p-2 rounded-2xl border border-white/10 shadow-2xl",children:[h.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2",children:[h.jsx(uo,{className:`w-3.5 h-3.5 ${C.temp>200?"text-red-400 animate-pulse":"text-amber-400"}`}),h.jsxs("div",{className:"flex flex-col",children:[h.jsx("span",{className:"text-[9px] text-gray-400 font-mono",children:"TEMP. ÓLEO"}),h.jsxs("span",{className:"text-xs font-bold text-white font-mono",children:[C.temp,"°C"]})]})]}),h.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2",children:[h.jsx(Cv,{className:`w-3.5 h-3.5 ${C.gasStatus==="CORTADO"?"text-red-400":"text-emerald-400"}`}),h.jsxs("div",{className:"flex flex-col",children:[h.jsx("span",{className:"text-[9px] text-gray-400 font-mono",children:"VÁLVULA GÁS"}),h.jsx("span",{className:`text-xs font-bold font-mono ${C.gasStatus==="CORTADO"?"text-red-400":"text-emerald-400"}`,children:C.gasStatus})]})]}),h.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2",children:[h.jsx(R0,{className:`w-3.5 h-3.5 ${C.exhaustStatus==="INTERTRAVADO"?"text-red-400":"text-emerald-400"}`}),h.jsxs("div",{className:"flex flex-col",children:[h.jsx("span",{className:"text-[9px] text-gray-400 font-mono",children:"EXAUSTÃO"}),h.jsx("span",{className:`text-xs font-bold font-mono ${C.exhaustStatus==="INTERTRAVADO"?"text-red-400":"text-emerald-400"}`,children:C.exhaustStatus})]})]})]})]}),_&&h.jsxs("div",{className:"absolute top-28 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-4 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-[#d4af37]/60 text-xs text-[#f3e5ab] font-bold shadow-glow-gold flex items-center gap-2 animate-pulse",children:[h.jsx(T0,{className:"w-3.5 h-3.5 text-[#d4af37]"}),h.jsxs("span",{children:[_," — Clique para interagir"]})]}),h.jsxs("div",{className:"relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 flex flex-col md:flex-row items-center justify-between gap-3",children:[h.jsxs("div",{className:"flex flex-wrap items-center gap-2.5",children:[h.jsxs("button",{onClick:ie,disabled:m==="SUPPRESSION"||m==="EXTINGUISHED",className:`py-2.5 px-5 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-2 transition-all duration-300 border ${m==="FIRE_ALARM"?"bg-gradient-to-r from-red-600 via-rose-500 to-red-700 text-white border-white animate-pulse shadow-[0_0_35px_rgba(225,29,72,0.8)] scale-105":"bg-[#181212]/90 hover:bg-red-950/80 text-red-300 border-red-500/40 shadow-lg"}`,children:[h.jsx(vv,{className:"w-4 h-4 text-red-400"}),h.jsx("span",{children:"🚨 Disparar Acionador Manual"})]}),(m==="EXTINGUISHED"||m==="FIRE_ALARM"||m==="SUPPRESSION")&&h.jsxs("button",{onClick:fe,className:"py-2.5 px-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center gap-2 border border-white/15 transition-all duration-200 active:scale-95",children:[h.jsx(yv,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Restaurar"})]})]}),h.jsxs("div",{className:"flex items-center gap-2 text-xs font-medium text-[#f3e5ab]/90 bg-black/75 backdrop-blur-md px-4 py-2 rounded-full border border-[#d4af37]/30 shadow-lg",children:[h.jsx(ov,{className:"w-4 h-4 text-[#d4af37] animate-bounce"}),h.jsx("span",{children:r<.85?"Role a página para ver a evolução do fogo e o combate automático":"Continue rolando para conhecer os detalhes técnicos da Central Outfire"})]}),h.jsxs("div",{className:"hidden sm:flex items-center gap-1 bg-black/70 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 text-xs",children:[h.jsxs("span",{className:"text-[10px] text-gray-400 px-2 font-mono flex items-center gap-1",children:[h.jsx(sv,{className:"w-3 h-3 text-[#d4af37]"})," Câmera:"]}),h.jsx("button",{onClick:()=>_e("geral"),className:`px-2.5 py-1 rounded-xl font-bold transition-all ${D==="geral"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-300 hover:text-white"}`,children:"Geral"}),h.jsx("button",{onClick:()=>_e("central"),className:`px-2.5 py-1 rounded-xl font-bold transition-all ${D==="central"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-300 hover:text-white"}`,children:"Central"}),h.jsx("button",{onClick:()=>_e("fritadeira"),className:`px-2.5 py-1 rounded-xl font-bold transition-all ${D==="fritadeira"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-300 hover:text-white"}`,children:"Fritadeira"}),h.jsx("button",{onClick:()=>_e("botoeira"),className:`px-2.5 py-1 rounded-xl font-bold transition-all ${D==="botoeira"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-300 hover:text-white"}`,children:"Botoeira"})]})]})]})})},mw=()=>{const[s,e]=Qe.useState("ihm"),t=[{icon:fv,title:"Multicoifa Independente (Até 3 Coifas)",desc:"Capacidade de proteger e controlar até 3 coifas simultaneamente de maneira 100% autônoma. O disparo em uma coifa não interrompe a operação das demais."},{icon:xm,title:"IHM Touchscreen Inteligente",desc:"Interface gráfica colorida touch com diagnóstico contínuo de baterias, rede elétrica, pressão de cilindros e estado das válvulas de gás."},{icon:Tv,title:"Alertas Inteligentes por Voz Falada",desc:"Diferente de sistemas que apenas apitam gerando pânico, a Central VTS emite avisos sonoros falados em português, instruindo a brigada com clareza."},{icon:rv,title:"Agenda Semanal Automática de Gás",desc:"Programe os horários em que a válvula de gás deve abrir e fechar a cada dia da semana. Garante segurança total fora do horário de expediente e evita esquecimentos."},{icon:Md,title:"Proteção Anti-Disparo com Botão Abortar",desc:"Em caso de alarme em falso, a tela exibe contagem regressiva configurável (ex: 60s) permitindo abortar com um toque antes de descarregar os cilindros."},{icon:A0,title:"Alarme Convencional Segregado",desc:"Integração perfeita com o sistema predial do shopping/edifício, mantendo a linha de supressão por saponificante imune a fumaças corriqueiras de grelhados."}];return h.jsxs("section",{id:"central-vts",className:"py-24 bg-[#08090c] relative overflow-hidden",children:[h.jsx("div",{className:"absolute top-1/4 -left-48 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[140px] pointer-events-none"}),h.jsx("div",{className:"absolute bottom-10 -right-48 w-96 h-96 bg-[#997b1a]/10 rounded-full blur-[140px] pointer-events-none"}),h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[h.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold tracking-wide uppercase mb-4",children:[h.jsx(xm,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Engenharia e Automação Nacional"]}),h.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Central de Comando Inteligente ",h.jsx("br",{}),h.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"Outfire VTS 32S3"})]}),h.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"O verdadeiro cérebro do sistema de supressão. Controle absoluto, monitoramento em tempo real, automação de gás e proteção anti-disparo acidental na ponta dos seus dedos."})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20",children:[h.jsxs("div",{className:"lg:col-span-7 flex flex-col items-center",children:[h.jsxs("div",{className:"relative w-full max-w-xl aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#14171e] to-[#0a0b0e] border border-[#d4af37]/30 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex items-center justify-center overflow-hidden group",children:[s==="ihm"&&h.jsx("img",{src:"/assets/central-outfire-fundo-removido.png",alt:"Central Outfire VTS 32S3",className:"max-h-full max-w-full object-contain filter drop-shadow-[0_20px_35px_rgba(212,175,55,0.25)] transition-all duration-500 group-hover:scale-105"}),s==="interno"&&h.jsx("img",{src:"/assets/central-outfire-interno.jpg",alt:"Placa e Relés Internos da Central Outfire",className:"w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:scale-105"}),s==="instalado"&&h.jsx("img",{src:"/assets/central-outfire-instalada.jpg",alt:"Central Outfire Instalada em Cozinha Real",className:"w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:scale-105"}),h.jsxs("div",{className:"absolute bottom-4 left-4 bg-[#08090b]/90 backdrop-blur-md border border-[#d4af37]/30 px-3 py-1.5 rounded-lg text-xs font-mono text-[#f3e5ab]",children:[s==="ihm"&&"Vista Frontal do Gabinete & IHM",s==="interno"&&"Eletrônica Robusta, Relés de Potência & Bornes",s==="instalado"&&"Instalação Real em Cozinha Profissional"]})]}),h.jsxs("div",{className:"flex items-center gap-2 mt-4 bg-[#12141a] p-1.5 rounded-2xl border border-[#d4af37]/25 shadow-md",children:[h.jsx("button",{onClick:()=>e("ihm"),className:`px-4 py-2 rounded-xl text-xs font-bold transition-all ${s==="ihm"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-400 hover:text-white"}`,children:"Gabinete & IHM Touch"}),h.jsx("button",{onClick:()=>e("interno"),className:`px-4 py-2 rounded-xl text-xs font-bold transition-all ${s==="interno"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-400 hover:text-white"}`,children:"Eletrônica Interna"}),h.jsx("button",{onClick:()=>e("instalado"),className:`px-4 py-2 rounded-xl text-xs font-bold transition-all ${s==="instalado"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-400 hover:text-white"}`,children:"Instalação Real"})]})]}),h.jsx("div",{className:"lg:col-span-5 space-y-4",children:h.jsxs("div",{className:"glass-panel-gold p-6 sm:p-8 rounded-3xl border border-[#d4af37]/30 relative",children:[h.jsxs("div",{className:"flex items-center justify-between mb-6",children:[h.jsxs("div",{children:[h.jsx("h3",{className:"text-2xl font-black text-white font-sans",children:"Painel Central VTS 32S3"}),h.jsx("span",{className:"text-xs text-[#e5c05d] font-mono font-bold",children:"AUTOMAÇÃO & SUPRESSÃO CONFORME NBR 14518"})]}),h.jsx("div",{className:"w-12 h-12 rounded-2xl bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]",children:h.jsx(bv,{className:"w-6 h-6"})})]}),h.jsxs("div",{className:"space-y-3.5 text-sm",children:[h.jsxs("div",{className:"flex items-start gap-3",children:[h.jsx(xs,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),h.jsxs("span",{className:"text-gray-300",children:[h.jsx("strong",{children:"Dupla Ação de Supressão:"})," Saponificante na cocção + CO2 e Dampers no duto."]})]}),h.jsxs("div",{className:"flex items-start gap-3",children:[h.jsx(xs,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),h.jsxs("span",{className:"text-gray-300",children:[h.jsx("strong",{children:"Corte de Gás e Exaustor:"})," Intertravamento elétrico instantâneo ao sinal de disparo."]})]}),h.jsxs("div",{className:"flex items-start gap-3",children:[h.jsx(xs,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),h.jsxs("span",{className:"text-gray-300",children:[h.jsx("strong",{children:"Detecção Térmica Regulável:"})," Calibração em 145°C na coifa e 300°C no duto."]})]}),h.jsxs("div",{className:"flex items-start gap-3",children:[h.jsx(xs,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),h.jsxs("span",{className:"text-gray-300",children:[h.jsx("strong",{children:"Bateria de Backup Interna:"})," Funcionamento ininterrupto mesmo com queda de rede."]})]}),h.jsxs("div",{className:"flex items-start gap-3",children:[h.jsx(xs,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),h.jsxs("span",{className:"text-gray-300",children:[h.jsx("strong",{children:"Menu protegido por senha:"})," Previne alterações indevidas por pessoas não autorizadas."]})]})]}),h.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3",children:[h.jsxs("a",{href:"#calculadora",className:"flex-1 py-3 px-4 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black text-center text-sm rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-2",children:[h.jsx("span",{children:"Dimensionar Cozinha"}),h.jsx(Hl,{className:"w-4 h-4 fill-black"})]}),h.jsx("a",{href:"/assets/manual-instalacao-central-outfire.pdf",target:"_blank",className:"py-3 px-4 bg-[#14171e] hover:bg-[#1f2430] text-[#f3e5ab] font-bold text-center text-sm rounded-xl border border-[#d4af37]/30 transition-all",children:"Baixar Manual Técnico"})]})]})})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:t.map((r,o)=>{const l=r.icon;return h.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-white/5 hover:border-[#d4af37]/40 transition-all duration-300 hover:-translate-y-1 group",children:[h.jsx("div",{className:"w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-300 shadow-sm",children:h.jsx(l,{className:"w-6 h-6"})}),h.jsx("h4",{className:"text-lg font-bold text-white mb-2 font-sans group-hover:text-[#f3e5ab] transition-colors",children:r.title}),h.jsx("p",{className:"text-sm text-gray-400 leading-relaxed",children:r.desc})]},o)})})]})]})},gw=()=>h.jsx("section",{id:"por-que-outfire",className:"py-24 bg-[#0a0c0e] relative border-t border-white/5",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wide mb-4",children:[h.jsx(Md,{className:"w-3.5 h-3.5"}),"Entenda o Risco Real em Cozinhas Industriais"]}),h.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Por Que Extintores Comuns e Água ",h.jsx("br",{}),h.jsx("span",{className:"text-red-500",children:"São Fatais em Incêndio de Óleo?"})]}),h.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Mais de 65% dos incêndios que destroem restaurantes começam na linha de cocção. Conheça a diferença entre uma tragédia anunciada e a proteção autônoma Classe K."})]}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-16",children:[h.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-red-900/30 bg-gradient-to-b from-red-950/20 to-black/40 relative flex flex-col justify-between",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsx("span",{className:"text-xs font-mono font-bold bg-red-600/20 text-red-400 px-3 py-1 rounded-full border border-red-500/30",children:"PERIGO EXTREMO"}),h.jsx(gm,{className:"w-7 h-7 text-red-500"})]}),h.jsx("h3",{className:"text-xl font-bold text-white mb-2 font-sans",children:"Jogar Água em Óleo Fervente"}),h.jsxs("p",{className:"text-sm text-gray-400 leading-relaxed mb-6",children:["A água ferve a 100°C e o óleo em chamas está acima de 360°C. Ao atingir o fundo da cuba, a água vaporiza instantaneamente, expandindo seu volume em ",h.jsx("strong",{children:"1.700 vezes"}),"."]}),h.jsxs("div",{className:"p-4 rounded-xl bg-red-950/30 border border-red-900/40 text-xs text-red-300 space-y-2",children:[h.jsxs("div",{className:"flex items-center gap-2 font-bold",children:[h.jsx(uo,{className:"w-4 h-4 text-red-400"}),"Efeito Bola de Fogo (BLEVE):"]}),h.jsx("p",{children:"O óleo ardente é arremessado no teto e contra os cozinheiros em uma fração de segundo, gerando queimaduras de 3° grau e destruição imediata da cozinha."})]})]}),h.jsx("div",{className:"mt-6 pt-4 border-t border-red-900/30 text-xs font-mono text-red-400 font-bold",children:"Resultado: Tragédia & Risco de Morte"})]}),h.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-amber-900/30 bg-gradient-to-b from-amber-950/10 to-black/40 relative flex flex-col justify-between",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsx("span",{className:"text-xs font-mono font-bold bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full border border-amber-500/30",children:"INEFICAZ NA PRÁTICA"}),h.jsx(gm,{className:"w-7 h-7 text-amber-500"})]}),h.jsx("h3",{className:"text-xl font-bold text-white mb-2 font-sans",children:"Extintor Manual de Pó (ABC)"}),h.jsxs("p",{className:"text-sm text-gray-400 leading-relaxed mb-6",children:["Extintores de pó químico comum sufocam a chama por poucos segundos, mas ",h.jsx("strong",{children:"não resfriam a massa de óleo"}),", que permanece acima do ponto de ignição."]}),h.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/20 border border-amber-900/30 text-xs text-amber-300 space-y-2",children:[h.jsxs("div",{className:"flex items-center gap-2 font-bold",children:[h.jsx(Md,{className:"w-4 h-4 text-amber-400"}),"Reignição e Sujeira Tóxica:"]}),h.jsx("p",{children:"Assim que o pó se dissipa ou o ar circula, o óleo em chamas volta a pegar fogo com a mesma violência. Além disso, o pó contamina todos os alimentos e dutos."})]})]}),h.jsx("div",{className:"mt-6 pt-4 border-t border-amber-900/30 text-xs font-mono text-amber-400 font-bold",children:"Resultado: Reignição e Perda Total"})]}),h.jsxs("div",{className:"glass-panel-gold p-6 sm:p-8 rounded-3xl border border-[#d4af37]/60 bg-gradient-to-b from-[#1a170e]/80 via-[#0e1015] to-[#08090c] relative flex flex-col justify-between shadow-glow-gold",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsx("span",{className:"text-xs font-mono font-black bg-[#d4af37] text-black px-3 py-1 rounded-full shadow-glow-gold",children:"SOLUÇÃO DEFINITIVA OUTFIRE"}),h.jsx(nc,{className:"w-7 h-7 text-[#d4af37]"})]}),h.jsx("h3",{className:"text-xl font-black text-white mb-2 font-sans",children:"Sistema Automatizado Outfire"}),h.jsxs("p",{className:"text-sm text-gray-300 leading-relaxed mb-6",children:["Ao disparar, o agente saponificante reage quimicamente com os ácidos graxos do óleo quente em um processo chamado ",h.jsx("strong",{children:"saponificação"}),"."]}),h.jsxs("div",{className:"p-4 rounded-xl bg-[#14171e] border border-[#d4af37]/30 text-xs text-[#f3e5ab] space-y-2",children:[h.jsxs("div",{className:"flex items-center gap-2 font-bold text-[#e5c05d]",children:[h.jsx(ic,{className:"w-4 h-4 text-[#d4af37]"}),"Manta Espumosa e Resfriamento:"]}),h.jsx("p",{className:"text-gray-300",children:"Cria uma espessa manta de sabão alcalino que bloqueia o oxigênio, impede a liberação de vapores inflamáveis e resfria o óleo rapidamente. O CO2 protege o duto sem deixar resíduos."})]})]}),h.jsx("div",{className:"mt-6 pt-4 border-t border-[#d4af37]/30 text-xs font-mono text-[#e5c05d] font-bold",children:"Resultado: Fogo 100% Extinto & Cozinha Salva"})]})]}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 p-8 rounded-3xl bg-[#121418] border border-white/10 text-center",children:[h.jsxs("div",{className:"p-4",children:[h.jsx("div",{className:"text-3xl sm:text-4xl font-black text-red-500 font-mono",children:"65%"}),h.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"dos incêndios em restaurantes iniciam nos equipamentos de cocção e coifas."})]}),h.jsxs("div",{className:"p-4 border-t md:border-t-0 md:border-l border-white/10",children:[h.jsx("div",{className:"text-3xl sm:text-4xl font-black text-amber-400 font-mono",children:"360°C"}),h.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"temperatura crítica em que o óleo vegetal entra em autoignição espontânea."})]}),h.jsxs("div",{className:"p-4 border-t md:border-t-0 md:border-l border-white/10",children:[h.jsx("div",{className:"text-3xl sm:text-4xl font-black text-emerald-400 font-mono",children:"0 seg"}),h.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"tempo de hesitação humana: a Central Outfire atua 100% de forma autônoma."})]}),h.jsxs("div",{className:"p-4 border-t md:border-t-0 md:border-l border-white/10",children:[h.jsx("div",{className:"text-3xl sm:text-4xl font-black text-blue-400 font-mono",children:"100%"}),h.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"garantia de conformidade para aprovação em vistoria do Corpo de Bombeiros (AVCB)."})]})]})]})}),xw=()=>{const s=[{code:"ABNT NBR 14518",title:"Sistemas de Ventilação para Cozinhas Profissionais",authority:"Associação Brasileira de Normas Técnicas",details:"Estabelece a obrigatoriedade de sistema fixo automático de extinção de incêndio para coifas, dutos e equipamentos de cocção com óleo ou gordura.",highlights:["Intertravamento obrigatório de gás e energia elétrica","Desligamento automático do sistema de exaustão mecânica","Proteção específica por agente Classe K nos aparelhos de queima","Dampers corta-fogo para bloqueio de propagação em dutos"]},{code:"NFPA 96 & NFPA 17A",title:"Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations",authority:"National Fire Protection Association (USA)",details:"Padrão global mais respeitado do mundo para dimensionamento de agentes saponificantes líquidos e inundação por gás inerte em dutos de cocção comercial.",highlights:["Tempo máximo de resposta de detecção térmica","Cobertura milimétrica por bico aspersor calibrado","Mínimo de autonomia de agente extintor para resfriamento total","Acionador manual de emergência em rota de fuga"]},{code:"Instruções Técnicas do Corpo de Bombeiros",title:"Emissão e Renovação de AVCB / CLCB",authority:"Polícia Militar do Estado de São Paulo / Corpos de Bombeiros Estaduais",details:"Exigência legal indispensável para a liberação de alvarás de funcionamento de restaurantes, lanchonetes, padarias, hotéis e praças de alimentação de shoppings.",highlights:["Condição mandatória para aprovação em vistoria física","Evita multas pesadas e interdição cautelar imediata da cozinha","Garante laudo ART emitido por Engenheiro Mecânico credenciado","Laudo de comissionamento e teste hidrostático"]}];return h.jsx("section",{id:"normas",className:"py-24 bg-[#08090c] relative",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide mb-4",children:[h.jsx(Sv,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Conformidade Regulatória Obrigatória"]}),h.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Normas Técnicas & Exigências ",h.jsx("br",{}),h.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"do Corpo de Bombeiros (AVCB)"})]}),h.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Instalar o sistema Outfire não é apenas segurança: é uma exigência legal para manter seu restaurante aberto, aprovado em vistorias e coberto pela apólice de seguro."})]}),h.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16",children:s.map((e,t)=>h.jsxs("div",{className:"glass-panel-gold p-6 sm:p-8 rounded-3xl border border-[#d4af37]/25 hover:border-[#d4af37]/60 transition-all flex flex-col justify-between shadow-lg",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsx("span",{className:"text-xs font-mono font-bold bg-[#d4af37]/15 text-[#e5c05d] px-3 py-1 rounded-full border border-[#d4af37]/30",children:e.code}),h.jsx(dv,{className:"w-6 h-6 text-[#d4af37]"})]}),h.jsx("h3",{className:"text-xl font-bold text-white mb-1 font-sans",children:e.title}),h.jsx("span",{className:"text-xs text-[#e5c05d] block mb-4 font-mono font-bold",children:e.authority}),h.jsx("p",{className:"text-sm text-gray-300 leading-relaxed mb-6",children:e.details}),h.jsx("div",{className:"space-y-2.5 pt-4 border-t border-white/10",children:e.highlights.map((r,o)=>h.jsxs("div",{className:"flex items-start gap-2.5 text-xs text-gray-300",children:[h.jsx(nc,{className:"w-4 h-4 text-[#d4af37] shrink-0 mt-0.5"}),h.jsx("span",{children:r})]},o))})]}),h.jsxs("div",{className:"mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-blue-400 font-semibold",children:[h.jsx("span",{children:"100% Atendido pelo Sistema Outfire"}),h.jsx(lv,{className:"w-4 h-4"})]})]},t))}),h.jsxs("div",{className:"p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-red-950/40 via-black/60 to-red-950/40 border border-red-500/30 flex flex-col md:flex-row items-center gap-6",children:[h.jsx("div",{className:"w-16 h-16 rounded-2xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500 shrink-0",children:h.jsx(iv,{className:"w-8 h-8"})}),h.jsxs("div",{className:"flex-1 text-center md:text-left",children:[h.jsx("h4",{className:"text-lg sm:text-xl font-bold text-white mb-1",children:"Atenção: Shoppings e Seguradoras não toleram improvisos!"}),h.jsxs("p",{className:"text-sm text-gray-300 leading-relaxed",children:["Em caso de princípio de incêndio em coifas sem sistema fixo automatizado conforme a ",h.jsx("strong",{children:"NBR 14518"}),", as companhias de seguro negam o pagamento da indenização por infração grave às normas. Grandes shoppings exigem laudo de comissionamento Outfire para liberar a operação da loja."]})]}),h.jsx("div",{className:"shrink-0",children:h.jsx("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20preciso%20de%20um%20laudo%20ou%20projeto%20Outfire%20para%20aprovar%20minha%20cozinha%20no%20Corpo%20de%20Bombeiros%2FShopping.",target:"_blank",rel:"noopener noreferrer",className:"py-3 px-6 bg-red-600 hover:bg-red-500 text-white font-bold text-sm rounded-xl shadow-glow-red transition-all block text-center",children:"Consultar Engenheiro Outfire"})})]})]})})},vw=({onAddToCart:s})=>{var M,_;const[e,t]=Qe.useState(1),[r,o]=Qe.useState(9),[l,u]=Qe.useState(!0),[d,p]=Qe.useState([{id:1,name:"Coifa Principal (Cocção Pesada)",lengthMeters:2.5,appliances:[{id:"1",name:"Fritadeira Industrial (2 cubas)",type:"fritadeira",icon:"🍟",widthMeters:.6},{id:"2",name:"Fogão Industrial 6 Bocas",type:"fogao",icon:"🍳",widthMeters:1.1},{id:"3",name:"Chapa de Lanche / Bifeira",type:"chapa",icon:"🥩",widthMeters:.8}]}]),m=T=>{if(t(T),T>d.length){const D=[...d];for(let R=d.length+1;R<=T;R++)D.push({id:R,name:`Coifa Setor ${R}`,lengthMeters:2,appliances:[{id:`${R}-1`,name:"Fogão 4 Bocas",type:"fogao",icon:"🍳",widthMeters:.9},{id:`${R}-2`,name:"Chapa Elétrica/Gás",type:"chapa",icon:"🥩",widthMeters:.8}]});p(D)}else T<d.length&&p(d.slice(0,T))},x=(T,D)=>{const R=[...d];R[T].lengthMeters=Math.max(1,Math.min(8,Number(D.toFixed(1)))),p(R)},v=(T,D)=>{const R={fritadeira:"Fritadeira Industrial",fogao:"Fogão Industrial",chapa:"Chapa Profissional",charbroiler:"Charbroiler / Grelha"},U={fritadeira:"🍟",fogao:"🍳",chapa:"🥩",charbroiler:"🔥"},L={fritadeira:.5,fogao:.9,chapa:.8,charbroiler:.7},O=[...d];O[T].appliances.push({id:Math.random().toString(36).substring(7),name:R[D],type:D,icon:U[D],widthMeters:L[D]}),p(O)},y=(T,D)=>{const R=[...d];R[T].appliances.splice(D,1),p(R)},S=Qe.useMemo(()=>{let T=0,D=0,R=0,U=0;d.forEach(me=>{T+=me.appliances.length,D+=2,l&&(R+=1);const le=Math.max(1,Math.round(me.lengthMeters/.9));U+=le});const L=T+D+R,O=L*2,H=Math.max(9,O);let b=9;H>9&&H<=16?b=16:H>16&&H<=25?b=25:H>25&&(b=Math.ceil(H/9)*9);const P=Math.max(1,Math.ceil(r/3)),B=P,$=Math.max(10,Math.ceil(r/3*5)),K=$<=10?10:$<=25?25:45,ue=`Central Outfire VTS 32S3 (${e} Coifa${e>1?"s":""} Independentes)`,de=e===1?8900:e===2?14500:19800,re=L*185+P*210,Q=U*295+B*320,q=de+re+Q+1200;return{applianceNozzlesCount:T,plenumNozzlesCount:D,damperNozzlesCount:R,totalSaponificanteNozzles:L,saponificanteLiters:H,recommendedSaponificanteCylinderLiters:b,hoodSensorsCount:U,co2NozzlesCount:P,ductSensorsCount:B,co2Kg:$,recommendedCo2CylinderKg:K,centralModel:ue,hoodsCount:e,dampersCount:e,gasValvesCount:1,estimatedPriceBRL:q}},[d,r,l,e]),A=()=>{let T=`🔥 *ORÇAMENTO TÉCNICO - SISTEMA OUTFIRE VTS 32S3*

`;T+=`Olá, equipe de Engenharia da Outfire! Realizei o dimensionamento da minha cozinha no site outfire.com.br e gostaria de uma proposta formal:

`,T+=`🏢 *Configuração da Cozinha:*
`,T+=`• Quantidade de Coifas: ${e} independente(s)
`,T+=`• Comprimento do Duto de Exaustão: ${r} metros

`,d.forEach((R,U)=>{T+=`📍 *Coifa ${U+1} (${R.lengthMeters}m):*
`,T+=`  Equipamentos sob a coifa: ${R.appliances.map(L=>L.name).join(", ")||"Nenhum"}
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

`,T+="Gostaria de agendar uma consulta técnica ou receber a proposta com laudo ART para AVCB. Aguardo retorno!";const D=encodeURIComponent(T);window.open(`https://wa.me/5515996576807?text=${D}`,"_blank")},C=()=>{const T={id:`custom-kit-${Date.now()}`,sku:`OUT-CUSTOM-${e}C`,name:`Kit Personalizado Outfire VTS (${e} Coifa${e>1?"s":""} + Duto ${r}m)`,category:"kit",priceBRL:S.estimatedPriceBRL,description:`Sistema customizado: ${S.totalSaponificanteNozzles} bicos saponificante (${S.recommendedSaponificanteCylinderLiters}L), ${S.co2NozzlesCount} bicos CO2 (${S.recommendedCo2CylinderKg}kg), ${S.hoodSensorsCount} sensores 145°C e ${S.ductSensorsCount} sensores 300°C.`,image:"/assets/central-outfire-fundo-removido.png",specs:[`${S.centralModel}`,`Cilindro Saponificante Classe K: ${S.recommendedSaponificanteCylinderLiters} Litros`,`Cilindro CO2 pressurizado: ${S.recommendedCo2CylinderKg} Kg`,`Bicos Saponificante em Inox: ${S.totalSaponificanteNozzles} unidades`,`Bicos CO2 em Duto: ${S.co2NozzlesCount} unidades`,`Sensores Reguláveis: ${S.hoodSensorsCount} (145°C) + ${S.ductSensorsCount} (300°C)`,"Válvula de corte rápido de gás com rearme manual","Dampers corta-fogo com atuador elétrico"],inStock:!0};s(T)};return h.jsx("section",{id:"calculadora",className:"py-24 bg-[#0a0b0e] relative border-t border-white/5",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide mb-4",children:[h.jsx(b0,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Engenharia sob Medida"]}),h.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Calculadora de Supressão & ",h.jsx("br",{}),h.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"Diagrama Automatizado da sua Cozinha"})]}),h.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Informe as medidas da sua coifa, duto e equipamentos. O sistema calcula a quantidade exata de bicos de saponificante, CO2, sensores e gera o diagrama técnico em tempo real."})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16",children:[h.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[h.jsxs("div",{className:"glass-panel-gold p-6 rounded-2xl border border-[#d4af37]/30",children:[h.jsxs("label",{className:"text-sm font-bold text-white block mb-3 flex items-center justify-between",children:[h.jsx("span",{children:"1. Quantidade de Coifas Independentes:"}),h.jsx("span",{className:"text-xs font-mono text-[#e5c05d]",children:"Até 3 simultâneas"})]}),h.jsx("div",{className:"grid grid-cols-3 gap-2",children:[1,2,3].map(T=>h.jsxs("button",{onClick:()=>m(T),className:`py-3 px-4 rounded-xl text-sm font-bold flex flex-col items-center gap-1 transition-all ${e===T?"bg-[#d4af37] text-black shadow-glow-gold border border-[#e5c05d]":"bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"}`,children:[h.jsxs("span",{children:[T," ",T===1?"Coifa":"Coifas"]}),h.jsx("span",{className:"text-[10px] opacity-75 font-normal",children:T===1?"Individual":"Setorizada"})]},T))})]}),h.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-white/10",children:[h.jsxs("div",{className:"flex items-center justify-between mb-2",children:[h.jsxs("label",{className:"text-sm font-bold text-white flex items-center gap-2",children:[h.jsx(R0,{className:"w-4 h-4 text-cyan-400"}),h.jsx("span",{children:"2. Comprimento do Duto de Exaustão:"})]}),h.jsxs("span",{className:"font-mono text-base font-black text-cyan-400",children:[r," metros"]})]}),h.jsx("input",{type:"range",min:"3",max:"30",step:"1",value:r,onChange:T=>o(Number(T.target.value)),className:"w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"}),h.jsxs("div",{className:"flex justify-between text-[11px] text-gray-400 mt-2 font-mono",children:[h.jsx("span",{children:"3 m (Curto)"}),h.jsx("span",{children:"15 m (Médio)"}),h.jsx("span",{children:"30 m (Longo)"})]}),h.jsxs("div",{className:"mt-4 p-3 bg-cyan-950/20 border border-cyan-800/30 rounded-xl text-xs text-cyan-200 flex items-center justify-between",children:[h.jsx("span",{children:"Regra técnica: 1 bico de CO2 + 1 sensor (300°C) a cada 3m"}),h.jsxs("span",{className:"font-mono font-bold text-cyan-400",children:[S.co2NozzlesCount," bicos CO2"]})]})]}),d.map((T,D)=>h.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-white/10 space-y-4",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-3",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"w-6 h-6 rounded-full bg-red-600/30 border border-red-500/40 text-red-400 text-xs font-bold flex items-center justify-center",children:D+1}),h.jsx("h4",{className:"font-bold text-white text-sm",children:T.name})]}),h.jsxs("span",{className:"text-xs font-mono font-bold text-amber-400",children:[T.lengthMeters," m"]})]}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex justify-between text-xs text-gray-400 mb-1.5",children:[h.jsx("span",{children:"Comprimento da Coifa:"}),h.jsxs("span",{children:[T.lengthMeters," metros lineares"]})]}),h.jsx("input",{type:"range",min:"1.0",max:"6.0",step:"0.5",value:T.lengthMeters,onChange:R=>x(D,Number(R.target.value)),className:"w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-500"})]}),h.jsxs("div",{children:[h.jsxs("label",{className:"text-xs font-bold text-gray-300 block mb-2",children:["Equipamentos sob a Coifa (",T.appliances.length," protegidos):"]}),h.jsx("div",{className:"space-y-2 mb-3",children:T.appliances.map((R,U)=>h.jsxs("div",{className:"flex items-center justify-between p-2.5 bg-white/5 rounded-xl border border-white/5 text-xs",children:[h.jsxs("div",{className:"flex items-center gap-2 text-gray-200",children:[h.jsx("span",{className:"text-base",children:R.icon}),h.jsx("span",{className:"font-medium",children:R.name}),h.jsx("span",{className:"text-[10px] bg-[#1a170e] text-[#e5c05d] px-2 py-0.5 rounded border border-[#d4af37]/40 font-mono font-bold",children:"1 bico Saponificante"})]}),h.jsx("button",{onClick:()=>y(D,U),className:"p-1 text-gray-400 hover:text-red-400 transition-colors",title:"Remover equipamento",children:h.jsx(C0,{className:"w-3.5 h-3.5"})})]},R.id))}),h.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-1.5",children:[h.jsxs("button",{onClick:()=>v(D,"fritadeira"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[h.jsx(oo,{className:"w-3 h-3 text-[#d4af37]"}),h.jsx("span",{children:"+ Fritadeira"})]}),h.jsxs("button",{onClick:()=>v(D,"fogao"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[h.jsx(oo,{className:"w-3 h-3 text-[#d4af37]"}),h.jsx("span",{children:"+ Fogão"})]}),h.jsxs("button",{onClick:()=>v(D,"chapa"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[h.jsx(oo,{className:"w-3 h-3 text-[#d4af37]"}),h.jsx("span",{children:"+ Chapa"})]}),h.jsxs("button",{onClick:()=>v(D,"charbroiler"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[h.jsx(oo,{className:"w-3 h-3 text-[#d4af37]"}),h.jsx("span",{children:"+ Grelha"})]})]})]})]},T.id))]}),h.jsx("div",{className:"lg:col-span-7 space-y-6",children:h.jsxs("div",{className:"glass-panel p-6 rounded-3xl border border-white/10 overflow-hidden shadow-2xl relative",children:[h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"}),h.jsx("h3",{className:"font-bold text-white text-base font-sans",children:"Diagrama Esquemático da sua Cozinha"})]}),h.jsx("span",{className:"text-[11px] font-mono text-gray-400 bg-black/40 px-2 py-1 rounded-lg border border-white/5",children:"RENDERIZADO EM TEMPO REAL"})]}),h.jsxs("div",{className:"relative w-full aspect-[16/9] bg-[#0d0f14] rounded-2xl border border-white/10 p-4 flex flex-col justify-between overflow-hidden",children:[h.jsx("div",{className:"absolute inset-0 opacity-15 pointer-events-none",style:{backgroundImage:"radial-gradient(circle, #4a5568 1px, transparent 1px)",backgroundSize:"20px 20px"}}),h.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 600 340",children:[h.jsxs("defs",{children:[h.jsxs("linearGradient",{id:"ductGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[h.jsx("stop",{offset:"0%",stopColor:"#4a5568"}),h.jsx("stop",{offset:"50%",stopColor:"#718096"}),h.jsx("stop",{offset:"100%",stopColor:"#4a5568"})]}),h.jsxs("linearGradient",{id:"hoodGrad",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[h.jsx("stop",{offset:"0%",stopColor:"#2d3748"}),h.jsx("stop",{offset:"100%",stopColor:"#1a202c"})]})]}),h.jsx("rect",{x:"250",y:"40",width:"100",height:"70",fill:"url(#ductGrad)",stroke:"#a0aec0",strokeWidth:"1.5"}),h.jsx("rect",{x:"250",y:"30",width:"300",height:"40",fill:"url(#ductGrad)",stroke:"#a0aec0",strokeWidth:"1.5"}),h.jsx("rect",{x:"360",y:"24",width:"45",height:"52",fill:"#9b2c2c",stroke:"#feb2b2",strokeWidth:"1.5",rx:"3"}),h.jsx("text",{x:"382",y:"54",fill:"#ffffff",fontSize:"9",fontWeight:"bold",textAnchor:"middle",children:"DAMPER"}),Array.from({length:S.co2NozzlesCount}).map((T,D)=>{const R=270+D*(250/Math.max(1,S.co2NozzlesCount));return h.jsxs("g",{children:[h.jsx("circle",{cx:R,cy:"50",r:"6",fill:"#e53e3e",stroke:"#ffffff",strokeWidth:"1.5"}),h.jsx("text",{x:R,y:"68",fill:"#fc8181",fontSize:"8",fontWeight:"bold",textAnchor:"middle",children:"CO2"}),h.jsx("rect",{x:R+12,y:"44",width:"10",height:"10",fill:"#805ad5",stroke:"#ffffff",strokeWidth:"1",transform:`rotate(45, ${R+17}, 49)`})]},`co2-${D}`)}),h.jsx("polygon",{points:"60,150 120,110 480,110 540,150",fill:"url(#hoodGrad)",stroke:"#cbd5e0",strokeWidth:"2"}),h.jsx("rect",{x:"60",y:"150",width:"480",height:"25",fill:"#2d3748",stroke:"#cbd5e0",strokeWidth:"1.5"}),h.jsxs("text",{x:"300",y:"167",fill:"#cbd5e0",fontSize:"11",fontWeight:"bold",textAnchor:"middle",letterSpacing:"2",children:["COIFA INOX ",(M=d[0])==null?void 0:M.lengthMeters,"m (",e," ZONA",e>1?"S":"",")"]}),h.jsx("circle",{cx:"180",cy:"130",r:"6",fill:"#d4af37",stroke:"#ffffff",strokeWidth:"1.5"}),h.jsx("text",{x:"180",y:"120",fill:"#f6e05e",fontSize:"8",fontWeight:"bold",textAnchor:"middle",children:"PLENO 1"}),h.jsx("circle",{cx:"420",cy:"130",r:"6",fill:"#d4af37",stroke:"#ffffff",strokeWidth:"1.5"}),h.jsx("text",{x:"420",y:"120",fill:"#f6e05e",fontSize:"8",fontWeight:"bold",textAnchor:"middle",children:"PLENO 2"}),Array.from({length:S.hoodSensorsCount}).map((T,D)=>{const R=100+(D+1)*(400/(S.hoodSensorsCount+1));return h.jsxs("g",{children:[h.jsx("circle",{cx:R,cy:"142",r:"5",fill:"#dd6b20",stroke:"#ffffff",strokeWidth:"1.2"}),h.jsx("text",{x:R,y:"158",fill:"#fbd38d",fontSize:"7",fontWeight:"bold",textAnchor:"middle",children:"145°C"})]},`sensor-${D}`)}),h.jsx("rect",{x:"60",y:"240",width:"480",height:"70",fill:"#1a202c",stroke:"#4a5568",strokeWidth:"1.5"}),(_=d[0])==null?void 0:_.appliances.map((T,D)=>{const R=d[0].appliances.length,U=440/Math.max(1,R),L=80+D*U,O=U-10;return h.jsxs("g",{children:[h.jsx("rect",{x:L,y:"220",width:O,height:"80",fill:"#2d3748",stroke:"#718096",strokeWidth:"1.2",rx:"4"}),h.jsx("text",{x:L+O/2,y:"255",fill:"#ffffff",fontSize:"10",fontWeight:"bold",textAnchor:"middle",children:T.name.split(" ")[0]}),h.jsx("text",{x:L+O/2,y:"275",fill:"#a0aec0",fontSize:"8",textAnchor:"middle",children:T.type.toUpperCase()}),h.jsx("line",{x1:L+O/2,y1:"175",x2:L+O/2,y2:"200",stroke:"#d4af37",strokeWidth:"2"}),h.jsx("polygon",{points:`${L+O/2-5},200 ${L+O/2+5},200 ${L+O/2},210`,fill:"#d4af37"}),h.jsx("text",{x:L+O/2,y:"195",fill:"#ecc94b",fontSize:"7",fontWeight:"bold",textAnchor:"end",children:"BICOK"})]},T.id)}),h.jsx("rect",{x:"535",y:"160",width:"55",height:"85",fill:"#171923",stroke:"#e53e3e",strokeWidth:"2",rx:"5"}),h.jsx("rect",{x:"542",y:"170",width:"40",height:"30",fill:"#3182ce",rx:"2"}),h.jsx("text",{x:"562",y:"188",fill:"#ffffff",fontSize:"8",fontWeight:"bold",textAnchor:"middle",children:"VTS 32S3"}),h.jsx("circle",{cx:"562",cy:"225",r:"7",fill:"#e53e3e"}),h.jsx("text",{x:"562",y:"240",fill:"#e2e8f0",fontSize:"6",fontWeight:"bold",textAnchor:"middle",children:"OUTFIRE"}),h.jsx("line",{x1:"60",y1:"310",x2:"540",y2:"310",stroke:"#ecc94b",strokeWidth:"3"}),h.jsx("rect",{x:"180",y:"303",width:"20",height:"14",fill:"#e53e3e",stroke:"#ffffff",strokeWidth:"1"}),h.jsx("text",{x:"190",y:"328",fill:"#feb2b2",fontSize:"7",fontWeight:"bold",textAnchor:"middle",children:"VÁLVULA GÁS"})]}),h.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3 pt-2 border-t border-white/10 text-[10px] text-gray-300",children:[h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-[#d4af37]"}),h.jsx("span",{children:"Bico Saponificante Classe K"})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-red-500"}),h.jsx("span",{children:"Bico CO2 Duto"})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-amber-500"}),h.jsx("span",{children:"Sensor 145°C Coifa"})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-purple-500"}),h.jsx("span",{children:"Sensor 300°C Duto"})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("span",{className:"w-2.5 h-2.5 rounded-sm bg-red-700"}),h.jsx("span",{children:"Damper Corta-Fogo"})]})]})]}),h.jsxs("div",{className:"mt-6 space-y-3",children:[h.jsxs("h4",{className:"text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2",children:[h.jsx(xs,{className:"w-4 h-4 text-emerald-400"}),h.jsx("span",{children:"Resumo do Dimensionamento Técnico (BOM)"})]}),h.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[h.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[h.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Bicos Saponificante"}),h.jsxs("span",{className:"text-lg font-black text-amber-400 font-mono",children:[S.totalSaponificanteNozzles," un"]}),h.jsxs("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:["(",S.saponificanteLiters,"L calculados)"]})]}),h.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[h.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Cilindro Saponificante"}),h.jsxs("span",{className:"text-lg font-black text-amber-400 font-mono",children:[S.recommendedSaponificanteCylinderLiters," L"]}),h.jsx("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:"Mínimo de 9L"})]}),h.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[h.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Bicos de CO2 (Duto)"}),h.jsxs("span",{className:"text-lg font-black text-cyan-400 font-mono",children:[S.co2NozzlesCount," un"]}),h.jsx("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:"(1 a cada 3m de duto)"})]}),h.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[h.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Cilindro de CO2"}),h.jsxs("span",{className:"text-lg font-black text-cyan-400 font-mono",children:[S.recommendedCo2CylinderKg," Kg"]}),h.jsx("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:"Mínimo de 10kg"})]})]}),h.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3",children:[h.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[h.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Sensores Coifa (145°C)"}),h.jsxs("span",{className:"text-base font-bold text-white font-mono",children:[S.hoodSensorsCount," un (1/metro)"]})]}),h.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[h.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Sensores Duto (300°C)"}),h.jsxs("span",{className:"text-base font-bold text-white font-mono",children:[S.ductSensorsCount," un (1 a cada 3m)"]})]}),h.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5 col-span-2 sm:col-span-1",children:[h.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Intertravamento Total"}),h.jsx("span",{className:"text-xs font-bold text-emerald-400 block",children:"Gás + Exaustão + Damper"})]})]})]}),h.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4",children:[h.jsxs("button",{onClick:A,className:"flex-1 py-4 px-6 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-bold rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 group",children:[h.jsx(fr,{className:"w-5 h-5 group-hover:scale-110 transition-transform"}),h.jsx("span",{children:"Enviar Orçamento para WhatsApp"})]}),h.jsxs("button",{onClick:C,className:"py-4 px-6 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black rounded-2xl shadow-glow-gold transition-all flex items-center justify-center gap-2",children:[h.jsx(nv,{className:"w-5 h-5 fill-black"}),h.jsx("span",{children:"Comprar Kit na Loja"})]})]}),h.jsx("p",{className:"text-center text-xs text-gray-400 mt-3",children:"*O projeto inclui memória de cálculo e documentação pronta para laudo ART e vistoria do Corpo de Bombeiros."})]})})]})]})})},_w=[{id:"central-outfire-vts-1",sku:"OUT-VTS-1C",name:"Central Outfire VTS 32S3 - 1 Coifa (Kit Completo)",category:"kit",priceBRL:8900,description:"Sistema completo integrado de CO2 e Saponificante Classe K para 1 coifa industrial. Acompanha IHM touchscreen colorida, cilindro saponificante 9L, cilindro CO2 10kg, bicos de inox, sensores térmicos reguláveis e intertravamento de gás.",image:"/assets/central-outfire-fundo-removido.png",specs:["Controle autônomo para 1 coifa","IHM Touchscreen colorida com avisos de voz","1x Cilindro Saponificante 9 Litros Classe K","1x Cilindro CO2 10 Kg com cabeçote solenoide","Intertravamento de Gás e Exaustor","Certificação em conformidade com NBR 14518"],featured:!0,inStock:!0},{id:"central-outfire-vts-2",sku:"OUT-VTS-2C",name:"Central Outfire VTS 32S3 - 2 Coifas (Atuação Independente)",category:"kit",priceBRL:14500,description:"Sistema de supressão inteligente para cozinhas de médio/grande porte com 2 coifas independentes. Se disparar a Coifa 1, a Coifa 2 continua operando com segurança.",image:"/assets/central-outfire-instalada.jpg",specs:["Controle independente para até 2 coifas","IHM Touchscreen com monitoramento individual por setor","2x Cilindros Saponificante (dimensionados sob medida)","Cilindros de CO2 dedicados para cada duto","Contagem regressiva de segurança anti-disparo acidental","Agenda semanal para abertura e corte automático de gás"],featured:!0,inStock:!0},{id:"central-outfire-vts-3",sku:"OUT-VTS-3C",name:"Central Outfire VTS 32S3 - 3 Coifas (Linha Master Industrial)",category:"kit",priceBRL:19800,description:"A mais avançada central de combate a incêndio em cozinhas profissionais do Brasil. Monitora e protege até 3 coifas simultâneas de forma 100% autônoma e setorizada.",image:"/assets/central-outfire-ihm.jpg",specs:["Controle simultâneo e independente de 3 coifas","Acionamento individual de dampers e CO2 por duto","Alertas de voz falada de alta potência","Histórico completo de eventos e diagnósticos de vazamento","Interface para integração com Alarme Predial de Shoppings","Atende plenamente ABNT NBR 14518, NFPA 96 e NFPA 17A"],featured:!0,inStock:!0},{id:"bico-saponificante-inox",sku:"OUT-BIC-SAP",name:"Bico Aspersor de Inox para Saponificante (Classe K)",category:"bicos",priceBRL:185,description:"Bico difusor de alta vazão em aço inoxidável 304 com rosca NPT. Acompanha capa protetora de borracha/silicone de alta temperatura contra acúmulo de gordura.",image:"/assets/central-outfire-interno.jpg",specs:["Material: Aço Inoxidável 304 polido",'Rosca: 3/8" ou 1/2" NPT',"Ângulo de abertura especial para cubas e filtros","Capa protetora com cordão de retenção inclusa"],featured:!1,inStock:!0},{id:"bico-co2-duto",sku:"OUT-BIC-CO2",name:"Bico Difusor de CO2 para Dutos de Exaustão",category:"bicos",priceBRL:210,description:"Bico de alta pressão calibrado para inundação total de CO2 dentro da linha de dutos, eliminando o oxigênio rapidamente.",image:"/assets/central-outfire-interno.jpg",specs:["Inundação rápida em alta pressão","Rosca NPT padronizada","Resistente a calor contínuo de até 400°C"],featured:!1,inStock:!0},{id:"sensor-coifa-145c",sku:"OUT-SNS-145",name:"Sensor Térmico Regulável para Coifa (Calibrado 145°C)",category:"sensores",priceBRL:295,description:"Sensor eletromecânico e termostático de precisão em aço inox para monitoramento de temperatura na zona de cocção.",image:"/assets/central-outfire-interno.jpg",specs:["Faixa de regulagem: 50°C a 200°C (ajustado em 145°C)","Haste blindada em inox resistente a vapores e gordura","Contato seco normalmente aberto/fechado","Cabo de alta temperatura blindado em malha metálica"],featured:!1,inStock:!0},{id:"sensor-duto-300c",sku:"OUT-SNS-300",name:"Sensor Térmico Regulável para Duto (Calibrado 300°C)",category:"sensores",priceBRL:320,description:"Sensor de alta temperatura para detecção de fogo na linha de duto de exaustão e acionamento instantâneo de CO2 e dampers.",image:"/assets/central-outfire-interno.jpg",specs:["Faixa de operação: até 350°C (ajustado em 300°C)","Instalação externa com sonda inserida no duto","Conexão estanque anti-vazamento de óleo"],featured:!1,inStock:!0},{id:"recarga-saponificante-9l",sku:"OUT-AG-SAP9",name:"Galão Agente Saponificante Classe K Outfire (9 Litros)",category:"cilindro",priceBRL:680,description:"Composto líquido à base de sais orgânicos e acetato de potássio formulado especificamente para saponificação imediata de óleos vegetais e gorduras animais.",image:"/assets/central-outfire-fundo-removido.png",specs:["Volume: 9 Litros líquidos","Ação de saponificação com espuma refrigerante espessa","Não tóxico e biodegradável","Laudo técnico de conformidade para bombeiros"],featured:!1,inStock:!0},{id:"valvula-gas-solenoide-1pol",sku:"OUT-VLV-GAS1",name:'Válvula Solenoide de Corte Rápido de Gás 1" (Bivolt)',category:"valvulas",priceBRL:840,description:"Válvula de corte de segurança para linha de GLP / Gás Natural. Fecha instantaneamente ao menor sinal de disparo ou vazamento de gás.",image:"/assets/central-outfire-interno.jpg",specs:["Diâmetro: 1 polegada BSP/NPT","Rearme manual para segurança obrigatória","Corpo em latão forjado de alta resistência","Compatível com GLP e Gás Natural encanado"],featured:!1,inStock:!0},{id:"damper-corta-fogo-motorizado",sku:"OUT-DMP-CF",name:"Damper Corta-Fogo Motorizado com Mola de Retorno",category:"acessorios",priceBRL:1250,description:"Damper para isolamento mecânico de dutos de coifa. Fecha automaticamente no disparo de CO2 para aprisionar o gás e sufocar o incêndio.",image:"/assets/central-outfire-interno.jpg",specs:["Lâminas corta-fogo com vedação hermética","Atuador 24V com retorno por mola mecânica","Resistência ao fogo: 120 minutos (TRRF 120)","Microswitch de confirmação de fechamento"],featured:!1,inStock:!0},{id:"acionador-manual-pull",sku:"OUT-ACT-MAN",name:"Estação de Disparo Manual de Emergência (Tipo Puxador)",category:"acessorios",priceBRL:310,description:"Acionador de emergência de dupla ação em caixa metálica amarela/vermelha com lacre e trava de segurança.",image:"/assets/central-outfire-fundo-removido.png",specs:["Acionamento mecânico e elétrico simultâneo","Pintura eletrostática de alta visibilidade","Trava de segurança para impedir toque acidental"],featured:!1,inStock:!0}],yw=({onAddToCart:s})=>{const[e,t]=Qe.useState("all"),[r,o]=Qe.useState(""),l=[{id:"all",name:"Todos os Produtos"},{id:"kit",name:"Sistemas Completos"},{id:"bicos",name:"Bicos de Aspersão"},{id:"sensores",name:"Sensores Reguláveis"},{id:"cilindro",name:"Cilindros & Recargas"},{id:"valvulas",name:"Válvulas de Gás"},{id:"acessorios",name:"Acessórios & Acionadores"}],u=_w.filter(p=>{const m=e==="all"||p.category===e,x=p.name.toLowerCase().includes(r.toLowerCase())||p.description.toLowerCase().includes(r.toLowerCase())||p.sku.toLowerCase().includes(r.toLowerCase());return m&&x}),d=p=>{const m=`Olá! Gostaria de comprar ou solicitar proposta para o produto:
*${p.name}* (SKU: ${p.sku})
Valor: R$ ${p.priceBRL.toLocaleString("pt-BR")},00.
Poderia me passar os prazos de entrega e condições de faturamento?`;window.open(`https://wa.me/5515996576807?text=${encodeURIComponent(m)}`,"_blank")};return h.jsx("section",{id:"loja",className:"py-24 bg-[#08090c] relative",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide mb-4",children:[h.jsx(Ql,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Loja Oficial Outfire"]}),h.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Sistemas Completos & ",h.jsx("br",{}),h.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"Peças de Reposição Certificadas"})]}),h.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Adquira o sistema completo para sua cozinha ou componentes avulsos para manutenção preventiva. Entrega expressa para todo o Brasil com nota fiscal e laudos de conformidade técnica."})]}),h.jsxs("div",{className:"flex flex-col lg:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10",children:[h.jsx("div",{className:"flex flex-wrap items-center gap-2 w-full lg:w-auto",children:l.map(p=>h.jsx("button",{onClick:()=>t(p.id),className:`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${e===p.id?"bg-[#d4af37] text-black shadow-glow-gold":"bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5"}`,children:p.name},p.id))}),h.jsxs("div",{className:"relative w-full lg:w-72",children:[h.jsx(Mv,{className:"w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2"}),h.jsx("input",{type:"text",placeholder:"Buscar bicos, sensores, cilindros...",value:r,onChange:p=>o(p.target.value),className:"w-full bg-[#12141a] border border-[#d4af37]/20 text-white text-xs rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-[#d4af37] transition-colors"})]})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:u.map(p=>h.jsxs("div",{className:"glass-panel-gold rounded-3xl border border-[#d4af37]/25 hover:border-[#d4af37]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 shadow-lg",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"relative w-full h-56 bg-gradient-to-br from-[#171a22] to-[#0a0c10] p-6 flex items-center justify-center overflow-hidden border-b border-white/5",children:[h.jsx("img",{src:p.image,alt:p.name,className:"max-h-full max-w-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-500"}),h.jsxs("div",{className:"absolute top-3 left-3 flex flex-col gap-1.5",children:[p.featured&&h.jsxs("span",{className:"bg-gradient-to-r from-[#d4af37] to-[#e5c05d] text-black text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-glow-gold flex items-center gap-1",children:[h.jsx(ic,{className:"w-3 h-3 fill-black"}),"Mais Vendido"]}),h.jsxs("span",{className:"bg-black/80 backdrop-blur-md text-[#f3e5ab] text-[10px] font-mono px-2 py-0.5 rounded border border-[#d4af37]/30",children:["SKU: ",p.sku]})]}),h.jsx("span",{className:"absolute bottom-3 right-3 text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800",children:"Pronta Entrega"})]}),h.jsxs("div",{className:"p-6",children:[h.jsx("h3",{className:"text-lg font-bold text-white mb-2 font-sans line-clamp-1",children:p.name}),h.jsx("p",{className:"text-xs text-gray-400 leading-relaxed mb-4 line-clamp-2",children:p.description}),h.jsx("div",{className:"space-y-1.5 mb-6",children:p.specs.slice(0,3).map((m,x)=>h.jsxs("div",{className:"flex items-start gap-2 text-[11px] text-gray-300",children:[h.jsx(av,{className:"w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5"}),h.jsx("span",{className:"line-clamp-1",children:m})]},x))})]})]}),h.jsxs("div",{className:"p-6 pt-0",children:[h.jsxs("div",{className:"flex items-baseline justify-between mb-4 pt-4 border-t border-white/10",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Preço à vista ou faturado"}),h.jsxs("span",{className:"text-2xl font-black text-[#f3e5ab] font-mono",children:["R$ ",p.priceBRL.toLocaleString("pt-BR"),",00"]})]}),h.jsx("span",{className:"text-xs text-[#e5c05d] font-bold",children:"Em até 12x"})]}),h.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[h.jsxs("button",{onClick:()=>s(p),className:"py-2.5 px-3 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black text-xs font-black rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-1.5",children:[h.jsx(Ql,{className:"w-3.5 h-3.5 fill-black"}),h.jsx("span",{children:"Adicionar"})]}),h.jsxs("button",{onClick:()=>d(p),className:"py-2.5 px-3 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5",title:"Negociar faturamento via WhatsApp",children:[h.jsx(fr,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"WhatsApp"})]})]})]})]},p.id))})]})})},Sw=()=>{const s=[{title:"Manual de Instalação e Esquema Elétrico Central Outfire VTS 32S3",type:"PDF Oficial de Fábrica",size:"939 KB",description:"Diagrama completo de ligação dos bornes, ligação dos relés de gás e exaustão, sensores reguláveis, dampers e alimentação 12V/Bateria.",link:"/assets/manual-instalacao-central-outfire.pdf",featured:!0},{title:"Procedimento Operacional Padrão (POP) Pós-Disparo",type:"Guia Técnico",size:"280 KB",description:"Instruções passo a passo para a equipe do restaurante após o combate a incêndio: limpeza do agente saponificante, rearme da válvula e recarga.",link:"#contato"},{title:"Certificado de Conformidade Técnica & Memorial Descritivo (NBR 14518)",type:"Documento para Bombeiros / AVCB",size:"420 KB",description:"Documentação comprobatória das características técnicas e ensaios de conformidade para instrução de processos no Corpo de Bombeiros.",link:"#contato"}],e=[{step:"01",title:"Posicionamento da Central VTS 32S3",desc:"Fixar o painel em local de fácil visualização e acesso fora da zona de fogo direto, a 1,50m do piso, próximo à rota de saída."},{step:"02",title:"Passagem dos Cabos Blindados de Alta Temperatura",desc:"Lançar a fiação dos sensores da coifa (145°C) e dos sensores do duto (300°C) utilizando conduítes metálicos independentes."},{step:"03",title:"Interligação da Válvula de Gás e Exaustor",desc:"Conectar os contatos secos (relés) da central à bobina da válvula solenoide de gás e ao contator do motor de exaustão."},{step:"04",title:"Comissionamento e Teste sem Disparo",desc:"Simular acionamento pelo menu de teste da IHM para validar corte de gás e parada do exaustor antes da liberação final."}];return h.jsx("section",{id:"manuais",className:"py-24 bg-[#0a0c0e] relative border-t border-white/5",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wide mb-4",children:[h.jsx(tv,{className:"w-3.5 h-3.5"}),"Engenharia & Suporte"]}),h.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Central de Manuais Técnicos & ",h.jsx("br",{}),h.jsx("span",{className:"gold-gradient-text",children:"Documentos de Instalação"})]}),h.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Tenha acesso imediato aos esquemas elétricos, guias de montagem passo a passo e memoriais de cálculo para instaladores, engenheiros e montadores de coifa."})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-16",children:s.map((t,r)=>h.jsxs("div",{className:`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all ${t.featured?"glass-panel-gold border-amber-500/40 bg-gradient-to-b from-[#1a1710] to-[#0e1014] shadow-glow-gold":"glass-panel border-white/10"}`,children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsx("span",{className:"text-[10px] font-mono font-bold bg-white/10 text-gray-300 px-2.5 py-1 rounded-md",children:t.type}),h.jsx(Sd,{className:`w-6 h-6 ${t.featured?"text-amber-400":"text-gray-400"}`})]}),h.jsx("h3",{className:"text-lg font-bold text-white mb-2 font-sans",children:t.title}),h.jsx("p",{className:"text-xs text-gray-400 leading-relaxed mb-6",children:t.description})]}),h.jsxs("div",{className:"pt-4 border-t border-white/10 flex items-center justify-between",children:[h.jsxs("span",{className:"text-xs text-gray-400 font-mono",children:["Tamanho: ",t.size]}),h.jsxs("a",{href:t.link,target:t.link.startsWith("http")||t.link.endsWith(".pdf")?"_blank":"_self",rel:"noopener noreferrer",className:`py-2 px-4 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${t.featured?"gold-gradient hover:brightness-110 text-black font-extrabold shadow-glow-gold":"bg-white/10 hover:bg-white/20 text-white"}`,children:[h.jsx(cv,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Baixar Documento"})]})]})]},r))}),h.jsxs("div",{className:"glass-panel p-8 rounded-3xl border border-white/10",children:[h.jsxs("div",{className:"flex items-center gap-2.5 mb-6",children:[h.jsx(Av,{className:"w-5 h-5 text-amber-400"}),h.jsx("h3",{className:"text-lg font-bold text-white font-sans",children:"Guia Prático de Instalação da Central Outfire VTS 32S3"})]}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:e.map((t,r)=>h.jsxs("div",{className:"p-4 bg-white/5 rounded-2xl border border-white/5 relative",children:[h.jsx("span",{className:"text-2xl font-black text-amber-400 font-mono block mb-2 opacity-90",children:t.step}),h.jsx("h4",{className:"text-sm font-bold text-white mb-1.5 font-sans",children:t.title}),h.jsx("p",{className:"text-xs text-gray-400 leading-relaxed",children:t.desc})]},r))}),h.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4",children:[h.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-300 text-center sm:text-left",children:[h.jsx(Zl,{className:"w-4 h-4 text-emerald-400 shrink-0"}),h.jsx("span",{children:"Precisa de suporte na instalação da sua equipe? Engenheiros especializados disponíveis por WhatsApp."})]}),h.jsx("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20sou%20instalador%2Fengenheiro%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20t%C3%A9cnica%20sobre%20a%20Central%20Outfire.",target:"_blank",rel:"noopener noreferrer",className:"py-2.5 px-5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/10 transition-all shrink-0",children:"Suporte Técnico de Engenharia →"})]})]})]})})},Mw=()=>{const[s,e]=Qe.useState(null),t=[{src:"/assets/central-outfire-instalada.jpg",title:"Central Outfire VTS Instalada em Cozinha Real",category:"Instalação em Restaurante",desc:"Central montada estrategicamente na parede lateral da coifa, com chicote elétrico de alta temperatura interligado à válvula de corte de gás e aos dampers do duto."},{src:"/assets/central-outfire-interno.jpg",title:"Placa de Controle & Relés de Potência Outfire",category:"Engenharia Interna",desc:"Eletrônica industrial com proteção contra surtos, bornes reforçados para conexões dos sensores de 145°C e 300°C, relés dedicados e backup por bateria."},{src:"/assets/central-outfire-ihm.jpg",title:"IHM Touchscreen em Operação com Alerta",category:"Interface de Operação",desc:"Tela de alta resolução colorida exibindo o status de alerta térmico, contagem regressiva anti-disparo acidental e menu com senha para parametrizações."},{src:"/assets/central-outfire-fundo-removido.png",title:"Gabinete Industrial Outfire VTS 32S3",category:"Design Robusto",desc:"Construção em chapa de aço com pintura eletrostática texturizada de alta durabilidade, projetada para suportar a gordura e o ambiente severo de cozinhas industriais."}];return h.jsxs("section",{id:"galeria",className:"py-24 bg-[#0d0f13] relative",children:[h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wide mb-4",children:[h.jsx(ic,{className:"w-3.5 h-3.5"}),"Casos Reais & Engenharia em Campo"]}),h.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Instalações Reais do ",h.jsx("br",{}),h.jsx("span",{className:"gold-gradient-text",children:"Sistema Outfire em Ação"})]}),h.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Veja detalhes da montagem física da Central Outfire VTS 32S3, acabamento dos componentes e a integração visual impecável nas cozinhas dos nossos clientes."})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:t.map((r,o)=>h.jsxs("div",{onClick:()=>e(r),className:"glass-panel rounded-3xl border border-white/10 hover:border-amber-500/40 hover:shadow-glow-gold overflow-hidden cursor-pointer group transition-all duration-300 hover:-translate-y-1",children:[h.jsxs("div",{className:"relative h-72 sm:h-80 bg-black/50 overflow-hidden flex items-center justify-center",children:[h.jsx("img",{src:r.src,alt:r.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),h.jsxs("div",{className:"absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-sm",children:[h.jsx(T0,{className:"w-5 h-5 text-amber-400"}),h.jsx("span",{children:"Clique para Ampliar Foto"})]}),h.jsx("div",{className:"absolute top-4 left-4",children:h.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-amber-400 px-3 py-1 rounded-full border border-amber-500/30",children:r.category})})]}),h.jsxs("div",{className:"p-6",children:[h.jsxs("h3",{className:"text-lg font-bold text-white mb-2 font-sans flex items-center justify-between",children:[h.jsx("span",{children:r.title}),h.jsx(pv,{className:"w-4 h-4 text-gray-400 group-hover:text-amber-400 transition-colors"})]}),h.jsx("p",{className:"text-xs sm:text-sm text-gray-400 leading-relaxed",children:r.desc})]})]},o))})]}),s&&h.jsx("div",{onClick:()=>e(null),className:"fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8",children:h.jsxs("div",{onClick:r=>r.stopPropagation(),className:"max-w-4xl w-full bg-[#12141a] rounded-3xl border border-white/10 overflow-hidden shadow-2xl",children:[h.jsx("div",{className:"relative max-h-[70vh] bg-black flex items-center justify-center p-2",children:h.jsx("img",{src:s.src,alt:s.title,className:"max-h-[65vh] w-auto object-contain rounded-xl"})}),h.jsxs("div",{className:"p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10",children:[h.jsxs("div",{children:[h.jsx("h3",{className:"text-lg font-bold text-white",children:s.title}),h.jsx("p",{className:"text-xs text-gray-400 mt-1",children:s.desc})]}),h.jsx("button",{onClick:()=>e(null),className:"py-2 px-5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl transition-all",children:"Fechar"})]})]})})]})},Ew=()=>{const[s,e]=Qe.useState({nome:"",empresa:"",telefone:"",cidade:"",coifas:"1",mensagem:""}),[t,r]=Qe.useState(!1),o=l=>{l.preventDefault();let u=`📋 *NOVO CONTATO PELO SITE OUTFIRE.COM.BR*

`;u+=`👤 *Nome:* ${s.nome}
`,u+=`🏢 *Empresa / Restaurante:* ${s.empresa||"Não informado"}
`,u+=`📱 *Telefone / WhatsApp:* ${s.telefone}
`,u+=`📍 *Cidade / Estado:* ${s.cidade}
`,u+=`🍳 *Qtd de Coifas:* ${s.coifas} coifa(s)
`,s.mensagem&&(u+=`💬 *Mensagem:* ${s.mensagem}
`),r(!0),setTimeout(()=>{window.open(`https://wa.me/5515996576807?text=${encodeURIComponent(u)}`,"_blank"),r(!1)},1e3)};return h.jsxs("footer",{id:"contato",className:"bg-[#08090b] text-gray-400 border-t border-white/10 relative overflow-hidden",children:[h.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10",children:h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",children:[h.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide",children:[h.jsx(fr,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Canais Diretos de Engenharia & Vendas"]}),h.jsxs("h3",{className:"text-3xl sm:text-4xl font-black text-white font-sans tracking-tight",children:["Fale com um Especialista ",h.jsx("br",{}),h.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"em Supressão Outfire"})]}),h.jsx("p",{className:"text-sm text-gray-400 leading-relaxed",children:"Dúvidas sobre dimensionamento de bicos, sensores, laudos para o Corpo de Bombeiros (AVCB) ou solicitação de visita técnica para cozinhas em shopping centers e restaurantes."}),h.jsxs("div",{className:"space-y-4 pt-4",children:[h.jsxs("a",{href:"https://wa.me/5515996576807",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 transition-all text-white group",children:[h.jsx("div",{className:"w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform",children:h.jsx(fr,{className:"w-5 h-5"})}),h.jsxs("div",{children:[h.jsx("span",{className:"text-xs text-gray-400 block font-mono",children:"WhatsApp Vendas & Orçamentos"}),h.jsx("span",{className:"text-base font-bold text-white group-hover:text-emerald-400 transition-colors",children:"(15) 99657-6807"})]})]}),h.jsxs("a",{href:"https://wa.me/5515981577847",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 transition-all text-white group",children:[h.jsx("div",{className:"w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform",children:h.jsx(fr,{className:"w-5 h-5"})}),h.jsxs("div",{children:[h.jsx("span",{className:"text-xs text-gray-400 block font-mono",children:"Suporte Técnico & Pós-Venda"}),h.jsx("span",{className:"text-base font-bold text-white group-hover:text-red-400 transition-colors",children:"(15) 98157-7847"})]})]}),h.jsxs("div",{className:"flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 text-xs text-gray-300",children:[h.jsx("div",{className:"w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0",children:h.jsx(hv,{className:"w-5 h-5"})}),h.jsxs("div",{children:[h.jsx("span",{className:"font-bold text-white block",children:"Atendimento em Todo o Brasil"}),h.jsx("span",{className:"text-gray-400",children:"Envio de kits prontos para instalação com laudo ART e suporte remoto."})]})]})]})]}),h.jsx("div",{className:"lg:col-span-7",children:h.jsxs("div",{className:"glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative",children:[h.jsx("h4",{className:"text-xl font-bold text-white mb-2 font-sans",children:"Solicite uma Proposta Técnica sem Compromisso"}),h.jsx("p",{className:"text-xs text-gray-400 mb-6",children:"Preencha os dados e nosso engenheiro entrará em contato em menos de 15 minutos com o dimensionamento preliminar."}),t?h.jsxs("div",{className:"p-8 text-center space-y-3 bg-emerald-950/30 border border-emerald-500/30 rounded-2xl",children:[h.jsx(xs,{className:"w-12 h-12 text-emerald-400 mx-auto animate-bounce"}),h.jsx("h5",{className:"text-base font-bold text-white",children:"Encaminhando para o WhatsApp..."}),h.jsx("p",{className:"text-xs text-gray-300",children:"Você será direcionado diretamente para um especialista no WhatsApp."})]}):h.jsxs("form",{onSubmit:o,className:"space-y-4",children:[h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[h.jsxs("div",{children:[h.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Seu Nome Completo *"}),h.jsx("input",{type:"text",required:!0,placeholder:"Ex: Carlos Silva",value:s.nome,onChange:l=>e({...s,nome:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Nome do Restaurante / Empresa"}),h.jsx("input",{type:"text",placeholder:"Ex: Hamburgueria Grill",value:s.empresa,onChange:l=>e({...s,empresa:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]})]}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[h.jsxs("div",{children:[h.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"WhatsApp com DDD *"}),h.jsx("input",{type:"tel",required:!0,placeholder:"Ex: (11) 98765-4321",value:s.telefone,onChange:l=>e({...s,telefone:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Cidade e Estado *"}),h.jsx("input",{type:"text",required:!0,placeholder:"Ex: São Paulo / SP",value:s.cidade,onChange:l=>e({...s,cidade:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Quantas Coifas precisam de proteção?"}),h.jsxs("select",{value:s.coifas,onChange:l=>e({...s,coifas:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500",children:[h.jsx("option",{value:"1",children:"1 Coifa (Pequeno / Médio Porte)"}),h.jsx("option",{value:"2",children:"2 Coifas (Atuação Independente)"}),h.jsx("option",{value:"3",children:"3 Coifas (Atuação Independente)"}),h.jsx("option",{value:"mais de 3",children:"Mais de 3 Coifas / Projeto Especial"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Detalhes adicionais (opcional)"}),h.jsx("textarea",{rows:3,placeholder:"Ex: Tenho 2 fritadeiras e 1 chapa, preciso de laudo urgente para renovação de AVCB.",value:s.mensagem,onChange:l=>e({...s,mensagem:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]}),h.jsxs("button",{type:"submit",className:"w-full py-4 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black text-sm rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-2 group",children:[h.jsx(Ev,{className:"w-4 h-4 group-hover:translate-x-1 transition-transform fill-black"}),h.jsx("span",{children:"Enviar para a Engenharia Outfire"})]})]})]})})]})}),h.jsx("div",{className:"border-t border-[#d4af37]/20 py-8 bg-[#050608]",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("img",{src:"/assets/logo-outfire-gold.png",alt:"OUTFIRE",className:"h-8 w-auto object-contain"}),h.jsxs("span",{children:["© ",new Date().getFullYear()," Outfire Sistemas contra Incêndio. Todos os direitos reservados."]})]}),h.jsxs("div",{className:"flex items-center gap-4 text-gray-400",children:[h.jsx("a",{href:"#hero-3d",className:"hover:text-white transition-colors",children:"Simulação 3D"}),h.jsx("a",{href:"#central-vts",className:"hover:text-white transition-colors",children:"Central VTS"}),h.jsx("a",{href:"#normas",className:"hover:text-white transition-colors",children:"Normas NBR"}),h.jsx("a",{href:"#calculadora",className:"hover:text-white transition-colors",children:"Calculadora"}),h.jsx("a",{href:"#loja",className:"hover:text-white transition-colors",children:"Loja"}),h.jsx("a",{href:"/assets/manual-instalacao-central-outfire.pdf",target:"_blank",className:"hover:text-white transition-colors",children:"Manual PDF"})]})]})})]})},ww=({isOpen:s,onClose:e,cartItems:t,onUpdateQuantity:r,onRemoveItem:o,onClearCart:l})=>{const[u,d]=Qe.useState(!1),[p,m]=Qe.useState(!1);if(!s)return null;const x=t.reduce((S,A)=>S+A.product.priceBRL*A.quantity,0),v=()=>{let S=`🛒 *PEDIDO LOJA OUTFIRE - PROPOSTA COMERCIAL*

`;S+=`Olá, equipe Outfire! Gostaria de fechar o pedido dos seguintes itens pelo site:

`,t.forEach((A,C)=>{S+=`${C+1}. *${A.product.name}*
`,S+=`   SKU: ${A.product.sku} | Qtd: ${A.quantity} un
`,S+=`   Valor: R$ ${(A.product.priceBRL*A.quantity).toLocaleString("pt-BR")},00

`}),S+=`💰 *TOTAL DO PEDIDO:* R$ ${x.toLocaleString("pt-BR")},00

`,S+="Por favor, me informe as opções de pagamento (Faturamento B2B / Boleto / Pix / Cartão) e valor do frete.",window.open(`https://wa.me/5515996576807?text=${encodeURIComponent(S)}`,"_blank")},y=S=>{m(!0),setTimeout(()=>{l(),m(!1),d(!1),e(),alert(`Pedido registrado com sucesso via ${S}! Nossa equipe entrará em contato para emissão de NF-e e envio.`)},2e3)};return h.jsxs("div",{className:"fixed inset-0 z-50 overflow-hidden",children:[h.jsx("div",{onClick:e,className:"absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"}),h.jsx("div",{className:"fixed inset-y-0 right-0 max-w-full flex pl-10",children:h.jsxs("div",{className:"w-screen max-w-md bg-[#0f1115] border-l border-white/10 flex flex-col justify-between shadow-2xl relative",children:[h.jsxs("div",{className:"p-6 border-b border-white/10 flex items-center justify-between",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(_m,{className:"w-5 h-5 text-[#d4af37]"}),h.jsx("h2",{className:"text-lg font-bold text-white font-sans",children:"Seu Carrinho de Compras"})]}),h.jsx("button",{onClick:e,className:"p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors",children:h.jsx(Ed,{className:"w-5 h-5"})})]}),h.jsx("div",{className:"flex-1 overflow-y-auto p-6 space-y-4",children:t.length===0?h.jsxs("div",{className:"h-full flex flex-col items-center justify-center text-center text-gray-400 space-y-4",children:[h.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-gray-500",children:h.jsx(_m,{className:"w-8 h-8"})}),h.jsxs("div",{children:[h.jsx("h3",{className:"text-base font-bold text-white",children:"Seu carrinho está vazio"}),h.jsx("p",{className:"text-xs text-gray-400 mt-1 max-w-xs",children:"Monte um kit na calculadora ou adicione peças avulsas de reposição da nossa loja."})]}),h.jsx("a",{href:"#calculadora",onClick:e,className:"py-2.5 px-4 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-xl shadow-glow-red transition-all",children:"Abrir Calculadora da Cozinha"})]}):t.map(S=>h.jsxs("div",{className:"p-4 bg-white/5 rounded-2xl border border-white/5 flex items-start gap-3 relative group",children:[h.jsx("img",{src:S.product.image,alt:S.product.name,className:"w-16 h-16 object-contain rounded-xl bg-black/40 p-1 border border-white/5 shrink-0"}),h.jsxs("div",{className:"flex-1 min-w-0",children:[h.jsx("h4",{className:"text-xs font-bold text-white line-clamp-1",children:S.product.name}),h.jsxs("span",{className:"text-[10px] font-mono text-gray-400 block mt-0.5",children:["SKU: ",S.product.sku]}),h.jsxs("span",{className:"text-sm font-bold text-amber-400 font-mono block mt-1",children:["R$ ",S.product.priceBRL.toLocaleString("pt-BR"),",00"]}),h.jsxs("div",{className:"flex items-center gap-3 mt-2",children:[h.jsxs("div",{className:"flex items-center bg-black/50 border border-white/10 rounded-lg",children:[h.jsx("button",{onClick:()=>r(S.product.id,-1),className:"p-1 hover:text-red-400 transition-colors",children:h.jsx(xv,{className:"w-3 h-3"})}),h.jsx("span",{className:"px-2 text-xs font-bold text-white",children:S.quantity}),h.jsx("button",{onClick:()=>r(S.product.id,1),className:"p-1 hover:text-emerald-400 transition-colors",children:h.jsx(oo,{className:"w-3 h-3"})})]}),h.jsxs("button",{onClick:()=>o(S.product.id),className:"text-gray-400 hover:text-red-400 text-xs transition-colors flex items-center gap-1",children:[h.jsx(C0,{className:"w-3 h-3"}),h.jsx("span",{children:"Remover"})]})]})]})]},S.product.id))}),t.length>0&&h.jsxs("div",{className:"p-6 border-t border-white/10 bg-[#0c0d10] space-y-4",children:[h.jsxs("div",{className:"space-y-1.5",children:[h.jsxs("div",{className:"flex justify-between text-xs text-gray-400",children:[h.jsx("span",{children:"Subtotal:"}),h.jsxs("span",{children:["R$ ",x.toLocaleString("pt-BR"),",00"]})]}),h.jsxs("div",{className:"flex justify-between text-xs text-gray-400",children:[h.jsx("span",{children:"Nota Fiscal & Laudo ART:"}),h.jsx("span",{className:"text-emerald-400 font-medium",children:"Incluso"})]}),h.jsxs("div",{className:"flex justify-between text-base font-bold text-white pt-2 border-t border-white/10",children:[h.jsx("span",{children:"Total Estimado:"}),h.jsxs("span",{className:"font-mono text-xl text-amber-400",children:["R$ ",x.toLocaleString("pt-BR"),",00"]})]})]}),h.jsxs("div",{className:"space-y-2",children:[h.jsxs("button",{onClick:v,className:"w-full py-3.5 px-4 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2",children:[h.jsx(fr,{className:"w-4 h-4"}),h.jsx("span",{children:"Enviar Pedido pelo WhatsApp (Comercial)"})]}),h.jsxs("button",{onClick:()=>d(!0),className:"w-full py-3 px-4 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black text-xs rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-2",children:[h.jsx(vm,{className:"w-4 h-4 fill-black"}),h.jsx("span",{children:"Finalizar Pagamento Online (Pix / Cartão)"})]})]}),h.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-[11px] text-gray-400 text-center",children:[h.jsx(Zl,{className:"w-3.5 h-3.5 text-emerald-400"}),h.jsx("span",{children:"Compra segura com garantia direta do fabricante Outfire"})]})]}),u&&h.jsxs("div",{className:"absolute inset-0 bg-[#0d0f13] z-20 p-6 flex flex-col justify-between",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-white/10 mb-6",children:[h.jsx("h3",{className:"font-bold text-white text-base",children:"Checkout Rápido Outfire"}),h.jsx("button",{onClick:()=>d(!1),className:"p-1 text-gray-400 hover:text-white",children:h.jsx(Ed,{className:"w-5 h-5"})})]}),p?h.jsxs("div",{className:"text-center py-12 space-y-4",children:[h.jsx(nc,{className:"w-16 h-16 text-emerald-400 mx-auto animate-bounce"}),h.jsx("h4",{className:"text-lg font-bold text-white",children:"Pagamento Confirmado!"}),h.jsx("p",{className:"text-xs text-gray-300",children:"Obrigado por confiar na Outfire. Seus dados foram encaminhados para a expedição e o engenheiro responsável entrará em contato."})]}):h.jsxs("div",{className:"space-y-4",children:[h.jsxs("p",{className:"text-xs text-gray-300",children:["Selecione a forma de pagamento desejada para concluir o pedido de ",h.jsxs("strong",{children:["R$ ",x.toLocaleString("pt-BR"),",00"]}),":"]}),h.jsxs("button",{onClick:()=>y("PIX"),className:"w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left transition-all",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx(_v,{className:"w-6 h-6 text-emerald-400"}),h.jsxs("div",{children:[h.jsx("span",{className:"text-sm font-bold text-white block",children:"Pagar via Pix"}),h.jsx("span",{className:"text-[11px] text-gray-400",children:"Aprovação imediata com 5% de desconto"})]})]}),h.jsx(Hl,{className:"w-4 h-4 text-gray-400"})]}),h.jsxs("button",{onClick:()=>y("Cartão de Crédito"),className:"w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left transition-all",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx(vm,{className:"w-6 h-6 text-blue-400"}),h.jsxs("div",{children:[h.jsx("span",{className:"text-sm font-bold text-white block",children:"Cartão de Crédito"}),h.jsx("span",{className:"text-[11px] text-gray-400",children:"Parcelamento em até 12x sem juros"})]})]}),h.jsx(Hl,{className:"w-4 h-4 text-gray-400"})]}),h.jsxs("button",{onClick:()=>y("Boleto Faturado B2B"),className:"w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left transition-all",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx(Zl,{className:"w-6 h-6 text-amber-400"}),h.jsxs("div",{children:[h.jsx("span",{className:"text-sm font-bold text-white block",children:"Faturamento B2B / Boleto PJ"}),h.jsx("span",{className:"text-[11px] text-gray-400",children:"Para restaurantes e empresas cadastradas"})]})]}),h.jsx(Hl,{className:"w-4 h-4 text-gray-400"})]})]})]}),h.jsx("button",{onClick:()=>d(!1),className:"w-full py-3 bg-white/10 text-gray-300 font-bold text-xs rounded-xl hover:bg-white/20 transition-all",children:"Voltar ao Carrinho"})]})]})})]})},bw=()=>h.jsxs("aside",{"aria-label":"Atendimento rápido",className:"fixed bottom-6 right-6 z-40 flex items-center group",children:[h.jsx("div",{className:"hidden sm:block mr-3 px-3.5 py-1.5 rounded-xl bg-[#12141a]/95 backdrop-blur-md border border-white/10 text-white text-xs font-semibold shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap",children:"Falar com Engenheiro no WhatsApp 💬"}),h.jsxs("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20estou%20no%20site%20da%20Outfire%20e%20gostaria%20de%20um%20or%C3%A7amento%20t%C3%A9cnico.",target:"_blank",rel:"noopener noreferrer",className:"w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-green-500 to-emerald-400 text-white flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 relative border-2 border-white/20",title:"Atendimento no WhatsApp","aria-label":"Atendimento no WhatsApp",children:[h.jsx(gv,{className:"w-7 h-7 fill-white/10"}),h.jsxs("span",{className:"absolute -top-1 -right-1 flex h-4 w-4",children:[h.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),h.jsx("span",{className:"relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border border-white"})]})]})]});function Tw(){const[s,e]=Qe.useState([]),[t,r]=Qe.useState(!1),o=m=>{e(x=>x.find(y=>y.product.id===m.id)?x.map(y=>y.product.id===m.id?{...y,quantity:y.quantity+1}:y):[...x,{product:m,quantity:1}]),r(!0)},l=(m,x)=>{e(v=>v.map(y=>{if(y.product.id===m){const S=y.quantity+x;return S>0?{...y,quantity:S}:null}return y}).filter(Boolean))},u=m=>{e(x=>x.filter(v=>v.product.id!==m))},d=()=>{e([])},p=s.reduce((m,x)=>m+x.quantity,0);return h.jsxs("div",{className:"min-h-screen bg-[#0a0c0e] text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200",children:[h.jsx(Rv,{cartCount:p,onOpenCart:()=>r(!0)}),h.jsxs("main",{className:"flex-1",children:[h.jsx(pw,{}),h.jsx(mw,{}),h.jsx(gw,{}),h.jsx(xw,{}),h.jsx(vw,{onAddToCart:o}),h.jsx(yw,{onAddToCart:o}),h.jsx(Sw,{}),h.jsx(Mw,{})]}),h.jsx(Ew,{}),h.jsx(ww,{isOpen:t,onClose:()=>r(!1),cartItems:s,onUpdateQuantity:l,onRemoveItem:u,onClearCart:d}),h.jsx(bw,{})]})}Zx.createRoot(document.getElementById("root")).render(h.jsx(Gx.StrictMode,{children:h.jsx(Tw,{})}));
